
const LightDom = subclass =>
  class LightDomMixin extends subclass {

  _attachDom(dom) {
    let styles = dom.querySelectorAll('style');

    for( var i = 0; i < styles.length; i++ ) {
      styles[i].parentNode.removeChild(styles[i]);
      if( this._stylesInserted ) continue;
      document.head.appendChild(styles[i]);
    }

    this.appendChild(dom);
  }

}

export default LightDom