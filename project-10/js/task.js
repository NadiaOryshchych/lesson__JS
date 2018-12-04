'use strict';
let start = document.querySelector('button');

class Options {
   constructor(height, width, bg, fontSize, textAlign) {
      this.height = height;
      this.width = width;
      this.bg = bg;
      this.fontSize = fontSize;
      this.textAlign = textAlign;
   }
   creatElement() {
      // let div = '<div>';
      // document.body.innerHTML += div;
      let div = document.createElement('div');
      document.body.appendChild(div);
      div.textContent = 'я наконец-то добавился';
      div.style.cssText = `height: ${this.height}px; \
         width: ${this.width}px;\
         background-color: ${this.bg}; \
         font-size: ${this.fontSize}px;\
         text-align: ${this.textAlign};`;
   }
}

//  const elem = new Options(200, 300, 'green', 14, 'center');
//  elem.creatElement();

start.addEventListener('click', function() {
   const elem = new Options(200, 300, 'green', 14, 'center');
   console.log('before');
   elem.creatElement();
   console.log('after');
      // let block = document.createElement('div');
      // document.body.appendChild(block)
      // block.style.color = 'red';
      // block.style.cssText = 'height:' + this.height + 'px;'
      //    'width:' + this.width + 'px;'
      //    'background-color:' + this.bg + ';'
      //    'font-size:' + this.fontSize + 'px;'
      //    'text-align:' + this.textAlign + ';';
});

