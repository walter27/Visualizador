(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2+0p":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var l=n("mrSG"),i=n("8Y7J"),a=n("5RHE"),o=n.n(a);class r{constructor(e,t){this.exportAsService=e,this.chartService=t,this.div=1.7,this.titleExport="",this.nameFile="download",this.height=200,this.downloadCSV=new i.EventEmitter,this.downloadOptions=[{id:"pdf",name:"PDF",check:!1},{id:"csv",name:"CSV",check:!1},{id:"jpeg",name:"JPEG",check:!1},{id:"png",name:"PNG",check:!1}]}ngOnInit(){this.hiddenCSV&&this.downloadOptions.map(e=>{"csv"===e.id&&(e.hidden=!0)})}ngOnChanges(e){e.data&&this.data.length>0&&this.saveImageServer()}getOrigins(){let e="";return this.origins&&this.origins.forEach((t,n)=>{0!==n&&(e+=", "),e+=t.name}),e}getURI(e,t){return l.__awaiter(this,void 0,void 0,(function*(){const n=document.getElementById(e),l=n.cloneNode(!0);l.height+=200;const i=l.getContext("2d");i.font="20px Arial",i.fillStyle="png"!==t?"#FFF":"rgba(255, 255, 255, 0.5)",i.fillRect(0,0,l.width,l.height),i.drawImage(n,0,140,n.width,n.height),i.fillStyle="blue",i.fillText(this.titleExport,l.width/2-60,120);const a=new Image;a.src="/assets/logos/logo-color.svg",i.drawImage(a,10,10,600/this.div,100/this.div);const o=window.location.href;return i.fillStyle="blue",i.font="16px Arial",i.fillText(o,10,l.height-10),console.log("image:",l.width,l.height),l.toDataURL("image/"+t,1)}))}downloadCanvas(e,t){return l.__awaiter(this,void 0,void 0,(function*(){const n=e.target,l=(document.getElementById(this.idElement).getContext("2d"),new o.a({orientation:"landscape"}));switch(t){case"pdf":{const e=yield this.getURI(this.idElement,"png"),t=l.internal.pageSize.getWidth(),n=l.internal.pageSize.getHeight();console.log("pdf:",t,n);const i=new Image;i.src=e,i.onload=()=>{window.innerWidth<=768?"indexesGraph"==this.idElement?l.addImage(e,"png",50,20,180,180):l.addImage(e,"png",20,20,240,180):window.innerWidth>768&&window.innerWidth<1600?"indexesGraph"==this.idElement?l.addImage(e,"png",40,20,200,180):l.addImage(e,"png",20,20,240,180):"indexesGraph"==this.idElement?l.addImage(e,"png",50,20,220,180):l.addImage(e,"png",20,20,240,180),l.save(this.nameFile+".pdf")};break}case"csv":this.downloadCSV.emit(this.nameFile);break;case"png":{const e=yield this.getURI(this.idElement,"png");n.href=e,n.download=this.nameFile+".png";break}default:{const e=yield this.getURI(this.idElement,"jpeg");n.href=e,n.download=this.nameFile+".jpeg";break}}}))}saveImageServer(){setTimeout(()=>{Object.keys(this.data[0]._meta).forEach(e=>{"radar"===this.data[0]._meta[e].type&&(this.chartService.imageRadarBase24=this.getURI(this.idElement,"png"))}),this.chartService.imageBase24=this.getURI(this.idElement,"png")},2e3)}}},"48MR":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));class l{constructor(e){this.chartService=e,this.socialMedia=[{name:"Facebook",link:"",img:"social-facebook"},{name:"Twitter",link:"",img:"social-twitter"}]}ngOnInit(){}ngOnChanges(e){e.imageBase64&&this.imageBase64&&this.chartService.saveImageBase64(this.imageBase64).subscribe(e=>{})}sharedImage(e){this.variable={type:this.imageBase64.type,name:this.imageBase64.name},this.chartService.shareImage(this.variable).subscribe(e=>{this.socialMedia[0].link="https://www.facebook.com/sharer.php?u="+e,this.socialMedia[1].link=`https://twitter.com/intent/tweet?url=${e}&text=Plataforma de Ideas Urbanas`}),setTimeout(()=>{e.link&&window.open(e.link,"blank")},1e3)}}},EE5B:function(e,t,n){"use strict";var l=n("8Y7J"),i=n("SVse"),a=n("TSSN");n("2+0p"),n("I5r7"),n("rD0E"),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var o=l["\u0275crt"]({encapsulation:0,styles:[["@media screen and (max-width:575px){.download-data[_ngcontent-%COMP%]{margin-right:5px!important}}"]],data:{}});function r(e){return l["\u0275vid"](0,[(e()(),l["\u0275eld"](0,0,null,null,1,"a",[["class","dropdown-item cursor-pointer"]],null,[[null,"click"]],(function(e,t,n){var l=!0;return"click"===t&&(l=!1!==e.component.downloadCanvas(n,e.parent.context.$implicit.id)&&l),l}),null,null)),(e()(),l["\u0275ted"](1,null,[" "," "]))],null,(function(e,t){e(t,1,0,t.parent.context.$implicit.name)}))}function s(e){return l["\u0275vid"](0,[(e()(),l["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),l["\u0275and"](16777216,null,null,1,null,r)),l["\u0275did"](2,16384,null,0,i.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),l["\u0275and"](0,null,null,0))],(function(e,t){e(t,2,0,!t.context.$implicit.hidden)}),null)}function u(e){return l["\u0275vid"](0,[(e()(),l["\u0275eld"](0,0,null,null,9,"div",[["class","row pr-3 pl-3"]],null,null,null,null,null)),(e()(),l["\u0275eld"](1,0,null,null,8,"div",[["class","col-md-12 text-right text-uppercase ides-text-blue-dark pr-0 download-data d-none d-sm-none d-md-block"]],null,null,null,null,null)),(e()(),l["\u0275eld"](2,0,null,null,7,"div",[["class","dropdown"]],null,null,null,null,null)),(e()(),l["\u0275eld"](3,0,null,null,3,"button",[["aria-expanded","false"],["aria-haspopup","true"],["class","btn ides-dropdown dropdown-toggle ides-text-blue ides-dropdown-download pr-1"],["data-toggle","dropdown"],["id","dropdownMenuButton"],["type","button"]],null,null,null,null,null)),(e()(),l["\u0275eld"](4,0,null,null,2,"span",[["class","ides-mr-80 text-uppercase"],["translate",""]],null,null,null,null,null)),l["\u0275did"](5,8536064,null,0,a.e,[a.k,l.ElementRef,l.ChangeDetectorRef],{translate:[0,"translate"]},null),(e()(),l["\u0275ted"](-1,null,["download data"])),(e()(),l["\u0275eld"](7,0,null,null,2,"div",[["aria-labelledby","dropdownMenuButton"],["class","dropdown-menu"]],null,null,null,null,null)),(e()(),l["\u0275and"](16777216,null,null,1,null,s)),l["\u0275did"](9,278528,null,0,i.NgForOf,[l.ViewContainerRef,l.TemplateRef,l.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(e,t){var n=t.component;e(t,5,0,""),e(t,9,0,n.downloadOptions)}),null)}},FV9A:function(e,t,n){"use strict";var l=n("8Y7J"),i=n("SVse");n("48MR"),n("rD0E"),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a=l["\u0275crt"]({encapsulation:0,styles:[[".social-facebook[_ngcontent-%COMP%]{display:inline-block;height:30px;width:30px;background:url(facebook.7655afb90a2fa4a68c02.svg)}.social-twitter[_ngcontent-%COMP%]{display:inline-block;height:30px;width:30px;background:url(twitter.40943d108aae67360bdd.svg)}"]],data:{}});function o(e){return l["\u0275vid"](0,[(e()(),l["\u0275eld"](0,0,null,null,4,"div",[["class","ml-1"]],null,null,null,null,null)),(e()(),l["\u0275eld"](1,0,null,null,3,"a",[["class","cursor-pointer"]],null,[[null,"click"]],(function(e,t,n){var l=!0;return"click"===t&&(l=!1!==e.component.sharedImage(e.context.$implicit)&&l),l}),null,null)),(e()(),l["\u0275eld"](2,0,null,null,2,"i",[],null,null,null,null,null)),l["\u0275prd"](512,null,i["\u0275NgClassImpl"],i["\u0275NgClassR2Impl"],[l.IterableDiffers,l.KeyValueDiffers,l.ElementRef,l.Renderer2]),l["\u0275did"](4,278528,null,0,i.NgClass,[i["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null)],(function(e,t){e(t,4,0,t.context.$implicit.img)}),null)}function r(e){return l["\u0275vid"](0,[(e()(),l["\u0275eld"](0,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(e()(),l["\u0275eld"](1,0,null,null,6,"div",[["class","container "]],null,null,null,null,null)),(e()(),l["\u0275eld"](2,0,null,null,5,"div",[["class","row justify-content-md-center"]],null,null,null,null,null)),(e()(),l["\u0275eld"](3,0,null,null,2,"div",[["class","col col-md-1 col-1 mr-5 mr-lg-1"]],null,null,null,null,null)),(e()(),l["\u0275eld"](4,0,null,null,1,"span",[],null,null,null,null,null)),(e()(),l["\u0275ted"](-1,null,["Compartir:"])),(e()(),l["\u0275and"](16777216,null,null,1,null,o)),l["\u0275did"](7,278528,null,0,i.NgForOf,[l.ViewContainerRef,l.TemplateRef,l.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(e,t){e(t,7,0,t.component.socialMedia)}),null)}},HX2K:function(e,t,n){e.exports=function(e){var t=e.helpers,l=n("wU0g")(e);function i(e){var t=!1,n=e.filter((function(e){switch(e){case"mouseenter":case"mouseover":case"mouseout":case"mouseleave":return t=!0,!1;default:return!0}}));return t&&-1===n.indexOf("mousemove")&&n.push("mousemove"),n}return{dispatcher:function(e){var n=this.annotation,a=l.elements(this),o=t.getRelativePosition(e,this.chart),r=l.getNearestItems(a,o),s=i(n.options.events),u=n.options.dblClickSpeed,c=[],d=l.getEventHandlerName(e.type),h=(r||{}).options;if("mousemove"===e.type&&(r&&!r.hovering?["mouseenter","mouseover"].forEach((function(t){var n=l.getEventHandlerName(t),i=l.createMouseEvent(t,e);r.hovering=!0,"function"==typeof h[n]&&c.push([h[n],i,r])})):r||a.forEach((function(t){if(t.hovering){t.hovering=!1;var n=t.options;["mouseout","mouseleave"].forEach((function(i){var a=l.getEventHandlerName(i),o=l.createMouseEvent(i,e);"function"==typeof n[a]&&c.push([n[a],o,t])}))}}))),r&&s.indexOf("dblclick")>-1&&"function"==typeof h.onDblclick){if("click"===e.type&&"function"==typeof h.onClick)return clearTimeout(r.clickTimeout),r.clickTimeout=setTimeout((function(){delete r.clickTimeout,h.onClick.call(r,e)}),u),e.stopImmediatePropagation(),void e.preventDefault();"dblclick"===e.type&&r.clickTimeout&&(clearTimeout(r.clickTimeout),delete r.clickTimeout)}r&&"function"==typeof h[d]&&0===c.length&&c.push([h[d],e,r]),c.length>0&&(e.stopImmediatePropagation(),e.preventDefault(),c.forEach((function(e){e[0].call(e[2],e[1])})))},collapseHoverEvents:i}}},MoIz:function(e,t,n){e.exports=function(e){var t=n("wU0g")(e);return e.Annotation.Element.extend({setDataLimits:function(){var e=this._model,n=this.options,l=this.chartInstance,i=l.scales[n.xScaleID],a=l.scales[n.yScaleID],o=l.chartArea;if(e.ranges={},o){var r=0,s=0;i&&(r=t.isValid(n.xMin)?n.xMin:i.getPixelForValue(o.left),s=t.isValid(n.xMax)?n.xMax:i.getPixelForValue(o.right),e.ranges[n.xScaleID]={min:Math.min(r,s),max:Math.max(r,s)}),a&&(r=t.isValid(n.yMin)?n.yMin:a.getPixelForValue(o.bottom),s=t.isValid(n.yMax)?n.yMax:a.getPixelForValue(o.top),e.ranges[n.yScaleID]={min:Math.min(r,s),max:Math.max(r,s)})}},configure:function(){var e=this._model,n=this.options,l=this.chartInstance,i=l.scales[n.xScaleID],a=l.scales[n.yScaleID],o=l.chartArea;e.clip={x1:o.left,x2:o.right,y1:o.top,y2:o.bottom};var r,s,u=o.left,c=o.top,d=o.right,h=o.bottom;i&&(r=t.isValid(n.xMin)?i.getPixelForValue(n.xMin):o.left,s=t.isValid(n.xMax)?i.getPixelForValue(n.xMax):o.right,u=Math.min(r,s),d=Math.max(r,s)),a&&(r=t.isValid(n.yMin)?a.getPixelForValue(n.yMin):o.bottom,s=t.isValid(n.yMax)?a.getPixelForValue(n.yMax):o.top,c=Math.min(r,s),h=Math.max(r,s)),e.left=u,e.top=c,e.right=d,e.bottom=h,e.borderColor=n.borderColor,e.borderWidth=n.borderWidth,e.backgroundColor=n.backgroundColor},inRange:function(e,t){var n=this._model;return n&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},getCenterPoint:function(){var e=this._model;return{x:(e.right+e.left)/2,y:(e.bottom+e.top)/2}},getWidth:function(){var e=this._model;return Math.abs(e.right-e.left)},getHeight:function(){var e=this._model;return Math.abs(e.bottom-e.top)},getArea:function(){return this.getWidth()*this.getHeight()},draw:function(){var e=this._view,t=this.chartInstance.chart.ctx;t.save(),t.beginPath(),t.rect(e.clip.x1,e.clip.y1,e.clip.x2-e.clip.x1,e.clip.y2-e.clip.y1),t.clip(),t.lineWidth=e.borderWidth,t.strokeStyle=e.borderColor,t.fillStyle=e.backgroundColor;var n=e.right-e.left,l=e.bottom-e.top;t.fillRect(e.left,e.top,n,l),t.strokeRect(e.left,e.top,n,l),t.restore()}})}},SjEX:function(e,t){e.exports={getYears:function(){const e=(new Date).getFullYear(),t=[];for(let n=1990;n<=e;n++)t.push(n);return t}}},"Ym+k":function(e,t,n){var l=n("MO+k");(l="function"==typeof l?l:window.Chart).Annotation=l.Annotation||{},l.Annotation.drawTimeOptions={afterDraw:"afterDraw",afterDatasetsDraw:"afterDatasetsDraw",beforeDatasetsDraw:"beforeDatasetsDraw"},l.Annotation.defaults={drawTime:"afterDatasetsDraw",dblClickSpeed:350,events:[],annotations:[]},l.Annotation.labelDefaults={backgroundColor:"rgba(0,0,0,0.8)",fontFamily:l.defaults.global.defaultFontFamily,fontSize:l.defaults.global.defaultFontSize,fontStyle:"bold",fontColor:"#fff",xPadding:6,yPadding:6,cornerRadius:6,position:"center",xAdjust:0,yAdjust:0,enabled:!1,content:null},l.Annotation.Element=n("xxsC")(l),l.Annotation.types={line:n("u5p2")(l),box:n("MoIz")(l)};var i=n("grSx")(l);e.exports=i,l.pluginService.register(i)},grSx:function(e,t,n){e.exports=function(e){var t=e.helpers,l=n("wU0g")(e),i=n("HX2K")(e),a=e.Annotation.types;function o(e){l.decorate(e,"afterDataLimits",(function(e,t){e&&e(t),l.adjustScaleRange(t)}))}function r(e){return function(t,n){var i=t.annotation.options.drawTime;l.elements(t).filter((function(t){return e===(t.options.drawTime||i)})).forEach((function(e){e.transition(n).draw()}))}}return{beforeInit:function(e){var n=e.options,i=e.annotation={elements:{},options:l.initConfig(n.annotation||{}),onDestroy:[],firstRun:!0,supported:!1};e.ensureScalesHaveIDs(),n.scales&&(i.supported=!0,t.each(n.scales.xAxes,o),t.each(n.scales.yAxes,o))},beforeUpdate:function(e){var t=e.annotation;if(t.supported){t.firstRun?t.firstRun=!1:t.options=l.initConfig(e.options.annotation||{});var n=[];t.options.annotations.forEach((function(i){var o=i.id||l.objectId();if(!t.elements[o]&&a[i.type]){var r=new(0,a[i.type])({id:o,options:i,chartInstance:e});r.initialize(),t.elements[o]=r,i.id=o,n.push(o)}else t.elements[o]&&n.push(o)})),Object.keys(t.elements).forEach((function(e){-1===n.indexOf(e)&&(t.elements[e].destroy(),delete t.elements[e])}))}},afterScaleUpdate:function(e){l.elements(e).forEach((function(e){e.configure()}))},beforeDatasetsDraw:r("beforeDatasetsDraw"),afterDatasetsDraw:r("afterDatasetsDraw"),afterDraw:r("afterDraw"),afterInit:function(e){var n=e.annotation.options.events;if(t.isArray(n)&&n.length>0){var l=e.chart.canvas,a=i.dispatcher.bind(e);i.collapseHoverEvents(n).forEach((function(n){t.addEvent(l,n,a),e.annotation.onDestroy.push((function(){t.removeEvent(l,n,a)}))}))}},destroy:function(e){for(var t=e.annotation.onDestroy;t.length>0;)t.pop()()}}}},u5p2:function(e,t,n){e.exports=function(e){var t=e.helpers,l=n("wU0g")(e);function i(e){var t=(e.x2-e.x1)/(e.y2-e.y1),n=e.x1||0;this.m=t,this.b=n,this.getX=function(l){return t*(l-e.y1)+n},this.getY=function(l){return(l-n)/t+e.y1},this.intersects=function(e,t,n){n=n||.001;var l=this.getY(e),i=this.getX(t);return(!isFinite(l)||Math.abs(t-l)<n)&&(!isFinite(i)||Math.abs(e-i)<n)}}return e.Annotation.Element.extend({setDataLimits:function(){var e=this._model,t=this.options;e.ranges={},e.ranges[t.scaleID]={min:t.value,max:t.endValue||t.value}},configure:function(){var e,n,a=this._model,o=this.options,r=this.chartInstance,s=r.chart.ctx,u=r.scales[o.scaleID];if(u&&(e=l.isValid(o.value)?u.getPixelForValue(o.value):NaN,n=l.isValid(o.endValue)?u.getPixelForValue(o.endValue):e),!isNaN(e)){var c=r.chartArea;a.clip={x1:c.left,x2:c.right,y1:c.top,y2:c.bottom},"horizontal"==this.options.mode?(a.x1=c.left,a.x2=c.right,a.y1=e,a.y2=n):(a.y1=c.top,a.y2=c.bottom,a.x1=e,a.x2=n),a.line=new i(a),a.mode=o.mode,a.labelBackgroundColor=o.label.backgroundColor,a.labelFontFamily=o.label.fontFamily,a.labelFontSize=o.label.fontSize,a.labelFontStyle=o.label.fontStyle,a.labelFontColor=o.label.fontColor,a.labelXPadding=o.label.xPadding,a.labelYPadding=o.label.yPadding,a.labelCornerRadius=o.label.cornerRadius,a.labelPosition=o.label.position,a.labelXAdjust=o.label.xAdjust,a.labelYAdjust=o.label.yAdjust,a.labelEnabled=o.label.enabled,a.labelContent=o.label.content,s.font=t.fontString(a.labelFontSize,a.labelFontStyle,a.labelFontFamily);var d=s.measureText(a.labelContent).width,h=s.measureText("M").width,f=function(e,t,n,l,i){var a=e.line,o={},r=0,s=0;switch(!0){case"vertical"==e.mode&&"top"==e.labelPosition:r=t/2+e.labelXAdjust,o.y=e.y1+(s=i+e.labelYAdjust),o.x=(isFinite(a.m)?a.getX(o.y):e.x1)-r;break;case"vertical"==e.mode&&"bottom"==e.labelPosition:r=t/2+e.labelXAdjust,o.y=e.y2-(s=n+i+e.labelYAdjust),o.x=(isFinite(a.m)?a.getX(o.y):e.x1)-r;break;case"horizontal"==e.mode&&"left"==e.labelPosition:s=-n/2+e.labelYAdjust,o.x=e.x1+(r=l+e.labelXAdjust),o.y=a.getY(o.x)+s;break;case"horizontal"==e.mode&&"right"==e.labelPosition:s=-n/2+e.labelYAdjust,o.x=e.x2-(r=t+l+e.labelXAdjust),o.y=a.getY(o.x)+s;break;default:o.x=(e.x1+e.x2-t)/2+e.labelXAdjust,o.y=(e.y1+e.y2-n)/2+e.labelYAdjust}return o}(a,d,h,a.labelXPadding,a.labelYPadding);a.labelX=f.x-a.labelXPadding,a.labelY=f.y-a.labelYPadding,a.labelWidth=d+2*a.labelXPadding,a.labelHeight=h+2*a.labelYPadding,a.borderColor=o.borderColor,a.borderWidth=o.borderWidth,a.borderDash=o.borderDash||[],a.borderDashOffset=o.borderDashOffset||0}},inRange:function(e,t){var n=this._model;return n.line&&n.line.intersects(e,t,this.getHeight())||n.labelEnabled&&n.labelContent&&e>=n.labelX&&e<=n.labelX+n.labelWidth&&t>=n.labelY&&t<=n.labelY+n.labelHeight},getCenterPoint:function(){return{x:(this._model.x2+this._model.x1)/2,y:(this._model.y2+this._model.y1)/2}},getWidth:function(){return Math.abs(this._model.right-this._model.left)},getHeight:function(){return this._model.borderWidth||1},getArea:function(){return Math.sqrt(Math.pow(this.getWidth(),2)+Math.pow(this.getHeight(),2))},draw:function(){var e=this._view,n=this.chartInstance.chart.ctx;e.clip&&(n.save(),n.beginPath(),n.rect(e.clip.x1,e.clip.y1,e.clip.x2-e.clip.x1,e.clip.y2-e.clip.y1),n.clip(),n.lineWidth=e.borderWidth,n.strokeStyle=e.borderColor,n.setLineDash&&n.setLineDash(e.borderDash),n.lineDashOffset=e.borderDashOffset,n.beginPath(),n.moveTo(e.x1,e.y1),n.lineTo(e.x2,e.y2),n.stroke(),e.labelEnabled&&e.labelContent&&(n.beginPath(),n.rect(e.clip.x1,e.clip.y1,e.clip.x2-e.clip.x1,e.clip.y2-e.clip.y1),n.clip(),n.fillStyle=e.labelBackgroundColor,t.drawRoundedRectangle(n,e.labelX,e.labelY,e.labelWidth,e.labelHeight,e.labelCornerRadius),n.fill(),n.font=t.fontString(e.labelFontSize,e.labelFontStyle,e.labelFontFamily),n.fillStyle=e.labelFontColor,n.textAlign="center",n.textBaseline="middle",n.fillText(e.labelContent,e.labelX+e.labelWidth/2,e.labelY+e.labelHeight/2)),n.restore())}})}},wU0g:function(e,t){function n(){}function l(e){var t=e.annotation.elements;return Object.keys(t).map((function(e){return t[e]}))}function i(){return Math.random().toString(36).substr(2,6)}function a(e){return null!=e&&("number"==typeof e?isFinite(e):!!e)}function o(e,t,n){e["$"+t]||(e[t]?(e["$"+t]=e[t].bind(e),e[t]=function(){var l=[e["$"+t]].concat(Array.prototype.slice.call(arguments));return n.apply(e,l)}):e[t]=function(){var t=[void 0].concat(Array.prototype.slice.call(arguments));return n.apply(e,t)})}function r(e,t){e.forEach((function(e){(t?e[t]:e)()}))}function s(e){return"on"+e[0].toUpperCase()+e.substring(1)}function u(e,t){try{return new MouseEvent(e,t)}catch(i){try{var n=document.createEvent("MouseEvent");return n.initMouseEvent(e,t.canBubble,t.cancelable,t.view,t.detail,t.screenX,t.screenY,t.clientX,t.clientY,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,t.button,t.relatedTarget),n}catch(a){var l=document.createEvent("Event");return l.initEvent(e,t.canBubble,t.cancelable),l}}}e.exports=function(e){var t=e.helpers;return{initConfig:function(n){return n=t.configMerge(e.Annotation.defaults,n),t.isArray(n.annotations)&&n.annotations.forEach((function(n){n.label=t.configMerge(e.Annotation.labelDefaults,n.label)})),n},elements:l,callEach:r,noop:n,objectId:i,isValid:a,decorate:o,adjustScaleRange:function(e){var t,n,i,a,o,r=(t=e.id,n=l(e.chart),i=e.min,a=e.max,{min:(o=n.filter((function(e){return!!e._model.ranges[t]})).map((function(e){return e._model.ranges[t]}))).map((function(e){return Number(e.min)})).reduce((function(e,t){return isFinite(t)&&!isNaN(t)&&t<e?t:e}),i),max:o.map((function(e){return Number(e.max)})).reduce((function(e,t){return isFinite(t)&&!isNaN(t)&&t>e?t:e}),a)});void 0===e.options.ticks.min&&void 0===e.options.ticks.suggestedMin&&(e.min=r.min),void 0===e.options.ticks.max&&void 0===e.options.ticks.suggestedMax&&(e.max=r.max),e.handleTickRangeOptions&&e.handleTickRangeOptions()},getNearestItems:function(e,n){var l=Number.POSITIVE_INFINITY;return e.filter((function(e){return e.inRange(n.x,n.y)})).reduce((function(e,i){var a=i.getCenterPoint(),o=t.distanceBetweenPoints(n,a);return o<l?(e=[i],l=o):o===l&&e.push(i),e}),[]).sort((function(e,t){var n=e.getArea(),l=t.getArea();return n>l||n<l?n-l:e._index-t._index})).slice(0,1)[0]},getEventHandlerName:s,createMouseEvent:u}}},xxsC:function(e,t){e.exports=function(e){var t=e.helpers;return e.Element.extend({initialize:function(){this.hidden=!1,this.hovering=!1,this._model=t.clone(this._model)||{},this.setDataLimits()},destroy:function(){},setDataLimits:function(){},configure:function(){},inRange:function(){},getCenterPoint:function(){},getWidth:function(){},getHeight:function(){},getArea:function(){},draw:function(){}})}}}]);