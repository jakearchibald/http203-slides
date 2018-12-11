import html from 'hyperhtml/esm';
import { easeInOutQuad } from 'preso/src/utils/css-ease';
import SlideItem from 'preso/src/slide-item';

export default class LoopingBg extends SlideItem {
  constructor() {
    super();
  }
  async addTitle(titleText) {
    const slide = this.closest('preso-slide');
    await slide.synchronize();
    const title = html`<div class="talk-title vertically-center">${titleText}</div>`;
    this.append(title);

    title.animate([{
      transform: 'translateZ(0px)'
    }, {
      transform: 'translateZ(400px)'
    }], {
      duration: 25000,
      easing: 'linear',
      fill: 'both'
    });

    title.animate([{
      opacity: '0'
    }, {
      opacity: '1'
    }], {
      duration: 2000,
      easing: easeInOutQuad,
      fill: 'both'
    });
  }
  async firstConnected(slide) {
    const width = 1920;
    const height = 1350;
    const strokeWidth = 20;
    const minSpace = 40;

    const circles = [];

    createCircles: while(true) {
      let x;
      let y;
      let r;
      let miss = 0;

      randomCircle: while (true) {
        x = Math.random() * width;
        y = Math.random() * height;
        r = 400;

        for (const circle of circles) {
          const xDiff = circle.x - x;
          const yDiff = circle.y - y;
          const distance = Math.sqrt((xDiff ** 2) + (yDiff ** 2));
          const space = distance - circle.r;

          if (space > -minSpace && space < minSpace) {
            // Circle is too close
            miss++;
            if (miss > 200) {
              break createCircles;
            }
            continue randomCircle;
          }

          r = Math.min(Math.abs(space) - strokeWidth, r);
        }

        break;
      }

      circles.push({x, y, r});
    }

    circles.sort((a, b) => {
      if (a.r < b.r) return 1;
      return -1;
    });

    await slide.synchronize();

    const zoomer = html`<div class="fit"></div>`;
    this.appendChild(zoomer);

    zoomer.animate([{
      transform: 'translateZ(350px)'
    }, {
      transform: 'translateZ(0px)'
    }], {
      duration: 60000,
      easing: 'ease-out',
      fill: 'both'
    });

    for (const [i, circle] of circles.entries()) {
      const boxSize = 20;
      const rotator = html`
        <svg width=${circle.r * 2 + strokeWidth} height=${circle.r * 2 + strokeWidth} class="rotator">
          <circle cx=${circle.r + strokeWidth / 2} cy=${circle.r + strokeWidth / 2} r=${circle.r} />
          <rect x=${circle.r + strokeWidth / 2 - boxSize / 2} y=${strokeWidth / 2 - boxSize / 2} width=${boxSize} height=${boxSize} />
        </svg>
      `;
      const scaler = html`<div class="scaler">${rotator}</div>`;
      scaler.style.animationDelay = `${i*200}ms`;
      const positioner = html`<div class="positioner">${scaler}</div>`;
      positioner.style.transform = `translate(${circle.x - circle.r - strokeWidth / 2}px, ${circle.y - circle.r - strokeWidth / 2}px) rotate(${Math.random() * 360}deg)`;
      zoomer.append(positioner);
    }
  }
}

customElements.define('looping-bg', LoopingBg);
