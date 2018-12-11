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
import LoopingBg from './LoopingBg';

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

function titleSlide(presentation, title) {
  presentation.slide(title, async slide => {
    slide.classList.add('sunny');
    await slide.next();
    const bg = new LoopingBg();
    slide.append(bg);
    bg.addTitle(title);
  });
}

// START

presentation.slide('', async slide => {
  slide.classList.add('ocean');
  await slide.next();
  const bg = new LoopingBg();
  slide.append(bg);
  bg.addTitle('display: contents;');
});

presentation.slide('', async slide => {
  slide.classList.add('ocean', 'vertically-center');

  let code;
  const codeOuter = html`<div class="code-outer" fade-in style="font-size: 80px">
    ${code = html`<preso-code code-lang="css">
      .whatever {
        display: contents;
      }
    </preso-code>`}
  </div>`;
  slide.append(codeOuter);
});


titleSlide(presentation, 'Reporting Observer');
presentation.slide('Reporting Observer', async slide => {
  slide.classList.add('sunny');

  let outerCode;
  let code;
  slide.append(outerCode = html`<div class="code-outer code-medium" fade-in style="font-size: 46px">
    ${code = html`<preso-code code-lang="javascript">
const observer = new ReportingObserver((reports, observer) => {
  for (const report of reports) {
    // report.type is 'deprecation' or 'intervention'
    // ... send to analytics or something
  }
}});

observer.observe();
`}
  `);
});



presentation.slide('', async slide => {
  slide.classList.add('ocean');
  await slide.next();
  const bg = new LoopingBg();
  slide.append(bg);
  bg.addTitle('Scroll snap');
});

presentation.slide('', async slide => {
  slide.classList.add('ocean', 'vertically-center');

  let code;
  const codeOuter = html`<div class="code-outer" fade-in style="font-size: 53px">
    ${code = html`<preso-code code-lang="css">
      .gallery {
        scroll-snap-type: x mandatory;
        overflow-x: scroll;
        display: flex;
      }

      .gallery img {
        scroll-snap-align: center;
      }
    </preso-code>`}
  </div>`;

  slide.append(codeOuter);
});



titleSlide(presentation, 'Site Isolation');



presentation.slide('', async slide => {
  slide.classList.add('ocean');
  await slide.next();
  const bg = new LoopingBg();
  slide.append(bg);
  bg.addTitle('Named Workers');
});

presentation.slide('', async slide => {
  slide.classList.add('ocean', 'vertically-center');

  let code;
  const codeOuter = html`<div class="code-outer" fade-in style="font-size: 53px">
    ${code = html`<preso-code code-lang="js">
      const worker = new Worker(url, { name: 'whatever' });
    </preso-code>`}
  </div>`;

  slide.append(codeOuter);
});



titleSlide(presentation, 'Payment Handler');
presentation.slide('Payment Handler', async slide => {
  slide.classList.add('sunny');

  let outerCode;
  let code;
  slide.append(outerCode = html`<div class="code-outer code-medium" fade-in>
    ${code = html`<preso-code code-lang="javascript">
const request = new PaymentRequest([{
  supportedMethods: 'https://surmas.totally.legit.bank'
}], {
  total: {
    label: 'total',
    amount: { value: '10', currency: 'USD' }
  }
});
`}
  `);
});

presentation.slide('Payment Handler', async slide => {
  slide.classList.add('sunny');
  let outerCode, code;
  slide.append(outerCode = html`<div class="code-outer code-medium" fade-in style="font-size: 47px">`);
  outerCode.append(code = html`<preso-code code-lang="javascript">
const registration =
  await navigator.serviceWorker.register('service-worker.js');
registration.paymentManager.instruments.set(
  "https://surmas.totally.legit.bank",
  {
    name: 'Surma’s Totally Legit Bank',
    method: 'surmas.totally.legit.bank'
  }
);
`)
});

presentation.slide('Payment Handler', async slide => {
  slide.classList.add('sunny');
  let outerCode, code;
  slide.append(outerCode = html`<div class="code-outer code-medium" fade-in style="font-size: 47px">`);
  outerCode.append(code = html`<preso-code code-lang="javascript">
self.addEventListener('paymentrequest', e => {
  // ...
});
`)
});


