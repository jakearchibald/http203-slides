import css from './style.scss';
import html from 'hyperhtml/esm';
import Presentation from 'preso/src/presentation';
import Img from 'preso/src/img';
import Video from 'preso/src/video';
import Code from 'preso/src/code';
import { fadeBlank, fade, swap, slideFromRight, slideFromLeft } from 'preso/src/presentation/transitions';
import { fadeIn, fadeOut, sizeOut, slideFrom } from 'preso/src/utils/anims';
import { findText, getRelativeBoundingClientRect, wait } from 'preso/src/utils/dom';
import { easeInOutQuint, easeInOutQuad, easeInOutQuart, easeOutQuart } from 'preso/src/utils/css-ease';
import 'preso/src/presentation/slide/timeline';

import hljs from 'highlight.js/lib/highlight.js';
import css2 from 'highlight.js/lib/languages/css.js';

hljs.registerLanguage('css', css2);

const presentation = new Presentation();
presentation.noNotes = true;
presentation.width = 1920;
presentation.height = 1350;
const notes = (...args) => presentation.notes.set(...args);

document.body.append(presentation);
document.head.append(html`<style>${css}</style>`);

presentation.slide('', async slide => {
  slide.classList.add('sunny');

  await slide.next();
  
  let code;
  const codeOuter = html`<div class="code-outer" fade-in style="font-size: 56px">
    ${code = html`<preso-code code-lang="js">
      function Car(doors) {
        Vehicle.call(this, { doors: doors, wheels: 4 });
      }

      Car.prototype = (function() {
        function tmp() {}
        tmp.prototype = Vehicle.prototype;
        return new tmp();
      })();
    </preso-code>`}
  </div>`;
  slide.append(codeOuter);
});

presentation.transition(slideFromRight());

presentation.slide('', async slide => {
  slide.classList.add('sunny');
  
  let code;
  const codeOuter = html`<div class="code-outer" fade-in style="font-size: 56px">
    ${code = html`<preso-code code-lang="js">
      class Car extends Vehicle {
        constructor(doors) {
          super({ doors, wheels: 4 });
        }
      }
    </preso-code>`}
  </div>`;
  slide.append(codeOuter);
});


presentation.transition(slideFromRight());

presentation.slide('', async slide => {
  slide.classList.add('ocean');
  
  let code;
  const codeOuter = html`<div class="code-outer" fade-in style="font-size: 45px">
    ${code = html`<preso-code code-lang="js">
      function spin(options) {
        if (!options) options = {};
        var duration = ('duration' in options) ?
          options.duration : 1000;
        var direction = ('direction' in options) ?
          options.direction : 'clockwise';
        var easing = ('easing' in options) ?
          options.easing : 'ease-out';
        var iterations = ('iterations' in options) ?
          options.iterations : 1;
        // …
      }
    </preso-code>`}
  </div>`;
  slide.append(codeOuter);
});

presentation.transition(slideFromRight());

presentation.slide('', async slide => {
  slide.classList.add('ocean');
  
  let code;
  const codeOuter = html`<div class="code-outer" fade-in style="font-size: 45px">
    ${code = html`<preso-code code-lang="js">
      function spin({
        duration = 1000,
        direction = 'clockwise',
        easing = 'ease-out',
        iterations = 1,
      } = {}) {
        // …
      }

      function spin(options = {}) {
        const {
          duration = 1000,
          direction = 'clockwise',
          easing = 'ease-out',
          iterations = 1,
        } = options;
        // …
      }
    </preso-code>`}
  </div>`;
  slide.append(codeOuter);
  code.show(1, 8);
  await slide.next();
  code.show(1, 18);
});

presentation.transition(slideFromRight());

presentation.slide('', async slide => {
  slide.classList.add('day');
  
  let code;
  const codeOuter = html`<div class="code-outer" fade-in style="font-size: 76px">
    ${code = html`<preso-code code-lang="css">
      .whatever {
        width: 100px;
        height: 100px;
      }

      .whatever {
        --size: 100px;
        width: var(--size);
        height: var(--size);
      }
    </preso-code>`}
  </div>`;
  slide.append(codeOuter);
  code.show(1, 4);
  await slide.next();
  code.show(1, 10);
});

presentation.transition(slideFromRight());

