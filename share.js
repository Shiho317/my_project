class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector(".mobile-menu__btn");
    this.DOM.container = document.querySelector("#global-container");
    this.DOM.cover = document.querySelector(".mobile-menu__cover");
    this.eventType = this._getEventType();
    this._addEvent();
  }

  _getEventType(){
    const isTouchCapable =
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof window.DocumentTouch) ||
      navigator.maxTouchPoints > 0 ||
      window.navigator.msMaxTouchPoints > 0;

    return isTouchCapable ? "touchstart" : "click";
  }

  _toggle() {
  this.DOM.container.classList.toggle("menu-open");
  }

  _addEvent(){
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
  }
}

new MobileMenu();

window.onload = function(){
  let loading = document.querySelector('.load');
  loading.classList.add('.onload');
}


const menu = document.querySelector('.mobile-menu');

const handleHover = function(e){
    if(e.target.classList.contains('main-title')){
        const link = e.target;
        const siblings = link.closest('.mobile-menu').querySelectorAll('.main-title');

        siblings.forEach(el => {
            if(el !== link) el.style.opacity = this;
        });
    }
};
menu.addEventListener('mouseover', handleHover.bind(0.5));
menu.addEventListener('mouseout', handleHover.bind(1));