presentation.slide('', async slide => {
  slide.classList.add('ocean-conic');
  await slide.next();
  const bg = new LoopingBg();
  slide.append(bg);
  bg.addTitle('Conic gradients');
});

presentation.slide('', async slide => {
  slide.classList.add('ocean-conic', 'vertically-center');

  let code;
  const codeOuter = html`<div class="code-outer" fade-in style="font-size: 53px">
    ${code = html`<preso-code code-lang="css">
      .ocean-conic {
        background-image: conic-gradient(
          from 34deg,
          #000046, #1CB5E0, #000046, #1CB5E0, #000046
        );
      }
    </preso-code>`}
  </div>`;

  slide.append(codeOuter);
});

titleSlide(presentation, 'AV1 Decoding');

presentation.slide('', async slide => {
  slide.classList.add('love');
  await slide.next();
  const bg = new LoopingBg();
  slide.append(bg);
  bg.addTitle('End of part 1');
});

presentation.slide('', async slide => {
  slide.classList.add('ocean');
  await slide.next();
  const bg = new LoopingBg();
  slide.append(bg);
  bg.addTitle('Async clipboard');
});

presentation.slide('', async slide => {
  slide.classList.add('ocean', 'vertically-center');

  let code;
  const codeOuter = html`<div class="code-outer" fade-in style="font-size: 59px">
    ${code = html`<preso-code code-lang="js">
      button.addEventListener('click', () => {
        const input = document.createElement('input');
        document.body.appendChild(input);
        input.value = text;
        input.focus();
        input.select();
        document.execCommand('copy');
      });
    </preso-code>`}
  </div>`;

  slide.append(codeOuter);
});

presentation.transition(slideFromRight());

presentation.slide('', async slide => {
  slide.classList.add('ocean');

  let code;
  const codeOuter = html`<div class="code-outer" fade-in style="font-size: 54px">
    ${code = html`<preso-code code-lang="js">
      button.addEventListener('click', async () => {
        await navigator.clipboard.writeText(text);
      });
    </preso-code>`}
  </div>`;

  slide.append(codeOuter);

  await slide.next();

  const codeOuter2 = html`<div class="code-outer" fade-in style="font-size: 54px">
    ${code = html`<preso-code code-lang="js">
      button.addEventListener('click', async () => {
        const text = await navigator.clipboard.readText();
        console.log(text);
      });
    </preso-code>`}
  </div>`;

  slide.append(codeOuter2);
});



titleSlide(presentation, 'Typed OM');

presentation.slide('Typed OM', async slide => {
  slide.classList.add('sunny');

  let outerCode;
  let code;
  slide.append(outerCode = html`<div class="code-outer code-medium" fade-in style="font-size: 47px">
    ${code = html`<preso-code code-lang="javascript">
styleMap = someElement.computedStyleMap()
  // <=> getComputedStyles(someElement)
styleMap = someElement.attributeStyleMap
  // <=> someElement.style

styleMap.get("opacity") // == {value: 1, unit: "number"}
styleMap.get("top") // == {value: 0, unit: "px"}
styleMap.get("margin-left") // == {value: 10, unit: "percent"}
</preso-code>`}
  </div>`);
  code.show(1,4);
  await slide.next();
  code.show(1, 99);
});

presentation.slide('Typed OM', async slide => {
  slide.classList.add('sunny');
  let outerCode;
  let code;
  slide.append(outerCode = html`<div class="code-outer code-medium" fade-in style="font-size: 47px">
    ${code = html`<preso-code code-lang="javascript">
      newValue = CSSNumericValue.parse("10px");
      newValue = new CSSUnitValue(10, "px")
      styleMap.set("top", newValue);

      styleMap.set(
        "margin-left",
        newValue.add(new CSSUnitValue(5, "px"))
      ); // => 15px!
    `}
  </div>`);
  outerCode.append();
  code.show(1, 3);
  await slide.next();
  code.show(1, 8);
});

