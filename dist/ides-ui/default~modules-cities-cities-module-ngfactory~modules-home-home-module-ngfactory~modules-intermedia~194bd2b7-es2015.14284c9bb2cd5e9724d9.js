(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"7QvK":function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var l=e("lJxs"),i=e("6n/F"),o=e("l+Jo"),r=e.n(o);class a{constructor(t,n){this.tagService=t,this.regionService=n,this.stopwords=[],this.newTag="",this.chartOptions={},this.data=[],this.tagsData=[],this.updateDemo=!1,this.highcharts=i,r()(this.highcharts)}ngOnInit(){this.citySelected=this.regionService.citySelect,this.citySelectedId&&(this.getStopwords(),this.listTags(this.citySelectedId))}ngOnChanges(t){t.citySelectedId&&(this.getStopwords(),this.listTags(this.citySelectedId))}getStopwords(){this.tagService.getStopwords().pipe(Object(l.a)(t=>t)).subscribe(t=>{t.data.length>0&&(this.stopwords=t.data[0].stopwords)})}parseStopword(t){let n=[];return t.split(" ").forEach(t=>{void 0===this.stopwords.find(n=>n===t.toUpperCase().trim())&&n.push(t.toUpperCase().trim())}),n}onAddTag(t,n){let e=this.parseStopword(t);for(let l=0;l<e.length;l++)this.tagService.addTag({text:e[l].toLowerCase().trim(),id_Canton:this.citySelectedId,type:n}).subscribe(t=>{this.newTag="",this.listTags(this.citySelectedId)},t=>{console.log(t)})}listTags(t){this.tagService.getTagsByCantByType(t).pipe(Object(l.a)(t=>t)).subscribe(t=>{this.tagsData=[],t.data.forEach(t=>{t.positive>t.negative&&t.positive>t.neutro&&this.tagsData.push({name:t._id,weight:t.positive,color:"#008000"}),t.negative>t.positive&&t.negative>t.neutro&&this.tagsData.push({name:t._id,weight:t.negative,color:"#ff6633"}),t.neutro>t.positive&&t.neutro>t.negative&&this.tagsData.push({name:t._id,weight:t.neutro,color:"#696969"})}),this.createWordCloud()})}createWordCloud(){this.chartOptions={chart:{plotBorderWidth:0,animation:!0,backgroundColor:"transparent"},series:[{type:"wordcloud",data:this.tagsData,name:"Value"}],title:{text:""},exporting:{enabled:!1}}}}},O3Op:function(t,n,e){"use strict";var l=e("8Y7J"),i=e("TSSN"),o=e("s7LF"),r=e("c/fn"),a=e("SVse"),s=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function u(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,3,"span",[],[[1,"aria-hidden",0]],null,null,null,null)),l["\u0275prd"](512,null,a["\u0275NgClassImpl"],a["\u0275NgClassR2Impl"],[l.IterableDiffers,l.KeyValueDiffers,l.ElementRef,l.Renderer2]),l["\u0275did"](2,278528,null,0,a.NgClass,[a["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),l["\u0275pod"](3,{"ui-clickable":0,"ui-button-icon-left":1,"ui-button-icon-right":2})],(function(t,n){var e=n.component,l=e.icon,i=t(n,3,0,!0,"left"===e.iconPos,"right"===e.iconPos);t(n,2,0,l,i)}),(function(t,n){t(n,0,0,!0)}))}function d(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,10,"button",[],[[1,"type",0],[8,"disabled",0]],[[null,"click"],[null,"focus"],[null,"blur"]],(function(t,n,e){var l=!0,i=t.component;return"click"===n&&(l=!1!==i.onClick.emit(e)&&l),"focus"===n&&(l=!1!==i.onFocus.emit(e)&&l),"blur"===n&&(l=!1!==i.onBlur.emit(e)&&l),l}),null,null)),l["\u0275prd"](512,null,a["\u0275NgClassImpl"],a["\u0275NgClassR2Impl"],[l.IterableDiffers,l.KeyValueDiffers,l.ElementRef,l.Renderer2]),l["\u0275did"](2,278528,null,0,a.NgClass,[a["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),l["\u0275pod"](3,{"ui-button ui-widget ui-state-default ui-corner-all":0,"ui-button-icon-only":1,"ui-button-text-icon-left":2,"ui-button-text-icon-right":3,"ui-button-text-only":4,"ui-button-text-empty":5,"ui-state-disabled":6}),l["\u0275prd"](512,null,a["\u0275NgStyleImpl"],a["\u0275NgStyleR2Impl"],[l.ElementRef,l.KeyValueDiffers,l.Renderer2]),l["\u0275did"](5,278528,null,0,a.NgStyle,[a["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),l["\u0275ncd"](null,0),(t()(),l["\u0275and"](16777216,null,null,1,null,u)),l["\u0275did"](8,16384,null,0,a.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),l["\u0275eld"](9,0,null,null,1,"span",[["class","ui-button-text ui-clickable"]],[[1,"aria-hidden",0]],null,null,null,null)),(t()(),l["\u0275ted"](10,null,["",""]))],(function(t,n){var e=n.component,l=e.styleClass,i=t(n,3,0,!0,e.icon&&!e.label,e.icon&&e.label&&"left"===e.iconPos,e.icon&&e.label&&"right"===e.iconPos,!e.icon&&e.label,!e.icon&&!e.label,e.disabled);t(n,2,0,l,i),t(n,5,0,e.style),t(n,8,0,e.icon)}),(function(t,n){var e=n.component;t(n,0,0,e.type,e.disabled),t(n,9,0,e.icon&&!e.label),t(n,10,0,e.label||"ui-btn")}))}var c=e("bICO"),h=e("JUyF");e("7QvK"),e("O4YN"),e("CzLl"),e.d(n,"a",(function(){return p})),e.d(n,"b",(function(){return v}));var p=l["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]    .ui-button{background-color:#f5a700;border-color:#f5a700;border-radius:20px;padding:6px}[_nghost-%COMP%]    .ui-inputtext{border-radius:15px}h4.titulos-word[_ngcontent-%COMP%]{font:Roboto,sans-serif!important;padding-top:.5em!important;color:#24355a;font-weight:700!important}"]],data:{}});function g(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,3,"div",[["class","col-lg-12 col-xl-12 pl-4 pt-4 text-left"]],null,null,null,null,null)),(t()(),l["\u0275eld"](1,0,null,null,2,"h4",[["class","titulos-word"],["translate",""]],null,null,null,null,null)),l["\u0275did"](2,8536064,null,0,i.e,[i.k,l.ElementRef,l.ChangeDetectorRef],{translate:[0,"translate"]},null),(t()(),l["\u0275ted"](-1,null,["describe_city"]))],(function(t,n){t(n,2,0,"")}),null)}function f(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,6,"div",[["class","col-md-6 text-right pt-4"]],null,null,null,null,null)),(t()(),l["\u0275eld"](1,0,null,null,5,"input",[["pInputText",""],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(t,n,e){var i=!0,o=t.component;return"input"===n&&(i=!1!==l["\u0275nov"](t,2)._handleInput(e.target.value)&&i),"blur"===n&&(i=!1!==l["\u0275nov"](t,2).onTouched()&&i),"compositionstart"===n&&(i=!1!==l["\u0275nov"](t,2)._compositionStart()&&i),"compositionend"===n&&(i=!1!==l["\u0275nov"](t,2)._compositionEnd(e.target.value)&&i),"ngModelChange"===n&&(i=!1!==(o.newTag=e)&&i),i}),null,null)),l["\u0275did"](2,16384,null,0,o.d,[l.Renderer2,l.ElementRef,[2,o.a]],null,null),l["\u0275prd"](1024,null,o.m,(function(t){return[t]}),[o.d]),l["\u0275did"](4,671744,null,0,o.r,[[8,null],[8,null],[8,null],[6,o.m]],{model:[0,"model"]},{update:"ngModelChange"}),l["\u0275prd"](2048,null,o.n,null,[o.r]),l["\u0275did"](6,16384,null,0,o.o,[[4,o.n]],null,null)],(function(t,n){t(n,4,0,n.component.newTag)}),(function(t,n){t(n,1,0,l["\u0275nov"](n,6).ngClassUntouched,l["\u0275nov"](n,6).ngClassTouched,l["\u0275nov"](n,6).ngClassPristine,l["\u0275nov"](n,6).ngClassDirty,l["\u0275nov"](n,6).ngClassValid,l["\u0275nov"](n,6).ngClassInvalid,l["\u0275nov"](n,6).ngClassPending)}))}function m(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,2,"div",[["class","col-md-6 text-left pt-4"]],null,null,null,null,null)),(t()(),l["\u0275eld"](1,0,null,null,1,"p-button",[["label","ENVIAR"]],null,[[null,"onClick"]],(function(t,n,e){var l=!0,i=t.component;return"onClick"===n&&(l=!1!==i.onAddTag(i.newTag,"positive")&&l),l}),d,s)),l["\u0275did"](2,49152,null,0,r.a,[],{label:[0,"label"]},{onClick:"onClick"})],(function(t,n){t(n,2,0,"ENVIAR")}),null)}function y(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,3,"div",[["class","col-lg-12 col-xl-12 pl-4 pt-4 text-left"]],null,null,null,null,null)),(t()(),l["\u0275eld"](1,0,null,null,2,"h4",[["class","titulos-word"],["translate",""]],null,null,null,null,null)),l["\u0275did"](2,8536064,null,0,i.e,[i.k,l.ElementRef,l.ChangeDetectorRef],{translate:[0,"translate"]},null),(t()(),l["\u0275ted"](-1,null,["word_cloud"]))],(function(t,n){t(n,2,0,"")}),null)}function v(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,11,"div",[["class","row"]],null,null,null,null,null)),(t()(),l["\u0275and"](16777216,null,null,1,null,g)),l["\u0275did"](2,16384,null,0,a.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),l["\u0275and"](16777216,null,null,1,null,f)),l["\u0275did"](4,16384,null,0,a.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),l["\u0275and"](16777216,null,null,1,null,m)),l["\u0275did"](6,16384,null,0,a.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),l["\u0275and"](16777216,null,null,1,null,y)),l["\u0275did"](8,16384,null,0,a.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),l["\u0275eld"](9,0,null,null,2,"div",[["class","col-md-12"]],null,null,null,null,null)),(t()(),l["\u0275eld"](10,0,null,null,1,"highcharts-chart",[["style","width: 100%; height: 400px; display: block;"]],null,[[null,"updateChange"]],(function(t,n,e){var l=!0;return"updateChange"===n&&(l=!1!==(t.component.updateDemo=e)&&l),l}),c.b,c.a)),l["\u0275did"](11,180224,null,0,h.a,[l.ElementRef,l.NgZone],{Highcharts:[0,"Highcharts"],oneToOne:[1,"oneToOne"],options:[2,"options"],update:[3,"update"]},{updateChange:"updateChange"})],(function(t,n){var e=n.component;t(n,2,0,!e.citySelected),t(n,4,0,!e.citySelected),t(n,6,0,!e.citySelected),t(n,8,0,!e.citySelected),t(n,11,0,e.highcharts,!0,e.chartOptions,e.updateDemo)}),null)}},O4YN:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var l=e("AytR"),i=e("IheW"),o=e("lJxs"),r=e("8Y7J"),a=e("OiFK");const s={headers:new i.g({"Content-Type":"application/json"})};let u=(()=>{class t{constructor(t,n){this.httpClient=t,this.utilsService=n,this.serverUrl=l.a.serverUrl,this.urlTag=l.a.tag.base,this.urlTagsByCantByType=l.a.home.getTagsByCantByType,this.urlAddTag=l.a.home.addTag,this.urlStopwords=l.a.home.getStopwords}listTags(t,n={}){const e=this.utilsService.buildFilters(t);return this.httpClient.post(this.serverUrl+this.urlTag+"/filter"+e,n).pipe(Object(o.a)(t=>t.results))}addTag(t){return this.httpClient.post(this.serverUrl+this.urlAddTag,t,s)}editTag(t,n,e){return this.httpClient.put(this.serverUrl+this.urlTag+"/"+n,t,s)}deleteTag(t){return this.httpClient.delete(this.serverUrl+this.urlTag+"/"+t,s)}getTag(t,n){return this.httpClient.get(this.serverUrl+this.urlTag+"/"+t).pipe(Object(o.a)(t=>t.results.data))}getTagsByCantByType(t,n="all"){return this.httpClient.post(this.serverUrl+this.urlTagsByCantByType,{id_Canton:t,type:n},s).pipe(Object(o.a)(t=>t.results))}getStopwords(){return this.httpClient.post(this.serverUrl+this.urlStopwords,s).pipe(Object(o.a)(t=>t.results))}}return t.ngInjectableDef=r["\u0275\u0275defineInjectable"]({factory:function(){return new t(r["\u0275\u0275inject"](i.c),r["\u0275\u0275inject"](a.a))},token:t,providedIn:"root"}),t})()},bICO:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return o}));var l=e("8Y7J"),i=(e("JUyF"),l["\u0275crt"]({encapsulation:2,styles:[],data:{}}));function o(t){return l["\u0275vid"](0,[],null,null)}},"l+Jo":function(t,n,e){var l,i;!function(o){t.exports?(o.default=o,t.exports=o):(l=[e("6n/F")],void 0===(i=(function(t){return o(t),o.Highcharts=t,o}).apply(n,l))||(t.exports=i))}((function(t){function n(t,n,e,l){t.hasOwnProperty(n)||(t[n]=l.apply(null,e))}n(t=t?t._modules:{},"mixins/draw-point.js",[],(function(){var t=function(t){var n,e=this,l=e.graphic,i=t.animatableAttribs,o=t.onComplete,r=t.css,a=t.renderer,s=null===(n=e.series)||void 0===n?void 0:n.options.animation;if(e.shouldDraw())l||(e.graphic=l=a[t.shapeType](t.shapeArgs).add(t.group)),l.css(r).attr(t.attribs).animate(i,!t.isNew&&s,o);else if(l){var u=function(){e.graphic=l=l.destroy(),"function"==typeof o&&o()};Object.keys(i).length?l.animate(i,void 0,(function(){u()})):u()}};return function(n){(n.attribs=n.attribs||{}).class=this.getClassName(),t.call(this,n)}})),n(t,"mixins/polygon.js",[t["parts/Globals.js"],t["parts/Utilities.js"]],(function(t,n){var e=n.find,l=n.isArray,i=n.isNumber,o=t.deg2rad,r=function(t,n){return n=i(n)?n:14,n=Math.pow(10,n),Math.round(t*n)/n},a=function(t,n){return t=t.map((function(t){return t[0]*n[0]+t[1]*n[1]})),{min:Math.min.apply(this,t),max:Math.max.apply(this,t)}},s=function(t,n){var e=t[0];t=t[1];var l=o*-n;return n=Math.cos(l),l=Math.sin(l),[r(e*n-t*l),r(e*l+t*n)]},u=function(t,n,e){return[(t=s([t[0]-n[0],t[1]-n[1]],e))[0]+n[0],t[1]+n[1]]},d=function(t){var n=t.axes;if(!l(n)){n=[];var i=i=t.concat([t[0]]);i.reduce((function(t,l){var i=function(t,n){var e=n[0]-t[0];return[[-(t=n[1]-t[1]),e],[t,-e]]}(t,l)[0];return e(n,(function(t){return t[0]===i[0]&&t[1]===i[1]}))||n.push(i),l})),t.axes=n}return n};return{getBoundingBoxFromPolygon:function(t){return t.reduce((function(t,n){var e=n[0];return n=n[1],t.left=Math.min(e,t.left),t.right=Math.max(e,t.right),t.bottom=Math.max(n,t.bottom),t.top=Math.min(n,t.top),t}),{left:Number.MAX_VALUE,right:-Number.MAX_VALUE,bottom:-Number.MAX_VALUE,top:Number.MAX_VALUE})},getPolygon:function(t,n,e,l,i){var o=[t,n],r=t-e/2;return t+=e/2,[[r,e=n-l/2],[t,e],[t,n+=l/2],[r,n]].map((function(t){return u(t,o,-i)}))},isPolygonsColliding:function(t,n){var l=function(t,n){return t=d(t),n=d(n),t.concat(n)}(t,n);return!e(l,(function(e){var l=a(t,e);return!!((e=a(n,e)).min>l.max||e.max<l.min)}))},movePolygon:function(t,n,e){return e.map((function(e){return[e[0]+t,e[1]+n]}))},rotate2DToOrigin:s,rotate2DToPoint:u}})),n(t,"modules/wordcloud.src.js",[t["parts/Globals.js"],t["parts/Utilities.js"],t["mixins/draw-point.js"],t["mixins/polygon.js"]],(function(t,n,e,l){function i(t,n){var e=!1,l=t.rect,i=t.polygon,o=t.lastCollidedWith,r=function(n){var e=n.rect;return(e=!(e.left>l.right||e.right<l.left||e.top>l.bottom||e.bottom<l.top))&&(t.rotation%90||n.rotation%90)&&(e=b(i,n.polygon)),e};return o&&((e=r(o))||delete t.lastCollidedWith),e||(e=!!c(n,(function(n){var e=r(n);return e&&(t.lastCollidedWith=n),e}))),e}function o(t,n){n=4*t;var e=Math.ceil((Math.sqrt(n)-1)/2),l=2*e+1,i=Math.pow(l,2),o=!1;return--l,1e4>=t&&("boolean"==typeof o&&n>=i-l&&(o={x:e-(i-n),y:-e}),i-=l,"boolean"==typeof o&&n>=i-l&&(o={x:-e,y:i-n-e}),i-=l,"boolean"==typeof o&&(o=n>=i-l?{x:i-n-e,y:e}:{x:e,y:e-(i-n-l)}),o.x*=5,o.y*=5),o}function r(t,n,e,l){var i=!1;return p(t)&&p(n)&&p(e)&&p(l)&&0<t&&-1<n&&l>e&&(i=e+n%t*((l-e)/(t-1||1))),i}function a(t,n){return!(-n.width/2<t.left&&n.width/2>t.right&&-n.height/2<t.top&&n.height/2>t.bottom)}function s(t,n){var e=n.placed,l=n.field,o=n.rectangle,r=n.polygon,s=n.spiral,u=1,c={x:0,y:0},h=t.rect=d({},o);for(t.polygon=r,t.rotation=n.rotation;!1!==c&&(i(t,e)||a(h,l));)c=s(u),g(c)&&(h.left=o.left+c.x,h.right=o.right+c.x,h.top=o.top+c.y,h.bottom=o.bottom+c.y,t.polygon=x(c.x,c.y,r)),u++;return c}function u(t,n){if(g(t)&&g(n)){var e=n.bottom-n.top,l=n.right-n.left,i=t.ratioY;t=f(t,{width:t.width+(e=l*(n=t.ratioX)>e*i?l:e)*n*2,height:t.height+e*i*2})}return t}var d=n.extend,c=n.find,h=n.isArray,p=n.isNumber,g=n.isObject,f=n.merge,m=t.noop,y=l.getBoundingBoxFromPolygon,v=l.getPolygon,b=l.isPolygonsColliding,x=l.movePolygon,w=t.Series;(n=n.seriesType)("wordcloud","column",{allowExtendPlayingField:!0,animation:{duration:500},borderWidth:0,clip:!1,colorByPoint:!0,minFontSize:1,maxFontSize:25,placementStrategy:"center",rotation:{from:0,orientations:2,to:90},showInLegend:!1,spiral:"rectangular",style:{fontFamily:"sans-serif",fontWeight:"900",whiteSpace:"nowrap"},tooltip:{followPointer:!0,pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.weight}</b><br/>'}},{animate:w.prototype.animate,animateDrilldown:m,animateDrillupFrom:m,setClip:m,bindAxes:function(){var t={endOnTick:!1,gridLineWidth:0,lineWidth:0,maxPadding:0,startOnTick:!1,title:null,tickPositions:[]};w.prototype.bindAxes.call(this),d(this.yAxis.options,t),d(this.xAxis.options,t)},pointAttribs:function(n,e){return delete(n=t.seriesTypes.column.prototype.pointAttribs.call(this,n,e)).stroke,delete n["stroke-width"],n},deriveFontSize:function(t,n,e){return t=p(t)?t:0,n=p(n)?n:1,e=p(e)?e:1,Math.floor(Math.max(e,t*n))},drawPoints:function(){var t=this,n=t.hasRendered,e=t.xAxis,l=t.yAxis,i=t.group,o=t.options,r=o.animation,a=o.allowExtendPlayingField,c=t.chart.renderer,h=c.text().add(i),f=[],m=t.placementStrategy[o.placementStrategy],b=o.rotation,x=t.points.map((function(t){return t.weight})),w=Math.max.apply(null,x),C=t.points.concat().sort((function(t,n){return n.weight-t.weight}));t.group.attr({scaleX:1,scaleY:1}),C.forEach((function(n){var e=t.deriveFontSize(1/w*n.weight,o.maxFontSize,o.minFontSize);e=d({fontSize:e+"px"},o.style),h.css(e).attr({x:0,y:0,text:n.name}),e=h.getBBox(!0),n.dimensions={height:e.height,width:e.width}}));var T=function(t,n,e){e=e.reduce((function(t,n){n=n.dimensions;var e=Math.max(n.width,n.height);return t.maxHeight=Math.max(t.maxHeight,n.height),t.maxWidth=Math.max(t.maxWidth,n.width),t.area+=e*e,t}),{maxHeight:0,maxWidth:0,area:0});var l=t>n?t/n:1;return{width:(e=Math.max(e.maxHeight,e.maxWidth,.85*Math.sqrt(e.area)))*l,height:e*(t=n>t?n/t:1),ratioX:l,ratioY:t}}(e.len,l.len,C),S=function(t,n){var e,l=[];for(e=1;1e4>e;e++)l.push(t(e,n));return function(t){return 1e4>=t&&l[t-1]}}(t.spirals[o.spiral],{field:T});C.forEach((function(e){var l=t.deriveFontSize(1/w*e.weight,o.maxFontSize,o.minFontSize);l=d({fontSize:l+"px"},o.style);var h=m(e,{data:C,field:T,placed:f,rotation:b}),x=d(t.pointAttribs(e,e.selected&&"select"),{align:"center","alignment-baseline":"middle",x:h.x,y:h.y,text:e.name,rotation:h.rotation}),M=v(h.x,h.y,e.dimensions.width,e.dimensions.height,h.rotation),I=y(M),A=s(e,{rectangle:I,polygon:M,field:T,placed:f,spiral:S,rotation:h.rotation});if(!A&&a&&(A=s(e,{rectangle:I,polygon:M,field:T=u(T,I),placed:f,spiral:S,rotation:h.rotation})),g(A)?(x.x+=A.x,x.y+=A.y,I.left+=A.x,I.right+=A.x,I.top+=A.y,I.bottom+=A.y,(!p((h=T).left)||h.left>I.left)&&(h.left=I.left),(!p(h.right)||h.right<I.right)&&(h.right=I.right),(!p(h.top)||h.top>I.top)&&(h.top=I.top),(!p(h.bottom)||h.bottom<I.bottom)&&(h.bottom=I.bottom),T=h,f.push(e),e.isNull=!1):e.isNull=!0,r){var N={x:x.x,y:x.y};n?(delete x.x,delete x.y):(x.x=0,x.y=0)}e.draw({animatableAttribs:N,attribs:x,css:l,group:i,renderer:c,shapeArgs:void 0,shapeType:"text"})})),h=h.destroy(),e=function(t,n,e){var l=2*Math.max(Math.abs(e.top),Math.abs(e.bottom));return e=2*Math.max(Math.abs(e.left),Math.abs(e.right)),Math.min(0<e?1/e*t:1,0<l?1/l*n:1)}(e.len,l.len,T),t.group.attr({scaleX:e,scaleY:e})},hasData:function(){return g(this)&&!0===this.visible&&h(this.points)&&0<this.points.length},placementStrategy:{random:function(t,n){var e=n.field;return n=n.rotation,{x:Math.round(e.width*(Math.random()+.5)/2)-e.width/2,y:Math.round(e.height*(Math.random()+.5)/2)-e.height/2,rotation:r(n.orientations,t.index,n.from,n.to)}},center:function(t,n){return{x:0,y:0,rotation:r((n=n.rotation).orientations,t.index,n.from,n.to)}}},pointArrayMap:["weight"],spirals:{archimedean:function(t,n){var e=n.field;n=!1,e=e.width*e.width+e.height*e.height;var l=.8*t;return 1e4>=t&&(n={x:l*Math.cos(l),y:l*Math.sin(l)},Math.min(Math.abs(n.x),Math.abs(n.y))<e||(n=!1)),n},rectangular:function(t,n){return t=o(t,n),n=n.field,t&&(t.x*=n.ratioX,t.y*=n.ratioY),t},square:o},utils:{extendPlayingField:u,getRotation:r,isPolygonsColliding:b,rotate2DToOrigin:l.rotate2DToOrigin,rotate2DToPoint:l.rotate2DToPoint},getPlotBox:function(){var t=this.chart,n=t.inverted,e=this[n?"yAxis":"xAxis"];return{translateX:(e?e.left:t.plotLeft)+(e?e.len:t.plotWidth)/2,translateY:((n=this[n?"xAxis":"yAxis"])?n.top:t.plotTop)+(n?n.len:t.plotHeight)/2,scaleX:1,scaleY:1}}},{draw:e,shouldDraw:function(){return!this.isNull},isValid:function(){return!0},weight:1})})),n(t,"masters/modules/wordcloud.src.js",[],(function(){}))}))}}]);