presentation.slide('', async slide => {
  slide.classList.add('dawn');
  
  let code;
  const codeOuter = html`<div class="code-outer" fade-in style="font-size: 60px">
    ${code = html`<preso-code code-lang="js">
      ul.addEventListener('click', function(event) {
        let li = event.target;

        while (li && li.tagName !== 'li') {
          li = li.parentNode;
        }

        if (!li) return;
        // …
      });
    </preso-code>`}
  </div>`;
  slide.append(codeOuter);
});

presentation.transition(slideFromRight());

presentation.slide('', async slide => {
  slide.classList.add('dawn');
  
  let code;
  const codeOuter = html`<div class="code-outer" fade-in style="font-size: 60px">
    ${code = html`<preso-code code-lang="js">
      ul.addEventListener('click', (event) => {
        const li = event.target.closest('li');
        if (!li) return;
        // …
      });
    </preso-code>`}
  </div>`;
  slide.append(codeOuter);
});

presentation.transition(slideFromRight());

presentation.slide('', async slide => {
  slide.classList.add('love');
  
  let code;
  const codeOuter = html`<div class="code-outer" fade-in style="font-size: 55px">
    ${code = html`<preso-code code-lang="js">
      input = input.replace(/\+/g, ' ');
      var result = {};
      input.split('&').forEach(function(item) {
        var keyVal = item.split('=');
        result[keyVal[0]] = (keyVal.length > 1) ?
          decodeURIComponent(keyVal.slice(1).join('=')) :
          null;
      });
      console.log(result.foo);
    </preso-code>`}
  </div>`;
  slide.append(codeOuter);
});


presentation.transition(slideFromRight());

presentation.slide('', async slide => {
  slide.classList.add('love');
  
  let code;
  const codeOuter = html`<div class="code-outer" fade-in style="font-size: 55px">
    ${code = html`<preso-code code-lang="js">
      const result = new URLSearchParams(input);
      console.log(result.get('foo'));
    </preso-code>`}
  </div>`;
  slide.append(codeOuter);
});

presentation.transition(slideFromRight());

presentation.slide('', async slide => {
  slide.classList.add('sunny');
  
  let code;
  const codeOuter = html`<div class="code-outer" fade-in style="font-size: 52px">
    ${code = html`<preso-code code-lang="js">
      var reader = new FileReader();
      reader.onload = function() {
        var buffer = reader.result;
        // …
      };
      reader.onerror = function() {
        // …
      };
      reader.readAsArrayBuffer(blob);
    </preso-code>`}
  </div>`;
  slide.append(codeOuter);
});

presentation.transition(slideFromRight());

presentation.slide('', async slide => {
  slide.classList.add('sunny');
  
  let code;
  const codeOuter = html`<div class="code-outer" fade-in style="font-size: 52px">
    ${code = html`<preso-code code-lang="js">
      try {
        const buffer = await new Response(blob).arrayBuffer();
        // …
      } catch (err) {
        // …
      }
    </preso-code>`}
  </div>`;
  slide.append(codeOuter);
});

presentation.transition(slideFromRight());