presentation.slide('Typed OM', async slide => {
  slide.classList.add('sunny');
  let outerCode;
  let code;
  slide.append(outerCode = html`<div class="code-outer code-medium" fade-in style="font-size: 47px">
    ${code = html`<preso-code code-lang="javascript">
      styleMap.set(
        "margin-left",
        CSSNumericValue("10px")
          .add(new CSSUnitValue(5, "percent"))
      );
      /*
      => {
        operator: "sum",
        values: [
          {value: 10, unit: "px"},
          {value: 5, unit: "percent"}
        ]
      }
      */
    `}
  </div>`);
  code.show(1, 5);
  await slide.next();
  code.show(1, 99);
});



presentation.slide('', async slide => {
  slide.classList.add('ocean');
  await slide.next();
  const bg = new LoopingBg();
  slide.append(bg);
  bg.addTitle('updateViaCache');
});

presentation.slide('', async slide => {
  slide.classList.add('ocean', 'vertically-center');

  let code;
  const codeOuter = html`<div class="code-outer" fade-in style="font-size: 44px">
    ${code = html`<preso-code code-lang="js">
      navigator.serviceWorker.register('/service-worker.js', {
        updateViaCache: 'none',
      });
    </preso-code>`}
  </div>`;

  slide.append(codeOuter);
});



titleSlide(presentation, 'Desktop PWAs');



presentation.slide('', async slide => {
  slide.classList.add('ocean');
  await slide.next();
  const bg = new LoopingBg();
  slide.append(bg);
  bg.addTitle('bitmaprenderer');
});

presentation.slide('', async slide => {
  slide.classList.add('ocean', 'vertically-center');

  let code;
  const codeOuter = html`<div class="code-outer" fade-in style="font-size: 54px">
    ${code = html`<preso-code code-lang="js">
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('bitmaprenderer');
      const image = await createImageBitmap(imageBlob);
      context.transferFromImageBitmap(image);
    </preso-code>`}
  </div>`;

  slide.append(codeOuter);
});



titleSlide(presentation, 'Web Locks');

presentation.slide('Web Locks', async slide => {
  slide.classList.add('sunny', 'vertically-center');

  let outerCode;
  let code;
  slide.append(outerCode = html`<div class="code-outer code-medium" fade-in>
    ${code = html`<preso-code code-lang="javascript">
await do_something_without_lock();

await navigator.locks.request('my_resource', async lock => {
   await do_something();
   await do_something_else();
});

await do_something_else_without_lock();
`}
  `);
});



presentation.slide('', async slide => {
  slide.classList.add('ocean');
  await slide.next();
  const bg = new LoopingBg();
  slide.append(bg);
  bg.addTitle('Feature-Policy');
});

presentation.slide('', async slide => {
  slide.classList.add('ocean');

  let code;
  const codeOuter = html`<div class="code-outer" fade-in style="font-size: 53px">
    ${code = html`<preso-code code-lang="plain">
      Feature-Policy: geolocation 'none'
    </preso-code>`}
  </div>`;

  slide.append(codeOuter);

  await slide.next();

  const codeOuter2 = html`<div class="code-outer" fade-in style="font-size: 53px">
    ${code = html`<preso-code code-lang="html">${`
      <iframe src="…" allow="geolocation 'none'"></iframe>
    `}</preso-code>`}
  </div>`;

  slide.append(codeOuter2);
});



titleSlide(presentation, 'CSS Paint API');

presentation.slide('CSS Paint API', async slide => {
  slide.classList.add('sunny');

  let code;
  slide.append(html`<div class="code-outer code-medium" fade-in style="font-size: 45px">
    ${code = html`<preso-code code-lang="html">
&lt;!doctype html>
&lt;style>
  main {
    border-image: paint(squircle-corners);
  }
&lt;/style>
&lt;main>&lt;/main>
&lt;script>
CSS.paintWorklet.addModule('squircle-corners.js');
&lt;/script>
</preso-code>`}
  </div>`);

  await slide.next();

  slide.append(html`<div class="code-outer code-medium" fade-in style="font-size: 45px">
    ${code = html`<preso-code code-lang="javascript">
registerPaint('squircle-corners', class {
  paint(ctx, geometry, properties) {
    // ... just like &lt;canvas>
  }
});
</preso-code>`}
  </div>`);

});



