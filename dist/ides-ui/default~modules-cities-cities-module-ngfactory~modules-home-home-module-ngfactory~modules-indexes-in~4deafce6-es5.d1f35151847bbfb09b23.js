function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2+0p":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("mrSG"),a=n("8Y7J"),l=n("5RHE"),o=n.n(l),r=function(){function e(t){_classCallCheck(this,e),this.exportAsService=t,this.div=1.7,this.titleExport="",this.nameFile="download",this.height=200,this.downloadCSV=new a.EventEmitter,this.downloadOptions=[{id:"pdf",name:"PDF",check:!1},{id:"csv",name:"CSV",check:!1},{id:"jpeg",name:"JPEG",check:!1},{id:"png",name:"PNG",check:!1}]}return _createClass(e,[{key:"ngOnInit",value:function(){this.hiddenCSV&&this.downloadOptions.map((function(e){"csv"===e.id&&(e.hidden=!0)}))}},{key:"getOrigins",value:function(){var e="";return this.origins&&this.origins.forEach((function(t,n){0!==n&&(e+=", "),e+=t.name})),e}},{key:"getURI",value:function(e,t){return i.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i,a,l,o,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=document.getElementById(e),(a=i.cloneNode(!0)).height+=200,(l=a.getContext("2d")).font="20px Arial",l.fillStyle="png"!==t?"#FFF":"rgba(255, 255, 255, 0.5)",l.fillRect(0,0,a.width,a.height),l.drawImage(i,0,140,i.width,i.height),l.fillStyle="blue",l.fillText(this.titleExport,a.width/2-60,120),(o=new Image).src="/assets/logos/logo.png",l.drawImage(o,10,10,600/this.div,100/this.div),r=window.location.href,n.abrupt("return",(l.fillStyle="blue",l.font="16px Arial",l.fillText(r,10,a.height-10),console.log("image:",a.width,a.height),a.toDataURL("image/"+t,1)));case 8:case"end":return n.stop()}}),n,this)})))}},{key:"downloadCanvas",value:function(e,t){return i.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i,a,l,r,s,u,c,d,f=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i=e.target,document.getElementById(this.idElement).getContext("2d"),a=new o.a({orientation:"landscape"}),n.t0=t,n.next="pdf"===n.t0?4:"csv"===n.t0?13:"png"===n.t0?15:20;break;case 4:return n.next=6,this.getURI(this.idElement,"png");case 6:return l=n.sent,r=a.internal.pageSize.getWidth(),s=a.internal.pageSize.getHeight(),console.log("pdf:",r,s),(u=new Image).src=l,u.onload=function(){window.innerWidth<=768?"indexesGraph"==f.idElement?a.addImage(l,"png",50,20,180,180):a.addImage(l,"png",20,20,240,180):window.innerWidth>768&&window.innerWidth<1600?"indexesGraph"==f.idElement?a.addImage(l,"png",40,20,200,180):a.addImage(l,"png",20,20,240,180):"indexesGraph"==f.idElement?a.addImage(l,"png",50,20,220,180):a.addImage(l,"png",20,20,240,180),a.save(f.nameFile+".pdf")},n.abrupt("break",25);case 13:return this.downloadCSV.emit(this.nameFile),n.abrupt("break",25);case 15:return n.next=17,this.getURI(this.idElement,"png");case 17:return c=n.sent,i.href=c,i.download=this.nameFile+".png",n.abrupt("break",25);case 20:return n.next=22,this.getURI(this.idElement,"jpeg");case 22:return d=n.sent,i.href=d,i.download=this.nameFile+".jpeg",n.abrupt("break",25);case 25:case"end":return n.stop()}}),n,this)})))}}]),e}()},EE5B:function(e,t,n){"use strict";var i=n("8Y7J"),a=n("SVse"),l=n("TSSN");n("2+0p"),n("I5r7"),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var o=i["\u0275crt"]({encapsulation:0,styles:[["@media screen and (max-width:575px){.download-data[_ngcontent-%COMP%]{margin-right:5px!important}}"]],data:{}});function r(e){return i["\u0275vid"](0,[(e()(),i["\u0275eld"](0,0,null,null,1,"a",[["class","dropdown-item cursor-pointer"]],null,[[null,"click"]],(function(e,t,n){var i=!0;return"click"===t&&(i=!1!==e.component.downloadCanvas(n,e.parent.context.$implicit.id)&&i),i}),null,null)),(e()(),i["\u0275ted"](1,null,[" "," "]))],null,(function(e,t){e(t,1,0,t.parent.context.$implicit.name)}))}function s(e){return i["\u0275vid"](0,[(e()(),i["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),i["\u0275and"](16777216,null,null,1,null,r)),i["\u0275did"](2,16384,null,0,a.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),i["\u0275and"](0,null,null,0))],(function(e,t){e(t,2,0,!t.context.$implicit.hidden)}),null)}function u(e){return i["\u0275vid"](0,[(e()(),i["\u0275eld"](0,0,null,null,9,"div",[["class","row pr-3 pl-3"]],null,null,null,null,null)),(e()(),i["\u0275eld"](1,0,null,null,8,"div",[["class","col-md-12 text-right text-uppercase ides-text-blue-dark pr-0 download-data d-none d-sm-none d-md-block"]],null,null,null,null,null)),(e()(),i["\u0275eld"](2,0,null,null,7,"div",[["class","dropdown"]],null,null,null,null,null)),(e()(),i["\u0275eld"](3,0,null,null,3,"button",[["aria-expanded","false"],["aria-haspopup","true"],["class","btn ides-dropdown dropdown-toggle ides-text-blue ides-dropdown-download pr-1"],["data-toggle","dropdown"],["id","dropdownMenuButton"],["type","button"]],null,null,null,null,null)),(e()(),i["\u0275eld"](4,0,null,null,2,"span",[["class","ides-mr-80 text-uppercase"],["translate",""]],null,null,null,null,null)),i["\u0275did"](5,8536064,null,0,l.e,[l.k,i.ElementRef,i.ChangeDetectorRef],{translate:[0,"translate"]},null),(e()(),i["\u0275ted"](-1,null,["download data"])),(e()(),i["\u0275eld"](7,0,null,null,2,"div",[["aria-labelledby","dropdownMenuButton"],["class","dropdown-menu"]],null,null,null,null,null)),(e()(),i["\u0275and"](16777216,null,null,1,null,s)),i["\u0275did"](9,278528,null,0,a.NgForOf,[i.ViewContainerRef,i.TemplateRef,i.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(e,t){var n=t.component;e(t,5,0,""),e(t,9,0,n.downloadOptions)}),null)}},HX2K:function(e,t,n){e.exports=function(e){var t=e.helpers,i=n("wU0g")(e);function a(e){var t=!1,n=e.filter((function(e){switch(e){case"mouseenter":case"mouseover":case"mouseout":case"mouseleave":return t=!0,!1;default:return!0}}));return t&&-1===n.indexOf("mousemove")&&n.push("mousemove"),n}return{dispatcher:function(e){var n=this.annotation,l=i.elements(this),o=t.getRelativePosition(e,this.chart),r=i.getNearestItems(l,o),s=a(n.options.events),u=n.options.dblClickSpeed,c=[],d=i.getEventHandlerName(e.type),f=(r||{}).options;if("mousemove"===e.type&&(r&&!r.hovering?["mouseenter","mouseover"].forEach((function(t){var n=i.getEventHandlerName(t),a=i.createMouseEvent(t,e);r.hovering=!0,"function"==typeof f[n]&&c.push([f[n],a,r])})):r||l.forEach((function(t){if(t.hovering){t.hovering=!1;var n=t.options;["mouseout","mouseleave"].forEach((function(a){var l=i.getEventHandlerName(a),o=i.createMouseEvent(a,e);"function"==typeof n[l]&&c.push([n[l],o,t])}))}}))),r&&s.indexOf("dblclick")>-1&&"function"==typeof f.onDblclick){if("click"===e.type&&"function"==typeof f.onClick)return clearTimeout(r.clickTimeout),r.clickTimeout=setTimeout((function(){delete r.clickTimeout,f.onClick.call(r,e)}),u),e.stopImmediatePropagation(),void e.preventDefault();"dblclick"===e.type&&r.clickTimeout&&(clearTimeout(r.clickTimeout),delete r.clickTimeout)}r&&"function"==typeof f[d]&&0===c.length&&c.push([f[d],e,r]),c.length>0&&(e.stopImmediatePropagation(),e.preventDefault(),c.forEach((function(e){e[0].call(e[2],e[1])})))},collapseHoverEvents:a}}},MoIz:function(e,t,n){e.exports=function(e){var t=n("wU0g")(e);return e.Annotation.Element.extend({setDataLimits:function(){var e=this._model,n=this.options,i=this.chartInstance,a=i.scales[n.xScaleID],l=i.scales[n.yScaleID],o=i.chartArea;if(e.ranges={},o){var r=0,s=0;a&&(r=t.isValid(n.xMin)?n.xMin:a.getPixelForValue(o.left),s=t.isValid(n.xMax)?n.xMax:a.getPixelForValue(o.right),e.ranges[n.xScaleID]={min:Math.min(r,s),max:Math.max(r,s)}),l&&(r=t.isValid(n.yMin)?n.yMin:l.getPixelForValue(o.bottom),s=t.isValid(n.yMax)?n.yMax:l.getPixelForValue(o.top),e.ranges[n.yScaleID]={min:Math.min(r,s),max:Math.max(r,s)})}},configure:function(){var e=this._model,n=this.options,i=this.chartInstance,a=i.scales[n.xScaleID],l=i.scales[n.yScaleID],o=i.chartArea;e.clip={x1:o.left,x2:o.right,y1:o.top,y2:o.bottom};var r,s,u=o.left,c=o.top,d=o.right,f=o.bottom;a&&(r=t.isValid(n.xMin)?a.getPixelForValue(n.xMin):o.left,s=t.isValid(n.xMax)?a.getPixelForValue(n.xMax):o.right,u=Math.min(r,s),d=Math.max(r,s)),l&&(r=t.isValid(n.yMin)?l.getPixelForValue(n.yMin):o.bottom,s=t.isValid(n.yMax)?l.getPixelForValue(n.yMax):o.top,c=Math.min(r,s),f=Math.max(r,s)),e.left=u,e.top=c,e.right=d,e.bottom=f,e.borderColor=n.borderColor,e.borderWidth=n.borderWidth,e.backgroundColor=n.backgroundColor},inRange:function(e,t){var n=this._model;return n&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},getCenterPoint:function(){var e=this._model;return{x:(e.right+e.left)/2,y:(e.bottom+e.top)/2}},getWidth:function(){var e=this._model;return Math.abs(e.right-e.left)},getHeight:function(){var e=this._model;return Math.abs(e.bottom-e.top)},getArea:function(){return this.getWidth()*this.getHeight()},draw:function(){var e=this._view,t=this.chartInstance.chart.ctx;t.save(),t.beginPath(),t.rect(e.clip.x1,e.clip.y1,e.clip.x2-e.clip.x1,e.clip.y2-e.clip.y1),t.clip(),t.lineWidth=e.borderWidth,t.strokeStyle=e.borderColor,t.fillStyle=e.backgroundColor;var n=e.right-e.left,i=e.bottom-e.top;t.fillRect(e.left,e.top,n,i),t.strokeRect(e.left,e.top,n,i),t.restore()}})}},SjEX:function(e,t){e.exports={getYears:function(){for(var e=(new Date).getFullYear(),t=[],n=1990;n<=e;n++)t.push(n);return t}}},"Ym+k":function(e,t,n){var i=n("MO+k");(i="function"==typeof i?i:window.Chart).Annotation=i.Annotation||{},i.Annotation.drawTimeOptions={afterDraw:"afterDraw",afterDatasetsDraw:"afterDatasetsDraw",beforeDatasetsDraw:"beforeDatasetsDraw"},i.Annotation.defaults={drawTime:"afterDatasetsDraw",dblClickSpeed:350,events:[],annotations:[]},i.Annotation.labelDefaults={backgroundColor:"rgba(0,0,0,0.8)",fontFamily:i.defaults.global.defaultFontFamily,fontSize:i.defaults.global.defaultFontSize,fontStyle:"bold",fontColor:"#fff",xPadding:6,yPadding:6,cornerRadius:6,position:"center",xAdjust:0,yAdjust:0,enabled:!1,content:null},i.Annotation.Element=n("xxsC")(i),i.Annotation.types={line:n("u5p2")(i),box:n("MoIz")(i)};var a=n("grSx")(i);e.exports=a,i.pluginService.register(a)},grSx:function(e,t,n){e.exports=function(e){var t=e.helpers,i=n("wU0g")(e),a=n("HX2K")(e),l=e.Annotation.types;function o(e){i.decorate(e,"afterDataLimits",(function(e,t){e&&e(t),i.adjustScaleRange(t)}))}function r(e){return function(t,n){var a=t.annotation.options.drawTime;i.elements(t).filter((function(t){return e===(t.options.drawTime||a)})).forEach((function(e){e.transition(n).draw()}))}}return{beforeInit:function(e){var n=e.options,a=e.annotation={elements:{},options:i.initConfig(n.annotation||{}),onDestroy:[],firstRun:!0,supported:!1};e.ensureScalesHaveIDs(),n.scales&&(a.supported=!0,t.each(n.scales.xAxes,o),t.each(n.scales.yAxes,o))},beforeUpdate:function(e){var t=e.annotation;if(t.supported){t.firstRun?t.firstRun=!1:t.options=i.initConfig(e.options.annotation||{});var n=[];t.options.annotations.forEach((function(a){var o=a.id||i.objectId();if(!t.elements[o]&&l[a.type]){var r=new(0,l[a.type])({id:o,options:a,chartInstance:e});r.initialize(),t.elements[o]=r,a.id=o,n.push(o)}else t.elements[o]&&n.push(o)})),Object.keys(t.elements).forEach((function(e){-1===n.indexOf(e)&&(t.elements[e].destroy(),delete t.elements[e])}))}},afterScaleUpdate:function(e){i.elements(e).forEach((function(e){e.configure()}))},beforeDatasetsDraw:r("beforeDatasetsDraw"),afterDatasetsDraw:r("afterDatasetsDraw"),afterDraw:r("afterDraw"),afterInit:function(e){var n=e.annotation.options.events;if(t.isArray(n)&&n.length>0){var i=e.chart.canvas,l=a.dispatcher.bind(e);a.collapseHoverEvents(n).forEach((function(n){t.addEvent(i,n,l),e.annotation.onDestroy.push((function(){t.removeEvent(i,n,l)}))}))}},destroy:function(e){for(var t=e.annotation.onDestroy;t.length>0;)t.pop()()}}}},u5p2:function(e,t,n){e.exports=function(e){var t=e.helpers,i=n("wU0g")(e);function a(e){var t=(e.x2-e.x1)/(e.y2-e.y1),n=e.x1||0;this.m=t,this.b=n,this.getX=function(i){return t*(i-e.y1)+n},this.getY=function(i){return(i-n)/t+e.y1},this.intersects=function(e,t,n){n=n||.001;var i=this.getY(e),a=this.getX(t);return(!isFinite(i)||Math.abs(t-i)<n)&&(!isFinite(a)||Math.abs(e-a)<n)}}return e.Annotation.Element.extend({setDataLimits:function(){var e=this._model,t=this.options;e.ranges={},e.ranges[t.scaleID]={min:t.value,max:t.endValue||t.value}},configure:function(){var e,n,l=this._model,o=this.options,r=this.chartInstance,s=r.chart.ctx,u=r.scales[o.scaleID];if(u&&(e=i.isValid(o.value)?u.getPixelForValue(o.value):NaN,n=i.isValid(o.endValue)?u.getPixelForValue(o.endValue):e),!isNaN(e)){var c=r.chartArea;l.clip={x1:c.left,x2:c.right,y1:c.top,y2:c.bottom},"horizontal"==this.options.mode?(l.x1=c.left,l.x2=c.right,l.y1=e,l.y2=n):(l.y1=c.top,l.y2=c.bottom,l.x1=e,l.x2=n),l.line=new a(l),l.mode=o.mode,l.labelBackgroundColor=o.label.backgroundColor,l.labelFontFamily=o.label.fontFamily,l.labelFontSize=o.label.fontSize,l.labelFontStyle=o.label.fontStyle,l.labelFontColor=o.label.fontColor,l.labelXPadding=o.label.xPadding,l.labelYPadding=o.label.yPadding,l.labelCornerRadius=o.label.cornerRadius,l.labelPosition=o.label.position,l.labelXAdjust=o.label.xAdjust,l.labelYAdjust=o.label.yAdjust,l.labelEnabled=o.label.enabled,l.labelContent=o.label.content,s.font=t.fontString(l.labelFontSize,l.labelFontStyle,l.labelFontFamily);var d=s.measureText(l.labelContent).width,f=s.measureText("M").width,h=function(e,t,n,i,a){var l=e.line,o={},r=0,s=0;switch(!0){case"vertical"==e.mode&&"top"==e.labelPosition:r=t/2+e.labelXAdjust,o.y=e.y1+(s=a+e.labelYAdjust),o.x=(isFinite(l.m)?l.getX(o.y):e.x1)-r;break;case"vertical"==e.mode&&"bottom"==e.labelPosition:r=t/2+e.labelXAdjust,o.y=e.y2-(s=n+a+e.labelYAdjust),o.x=(isFinite(l.m)?l.getX(o.y):e.x1)-r;break;case"horizontal"==e.mode&&"left"==e.labelPosition:s=-n/2+e.labelYAdjust,o.x=e.x1+(r=i+e.labelXAdjust),o.y=l.getY(o.x)+s;break;case"horizontal"==e.mode&&"right"==e.labelPosition:s=-n/2+e.labelYAdjust,o.x=e.x2-(r=t+i+e.labelXAdjust),o.y=l.getY(o.x)+s;break;default:o.x=(e.x1+e.x2-t)/2+e.labelXAdjust,o.y=(e.y1+e.y2-n)/2+e.labelYAdjust}return o}(l,d,f,l.labelXPadding,l.labelYPadding);l.labelX=h.x-l.labelXPadding,l.labelY=h.y-l.labelYPadding,l.labelWidth=d+2*l.labelXPadding,l.labelHeight=f+2*l.labelYPadding,l.borderColor=o.borderColor,l.borderWidth=o.borderWidth,l.borderDash=o.borderDash||[],l.borderDashOffset=o.borderDashOffset||0}},inRange:function(e,t){var n=this._model;return n.line&&n.line.intersects(e,t,this.getHeight())||n.labelEnabled&&n.labelContent&&e>=n.labelX&&e<=n.labelX+n.labelWidth&&t>=n.labelY&&t<=n.labelY+n.labelHeight},getCenterPoint:function(){return{x:(this._model.x2+this._model.x1)/2,y:(this._model.y2+this._model.y1)/2}},getWidth:function(){return Math.abs(this._model.right-this._model.left)},getHeight:function(){return this._model.borderWidth||1},getArea:function(){return Math.sqrt(Math.pow(this.getWidth(),2)+Math.pow(this.getHeight(),2))},draw:function(){var e=this._view,n=this.chartInstance.chart.ctx;e.clip&&(n.save(),n.beginPath(),n.rect(e.clip.x1,e.clip.y1,e.clip.x2-e.clip.x1,e.clip.y2-e.clip.y1),n.clip(),n.lineWidth=e.borderWidth,n.strokeStyle=e.borderColor,n.setLineDash&&n.setLineDash(e.borderDash),n.lineDashOffset=e.borderDashOffset,n.beginPath(),n.moveTo(e.x1,e.y1),n.lineTo(e.x2,e.y2),n.stroke(),e.labelEnabled&&e.labelContent&&(n.beginPath(),n.rect(e.clip.x1,e.clip.y1,e.clip.x2-e.clip.x1,e.clip.y2-e.clip.y1),n.clip(),n.fillStyle=e.labelBackgroundColor,t.drawRoundedRectangle(n,e.labelX,e.labelY,e.labelWidth,e.labelHeight,e.labelCornerRadius),n.fill(),n.font=t.fontString(e.labelFontSize,e.labelFontStyle,e.labelFontFamily),n.fillStyle=e.labelFontColor,n.textAlign="center",n.textBaseline="middle",n.fillText(e.labelContent,e.labelX+e.labelWidth/2,e.labelY+e.labelHeight/2)),n.restore())}})}},wU0g:function(e,t){function n(){}function i(e){var t=e.annotation.elements;return Object.keys(t).map((function(e){return t[e]}))}function a(){return Math.random().toString(36).substr(2,6)}function l(e){return null!=e&&("number"==typeof e?isFinite(e):!!e)}function o(e,t,n){e["$"+t]||(e[t]?(e["$"+t]=e[t].bind(e),e[t]=function(){var i=[e["$"+t]].concat(Array.prototype.slice.call(arguments));return n.apply(e,i)}):e[t]=function(){var t=[void 0].concat(Array.prototype.slice.call(arguments));return n.apply(e,t)})}function r(e,t){e.forEach((function(e){(t?e[t]:e)()}))}function s(e){return"on"+e[0].toUpperCase()+e.substring(1)}function u(e,t){try{return new MouseEvent(e,t)}catch(a){try{var n=document.createEvent("MouseEvent");return n.initMouseEvent(e,t.canBubble,t.cancelable,t.view,t.detail,t.screenX,t.screenY,t.clientX,t.clientY,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,t.button,t.relatedTarget),n}catch(l){var i=document.createEvent("Event");return i.initEvent(e,t.canBubble,t.cancelable),i}}}e.exports=function(e){var t=e.helpers;return{initConfig:function(n){return n=t.configMerge(e.Annotation.defaults,n),t.isArray(n.annotations)&&n.annotations.forEach((function(n){n.label=t.configMerge(e.Annotation.labelDefaults,n.label)})),n},elements:i,callEach:r,noop:n,objectId:a,isValid:l,decorate:o,adjustScaleRange:function(e){var t,n,a,l,o,r=(t=e.id,n=i(e.chart),a=e.min,l=e.max,{min:(o=n.filter((function(e){return!!e._model.ranges[t]})).map((function(e){return e._model.ranges[t]}))).map((function(e){return Number(e.min)})).reduce((function(e,t){return isFinite(t)&&!isNaN(t)&&t<e?t:e}),a),max:o.map((function(e){return Number(e.max)})).reduce((function(e,t){return isFinite(t)&&!isNaN(t)&&t>e?t:e}),l)});void 0===e.options.ticks.min&&void 0===e.options.ticks.suggestedMin&&(e.min=r.min),void 0===e.options.ticks.max&&void 0===e.options.ticks.suggestedMax&&(e.max=r.max),e.handleTickRangeOptions&&e.handleTickRangeOptions()},getNearestItems:function(e,n){var i=Number.POSITIVE_INFINITY;return e.filter((function(e){return e.inRange(n.x,n.y)})).reduce((function(e,a){var l=a.getCenterPoint(),o=t.distanceBetweenPoints(n,l);return o<i?(e=[a],i=o):o===i&&e.push(a),e}),[]).sort((function(e,t){var n=e.getArea(),i=t.getArea();return n>i||n<i?n-i:e._index-t._index})).slice(0,1)[0]},getEventHandlerName:s,createMouseEvent:u}}},xxsC:function(e,t){e.exports=function(e){var t=e.helpers;return e.Element.extend({initialize:function(){this.hidden=!1,this.hovering=!1,this._model=t.clone(this._model)||{},this.setDataLimits()},destroy:function(){},setDataLimits:function(){},configure:function(){},inRange:function(){},getCenterPoint:function(){},getWidth:function(){},getHeight:function(){},getArea:function(){},draw:function(){}})}}}]);