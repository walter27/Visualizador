(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{D2gA:function(t,e,l){"use strict";l.d(e,"a",(function(){return s}));var n=l("Ym+k");l("SjEX");let{capitalizeFirst:i}=l("O4L6");class s{constructor(t,e,l,i){this.dataService=t,this.regionService=e,this.chartService=l,this.router=i,this.filters={page:0,limit:100,ascending:!0,sort:"_id"},this.value=2010,this.highValue=2020,this.options={ceil:2020,floor:2010},this.marginAuto=!1,this.showDropCities=!1,this.showDropYears=!1,this.activeCities=[],this.years=[],this.lineChartData=[],this.lineChartLabels=[],this.lineChartColors=[],this.lineChartLegend=!0,this.lineChartType="line",this.lineChartPlugins=[n],this.cities=[],this.axes=[],this.loadData=!1,this.radarChartOptions={responsive:!0,maintainAspectRatio:!1,scale:{ticks:{stepSize:20,min:0,max:100},pointLabels:{fontSize:window.innerWidth<575?10:12,fontColor:"black",fontFamily:"Noto Sans TC",lineHeight:1},gridLines:{lineWidth:2,zeroLineColor:"#e4e9f2",color:["#e2e9f0","#e3edf7","#f4f8fd","#fdf9e5","#fcf4e2"]}},legend:{onClick(t,e){const l=e.datasetIndex,n=this.chart,i=n.getDatasetMeta(l);let s=[];if(!sessionStorage.getItem("citiesHidden")||(s=JSON.parse(sessionStorage.getItem("citiesHidden")),n.data.datasets.length-1!==JSON.parse(sessionStorage.getItem("citiesHidden")).length||-1!==s.indexOf(e.text))){if(i.hidden=null===i.hidden?!n.data.datasets[l].hidden:null,i.hidden)s.push(e.text);else{const t=s.indexOf(e.text);s.splice(t,1)}sessionStorage.setItem("citiesHidden",JSON.stringify(s)),n.update()}},labels:{fontFamily:'"Noto Sans TC", serif',fontSize:10,fontColor:"black"}},tooltips:{bodyFontSize:16,titleFontSize:16,bodyFontFamily:'"Noto Sans TC", serif',titleFontFamily:'"Noto Sans TC", serif',enabled:!1,custom(t){const e=document.getElementById("chartjs-tooltip");e&&e.remove();let l=document.getElementById("chartjs-tooltip");if(l||(l=document.createElement("div"),l.id="chartjs-tooltip",l.innerHTML="<table></table>",this._chart.canvas.parentNode.appendChild(l)),0===t.opacity)return void(l.style.opacity="0");if(l.classList.remove("above","below","no-transform"),l.classList.add(t.yAlign?t.yAlign:"no-transform"),t.body){const e=t.afterBody,n=[t.title],i=t.body.map((function(t){return t.lines}));let s='<thead style="color: rgba(7, 109, 205, 1)">';n.forEach((function(t){s+="<tr><th>"+t+"</th></tr>"})),s+="</thead><tbody>",i.forEach((function(t,e){let l="background:"+sessionStorage.getItem(t[0].split(":")[0].toLocaleLowerCase());l+="; border-color:white",l+="; border-width: 2px",s+='<tr><td><span class="chartjs-tooltip-key" style="'+l+'"></span>'+t[0].split(":")[0]+"</td></tr>",s+='<tr><td style="color: #8F8F8F; font: Regular 16px/30px Noto Sans TC;"><span class="chartjs-tooltip-key1"></span>'+t[0].split(":")[1]+"</td></tr>"})),e.length>0&&(s+="<tr><td>"+e+"</td></tr>"),s+="</tbody>",l.querySelector("table").innerHTML=s}const n=this._chart.canvas.offsetTop,i=this._chart.canvas.offsetLeft;l.style.opacity="1",l.style.left=i+t.caretX+"px",l.style.top=n+t.caretY+"px",l.style.fontFamily=t._bodyFontFamily,l.style.fontSize=t.bodyFontSize+"px",l.style.fontStyle=t._bodyFontStyle,l.style.padding=t.yPadding+"px "+t.xPadding+"px"},callbacks:{title:(t,e)=>e.labels[t[0].index].toString(),label(t,e){const l=e.datasets[t.datasetIndex].label||"";let n=t.yLabel.toString();return parseInt(n)>=1e3&&(n=n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")),l+": "+n}}}},this.radarChartLabels=[],this.radarChartData=[],this.radarChartType="radar",this.cantons=[],this.cantonsSlected=[]}ngOnInit(){this.loadData=!0,this.getData()}updateChart(t){this.radarChartData=[],this.radarChartLabels=[],Object.keys(t).forEach(e=>{Object.keys(t[e]).forEach(t=>{-1===this.radarChartLabels.indexOf(t)&&this.radarChartLabels.push(t)}),this.radarChartLabels.sort();let l="";l=this.citySelected?this.citySelected.color:this.activeCities.find(t=>t.name.toLowerCase()===e.toLowerCase()).color,sessionStorage.setItem(e.toLowerCase(),l),this.radarChartData.push({data:[],label:e,borderColor:l,pointBorderColor:"white",pointBackgroundColor:l,fill:!1})}),this.axes=[],this.radarChartLabels.forEach(e=>{this.axes.push({id:e.toString(),name:e.toString(),check:!1}),this.radarChartData.forEach(l=>{l.data.push(t[l.label][e.toString()])})});let e=[];window.innerWidth<=768&&this.radarChartLabels.forEach(t=>{let l=t.toString().split(" ");if(2==l.length)e.push(l);else if(l.length>2){let t=[];l.length>2&&t.push(l[0]+" "+l[1]);let n=" ";for(let e=2;e<l.length;e++)n+=l[e];t.push(n.trimRight()),e.push(t)}else e.push(l[0]);this.radarChartLabels=e}),this.radarChartData.forEach(t=>{t.label=i(t.label)}),setTimeout(()=>{this.chartService.imageRadarBase24.then(t=>{this.imageBase64={name:"chart",data:t,type:"radar"}})},3e3)}getData(){this.citySelected?this.dataService.listDataIndexes(this.citySelected._id).subscribe(t=>{this.baseData=t,this.updateChart(t),this.columnaDownload="col-md-12"}):(this.columnaDownload="col-md-6",this.dataService.listDataIndexes().subscribe(t=>{this.baseData=t,this.cantons=[],Object.keys(t).forEach(t=>{this.cantons.push({name:t})}),this.getCantonsSelected()}))}getCantonsSelected(){let t=[];0===this.cantonsSlected.length&&this.cantonsSlected.push(this.cantons[0]),this.cantonsSlected.forEach(e=>{t.push(e.name)}),this.filteredDataIndexes(t)}filteredDataIndexes(t){let e=Object.keys(this.baseData).filter(e=>t.includes(e)).reduce((t,e)=>(t[e]=this.baseData[e],t),{});this.updateChart(e)}onCheckItemYear(t){const e=this.years.findIndex(e=>e.id===t);this.years[e].check=!this.years[e].check,this.getData()}onCheckItemAxes(t){}getTitle(){return this.title?this.title:this.variableSelected.name}chartClicked({}){}chartHovered({}){}ngOnDestroy(){sessionStorage.clear()}}},NAV4:function(t,e,l){"use strict";l.d(e,"a",(function(){return r}));var n=l("8Y7J"),i=l("OquC"),s=n["\u0275crt"]({encapsulation:0,styles:['[_nghost-%COMP%]{font-family:Helvetica,Arial,sans-serif;font-size:10px;line-height:normal;color:#09f;overflow:hidden;position:relative;display:block}span[_ngcontent-%COMP%]{padding:0}span.w10[_ngcontent-%COMP%]{font-size:550%}span.w9[_ngcontent-%COMP%]{font-size:500%}span.w8[_ngcontent-%COMP%]{font-size:450%}span.w7[_ngcontent-%COMP%]{font-size:400%}span.w6[_ngcontent-%COMP%]{font-size:350%}span.w5[_ngcontent-%COMP%]{font-size:300%}span.w4[_ngcontent-%COMP%]{font-size:250%}span.w3[_ngcontent-%COMP%]{font-size:200%}span.w2[_ngcontent-%COMP%]{font-size:150%}a[_ngcontent-%COMP%]:hover, span.w10[_ngcontent-%COMP%], span.w8[_ngcontent-%COMP%], span.w9[_ngcontent-%COMP%]{color:#0cf}span.w7[_ngcontent-%COMP%]{color:#39d}span.w6[_ngcontent-%COMP%]{color:#90c5f0}span.w5[_ngcontent-%COMP%]{color:#90a0dd}span.w4[_ngcontent-%COMP%]{color:#90c5f0}span.w3[_ngcontent-%COMP%]{color:#a0ddff}span.w2[_ngcontent-%COMP%]{color:#9ce}span.w1[_ngcontent-%COMP%]{font-size:100%;color:#aab5f0}.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%]{visibility:hidden;width:inherit;background-color:#555;color:#fff;text-align:center;border-radius:6px;padding:5px 10px;position:absolute;bottom:100%;left:0;opacity:0;transition:opacity .3s}.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%]::after{content:"";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:#555 transparent transparent}.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%]{visibility:visible;opacity:1}'],data:{}});function a(t){return n["\u0275vid"](0,[],null,null)}function o(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,1,"angular-tag-cloud",[],null,[["window","resize"]],(function(t,e,l){var i=!0;return"window:resize"===e&&(i=!1!==n["\u0275nov"](t,1).onResize(l)&&i),i}),a,s)),n["\u0275did"](1,3719168,null,0,i.a,[n.ElementRef,n.Renderer2],null,null)],null,null)}var r=n["\u0275ccf"]("angular-tag-cloud, ng-tag-cloud, ngtc",i.a,o,{data:"data",width:"width",height:"height",step:"step",overflow:"overflow",strict:"strict",zoomOnHover:"zoomOnHover",realignOnResize:"realignOnResize",randomizeAngle:"randomizeAngle",background:"background",font:"font",config:"config",log:"log"},{clicked:"clicked",dataChanges:"dataChanges",afterInit:"afterInit",afterChecked:"afterChecked"},[])},OquC:function(t,e,l){"use strict";l.d(e,"a",(function(){return i})),l.d(e,"b",(function(){return s}));var n=l("8Y7J");class i{constructor(t,e){this.el=t,this.r2=e,this.clicked=new n.EventEmitter,this.dataChanges=new n.EventEmitter,this.afterInit=new n.EventEmitter,this.afterChecked=new n.EventEmitter,this.alreadyPlacedWords=[]}onResize(t){this.logMessage("debug","rezisze triggered"),window.clearTimeout(this.timeoutId),this.timeoutId=window.setTimeout(()=>{this.options.realignOnResize&&this.reDraw()},200)}ngOnChanges(t){this.logMessage("debug","ngOnChanges fired",t),this.config=Object.assign({width:500,height:300,overflow:!0,strict:!1,zoomOnHover:{transitionTime:0,scale:1,delay:0,color:null},realignOnResize:!1,randomizeAngle:!1,background:null,font:null,step:2,log:!1},this.config),this.width&&(this.config.width=this.width),this.height&&(this.config.height=this.height),"boolean"==typeof this.overflow&&(this.config.overflow=this.overflow),"boolean"==typeof this.strict&&(this.config.strict=this.strict),"boolean"==typeof this.realignOnResize&&(this.config.realignOnResize=this.realignOnResize),"boolean"==typeof this.randomizeAngle&&(this.config.randomizeAngle=this.randomizeAngle),"string"==typeof this.background&&(this.config.background=this.background),"string"==typeof this.font&&(this.config.font=this.font),this.zoomOnHover&&(this.config.zoomOnHover=this.zoomOnHover),this.step&&(this.config.step=this.step),this.log&&(this.config.log=this.log),this.logMessage("warn","cloud configuration",this.config),this.config.font&&this.r2.setStyle(this.el.nativeElement,"font",this.config.font),this.config.background&&this.r2.setStyle(this.el.nativeElement,"background",this.config.background),this.reDraw(t)}reDraw(t){if(this.dataChanges.emit(t),this.afterChecked.emit(),this.logMessage("debug","dataChanges emitted"),this.alreadyPlacedWords=[],!this.data)return void console.error("angular-tag-cloud: No data passed. Please pass an Array of CloudData");this.el.nativeElement.innerHTML="",t&&t.data&&(this.dataArr=t.data.currentValue);let e=this.config.width;this.el.nativeElement.parentNode.offsetWidth>0&&e<=1&&e>0&&(e*=this.el.nativeElement.parentNode.offsetWidth);const l=this.config.height;this.options=Object.assign({},this.config,{aspectRatio:e/l,width:e,center:{x:e/2,y:l/2}}),this.r2.setStyle(this.el.nativeElement,"width",this.options.width+"px"),this.r2.setStyle(this.el.nativeElement,"height",this.options.height+"px"),this.drawWordCloud(),this.logMessage("debug","reDraw finished")}ngAfterContentInit(){this.afterInit.emit(),this.logMessage("debug","afterInit emitted")}ngAfterContentChecked(){this.afterChecked.emit(),this.logMessage("debug","afterChecked emitted")}descriptiveEntry(t){let e=t.text;return t.color&&(e+="-"+t.color),t.external&&(e+="-"+t.external),t.link&&(e+="-"+t.link),t.rotate&&(e+="-"+t.rotate),e}drawWordCloud(){this.dataArr.sort((t,e)=>this.descriptiveEntry(t).localeCompare(this.descriptiveEntry(e))),this.dataArr.sort((t,e)=>e.weight-t.weight),this.dataArr.forEach((t,e)=>{this.drawWord(e,t)})}hitTest(t){for(const e of this.alreadyPlacedWords)if(this.overlapping(t,e))return!0;return!1}overlapping(t,e){const l=t.getBoundingClientRect(),n=e.getBoundingClientRect();return!(l.right<n.left||l.left>n.right||l.bottom<n.top||l.top>n.bottom)}drawWord(t,e){let l,n=this.options.randomizeAngle?6.28*Math.random():0,i=0,s=5;this.dataArr[0].weight>this.dataArr[this.dataArr.length-1].weight&&(this.options.strict?e.weight>10?(s=10,this.logMessage("warn",`[TagCloud strict] Weight property ${e.weight} > 10. Fallback to 10 as you are using strict mode`,e)):e.weight<1?(s=1,this.logMessage("warn",`[TagCloud strict] Given weight property ${e.weight} < 1. Fallback to 1 as you are using strict mode`,e)):e.weight%1!=0?(s=Math.round(e.weight),this.logMessage("warn",`[TagCloud strict] Given weight property ${e.weight} is not an integer. Rounded value to ${s}`,e)):s=e.weight:s=Math.round((e.weight-this.dataArr[this.dataArr.length-1].weight)/(this.dataArr[0].weight-this.dataArr[this.dataArr.length-1].weight)*9)+1),l=this.r2.createElement("span"),l.className="w"+s;const a=this.clicked;l.onclick=()=>{a.emit(e)};let o=this.r2.createText(e.text);e.color&&this.r2.setStyle(l,"color",e.color);let r="";if(e.rotate&&(r=`rotate(${e.rotate}deg)`,this.r2.setStyle(l,"transform",r)),e.link){const t=this.r2.createElement("a");t.href=e.link,void 0!==e.external&&e.external&&(t.target="_blank"),t.appendChild(o),o=t}this.options.zoomOnHover&&1!==this.options.zoomOnHover.scale&&(this.options.zoomOnHover.transitionTime||(this.options.zoomOnHover.transitionTime=0),this.options.zoomOnHover.scale||(this.options.zoomOnHover.scale=1),l.onmouseover=()=>{this.r2.setStyle(l,"transition",`transform ${this.options.zoomOnHover.transitionTime}s`),this.r2.setStyle(l,"transform",`scale(${this.options.zoomOnHover.scale}) ${r}`),this.r2.setStyle(l,"transition-delay",this.options.zoomOnHover.delay+"s"),this.options.zoomOnHover.color&&this.r2.setStyle(e.link?o:l,"color",this.options.zoomOnHover.color)},l.onmouseout=()=>{this.r2.setStyle(l,"transform","none "+r),this.options.zoomOnHover.color&&this.r2.removeStyle(e.link?o:l,"color")}),l.appendChild(o),this.r2.appendChild(this.el.nativeElement,l);const u=l.offsetWidth,d=l.offsetHeight;let c=this.options.center.x-u/2,h=this.options.center.y-d/2;const g=l.style;if(g.position="absolute",g.left=c+"px",g.top=h+"px",e.tooltip){this.r2.addClass(l,"tooltip");const t=this.r2.createElement("span");t.className="tooltiptext";const n=this.r2.createText(e.tooltip);t.appendChild(n),l.appendChild(t)}for(l.id="angular-tag-cloud-item-"+t;this.hitTest(l);)i+=this.options.step,n+=(t%2==0?1:-1)*this.options.step,c=this.options.center.x-u/2+i*Math.cos(n)*this.options.aspectRatio,h=this.options.center.y+i*Math.sin(n)-d/2,g.left=c+"px",g.top=h+"px";if(0===t&&(g.left=c+2*(Math.random()-.5)*(this.options.width/5)+"px",g.top=h+2*(Math.random()-.5)*(this.options.height/5)+"30px"),!this.options.overflow&&(c<0||h<0||c+u>this.options.width||h+d>this.options.height))return this.logMessage("warn","Word did not fit into the cloud and overflow is set to 'false'. The element will be removed",l),void l.remove();this.logMessage("debug","Adds new word <span>",l),this.alreadyPlacedWords.push(l),this.logMessage("debug","Placed words",this.alreadyPlacedWords)}logMessage(t,...e){this.config&&("debug"===this.config.log?console.log(`[AngularTagCloudModule ${t}]`,...e):"warn"===this.config.log&&"warn"===t&&console.warn(`[AngularTagCloudModule ${t}]`,...e))}}class s{}},X5LB:function(t,e,l){"use strict";l.d(e,"a",(function(){return u}));var n=l("AytR"),i=l("IheW"),s=l("lJxs"),a=l("8Y7J"),o=l("OiFK");const r={headers:new i.g({"Content-Type":"application/json"})};let u=(()=>{class t{constructor(t,e){this.httpClient=t,this.utilsService=e,this.serverUrl=n.a.serverUrl,this.urlReports=n.a.reports.base}listReports(t){const e=this.utilsService.buildFilters(t);return this.httpClient.get(this.serverUrl+this.urlReports+e).pipe(Object(s.a)(t=>(t.results.data.forEach(t=>{t.image_route=this.serverUrl+t.image_route.substr(2)}),t.results)))}addReports(t){const e=new FormData;return e.append("name",t.name),e.append("description",t.description),e.append("image",t.images.image,t.images.image.name),this.httpClient.post(this.serverUrl+this.urlReports,e)}editReports(t,e){return this.httpClient.put(this.serverUrl+this.urlReports+"/"+e,t,r)}deleteReports(t){return this.httpClient.delete(this.serverUrl+this.urlReports+"/"+t,r)}}return t.ngInjectableDef=a["\u0275\u0275defineInjectable"]({factory:function(){return new t(a["\u0275\u0275inject"](i.c),a["\u0275\u0275inject"](o.a))},token:t,providedIn:"root"}),t})()},i2OY:function(t,e,l){"use strict";l.d(e,"a",(function(){return u}));var n=l("AytR"),i=l("IheW"),s=l("lJxs"),a=l("8Y7J"),o=l("OiFK");const r={headers:new i.g({"Content-Type":"application/json"})};let u=(()=>{class t{constructor(t,e){this.httpClient=t,this.utilsService=e,this.serverUrl=n.a.serverUrl,this.urlOrigin=n.a.origin.base}listOrigins(t){const e=this.utilsService.buildFilters(t);return this.httpClient.get(this.serverUrl+this.urlOrigin+e).pipe(Object(s.a)(t=>t.results))}addOrigin(t){return this.httpClient.post(this.serverUrl+this.urlOrigin,t,r)}editOrigin(t,e){return this.httpClient.put(this.serverUrl+this.urlOrigin+"/"+e,t,r)}deleteOrigin(t){return this.httpClient.delete(this.serverUrl+this.urlOrigin+"/"+t,r)}}return t.ngInjectableDef=a["\u0275\u0275defineInjectable"]({factory:function(){return new t(a["\u0275\u0275inject"](i.c),a["\u0275\u0275inject"](o.a))},token:t,providedIn:"root"}),t})()},lFnH:function(t,e,l){"use strict";var n=l("8Y7J"),i=l("hltz"),s=l("MEzG"),a=l("s7LF"),o=l("SVse"),r=l("hrfs"),u=l("FV9A"),d=l("48MR"),c=l("rD0E"),h=l("EE5B"),g=l("2+0p"),p=l("I5r7"),f=l("TSSN");l("D2gA"),l("cplz"),l("CzLl"),l("iInd"),l.d(e,"a",(function(){return m})),l.d(e,"b",(function(){return w}));var m=n["\u0275crt"]({encapsulation:0,styles:[["@media screen and (max-width:991px){.canvas-index-width[_ngcontent-%COMP%]{width:100%!important}}@media screen and (min-width:992px) and (max-width:1199.98px){.canvas-index-width[_ngcontent-%COMP%]{width:60%!important}}@media screen and (min-width:1200px) and (max-width:1499.98px){.canvas-index-width[_ngcontent-%COMP%]{width:60%!important}}@media screen and (min-width:1500px){.canvas-index-width[_ngcontent-%COMP%]{width:50%!important}}p.subtitulo[_ngcontent-%COMP%]{font:16px Roboto,sans-serif;text-align:center}h2.subtitulo[_ngcontent-%COMP%]{font:32px Roboto,sans-serif!important;padding-top:.5em!important;color:#24355a;font-weight:700!important;line-height:40px;margin-bottom:-10px;margin-top:-10px}[_nghost-%COMP%]    .ui-multiselect{border-radius:14px;background:#fff;border-color:#064cc3;width:12rem}[_nghost-%COMP%] .ui-multiselect .ui-multiselect-trigger{border-radius:14px;background:#ffffff00;color:#064cc3}[_nghost-%COMP%] .ui-multiselect .ui-multiselect-label{color:#064cc3}[_nghost-%COMP%] .ui-multiselect .ui-multiselect-panel{background-color:#fff;border-radius:14px}[_nghost-%COMP%] .ui-multiselect .ui-multiselect-panel .ui-widget-header .ui-chkbox{display:none!important;background-color:red;color:red}h2.titulo[_ngcontent-%COMP%], p.subtitulo[_ngcontent-%COMP%]{font:32px Roboto,sans-serif!important;padding-top:.5em!important;color:#24355a;font-weight:700!important;line-height:40px;margin-bottom:-10px;margin-top:-10px}"]],data:{}});function C(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,9,"div",[["class","col-md-6 col-lx-12 text-left"]],null,null,null,null,null)),(t()(),n["\u0275eld"](1,0,null,null,8,"p-multiSelect",[["class","block"],["name","cantonsSlected"],["optionLabel","name"],["selectedItemsLabel","{0} Ciudades Seleccionadas"]],[[2,"ui-inputwrapper-filled",null],[2,"ui-inputwrapper-focus",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"onChange"]],(function(t,e,l){var n=!0,i=t.component;return"ngModelChange"===e&&(n=!1!==(i.cantonsSlected=l)&&n),"onChange"===e&&(n=!1!==i.getCantonsSelected()&&n),n}),i.b,i.a)),n["\u0275did"](2,13877248,null,3,s.a,[n.ElementRef,n.Renderer2,n.ChangeDetectorRef],{defaultLabel:[0,"defaultLabel"],name:[1,"name"],selectedItemsLabel:[2,"selectedItemsLabel"],optionLabel:[3,"optionLabel"],showHeader:[4,"showHeader"],options:[5,"options"]},{onChange:"onChange"}),n["\u0275qud"](335544320,2,{footerFacet:0}),n["\u0275qud"](335544320,3,{headerFacet:0}),n["\u0275qud"](603979776,4,{templates:1}),n["\u0275prd"](1024,null,a.m,(function(t){return[t]}),[s.a]),n["\u0275did"](7,671744,null,0,a.r,[[8,null],[8,null],[8,null],[6,a.m]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),n["\u0275prd"](2048,null,a.n,null,[a.r]),n["\u0275did"](9,16384,null,0,a.o,[[4,a.n]],null,null)],(function(t,e){var l=e.component;t(e,2,0,"Ciudades","cantonsSlected","{0} Ciudades Seleccionadas","name",!0,l.cantons),t(e,7,0,"cantonsSlected",l.cantonsSlected)}),(function(t,e){t(e,1,0,n["\u0275nov"](e,2).filled,n["\u0275nov"](e,2).focus,n["\u0275nov"](e,9).ngClassUntouched,n["\u0275nov"](e,9).ngClassTouched,n["\u0275nov"](e,9).ngClassPristine,n["\u0275nov"](e,9).ngClassDirty,n["\u0275nov"](e,9).ngClassValid,n["\u0275nov"](e,9).ngClassInvalid,n["\u0275nov"](e,9).ngClassPending)}))}function v(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,10,"div",[["class","canvas-index-width"]],null,null,null,null,null)),n["\u0275prd"](512,null,o["\u0275NgClassImpl"],o["\u0275NgClassR2Impl"],[n.IterableDiffers,n.KeyValueDiffers,n.ElementRef,n.Renderer2]),n["\u0275did"](2,278528,null,0,o.NgClass,[o["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),n["\u0275pod"](3,{"col-12":0}),n["\u0275prd"](512,null,o["\u0275NgStyleImpl"],o["\u0275NgStyleR2Impl"],[n.ElementRef,n.KeyValueDiffers,n.Renderer2]),n["\u0275did"](5,278528,null,0,o.NgStyle,[o["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),n["\u0275pod"](6,{margin:0}),(t()(),n["\u0275eld"](7,0,null,null,3,"canvas",[["baseChart",""],["id","indexesGraph"],["width","1200"]],null,null,null,null,null)),n["\u0275prd"](512,null,o["\u0275NgClassImpl"],o["\u0275NgClassR2Impl"],[n.IterableDiffers,n.KeyValueDiffers,n.ElementRef,n.Renderer2]),n["\u0275did"](9,278528,null,0,o.NgClass,[o["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),n["\u0275did"](10,999424,[[1,4]],0,r.a,[n.ElementRef,r.c],{datasets:[0,"datasets"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"]},null)],(function(t,e){var l=e.component,n=t(e,3,0,!l.marginAuto);t(e,2,0,"canvas-index-width",n);var i=t(e,6,0,l.marginAuto?"auto":"");t(e,5,0,i),t(e,9,0,l.radarChartData.length>10?"chart-index-size-plus":"chart-index-size"),t(e,10,0,l.radarChartData,l.radarChartLabels,l.radarChartOptions,l.radarChartType)}),null)}function b(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,1,"app-ides-social-media",[],null,null,null,u.b,u.a)),n["\u0275did"](1,638976,null,0,d.a,[c.a],{imageBase64:[0,"imageBase64"]},null)],(function(t,e){t(e,1,0,e.component.imageBase64)}),null)}function w(t){return n["\u0275vid"](0,[n["\u0275qud"](402653184,1,{chart:0}),(t()(),n["\u0275eld"](1,0,null,null,22,"div",[["class","col-12 mb-4"]],null,null,null,null,null)),(t()(),n["\u0275eld"](2,0,null,null,21,"div",[["class","row"]],null,null,null,null,null)),(t()(),n["\u0275and"](16777216,null,null,1,null,C)),n["\u0275did"](4,16384,null,0,o.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),n["\u0275eld"](5,0,null,null,4,"div",[["class","col-lx-12 text-right"]],null,null,null,null,null)),n["\u0275prd"](512,null,o["\u0275NgClassImpl"],o["\u0275NgClassR2Impl"],[n.IterableDiffers,n.KeyValueDiffers,n.ElementRef,n.Renderer2]),n["\u0275did"](7,278528,null,0,o.NgClass,[o["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(t()(),n["\u0275eld"](8,0,null,null,1,"app-ides-download",[],null,null,null,h.b,h.a)),n["\u0275did"](9,638976,null,0,g.a,[p.b,c.a],{idElement:[0,"idElement"],data:[1,"data"],titleExport:[2,"titleExport"],hiddenCSV:[3,"hiddenCSV"],nameFile:[4,"nameFile"]},null),(t()(),n["\u0275eld"](10,0,null,null,3,"div",[["class","col-md-12 titulo text-center mt-5"]],null,null,null,null,null)),(t()(),n["\u0275eld"](11,0,null,null,2,"h2",[["class","subtitulo"],["translate",""]],null,null,null,null,null)),n["\u0275did"](12,8536064,null,0,f.e,[f.k,n.ElementRef,n.ChangeDetectorRef],{translate:[0,"translate"]},null),(t()(),n["\u0275ted"](13,null,["",""])),(t()(),n["\u0275eld"](14,0,null,null,3,"div",[["class","col-md-12 mt-4 text-center subtitulo"]],null,null,null,null,null)),(t()(),n["\u0275eld"](15,0,null,null,2,"p",[["translate",""]],null,null,null,null,null)),n["\u0275did"](16,8536064,null,0,f.e,[f.k,n.ElementRef,n.ChangeDetectorRef],{translate:[0,"translate"]},null),(t()(),n["\u0275ted"](-1,null,["index description"])),(t()(),n["\u0275and"](16777216,null,null,1,null,v)),n["\u0275did"](19,16384,null,0,o.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),n["\u0275eld"](20,0,null,null,3,"div",[["class","col-12 col-sm-12 col-md-12 col-lg-12"]],null,null,null,null,null)),(t()(),n["\u0275eld"](21,0,null,null,2,"div",[["class","col"],["style","width: 100%; float: right;"]],null,null,null,null,null)),(t()(),n["\u0275and"](16777216,null,null,1,null,b)),n["\u0275did"](23,16384,null,0,o.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(t,e){var l=e.component;t(e,4,0,!l.citySelected),t(e,7,0,"col-lx-12 text-right",l.columnaDownload),t(e,9,0,"indexesGraph",l.radarChartData,"\xcdndices",!0,"indices_ideas_urbanas"),t(e,12,0,""),t(e,16,0,""),t(e,19,0,l.radarChartData.length>0),t(e,23,0,l.imageBase64)}),(function(t,e){t(e,13,0,e.component.getTitle())}))}},qf9b:function(t,e,l){"use strict";l.d(e,"a",(function(){return s})),l.d(e,"b",(function(){return f}));var n=l("8Y7J"),i=(l("h0Oc"),l("SVse")),s=(l("hhfa"),n["\u0275crt"]({encapsulation:2,styles:[],data:{}}));function a(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,1,"div",[["class","ui-carousel-header"]],null,null,null,null,null)),n["\u0275ncd"](null,0)],null,null)}function o(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function r(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,6,"div",[],null,null,null,null,null)),n["\u0275prd"](512,null,i["\u0275NgClassImpl"],i["\u0275NgClassR2Impl"],[n.IterableDiffers,n.KeyValueDiffers,n.ElementRef,n.Renderer2]),n["\u0275did"](2,278528,null,0,i.NgClass,[i["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),n["\u0275pod"](3,{"ui-carousel-item ui-carousel-item-cloned":0,"ui-carousel-item-active":1,"ui-carousel-item-start":2,"ui-carousel-item-end":3}),(t()(),n["\u0275and"](16777216,null,null,2,null,o)),n["\u0275did"](5,540672,null,0,i.NgTemplateOutlet,[n.ViewContainerRef],{ngTemplateOutletContext:[0,"ngTemplateOutletContext"],ngTemplateOutlet:[1,"ngTemplateOutlet"]},null),n["\u0275pod"](6,{$implicit:0})],(function(t,e){var l=e.component,n=t(e,3,0,!0,-1*l.totalShiftedItems===l.value.length,0===e.context.index,l.clonedItemsForStarting.length-1===e.context.index);t(e,2,0,n);var i=t(e,6,0,e.context.$implicit);t(e,5,0,i,l.itemTemplate)}),null)}function u(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function d(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,6,"div",[],null,null,null,null,null)),n["\u0275prd"](512,null,i["\u0275NgClassImpl"],i["\u0275NgClassR2Impl"],[n.IterableDiffers,n.KeyValueDiffers,n.ElementRef,n.Renderer2]),n["\u0275did"](2,278528,null,0,i.NgClass,[i["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),n["\u0275pod"](3,{"ui-carousel-item":0,"ui-carousel-item-active":1,"ui-carousel-item-start":2,"ui-carousel-item-end":3}),(t()(),n["\u0275and"](16777216,null,null,2,null,u)),n["\u0275did"](5,540672,null,0,i.NgTemplateOutlet,[n.ViewContainerRef],{ngTemplateOutletContext:[0,"ngTemplateOutletContext"],ngTemplateOutlet:[1,"ngTemplateOutlet"]},null),n["\u0275pod"](6,{$implicit:0})],(function(t,e){var l=e.component,n=t(e,3,0,!0,l.firstIndex()<=e.context.index&&l.lastIndex()>=e.context.index,l.firstIndex()===e.context.index,l.lastIndex()===e.context.index);t(e,2,0,n);var i=t(e,6,0,e.context.$implicit);t(e,5,0,i,l.itemTemplate)}),null)}function c(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function h(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,6,"div",[],null,null,null,null,null)),n["\u0275prd"](512,null,i["\u0275NgClassImpl"],i["\u0275NgClassR2Impl"],[n.IterableDiffers,n.KeyValueDiffers,n.ElementRef,n.Renderer2]),n["\u0275did"](2,278528,null,0,i.NgClass,[i["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),n["\u0275pod"](3,{"ui-carousel-item ui-carousel-item-cloned":0,"ui-carousel-item-active":1,"ui-carousel-item-start":2,"ui-carousel-item-end":3}),(t()(),n["\u0275and"](16777216,null,null,2,null,c)),n["\u0275did"](5,540672,null,0,i.NgTemplateOutlet,[n.ViewContainerRef],{ngTemplateOutletContext:[0,"ngTemplateOutletContext"],ngTemplateOutlet:[1,"ngTemplateOutlet"]},null),n["\u0275pod"](6,{$implicit:0})],(function(t,e){var l=e.component,n=t(e,3,0,!0,-1*l.totalShiftedItems===l.numVisible,0===e.context.index,l.clonedItemsForFinishing.length-1===e.context.index);t(e,2,0,n);var i=t(e,6,0,e.context.$implicit);t(e,5,0,i,l.itemTemplate)}),null)}function g(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,8,"li",[],null,null,null,null,null)),n["\u0275prd"](512,null,i["\u0275NgClassImpl"],i["\u0275NgClassR2Impl"],[n.IterableDiffers,n.KeyValueDiffers,n.ElementRef,n.Renderer2]),n["\u0275did"](2,278528,null,0,i.NgClass,[i["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),n["\u0275pod"](3,{"ui-carousel-dot-item":0,"ui-state-highlight":1}),(t()(),n["\u0275eld"](4,0,null,null,4,"button",[["class","ui-button ui-widget ui-state-default ui-corner-all"]],null,[[null,"click"]],(function(t,e,l){var n=!0;return"click"===e&&(n=!1!==t.component.onDotClick(l,t.context.index)&&n),n}),null,null)),(t()(),n["\u0275eld"](5,0,null,null,3,"span",[],null,null,null,null,null)),n["\u0275prd"](512,null,i["\u0275NgClassImpl"],i["\u0275NgClassR2Impl"],[n.IterableDiffers,n.KeyValueDiffers,n.ElementRef,n.Renderer2]),n["\u0275did"](7,278528,null,0,i.NgClass,[i["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),n["\u0275pod"](8,{"ui-carousel-dot-icon pi":0,"pi-circle-on":1,"pi-circle-off":2})],(function(t,e){var l=e.component,n=t(e,3,0,!0,l._page===e.context.index);t(e,2,0,n);var i=t(e,8,0,!0,l._page===e.context.index,!(l._page===e.context.index));t(e,7,0,i)}),null)}function p(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,1,"div",[["class","ui-carousel-footer"]],null,null,null,null,null)),n["\u0275ncd"](null,1)],null,null)}function f(t){return n["\u0275vid"](0,[n["\u0275qud"](402653184,1,{itemsContainer:0}),(t()(),n["\u0275eld"](1,0,null,null,40,"div",[],[[1,"id",0]],null,null,null,null)),n["\u0275prd"](512,null,i["\u0275NgClassImpl"],i["\u0275NgClassR2Impl"],[n.IterableDiffers,n.KeyValueDiffers,n.ElementRef,n.Renderer2]),n["\u0275did"](3,278528,null,0,i.NgClass,[i["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),n["\u0275prd"](512,null,i["\u0275NgStyleImpl"],i["\u0275NgStyleR2Impl"],[n.ElementRef,n.KeyValueDiffers,n.Renderer2]),n["\u0275did"](5,278528,null,0,i.NgStyle,[i["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),(t()(),n["\u0275and"](16777216,null,null,1,null,a)),n["\u0275did"](7,16384,null,0,i.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),n["\u0275eld"](8,0,null,null,31,"div",[],[[8,"className",0]],null,null,null,null)),(t()(),n["\u0275eld"](9,0,null,null,27,"div",[["class","ui-carousel-container"]],null,null,null,null,null)),(t()(),n["\u0275eld"](10,0,null,null,7,"button",[],[[8,"disabled",0]],[[null,"click"]],(function(t,e,l){var n=!0;return"click"===e&&(n=!1!==t.component.navBackward(l)&&n),n}),null,null)),n["\u0275prd"](512,null,i["\u0275NgClassImpl"],i["\u0275NgClassR2Impl"],[n.IterableDiffers,n.KeyValueDiffers,n.ElementRef,n.Renderer2]),n["\u0275did"](12,278528,null,0,i.NgClass,[i["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),n["\u0275pod"](13,{"ui-carousel-prev ui-button ui-widget ui-state-default ui-corner-all":0,"ui-state-disabled":1}),(t()(),n["\u0275eld"](14,0,null,null,3,"span",[],null,null,null,null,null)),n["\u0275prd"](512,null,i["\u0275NgClassImpl"],i["\u0275NgClassR2Impl"],[n.IterableDiffers,n.KeyValueDiffers,n.ElementRef,n.Renderer2]),n["\u0275did"](16,278528,null,0,i.NgClass,[i["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),n["\u0275pod"](17,{"ui-carousel-prev-icon pi":0,"pi-chevron-left":1,"pi-chevron-up":2}),(t()(),n["\u0275eld"](18,0,null,null,10,"div",[["class","ui-carousel-items-content"]],null,null,null,null,null)),n["\u0275prd"](512,null,i["\u0275NgStyleImpl"],i["\u0275NgStyleR2Impl"],[n.ElementRef,n.KeyValueDiffers,n.Renderer2]),n["\u0275did"](20,278528,null,0,i.NgStyle,[i["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),n["\u0275pod"](21,{height:0}),(t()(),n["\u0275eld"](22,0,[[1,0],["itemsContainer",1]],null,6,"div",[["class","ui-carousel-items-container"]],null,[[null,"transitionend"],[null,"touchend"],[null,"touchstart"],[null,"touchmove"]],(function(t,e,l){var n=!0,i=t.component;return"transitionend"===e&&(n=!1!==i.onTransitionEnd()&&n),"touchend"===e&&(n=!1!==i.onTouchEnd(l)&&n),"touchstart"===e&&(n=!1!==i.onTouchStart(l)&&n),"touchmove"===e&&(n=!1!==i.onTouchMove(l)&&n),n}),null,null)),(t()(),n["\u0275and"](16777216,null,null,1,null,r)),n["\u0275did"](24,278528,null,0,i.NgForOf,[n.ViewContainerRef,n.TemplateRef,n.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(t()(),n["\u0275and"](16777216,null,null,1,null,d)),n["\u0275did"](26,278528,null,0,i.NgForOf,[n.ViewContainerRef,n.TemplateRef,n.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(t()(),n["\u0275and"](16777216,null,null,1,null,h)),n["\u0275did"](28,278528,null,0,i.NgForOf,[n.ViewContainerRef,n.TemplateRef,n.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(t()(),n["\u0275eld"](29,0,null,null,7,"button",[],[[8,"disabled",0]],[[null,"click"]],(function(t,e,l){var n=!0;return"click"===e&&(n=!1!==t.component.navForward(l)&&n),n}),null,null)),n["\u0275prd"](512,null,i["\u0275NgClassImpl"],i["\u0275NgClassR2Impl"],[n.IterableDiffers,n.KeyValueDiffers,n.ElementRef,n.Renderer2]),n["\u0275did"](31,278528,null,0,i.NgClass,[i["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),n["\u0275pod"](32,{"ui-carousel-next ui-button ui-widget ui-state-default ui-corner-all":0,"ui-state-disabled":1}),(t()(),n["\u0275eld"](33,0,null,null,3,"span",[],null,null,null,null,null)),n["\u0275prd"](512,null,i["\u0275NgClassImpl"],i["\u0275NgClassR2Impl"],[n.IterableDiffers,n.KeyValueDiffers,n.ElementRef,n.Renderer2]),n["\u0275did"](35,278528,null,0,i.NgClass,[i["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),n["\u0275pod"](36,{"ui-carousel-next-icon pi":0,"pi-chevron-right":1,"pi-chevron-down":2}),(t()(),n["\u0275eld"](37,0,null,null,2,"ul",[],[[8,"className",0]],null,null,null,null)),(t()(),n["\u0275and"](16777216,null,null,1,null,g)),n["\u0275did"](39,278528,null,0,i.NgForOf,[n.ViewContainerRef,n.TemplateRef,n.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(t()(),n["\u0275and"](16777216,null,null,1,null,p)),n["\u0275did"](41,16384,null,0,i.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(t,e){var l=e.component;t(e,3,0,l.styleClass,l.containerClass()),t(e,5,0,l.style),t(e,7,0,l.headerFacet);var n=t(e,13,0,!0,l.isBackwardNavDisabled());t(e,12,0,n);var i=t(e,17,0,!0,!l.isVertical(),l.isVertical());t(e,16,0,i);var s=t(e,21,0,l.isVertical()?l.verticalViewPortHeight:"auto");t(e,20,0,s),t(e,24,0,l.clonedItemsForStarting),t(e,26,0,l.value),t(e,28,0,l.clonedItemsForFinishing);var a=t(e,32,0,!0,l.isForwardNavDisabled());t(e,31,0,a);var o=t(e,36,0,!0,!l.isVertical(),l.isVertical());t(e,35,0,o),t(e,39,0,l.totalDotsArray()),t(e,41,0,l.footerFacet)}),(function(t,e){var l=e.component;t(e,1,0,l.id),t(e,8,0,l.contentClasses()),t(e,10,0,l.isBackwardNavDisabled()),t(e,29,0,l.isForwardNavDisabled()),t(e,37,0,l.dotsContentClasses())}))}},"xv8/":function(t,e,l){"use strict";l.d(e,"a",(function(){return r}));var n=l("AytR"),i=l("IheW"),s=l("lJxs"),a=l("8Y7J"),o=l("OiFK");new i.g({"Content-Type":"application/json"});let r=(()=>{class t{constructor(t,e){this.httpClient=t,this.utilsService=e,this.serverUrl=n.a.serverUrl,this.urlCategory=n.a.category.base}listCategory(){return this.httpClient.get(this.serverUrl+this.urlCategory).pipe(Object(s.a)(t=>t))}}return t.ngInjectableDef=a["\u0275\u0275defineInjectable"]({factory:function(){return new t(a["\u0275\u0275inject"](i.c),a["\u0275\u0275inject"](o.a))},token:t,providedIn:"root"}),t})()},zxRU:function(t,e,l){"use strict";l.d(e,"a",(function(){return u}));var n=l("AytR"),i=l("IheW"),s=l("lJxs"),a=l("8Y7J"),o=l("OiFK");const r={headers:new i.g({"Content-Type":"application/json"})};new i.g({"Content-Type":"application/x-www-form-urlencoded"});let u=(()=>{class t{constructor(t,e){this.httpClient=t,this.utilsService=e,this.serverUrl=n.a.serverUrl,this.urlResearch=n.a.research.base,this.urlGetResearchsByCatAndCant=n.a.home.getResearchsByCatAndCant}listResearchs(t){const e=this.utilsService.buildFilters(t);return this.httpClient.get(this.serverUrl+this.urlResearch+e).pipe(Object(s.a)(t=>(t.results.data.forEach(t=>{t.image_route=this.serverUrl+t.image_route.substr(2)}),t.results)))}addResearch(t){const e=new FormData;return e.append("name",t.name),e.append("description",t.description),e.append("id_Canton",t.id_Canton),e.append("category",t.category),e.append("image",t.image.File,t.image.name),this.httpClient.post(this.serverUrl+this.urlResearch,e)}editResearch(t,e){const l=new FormData;return l.append("name",t.name),l.append("description",t.description),l.append("id_Canton",t.id_Canton),l.append("category",t.category),l.append("image",t.images.File,t.images.name),this.httpClient.put(this.serverUrl+this.urlResearch+"/"+e,l)}deleteResearch(t){return this.httpClient.delete(this.serverUrl+this.urlResearch+"/"+t,r)}getResearchsByCatAndCant(t,e){return this.httpClient.post(this.serverUrl+this.urlGetResearchsByCatAndCant,{id_Canton:t,category:e},r).pipe(Object(s.a)(t=>(t.results.data.forEach(t=>{t.image_route=this.serverUrl+t.image_route.substr(2)}),t.results)))}}return t.ngInjectableDef=a["\u0275\u0275defineInjectable"]({factory:function(){return new t(a["\u0275\u0275inject"](i.c),a["\u0275\u0275inject"](o.a))},token:t,providedIn:"root"}),t})()}}]);