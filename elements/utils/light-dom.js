export default class LightDom {

  _attachDom(dom) {
    let styles = dom.querySelectorAll('style');

    for( var i = 0; i < styles.length; i++ ) {
      styles[i].parent.removeChild(styles[i]);
      if( this._stylesInserted ) continue;
      document.head.appendChild(styles[i]);
    }

    this.appendChild(dom);
  }

}