
const LightDom = subclass =>
  class LightDomMixin extends subclass {

  _attachDom(dom) {
    
    // promote element styles to head
    let styles = dom.querySelectorAll('style');
    for( var i = 0; i < styles.length; i++ ) {
      styles[i].parentNode.removeChild(styles[i]);
      if( this._stylesInserted ) continue;
      styles[i].setAttribute('id', this.nodeName.toLowerCase()+'-styles');
      document.head.appendChild(styles[i]);
    }

    // set automatic node finding
    let ids = dom.querySelectorAll('[id]');
    this.$ = {};
    for( var i = 0; i < ids.length; i++ ) {
      this.$[ids[i].getAttribute('id')] = ids[i];
    }

    // append dom template to local dom (instead of a shadowroot)
    this.appendChild(dom);
  }

}

export default LightDom