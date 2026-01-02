var w,R,Ln,yn,On,C={},dn=[],oe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function E(e,n){for(var t in n)e[t]=n[t];return e}function qn(e){var n=e.parentNode;n&&n.removeChild(e)}function s(e,n,t){var r,i,a,o=arguments,c={};for(a in n)a=="key"?r=n[a]:a=="ref"?i=n[a]:c[a]=n[a];if(arguments.length>3)for(t=[t],a=3;a<arguments.length;a++)t.push(o[a]);if(t!=null&&(c.children=t),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)c[a]===void 0&&(c[a]=e.defaultProps[a]);return X(e,c,r,i,null)}function X(e,n,t,r,i){var a={type:e,props:n,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:i};return i==null&&(a.__v=a),w.vnode!=null&&w.vnode(a),a}function J(e){return e.children}function x(e,n){this.props=e,this.context=n}function M(e,n){if(n==null)return e.__?M(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?M(e):null}function jn(e){var n,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return jn(e)}}function Q(e){(!e.__d&&(e.__d=!0)&&R.push(e)&&!Y.__r++||yn!==w.debounceRendering)&&((yn=w.debounceRendering)||Ln)(Y)}function Y(){for(var e;Y.__r=R.length;)e=R.sort(function(n,t){return n.__v.__b-t.__v.__b}),R=[],e.some(function(n){var t,r,i,a,o,c,f;n.__d&&(c=(o=(t=n).__v).__e,(f=t.__P)&&(r=[],(i=E({},o)).__v=i,a=fn(f,o,i,t.__n,f.ownerSVGElement!==void 0,null,r,c??M(o)),Wn(r,o),a!=c&&jn(o)))})}function Bn(e,n,t,r,i,a,o,c,f,l){var u,h,d,p,m,_,y,g=r&&r.__k||dn,v=g.length;for(f==C&&(f=o!=null?o[0]:v?M(r,0):null),t.__k=[],u=0;u<n.length;u++)if((p=t.__k[u]=(p=n[u])==null||typeof p=="boolean"?null:typeof p=="string"||typeof p=="number"?X(null,p,null,null,p):Array.isArray(p)?X(J,{children:p},null,null,null):p.__e!=null||p.__c!=null?X(p.type,p.props,p.key,null,p.__v):p)!=null){if(p.__=t,p.__b=t.__b+1,(d=g[u])===null||d&&p.key==d.key&&p.type===d.type)g[u]=void 0;else for(h=0;h<v;h++){if((d=g[h])&&p.key==d.key&&p.type===d.type){g[h]=void 0;break}d=null}m=fn(e,p,d=d||C,i,a,o,c,f,l),(h=p.ref)&&d.ref!=h&&(y||(y=[]),d.ref&&y.push(d.ref,null,p),y.push(h,p.__c||m,p)),m!=null?(_==null&&(_=m),f=Hn(e,p,d,g,o,m,f),l||t.type!="option"?typeof t.type=="function"&&(t.__d=f):e.value=""):f&&d.__e==f&&f.parentNode!=e&&(f=M(d))}if(t.__e=_,o!=null&&typeof t.type!="function")for(u=o.length;u--;)o[u]!=null&&qn(o[u]);for(u=v;u--;)g[u]!=null&&In(g[u],g[u]);if(y)for(u=0;u<y.length;u++)Yn(y[u],y[++u],y[++u])}function Hn(e,n,t,r,i,a,o){var c,f,l;if(n.__d!==void 0)c=n.__d,n.__d=void 0;else if(i==t||a!=o||a.parentNode==null)n:if(o==null||o.parentNode!==e)e.appendChild(a),c=null;else{for(f=o,l=0;(f=f.nextSibling)&&l<r.length;l+=2)if(f==a)break n;e.insertBefore(a,o),c=o}return c!==void 0?c:a.nextSibling}function se(e,n,t,r,i){var a;for(a in t)a==="children"||a==="key"||a in n||I(e,a,null,t[a],r);for(a in n)i&&typeof n[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||t[a]===n[a]||I(e,a,n[a],t[a],r)}function _n(e,n,t){n[0]==="-"?e.setProperty(n,t):e[n]=t==null?"":typeof t!="number"||oe.test(n)?t:t+"px"}function I(e,n,t,r,i){var a,o;if(i&&n=="className"&&(n="class"),n==="style")if(typeof t=="string")e.style=t;else{if(typeof r=="string"&&(e.style=r=""),r)for(n in r)t&&n in t||_n(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||_n(e.style,n,t[n])}else n[0]==="o"&&n[1]==="n"?(a=n!==(n=n.replace(/Capture$/,"")),(o=n.toLowerCase())in e&&(n=o),n=n.slice(2),e.l||(e.l={}),e.l[n]=t,t?r||e.addEventListener(n,xn,a):e.removeEventListener(n,xn,a)):n!=="list"&&n!=="tagName"&&n!=="form"&&n!=="type"&&n!=="size"&&n!=="download"&&n!=="href"&&!i&&n in e?e[n]=t??"":typeof t!="function"&&n!=="dangerouslySetInnerHTML"&&(n!==(n=n.replace(/xlink:?/,""))?t==null||t===!1?e.removeAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase(),t):t==null||t===!1&&!/^ar/.test(n)?e.removeAttribute(n):e.setAttribute(n,t))}function xn(e){this.l[e.type](w.event?w.event(e):e)}function Xn(e,n,t){var r,i;for(r=0;r<e.__k.length;r++)(i=e.__k[r])&&(i.__=e,i.__e&&(typeof i.type=="function"&&i.__k.length>1&&Xn(i,n,t),n=Hn(t,i,i,e.__k,null,i.__e,n),typeof e.type=="function"&&(e.__d=n)))}function fn(e,n,t,r,i,a,o,c,f){var l,u,h,d,p,m,_,y,g,v,k,T=n.type;if(n.constructor!==void 0)return null;(l=w.__b)&&l(n);try{n:if(typeof T=="function"){if(y=n.props,g=(l=T.contextType)&&r[l.__c],v=l?g?g.props.value:l.__:r,t.__c?_=(u=n.__c=t.__c).__=u.__E:("prototype"in T&&T.prototype.render?n.__c=u=new T(y,v):(n.__c=u=new x(y,v),u.constructor=T,u.render=ue),g&&g.sub(u),u.props=y,u.state||(u.state={}),u.context=v,u.__n=r,h=u.__d=!0,u.__h=[]),u.__s==null&&(u.__s=u.state),T.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=E({},u.__s)),E(u.__s,T.getDerivedStateFromProps(y,u.__s))),d=u.props,p=u.state,h)T.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(T.getDerivedStateFromProps==null&&y!==d&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(y,v),!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(y,u.__s,v)===!1||n.__v===t.__v){u.props=y,u.state=u.__s,n.__v!==t.__v&&(u.__d=!1),u.__v=n,n.__e=t.__e,n.__k=t.__k,u.__h.length&&o.push(u),Xn(n,c,e);break n}u.componentWillUpdate!=null&&u.componentWillUpdate(y,u.__s,v),u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(d,p,m)})}u.context=v,u.props=y,u.state=u.__s,(l=w.__r)&&l(n),u.__d=!1,u.__v=n,u.__P=e,l=u.render(u.props,u.state,u.context),u.state=u.__s,u.getChildContext!=null&&(r=E(E({},r),u.getChildContext())),h||u.getSnapshotBeforeUpdate==null||(m=u.getSnapshotBeforeUpdate(d,p)),k=l!=null&&l.type==J&&l.key==null?l.props.children:l,Bn(e,Array.isArray(k)?k:[k],n,t,r,i,a,o,c,f),u.base=n.__e,u.__h.length&&o.push(u),_&&(u.__E=u.__=null),u.__e=!1}else a==null&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=le(t.__e,n,t,r,i,a,o,f);(l=w.diffed)&&l(n)}catch(ae){n.__v=null,w.__e(ae,n,t)}return n.__e}function Wn(e,n){w.__c&&w.__c(n,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(r){r.call(t)})}catch(r){w.__e(r,t.__v)}})}function le(e,n,t,r,i,a,o,c){var f,l,u,h,d,p=t.props,m=n.props;if(i=n.type==="svg"||i,a!=null){for(f=0;f<a.length;f++)if((l=a[f])!=null&&((n.type===null?l.nodeType===3:l.localName===n.type)||e==l)){e=l,a[f]=null;break}}if(e==null){if(n.type===null)return document.createTextNode(m);e=i?document.createElementNS("http://www.w3.org/2000/svg",n.type):document.createElement(n.type,m.is&&{is:m.is}),a=null,c=!1}if(n.type===null)p!==m&&e.data!==m&&(e.data=m);else{if(a!=null&&(a=dn.slice.call(e.childNodes)),u=(p=t.props||C).dangerouslySetInnerHTML,h=m.dangerouslySetInnerHTML,!c){if(a!=null)for(p={},d=0;d<e.attributes.length;d++)p[e.attributes[d].name]=e.attributes[d].value;(h||u)&&(h&&u&&h.__html==u.__html||(e.innerHTML=h&&h.__html||""))}se(e,m,p,i,c),h?n.__k=[]:(f=n.props.children,Bn(e,Array.isArray(f)?f:[f],n,t,r,n.type!=="foreignObject"&&i,a,o,C,c)),c||("value"in m&&(f=m.value)!==void 0&&f!==e.value&&I(e,"value",f,p.value,!1),"checked"in m&&(f=m.checked)!==void 0&&f!==e.checked&&I(e,"checked",f,p.checked,!1))}return e}function Yn(e,n,t){try{typeof e=="function"?e(n):e.current=n}catch(r){w.__e(r,t)}}function In(e,n,t){var r,i,a;if(w.unmount&&w.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Yn(r,null,n)),t||typeof e.type=="function"||(t=(i=e.__e)!=null),e.__e=e.__d=void 0,(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){w.__e(o,n)}r.base=r.__P=null}if(r=e.__k)for(a=0;a<r.length;a++)r[a]&&In(r[a],n,t);i!=null&&qn(i)}function ue(e,n,t){return this.constructor(e,t)}function D(e,n,t){var r,i,a;w.__&&w.__(e,n),i=(r=t===On)?null:t&&t.__k||n.__k,e=s(J,null,[e]),a=[],fn(n,(r?n:t||n).__k=e,i||C,C,n.ownerSVGElement!==void 0,t&&!r?[t]:i?null:n.childNodes.length?dn.slice.call(n.childNodes):null,a,t||C,r),Wn(a,e)}w={__e:function(e,n){for(var t,r;n=n.__;)if((t=n.__c)&&!t.__)try{if(t.constructor&&t.constructor.getDerivedStateFromError!=null&&(r=!0,t.setState(t.constructor.getDerivedStateFromError(e))),t.componentDidCatch!=null&&(r=!0,t.componentDidCatch(e)),r)return Q(t.__E=t)}catch(i){e=i}throw e}},x.prototype.setState=function(e,n){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=E({},this.state),typeof e=="function"&&(e=e(E({},t),this.props)),e&&E(t,e),e!=null&&this.__v&&(n&&this.__h.push(n),Q(this))},x.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Q(this))},x.prototype.render=J,R=[],Ln=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Y.__r=0,On=C;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var on=function(e,n){return on=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])},on(e,n)};function b(e,n){on(e,n);function t(){this.constructor=e}e.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}var z=function(){return z=Object.assign||function(n){for(var t,r=1,i=arguments.length;r<i;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},z.apply(this,arguments)},ce=(function(e){b(n,e);function n(){var t=e!==null&&e.apply(this,arguments)||this;return t.state={current:null,states:[],deregisterFn:null},t.selectState=function(r){var i=t.props.router.stateService,a=r.target.value;a&&i.go(a)},t}return n.prototype.componentDidMount=function(){var t=this,r=this.props.router,i=function(){return t.setState({states:r.stateRegistry.get().map(function(c){return c.name})})},a=function(c){return t.setState({current:c.to().name})};r.stateRegistry.onStatesChanged&&(this.deregisterStateListenerFn=r.stateRegistry.onStatesChanged(i));var o=r.transitionService.onSuccess({},a);this.setState({current:r.globals.current.name,states:[],deregisterFn:o}),i()},n.prototype.componentWillUnmount=function(){this.state.deregisterFn&&this.state.deregisterFn(),this.deregisterStateListenerFn&&this.deregisterStateListenerFn()},n.prototype.render=function(){return s("select",{value:this.state.current||"",onChange:this.selectState,style:{maxWidth:120}},s("option",{value:""},"Choose a state"),this.state.states.map(function(t){return s("option",{key:t,value:t},t)}))},n})(x),de=function(e){return function(n){return!!new RegExp("\\b"+e+"\\b").exec(n.className)}},pn=function(e){return function(n){return n.className=n.className+" "+e}},fe=function(e){return function(n){return n.className=n.className.replace(new RegExp("\\b"+e+"\\b","g"),"")}},pe=function(e){return function(n){de(e)(n)?fe(e)(n):pn(e)(n)}},he=function(e){return function(t,r,i){i.initialClientX,i.initialClientY;var a=i.lastClientX,o=i.lastClientY,c=i.newClientX,f=i.newClientY,l=e,u=l.getBoundingClientRect(),h=u.left,d=u.top,p=c-a,m=f-o;l.style.right="auto",l.style.bottom="auto",l.style.left=h+p+"px",l.style.top=d+m+"px"}},bn={move:he};function wn(e,n){var t=!1,r=0,i=0,a=0,o=0,c=function(f){t=!0,a=r=f.clientX,o=i=f.clientY;var l=function(h){if(t){h.preventDefault();var d=h.clientX,p=h.clientY;n(e,h,{initialClientX:r,initialClientY:i,lastClientX:a,lastClientY:o,newClientX:d,newClientY:p}),a=d,o=p}},u=function(h){t=!1,document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",u)};document.addEventListener("mousemove",l),document.addEventListener("mouseup",u)};return pn("draggable")(e),e.addEventListener("mousedown",c),function(){return e.removeEventListener("mousedown",c)}}var me=(function(e){b(n,e);function n(){var t=e!==null&&e.apply(this,arguments)||this;return t.goTimeout=null,t.handleCollapseClicked=function(){clearTimeout(t.goTimeout),t.props.node._collapsed=!t.props.node._collapsed,t.props.doLayout()},t.handleGoClicked=function(){clearTimeout(t.goTimeout);var r=t.props.node.name;r=r.replace(/\.\*\*$/,""),t.goTimeout=setTimeout(function(){return t.props.router.stateService.go(r)},200)},t}return n.prototype.render=function(){var t=this.props.renderer,r=this.props,i=r.node,a=r.x,o=r.y,c=r.nodeOptions,f=t.baseRadius,l=t.baseFontSize,u=t.baseNodeStrokeWidth,h=t.zoom,d=f*h,p=l*h,m=u*(i.entered?1.5:1)*h,_=["entered","retained","exited","active","inactive","future","highlight","collapsed"].filter(function(k){return i[k]}).join(" "),y=c&&c.classes?c.classes(i):"",g=_+" "+y,v=i.collapsed?i.totalDescendents:0;return s("g",{transform:"translate("+a+", "+o+")",onClick:this.handleGoClicked,onDblClick:this.handleCollapseClicked},s("circle",{className:g,"stroke-width":m,r:d}),i.collapsed?s("text",{className:"label","text-anchor":"middle","font-size":p*(v<10?1:.8)},"(",v,")"):"",t.labelRenderFn(a,o,i,c,t),s("text",{className:"label","text-anchor":"middle","font-size":p,transform:"translate(0, "+d*2+")"},i.label))},n})(x),hn={easeInOutCubic:function(e,n,t,r){return(e/=r/2)<1?t/2*e*e*e+n:t/2*((e-=2)*e*e+2)+n},easeInOutExpo:function(e,n,t,r){return e==0?n:e==r?n+t:(e/=r/2)<1?t/2*Math.pow(2,10*(e-1))+n:t/2*(-Math.pow(2,-10*--e)+2)+n},easeOutElastic:function(e,n,t,r){var o=1.70158,i=0,a=t;if(e==0)return n;if((e/=r)==1)return n+t;if(i||(i=r*.3),a<Math.abs(t)){a=t;var o=i/4}else var o=i/(2*Math.PI)*Math.asin(t/a);return a*Math.pow(2,-10*e)*Math.sin((e*r-o)*(2*Math.PI)/i)+t+n}};function mn(e,n,t){e.prototype=n.prototype=t,t.constructor=e}function Un(e,n){var t=Object.create(e.prototype);for(var r in n)t[r]=n[r];return t}function q(){}var P=.7,U=1/P,A="\\s*([+-]?\\d+)\\s*",F="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",N="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",ge=/^#([0-9a-f]{3,8})$/,ve=new RegExp("^rgb\\("+[A,A,A]+"\\)$"),ye=new RegExp("^rgb\\("+[N,N,N]+"\\)$"),_e=new RegExp("^rgba\\("+[A,A,A,F]+"\\)$"),xe=new RegExp("^rgba\\("+[N,N,N,F]+"\\)$"),be=new RegExp("^hsl\\("+[F,N,N]+"\\)$"),we=new RegExp("^hsla\\("+[F,N,N,F]+"\\)$"),Tn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};mn(q,L,{copy:function(e){return Object.assign(new this.constructor,this,e)},displayable:function(){return this.rgb().displayable()},hex:Vn,formatHex:Vn,formatHsl:Te,formatRgb:kn,toString:kn});function Vn(){return this.rgb().formatHex()}function Te(){return $n(this).formatHsl()}function kn(){return this.rgb().formatRgb()}function L(e){var n,t;return e=(e+"").trim().toLowerCase(),(n=ge.exec(e))?(t=n[1].length,n=parseInt(n[1],16),t===6?Sn(n):t===3?new V(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1):t===8?B(n>>24&255,n>>16&255,n>>8&255,(n&255)/255):t===4?B(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|n&240,((n&15)<<4|n&15)/255):null):(n=ve.exec(e))?new V(n[1],n[2],n[3],1):(n=ye.exec(e))?new V(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=_e.exec(e))?B(n[1],n[2],n[3],n[4]):(n=xe.exec(e))?B(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=be.exec(e))?zn(n[1],n[2]/100,n[3]/100,1):(n=we.exec(e))?zn(n[1],n[2]/100,n[3]/100,n[4]):Tn.hasOwnProperty(e)?Sn(Tn[e]):e==="transparent"?new V(NaN,NaN,NaN,0):null}function Sn(e){return new V(e>>16&255,e>>8&255,e&255,1)}function B(e,n,t,r){return r<=0&&(e=n=t=NaN),new V(e,n,t,r)}function Ve(e){return e instanceof q||(e=L(e)),e?(e=e.rgb(),new V(e.r,e.g,e.b,e.opacity)):new V}function sn(e,n,t,r){return arguments.length===1?Ve(e):new V(e,n,t,r??1)}function V(e,n,t,r){this.r=+e,this.g=+n,this.b=+t,this.opacity=+r}mn(V,sn,Un(q,{brighter:function(e){return e=e==null?U:Math.pow(U,e),new V(this.r*e,this.g*e,this.b*e,this.opacity)},darker:function(e){return e=e==null?P:Math.pow(P,e),new V(this.r*e,this.g*e,this.b*e,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Nn,formatHex:Nn,formatRgb:En,toString:En}));function Nn(){return"#"+Z(this.r)+Z(this.g)+Z(this.b)}function En(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(e===1?")":", "+e+")")}function Z(e){return e=Math.max(0,Math.min(255,Math.round(e)||0)),(e<16?"0":"")+e.toString(16)}function zn(e,n,t,r){return r<=0?e=n=t=NaN:t<=0||t>=1?e=n=NaN:n<=0&&(e=NaN),new S(e,n,t,r)}function $n(e){if(e instanceof S)return new S(e.h,e.s,e.l,e.opacity);if(e instanceof q||(e=L(e)),!e)return new S;if(e instanceof S)return e;e=e.rgb();var n=e.r/255,t=e.g/255,r=e.b/255,i=Math.min(n,t,r),a=Math.max(n,t,r),o=NaN,c=a-i,f=(a+i)/2;return c?(n===a?o=(t-r)/c+(t<r)*6:t===a?o=(r-n)/c+2:o=(n-t)/c+4,c/=f<.5?a+i:2-a-i,o*=60):c=f>0&&f<1?0:o,new S(o,c,f,e.opacity)}function ke(e,n,t,r){return arguments.length===1?$n(e):new S(e,n,t,r??1)}function S(e,n,t,r){this.h=+e,this.s=+n,this.l=+t,this.opacity=+r}mn(S,ke,Un(q,{brighter:function(e){return e=e==null?U:Math.pow(U,e),new S(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?P:Math.pow(P,e),new S(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=this.h%360+(this.h<0)*360,n=isNaN(e)||isNaN(this.s)?0:this.s,t=this.l,r=t+(t<.5?t:1-t)*n,i=2*t-r;return new V(nn(e>=240?e-240:e+120,i,r),nn(e,i,r),nn(e<120?e+240:e-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"hsl(":"hsla(")+(this.h||0)+", "+(this.s||0)*100+"%, "+(this.l||0)*100+"%"+(e===1?")":", "+e+")")}}));function nn(e,n,t){return(e<60?n+(t-n)*e/60:e<180?t:e<240?n+(t-n)*(240-e)/60:n)*255}function gn(e){return function(){return e}}function Se(e,n){return function(t){return e+t*n}}function Ne(e,n,t){return e=Math.pow(e,t),n=Math.pow(n,t)-e,t=1/t,function(r){return Math.pow(e+r*n,t)}}function Ee(e){return(e=+e)==1?Gn:function(n,t){return t-n?Ne(n,t,e):gn(isNaN(n)?t:n)}}function Gn(e,n){var t=n-e;return t?Se(e,t):gn(isNaN(e)?n:e)}var Cn=(function e(n){var t=Ee(n);function r(i,a){var o=t((i=sn(i)).r,(a=sn(a)).r),c=t(i.g,a.g),f=t(i.b,a.b),l=Gn(i.opacity,a.opacity);return function(u){return i.r=o(u),i.g=c(u),i.b=f(u),i.opacity=l(u),i+""}}return r.gamma=e,r})(1);function Kn(e,n){n||(n=[]);var t=e?Math.min(n.length,e.length):0,r=n.slice(),i;return function(a){for(i=0;i<t;++i)r[i]=e[i]*(1-a)+n[i]*a;return r}}function Jn(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ze(e,n){return(Jn(n)?Kn:Qn)(e,n)}function Qn(e,n){var t=n?n.length:0,r=e?Math.min(t,e.length):0,i=new Array(r),a=new Array(t),o;for(o=0;o<r;++o)i[o]=Zn(e[o],n[o]);for(;o<t;++o)a[o]=n[o];return function(c){for(o=0;o<r;++o)a[o]=i[o](c);return a}}function Ce(e,n){var t=new Date;return e=+e,n=+n,function(r){return t.setTime(e*(1-r)+n*r),t}}function ln(e,n){return e=+e,n=+n,function(t){return e*(1-t)+n*t}}function De(e,n){var t={},r={},i;(e===null||typeof e!="object")&&(e={}),(n===null||typeof n!="object")&&(n={});for(i in n)i in e?t[i]=Zn(e[i],n[i]):r[i]=n[i];return function(a){for(i in t)r[i]=t[i](a);return r}}var un=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,en=new RegExp(un.source,"g");function Ae(e){return function(){return e}}function Re(e){return function(n){return e(n)+""}}function Me(e,n){var t=un.lastIndex=en.lastIndex=0,r,i,a,o=-1,c=[],f=[];for(e=e+"",n=n+"";(r=un.exec(e))&&(i=en.exec(n));)(a=i.index)>t&&(a=n.slice(t,a),c[o]?c[o]+=a:c[++o]=a),(r=r[0])===(i=i[0])?c[o]?c[o]+=i:c[++o]=i:(c[++o]=null,f.push({i:o,x:ln(r,i)})),t=en.lastIndex;return t<n.length&&(a=n.slice(t),c[o]?c[o]+=a:c[++o]=a),c.length<2?f[0]?Re(f[0].x):Ae(n):(n=f.length,function(l){for(var u=0,h;u<n;++u)c[(h=f[u]).i]=h.x(l);return c.join("")})}function Zn(e,n){var t=typeof n,r;return n==null||t==="boolean"?gn(n):(t==="number"?ln:t==="string"?(r=L(n))?(n=r,Cn):Me:n instanceof L?Cn:n instanceof Date?Ce:Jn(n)?Kn:Array.isArray(n)?Qn:typeof n.valueOf!="function"&&typeof n.toString!="function"||isNaN(n)?De:ln)(e,n)}function ne(e,n,t,r,i,a){i===void 0&&(i=function(){}),a===void 0&&(a=hn.easeOutElastic);var o=null,c=ze(n,e),f=function(l){if(t===-1)return i();o==null&&(o=l);var u=l-o,h=1;u<t&&(requestAnimationFrame(f),h=a(u,0,1,t)),r(c(h))};return requestAnimationFrame(f),function(){t=-1}}function Pe(e,n){return e.parent===n.parent?1:2}function Fe(e){return e.reduce(Le,0)/e.length}function Le(e,n){return e+n.x}function Oe(e){return 1+e.reduce(qe,0)}function qe(e,n){return Math.max(e,n.y)}function je(e){for(var n;n=e.children;)e=n[0];return e}function Be(e){for(var n;n=e.children;)e=n[n.length-1];return e}function ee(){var e=Pe,n=1,t=1,r=!1;function i(a){var o,c=0;a.eachAfter(function(d){var p=d.children;p?(d.x=Fe(p),d.y=Oe(p)):(d.x=o?c+=e(d,o):0,d.y=0,o=d)});var f=je(a),l=Be(a),u=f.x-e(f,l)/2,h=l.x+e(l,f)/2;return a.eachAfter(r?function(d){d.x=(d.x-a.x)*n,d.y=(a.y-d.y)*t}:function(d){d.x=(d.x-u)/(h-u)*n,d.y=(1-(a.y?d.y/a.y:1))*t})}return i.separation=function(a){return arguments.length?(e=a,i):e},i.size=function(a){return arguments.length?(r=!1,n=+a[0],t=+a[1],i):r?null:[n,t]},i.nodeSize=function(a){return arguments.length?(r=!0,n=+a[0],t=+a[1],i):r?[n,t]:null},i}function He(e){var n=0,t=e.children,r=t&&t.length;if(!r)n=1;else for(;--r>=0;)n+=t[r].value;e.value=n}function Xe(){return this.eachAfter(He)}function We(e,n){let t=-1;for(const r of this)e.call(n,r,++t,this);return this}function Ye(e,n){for(var t=this,r=[t],i,a,o=-1;t=r.pop();)if(e.call(n,t,++o,this),i=t.children)for(a=i.length-1;a>=0;--a)r.push(i[a]);return this}function Ie(e,n){for(var t=this,r=[t],i=[],a,o,c,f=-1;t=r.pop();)if(i.push(t),a=t.children)for(o=0,c=a.length;o<c;++o)r.push(a[o]);for(;t=i.pop();)e.call(n,t,++f,this);return this}function Ue(e,n){let t=-1;for(const r of this)if(e.call(n,r,++t,this))return r}function $e(e){return this.eachAfter(function(n){for(var t=+e(n.data)||0,r=n.children,i=r&&r.length;--i>=0;)t+=r[i].value;n.value=t})}function Ge(e){return this.eachBefore(function(n){n.children&&n.children.sort(e)})}function Ke(e){for(var n=this,t=Je(n,e),r=[n];n!==t;)n=n.parent,r.push(n);for(var i=r.length;e!==t;)r.splice(i,0,e),e=e.parent;return r}function Je(e,n){if(e===n)return e;var t=e.ancestors(),r=n.ancestors(),i=null;for(e=t.pop(),n=r.pop();e===n;)i=e,e=t.pop(),n=r.pop();return i}function Qe(){for(var e=this,n=[e];e=e.parent;)n.push(e);return n}function Ze(){return Array.from(this)}function nt(){var e=[];return this.eachBefore(function(n){n.children||e.push(n)}),e}function et(){var e=this,n=[];return e.each(function(t){t!==e&&n.push({source:t.parent,target:t})}),n}function*tt(){var e=this,n,t=[e],r,i,a;do for(n=t.reverse(),t=[];e=n.pop();)if(yield e,r=e.children)for(i=0,a=r.length;i<a;++i)t.push(r[i]);while(t.length)}function j(e,n){e instanceof Map?(e=[void 0,e],n===void 0&&(n=at)):n===void 0&&(n=it);for(var t=new O(e),r,i=[t],a,o,c,f;r=i.pop();)if((o=n(r.data))&&(f=(o=Array.from(o)).length))for(r.children=o,c=f-1;c>=0;--c)i.push(a=o[c]=new O(o[c])),a.parent=r,a.depth=r.depth+1;return t.eachBefore(st)}function rt(){return j(this).eachBefore(ot)}function it(e){return e.children}function at(e){return Array.isArray(e)?e[1]:null}function ot(e){e.data.value!==void 0&&(e.value=e.data.value),e.data=e.data.data}function st(e){var n=0;do e.height=n;while((e=e.parent)&&e.height<++n)}function O(e){this.data=e,this.depth=this.height=0,this.parent=null}O.prototype=j.prototype={constructor:O,count:Xe,each:We,eachAfter:Ie,eachBefore:Ye,find:Ue,sum:$e,sort:Ge,path:Ke,ancestors:Qe,descendants:Ze,leaves:nt,links:et,copy:rt,[Symbol.iterator]:tt};function lt(e,n){return e.parent===n.parent?1:2}function tn(e){var n=e.children;return n?n[0]:e.t}function rn(e){var n=e.children;return n?n[n.length-1]:e.t}function ut(e,n,t){var r=t/(n.i-e.i);n.c-=r,n.s+=t,e.c+=r,n.z+=t,n.m+=t}function ct(e){for(var n=0,t=0,r=e.children,i=r.length,a;--i>=0;)a=r[i],a.z+=n,a.m+=n,n+=a.s+(t+=a.c)}function dt(e,n,t){return e.a.parent===n.parent?e.a:t}function W(e,n){this._=e,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=n}W.prototype=Object.create(O.prototype);function ft(e){for(var n=new W(e,0),t,r=[n],i,a,o,c;t=r.pop();)if(a=t._.children)for(t.children=new Array(c=a.length),o=c-1;o>=0;--o)r.push(i=t.children[o]=new W(a[o],o)),i.parent=t;return(n.parent=new W(null,0)).children=[n],n}function pt(){var e=lt,n=1,t=1,r=null;function i(l){var u=ft(l);if(u.eachAfter(a),u.parent.m=-u.z,u.eachBefore(o),r)l.eachBefore(f);else{var h=l,d=l,p=l;l.eachBefore(function(v){v.x<h.x&&(h=v),v.x>d.x&&(d=v),v.depth>p.depth&&(p=v)});var m=h===d?1:e(h,d)/2,_=m-h.x,y=n/(d.x+m+_),g=t/(p.depth||1);l.eachBefore(function(v){v.x=(v.x+_)*y,v.y=v.depth*g})}return l}function a(l){var u=l.children,h=l.parent.children,d=l.i?h[l.i-1]:null;if(u){ct(l);var p=(u[0].z+u[u.length-1].z)/2;d?(l.z=d.z+e(l._,d._),l.m=l.z-p):l.z=p}else d&&(l.z=d.z+e(l._,d._));l.parent.A=c(l,d,l.parent.A||h[0])}function o(l){l._.x=l.z+l.parent.m,l.m+=l.parent.m}function c(l,u,h){if(u){for(var d=l,p=l,m=u,_=d.parent.children[0],y=d.m,g=p.m,v=m.m,k=_.m,T;m=rn(m),d=tn(d),m&&d;)_=tn(_),p=rn(p),p.a=l,T=m.z+v-d.z-y+e(m._,d._),T>0&&(ut(dt(m,l,h),l,T),y+=T,g+=T),v+=m.m,y+=d.m,k+=_.m,g+=p.m;m&&!rn(p)&&(p.t=m,p.m+=v-g),d&&!tn(_)&&(_.t=d,_.m+=y-k,h=l)}return h}function f(l){l.x*=n,l.y=l.depth*t}return i.separation=function(l){return arguments.length?(e=l,i):e},i.size=function(l){return arguments.length?(r=!1,n=+l[0],t=+l[1],i):r?null:[n,t]},i.nodeSize=function(l){return arguments.length?(r=!0,n=+l[0],t=+l[1],i):r?[n,t]:null},i}var cn={Tree:{layoutFn:mt,sortNodesFn:Dn,labelRenderFn:An,edgeRenderFn:Rn},Cluster:{layoutFn:gt,sortNodesFn:Dn,labelRenderFn:An,edgeRenderFn:Rn},Radial:{layoutFn:yt,sortNodesFn:ht,labelRenderFn:_t,edgeRenderFn:xt}},H=cn.Tree,vn={baseRadius:10,baseFontSize:12,baseStrokeWidth:2,baseNodeStrokeWidth:2,zoom:1,layoutFn:H.layoutFn,sortNodesFn:H.sortNodesFn,labelRenderFn:H.labelRenderFn,edgeRenderFn:H.edgeRenderFn};function ht(e,n){var t=n.layoutY-e.layoutY;if(t!==0)return t;var r=e.layoutX-n.layoutX;return r}function Dn(e,n){var t=e.layoutY-n.layoutY;if(t!==0)return t;var r=e.layoutX-n.layoutX;return r}function mt(e){var n=j(e),t=pt();return te(t(n))}function gt(e){var n=j(e),t=ee();return te(t(n))}function vt(e,n){var t=(e-90)/180*Math.PI,r=n,i=.5;return{x:i+r*Math.cos(t),y:i+r*Math.sin(t)}}function yt(e){var n=j(e),t=ee().size([360,.4]).separation(function(i,a){return(i.parent==a.parent?1:2)/i.depth}),r=t(n);r.each(function(i){var a=vt(i.x,i.y),o=i.data;o.layoutX=i.x,o.layoutY=i.y,o.x=a.x,o.y=a.y})}function te(e){return e.each(function(n){n.data.layoutX=n.data.x=n.x,n.data.layoutY=n.data.y=n.y}),e}function _t(e,n,t,r,i){var a=i.baseFontSize,o=i.zoom,c=a*o,f=r!=null&&r.label?r.label(t,$(t)):$(t),l=t.layoutX||0,u=l<180==!!t.children?"start":"end",h=l<180?l-90:l+90,d=(u==="start"?15:-15)*o,p="rotate("+h+"),translate("+d+", 0)";return s("text",{className:"name","text-anchor":u,transform:p,"font-size":c}," ",f," ")}function $(e){var n=e.name.split("."),t=n.pop();return t=="**"&&(t=n.pop()+".**"),t}function An(e,n,t,r,i){var a=i.baseFontSize,o=i.zoom,c=a*o,f=r!=null&&r.label?r.label(t,$(t)):$(t),l="rotate(-15),translate(0, "+-15*o+")";return s("text",{className:"name","text-anchor":"middle",transform:l,"font-size":c}," ",f," ")}function xt(e,n){var t=n.baseStrokeWidth*n.zoom,r=function(i){var a={x:i.animX,y:i.animY},o={x:i._parent.animX,y:i._parent.animY};return"M"+[a.x,a.y]+" "+[o.x,o.y]};return s("path",{d:r(e),"stroke-width":t,className:"link"})}function Rn(e,n){var t=n.baseStrokeWidth*n.zoom,r=function(i){var a={x:i.animX,y:i.animY},o={x:i._parent.animX,y:i._parent.animY},c=(a.y+o.y)/2;return"M "+a.x+" "+a.y+" C "+a.x+" "+c+", "+o.x+" "+c+", "+o.x+" "+o.y};return s("path",{d:r(e),"stroke-width":t,className:"link"})}function bt(e){var n=Object.create(e);return Object.defineProperty(n,"visible",{get:function(){if(this.entered)return!0;var t=this._parent&&(this._parent.collapsed||!this._parent.visible);return!t}}),Object.defineProperty(n,"children",{get:function(){return this._children.filter(function(t){return t.visible})}}),Object.defineProperty(n,"totalDescendents",{get:function(){return this._children.reduce(function(t,r){return t+r.totalDescendents},this._children.length)}}),Object.defineProperty(n,"collapsed",{get:function(){return!this.entered&&this._collapsed&&this._children.length}}),n}var wt={label:"",highlight:!1,active:!1,future:!1,retained:!1,entered:!1,exited:!1,inactive:!0},Tt=(function(e){b(n,e);function n(){var t=e!==null&&e.apply(this,arguments)||this;return t.state={nodes:[],layout:{}},t.nodes=[],t.unmounted=!1,t.cancelCurrentAnimation=function(){return null},t.doLayoutAnimation=function(){t.cancelCurrentAnimation();var r=t.getNodes();if(r.length){var i=r.filter(function(d){return d.name===""})[0];t.props.renderer.layoutFn(i),r.filter(function(d){return!d.visible}).forEach(function(d){for(var p=d._parent;p&&!p.visible;)p=p._parent;p&&(d.x=p.x,d.y=p.y)});var a=t.dimensions(),o=function(d){return d*a.scaleX+a.offsetX},c=function(d){return d*a.scaleY+a.offsetY},f=function(d){return{x:d.animX||t.props.width/2,y:d.animY||t.props.height/2}},l=r.map(f).map(function(d){return[d.x,d.y]}).reduce(function(d,p){return d.concat(p)},[]),u=r.map(function(d){return[o(d.x),c(d.y)]}).reduce(function(d,p){return d.concat(p)},[]),h=function(d){for(var p=d.length/2,m=0;m<p&&m<r.length;m++){var _=r[m];_.animX=d[m*2],_.animY=d[m*2+1]}t.setState({nodes:r})};t.cancelCurrentAnimation=ne(u,l,500,h,function(){return null},hn.easeInOutExpo)}},t.nodeForState=function(r,i){return r.filter(function(a){return a.name===i.name})[0]},t.updateStates=function(){var r=t.props.router,i=r.stateService.get().map(function(l){return l.$$state()}),a=t.nodes.map(Object.getPrototypeOf),o=i.filter(function(l){return a.indexOf(l)===-1}),c=a.filter(function(l){return i.indexOf(l)===-1}),f=t.nodes=t.nodes.slice();(o.length||c.length)&&(o.map(function(l){return bt(l)}).forEach(function(l){return f.push(l)}),c.map(function(l){return f.filter(function(u){return l.isPrototypeOf(u)})}).reduce(function(l,u){return l.concat(u)},[]).forEach(function(l){return f.splice(f.indexOf(l),1)}),f.forEach(function(l){return l._children=[]}),f.forEach(function(l){if(!(!l||!l.parent)){var u=t.nodeForState(f,l.parent);u&&(u._children.push(l),l._parent=u)}}),f.forEach(function(l){return l.future=!!l.lazyLoad})),!t.unmounted&&!t.deregisterStateListenerFn&&setTimeout(t.updateStates,1e3),t.setState({nodes:f},t.doLayoutAnimation)},t.updateNodes=function(r){var i=t.nodes.map(function(c){return Object.assign(c,wt)});if(i.forEach(function(c){return c.future=!!c.lazyLoad}),r){var a=r.treeChanges(),o=function(c){return t.nodeForState(t.nodes,c.state)};a.retained.concat(a.entering).map(o).filter(function(c){return c}).forEach(function(c){return c.entered=!0}),a.retained.map(o).filter(function(c){return c}).forEach(function(c){return c.retained=!0}),a.exiting.map(o).filter(function(c){return c}).forEach(function(c){return c.exited=!0}),a.to.slice(-1).map(o).filter(function(c){return c}).forEach(function(c){c.active=!0,c.label="active"})}t.setState({nodes:t.nodes},t.doLayoutAnimation)},t}return n.create=function(t,r,i){i===void 0&&(i={}),r||(r=document.createElement("div"),r.id="uirStateTree");var a=z(z({},i),{router:t}),o=function(){document.body.appendChild(r),D(s(n,a),r)};return document.readyState==="interactive"||document.readyState==="complete"?o():document.addEventListener("DOMContentLoaded",o,!1),r},n.prototype.componentDidMount=function(){var t=this,r=this.props.router.stateRegistry,i=this.props.router.transitionService;r.onStatesChanged&&(this.deregisterStateListenerFn=r.onStatesChanged(function(){return t.updateStates()})),this.updateStates(),this.deregisterHookFn=i.onSuccess({},function(c){return t.updateNodes(c)}),this.updateNodes();var a=this.props.router.globals.successfulTransitions.peekTail();a&&this.updateNodes(a);var o=this.props.router.globals.transition;o&&o.promise.then(function(){return t.updateNodes(o)})},n.prototype.componentWillReceiveProps=function(){var t=this.state.nodes;this.setState({nodes:t},this.updateStates)},n.prototype.dimensions=function(){var t=15,r=0,i=t*2,a=this.props.height||500,o=this.props.width||500,c=o-r*2,f=a-i*2;return{radius:t,offsetX:r,offsetY:i,scaleX:c,scaleY:f}},n.prototype.componentWillUnmount=function(){this.unmounted=!0,this.deregisterHookFn&&this.deregisterHookFn()},n.prototype.getNodes=function(){return this.nodes.slice().sort(this.props.renderer.sortNodesFn)},n.prototype.render=function(){var t=this,r=this.props.renderer,i=this.getNodes().filter(function(a){return a.visible&&a.animX&&a.animY});return s("div",{className:"statevis"},s("svg",{width:this.props.width,height:this.props.height},i.filter(function(a){return!!a.parent}).map(function(a){return r.edgeRenderFn(a,r)}),i.map(function(a){return s(me,{key:a.name,node:a,router:t.props.router,nodeOptions:t.props.nodeOptions,renderer:t.props.renderer,doLayout:t.doLayoutAnimation.bind(t),x:a.animX,y:a.animY})})))},n.defaultProps={height:350,width:250,renderer:vn},n})(x),Vt=(function(e){b(n,e);function n(){var t=e!==null&&e.apply(this,arguments)||this;return t.state={renderer:vn,presetName:"Tree"},t}return n.prototype.componentDidMount=function(){this.props.onRendererChange(this.state.renderer)},n.prototype.handleZoom=function(t){var r=t.target,i=parseFloat(r.value),a=z(z({},this.state.renderer),{zoom:i});this.setState({renderer:a}),this.props.onRendererChange(a)},n.prototype.handleLayout=function(t){var r=t.target.value,i=cn[r],a=z(z({},this.state.renderer),i);this.setState({renderer:a,presetName:r}),this.props.onRendererChange(a)},n.prototype.render=function(){return s("div",{className:"uirStateVisLayoutPrefs",style:{display:"flex",flexFlow:"column nowrap"},onMouseDown:function(t){return t.stopPropagation()}},s("div",{style:{flex:"1 1 auto",display:"flex",flexFlow:"row nowrap",alignItems:"center"}},s("div",null,"Layout:"),s("select",{style:{marginLeft:"auto",maxWidth:"100px"},onChange:this.handleLayout.bind(this),value:this.state.presetName},Object.keys(cn).map(function(t){return s("option",{value:t},t)}))),s("div",{style:{flex:"1 1 auto",display:"flex",flexFlow:"row nowrap",alignItems:"center"}},s("span",null,"Node size:"),s("input",{style:{marginLeft:"auto"},value:""+this.state.renderer.zoom,type:"range",min:"0.3",max:"3.0",step:"0.1",onInput:this.handleZoom.bind(this)}),s("span",null,this.state.renderer.zoom,"x")))},n})(x),kt=function(e){var n=e.size;return s("svg",{width:n,height:n,viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M1683 808l-742 741q-19 19-45 19t-45-19l-742-741q-19-19-19-45.5t19-45.5l166-165q19-19 45-19t45 19l531 531 531-531q19-19 45-19t45 19l166 165q19 19 19 45.5t-19 45.5z"}))},St=function(e){var n=e.size;return s("svg",{width:n,height:n,viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"}))},Nt=function(e){var n=e.size;return s("svg",{width:n,height:n,viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M1152 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm512-109v222q0 12-8 23t-20 13l-185 28q-19 54-39 91 35 50 107 138 10 12 10 25t-9 23q-27 37-99 108t-94 71q-12 0-26-9l-138-108q-44 23-91 38-16 136-29 186-7 28-36 28h-222q-14 0-24.5-8.5t-11.5-21.5l-28-184q-49-16-90-37l-141 107q-10 9-25 9-14 0-25-11-126-114-165-168-7-10-7-23 0-12 8-23 15-21 51-66.5t54-70.5q-27-50-41-99l-183-27q-13-2-21-12.5t-8-23.5v-222q0-12 8-23t19-13l186-28q14-46 39-92-40-57-107-138-10-12-10-24 0-10 9-23 26-36 98.5-107.5t94.5-71.5q13 0 26 10l138 107q44-23 91-38 16-136 29-186 7-28 36-28h222q14 0 24.5 8.5t11.5 21.5l28 184q49 16 90 37l142-107q9-9 24-9 13 0 25 10 129 119 165 170 7 8 7 22 0 12-8 23-15 21-51 66.5t-54 70.5q26 50 41 98l183 28q13 2 21 12.5t8 23.5z"}))},Et=function(e){var n=e.size;return s("svg",{width:n,height:n,viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M1008 1200v160q0 14-9 23t-23 9h-160q-14 0-23-9t-9-23v-160q0-14 9-23t23-9h160q14 0 23 9t9 23zm256-496q0 50-15 90t-45.5 69-52 44-59.5 36q-32 18-46.5 28t-26 24-11.5 29v32q0 14-9 23t-23 9h-160q-14 0-23-9t-9-23v-68q0-35 10.5-64.5t24-47.5 39-35.5 41-25.5 44.5-21q53-25 75-43t22-49q0-42-43.5-71.5t-95.5-29.5q-56 0-95 27-29 20-80 83-9 12-25 12-11 0-19-6l-108-82q-10-7-12-20t5-23q122-192 349-192 129 0 238.5 89.5t109.5 214.5zm-368-448q-130 0-248.5 51t-204 136.5-136.5 204-51 248.5 51 248.5 136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5-51-248.5-136.5-204-204-136.5-248.5-51zm768 640q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"}))},zt=(function(e){b(n,e);function n(){var t=e!==null&&e.apply(this,arguments)||this;return t.state={showRendererPrefs:!1},t}return n.prototype.render=function(){return s("div",{style:{width:"100%"}},s("div",{className:"uirStateVisControls"},s(ce,{router:this.props.router}),s("div",{style:{marginLeft:"auto",cursor:"pointer"},className:"uirStateVisIcons"},s("span",{className:"uirStateVisHover"},s(Et,{size:"16px"}),s("div",{className:"hoverBlock"},s("ul",null,s("li",null,"Click a node to activate that state."),s("li",null,"Select a state from the dropdown to activate that state."),s("li",null,"Double click a node to auto-collapse that section of the tree when inactive. Collapsed nodes are displayed with a dotted outline and the count of collapsed children."),s("li",null,"Lazy loaded states (including future states) are displayed with a dashed outline.")))),s("span",{className:"uirStateVisHover"},s(Nt,{size:"16px"}),s("div",{className:"hoverBlock"},s(Vt,{onRendererChange:this.props.onRendererChange}))),s("span",{className:"uirStateVisHover",onClick:this.props.onMinimize},s(kt,{size:"16px"}),s("div",null,s("span",{style:{float:"right"}},"Minimize")),s("div",null,"Minimize")),s("span",{className:"uirStateVisHover",onClick:this.props.onClose},s(St,{size:"16px"}),s("div",null,s("span",{style:{float:"right"}},"Close"))))))},n})(x),Ct=(function(e){b(n,e);function n(t){var r=e.call(this,t)||this;return r.deregisterFns=[],r.minimize=function(){var i=r.el,a=i.getBoundingClientRect();r.top=a.top+"px",r.left=a.left+"px",r.right=window.innerWidth-a.right+"px",r.bottom=window.innerHeight-a.bottom+"px",i.style.top="auto",i.style.left="auto",i.style.right=r.right,i.style.bottom=r.bottom;var o=function(){i.style.top="auto",i.style.left="auto",i.style.right=r.right,i.style.bottom=r.bottom,pe("minimized")(i),i.removeEventListener("click",o);var c=function(f){var l=i.getBoundingClientRect();i.style.top=l.top+"px",i.style.left=l.left+"px",i.style.right="auto",i.style.bottom="auto",i.removeEventListener("transitionend",c)};i.addEventListener("transitionend",c)};return pn("minimized")(i),setTimeout(function(){return i.style.right=i.style.bottom="0"},50),o},r.state={unminimize:null},r}return n.prototype.componentWillReceiveProps=function(t){if(this.props.minimized!==t.minimized){var r=this.state.unminimize;r?this.setState({unminimize:null},function(){return r()}):this.setState({unminimize:this.minimize()})}},n.prototype.componentWillUnmount=function(){this.deregisterFns.forEach(function(t){return t()})},n.prototype.componentDidMount=function(){typeof MutationObserver=="function"&&this.monitorResizeEvents()},n.prototype.monitorResizeEvents=function(){var t=this,r=this.el.style.width,i=this.el.style.height,a=new MutationObserver(function(c){c.forEach(function(f){if(f.attributeName=="style"){var l=f.target,u=l.style.width,h=l.style.height;if(u!==r||h!==i){r=u,i=h;var d=parseInt(u.replace(/px$/,"")),p=parseInt(h.replace(/px$/,""));t.props.onResize({width:d,height:p})}}})}),o={attributes:!0,childList:!1,characterData:!1,subtree:!1,attributeFilter:["style"]};a.observe(this.el,o),this.deregisterFns.push(function(){return a.disconnect()})},n.prototype.render=function(){var t=this;return s("div",{className:"uirStateVisContainer",ref:function(r){return t.el=r}},this.props.children)},n})(x);function re(e,n){n===void 0&&(n={});var t=n.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",t==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var Dt=`/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

#uirStateVisualizer {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: normal;
  vertical-align: baseline;
  line-height: 1;
  display: block;
  box-sizing: content-box;
}
#uirStateVisualizer svg {
  box-sizing: content-box;
}

.uirStateVisContainer {
  z-index: 999;
  position: fixed;
  right: 32px;
  bottom: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  transform: scale(1);
  transform-origin: right bottom;
  transition: right 0.5s ease, bottom 0.5s ease, transform 0.5s ease;
  overflow: hidden;
  resize: both;
}

.uirStateVisContainer.minimized {
  cursor: pointer;
  transform: scale(0.25);
  z-index: 1000;
}

.uirStateVisContainer:hover {
  outline: 2px solid rgba(0, 0, 0, 0.35);
}

.uirStateVisContainer:hover .uirStateVisControls {
  visibility: visible;
}

.uirStateVisContainer .uirStateVisControls {
  visibility: hidden;
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  justify-content: space-between;
  flex: 1 0 auto;
  z-index: 1;
}

.uirStateVisContainer .uirStateVisControls .uirStateVisIcons span svg {
  padding: 3px;
  fill: #777777;
}

.uirStateVisContainer .uirStateVisControls .uirStateVisIcons span:hover svg {
  fill: black;
}

.uirStateVisHover > div {
  transition: opacity 500ms ease;
  opacity: 0;
  height: 0;
  padding: 0;

  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;

  margin-top: 26px;
  font-size: 14px;
}

.uirStateVisHover > div.hoverBlock {
  left: 0;
  border-bottom: none;
  background: white;
}

.uirStateVisHover:hover > div.hoverBlock {
  border-bottom: 2px solid lightgrey;
}

.uirStateVisHover:hover > div {
  opacity: 1;
  height: auto;
}

.uirStateVisHover .uirStateVisLayoutPrefs {
  padding: 12px 24px;
}

.uirStateVisContainer .statevis {
  flex: 1 1 auto;
  transition: all 1s ease;
}

.uirStateVisWindowOverlay {
  display: none;
}

.minimized .uirStateVisWindowOverlay {
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
}

.statevis circle {
  /*r: 10;*/
  fill: #fff;
  stroke: grey;
  /*stroke-width: 3px;*/

  transition-property: r, fill, stroke, stroke-width;
  transition-duration: 350ms;
  transition-timing-function: ease-in-out;

  cursor: pointer;
}

.statevis text {
  transition-property: x, y, font-size, stroke, stroke-width;
  transition-duration: 350ms;
  transition-timing-function: ease-in-out;
}

.statevis circle.future {
  /*r: 10;*/
  stroke: grey;
  stroke-dasharray: 7, 5;
  /*stroke-width: 1px;*/
}

.statevis circle.entered {
  /*r: 10;*/
  stroke: black;
  fill: lightgreen;
}

.statevis circle.entered:after {
  content: '<text>Entered</text>';
}

.statevis circle.active {
  /*r: 15;*/
  fill: green;
  stroke: black;
}

.statevis circle.collapsed {
  stroke-dasharray: 2, 2;
}

.statevis text {
  font-family: sans-serif;
}

.statevis .link {
  fill: none;
  stroke: #ccc;
  /*stroke-width: 2px;*/
}

.statevis text.label {
  fill: grey;
  alignment-baseline: middle;
}

.draggable {
  cursor: move;
}

/*.draggable:hover {*/
/*outline: 3px solid rgba(0,0,0,0.15)*/
/*}*/
`;re(Dt);var At=(function(e){b(n,e);function n(){var t=e!==null&&e.apply(this,arguments)||this;return t.state={height:null,width:null,renderer:vn,minimized:!1},t.deregisterFns=[],t.svgWidth=function(){return t.props.width||t.state.width||350},t.svgHeight=function(){return(t.props.height||t.state.height||250)-25},t}return n.create=function(t,r,i,a){i===void 0&&(i={}),r||(r=document.createElement("div"),r.id="uirStateVisualizer");var o=Object.assign({},i,{router:t,minimizeAfter:2500,visualizationOptions:a}),c=function(){document.body.appendChild(r),D(s(n,o),r)};return document.readyState==="interactive"||document.readyState==="complete"?c():document.addEventListener("DOMContentLoaded",c,!1),r},n.prototype.dispose=function(){D(null,document.getElementById("uirStateVisualizer"),this.rootEl)},n.prototype.handleRendererChange=function(t){this.setState({renderer:t})},n.prototype.cancelAutoMinimize=function(){this.minimizeTimeout&&(clearTimeout(this.minimizeTimeout),this.minimizeTimeout=null)},n.prototype.componentWillUnmount=function(){this.deregisterFns.forEach(function(t){return t()})},n.prototype.draggable=function(){var t=this.windowEl.querySelector(".uirStateVisControls"),r=this.windowEl.querySelector(".statevis");this.deregisterFns.push(wn(t,bn.move(this.windowEl))),this.deregisterFns.push(wn(r,bn.move(this.windowEl)))},n.prototype.componentDidMount=function(){var t=this;if(this.draggable(),this.props.minimizeAfter){var r=function(){return t.setState({minimized:!0})};this.minimizeTimeout=setTimeout(r,this.props.minimizeAfter)}},n.prototype.render=function(){var t=this,r=this.state.minimized;return s("div",{ref:function(i){return t.rootEl=i},onMouseDown:this.cancelAutoMinimize.bind(this),onMouseEnter:this.cancelAutoMinimize.bind(this)},s(Ct,{minimized:this.state.minimized,ref:function(i){return t.windowEl=i&&i.el||t.windowEl},onResize:function(i){var a=i.width,o=i.height;return t.setState({width:a,height:o})}},s("div",{onClick:function(){return t.setState({minimized:!1})},className:"uirStateVisWindowOverlay "+(r?"minimized":"")}),s(zt,{router:this.props.router,onRendererChange:this.handleRendererChange.bind(this),onMinimize:function(){return t.setState({minimized:!0})},onClose:function(){return t.dispose()}}),s(Tt,{router:this.props.router,nodeOptions:this.props.visualizationOptions.node,width:this.svgWidth(),height:this.svgHeight(),renderer:this.state.renderer})))},n})(x),Rt=(function(e){b(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}return n.prototype.render=function(){var t=this,r=function(){return"uir-icon uir-icon-thumb-tack "+(t.props.pinned?"":"uir-rotate-35")},i=function(){return"uir-icon uirTranVis_tooltipRight "+(t.props.expanded?"uir-icon-toggle-on":"uir-icon-toggle-off")};return s("div",{className:"uirTranVis_panelHeading uirTranVis_heading"},s("div",{style:{cursor:"pointer"},onClick:this.props.togglePinned},s("i",{className:r()})),s("h3",{className:"uirTranVis_panelTitle"},"Transition #",this.props.transition.$id),s("div",{style:{cursor:"pointer"},onClick:this.props.toggleExpand},s("i",{className:i()})))},n})(x),ie=(function(e){b(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}return n.prototype.componentDidMount=function(){var t=this._ref;setTimeout(function(){var r=t.getElementsByClassName("uir-fade");[].slice.apply(r).forEach(function(i){return i.className+=" in"})},35)},n.prototype.render=function(){var t=this;return s("div",{ref:function(r){return t._ref=r}},s("div",{className:"uirTranVis_modal-backdrop uir-fade",style:{zIndex:1040}}),s("div",{tabIndex:-1,className:"uirTranVis_modal uir-fade",style:{zIndex:1050,display:"block"}},s("div",{className:"uirTranVis_modal-dialog modal-lg"},s("div",{className:"uirTranVis_modal-content"},this.props.children))))},n.show=function(t,r,i,a){var o=document.body.querySelector("#uirTranVis_modal");o||(o=document.createElement("div"),o.id="uirTranVis_modal",document.body.appendChild(o));var c=function(){return null},f=function(){return D(s(c,null),document.body,o)};D(s(a,{close:f,modalTitle:t,id:r,value:i}),o)},n})(x),Mt=(function(e){b(n,e);function n(){var t=e!==null&&e.apply(this,arguments)||this;return t.preStyle={display:"block",padding:"10px 30px",margin:"0"},t.state={show:!0},t}return n.prototype.toggle=function(){this.setState({show:!this.state.show})},n.prototype.render=function(){return s("div",null,this.state.show?s("pre",{style:this.preStyle},JSON.stringify(this.props.data,null,2)):!1)},n})(x),Pt=(function(e){b(n,e);function n(){var t=e!==null&&e.apply(this,arguments)||this;return t.close=function(){return t.props.close()},t}return n.prototype.render=function(){return s("div",null,s(ie,null,s("div",{className:"uirTranVis_modal-header uir-resolve-header"},s("div",{style:{fontSize:"20px"}},this.props.modalTitle,": ",this.props.id),s("button",{className:"uirTranVis_btn uirTranVis_btnXs uirTranVis_btnPrimary",onClick:this.close},s("i",{className:"uir-icon uir-iconw-close"}))),s("div",{className:"uirTranVis_modalBody"},s(Mt,{data:this.props.value})),s("div",{className:"uirTranVis_modalFooter"},s("button",{className:"uirTranVis_btn uirTranVis_btnPrimary",onClick:this.close},"Close"))))},n})(x);function G(e,n){return n.length<=e?n:n.substr(0,e-3)+"..."}function Ft(e){return e===void 0?"undefined":e===null?"null":typeof e=="object"&&typeof e.then=="function"?"[Promise]":e}function Lt(e){var n=[];function t(r){if(typeof r=="object"){if(n.indexOf(r)!==-1)return"[circular ref]";n.push(r)}return Ft(r)}return JSON.stringify(e,function(r,i){return t(i)}).replace(/\\"/g,'"')}var Mn=(function(e){b(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}return n.prototype.render=function(){var t=this.props,r=t.tuple,i=r.key,a=r.val,o=t.classes,c=t.modalTitle,f=function(){return ie.show(c,i,a,Pt)},l=function(){if(a===void 0)return s("span",{className:"uirTranVis_code"},"undefined");if(a===null)return s("span",{className:"uirTranVis_code"},"null");if(typeof a=="string")return s("span",{className:"uirTranVis_code"},'"',G(100,a),'"');if(typeof a=="number")return s("span",{className:"uirTranVis_code"},a.toString());if(typeof a=="boolean")return s("span",{className:"uirTranVis_code"},a.toString());if(Array.isArray(a))return s("span",{className:"link",onClick:f},"[Array]");if(typeof a=="object")return s("span",{className:"link",onClick:f},"[Object]");if(typeof a.toString=="function")return s("span",null,G(100,a.toString()))};return s("div",{className:o.div},s("div",{className:o.key},i,":"),s("div",{className:o.val},l()))},n})(x),K=(function(e){b(n,e);function n(){var t=e!==null&&e.apply(this,arguments)||this;return t.state={collapseFalsy:!0},t}return n.prototype.makeBuckets=function(t,r){var i=function(c){return{label:c.label,is:function(f){return f===c.value},value:c.value,count:0,data:{}}},a={label:"default",is:function(){return!0},count:0,data:{}},o=t.map(i).concat(a);return Object.keys(r).forEach(function(c){var f=o.find(function(l){return l.is(r[c])});f.data[c]=r[c],f.value=r[c],f.count++}),o},n.prototype.render=function(){var t=this,r=this.props,i=r.data,a=r.classes,o=r.modalTitle,c=this.props.groupedValues||n.falsyGroupDefinitions,f=this.props.enableGroupToggle||!1,l=this.state.collapseFalsy,u=this.makeBuckets(c,i),h=u.find(function(g){return g.label==="default"}),d=u.filter(function(g){return!!g.count&&g!==h}),p=d.reduce(function(g,v){return g+=v.count},0),m=Object.keys(h.data).map(function(g){return{key:g,val:h.data[g]}}),_=d.map(function(g){var v=Object.keys(g.data).sort().join(", "),k=g.value;return{key:v,val:k}}),y=f&&p>1;return s("div",{className:"uirTranVis_keysAndValues"},m.map(function(g){return s(Mn,{key:g.key,tuple:g,classes:a,modalTitle:o})}),y&&!!_.length&&s("a",{href:"javascript:void(0)",onClick:function(){return t.setState({collapseFalsy:!l})},className:"uirTranVis_keyValue"},l?"show":"hide"," ",p," ",d.map(function(g){return g.label}).join(" or ")," ","parameter values"),(!y||!this.state.collapseFalsy)&&_.map(function(g){return s(Mn,{key:g.key,tuple:g,classes:a,modalTitle:o})}))},n.falsyGroupDefinitions=[{value:void 0,label:"undefined"},{value:null,label:"null"},{value:"",label:"empty string"}],n})(x),Ot=(function(e){b(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}return n.prototype.render=function(){return s("div",{className:"uirTranVis_transSummary"},s("div",{className:"uirTranVis_summaryData"},s("span",null,"From:"),s("strong",null,this.props.trans.from().name||"(root)")),s("div",{className:"uirTranVis_summaryData"},s("span",null,"To:"),s("strong",null,this.props.trans.to().name||"(root)")),s("div",{className:"uirTranVis_summaryData"},s("span",null,"Result:"),s("div",null,s("strong",null,this.props.status),this.props.rejection?s("span",null,": ",this.props.rejection):null)),s("div",{className:"uirTranVis_summaryHeading"},"Parameter Values:"),s("div",null,s(K,{groupedValues:K.falsyGroupDefinitions,enableGroupToggle:!0,data:this.props.trans.params(),modalTitle:"Parameter value",classes:{div:"uirTranVis_keyValue",key:"",val:""}})))},n})(x),an=(function(e){b(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}return n.prototype.stateName=function(){var t=this.props.node,r=t&&t.state&&t.state.name;return r===""&&(r="(root)"),r&&r.split(".").reverse()[0]},n.prototype.params=function(){var t=this.props.node;return t&&t.paramSchema.reduce(function(r,i){return r[i.id]=t.paramValues[i.id],r},{})},n.prototype.resolves=function(){var t=function(a){return typeof a=="string"?a:G(30,Lt(a))},r=this.props.node,i=["$stateParams","$transition$","$state$",this.props.trans.constructor];return r&&r.resolvables.filter(function(a){return i.indexOf(a.token)===-1}).reduce(function(a,o){return a[t(o.token)]=o.data,a},{})},n.prototype.render=function(){if(!this.props.node)return null;var t=this.params(),r=this.resolves();return this.props.node?s("div",{className:"uirTranVis_nodeDetail"},s("div",{className:"uirTranVis_heading"},s("div",{className:"uirTranVis_nowrap uirTranVis_deemphasize"},"(",this.props.type," state)"),s("div",{className:"uirTranVis_stateName"},this.stateName())),!!Object.keys(t).length&&s("div",{className:"params"},s("div",{className:"uirTranVis_paramsLabel uirTranVis_deemphasize"},"Parameter values"),s(K,{data:this.params(),classes:{div:"uirTranVis_keyValue"},modalTitle:"Parameter value"})),!!Object.keys(r).length&&s("div",{className:"params resolve"},s("div",{className:"uirTranVis_resolveLabel uirTranVis_deemphasize"},"Resolved data"),s(K,{data:this.resolves(),classes:{div:"uirTranVis_keyValue"},modalTitle:"Resolved value"}))):null},n})(x),Pn=(function(e){b(n,e);function n(){var t=e!==null&&e.apply(this,arguments)||this;return t.height=1e3,t.renderCurve=function(){return s("path",{stroke:"white","stroke-width":"20",fill:"none",d:"M50 "+t.height+" V 70 Q50 20, 100 20 Q150 20, 150 70 V "+t.height})},t.renderVerticalLine=function(){return s("svg",{viewBox:"0 70 100 "+(t.height-70),className:"flowArrowSvg"},t.renderCurve())},t.renderCurveRU=function(){return s("svg",{viewBox:"0 0 100 "+t.height,className:"flowArrowSvg top"},t.renderCurve())},t.renderCurveRD=function(){return s("svg",{viewBox:"100 0 100 "+t.height,className:"flowArrowSvg top"},t.renderCurve())},t.renderArrowU=function(){return s("svg",{viewBox:"0 0 100 "+t.height,className:"flowArrowSvg top"},s("path",{stroke:"white","stroke-width":"20",fill:"none",d:"M50 "+t.height+" V 20 "}),s("polygon",{fill:"white",stroke:"white","stroke-width":"20",points:"50,20 35,40 65,40"}))},t.renderArrowD=function(){return s("svg",{viewBox:"0 0 100 "+t.height,className:"flowArrowSvg bottom"},s("path",{stroke:"white","stroke-width":"20",fill:"none",d:"M50 0 V "+(t.height-20)}),s("polygon",{fill:"white",stroke:"white","stroke-width":"20",points:"50,"+(t.height-20)+" 35,"+(t.height-40)+" 65,"+(t.height-40)}))},t}return n.prototype.render=function(){var t=this,r=function(i){switch(i){case"V":return t.renderVerticalLine();case"RU":return t.renderCurveRU();case"RD":return t.renderCurveRD();case"AU":return t.renderArrowU();case"AD":return t.renderArrowD();default:return null}};return s("div",{className:"flowArrowCell"},s("div",{style:{overflow:"hidden",position:"relative",flex:"1"}},r(this.props.top)),s("div",{style:{overflow:"hidden",position:"relative",flex:"1"}},r(this.props.bottom)))},n})(x),qt=(function(e){b(n,e);function n(){var t=e!==null&&e.apply(this,arguments)||this;return t.state={retained:[],enterExit:[]},t}return n.prototype.componentDidMount=function(){var t=this.props.transition,r=Object.assign({},t.treeChanges());["entering","exiting","retained"].forEach(function(u){return r[u]=r[u].filter(function(h){return!!h.state.name})});for(var i=function(u,h){var d=r[u][h];return d?d.state.name:""},a=function(u,h,d){return t.$id+"."+i(u,d)+"-"+i(h,d)},o=r.retained.map(function(u,h){return{key:a("retained","retained",h),to:u,toType:"retain",from:u,fromType:"retain"}}),c=[],f=Math.max(r.exiting.length,r.entering.length),l=0;l<f;l++)c.push({key:a("exiting","entering",l),to:r.entering[l],toType:r.entering[l]&&"enter",from:r.exiting[l],fromType:r.exiting[l]&&"exit"});this.setState({retained:o,enterExit:c})},n.prototype.render=function(){var t=this,r=this.state.retained||[],i=this.state.enterExit||[],a=i.filter(function(o){return!!o.toType}).length-1;return s("table",{className:"uirTranVis_paths"},s("thead",null,s("tr",null,s("th",null,"From Path"),s("th",null,"To Path"))),s("tbody",null,r.map(function(o){return s("tr",{key:o.key},s("td",{className:o.fromType,colSpan:2},s(an,{trans:t.props.transition,node:o.from,type:o.fromType})))}),i.map(function(o,c){return s("tr",{key:o.key},s("td",{colSpan:2},s("div",{className:"uirTranVis_Row"},s("div",{className:""+o.fromType},o.fromType?s("div",{className:"uirTranVis_nodeContent"},s(an,{trans:t.props.transition,node:o.from,type:o.fromType}),s(Pn,{bottom:"V",top:c?"V":o.toType?"RU":"AU"})):null),s("div",{className:""+o.toType},o.toType?s("div",{className:"uirTranVis_nodeContent"},s(Pn,{top:c?"V":o.fromType?"RD":"V",bottom:c==a?"AD":"V"}),s(an,{trans:t.props.transition,node:o.to,type:o.toType})):null))))})))},n})(x),jt=(function(e){b(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}return n.prototype.render=function(){var t=this;if(!this.props.open&&!this.props.pinned)return null;var r=function(){return"uirTranVis_transitionDetail uirTranVis_panel panel-default "+(t.props.pinned?"pin ":"")+(t.props.expanded?"expand ":"")+(t.props.open?"showDetail ":"")};return s("div",{className:r()},s(Rt,{transition:this.props.transition,pinned:this.props.pinned,expanded:this.props.expanded,togglePinned:this.props.togglePinned,toggleExpand:this.props.toggleExpand}),s("div",{className:"uirTranVis_panelBody"},s(Ot,{trans:this.props.transition,status:this.props.status,rejection:this.props.rejection}),s("hr",null),s(qt,{transition:this.props.transition})),s("div",{className:"uirTranVis_downArrow"}))},n})(x),Bt=(function(e){b(n,e);function n(){var t=e!==null&&e.apply(this,arguments)||this;return t.handleClick=function(){return t.props.toggleExpand()},t}return n.prototype.iconClass=function(){var t={running:"uir-icon uir-spin uir-iconw-spinner",success:"uir-icon uir-iconw-check",redirected:"uir-icon uir-iconw-share",ignored:"uir-icon uir-iconw-circle-o",error:"uir-icon uir-iconw-close"};return t[this.props.status]},n.prototype.render=function(){return this.props.transition?s("div",{className:this.props.status+" uirTranVis_historyEntry",onClick:this.handleClick},s("div",{className:"uirTranVis_historyEntrySummary"},s("div",{className:"uirTranVis_transId"},this.props.transition.$id),s("div",{className:"uirTranVis_status"},this.props.status,this.props.message?s("span",null,": ",this.props.message):null),s("div",{className:"uirTranVis_transName"},s("i",{className:this.iconClass()}),s("span",null,this.props.transition.to().name)))):null},n})(x),Ht=function(e){var n=!1,t=new Promise(function(i,a){e.then(function(o){return n?a({isCanceled:!0}):i(o)},function(o){return a(n?{isCanceled:!0}:o)})}),r={promise:t,isCanceled:!1,cancel:function(){r.isCanceled=n=!0}};return r},Xt=(function(e){b(n,e);function n(){var t=e!==null&&e.apply(this,arguments)||this;return t.transitionPromise=null,t.state={status:"running",message:null,rejection:null,pinned:!1,expanded:!1,open:!1,deregisterFunctions:[]},t.togglePin=function(){return t.setState({pinned:!t.state.pinned})},t.toggleExpand=function(){return t.setState({expanded:!t.state.expanded})},t.open=function(){return t.setState({open:!0})},t.close=function(){return t.setState({open:!1})},t}return n.prototype.componentDidMount=function(){var t=this,r=this.props.transition,i=function(l){t.transitionPromise.isCanceled||t.setState({message:l})},a=function(l){return l.name||"(root)"},o=[];o.push(r.onStart({},function(){return i("Starting...")},{priority:1e4})),o.push(r.onExit({},function(l,u){return i("Exiting "+a(u))},{priority:1e4})),o.push(r.onRetain({},function(l,u){return i("Retained "+a(u))},{priority:1e4})),o.push(r.onEnter({},function(l,u){return i("Entering "+a(u))},{priority:1e4})),o.push(r.onFinish({},function(){return i("Finishing...")})),this.setState({deregisterFunctions:o});var c=function(){return t.setState({status:"success",message:null})},f=function(l){if(!(l&&l.isCanceled)){var u="error",h=null;if(l){h=l&&l.message;var d=l&&l.type;if(d==2&&l.redirected===!0){u="redirected";var p=l.detail,m=p.name(),_=JSON.stringify(p.params());h=G(100,m+"("+_)+")"}d==5&&(u="ignored",h="All states and parameters in the To and From paths are identical.")}t.setState({status:u,rejection:h,message:null})}};this.transitionPromise=Ht(r.promise),this.transitionPromise.promise.then(c,f)},n.prototype.componentWillUnmount=function(){this.transitionPromise.cancel(),this.state.deregisterFunctions&&this.state.deregisterFunctions.forEach(function(t){return t()})},n.prototype.render=function(){return s("div",{onMouseEnter:this.open,onMouseLeave:this.close},s(jt,{transition:this.props.transition,status:this.state.status,rejection:this.state.rejection,pinned:this.state.pinned,expanded:this.state.expanded,open:this.state.open,togglePinned:this.togglePin,toggleExpand:this.toggleExpand}),s(Bt,{transition:this.props.transition,status:this.state.status,message:this.state.message,toggleExpand:this.toggleExpand}))},n})(x),Wt=`/*
    .uirTranVis_history is the breadcrumbs and transition details block.
    It fills the footer of the screen, and scrolls horizontally.
    Mouse clicks should pass through to the elements underneath.
*/

.uirTranVis_history {
    display: flex;
    align-items: flex-end;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 0 16px;
    overflow-x: scroll;
    z-index: 999;
    /* disable mouse clicks, hover, etc, for the overall div */
    pointer-events: none;
}

.uirTranVis_history > * {
    /* Enable mouse for any sub-elements (the breadcrumb elemetns and detail elements) */
    pointer-events: all;
    flex: 0 0 auto;
}

/*  workaround for modal screen, and chrome and safari not allowing it to be
    visible outside the .uirTranVis_history overflow while the .uirTranVis_history div is scrolled */
.fullScreen .uirTranVis_history {
    top: 0;
}

/* A single history entry (breadcrumb) arrow looking thing */
.uirTranVis_history .uirTranVis_historyEntry {
    position: relative;
    text-align: center;
    padding: 12px 30px;
    margin-bottom: 6px;
    margin-right: 6px;
    color: #000;
    cursor: pointer;
}


/* History entry arrow CSS */
.uirTranVis_history .uirTranVis_historyEntry:before,.uirTranVis_historyEntry:after {
    content: '';
    position: absolute;
    background: darkgrey;
    left: 0;
    height: 50.2%; /* +0.2% so firefox doesn't render a white line down the center */
    width: 100%;
    border: 1px solid black;
    box-sizing: border-box;
    z-index: -1;
}

.uirTranVis_history .uirTranVis_historyEntry:before {
    top: 0;
    border-bottom: 0;
    -webkit-transform: skew(40deg, 0deg);
    -ms-transform: skew(40deg, 0deg);
    transform: skew(40deg, 0deg);
}

.uirTranVis_history .uirTranVis_historyEntry:after {
    bottom: 0;
    border-top: 0;
    -webkit-transform: skew(-40deg, 0deg);
    -ms-transform: skew(-40deg, 0deg);
    transform: skew(-40deg, 0deg);
}

/*.uirTranVis_historyEntry::before height: 51% (|| ::after) */

/* Styling for breadcrumb contents */
.uirTranVis_historyEntry .uirTranVis_historyEntrySummary {
    color: white;
    white-space: nowrap;
    font-size: small;
}
.uirTranVis_historyEntry .uirTranVis_historyEntrySummary .uirTranVis_transId {
    position: absolute;
    top: 3px;
    left: 10px;
    font-size: smaller;
}
.uirTranVis_historyEntry .uirTranVis_historyEntrySummary .uirTranVis_status {
    position: absolute;
    bottom: 3px;
    left: 10px;
    font-size: smaller;
}
.uirTranVis_historyEntry .uirTranVis_historyEntrySummary .uirTranVis_transName {
    font-weight: bold;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center
}
.uirTranVis_historyEntry .uirTranVis_historyEntrySummary .uirTranVis_transName span {
    overflow: hidden;
    text-overflow: ellipsis;
    direction: rtl;
}

.uirTranVis_transSummary {
    margin: 8px 0;
}
.uirTranVis_transSummary .uirTranVis_summaryHeading {
    background-color: #f5f5f5;
    margin: 8px -16px;
    padding: 4px 16px;
}
.uirTranVis_transSummary .uirTranVis_summaryData {
    display: flex;
    flex-flow: row nowrap;
    align-items: baseline;
}
.uirTranVis_transSummary .uirTranVis_summaryData span {
    min-width: 60px;
    text-align: right;
    padding-right: 6px;
}
.uirTranVis_transSummary .uirTranVis_summaryData strong {
    overflow: hidden;
    text-overflow: ellipsis;
    direction: rtl;
}

.uirTranVis_history .uirTranVis_code {
    padding: 0px 2px;
    color: black;
    background: #e6e6e6;
    margin: 0;
    font-family: monospace;
}

/* breadcrumb/history entry color coding */
.uirTranVis_history .uirTranVis_historyEntry:before,.uirTranVis_historyEntry:after {
    background: #737373;
}
.uirTranVis_history .uirTranVis_historyEntry:hover:before,.uirTranVis_historyEntry:hover:after {
    background: #a6a6a6;
}

.uirTranVis_history .uirTranVis_historyEntry.success:before,.uirTranVis_historyEntry.success:after {
    background: #45803b;
}
.uirTranVis_history .uirTranVis_historyEntry.success:hover:before,.uirTranVis_historyEntry.success:hover:after {
    background: #19a600;
}


.uirTranVis_history .uirTranVis_historyEntry.error:before,.uirTranVis_historyEntry.error:after {
    background: #bf1f1d;
}
.uirTranVis_history .uirTranVis_historyEntry.error:hover:before,.uirTranVis_historyEntry.error:hover:after {
    background: #e62622;
}


.uirTranVis_history .uirTranVis_historyEntry.ignored:before,.uirTranVis_historyEntry.ignored:after {
    background: #e68b05;
}
.uirTranVis_history .uirTranVis_historyEntry.ignored:hover:before,.uirTranVis_historyEntry.ignored:hover:after {
    background: #ff9808;
}

.uirTranVis_history .uirTranVis_historyEntry.redirected:before,.uirTranVis_historyEntry.redirected:after {
    background: #e68b05;
}
.uirTranVis_history .uirTranVis_historyEntry.redirected:hover:before,.uirTranVis_historyEntry.redirected:hover:after {
    background: #ff9808;
}

.uirTranVis_history .uirTranVis_keyValue {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: baseline;
}

.uirTranVis_history .uirTranVis_keyValue + .uirTranVis_keyValue {
    margin-top: 3px;
}




/* The transition detail popover (when hovering over a breadcrumb) */
.uirTranVis_transitionDetail {
    border: 1px solid lightgrey;
    font-size: small;
    transition: box-shadow 0.5s ease,  border 1.0s ease
}

/* Pointer element points from the uirTranVis_transitionDetail to the breadcrumb */
.uirTranVis_transitionDetail .uirTranVis_downArrow {
    position: relative;
    width: 100%;
    bottom: -10px;
    margin-bottom: 10px;
}

.uirTranVis_transitionDetail .uirTranVis_downArrow:before, .uirTranVis_transitionDetail .uirTranVis_downArrow:after {
    content: "";
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    top: 100%;
    left: 50%;
    margin-left: -10px;
}

.uirTranVis_transitionDetail .uirTranVis_downArrow:before {
    border-top: 10px solid lightgray;
}

.uirTranVis_transitionDetail .uirTranVis_downArrow:after{
    border-top: 10px solid white;
    margin-top: -1px;
    z-index: 1;
}


/* The layout and styling of the transition detail popover */
/*.uirTranVis_transitionDetail .panel-heading {*/
    /*text-align: center;*/
/*}*/

.uirTranVis_transitionDetail table {
    border-collapse: collapse;
}

.uirTranVis_transitionDetail th {
    text-align: center;
    font-size: small;
}

.uirTranVis_transitionDetail .uirTranVis_heading {
    display: flex;
    flex-flow: row-reverse nowrap;
    justify-content: space-between;
    align-items: baseline;
}

.uirTranVis_transitionDetail .uirTranVis_heading > *  {
    flex: 0 1 auto;
}

.uirTranVis_transitionDetail .uirTranVis_heading > * i {
    transition: all 0.5s ease;
}

.uirTranVis_transitionDetail table.uirTranVis_paths {
    width: 100%;
}

.uirTranVis_transitionDetail table.uirTranVis_paths td {
    color: white;
    border: 0;
    font-size: small;
}

.uirTranVis_transitionDetail .uirTranVis_transSummary .uirTranVis_keyValue > div:nth-child(2){
    padding-left: 8px;
    font-weight: normal;
}


.uirTranVis_transitionDetail td {
    padding: 0;
}

.uirTranVis_transitionDetail td .flowArrowCell {
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    justify-content: space-between;
    width: 12px;
    transition: width 0.25s ease;
    height: auto;
    flex: 0 0 auto;
}
.uirTranVis_transitionDetail.expand td .flowArrowCell { width: 24px; }

.uirTranVis_transitionDetail .exit  .flowArrowSvg          { right: 0; }
.uirTranVis_transitionDetail .enter .flowArrowSvg          { left: 0; }
.uirTranVis_transitionDetail        .flowArrowSvg.bottom   { bottom: 0 }
.uirTranVis_transitionDetail        .flowArrowSvg.top      { top: 0 }
.uirTranVis_transitionDetail        .flowArrowSvg {
    position: absolute;
    width: 100%;
    height: auto;
    transition: width 0.25s ease;
}

/* color code path elements by retained/exited/entered */
.uirTranVis_transitionDetail .retain {
    background-color: #737273;
}

.uirTranVis_transitionDetail .exit {
    background-color: #7c1010;
}

.uirTranVis_transitionDetail .enter {
    background-color: #31592a;
}

.uirTranVis_transitionDetail .uirTranVis_deemphasize {
    color: #eaeaea;
    font-size: x-small;
}

/* Styling for parameter values and resolve values */
.uirTranVis_transitionDetail .params {
    background-color: rgba(255,255,255,0.15);
    padding: 0;
    opacity: 0;
    overflow: hidden;
    transition: opacity 1s ease;
    max-height: 0;
}

.uirTranVis_transitionDetail.expand .params {
    display: block;
    border-radius: 4px;
    box-shadow: 1px 1px 2px black;
    padding: 8px;
    max-height: 250px;
    overflow-y: auto;
    opacity: 1;
    margin: 8px 0;
}

.uirTranVis_transitionDetail.pin {
    box-shadow: 4px 4px 12px rgba(0,0,0,0.3);
    border: 1px solid black;
}

.uirTranVis_transitionDetail.pin .uirTranVis_downArrow:before {
    border-top-color: black;
}


/* When showing expanded details, put space between path elements */
.uirTranVis_transitionDetail.expand table.uirTranVis_paths td {
    max-height: 100px;
    vertical-align: top;
}

.uirTranVis_transitionDetail .uirTranVis_Row {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: stretch;
    min-width: 400px;
}

.uirTranVis_transitionDetail .uirTranVis_Row > div {
    flex: 1 0 50%;
    min-width: 0;
}

.uirTranVis_transitionDetail .uirTranVis_nodeContent {
    display: flex;
    flex-flow: row nowrap;
    min-height: 16px;
    transition: min-height 0.25s ease;
}

.uirTranVis_transitionDetail.expand .uirTranVis_nodeContent {
    height: 100%;
    min-height: 65px;
}

.uirTranVis_transitionDetail .uirTranVis_nodeDetail {
    flex: 1 1 auto;
    padding: 3px 7px;
    min-width: 0;
}

.uirTranVis_transitionDetail .uirTranVis_stateName {
    font-weight: bolder;
    margin-right: 16px;
    margin-left: 0;
}
.uirTranVis_transitionDetail .enter .uirTranVis_stateName {
    margin-right: 0;
    margin-left: 16px;
}

.uirTranVis_transitionDetail .uirTranVis_nowrap {
    white-space: nowrap;
}

.uirTranVis_history .uirTranVis_paramsLabel,
.uirTranVis_history .uirTranVis_resolveLabel {
    color: white;
    margin-top: -8px;
    text-align: center;
    font-weight: bold;
}


span.link {
    cursor: pointer;
    text-decoration: underline;
}


.uirTranVis_tooltipRight {
    display: inline;
    position: relative;
    transition: all 1.5s ease;
}

.uirTranVis_tooltipRight:after {
    color: rgba(0,0,0,0);
    text-decoration: none;
    transition: all 1.5s ease;
}

.uirTranVis_tooltipRight:hover:after {
    bottom: 0;
    color: rgba(0,0,0,0.5);
    content: attr(title);
    display: block;
    position: absolute;
    white-space: nowrap;
    font-size: smaller;
}



/* Bootstrap stuff */

.uirTranVis_modal .uirTranVis_btnPrimary {
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
}

.uirTranVis_modal .uirTranVis_btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
}

.uirTranVis_modal .uirTranVis_btnXs, .uirTranVis_btnGroupXs > .uirTranVis_btn {
    padding: 1px 5px;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 3px;
}

.uirTranVis_transition {
    max-width: 550px;
}

.uirTranVis_transitionDetail span.link {
    color: white;
}

.uirTranVis_history *:not(.fa):not(pre):not(.uirTranVis_code) {
    font-family: Arial, Helvetica, sans-serif;
}

.uirTranVis_transitionDetail .enter .uirTranVis_heading {
    flex-flow: row nowrap;
}
.uirTranVis_transitionDetail .uirTranVis_heading {
    display: flex;
    flex-flow: row-reverse nowrap;
    justify-content: space-between;
    align-items: baseline;
}

.uirTranVis_transitionDetail .retain .uirTranVis_heading {
    justify-content: center;
}

.uirTranVis_panel {
    margin-bottom: 20px;
    background-color: #fff;
    border: 1px solid lightgrey;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
    box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
}

.uirTranVis_panelHeading {
    color: #333;
    background-color: #f5f5f5;
    border-color: #ddd;

    padding: 10px 16px;
    border-bottom: 1px solid transparent;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}

.uirTranVis_panelTitle {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 16px;
    color: inherit;
}

.uirTranVis_panelBody {
    padding: 0 16px;
}





/* Styles go here */
.uir-fade {
    opacity: 0;
    -webkit-transition: opacity .15s linear;
    -o-transition: opacity .15s linear;
    transition: opacity .15s linear;
}

.uir-fade.in {
    opacity: 1;
}

.uirTranVis_modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: #000;
}

