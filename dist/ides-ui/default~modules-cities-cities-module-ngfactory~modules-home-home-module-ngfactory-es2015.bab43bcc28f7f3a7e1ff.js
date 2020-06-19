(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{D2gA:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("Ym+k");n("SjEX");let{capitalizeFirst:s}=n("O4L6");class o{constructor(t,e,n){this.dataService=t,this.regionService=e,this.router=n,this.filters={page:0,limit:100,ascending:!0,sort:"_id"},this.value=2010,this.highValue=2020,this.options={ceil:2020,floor:2010},this.marginAuto=!1,this.showDropCities=!1,this.showDropYears=!1,this.activeCities=[],this.years=[],this.lineChartData=[],this.lineChartLabels=[],this.lineChartColors=[],this.lineChartLegend=!0,this.lineChartType="line",this.lineChartPlugins=[i],this.cities=[],this.axes=[],this.loadData=!1,this.radarChartOptions={responsive:!0,maintainAspectRatio:!1,scale:{ticks:{stepSize:20,min:0,max:100},pointLabels:{fontSize:window.innerWidth<575?10:12,fontColor:"black",fontFamily:"Noto Sans TC",lineHeight:1},gridLines:{lineWidth:2,zeroLineColor:"#e4e9f2",color:["#e2e9f0","#e3edf7","#f4f8fd","#fdf9e5","#fcf4e2"]}},legend:{onClick(t,e){const n=e.datasetIndex,i=this.chart,s=i.getDatasetMeta(n);let o=[];if(!sessionStorage.getItem("citiesHidden")||(o=JSON.parse(sessionStorage.getItem("citiesHidden")),i.data.datasets.length-1!==JSON.parse(sessionStorage.getItem("citiesHidden")).length||-1!==o.indexOf(e.text))){if(s.hidden=null===s.hidden?!i.data.datasets[n].hidden:null,s.hidden)o.push(e.text);else{const t=o.indexOf(e.text);o.splice(t,1)}sessionStorage.setItem("citiesHidden",JSON.stringify(o)),i.update()}},labels:{fontFamily:'"Noto Sans TC", serif',fontSize:10,fontColor:"black"}},tooltips:{bodyFontSize:16,titleFontSize:16,bodyFontFamily:'"Noto Sans TC", serif',titleFontFamily:'"Noto Sans TC", serif',enabled:!1,custom(t){const e=document.getElementById("chartjs-tooltip");e&&e.remove();let n=document.getElementById("chartjs-tooltip");if(n||(n=document.createElement("div"),n.id="chartjs-tooltip",n.innerHTML="<table></table>",this._chart.canvas.parentNode.appendChild(n)),0===t.opacity)return void(n.style.opacity="0");if(n.classList.remove("above","below","no-transform"),n.classList.add(t.yAlign?t.yAlign:"no-transform"),t.body){const e=t.afterBody,i=[t.title],s=t.body.map((function(t){return t.lines}));let o='<thead style="color: rgba(7, 109, 205, 1)">';i.forEach((function(t){o+="<tr><th>"+t+"</th></tr>"})),o+="</thead><tbody>",s.forEach((function(t,e){let n="background:"+sessionStorage.getItem(t[0].split(":")[0].toLocaleLowerCase());n+="; border-color:white",n+="; border-width: 2px",o+='<tr><td><span class="chartjs-tooltip-key" style="'+n+'"></span>'+t[0].split(":")[0]+"</td></tr>",o+='<tr><td style="color: #8F8F8F; font: Regular 16px/30px Noto Sans TC;"><span class="chartjs-tooltip-key1"></span>'+t[0].split(":")[1]+"</td></tr>"})),e.length>0&&(o+="<tr><td>"+e+"</td></tr>"),o+="</tbody>",n.querySelector("table").innerHTML=o}const i=this._chart.canvas.offsetTop,s=this._chart.canvas.offsetLeft;n.style.opacity="1",n.style.left=s+t.caretX+"px",n.style.top=i+t.caretY+"px",n.style.fontFamily=t._bodyFontFamily,n.style.fontSize=t.bodyFontSize+"px",n.style.fontStyle=t._bodyFontStyle,n.style.padding=t.yPadding+"px "+t.xPadding+"px"},callbacks:{title:(t,e)=>e.labels[t[0].index].toString(),label(t,e){const n=e.datasets[t.datasetIndex].label||"";let i=t.yLabel.toString();return parseInt(i)>=1e3&&(i=i.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")),n+": "+i}}}},this.radarChartLabels=[],this.radarChartData=[],this.radarChartType="radar"}ngOnInit(){"/home"!=this.router.url&&this.getData()}onWindowIndexScroll(t){!this.loadData&&"/home"==this.router.url&&t.srcElement.scrollingElement.scrollTop>100&&(this.loadData=!0,this.getData())}updateChart(t){this.radarChartData=[],this.radarChartLabels=[],Object.keys(t).forEach(e=>{Object.keys(t[e]).forEach(t=>{-1===this.radarChartLabels.indexOf(t)&&this.radarChartLabels.push(t)}),this.radarChartLabels.sort();let n="";n=this.citySelected?this.citySelected.color:this.activeCities.find(t=>t.name.toLowerCase()==e.toLowerCase()).color,sessionStorage.setItem(e.toLowerCase(),n),this.radarChartData.push({data:[],label:e,borderColor:n,pointBorderColor:"white",pointBackgroundColor:n,fill:!1})}),this.axes=[],this.radarChartLabels.forEach(e=>{this.axes.push({id:e.toString(),name:e.toString(),check:!1}),this.radarChartData.forEach(n=>{n.data.push(t[n.label][e.toString()])})});let e=[];window.innerWidth<=768&&this.radarChartLabels.forEach(t=>{let n=t.toString().split(" ");if(2==n.length)e.push(n);else if(n.length>2){let t=[];n.length>2&&t.push(n[0]+" "+n[1]);let i=" ";for(let e=2;e<n.length;e++)i+=n[e];t.push(i.trimRight()),e.push(t)}else e.push(n[0]);this.radarChartLabels=e}),this.radarChartData.forEach(t=>{t.label=s(t.label)})}getData(){this.citySelected?this.dataService.listDataIndexes(this.citySelected._id).subscribe(t=>{this.baseData=t,this.updateChart(t)}):this.dataService.listDataIndexes().subscribe(t=>{this.baseData=t,this.updateChart(t)})}onCheckItemYear(t){const e=this.years.findIndex(e=>e.id===t);this.years[e].check=!this.years[e].check,this.getData()}onCheckItemAxes(t){}getTitle(){return this.title?this.title:this.variableSelected.name}chartClicked({}){}chartHovered({}){}ngOnDestroy(){sessionStorage.clear()}}},NAV4:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("8Y7J"),s=n("OquC"),o=i["\u0275crt"]({encapsulation:0,styles:['[_nghost-%COMP%]{font-family:Helvetica,Arial,sans-serif;font-size:10px;line-height:normal;color:#09f;overflow:hidden;position:relative;display:block}span[_ngcontent-%COMP%]{padding:0}span.w10[_ngcontent-%COMP%]{font-size:550%}span.w9[_ngcontent-%COMP%]{font-size:500%}span.w8[_ngcontent-%COMP%]{font-size:450%}span.w7[_ngcontent-%COMP%]{font-size:400%}span.w6[_ngcontent-%COMP%]{font-size:350%}span.w5[_ngcontent-%COMP%]{font-size:300%}span.w4[_ngcontent-%COMP%]{font-size:250%}span.w3[_ngcontent-%COMP%]{font-size:200%}span.w2[_ngcontent-%COMP%]{font-size:150%}a[_ngcontent-%COMP%]:hover, span.w10[_ngcontent-%COMP%], span.w8[_ngcontent-%COMP%], span.w9[_ngcontent-%COMP%]{color:#0cf}span.w7[_ngcontent-%COMP%]{color:#39d}span.w6[_ngcontent-%COMP%]{color:#90c5f0}span.w5[_ngcontent-%COMP%]{color:#90a0dd}span.w4[_ngcontent-%COMP%]{color:#90c5f0}span.w3[_ngcontent-%COMP%]{color:#a0ddff}span.w2[_ngcontent-%COMP%]{color:#9ce}span.w1[_ngcontent-%COMP%]{font-size:100%;color:#aab5f0}.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%]{visibility:hidden;width:inherit;background-color:#555;color:#fff;text-align:center;border-radius:6px;padding:5px 10px;position:absolute;bottom:100%;left:0;opacity:0;transition:opacity .3s}.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%]::after{content:"";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:#555 transparent transparent}.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%]{visibility:visible;opacity:1}'],data:{}});function a(t){return i["\u0275vid"](0,[],null,null)}function l(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,1,"angular-tag-cloud",[],null,[["window","resize"]],(function(t,e,n){var s=!0;return"window:resize"===e&&(s=!1!==i["\u0275nov"](t,1).onResize(n)&&s),s}),a,o)),i["\u0275did"](1,3719168,null,0,s.a,[i.ElementRef,i.Renderer2],null,null)],null,null)}var r=i["\u0275ccf"]("angular-tag-cloud, ng-tag-cloud, ngtc",s.a,l,{data:"data",width:"width",height:"height",step:"step",overflow:"overflow",strict:"strict",zoomOnHover:"zoomOnHover",realignOnResize:"realignOnResize",randomizeAngle:"randomizeAngle",background:"background",font:"font",config:"config",log:"log"},{clicked:"clicked",dataChanges:"dataChanges",afterInit:"afterInit",afterChecked:"afterChecked"},[])},O4YN:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var i=n("AytR"),s=n("IheW"),o=n("lJxs"),a=n("8Y7J"),l=n("OiFK");const r={headers:new s.g({"Content-Type":"application/json"})};let h=(()=>{class t{constructor(t,e){this.httpClient=t,this.utilsService=e,this.serverUrl=i.a.serverUrl,this.urlTag=i.a.tag.base,this.urlTagsByCantByType=i.a.home.getTagsByCantByType,this.urlAddTag=i.a.home.addTag,this.urlStopwords=i.a.home.getStopwords}listTags(t,e={}){const n=this.utilsService.buildFilters(t);return this.httpClient.post(this.serverUrl+this.urlTag+"/filter"+n,e).pipe(Object(o.a)(t=>t.results))}addTag(t){return this.httpClient.post(this.serverUrl+this.urlAddTag,t,r)}editTag(t,e,n){return this.httpClient.put(this.serverUrl+this.urlTag+"/"+e,t,r)}deleteTag(t){return this.httpClient.delete(this.serverUrl+this.urlTag+"/"+t,r)}getTag(t,e){return this.httpClient.get(this.serverUrl+this.urlTag+"/"+t).pipe(Object(o.a)(t=>t.results.data))}getTagsByCantByType(t,e="all"){return this.httpClient.post(this.serverUrl+this.urlTagsByCantByType,{id_Canton:t,type:e},r).pipe(Object(o.a)(t=>t.results))}getStopwords(){return this.httpClient.post(this.serverUrl+this.urlStopwords,r).pipe(Object(o.a)(t=>t.results))}}return t.ngInjectableDef=a["\u0275\u0275defineInjectable"]({factory:function(){return new t(a["\u0275\u0275inject"](s.c),a["\u0275\u0275inject"](l.a))},token:t,providedIn:"root"}),t})()},OquC:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return o}));var i=n("8Y7J");class s{constructor(t,e){this.el=t,this.r2=e,this.clicked=new i.EventEmitter,this.dataChanges=new i.EventEmitter,this.afterInit=new i.EventEmitter,this.afterChecked=new i.EventEmitter,this.alreadyPlacedWords=[]}onResize(t){this.logMessage("debug","rezisze triggered"),window.clearTimeout(this.timeoutId),this.timeoutId=window.setTimeout(()=>{this.options.realignOnResize&&this.reDraw()},200)}ngOnChanges(t){this.logMessage("debug","ngOnChanges fired",t),this.config=Object.assign({width:500,height:300,overflow:!0,strict:!1,zoomOnHover:{transitionTime:0,scale:1,delay:0,color:null},realignOnResize:!1,randomizeAngle:!1,background:null,font:null,step:2,log:!1},this.config),this.width&&(this.config.width=this.width),this.height&&(this.config.height=this.height),"boolean"==typeof this.overflow&&(this.config.overflow=this.overflow),"boolean"==typeof this.strict&&(this.config.strict=this.strict),"boolean"==typeof this.realignOnResize&&(this.config.realignOnResize=this.realignOnResize),"boolean"==typeof this.randomizeAngle&&(this.config.randomizeAngle=this.randomizeAngle),"string"==typeof this.background&&(this.config.background=this.background),"string"==typeof this.font&&(this.config.font=this.font),this.zoomOnHover&&(this.config.zoomOnHover=this.zoomOnHover),this.step&&(this.config.step=this.step),this.log&&(this.config.log=this.log),this.logMessage("warn","cloud configuration",this.config),this.config.font&&this.r2.setStyle(this.el.nativeElement,"font",this.config.font),this.config.background&&this.r2.setStyle(this.el.nativeElement,"background",this.config.background),this.reDraw(t)}reDraw(t){if(this.dataChanges.emit(t),this.afterChecked.emit(),this.logMessage("debug","dataChanges emitted"),this.alreadyPlacedWords=[],!this.data)return void console.error("angular-tag-cloud: No data passed. Please pass an Array of CloudData");this.el.nativeElement.innerHTML="",t&&t.data&&(this.dataArr=t.data.currentValue);let e=this.config.width;this.el.nativeElement.parentNode.offsetWidth>0&&e<=1&&e>0&&(e*=this.el.nativeElement.parentNode.offsetWidth);const n=this.config.height;this.options=Object.assign({},this.config,{aspectRatio:e/n,width:e,center:{x:e/2,y:n/2}}),this.r2.setStyle(this.el.nativeElement,"width",this.options.width+"px"),this.r2.setStyle(this.el.nativeElement,"height",this.options.height+"px"),this.drawWordCloud(),this.logMessage("debug","reDraw finished")}ngAfterContentInit(){this.afterInit.emit(),this.logMessage("debug","afterInit emitted")}ngAfterContentChecked(){this.afterChecked.emit(),this.logMessage("debug","afterChecked emitted")}descriptiveEntry(t){let e=t.text;return t.color&&(e+="-"+t.color),t.external&&(e+="-"+t.external),t.link&&(e+="-"+t.link),t.rotate&&(e+="-"+t.rotate),e}drawWordCloud(){this.dataArr.sort((t,e)=>this.descriptiveEntry(t).localeCompare(this.descriptiveEntry(e))),this.dataArr.sort((t,e)=>e.weight-t.weight),this.dataArr.forEach((t,e)=>{this.drawWord(e,t)})}hitTest(t){for(const e of this.alreadyPlacedWords)if(this.overlapping(t,e))return!0;return!1}overlapping(t,e){const n=t.getBoundingClientRect(),i=e.getBoundingClientRect();return!(n.right<i.left||n.left>i.right||n.bottom<i.top||n.top>i.bottom)}drawWord(t,e){let n,i=this.options.randomizeAngle?6.28*Math.random():0,s=0,o=5;this.dataArr[0].weight>this.dataArr[this.dataArr.length-1].weight&&(this.options.strict?e.weight>10?(o=10,this.logMessage("warn",`[TagCloud strict] Weight property ${e.weight} > 10. Fallback to 10 as you are using strict mode`,e)):e.weight<1?(o=1,this.logMessage("warn",`[TagCloud strict] Given weight property ${e.weight} < 1. Fallback to 1 as you are using strict mode`,e)):e.weight%1!=0?(o=Math.round(e.weight),this.logMessage("warn",`[TagCloud strict] Given weight property ${e.weight} is not an integer. Rounded value to ${o}`,e)):o=e.weight:o=Math.round((e.weight-this.dataArr[this.dataArr.length-1].weight)/(this.dataArr[0].weight-this.dataArr[this.dataArr.length-1].weight)*9)+1),n=this.r2.createElement("span"),n.className="w"+o;const a=this.clicked;n.onclick=()=>{a.emit(e)};let l=this.r2.createText(e.text);e.color&&this.r2.setStyle(n,"color",e.color);let r="";if(e.rotate&&(r=`rotate(${e.rotate}deg)`,this.r2.setStyle(n,"transform",r)),e.link){const t=this.r2.createElement("a");t.href=e.link,void 0!==e.external&&e.external&&(t.target="_blank"),t.appendChild(l),l=t}this.options.zoomOnHover&&1!==this.options.zoomOnHover.scale&&(this.options.zoomOnHover.transitionTime||(this.options.zoomOnHover.transitionTime=0),this.options.zoomOnHover.scale||(this.options.zoomOnHover.scale=1),n.onmouseover=()=>{this.r2.setStyle(n,"transition",`transform ${this.options.zoomOnHover.transitionTime}s`),this.r2.setStyle(n,"transform",`scale(${this.options.zoomOnHover.scale}) ${r}`),this.r2.setStyle(n,"transition-delay",this.options.zoomOnHover.delay+"s"),this.options.zoomOnHover.color&&this.r2.setStyle(e.link?l:n,"color",this.options.zoomOnHover.color)},n.onmouseout=()=>{this.r2.setStyle(n,"transform","none "+r),this.options.zoomOnHover.color&&this.r2.removeStyle(e.link?l:n,"color")}),n.appendChild(l),this.r2.appendChild(this.el.nativeElement,n);const h=n.offsetWidth,d=n.offsetHeight;let c=this.options.center.x-h/2,g=this.options.center.y-d/2;const u=n.style;if(u.position="absolute",u.left=c+"px",u.top=g+"px",e.tooltip){this.r2.addClass(n,"tooltip");const t=this.r2.createElement("span");t.className="tooltiptext";const i=this.r2.createText(e.tooltip);t.appendChild(i),n.appendChild(t)}for(n.id="angular-tag-cloud-item-"+t;this.hitTest(n);)s+=this.options.step,i+=(t%2==0?1:-1)*this.options.step,c=this.options.center.x-h/2+s*Math.cos(i)*this.options.aspectRatio,g=this.options.center.y+s*Math.sin(i)-d/2,u.left=c+"px",u.top=g+"px";if(0===t&&(u.left=c+2*(Math.random()-.5)*(this.options.width/5)+"px",u.top=g+2*(Math.random()-.5)*(this.options.height/5)+"30px"),!this.options.overflow&&(c<0||g<0||c+h>this.options.width||g+d>this.options.height))return this.logMessage("warn","Word did not fit into the cloud and overflow is set to 'false'. The element will be removed",n),void n.remove();this.logMessage("debug","Adds new word <span>",n),this.alreadyPlacedWords.push(n),this.logMessage("debug","Placed words",this.alreadyPlacedWords)}logMessage(t,...e){this.config&&("debug"===this.config.log?console.log(`[AngularTagCloudModule ${t}]`,...e):"warn"===this.config.log&&"warn"===t&&console.warn(`[AngularTagCloudModule ${t}]`,...e))}}class o{}},lFnH:function(t,e,n){"use strict";var i=n("8Y7J"),s=n("SVse"),o=n("hrfs"),a=n("TSSN"),l=n("EE5B"),r=n("2+0p"),h=n("I5r7");n("D2gA"),n("cplz"),n("CzLl"),n("iInd"),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return g}));var d=i["\u0275crt"]({encapsulation:0,styles:[["@media screen and (max-width:991px){.canvas-index-width[_ngcontent-%COMP%]{width:100%!important}}@media screen and (min-width:992px) and (max-width:1199.98px){.canvas-index-width[_ngcontent-%COMP%]{width:60%!important}}@media screen and (min-width:1200px) and (max-width:1499.98px){.canvas-index-width[_ngcontent-%COMP%]{width:60%!important}}@media screen and (min-width:1500px){.canvas-index-width[_ngcontent-%COMP%]{width:50%!important}}"]],data:{}});function c(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,10,"div",[["class","canvas-index-width"]],null,null,null,null,null)),i["\u0275prd"](512,null,s["\u0275NgClassImpl"],s["\u0275NgClassR2Impl"],[i.IterableDiffers,i.KeyValueDiffers,i.ElementRef,i.Renderer2]),i["\u0275did"](2,278528,null,0,s.NgClass,[s["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i["\u0275pod"](3,{"col-12":0}),i["\u0275prd"](512,null,s["\u0275NgStyleImpl"],s["\u0275NgStyleR2Impl"],[i.ElementRef,i.KeyValueDiffers,i.Renderer2]),i["\u0275did"](5,278528,null,0,s.NgStyle,[s["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),i["\u0275pod"](6,{margin:0}),(t()(),i["\u0275eld"](7,0,null,null,3,"canvas",[["baseChart",""],["id","indexesGraph"],["width","1200"]],null,null,null,null,null)),i["\u0275prd"](512,null,s["\u0275NgClassImpl"],s["\u0275NgClassR2Impl"],[i.IterableDiffers,i.KeyValueDiffers,i.ElementRef,i.Renderer2]),i["\u0275did"](9,278528,null,0,s.NgClass,[s["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),i["\u0275did"](10,999424,[[1,4]],0,o.a,[i.ElementRef,o.c],{datasets:[0,"datasets"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"]},null)],(function(t,e){var n=e.component,i=t(e,3,0,!n.marginAuto);t(e,2,0,"canvas-index-width",i);var s=t(e,6,0,n.marginAuto?"auto":"");t(e,5,0,s),t(e,9,0,n.radarChartData.length>10?"chart-index-size-plus":"chart-index-size"),t(e,10,0,n.radarChartData,n.radarChartLabels,n.radarChartOptions,n.radarChartType)}),null)}function g(t){return i["\u0275vid"](0,[i["\u0275qud"](402653184,1,{chart:0}),(t()(),i["\u0275eld"](1,0,null,null,11,"div",[["class","col-12 mb-4"]],null,[["window","scroll"]],(function(t,e,n){var i=!0;return"window:scroll"===e&&(i=!1!==t.component.onWindowIndexScroll(n)&&i),i}),null,null)),(t()(),i["\u0275eld"](2,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(t()(),i["\u0275eld"](3,0,null,null,3,"div",[["class","col-12 ides-text-blue mb-4"]],null,null,null,null,null)),(t()(),i["\u0275eld"](4,0,null,null,2,"h2",[["class","ides-text-index-title"],["translate",""]],null,null,null,null,null)),i["\u0275did"](5,8536064,null,0,a.e,[a.k,i.ElementRef,i.ChangeDetectorRef],{translate:[0,"translate"]},null),(t()(),i["\u0275ted"](6,null,["",""])),(t()(),i["\u0275eld"](7,0,null,null,3,"div",[["class","col-12 mb-4"]],null,null,null,null,null)),(t()(),i["\u0275eld"](8,0,null,null,2,"p",[["class","ides-text-custom text-justify ides-text-index-subtitle"],["translate",""]],null,null,null,null,null)),i["\u0275did"](9,8536064,null,0,a.e,[a.k,i.ElementRef,i.ChangeDetectorRef],{translate:[0,"translate"]},null),(t()(),i["\u0275ted"](-1,null,["index description"])),(t()(),i["\u0275and"](16777216,null,null,1,null,c)),i["\u0275did"](12,16384,null,0,s.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),i["\u0275eld"](13,0,null,null,2,"div",[["class","col-12"]],null,null,null,null,null)),(t()(),i["\u0275eld"](14,0,null,null,1,"app-ides-download",[],null,null,null,l.b,l.a)),i["\u0275did"](15,114688,null,0,r.a,[h.b],{idElement:[0,"idElement"],titleExport:[1,"titleExport"],hiddenCSV:[2,"hiddenCSV"],nameFile:[3,"nameFile"]},null)],(function(t,e){var n=e.component;t(e,5,0,""),t(e,9,0,""),t(e,12,0,n.radarChartData.length>0),t(e,15,0,"indexesGraph","\xcdndices",!0,"indices_ideas_urbanas")}),(function(t,e){t(e,6,0,e.component.getTitle())}))}}}]);