presentation.slide('', async slide => {
  slide.classList.add('ocean');
  await slide.next();
  const bg = new LoopingBg();
  slide.append(bg);
  bg.addTitle('Web Auth PublicKeyCredential');
});



titleSlide(presentation, 'toggleAttribute');
presentation.slide('toggleAttribute', async slide => {
  slide.classList.add('sunny', 'vertically-center');

  let outerCode;
  let code;
  slide.append(outerCode = html`<div class="code-outer code-medium" fade-in>
    ${code = html`<preso-code code-lang="javascript">
someElement.toggleAttribute('hidden');
    `}
  `);
});



presentation.slide('', async slide => {
  slide.classList.add('ocean');
  await slide.next();
  const bg = new LoopingBg();
  slide.append(bg);
  bg.addTitle('OffscreenCanvas');
});

presentation.slide('', async slide => {
  slide.classList.add('ocean', 'vertically-center');

  let code;
  const codeOuter = html`<div class="code-outer" fade-in style="font-size: 53px">
    ${code = html`<preso-code code-lang="js">
      const canvas = new OffscreenCanvas(256, 256);
    </preso-code>`}
  </div>`;

  slide.append(codeOuter);
});



titleSlide(presentation, 'Focus Management API');

presentation.slide('Focus Management API', async slide => {
  slide.classList.add('sunny', 'vertically-center');

  let code;
  slide.append(html`<div class="code-outer code-medium" fade-in>
    ${code = html`<preso-code code-lang="javascript">
someElement.focus();
someElement.focus({preventScroll: true});
</preso-code>`}
  </div>`);

  code.show(1,1);
  await slide.next();
  code.show(2,2);
  code.type(`{preventScroll: true}`);

});



presentation.slide('', async slide => {
  slide.classList.add('ocean');
  await slide.next();
  const bg = new LoopingBg();
  slide.append(bg);
  bg.addTitle('Sensors');
});

presentation.slide('', async slide => {
  slide.classList.add('ocean');

  await slide.next();

  let code;
  const codeOuter = html`<div class="code-outer" fade-in style="font-size: 44px">
    ${code = html`<preso-code code-lang="js">
      const accelerometer = new Accelerometer();
      const linearAccelerationSensor = new LinearAccelerationSensor();
      const gravitySensor = new GravitySensor();
      const gyroscope = new Gyroscope();
      const absoluteOrientationSensor = new AbsoluteOrientationSensor();
      const relativeOrientationSensor = new RelativeOrientationSensor();
    </preso-code>`}
  </div>`;

  slide.append(codeOuter);

  await slide.next();

  const codeOuter2 = html`<div class="code-outer" fade-in style="font-size: 44px">
    ${code = html`<preso-code code-lang="js">
      sensor.addEventListener('reading', () => {
        // …
      });
    </preso-code>`}
  </div>`;

  slide.append(codeOuter2);
});



titleSlide(presentation, 'BigInt');
presentation.slide('BigInt', async slide => {
  slide.classList.add('sunny');

  let outerCode;
  let code;
  slide.append(outerCode = html`<div class="code-outer code-medium" fade-in>
    ${code = html`<preso-code code-lang="javascript">
const bigNumber = 123456789012345678901234567890n;
typeof 123n; // → 'bigint'
    `}
  `);
  code.show(1,1);
  await slide.next();
  code.show(1,2);
});



presentation.slide('', async slide => {
  slide.classList.add('ocean');
  await slide.next();
  const bg = new LoopingBg();
  slide.append(bg);
  bg.addTitle('Lifecycle API');
});

presentation.slide('', async slide => {
  slide.classList.add('ocean', 'vertically-center');

  let code;
  const codeOuter = html`<div class="code-outer" fade-in style="font-size: 53px">
    ${code = html`<preso-code code-lang="js">
      document.addEventListener('freeze', (event) => {
        // The page is now frozen.
      });

      document.addEventListener('resume', (event) => {
        // The page has been unfrozen.
      });

      if (document.wasDiscarded) {
        // Page was previously discarded by the
        // browser while in a hidden tab.
      }
    </preso-code>`}
  </div>`;

  slide.append(codeOuter);
});