.uirTranVis_modal-backdrop.in {
    filter: alpha(opacity=50);
    opacity: .5;
}

.uirTranVis_modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display: block;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    outline: 0;
}


.uirTranVis_modal-dialog {
    position: relative;
    width: auto;
    margin: 10px;
}

.uirTranVis_modal-content {
    position: relative;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid #999;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 6px;
    outline: 0;
    -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
    box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
}

.uirTranVis_modal-header {
    padding: 16px;
    border-bottom: 1px solid #e5e5e5;
}

.uir-resolve-header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    background-color: cornflowerblue;
}

.uirTranVis_modalBody {
    color: black;
    position: relative;
    padding: 16px;
}

.uirTranVis_modalFooter {
    padding: 16px;
    text-align: right;
    border-top: 1px solid #e5e5e5;
}

.uir-icon {
    display: inline-block;
    height: 16px; width: 16px;
    margin: 4px;
    background-size: cover;
    background-position: 0 0;
}

.uir-spin {
    animation: uirspin 2s infinite;
    transform: rotate(0deg);
}

.uir-rotate-35 {
    transform: rotate(35deg);
    opacity: 0.5;
}

@keyframes uirspin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}


.uir-iconw-spinner       { background-image: url("../../images/w/16/spinner.png"); }
.uir-iconw-check         { background-image: url("../../images/w/16/check.png"); }
.uir-iconw-circle-o      { background-image: url("../../images/w/16/circle-o.png"); }
.uir-iconw-share         { background-image: url("../../images/w/16/share.png"); }
.uir-iconw-close         { background-image: url("../../images/w/16/close.png"); }

