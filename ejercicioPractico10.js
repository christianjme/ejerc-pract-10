function userDeviceInfo(id){{
  const $id = document.getElementById(id),
  isMobile= {
    android: ()=> navigator.userAgent.match(/android/i),
    ios: ()=> navigator.userAgent.match(/iphone|ipad|ipod/i),
    windows: ()=> navigator.userAgent.match(/windows phone/i),
    any: function(){return this.android() || this.ios() || this.windows()}
  },
  isDesktop= {
    linux: ()=> navigator.userAgent.match(/linux/i),
    mac: ()=> navigator.userAgent.match(/mac os/i),
    windows: ()=> navigator.userAgent.match(/windows nt/i),
    any: function(){return this.linux() || this.mac() || this.windows()}
  },
  isBrowser= {
    chrome: ()=> navigator.userAgent.match(/chrome/i),
    safari: ()=> navigator.userAgent.match(/safari/i),
    firefox: ()=> navigator.userAgent.match(/firefox/i),
    opera: ()=> navigator.userAgent.match(/opera|opera mini/i),
    ie: ()=> navigator.userAgent.match(/msie|iemobile/i),
    edge: ()=> navigator.userAgent.match(/edge/i),
    any: function(){return this.ie() || this.edge() || this.chrome() || this.safari() || this.firefox() || this.opera()}
  }
  
  $id.innerHTML = `
    <ul>
    <li>user agent: ${navigator.userAgent}</li>
    <li>plataforma: ${isMobile.any() ? isMobile.any() : isDesktop.any()}</li>
    <li>navegador: ${isBrowser.any()}</li>
    </ul>
  `

  // contenido exclusivo:
  if (isDesktop.linux()) {
    $id.innerHTML += `<p><mark>Linux</mark></p>`
  }

  if (isDesktop.mac()) {
    $id.innerHTML += `<p><mark>Mac OS</mark></p>`
  }

  if (isDesktop.windows()) {
    $id.innerHTML += `<p><mark>Windows</mark></p>`
  }


}}

userDeviceInfo('user-device')