titleSlide(presentation, 'Server Timings');
presentation.slide('Server Timings', async slide => {
  slide.classList.add('sunny');

  let code;
  slide.append(html`<div class="code-outer code-medium" fade-in style="font-size: 43px">
    ${code = html`<preso-code code-lang="plain">
Server-Timing: missedCache
Server-Timing: missedCache, cpu;dur=2.4
Server-Timing: missedCache, cpu;dur=2.4;desc="Processing time"
</preso-code>`}
  </div>`);

  code.show(1,1);
  await slide.next();

  code.show(2,2);
  code.type(`, cpu;dur=2.4`);
  await slide.next();

  code.show(3,3);
  code.type(`;desc="Processing time"`);
  await slide.next();

  slide.append(html`<div class="code-outer code-medium" fade-in style="font-size: 43px">
    ${code = html`<preso-code code-lang="javascript">
let entries = performance.getEntriesByType('resource');
for(const entry of entries) {
  entry.serverTiming[0]
  // == {name: "missedCache", duration: 0.0 description: ""}
  entry.serverTiming[1]
  // == {name: "cpu", duration: 2.4, description: "Processing time"}
}
</preso-code>`}
  </div>`);
  code.show(1, 1);
  await slide.next();
  code.show(1, 2);
  await slide.next();
  code.show(1, 99);

});



presentation.slide('', async slide => {
  slide.classList.add('ocean');
  await slide.next();
  const bg = new LoopingBg();
  slide.append(bg);
  bg.addTitle('trimStart trimEnd');
});

presentation.slide('', async slide => {
  slide.classList.add('ocean');

  let code;
  const codeOuter = html`<div class="code-outer" fade-in style="font-size: 54px">
    ${code = html`<preso-code code-lang="js">
      ' hello world '.trim();      // 'hello world'
      ' hello world '.trimLeft();  // 'hello world '
      ' hello world '.trimRight(); // ' hello world'
      ' hello world '.trimStart(); // 'hello world '
      ' hello world '.trimEnd();   // ' hello world'
    </preso-code>`}
  </div>`;

  slide.append(codeOuter);

  code.show(1, 1);
  await slide.next();
  code.show(1, 3);
  await slide.next();
  code.show(1, 5);
});



titleSlide(presentation, 'import.meta');

presentation.slide('import.meta', async slide => {
  slide.classList.add('sunny');

  let code;
  slide.append(html`<div class="code-outer code-medium" fade-in>
    ${code = html`<preso-code code-lang="javascript">
import.meta.url;

document.currentScript.src;
</preso-code>`}
  </div>`);

  code.show(1, 1);
  await slide.next();
  code.show(1, 3);
});



presentation.slide('', async slide => {
  slide.classList.add('ocean');
  await slide.next();
  const bg = new LoopingBg();
  slide.append(bg);
  bg.addTitle('RegEx named capture groups');
});

presentation.slide('', async slide => {
  slide.classList.add('ocean');

  let code;
  const codeOuter = html`<div class="code-outer" fade-in style="font-size: 47px">
    ${code = html`<preso-code code-lang="js">
      const pattern = /(?&lt;year>\d{4})-(?&lt;month>\d{2})-(?&lt;day>\d{2})/;
      const result = pattern.exec('2018-12-25');
      const { year, month, day } = result.groups;
    </preso-code>`}
  </div>`;

  slide.append(codeOuter);
  await slide.next();

  const codeOuter2 = html`<div class="code-outer" fade-in style="font-size: 47px">
    ${code = html`<preso-code code-lang="js">
      const transformed = '2018-12-25'.replace(
        pattern,
        '$&lt;day>/$&lt;month>/$&lt;year>'
      );
      // "25/12/2018"
    </preso-code>`}
  </div>`;

  slide.append(codeOuter2);
});



titleSlide(presentation, 'Relative Time Format');
presentation.slide('Relative Time Format', async slide => {
  slide.classList.add('sunny');

  let outerCode;
  let code;
  slide.append(outerCode = html`<div class="code-outer code-medium" fade-in>
    ${code = html`<preso-code code-lang="javascript">
const rtf = new Intl.RelativeTimeFormat('en');

rtf.format(3.14, 'second');
// → 'in 3.14 seconds'

rtf.format(-15, 'minute');
// → '15 minutes ago'
`}
  `);
  code.show(1,1);
  await slide.next();
  code.show(1, 99);
});