.uir-icon-thumb-tack     { background-image: url("../../images/16/thumb-tack.png"); }
.uir-icon-toggle-on      { background-image: url("../../images/16/toggle-on.png"); }
.uir-icon-toggle-off     { background-image: url("../../images/16/toggle-off.png"); }
`;re(Wt);var Yt=(function(e){b(n,e);function n(){var t=e!==null&&e.apply(this,arguments)||this;return t.deregisterFns=[],t.state={transitions:[],pointerEvents:"auto"},t.cancelPreviousAnim=null,t.onMouseMove=function(r){var i=Math.max(document.documentElement.clientHeight,window.innerHeight||0),a=i-r.clientY<65?"auto":"none";t.state.pointerEvents!=a&&t.setState({pointerEvents:a})},t}return n.create=function(t,r,i){i===void 0&&(i={}),r||(r=document.createElement("div"),r.id="uirTransitionVisualizer");var a=Object.assign({},i,{router:t}),o=function(){document.body.appendChild(r),D(s(n,a),r)};return document.readyState==="interactive"||document.readyState==="complete"?o():document.addEventListener("DOMContentLoaded",o,!1),r},n.prototype.componentDidMount=function(){var t=this,r=this.props.router.transitionService.onBefore({},function(i){t.setState({transitions:t.state.transitions.concat(i)});var a=750,o=t._div.children[0],c=function(){var f=o.scrollWidth-o.clientWidth+200;t.cancelPreviousAnim&&t.cancelPreviousAnim();var l=[f],u=[o.scrollLeft],h=t.props.maximumTransitions,d=function(){var m=t.state.transitions;m.length<=h||t.setState({transitions:m.slice(m.length-h)})},p=function(m){return o.scrollLeft=m[0]};t.cancelPreviousAnim=ne(l,u,a,p,d,hn.easeInOutCubic)};setTimeout(c,25)});this.deregisterFns.push(r),document.body.addEventListener("mousemove",this.onMouseMove),this.deregisterFns.push(function(){return document.body.removeEventListener("mousemove",t.onMouseMove)})},n.prototype.componentWillUnmount=function(){for(;this.deregisterFns.length;)this.deregisterFns.pop()()},n.prototype.render=function(){var t=this,r=this.state.pointerEvents;return s("div",{ref:function(i){return t._div=i}},s("div",{className:"uirTranVis_history",style:{pointerEvents:r}},this.state.transitions.map(function(i){return s("div",{key:i.$id,className:"uirTranVis_transition"},s(Xt,{transition:i}),s("div",{style:{minWidth:"18em",border:"1px solid transparent"}}))}),s("div",{style:{width:"200px",height:"1px"}})))},n.defaultProps={router:null,maximumTransitions:15},n})(x),$t=function(e){return new Ut(e,{})};function Fn(e){var n=function(){return null};D(s(n,null),document.body,e)}var It={state:!0,stateVisualizer:{},transition:!0},Ut=(function(){function e(n,t){this.router=n,this.name="visualizer",t=Object.assign({},It,t),t.state&&(this.stateVisualizerEl=At.create(n,void 0,void 0,t.stateVisualizer)),t.transition&&(this.transitionVisualizerEl=Yt.create(n))}return e.prototype.dispose=function(n){this.stateVisualizerEl&&Fn(this.stateVisualizerEl),this.transitionVisualizerEl&&Fn(this.transitionVisualizerEl),this.stateVisualizerEl=null,this.transitionVisualizerEl=null},e})();export{ce as StateSelector,Tt as StateTree,At as StateVisualizer,Yt as TransitionVisualizer,Ut as Visualizer,$t as visualizer};
