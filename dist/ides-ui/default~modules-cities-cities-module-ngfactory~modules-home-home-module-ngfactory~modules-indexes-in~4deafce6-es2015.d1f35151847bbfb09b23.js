(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2+0p":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("mrSG"),l=n("8Y7J"),a=n("5RHE"),o=n.n(a);class r{constructor(e){this.exportAsService=e,this.div=1.7,this.titleExport="",this.nameFile="download",this.height=200,this.downloadCSV=new l.EventEmitter,this.downloadOptions=[{id:"pdf",name:"PDF",check:!1},{id:"csv",name:"CSV",check:!1},{id:"jpeg",name:"JPEG",check:!1},{id:"png",name:"PNG",check:!1}]}ngOnInit(){this.hiddenCSV&&this.downloadOptions.map(e=>{"csv"===e.id&&(e.hidden=!0)})}getOrigins(){let e="";return this.origins&&this.origins.forEach((t,n)=>{0!==n&&(e+=", "),e+=t.name}),e}getURI(e,t){return i.__awaiter(this,void 0,void 0,(function*(){const n=document.getElementById(e),i=n.cloneNode(!0);i.height+=200;const l=i.getContext("2d");l.font="20px Arial",l.fillStyle="png"!==t?"#FFF":"rgba(255, 255, 255, 0.5)",l.fillRect(0,0,i.width,i.height),l.drawImage(n,0,140,n.width,n.height),l.fillStyle="blue",l.fillText(this.titleExport,i.width/2-60,120);const a=new Image;a.src="/assets/logos/logo.png",l.drawImage(a,10,10,600/this.div,100/this.div);const o=window.location.href;return l.fillStyle="blue",l.font="16px Arial",l.fillText(o,10,i.height-10),console.log("image:",i.width,i.height),i.toDataURL("image/"+t,1)}))}downloadCanvas(e,t){return i.__awaiter(this,void 0,void 0,(function*(){const n=e.target,i=(document.getElementById(this.idElement).getContext("2d"),new o.a({orientation:"landscape"}));switch(t){case"pdf":{const e=yield this.getURI(this.idElement,"png"),t=i.internal.pageSize.getWidth(),n=i.internal.pageSize.getHeight();console.log("pdf:",t,n);const l=new Image;l.src=e,l.onload=()=>{window.innerWidth<=768?"indexesGraph"==this.idElement?i.addImage(e,"png",50,20,180,180):i.addImage(e,"png",20,20,240,180):window.innerWidth>768&&window.innerWidth<1600?"indexesGraph"==this.idElement?i.addImage(e,"png",40,20,200,180):i.addImage(e,"png",20,20,240,180):"indexesGraph"==this.idElement?i.addImage(e,"png",50,20,220,180):i.addImage(e,"png",20,20,240,180),i.save(this.nameFile+".pdf")};break}case"csv":this.downloadCSV.emit(this.nameFile);break;case"png":{const e=yield this.getURI(this.idElement,"png");n.href=e,n.download=this.nameFile+".png";break}default:{const e=yield this.getURI(this.idElement,"jpeg");n.href=e,n.download=this.nameFile+".jpeg";break}}}))}}},EE5B:function(e,t,n){"use strict";var i=n("8Y7J"),l=n("SVse"),a=n("TSSN");n("2+0p"),n("I5r7"),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var o=i["\u0275crt"]({encapsulation:0,styles:[["@media screen and (max-width:575px){.download-data[_ngcontent-%COMP%]{margin-right:5px!important}}"]],data:{}});function r(e){return i["\u0275vid"](0,[(e()(),i["\u0275eld"](0,0,null,null,1,"a",[["class","dropdown-item cursor-pointer"]],null,[[null,"click"]],(function(e,t,n){var i=!0;return"click"===t&&(i=!1!==e.component.downloadCanvas(n,e.parent.context.$implicit.id)&&i),i}),null,null)),(e()(),i["\u0275ted"](1,null,[" "," "]))],null,(function(e,t){e(t,1,0,t.parent.context.$implicit.name)}))}function s(e){return i["\u0275vid"](0,[(e()(),i["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),i["\u0275and"](16777216,null,null,1,null,r)),i["\u0275did"](2,16384,null,0,l.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),i["\u0275and"](0,null,null,0))],(function(e,t){e(t,2,0,!t.context.$implicit.hidden)}),null)}function u(e){return i["\u0275vid"](0,[(e()(),i["\u0275eld"](0,0,null,null,9,"div",[["class","row pr-3 pl-3"]],null,null,null,null,null)),(e()(),i["\u0275eld"](1,0,null,null,8,"div",[["class","col-md-12 text-right text-uppercase ides-text-blue-dark pr-0 download-data d-none d-sm-none d-md-block"]],null,null,null,null,null)),(e()(),i["\u0275eld"](2,0,null,null,7,"div",[["class","dropdown"]],null,null,null,null,null)),(e()(),i["\u0275eld"](3,0,null,null,3,"button",[["aria-expanded","false"],["aria-haspopup","true"],["class","btn ides-dropdown dropdown-toggle ides-text-blue ides-dropdown-download pr-1"],["data-toggle","dropdown"],["id","dropdownMenuButton"],["type","button"]],null,null,null,null,null)),(e()(),i["\u0275eld"](4,0,null,null,2,"span",[["class","ides-mr-80 text-uppercase"],["translate",""]],null,null,null,null,null)),i["\u0275did"](5,8536064,null,0,a.e,[a.k,i.ElementRef,i.ChangeDetectorRef],{translate:[0,"translate"]},null),(e()(),i["\u0275ted"](-1,null,["download data"])),(e()(),i["\u0275eld"](7,0,null,null,2,"div",[["aria-labelledby","dropdownMenuButton"],["class","dropdown-menu"]],null,null,null,null,null)),(e()(),i["\u0275and"](16777216,null,null,1,null,s)),i["\u0275did"](9,278528,null,0,l.NgForOf,[i.ViewContainerRef,i.TemplateRef,i.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(e,t){var n=t.component;e(t,5,0,""),e(t,9,0,n.downloadOptions)}),null)}},HX2K:function(e,t,n){e.exports=function(e){var t=e.helpers,i=n("wU0g")(e);function l(e){var t=!1,n=e.filter((function(e){switch(e){case"mouseenter":case"mouseover":case"mouseout":case"mouseleave":return t=!0,!1;default:return!0}}));return t&&-1===n.indexOf("mousemove")&&n.push("mousemove"),n}return{dispatcher:function(e){var n=this.annotation,a=i.elements(this),o=t.getRelativePosition(e,this.chart),r=i.getNearestItems(a,o),s=l(n.options.events),u=n.options.dblClickSpeed,d=[],c=i.getEventHandlerName(e.type),f=(r||{}).options;if("mousemove"===e.type&&(r&&!r.hovering?["mouseenter","mouseover"].forEach((function(t){var n=i.getEventHandlerName(t),l=i.createMouseEvent(t,e);r.hovering=!0,"function"==typeof f[n]&&d.push([f[n],l,r])})):r||a.forEach((function(t){if(t.hovering){t.hovering=!1;var n=t.options;["mouseout","mouseleave"].forEach((function(l){var a=i.getEventHandlerName(l),o=i.createMouseEvent(l,e);"function"==typeof n[a]&&d.push([n[a],o,t])}))}}))),r&&s.indexOf("dblclick")>-1&&"function"==typeof f.onDblclick){if("click"===e.type&&"function"==typeof f.onClick)return clearTimeout(r.clickTimeout),r.clickTimeout=setTimeout((function(){delete r.clickTimeout,f.onClick.call(r,e)}),u),e.stopImmediatePropagation(),void e.preventDefault();"dblclick"===e.type&&r.clickTimeout&&(clearTimeout(r.clickTimeout),delete r.clickTimeout)}r&&"function"==typeof f[c]&&0===d.length&&d.push([f[c],e,r]),d.length>0&&(e.stopImmediatePropagation(),e.preventDefault(),d.forEach((function(e){e[0].call(e[2],e[1])})))},collapseHoverEvents:l}}},MoIz:function(e,t,n){e.exports=function(e){var t=n("wU0g")(e);return e.Annotation.Element.extend({setDataLimits:function(){var e=this._model,n=this.options,i=this.chartInstance,l=i.scales[n.xScaleID],a=i.scales[n.yScaleID],o=i.chartArea;if(e.ranges={},o){var r=0,s=0;l&&(r=t.isValid(n.xMin)?n.xMin:l.getPixelForValue(o.left),s=t.isValid(n.xMax)?n.xMax:l.getPixelForValue(o.right),e.ranges[n.xScaleID]={min:Math.min(r,s),max:Math.max(r,s)}),a&&(r=t.isValid(n.yMin)?n.yMin:a.getPixelForValue(o.bottom),s=t.isValid(n.yMax)?n.yMax:a.getPixelForValue(o.top),e.ranges[n.yScaleID]={min:Math.min(r,s),max:Math.max(r,s)})}},configure:function(){var e=this._model,n=this.options,i=this.chartInstance,l=i.scales[n.xScaleID],a=i.scales[n.yScaleID],o=i.chartArea;e.clip={x1:o.left,x2:o.right,y1:o.top,y2:o.bottom};var r,s,u=o.left,d=o.top,c=o.right,f=o.bottom;l&&(r=t.isValid(n.xMin)?l.getPixelForValue(n.xMin):o.left,s=t.isValid(n.xMax)?l.getPixelForValue(n.xMax):o.right,u=Math.min(r,s),c=Math.max(r,s)),a&&(r=t.isValid(n.yMin)?a.getPixelForValue(n.yMin):o.bottom,s=t.isValid(n.yMax)?a.getPixelForValue(n.yMax):o.top,d=Math.min(r,s),f=Math.max(r,s)),e.left=u,e.top=d,e.right=c,e.bottom=f,e.borderColor=n.borderColor,e.borderWidth=n.borderWidth,e.backgroundColor=n.backgroundColor},inRange:function(e,t){var n=this._model;return n&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},getCenterPoint:function(){var e=this._model;return{x:(e.right+e.left)/2,y:(e.bottom+e.top)/2}},getWidth:function(){var e=this._model;return Math.abs(e.right-e.left)},getHeight:function(){var e=this._model;return Math.abs(e.bottom-e.top)},getArea:function(){return this.getWidth()*this.getHeight()},draw:function(){var e=this._view,t=this.chartInstance.chart.ctx;t.save(),t.beginPath(),t.rect(e.clip.x1,e.clip.y1,e.clip.x2-e.clip.x1,e.clip.y2-e.clip.y1),t.clip(),t.lineWidth=e.borderWidth,t.strokeStyle=e.borderColor,t.fillStyle=e.backgroundColor;var n=e.right-e.left,i=e.bottom-e.top;t.fillRect(e.left,e.top,n,i),t.strokeRect(e.left,e.top,n,i),t.restore()}})}},SjEX:function(e,t){e.exports={getYears:function(){const e=(new Date).getFullYear(),t=[];for(let n=1990;n<=e;n++)t.push(n);return t}}},"Ym+k":function(e,t,n){var i=n("MO+k");(i="function"==typeof i?i:window.Chart).Annotation=i.Annotation||{},i.Annotation.drawTimeOptions={afterDraw:"afterDraw",afterDatasetsDraw:"afterDatasetsDraw",beforeDatasetsDraw:"beforeDatasetsDraw"},i.Annotation.defaults={drawTime:"afterDatasetsDraw",dblClickSpeed:350,events:[],annotations:[]},i.Annotation.labelDefaults={backgroundColor:"rgba(0,0,0,0.8)",fontFamily:i.defaults.global.defaultFontFamily,fontSize:i.defaults.global.defaultFontSize,fontStyle:"bold",fontColor:"#fff",xPadding:6,yPadding:6,cornerRadius:6,position:"center",xAdjust:0,yAdjust:0,enabled:!1,content:null},i.Annotation.Element=n("xxsC")(i),i.Annotation.types={line:n("u5p2")(i),box:n("MoIz")(i)};var l=n("grSx")(i);e.exports=l,i.pluginService.register(l)},grSx:function(e,t,n){e.exports=function(e){var t=e.helpers,i=n("wU0g")(e),l=n("HX2K")(e),a=e.Annotation.types;function o(e){i.decorate(e,"afterDataLimits",(function(e,t){e&&e(t),i.adjustScaleRange(t)}))}function r(e){return function(t,n){var l=t.annotation.options.drawTime;i.elements(t).filter((function(t){return e===(t.options.drawTime||l)})).forEach((function(e){e.transition(n).draw()}))}}return{beforeInit:function(e){var n=e.options,l=e.annotation={elements:{},options:i.initConfig(n.annotation||{}),onDestroy:[],firstRun:!0,supported:!1};e.ensureScalesHaveIDs(),n.scales&&(l.supported=!0,t.each(n.scales.xAxes,o),t.each(n.scales.yAxes,o))},beforeUpdate:function(e){var t=e.annotation;if(t.supported){t.firstRun?t.firstRun=!1:t.options=i.initConfig(e.options.annotation||{});var n=[];t.options.annotations.forEach((function(l){var o=l.id||i.objectId();if(!t.elements[o]&&a[l.type]){var r=new(0,a[l.type])({id:o,options:l,chartInstance:e});r.initialize(),t.elements[o]=r,l.id=o,n.push(o)}else t.elements[o]&&n.push(o)})),Object.keys(t.elements).forEach((function(e){-1===n.indexOf(e)&&(t.elements[e].destroy(),delete t.elements[e])}))}},afterScaleUpdate:function(e){i.elements(e).forEach((function(e){e.configure()}))},beforeDatasetsDraw:r("beforeDatasetsDraw"),afterDatasetsDraw:r("afterDatasetsDraw"),afterDraw:r("afterDraw"),afterInit:function(e){var n=e.annotation.options.events;if(t.isArray(n)&&n.length>0){var i=e.chart.canvas,a=l.dispatcher.bind(e);l.collapseHoverEvents(n).forEach((function(n){t.addEvent(i,n,a),e.annotation.onDestroy.push((function(){t.removeEvent(i,n,a)}))}))}},destroy:function(e){for(var t=e.annotation.onDestroy;t.length>0;)t.pop()()}}}},u5p2:function(e,t,n){e.exports=function(e){var t=e.helpers,i=n("wU0g")(e);function l(e){var t=(e.x2-e.x1)/(e.y2-e.y1),n=e.x1||0;this.m=t,this.b=n,this.getX=function(i){return t*(i-e.y1)+n},this.getY=function(i){return(i-n)/t+e.y1},this.intersects=function(e,t,n){n=n||.001;var i=this.getY(e),l=this.getX(t);return(!isFinite(i)||Math.abs(t-i)<n)&&(!isFinite(l)||Math.abs(e-l)<n)}}return e.Annotation.Element.extend({setDataLimits:function(){var e=this._model,t=this.options;e.ranges={},e.ranges[t.scaleID]={min:t.value,max:t.endValue||t.value}},configure:function(){var e,n,a=this._model,o=this.options,r=this.chartInstance,s=r.chart.ctx,u=r.scales[o.scaleID];if(u&&(e=i.isValid(o.value)?u.getPixelForValue(o.value):NaN,n=i.isValid(o.endValue)?u.getPixelForValue(o.endValue):e),!isNaN(e)){var d=r.chartArea;a.clip={x1:d.left,x2:d.right,y1:d.top,y2:d.bottom},"horizontal"==this.options.mode?(a.x1=d.left,a.x2=d.right,a.y1=e,a.y2=n):(a.y1=d.top,a.y2=d.bottom,a.x1=e,a.x2=n),a.line=new l(a),a.mode=o.mode,a.labelBackgroundColor=o.label.backgroundColor,a.labelFontFamily=o.label.fontFamily,a.labelFontSize=o.label.fontSize,a.labelFontStyle=o.label.fontStyle,a.labelFontColor=o.label.fontColor,a.labelXPadding=o.label.xPadding,a.labelYPadding=o.label.yPadding,a.labelCornerRadius=o.label.cornerRadius,a.labelPosition=o.label.position,a.labelXAdjust=o.label.xAdjust,a.labelYAdjust=o.label.yAdjust,a.labelEnabled=o.label.enabled,a.labelContent=o.label.content,s.font=t.fontString(a.labelFontSize,a.labelFontStyle,a.labelFontFamily);var c=s.measureText(a.labelContent).width,f=s.measureText("M").width,h=function(e,t,n,i,l){var a=e.line,o={},r=0,s=0;switch(!0){case"vertical"==e.mode&&"top"==e.labelPosition:r=t/2+e.labelXAdjust,o.y=e.y1+(s=l+e.labelYAdjust),o.x=(isFinite(a.m)?a.getX(o.y):e.x1)-r;break;case"vertical"==e.mode&&"bottom"==e.labelPosition:r=t/2+e.labelXAdjust,o.y=e.y2-(s=n+l+e.labelYAdjust),o.x=(isFinite(a.m)?a.getX(o.y):e.x1)-r;break;case"horizontal"==e.mode&&"left"==e.labelPosition:s=-n/2+e.labelYAdjust,o.x=e.x1+(r=i+e.labelXAdjust),o.y=a.getY(o.x)+s;break;case"horizontal"==e.mode&&"right"==e.labelPosition:s=-n/2+e.labelYAdjust,o.x=e.x2-(r=t+i+e.labelXAdjust),o.y=a.getY(o.x)+s;break;default:o.x=(e.x1+e.x2-t)/2+e.labelXAdjust,o.y=(e.y1+e.y2-n)/2+e.labelYAdjust}return o}(a,c,f,a.labelXPadding,a.labelYPadding);a.labelX=h.x-a.labelXPadding,a.labelY=h.y-a.labelYPadding,a.labelWidth=c+2*a.labelXPadding,a.labelHeight=f+2*a.labelYPadding,a.borderColor=o.borderColor,a.borderWidth=o.borderWidth,a.borderDash=o.borderDash||[],a.borderDashOffset=o.borderDashOffset||0}},inRange:function(e,t){var n=this._model;return n.line&&n.line.intersects(e,t,this.getHeight())||n.labelEnabled&&n.labelContent&&e>=n.labelX&&e<=n.labelX+n.labelWidth&&t>=n.labelY&&t<=n.labelY+n.labelHeight},getCenterPoint:function(){return{x:(this._model.x2+this._model.x1)/2,y:(this._model.y2+this._model.y1)/2}},getWidth:function(){return Math.abs(this._model.right-this._model.left)},getHeight:function(){return this._model.borderWidth||1},getArea:function(){return Math.sqrt(Math.pow(this.getWidth(),2)+Math.pow(this.getHeight(),2))},draw:function(){var e=this._view,n=this.chartInstance.chart.ctx;e.clip&&(n.save(),n.beginPath(),n.rect(e.clip.x1,e.clip.y1,e.clip.x2-e.clip.x1,e.clip.y2-e.clip.y1),n.clip(),n.lineWidth=e.borderWidth,n.strokeStyle=e.borderColor,n.setLineDash&&n.setLineDash(e.borderDash),n.lineDashOffset=e.borderDashOffset,n.beginPath(),n.moveTo(e.x1,e.y1),n.lineTo(e.x2,e.y2),n.stroke(),e.labelEnabled&&e.labelContent&&(n.beginPath(),n.rect(e.clip.x1,e.clip.y1,e.clip.x2-e.clip.x1,e.clip.y2-e.clip.y1),n.clip(),n.fillStyle=e.labelBackgroundColor,t.drawRoundedRectangle(n,e.labelX,e.labelY,e.labelWidth,e.labelHeight,e.labelCornerRadius),n.fill(),n.font=t.fontString(e.labelFontSize,e.labelFontStyle,e.labelFontFamily),n.fillStyle=e.labelFontColor,n.textAlign="center",n.textBaseline="middle",n.fillText(e.labelContent,e.labelX+e.labelWidth/2,e.labelY+e.labelHeight/2)),n.restore())}})}},wU0g:function(e,t){function n(){}function i(e){var t=e.annotation.elements;return Object.keys(t).map((function(e){return t[e]}))}function l(){return Math.random().toString(36).substr(2,6)}function a(e){return null!=e&&("number"==typeof e?isFinite(e):!!e)}function o(e,t,n){e["$"+t]||(e[t]?(e["$"+t]=e[t].bind(e),e[t]=function(){var i=[e["$"+t]].concat(Array.prototype.slice.call(arguments));return n.apply(e,i)}):e[t]=function(){var t=[void 0].concat(Array.prototype.slice.call(arguments));return n.apply(e,t)})}function r(e,t){e.forEach((function(e){(t?e[t]:e)()}))}function s(e){return"on"+e[0].toUpperCase()+e.substring(1)}function u(e,t){try{return new MouseEvent(e,t)}catch(l){try{var n=document.createEvent("MouseEvent");return n.initMouseEvent(e,t.canBubble,t.cancelable,t.view,t.detail,t.screenX,t.screenY,t.clientX,t.clientY,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,t.button,t.relatedTarget),n}catch(a){var i=document.createEvent("Event");return i.initEvent(e,t.canBubble,t.cancelable),i}}}e.exports=function(e){var t=e.helpers;return{initConfig:function(n){return n=t.configMerge(e.Annotation.defaults,n),t.isArray(n.annotations)&&n.annotations.forEach((function(n){n.label=t.configMerge(e.Annotation.labelDefaults,n.label)})),n},elements:i,callEach:r,noop:n,objectId:l,isValid:a,decorate:o,adjustScaleRange:function(e){var t,n,l,a,o,r=(t=e.id,n=i(e.chart),l=e.min,a=e.max,{min:(o=n.filter((function(e){return!!e._model.ranges[t]})).map((function(e){return e._model.ranges[t]}))).map((function(e){return Number(e.min)})).reduce((function(e,t){return isFinite(t)&&!isNaN(t)&&t<e?t:e}),l),max:o.map((function(e){return Number(e.max)})).reduce((function(e,t){return isFinite(t)&&!isNaN(t)&&t>e?t:e}),a)});void 0===e.options.ticks.min&&void 0===e.options.ticks.suggestedMin&&(e.min=r.min),void 0===e.options.ticks.max&&void 0===e.options.ticks.suggestedMax&&(e.max=r.max),e.handleTickRangeOptions&&e.handleTickRangeOptions()},getNearestItems:function(e,n){var i=Number.POSITIVE_INFINITY;return e.filter((function(e){return e.inRange(n.x,n.y)})).reduce((function(e,l){var a=l.getCenterPoint(),o=t.distanceBetweenPoints(n,a);return o<i?(e=[l],i=o):o===i&&e.push(l),e}),[]).sort((function(e,t){var n=e.getArea(),i=t.getArea();return n>i||n<i?n-i:e._index-t._index})).slice(0,1)[0]},getEventHandlerName:s,createMouseEvent:u}}},xxsC:function(e,t){e.exports=function(e){var t=e.helpers;return e.Element.extend({initialize:function(){this.hidden=!1,this.hovering=!1,this._model=t.clone(this._model)||{},this.setDataLimits()},destroy:function(){},setDataLimits:function(){},configure:function(){},inRange:function(){},getCenterPoint:function(){},getWidth:function(){},getHeight:function(){},getArea:function(){},draw:function(){}})}}}]);