presentation.slide('', async slide => {
  slide.classList.add('ocean');
  
  let code;
  const codeOuter = html`<div class="code-outer" fade-in style="font-size: 33px">
    ${code = html`<preso-code code-lang="js">
      const style = document.createElement('style');
      const id = anim + Math.random();
      style.textContent = \`
        @keyframe \$\{id} {
          from { transform: translateY(\$\{from}px); }
          to   { transform: translateY(\$\{to}px); }
        }
      \`;
      document.head.append(style);
      el.style.animation = \`\$\{id} \$\{duration}ms \$\{easing} forwards\`;
      const finished = new Promise((resolve, reject) => {
        const listener = (event) => {
          if (event.target !== el) return;
          if (event.type === 'animationcancel') {
            reject(new DOMException('Animation cancelled', 'AbortError'));
          } else {
            resolve();
          }
          el.removeEventListener('animationend', listener);
          el.removeEventListener('animationcancel', listener);
        };
        el.addEventListener('animationend', listener);
        el.addEventListener('animationcancel', listener);
      });
    </preso-code>`}
  </div>`;
  slide.append(codeOuter);
});

presentation.transition(slideFromRight());

presentation.slide('', async slide => {
  slide.classList.add('ocean');
  
  let code;
  const codeOuter = html`<div class="code-outer" fade-in style="font-size: 55px">
    ${code = html`<preso-code code-lang="js">
      const { finished } = el.animate([
        { transform: \`translateY(\$\{from}px)\` },
        { transform: \`translateY(\$\{to}px)\` },
      ], {
        duration, easing,
        fill: 'forwards',
      });
    </preso-code>`}
  </div>`;
  slide.append(codeOuter);
});

presentation.transition(slideFromRight());

presentation.slide('', async slide => {
  slide.classList.add('sunny');

  await slide.next();
  
  let code;
  const codeOuter = html`<div class="code-outer" fade-in style="font-size: 40px">
    ${code = html`<preso-code code-lang="js">
      navigator.serviceWorker.ready.then(async (swReg) => {
        const urls = ['/podcast.mp3', '/artwork.jpg'];
        const bgFetch = await swReg.backgroundFetch.fetch('my-fetch', urls, {
          title: 'Epsisode 5',
          icons: [{
            sizes: '300x300',
            src: '/podcast-icon.png',
            type: 'image/png',
          }],
          downloadTotal: 60 * 1024 * 1024,
        });
      });
    </preso-code>`}
  </div>`;
  slide.append(codeOuter);
});

presentation.transition(slideFromRight());

presentation.slide('', async slide => {
  slide.classList.add('ocean');
  
  let code;
  const codeOuter = html`<div class="code-outer" fade-in style="font-size: 50px">
    ${code = html`<preso-code code-lang="js">
      bgFetch.addEventListener('progress', () => {
        if (!bgFetch.downloadTotal) return;
        const percent = Math.round(
          bgFetch.downloaded / bgFetch.downloadTotal * 100
        );
        console.log(\`Download progress: \$\{percent}%\`);
      });
    </preso-code>`}
  </div>`;
  slide.append(codeOuter);
});

presentation.transition(slideFromRight());

presentation.slide('', async slide => {
  slide.classList.add('day');
  
  let code;
  const codeOuter = html`<div class="code-outer" fade-in style="font-size: 50px">
    ${code = html`<preso-code code-lang="js">
      bgFetch.match('/podcast.mp3').then(async (record) => {
        if (!record) {
          console.log('No record found');
          return;
        }

        console.log("Here's the request", record.request);
        const response = await record.responseReady;
        console.log("And here's the response", response);
      });
    </preso-code>`}
  </div>`;
  slide.append(codeOuter);
});

presentation.transition(slideFromRight());

presentation.slide('', async slide => {
  slide.classList.add('dawn');
  
  let code;
  const codeOuter = html`<div class="code-outer" fade-in style="font-size: 50px">
    ${code = html`<preso-code code-lang="js">
      addEventListener('backgroundfetchsuccess', (event) => {
        const bgFetch = event.registration;

        event.waitUntil(async function() {
          const cache = await caches.open('downloads');
          const records = await bgFetch.matchAll();
          const promises = records.map(async (record) => {
            const response = await record.responseReady;
            await cache.put(record.request, response);
          });
          await Promise.all(promises);
          event.updateUI({ title: 'Podcast ready to listen' });
        }());
      });
    </preso-code>`}
  </div>`;
  slide.append(codeOuter);
});

presentation.transition(slideFromRight());

presentation.slide('', async slide => {
  slide.classList.add('love');
  
  let code;
  const codeOuter = html`<div class="code-outer" fade-in style="font-size: 50px">
    ${code = html`<preso-code code-lang="js">
      addEventListener('backgroundfetchclick', (event) => {
        const bgFetch = event.registration;

        if (bgFetch.result === 'success') {
          clients.openWindow('/latest-podcasts');
        } else {
          clients.openWindow('/download-progress');
        }
      });
    </preso-code>`}
  </div>`;
  slide.append(codeOuter);
});

document.addEventListener('click', () => {
  document.documentElement.requestFullscreen();
});

document.body.append(html`<div class="next-btn" onclick=${event => { event.preventDefault(); presentation.next(); }} ontouchstart=${event => { event.preventDefault(); presentation.next(); }}>`);
document.body.append(html`<div class="prev-btn" onclick=${event => { event.preventDefault(); presentation.previous(); }} ontouchstart=${event => { event.preventDefault(); presentation.previous(); }}>`);
