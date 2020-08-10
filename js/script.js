document.onmousemove = function() {
   document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="https://chpic.su/_data/stickers/t/Thngs/Thngs_010.webp" id="something">');
   let big = document.getElementById ('something')
   big.style.position = 'fixed';
   
   document.onmousemove = function () {
      big.style.left = event.clientX - 250 + 'px';
      big.style.top = event.clientY - 200 + 'px';
   }
}
