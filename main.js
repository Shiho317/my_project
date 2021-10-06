document.addEventListener('DOMContentLoaded', function(){
  const ta = new TextAnimation('.intro__main');

  setTimeout(()=>{
    ta.animate();
  },1000);
});


class TextAnimation{
  constructor(el){
    this.el = document.querySelector(el);
    this.chars = this.el.innerHTML.trim().split("");
    this.el.innerHTML = this._splitText();
  }

  _splitText(){
    return this.chars.reduce((accu, curr)=>{
      curr = curr.replace(' ','&nbsp;');
      
      return `${accu}<span class="chars">${curr}</span>`;
    },"");
  }

  animate(){
    this.el.classList.toggle('inview');
  }
}







