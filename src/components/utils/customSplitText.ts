export class SplitText {
  elements: HTMLElement[] = [];
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  lines: HTMLElement[] = [];
  originalContent: string[] = [];

  constructor(target: any, options: { type?: string; linesClass?: string } = {}) {
    const types = options.type ? options.type.split(',') : ['words'];
    const linesClass = options.linesClass || '';

    let targets: HTMLElement[] = [];
    if (typeof target === 'string') {
      targets = Array.from(document.querySelectorAll(target));
    } else if (Array.isArray(target)) {
      target.forEach(t => {
        if (typeof t === 'string') {
          targets.push(...Array.from(document.querySelectorAll(t) as NodeListOf<HTMLElement>));
        } else if (t instanceof HTMLElement) {
          targets.push(t);
        }
      });
    } else if (target instanceof HTMLElement) {
      targets.push(target);
    } else if (target instanceof NodeList) {
      targets = Array.from(target) as HTMLElement[];
    }

    this.elements = targets;

    targets.forEach(elem => {
      this.originalContent.push(elem.innerHTML);

      const childNodes = Array.from(elem.childNodes);
      elem.innerHTML = ''; 

      const wordSpans: HTMLElement[] = [];
      const charSpans: HTMLElement[] = [];

      childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          const text = node.textContent || '';
          const wordsArray = text.split(/(\s+)/);
          wordsArray.forEach((word) => {
            if (word === '') return;
            if (/^\s+$/.test(word)) {
              elem.appendChild(document.createTextNode(word));
              return;
            }
            
            const wordSpan = document.createElement('span');
            wordSpan.style.display = 'inline-block';
            wordSpan.className = 'split-word';

            if (types.includes('chars')) {
              for (let i = 0; i < word.length; i++) {
                const charSpan = document.createElement('span');
                charSpan.style.display = 'inline-block';
                charSpan.className = 'split-char';
                charSpan.textContent = word[i];
                wordSpan.appendChild(charSpan);
                charSpans.push(charSpan);
              }
            } else {
              wordSpan.textContent = word;
            }

            elem.appendChild(wordSpan);
            wordSpans.push(wordSpan);
          });
        } else if (node.nodeName === 'BR') {
          elem.appendChild(document.createElement('br'));
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const el = node as HTMLElement;
          const text = el.textContent || '';
          el.innerHTML = ''; 
          
          const wordsArray = text.split(/(\s+)/);
          wordsArray.forEach((word) => {
            if (word === '') return;
            if (/^\s+$/.test(word)) {
              el.appendChild(document.createTextNode(word));
              return;
            }
            
            const wordSpan = document.createElement('span');
            wordSpan.style.display = 'inline-block';
            wordSpan.className = 'split-word';

            if (types.includes('chars')) {
              for (let i = 0; i < word.length; i++) {
                const charSpan = document.createElement('span');
                charSpan.style.display = 'inline-block';
                charSpan.className = 'split-char';
                charSpan.textContent = word[i];
                wordSpan.appendChild(charSpan);
                charSpans.push(charSpan);
              }
            } else {
              wordSpan.textContent = word;
            }

            el.appendChild(wordSpan);
            wordSpans.push(wordSpan);
          });
          elem.appendChild(el);
        }
      });

      this.words.push(...wordSpans);
      this.chars.push(...charSpans);

      if (types.includes('lines')) {
        const linesMap: { [key: number]: HTMLElement[] } = {};
        wordSpans.forEach(w => {
          const top = w.offsetTop;
          if (!linesMap[top]) {
            linesMap[top] = [];
          }
          linesMap[top].push(w);
        });

        elem.innerHTML = '';
        
        const sortedTops = Object.keys(linesMap).map(Number).sort((a, b) => a - b);
        sortedTops.forEach(top => {
          const lineSpan = document.createElement('div');
          lineSpan.className = linesClass || 'split-line';
          lineSpan.style.display = 'block';
          
          const wordsInLine = linesMap[top];
          wordsInLine.forEach((w, idx) => {
            lineSpan.appendChild(w);
            if (idx < wordsInLine.length - 1) {
              lineSpan.appendChild(document.createTextNode(' '));
            }
          });
          elem.appendChild(lineSpan);
          this.lines.push(lineSpan);
        });
      }
    });
  }

  revert() {
    this.elements.forEach((elem, idx) => {
      elem.innerHTML = this.originalContent[idx];
    });
  }
}