presentation.slide('', async slide => {
  slide.classList.add('ocean');
  await slide.next();
  const bg = new LoopingBg();
  slide.append(bg);
  bg.addTitle('ResizeObserver');
});

presentation.slide('', async slide => {
  slide.classList.add('ocean', 'vertically-center');

  let code;
  const codeOuter = html`<div class="code-outer" fade-in style="font-size: 50px">
    ${code = html`<preso-code code-lang="js">
      const observer = new ResizeObserver((changes) => {
        for (const { target, contentRect } of changes) {
          // …
        }
      });

      observer.observe(element);
    </preso-code>`}
  </div>`;
  slide.append(codeOuter);
});



titleSlide(presentation, 'Audio Worklet');
presentation.slide('Audio Worklet', async slide => {
  slide.classList.add('sunny');

  let outerCode;
  let code;
  slide.append(outerCode = html`<div class="code-outer code-medium" fade-in style="font-size: 47px">
    ${code = html`<preso-code code-lang="javascript">
const audioCtx = new AudioContext();
const track = audioCtx.createMediaElementSource(audioElement);
const gainNode = audioCtx.createGain();
// Manipulate gainNode.gain.value ...
const panner = new StereoPannerNode(audioCtx, {pan: 0});
// Manipulate panner.pan.value ...
track
  .connect(gainNode)
  .connect(panner)
  .connect(audioCtx.destination);
</preso-code>`}
  </div>`);
});

presentation.slide('Audio Worklet', async slide => {
  slide.classList.add('sunny');
  let outerCode;
  let code;
  slide.append(outerCode = html`<div class="code-outer code-medium" fade-in style="font-size: 47px">
    ${code = html`<preso-code code-lang="javascript">
      // app.js
      const audioCtx = new AudioContext();
      await audioCtx.audioWorklet.addModule('surm-node.js');
      const track = audioCtx.createMediaElementSource(audioElement);
      const surmNode = new AudioWorkletNode(context, 'surm-node');
      track
        .connect(surmNode)
        .connect(audioCtx.destination);
    </preso-code>`}
  </div>`);
  await slide.next();
  outerCode.append(code = html`<preso-code code-lang="javascript">
// surm-node.js
class SurmNode extends AudioWorkletProcessor {
  process(inputs, outputs, parameters) {
    // ...
  }
}

registerProcessor('gain-processor', GainProcessor);
`);
});



presentation.slide('', async slide => {
  slide.classList.add('ocean');
  await slide.next();
  const bg = new LoopingBg();
  slide.append(bg);
  bg.addTitle('CacheMode');
});

presentation.slide('', async slide => {
  slide.classList.add('ocean', 'vertically-center');

  let code;
  const codeOuter = html`<div class="code-outer" fade-in style="font-size: 56px">
    ${code = html`<preso-code code-lang="js">
      const response = await fetch(url, {
        cache: 'reload',
        // or 'default'
        // or 'no-store'
        // or 'no-cache'
        // or 'force-cache'
        // or 'only-if-cached'
      });
    </preso-code>`}
  </div>`;
  slide.append(codeOuter);
});



titleSlide(presentation, 'Class fields');
presentation.slide('Class fields', async slide => {
  slide.classList.add('sunny');
  let outerCode;
  let code;
  slide.append(outerCode = html`<div class="code-outer code-medium" fade-in>
    ${code = html`<preso-code code-lang="javascript">
class MyClass {
  x = 4;
}
`}
  `);

});


// END

document.addEventListener('click', () => {
  document.documentElement.requestFullscreen();
});

document.body.append(html`<div class="next-btn" onclick=${event => { event.preventDefault(); presentation.next(); }} ontouchstart=${event => { event.preventDefault(); presentation.next(); }}>`);
document.body.append(html`<div class="prev-btn" onclick=${event => { event.preventDefault(); presentation.previous(); }} ontouchstart=${event => { event.preventDefault(); presentation.previous(); }}>`);
