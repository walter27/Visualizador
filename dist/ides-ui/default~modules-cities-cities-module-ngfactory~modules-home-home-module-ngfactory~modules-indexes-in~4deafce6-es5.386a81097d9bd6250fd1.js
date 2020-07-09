function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"2+0p":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("mrSG"),a=n("8Y7J"),r=n("5RHE"),l=n.n(r),o=function(){function e(t){_classCallCheck(this,e),this.exportAsService=t,this.div=1.7,this.titleExport="",this.nameFile="download",this.height=200,this.downloadCSV=new a.EventEmitter,this.downloadOptions=[{id:"pdf",name:"PDF",check:!1},{id:"csv",name:"CSV",check:!1},{id:"jpeg",name:"JPEG",check:!1},{id:"png",name:"PNG",check:!1}]}return _createClass(e,[{key:"ngOnInit",value:function(){this.hiddenCSV&&this.downloadOptions.map((function(e){"csv"===e.id&&(e.hidden=!0)}))}},{key:"getOrigins",value:function(){var e="";return this.origins&&this.origins.forEach((function(t,n){0!==n&&(e+=", "),e+=t.name})),e}},{key:"getURI",value:function(e,t){return i.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i,a,r,l,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=document.getElementById(e),(a=i.cloneNode(!0)).height+=200,(r=a.getContext("2d")).font="20px Arial",r.fillStyle="png"!==t?"#FFF":"rgba(255, 255, 255, 0.5)",r.fillRect(0,0,a.width,a.height),r.drawImage(i,0,140,i.width,i.height),r.fillStyle="blue",r.fillText(this.titleExport,a.width/2-60,120),(l=new Image).src="/assets/logos/logo.png",r.drawImage(l,10,10,600/this.div,100/this.div),o=window.location.href,n.abrupt("return",(r.fillStyle="blue",r.font="16px Arial",r.fillText(o,10,a.height-10),console.log("image:",a.width,a.height),a.toDataURL("image/"+t,1)));case 8:case"end":return n.stop()}}),n,this)})))}},{key:"downloadCanvas",value:function(e,t){return i.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i,a,r,o,s,u,c,d,f=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i=e.target,document.getElementById(this.idElement).getContext("2d"),a=new l.a({orientation:"landscape"}),n.t0=t,n.next="pdf"===n.t0?4:"csv"===n.t0?13:"png"===n.t0?15:20;break;case 4:return n.next=6,this.getURI(this.idElement,"png");case 6:return r=n.sent,o=a.internal.pageSize.getWidth(),s=a.internal.pageSize.getHeight(),console.log("pdf:",o,s),(u=new Image).src=r,u.onload=function(){window.innerWidth<=768?"indexesGraph"==f.idElement?a.addImage(r,"png",50,20,180,180):a.addImage(r,"png",20,20,240,180):window.innerWidth>768&&window.innerWidth<1600?"indexesGraph"==f.idElement?a.addImage(r,"png",40,20,200,180):a.addImage(r,"png",20,20,240,180):"indexesGraph"==f.idElement?a.addImage(r,"png",50,20,220,180):a.addImage(r,"png",20,20,240,180),a.save(f.nameFile+".pdf")},n.abrupt("break",25);case 13:return this.downloadCSV.emit(this.nameFile),n.abrupt("break",25);case 15:return n.next=17,this.getURI(this.idElement,"png");case 17:return c=n.sent,i.href=c,i.download=this.nameFile+".png",n.abrupt("break",25);case 20:return n.next=22,this.getURI(this.idElement,"jpeg");case 22:return d=n.sent,i.href=d,i.download=this.nameFile+".jpeg",n.abrupt("break",25);case 25:case"end":return n.stop()}}),n,this)})))}}]),e}()},CzLl:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("AytR"),a=n("IheW"),r=n("lJxs"),l=n("8Y7J"),o=n("OiFK"),s=function(e){return e.Province="provincia",e.Canton="canton",e.Parish="parroquia",e}({}),u={headers:new a.g({"Content-Type":"application/json"})},c=function(){var e=function(){function e(t,n){_classCallCheck(this,e),this.httpClient=t,this.utilsService=n,this.serverUrl=i.a.serverUrl,this.urlProvince=i.a.province.base,this.urlCanton=i.a.canton.base,this.urlParish=i.a.parish.base}return _createClass(e,[{key:"listRegionsPublic",value:function(e,t){arguments.length>2&&void 0!==arguments[2]&&arguments[2];var n=this.utilsService.buildFilters(e);return this.httpClient.get(this.serverUrl+"api/"+s[t]+n).pipe(Object(r.a)((function(e){return e.results})))}},{key:"listRegions",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=this.utilsService.buildFilters(e);return this.httpClient.post(this.serverUrl+s[t]+"/filter/"+i,n).pipe(Object(r.a)((function(e){return e.results})))}},{key:"addRegion",value:function(e,t){return null===e.active&&(e.active=!1),this.httpClient.post(this.serverUrl+s[t],e,u)}},{key:"editRegion",value:function(e,t,n){return this.httpClient.put(this.serverUrl+s[n]+"/"+t,e,u)}},{key:"deleteRegion",value:function(e,t){return this.httpClient.delete(this.serverUrl+s[t]+"/"+e,u)}},{key:"getRegion",value:function(e,t){return this.httpClient.get(this.serverUrl+"api/"+s[t]+"/"+e).pipe(Object(r.a)((function(e){return e.results.data})))}}]),e}();return e.ngInjectableDef=l["\u0275\u0275defineInjectable"]({factory:function(){return new e(l["\u0275\u0275inject"](a.c),l["\u0275\u0275inject"](o.a))},token:e,providedIn:"root"}),e}()},EE5B:function(e,t,n){"use strict";var i=n("8Y7J"),a=n("SVse"),r=n("TSSN");n("2+0p"),n("I5r7"),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var l=i["\u0275crt"]({encapsulation:0,styles:[["@media screen and (max-width:575px){.download-data[_ngcontent-%COMP%]{margin-right:5px!important}}"]],data:{}});function o(e){return i["\u0275vid"](0,[(e()(),i["\u0275eld"](0,0,null,null,1,"a",[["class","dropdown-item cursor-pointer"]],null,[[null,"click"]],(function(e,t,n){var i=!0;return"click"===t&&(i=!1!==e.component.downloadCanvas(n,e.parent.context.$implicit.id)&&i),i}),null,null)),(e()(),i["\u0275ted"](1,null,[" "," "]))],null,(function(e,t){e(t,1,0,t.parent.context.$implicit.name)}))}function s(e){return i["\u0275vid"](0,[(e()(),i["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),i["\u0275and"](16777216,null,null,1,null,o)),i["\u0275did"](2,16384,null,0,a.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),i["\u0275and"](0,null,null,0))],(function(e,t){e(t,2,0,!t.context.$implicit.hidden)}),null)}function u(e){return i["\u0275vid"](0,[(e()(),i["\u0275eld"](0,0,null,null,9,"div",[["class","row pr-3 pl-3"]],null,null,null,null,null)),(e()(),i["\u0275eld"](1,0,null,null,8,"div",[["class","col-md-12 text-right text-uppercase ides-text-blue-dark pr-0 download-data d-none d-sm-none d-md-block"]],null,null,null,null,null)),(e()(),i["\u0275eld"](2,0,null,null,7,"div",[["class","dropdown"]],null,null,null,null,null)),(e()(),i["\u0275eld"](3,0,null,null,3,"button",[["aria-expanded","false"],["aria-haspopup","true"],["class","btn ides-dropdown dropdown-toggle ides-text-blue ides-dropdown-download pr-1"],["data-toggle","dropdown"],["id","dropdownMenuButton"],["type","button"]],null,null,null,null,null)),(e()(),i["\u0275eld"](4,0,null,null,2,"span",[["class","ides-mr-80 text-uppercase"],["translate",""]],null,null,null,null,null)),i["\u0275did"](5,8536064,null,0,r.e,[r.k,i.ElementRef,i.ChangeDetectorRef],{translate:[0,"translate"]},null),(e()(),i["\u0275ted"](-1,null,["download data"])),(e()(),i["\u0275eld"](7,0,null,null,2,"div",[["aria-labelledby","dropdownMenuButton"],["class","dropdown-menu"]],null,null,null,null,null)),(e()(),i["\u0275and"](16777216,null,null,1,null,s)),i["\u0275did"](9,278528,null,0,a.NgForOf,[i.ViewContainerRef,i.TemplateRef,i.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(e,t){var n=t.component;e(t,5,0,""),e(t,9,0,n.downloadOptions)}),null)}},HX2K:function(e,t,n){e.exports=function(e){var t=e.helpers,i=n("wU0g")(e);function a(e){var t=!1,n=e.filter((function(e){switch(e){case"mouseenter":case"mouseover":case"mouseout":case"mouseleave":return t=!0,!1;default:return!0}}));return t&&-1===n.indexOf("mousemove")&&n.push("mousemove"),n}return{dispatcher:function(e){var n=this.annotation,r=i.elements(this),l=t.getRelativePosition(e,this.chart),o=i.getNearestItems(r,l),s=a(n.options.events),u=n.options.dblClickSpeed,c=[],d=i.getEventHandlerName(e.type),f=(o||{}).options;if("mousemove"===e.type&&(o&&!o.hovering?["mouseenter","mouseover"].forEach((function(t){var n=i.getEventHandlerName(t),a=i.createMouseEvent(t,e);o.hovering=!0,"function"==typeof f[n]&&c.push([f[n],a,o])})):o||r.forEach((function(t){if(t.hovering){t.hovering=!1;var n=t.options;["mouseout","mouseleave"].forEach((function(a){var r=i.getEventHandlerName(a),l=i.createMouseEvent(a,e);"function"==typeof n[r]&&c.push([n[r],l,t])}))}}))),o&&s.indexOf("dblclick")>-1&&"function"==typeof f.onDblclick){if("click"===e.type&&"function"==typeof f.onClick)return clearTimeout(o.clickTimeout),o.clickTimeout=setTimeout((function(){delete o.clickTimeout,f.onClick.call(o,e)}),u),e.stopImmediatePropagation(),void e.preventDefault();"dblclick"===e.type&&o.clickTimeout&&(clearTimeout(o.clickTimeout),delete o.clickTimeout)}o&&"function"==typeof f[d]&&0===c.length&&c.push([f[d],e,o]),c.length>0&&(e.stopImmediatePropagation(),e.preventDefault(),c.forEach((function(e){e[0].call(e[2],e[1])})))},collapseHoverEvents:a}}},MoIz:function(e,t,n){e.exports=function(e){var t=n("wU0g")(e);return e.Annotation.Element.extend({setDataLimits:function(){var e=this._model,n=this.options,i=this.chartInstance,a=i.scales[n.xScaleID],r=i.scales[n.yScaleID],l=i.chartArea;if(e.ranges={},l){var o=0,s=0;a&&(o=t.isValid(n.xMin)?n.xMin:a.getPixelForValue(l.left),s=t.isValid(n.xMax)?n.xMax:a.getPixelForValue(l.right),e.ranges[n.xScaleID]={min:Math.min(o,s),max:Math.max(o,s)}),r&&(o=t.isValid(n.yMin)?n.yMin:r.getPixelForValue(l.bottom),s=t.isValid(n.yMax)?n.yMax:r.getPixelForValue(l.top),e.ranges[n.yScaleID]={min:Math.min(o,s),max:Math.max(o,s)})}},configure:function(){var e=this._model,n=this.options,i=this.chartInstance,a=i.scales[n.xScaleID],r=i.scales[n.yScaleID],l=i.chartArea;e.clip={x1:l.left,x2:l.right,y1:l.top,y2:l.bottom};var o,s,u=l.left,c=l.top,d=l.right,f=l.bottom;a&&(o=t.isValid(n.xMin)?a.getPixelForValue(n.xMin):l.left,s=t.isValid(n.xMax)?a.getPixelForValue(n.xMax):l.right,u=Math.min(o,s),d=Math.max(o,s)),r&&(o=t.isValid(n.yMin)?r.getPixelForValue(n.yMin):l.bottom,s=t.isValid(n.yMax)?r.getPixelForValue(n.yMax):l.top,c=Math.min(o,s),f=Math.max(o,s)),e.left=u,e.top=c,e.right=d,e.bottom=f,e.borderColor=n.borderColor,e.borderWidth=n.borderWidth,e.backgroundColor=n.backgroundColor},inRange:function(e,t){var n=this._model;return n&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},getCenterPoint:function(){var e=this._model;return{x:(e.right+e.left)/2,y:(e.bottom+e.top)/2}},getWidth:function(){var e=this._model;return Math.abs(e.right-e.left)},getHeight:function(){var e=this._model;return Math.abs(e.bottom-e.top)},getArea:function(){return this.getWidth()*this.getHeight()},draw:function(){var e=this._view,t=this.chartInstance.chart.ctx;t.save(),t.beginPath(),t.rect(e.clip.x1,e.clip.y1,e.clip.x2-e.clip.x1,e.clip.y2-e.clip.y1),t.clip(),t.lineWidth=e.borderWidth,t.strokeStyle=e.borderColor,t.fillStyle=e.backgroundColor;var n=e.right-e.left,i=e.bottom-e.top;t.fillRect(e.left,e.top,n,i),t.strokeRect(e.left,e.top,n,i),t.restore()}})}},O4L6:function(e,t){function n(e){return e?e.charAt(0).toUpperCase()+e.substr(1).toLowerCase():""}e.exports={capitalizeFirst:n,formatLabel:function(e){var t=n(e);return t.length>11&&(t=t.substring(0,11)+"..."),t},tagCloud:function(e,t,n,i,a){e.forEach((function(e){e.size=+e.size})),e.sort((function(e,t){return t.size-e.size}));var r=t,l=n,o=i/(e[0].size||1)/2;d3.layout.cloud().size([r,l]).words(e).spiral("archimedean").rotate(0).font("Noto Sans TC").fontSize((function(e){return Math.max(20,Math.min(e.size*o,i))})).on("end",(function(){$("#svg-node").remove();var t=d3.select("#tag-cloud-wrapper").append("svg").attr({width:r,height:l,id:"svg-node"}).append("g").attr("transform","translate("+[r>>1,(l>>1)-10]+")scale(2)");t.selectAll("text").data(e).enter().append("text").style("font-family",(function(e){return e.font})).style("font-size",(function(e){return e.size+"px"})).style("fill",a).style({cursor:"pointer",opacity:1e-6}).attr("text-anchor","middle").attr("transform",(function(e){return"translate("+[e.x,e.y]+")rotate("+e.rotate+")"})).text((function(e){return e.text})).transition().duration(1e3).style("opacity",1),t.transition().delay(450).duration(750).attr("transform","translate("+[r>>1,10+(l>>1)]+")scale(1)")})).start()}}},OiFK:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("8Y7J"),a=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"buildFilters",value:function(e){var t="";return Object.keys(e).forEach((function(n,i){t+=0===i?"?":"&",t+=n+"="+e[n]})),t}},{key:"getStringFromDateNow",value:function(){var e=new Date;return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()}},{key:"format",value:function(e){var t=(e=e.toString()).replace(/\./g,"");return isNaN(t)?e=e.value.replace(/[^\d\.]*/g,""):e=t=(t=t.toString().split("").reverse().join("").replace(/(?=\d*\.?)(\d{3})/g,"$1.")).split("").reverse().join("").replace(/^[\.]/,""),parseFloat(e)}}]),e}();return e.ngInjectableDef=i["\u0275\u0275defineInjectable"]({factory:function(){return new e},token:e,providedIn:"root"}),e}()},SjEX:function(e,t){e.exports={getYears:function(){for(var e=(new Date).getFullYear(),t=[],n=1990;n<=e;n++)t.push(n);return t}}},"Ym+k":function(e,t,n){var i=n("MO+k");(i="function"==typeof i?i:window.Chart).Annotation=i.Annotation||{},i.Annotation.drawTimeOptions={afterDraw:"afterDraw",afterDatasetsDraw:"afterDatasetsDraw",beforeDatasetsDraw:"beforeDatasetsDraw"},i.Annotation.defaults={drawTime:"afterDatasetsDraw",dblClickSpeed:350,events:[],annotations:[]},i.Annotation.labelDefaults={backgroundColor:"rgba(0,0,0,0.8)",fontFamily:i.defaults.global.defaultFontFamily,fontSize:i.defaults.global.defaultFontSize,fontStyle:"bold",fontColor:"#fff",xPadding:6,yPadding:6,cornerRadius:6,position:"center",xAdjust:0,yAdjust:0,enabled:!1,content:null},i.Annotation.Element=n("xxsC")(i),i.Annotation.types={line:n("u5p2")(i),box:n("MoIz")(i)};var a=n("grSx")(i);e.exports=a,i.pluginService.register(a)},cplz:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var i=n("AytR"),a=n("IheW"),r=n("lJxs"),l=n("8Y7J"),o=n("OiFK"),s={headers:new a.g({"Content-Type":"application/json"})},u=function(){var e=function(){function e(t,n){_classCallCheck(this,e),this.httpClient=t,this.utilsService=n,this.serverUrl=i.a.serverUrl,this.urlData=i.a.data.base,this.urlDataIndexes=i.a.data.indexes}return _createClass(e,[{key:"listDataIndexes",value:function(e){var t={cities:null};return e&&(t.cities=[e]),this.httpClient.post(this.serverUrl+"api/"+this.urlDataIndexes,t).pipe(Object(r.a)((function(e){return e.results.data})))}},{key:"listDatasPublic",value:function(e,t,n){var i=this.utilsService.buildFilters(e),a={id_Variable:t,cities:null};return n&&(a.cities=n.filter((function(e){return!!e.check})).map((function(e){return e.id}))),this.httpClient.post(this.serverUrl+"api/"+this.urlData+i,a).pipe(Object(r.a)((function(e){return e.results})))}},{key:"listDatas",value:function(e,t,n,i){var a=this.utilsService.buildFilters(e),l={id_Variable:t,cities:null,search:i};return n&&(l.cities=n.filter((function(e){return!!e.check})).map((function(e){return e.id}))),this.httpClient.post(this.serverUrl+this.urlData+"/filter/"+a,l).pipe(Object(r.a)((function(e){return e.results})))}},{key:"getData",value:function(){return this.httpClient.get(this.serverUrl+"getCSV/datos/confirmados",s)}},{key:"addData",value:function(e){return this.httpClient.post(this.serverUrl+this.urlData,e,s)}},{key:"editData",value:function(e,t){return this.httpClient.put(this.serverUrl+this.urlData+"/"+t,e,s)}},{key:"deleteData",value:function(e){return this.httpClient.delete(this.serverUrl+this.urlData+"/"+e,s)}},{key:"downloadCSV",value:function(e,t,n,i){var l=this.utilsService.buildFilters(e),o={id_Variable:t,cities:null,years:null};return n&&(o.cities=n.filter((function(e){return!!e.check})).map((function(e){return e.id}))),i&&(o.years=i.filter((function(e){return!!e.check})).map((function(e){return e.id}))),new a.g,this.httpClient.post(this.serverUrl+"exportdata/"+l,o,{responseType:"arraybuffer"}).pipe(Object(r.a)((function(e){return e})))}}]),e}();return e.ngInjectableDef=l["\u0275\u0275defineInjectable"]({factory:function(){return new e(l["\u0275\u0275inject"](a.c),l["\u0275\u0275inject"](o.a))},token:e,providedIn:"root"}),e}()},ecYQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var i=n("AytR"),a=n("IheW"),r=n("lJxs"),l=n("8Y7J"),o=n("OiFK"),s={headers:new a.g({"Content-Type":"application/json"})},u=function(){var e=function(){function e(t,n){_classCallCheck(this,e),this.httpClient=t,this.utilsService=n,this.serverUrl=i.a.serverUrl,this.urlClasification=i.a.clasification.base}return _createClass(e,[{key:"listClasification",value:function(e){var t=this,n=this.utilsService.buildFilters(e);return this.httpClient.get(this.serverUrl+"api/"+this.urlClasification+n).pipe(Object(r.a)((function(e){return e.results.data.forEach((function(e){e.image_route=t.serverUrl+e.image_route.substr(2),e.image_active_route=t.serverUrl+e.image_active_route.substr(2)})),e.results})))}},{key:"addClasification",value:function(e){var t=new FormData;return t.append("name",e.name),t.append("description",e.description),t.append("image",e.images.image,e.images.image.name),t.append("image_active",e.images.image_active,e.images.image_active.name),this.httpClient.post(this.serverUrl+this.urlClasification,t)}},{key:"editClasification",value:function(e,t){var n=new FormData;return n.append("name",e.name),n.append("description",e.description),e.images.image&&e.images.image.name&&n.append("image",e.images.image,e.images.image.name),e.images.image_active&&e.images.image_active.name&&n.append("image_active",e.images.image_active,e.images.image_active.name),this.httpClient.put(this.serverUrl+this.urlClasification+"/"+t,n)}},{key:"deleteClasification",value:function(e){return this.httpClient.delete(this.serverUrl+this.urlClasification+"/"+e,s)}}]),e}();return e.ngInjectableDef=l["\u0275\u0275defineInjectable"]({factory:function(){return new e(l["\u0275\u0275inject"](a.c),l["\u0275\u0275inject"](o.a))},token:e,providedIn:"root"}),e}()},grSx:function(e,t,n){e.exports=function(e){var t=e.helpers,i=n("wU0g")(e),a=n("HX2K")(e),r=e.Annotation.types;function l(e){i.decorate(e,"afterDataLimits",(function(e,t){e&&e(t),i.adjustScaleRange(t)}))}function o(e){return function(t,n){var a=t.annotation.options.drawTime;i.elements(t).filter((function(t){return e===(t.options.drawTime||a)})).forEach((function(e){e.transition(n).draw()}))}}return{beforeInit:function(e){var n=e.options,a=e.annotation={elements:{},options:i.initConfig(n.annotation||{}),onDestroy:[],firstRun:!0,supported:!1};e.ensureScalesHaveIDs(),n.scales&&(a.supported=!0,t.each(n.scales.xAxes,l),t.each(n.scales.yAxes,l))},beforeUpdate:function(e){var t=e.annotation;if(t.supported){t.firstRun?t.firstRun=!1:t.options=i.initConfig(e.options.annotation||{});var n=[];t.options.annotations.forEach((function(a){var l=a.id||i.objectId();if(!t.elements[l]&&r[a.type]){var o=new(0,r[a.type])({id:l,options:a,chartInstance:e});o.initialize(),t.elements[l]=o,a.id=l,n.push(l)}else t.elements[l]&&n.push(l)})),Object.keys(t.elements).forEach((function(e){-1===n.indexOf(e)&&(t.elements[e].destroy(),delete t.elements[e])}))}},afterScaleUpdate:function(e){i.elements(e).forEach((function(e){e.configure()}))},beforeDatasetsDraw:o("beforeDatasetsDraw"),afterDatasetsDraw:o("afterDatasetsDraw"),afterDraw:o("afterDraw"),afterInit:function(e){var n=e.annotation.options.events;if(t.isArray(n)&&n.length>0){var i=e.chart.canvas,r=a.dispatcher.bind(e);a.collapseHoverEvents(n).forEach((function(n){t.addEvent(i,n,r),e.annotation.onDestroy.push((function(){t.removeEvent(i,n,r)}))}))}},destroy:function(e){for(var t=e.annotation.onDestroy;t.length>0;)t.pop()()}}}},u5p2:function(e,t,n){e.exports=function(e){var t=e.helpers,i=n("wU0g")(e);function a(e){var t=(e.x2-e.x1)/(e.y2-e.y1),n=e.x1||0;this.m=t,this.b=n,this.getX=function(i){return t*(i-e.y1)+n},this.getY=function(i){return(i-n)/t+e.y1},this.intersects=function(e,t,n){n=n||.001;var i=this.getY(e),a=this.getX(t);return(!isFinite(i)||Math.abs(t-i)<n)&&(!isFinite(a)||Math.abs(e-a)<n)}}return e.Annotation.Element.extend({setDataLimits:function(){var e=this._model,t=this.options;e.ranges={},e.ranges[t.scaleID]={min:t.value,max:t.endValue||t.value}},configure:function(){var e,n,r=this._model,l=this.options,o=this.chartInstance,s=o.chart.ctx,u=o.scales[l.scaleID];if(u&&(e=i.isValid(l.value)?u.getPixelForValue(l.value):NaN,n=i.isValid(l.endValue)?u.getPixelForValue(l.endValue):e),!isNaN(e)){var c=o.chartArea;r.clip={x1:c.left,x2:c.right,y1:c.top,y2:c.bottom},"horizontal"==this.options.mode?(r.x1=c.left,r.x2=c.right,r.y1=e,r.y2=n):(r.y1=c.top,r.y2=c.bottom,r.x1=e,r.x2=n),r.line=new a(r),r.mode=l.mode,r.labelBackgroundColor=l.label.backgroundColor,r.labelFontFamily=l.label.fontFamily,r.labelFontSize=l.label.fontSize,r.labelFontStyle=l.label.fontStyle,r.labelFontColor=l.label.fontColor,r.labelXPadding=l.label.xPadding,r.labelYPadding=l.label.yPadding,r.labelCornerRadius=l.label.cornerRadius,r.labelPosition=l.label.position,r.labelXAdjust=l.label.xAdjust,r.labelYAdjust=l.label.yAdjust,r.labelEnabled=l.label.enabled,r.labelContent=l.label.content,s.font=t.fontString(r.labelFontSize,r.labelFontStyle,r.labelFontFamily);var d=s.measureText(r.labelContent).width,f=s.measureText("M").width,h=function(e,t,n,i,a){var r=e.line,l={},o=0,s=0;switch(!0){case"vertical"==e.mode&&"top"==e.labelPosition:o=t/2+e.labelXAdjust,l.y=e.y1+(s=a+e.labelYAdjust),l.x=(isFinite(r.m)?r.getX(l.y):e.x1)-o;break;case"vertical"==e.mode&&"bottom"==e.labelPosition:o=t/2+e.labelXAdjust,l.y=e.y2-(s=n+a+e.labelYAdjust),l.x=(isFinite(r.m)?r.getX(l.y):e.x1)-o;break;case"horizontal"==e.mode&&"left"==e.labelPosition:s=-n/2+e.labelYAdjust,l.x=e.x1+(o=i+e.labelXAdjust),l.y=r.getY(l.x)+s;break;case"horizontal"==e.mode&&"right"==e.labelPosition:s=-n/2+e.labelYAdjust,l.x=e.x2-(o=t+i+e.labelXAdjust),l.y=r.getY(l.x)+s;break;default:l.x=(e.x1+e.x2-t)/2+e.labelXAdjust,l.y=(e.y1+e.y2-n)/2+e.labelYAdjust}return l}(r,d,f,r.labelXPadding,r.labelYPadding);r.labelX=h.x-r.labelXPadding,r.labelY=h.y-r.labelYPadding,r.labelWidth=d+2*r.labelXPadding,r.labelHeight=f+2*r.labelYPadding,r.borderColor=l.borderColor,r.borderWidth=l.borderWidth,r.borderDash=l.borderDash||[],r.borderDashOffset=l.borderDashOffset||0}},inRange:function(e,t){var n=this._model;return n.line&&n.line.intersects(e,t,this.getHeight())||n.labelEnabled&&n.labelContent&&e>=n.labelX&&e<=n.labelX+n.labelWidth&&t>=n.labelY&&t<=n.labelY+n.labelHeight},getCenterPoint:function(){return{x:(this._model.x2+this._model.x1)/2,y:(this._model.y2+this._model.y1)/2}},getWidth:function(){return Math.abs(this._model.right-this._model.left)},getHeight:function(){return this._model.borderWidth||1},getArea:function(){return Math.sqrt(Math.pow(this.getWidth(),2)+Math.pow(this.getHeight(),2))},draw:function(){var e=this._view,n=this.chartInstance.chart.ctx;e.clip&&(n.save(),n.beginPath(),n.rect(e.clip.x1,e.clip.y1,e.clip.x2-e.clip.x1,e.clip.y2-e.clip.y1),n.clip(),n.lineWidth=e.borderWidth,n.strokeStyle=e.borderColor,n.setLineDash&&n.setLineDash(e.borderDash),n.lineDashOffset=e.borderDashOffset,n.beginPath(),n.moveTo(e.x1,e.y1),n.lineTo(e.x2,e.y2),n.stroke(),e.labelEnabled&&e.labelContent&&(n.beginPath(),n.rect(e.clip.x1,e.clip.y1,e.clip.x2-e.clip.x1,e.clip.y2-e.clip.y1),n.clip(),n.fillStyle=e.labelBackgroundColor,t.drawRoundedRectangle(n,e.labelX,e.labelY,e.labelWidth,e.labelHeight,e.labelCornerRadius),n.fill(),n.font=t.fontString(e.labelFontSize,e.labelFontStyle,e.labelFontFamily),n.fillStyle=e.labelFontColor,n.textAlign="center",n.textBaseline="middle",n.fillText(e.labelContent,e.labelX+e.labelWidth/2,e.labelY+e.labelHeight/2)),n.restore())}})}},wU0g:function(e,t){function n(){}function i(e){var t=e.annotation.elements;return Object.keys(t).map((function(e){return t[e]}))}function a(){return Math.random().toString(36).substr(2,6)}function r(e){return null!=e&&("number"==typeof e?isFinite(e):!!e)}function l(e,t,n){e["$"+t]||(e[t]?(e["$"+t]=e[t].bind(e),e[t]=function(){var i=[e["$"+t]].concat(Array.prototype.slice.call(arguments));return n.apply(e,i)}):e[t]=function(){var t=[void 0].concat(Array.prototype.slice.call(arguments));return n.apply(e,t)})}function o(e,t){e.forEach((function(e){(t?e[t]:e)()}))}function s(e){return"on"+e[0].toUpperCase()+e.substring(1)}function u(e,t){try{return new MouseEvent(e,t)}catch(a){try{var n=document.createEvent("MouseEvent");return n.initMouseEvent(e,t.canBubble,t.cancelable,t.view,t.detail,t.screenX,t.screenY,t.clientX,t.clientY,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,t.button,t.relatedTarget),n}catch(r){var i=document.createEvent("Event");return i.initEvent(e,t.canBubble,t.cancelable),i}}}e.exports=function(e){var t=e.helpers;return{initConfig:function(n){return n=t.configMerge(e.Annotation.defaults,n),t.isArray(n.annotations)&&n.annotations.forEach((function(n){n.label=t.configMerge(e.Annotation.labelDefaults,n.label)})),n},elements:i,callEach:o,noop:n,objectId:a,isValid:r,decorate:l,adjustScaleRange:function(e){var t,n,a,r,l,o=(t=e.id,n=i(e.chart),a=e.min,r=e.max,{min:(l=n.filter((function(e){return!!e._model.ranges[t]})).map((function(e){return e._model.ranges[t]}))).map((function(e){return Number(e.min)})).reduce((function(e,t){return isFinite(t)&&!isNaN(t)&&t<e?t:e}),a),max:l.map((function(e){return Number(e.max)})).reduce((function(e,t){return isFinite(t)&&!isNaN(t)&&t>e?t:e}),r)});void 0===e.options.ticks.min&&void 0===e.options.ticks.suggestedMin&&(e.min=o.min),void 0===e.options.ticks.max&&void 0===e.options.ticks.suggestedMax&&(e.max=o.max),e.handleTickRangeOptions&&e.handleTickRangeOptions()},getNearestItems:function(e,n){var i=Number.POSITIVE_INFINITY;return e.filter((function(e){return e.inRange(n.x,n.y)})).reduce((function(e,a){var r=a.getCenterPoint(),l=t.distanceBetweenPoints(n,r);return l<i?(e=[a],i=l):l===i&&e.push(a),e}),[]).sort((function(e,t){var n=e.getArea(),i=t.getArea();return n>i||n<i?n-i:e._index-t._index})).slice(0,1)[0]},getEventHandlerName:s,createMouseEvent:u}}},xxsC:function(e,t){e.exports=function(e){var t=e.helpers;return e.Element.extend({initialize:function(){this.hidden=!1,this.hovering=!1,this._model=t.clone(this._model)||{},this.setDataLimits()},destroy:function(){},setDataLimits:function(){},configure:function(){},inRange:function(){},getCenterPoint:function(){},getWidth:function(){},getHeight:function(){},getArea:function(){},draw:function(){}})}}}]);