function _createForOfIteratorHelper(e,l){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||l&&e&&"number"==typeof e.length){n&&(e=n);var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,r=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){r=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(r)throw i}}}}function _unsupportedIterableToArray(e,l){if(e){if("string"==typeof e)return _arrayLikeToArray(e,l);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,l):void 0}}function _arrayLikeToArray(e,l){(null==l||l>e.length)&&(l=e.length);for(var n=0,t=new Array(l);n<l;n++)t[n]=e[n];return t}function _classCallCheck(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,l){for(var n=0;n<l.length;n++){var t=l[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,l,n){return l&&_defineProperties(e.prototype,l),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{ODTc:function(e,l,n){"use strict";n.d(l,"a",(function(){return c}));var t=n("lJxs"),a=n("Ym+k"),i=n("5RHE");n("SjEX");var o=n("O4L6"),r=o.formatLabel,s=o.capitalizeFirst,u=n("O4L6").titleCase,d=function(e){return e.lineal="line",e.bar="bar",e.stacked="bar",e.pie="pie",e}({}),c=function(){function e(l,n,t,i,o,r,s){_classCallCheck(this,e),this.clasificationService=l,this.variableService=n,this.dataService=t,this.regionService=i,this.chartService=o,this.utilsService=r,this.router=s,this.loading=!1,this.spinner1="spinner",this.value=20,this.highValue=40,this.options={ceil:100,floor:0},this.filters={page:0,limit:100,ascending:!0,sort:"name"},this.years=[],this.cities=[],this.citiesSelected=[],this.yearSelected="",this.downloadOptions=[{id:"pdf",name:"PDF",check:!1},{id:"csv",name:"CSV",check:!1},{id:"jpeg",name:"JPEG",check:!1},{id:"png",name:"PNG",check:!1}],this.lineChartData=[],this.lineChartLabels=[],this.lineChartOptions={responsive:!0,maintainAspectRatio:!1,legend:{onLeave:function(e,l){var n=l.datasetIndex,t=this.chart;t.data.datasets[n].borderWidth=sessionStorage.getItem("borderWidth"),t.data.datasets[n].pointBorderColor=t.data.datasets[n].hoverBorderColor,t.data.datasets[n].pointRadius=window.innerWidth<575?3:7,t.data.datasets[n].pointBackgroundColor="white",t.data.datasets[n].pointBorderWidth=1,t.data.datasets[n].backgroundColor=sessionStorage.getItem("backgroundColor"),t.update()},onHover:function(e,l){var n=l.datasetIndex,t=this.chart;sessionStorage.setItem("borderWidth",t.data.datasets[n].borderWidth),sessionStorage.setItem("backgroundColor",t.data.datasets[n].backgroundColor),t.data.datasets[n].borderWidth=t.data.datasets[n].hoverBorderWidth,t.data.datasets[n].borderColor=t.data.datasets[n].hoverBorderColor,t.data.datasets[n].pointBorderColor=t.data.datasets[n].pointHoverBorderColor,t.data.datasets[n].pointRadius=5,t.data.datasets[n].pointBackgroundColor=t.data.datasets[n].pointHoverBackgroundColor,t.data.datasets[n].pointBorderWidth=1,t.data.datasets[n].backgroundColor=t.data.datasets[n].hoverBackgroundColor,t.update()},onClick:function(e,l){var n=l.datasetIndex,t=this.chart,a=t.getDatasetMeta(n),i=[];if(!sessionStorage.getItem("citiesHidden")||(i=JSON.parse(sessionStorage.getItem("citiesHidden")),t.data.datasets.length-1!==JSON.parse(sessionStorage.getItem("citiesHidden")).length||-1!==i.indexOf(l.text))){if(a.hidden=null===a.hidden?!t.data.datasets[n].hidden:null,a.hidden)i.push(l.text);else{var o=i.indexOf(l.text);i.splice(o,1)}sessionStorage.setItem("citiesHidden",JSON.stringify(i)),t.update()}},labels:{fontFamily:'"Noto Sans TC", sans-serif',fontSize:10,fontColor:"black"}},hover:{mode:"dataset"},tooltips:{bodyFontSize:14,titleFontSize:14,bodyFontFamily:'"Noto Sans TC", sans-serif',titleFontFamily:'"Noto Sans TC", sans-serif',backgroundColor:"white",bodyFontColor:"black",titleFontColor:"#076DCD",enabled:!1,bodySpacing:10,custom:function(e){var l=document.getElementById("chartjs-tooltip");l&&l.remove();var n=document.getElementById("chartjs-tooltip");if(n||((n=document.createElement("div")).id="chartjs-tooltip",n.innerHTML="<table></table>",this._chart.canvas.parentNode.appendChild(n)),0!==e.opacity){if(n.classList.remove("above","below","no-transform"),n.classList.add(e.yAlign?e.yAlign:"no-transform"),e.body){var t=e.afterBody,a=[sessionStorage.getItem("variableSelectedName")+" "+e.dataPoints[0].label],i=e.body.map((function(e){return e.lines})),o=" "+sessionStorage.getItem("variableSelectedMeasureSymbol"),r='<thead style="color: rgba(7, 109, 205, 1)">';a.forEach((function(e){r+="<tr><th>"+e+"</th></tr>"})),r+="</thead><tbody>",i.forEach((function(e,l){var n="background:"+sessionStorage.getItem(e[0].split(":")[0].toLocaleLowerCase());n+="; border-color:white",r+='<tr><td><span class="chartjs-tooltip-key" style="'+(n+="; border-width: 2px")+'"></span>'+e[0].split(":")[0]+"</td></tr>",r+='<tr><td style="color: #8F8F8F; font: Regular 16px/30px Noto Sans TC;"><span class="chartjs-tooltip-key1"></span>'+e[0].split(":")[1]+o+"</td></tr>"})),t.length>0&&(r+="<tr><td>"+t+"</td></tr>"),r+="</tbody>",n.querySelector("table").innerHTML=r}var s=this._chart.canvas.offsetTop,u=this._chart.canvas.offsetLeft;n.style.opacity="1",n.style.left=u+e.caretX+"px",n.style.top=s+e.caretY+"px",n.style.fontFamily=e._bodyFontFamily,n.style.fontSize=e.bodyFontSize+"px",n.style.fontStyle=e._bodyFontStyle,n.style.padding=e.yPadding+"px "+e.xPadding+"px"}else n.style.opacity="0"},callbacks:{title:function(e,l){return sessionStorage.getItem("variableSelectedName")+" "+e[0].xLabel.toString()},label:function(e,l){var n=l.datasets[e.datasetIndex].label||"",t=e.yLabel.toString();return parseInt(t)>=1e3&&(t=t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")),n+": "+t},afterBody:function(e,l){return l.datasets[e[0].datasetIndex].data[e[0].index].x}}},scales:{xAxes:[{scaleLabel:{display:!0,labelString:"A\xf1o",fontFamily:'"Noto Sans TC", sans-serif',fontSize:window.innerWidth<575?10:16},gridLines:{lineWidth:0}}],yAxes:[{id:"y-axis-0",position:"left",ticks:{beginAtZero:!0,callback:function(e,l,n){return Number(e)>=1e3?e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."):e}},scaleLabel:{display:!0,labelString:"Cantidad",fontFamily:'"Noto Sans TC", sans-serif',fontSize:window.innerWidth<575?10:16}}]},annotation:{}},this.lineChartColors=[],this.lineChartLegend=!0,this.lineChartType="line",this.lineChartPlugins=[a],this.loadCity=!1}return _createClass(e,[{key:"ngOnInit",value:function(){sessionStorage.clear(),this.loadCity=!0,this.getCities()}},{key:"getCities",value:function(){var e=this;this.regionService.listRegionsPublic({page:0,limit:1e3,ascending:!0,sort:"_id"},"Canton").subscribe((function(l){e.cities=[];var n=new Set;l.data.forEach((function(l){!n.has(l._id)&&l.active&&(e.cities.push({id:l._id,name:u(l.name),check:!0,color:l.color}),n.add(l._id))})),e.getClasifications()}))}},{key:"getClasifications",value:function(){var e=this,l=[];this.resultClasification$=this.clasificationService.listClasification(this.filters).pipe(Object(t.a)((function(n){e.clasificationSelected=n.data[1],e.getVariables();var t,a=_createForOfIteratorHelper(n.data.filter((function(e){return"Corona Virus"!==e.name})));try{for(a.s();!(t=a.n()).done;){var i=t.value;i.image_active_route="assets/ICONOS/".concat(i.name,".png"),i.image_route="assets/ICONOS/".concat(i.name,".png"),l.push(i)}}catch(o){a.e(o)}finally{a.f()}return l})))}},{key:"getVariables",value:function(){var e=this;this.resultVariables$=this.variableService.getVariablesByClasification(this.clasificationSelected._id).pipe(Object(t.a)((function(l){return e.variableSelected=l.data[0],sessionStorage.setItem("variableSelectedName",e.variableSelected.name),sessionStorage.setItem("variableSelectedLabel",e.variableSelected.label),sessionStorage.setItem("variableSelectedMeasureSymbol",e.variableSelected.measure_symbol),e.getData(),l})))}},{key:"getYearsAndCities",value:function(){this.years=[];var e=new Set;this.resultData.forEach((function(l){e.add(l.year)}));var l=Array.from(e.values()).sort(),n=Object.assign({},this.options);n.floor=+l[0],n.ceil=+l[l.length-1],this.options=n,this.highValue=+l[0],this.value=+l[l.length-1];for(var t=this.highValue;t<=this.value;t++)this.yearSelected=t.toString(),this.years.push({id:t.toString(),name:t.toString(),check:!0})}},{key:"getSelectCities",value:function(){this.loadData2()}},{key:"getVariableSelected",value:function(){this.onSelectVariable(this.variableSelected)}},{key:"loadData2",value:function(){var e=this;this.lineChartData=[],this.lineChartLabels=[],this.lineChartLabels=this.years.filter((function(e){return!!e.check})).map((function(e){return e.name})),this.lineChartType===d.lineal||this.lineChartType===d.bar?"stacked"===this.variableSelected.chart_type.split(" ")[0]?(this.lineChartOptions.scales.xAxes[0].scaleLabel.labelString="Ciudades",this.lineChartOptions.scales.yAxes[0].scaleLabel.labelString=""==sessionStorage.getItem("variableSelectedLabel")?"Cantidad":sessionStorage.getItem("variableSelectedLabel"),this.lineChartOptions.scales.xAxes[0].stacked=!0,this.lineChartOptions.scales.yAxes[0].stacked=!0,this.lineChartOptions.hover={mode:"label"},this.lineChartLabels=[],this.lineChartColors=[{backgroundColor:"#004587"},{backgroundColor:"#076DCD"},{backgroundColor:"#FFDA20"},{backgroundColor:"#F8A901"},{backgroundColor:"#1BD4D4"},{backgroundColor:"#AAD6FF"},{backgroundColor:"#8F8F8F"},{backgroundColor:"#BFBFBF"},{backgroundColor:"#E3E3E3"}],Object.keys(this.resultData[0].value).forEach((function(l){e.lineChartData.push({label:s(l),data:Array(),stack:"a"})})),this.resultData.forEach((function(l){l.year.toString()===e.yearSelected&&e.citiesSelected.forEach((function(n){r(l.obj_Canton.name)===n.name&&(e.lineChartLabels.push(r(l.obj_Canton.name)),Object.keys(l.value).forEach((function(n,t){e.lineChartData[t].data.push(l.value[n])})))}))}))):(this.lineChartOptions.scales.xAxes[0].stacked=!1,this.lineChartOptions.scales.yAxes[0].stacked=!1,this.lineChartOptions.scales.xAxes[0].scaleLabel.labelString="A\xf1o",this.lineChartOptions.scales.yAxes[0].scaleLabel.labelString=""==sessionStorage.getItem("variableSelectedLabel")?"Cantidad":sessionStorage.getItem("variableSelectedLabel"),this.lineChartOptions.hover={mode:"dataset"},this.citiesSelected.forEach((function(l,n){var t=JSON.parse(sessionStorage.getItem("citiesHidden"));if(l.check){var a=l.color||"",i=e.getColorStrong(l.color)||"";e.lineChartColors.push({backgroundColor:a}),sessionStorage.setItem(l.name.toLowerCase(),a);var o=!1;t&&-1!==t.indexOf(l.name)&&(o=!0),e.lineChartData.push({label:r(l.name),data:Array(),fill:!1,borderColor:i,pointBorderColor:a,pointBackgroundColor:"white",pointRadius:2,borderWidth:2,pointHoverRadius:4,pointHoverBackgroundColor:i,pointHoverBorderWidth:1,hoverRadius:8,pointHoverBorderColor:"white",hoverBorderColor:i,hoverBorderWidth:4,hoverBackgroundColor:i,backgroundColor:a,hidden:o}),e.lineChartLabels.forEach((function(n){e.lineChartData[e.lineChartData.length-1].data.push(null),e.resultData.forEach((function(t){t.obj_Canton._id===l.id&&t.year.toString()===n&&(e.lineChartData[e.lineChartData.length-1].data[e.lineChartData[e.lineChartData.length-1].data.length-1]={x:t.description,y:t.value})}))}))}}))):this.citiesSelected.forEach((function(l){l.check&&(e.lineChartData.push({label:r(l.name),data:[],fill:!1}),e.lineChartLabels.forEach((function(n){e.lineChartData[e.lineChartData.length-1].data.push(null),e.resultData.forEach((function(t){t.obj_Canton._id===l.id&&t.year.toString()===n&&(e.lineChartData[e.lineChartData.length-1].data[e.lineChartData[e.lineChartData.length-1].data.length-1]=t.value.electricidad)}))})))})),setTimeout((function(){e.chartService.imageBase24.then((function(l){e.imageBase64={name:"chart",data:l,type:"chart"}}))}),3e3)}},{key:"loadData",value:function(){var e=this;this.lineChartData=[],this.lineChartLabels=[],this.lineChartLabels=this.years.filter((function(e){return!!e.check})).map((function(e){return e.name})),this.lineChartType===d.lineal||this.lineChartType===d.bar?"stacked"===this.variableSelected.chart_type.split(" ")[0]?(this.lineChartOptions.scales.xAxes[0].scaleLabel.labelString="Ciudades",this.lineChartOptions.scales.yAxes[0].scaleLabel.labelString=""==sessionStorage.getItem("variableSelectedLabel")?"Cantidad":sessionStorage.getItem("variableSelectedLabel"),this.lineChartOptions.scales.xAxes[0].stacked=!0,this.lineChartOptions.scales.yAxes[0].stacked=!0,this.lineChartOptions.hover={mode:"label"},this.lineChartLabels=[],this.lineChartColors=[{backgroundColor:"#004587"},{backgroundColor:"#076DCD"},{backgroundColor:"#FFDA20"},{backgroundColor:"#F8A901"},{backgroundColor:"#1BD4D4"},{backgroundColor:"#AAD6FF"},{backgroundColor:"#8F8F8F"},{backgroundColor:"#BFBFBF"},{backgroundColor:"#E3E3E3"}],Object.keys(this.resultData[0].value).forEach((function(l){e.lineChartData.push({label:s(l),data:Array(),stack:"a"})})),this.resultData.forEach((function(l){l.year.toString()===e.yearSelected&&(e.lineChartLabels.push(r(l.obj_Canton.name)),Object.keys(l.value).forEach((function(n,t){e.lineChartData[t].data.push(l.value[n])})))}))):(this.lineChartOptions.scales.xAxes[0].stacked=!1,this.lineChartOptions.scales.yAxes[0].stacked=!1,this.lineChartOptions.scales.xAxes[0].scaleLabel.labelString="A\xf1o",this.lineChartOptions.scales.yAxes[0].scaleLabel.labelString=""==sessionStorage.getItem("variableSelectedLabel")?"Cantidad":sessionStorage.getItem("variableSelectedLabel"),this.lineChartOptions.hover={mode:"dataset"},this.cities.forEach((function(l,n){var t=JSON.parse(sessionStorage.getItem("citiesHidden"));if(l.check){var a=l.color||"",i=e.getColorStrong(l.color)||"";e.lineChartColors.push({backgroundColor:a}),sessionStorage.setItem(l.name.toLowerCase(),a);var o=!1;t&&-1!==t.indexOf(l.name)&&(o=!0),e.lineChartData.push({label:r(l.name),data:Array(),fill:!1,borderColor:i,pointBorderColor:a,pointBackgroundColor:"white",pointRadius:2,borderWidth:2,pointHoverRadius:4,pointHoverBackgroundColor:i,pointHoverBorderWidth:1,hoverRadius:8,pointHoverBorderColor:"white",hoverBorderColor:i,hoverBorderWidth:4,hoverBackgroundColor:i,backgroundColor:a,hidden:o}),e.lineChartLabels.forEach((function(n){e.lineChartData[e.lineChartData.length-1].data.push(null),e.resultData.forEach((function(t){t.obj_Canton._id===l.id&&t.year.toString()===n&&(e.lineChartData[e.lineChartData.length-1].data[e.lineChartData[e.lineChartData.length-1].data.length-1]={x:t.description,y:t.value})}))}))}}))):this.cities.forEach((function(l){l.check&&(e.lineChartData.push({label:r(l.name),data:[],fill:!1}),e.lineChartLabels.forEach((function(n){e.lineChartData[e.lineChartData.length-1].data.push(null),e.resultData.forEach((function(t){t.obj_Canton._id===l.id&&t.year.toString()===n&&(e.lineChartData[e.lineChartData.length-1].data[e.lineChartData[e.lineChartData.length-1].data.length-1]=t.value.electricidad)}))})))}))}},{key:"getData",value:function(){var e=this;this.loading=!0;var l=null;this.variableSelected&&(l=this.variableSelected._id,this.lineChartType=d[this.variableSelected.chart_type.split(" ")[0]]),this.subscription&&this.subscription.unsubscribe(),this.subscription=this.dataService.listDatasPublic({page:0,limit:2e3,ascending:!0,sort:"obj_Canton.name"},l).subscribe((function(l){e.loading=!1,e.resultData=l.data,e.getYearsAndCities(),0===e.citiesSelected.length&&(e.citiesSelected.push(e.cities[0]),e.loadData2()),e.loadData2()}),(function(l){e.loading=!1}))}},{key:"onSelectClasification",value:function(e){this.clasificationSelected=e,sessionStorage.removeItem("citiesHidden"),this.getVariables()}},{key:"onSelectVariable",value:function(e){this.variableSelected=e,sessionStorage.setItem("variableSelectedName",this.variableSelected.name),sessionStorage.setItem("variableSelectedLabel",this.variableSelected.label),sessionStorage.setItem("variableSelectedMeasureSymbol",this.variableSelected.measure_symbol),sessionStorage.removeItem("citiesHidden"),this.getData()}},{key:"onCheckItemCity",value:function(e){var l=this.citiesSelected.findIndex((function(l){return l.id===e}));this.citiesSelected[l].check=!this.citiesSelected[l].check,this.loadData2()}},{key:"onCheckItemYear",value:function(e){var l=this.years.findIndex((function(l){return l.id===e}));this.years[l].check=!this.years[l].check,this.loadData2()}},{key:"downloadCanvas",value:function(e,l){var n=e.target,t=document.getElementById(this.variableSelected._id),a=new i;switch(l){case"pdf":var o=t.toDataURL();a.addImage(o,"JPEG",0,0),a.save("download.pdf");break;case"csv":break;case"png":var r=t.toDataURL();n.href=r,n.download="download.png";break;default:var s=t.toDataURL("image/jpeg");n.href=s,n.download="download.jpeg"}}},{key:"sliderChange",value:function(e){for(var l=this,n=function(n){if(n<e.value||n>e.highValue){var t=l.years.findIndex((function(e){return+e.id===n}));l.years[t].check=!1}else{var a=l.years.findIndex((function(e){return+e.id===n}));l.years[a].check=!0}},t=this.options.floor;t<=this.options.ceil;t++)n(t);this.loadData2()}},{key:"onDownloadCSV",value:function(e){var l=this,n=null;this.variableSelected&&(n=this.variableSelected._id,this.lineChartType=d[this.variableSelected.chart_type.split(" ")[0]]),new Date,this.dataService.downloadCSV({page:0,limit:1e4,ascending:!0,sort:"obj_Canton.name"},n,this.citiesSelected,this.years).subscribe((function(n){var t=new Blob([n],{type:"text/csv"}),a=window.URL.createObjectURL(t);if(navigator.msSaveOrOpenBlob)navigator.msSaveBlob(t,e+".csv");else{var i=document.createElement("a");i.href=a,i.download="data-"+l.utilsService.getStringFromDateNow()+".csv",document.body.appendChild(i),i.click(),document.body.removeChild(i)}window.URL.revokeObjectURL(a)}))}},{key:"onCheckYear",value:function(e){this.yearSelected=e,this.loadData2()}},{key:"ngOnDestroy",value:function(){sessionStorage.clear()}},{key:"getColorStrong",value:function(e){return null!=e&&""!=e?e.replace(")",", 08)"):""}}]),e}()},R7PI:function(e,l,n){"use strict";var t=n("8Y7J"),a=n("A8xo"),i=n("QvxX"),o=n("G8W4"),r=n("1tbR"),s=n("SVse"),u=n("TSSN"),d=function(){function e(){_classCallCheck(this,e),this.selectable=!0,this.checkItem=new t.EventEmitter}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"onCheckItem",value:function(e){this.checkItem.emit(e)}}]),e}(),c=t["\u0275crt"]({encapsulation:0,styles:[[".ides-mr-80[_ngcontent-%COMP%]{margin-right:80px}"]],data:{}});function h(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,2,"span",[["class","float-right"]],null,null,null,null,null)),(e()(),t["\u0275eld"](1,0,null,null,1,"i-feather",[["name","check"]],null,null,null,o.b,o.a)),t["\u0275did"](2,573440,null,0,r.a,[t.ElementRef,t.ChangeDetectorRef,r.c],{name:[0,"name"]},null)],(function(e,l){e(l,2,0,"check")}),null)}function g(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,3,"a",[["class","dropdown-item "]],null,[[null,"click"]],(function(e,l,n){var t=!0;return"click"===l&&(t=!1!==e.component.onCheckItem(e.context.$implicit.id)&&t),t}),null,null)),(e()(),t["\u0275ted"](1,null,[" "," "])),(e()(),t["\u0275and"](16777216,null,null,1,null,h)),t["\u0275did"](3,16384,null,0,s.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(e,l){e(l,3,0,l.context.$implicit.check&&l.component.selectable)}),(function(e,l){e(l,1,0,l.context.$implicit.name)}))}function f(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,7,"div",[["class","dropdown"]],null,null,null,null,null)),(e()(),t["\u0275eld"](1,0,null,null,3,"button",[["aria-expanded","false"],["aria-haspopup","true"],["class","btn ides-dropdown dropdown-toggle ides-text-blue"],["data-toggle","dropdown"],["id","dropdownMenuButton"],["type","button"]],null,null,null,null,null)),(e()(),t["\u0275eld"](2,0,null,null,2,"span",[["class","ides-mr-80 font-weight-bold"],["translate",""]],null,null,null,null,null)),t["\u0275did"](3,8536064,null,0,u.e,[u.k,t.ElementRef,t.ChangeDetectorRef],{translate:[0,"translate"]},null),(e()(),t["\u0275ted"](4,null,["",""])),(e()(),t["\u0275eld"](5,0,null,null,2,"div",[["aria-labelledby","dropdownMenuButton"],["class","dropdown-menu"]],null,null,null,null,null)),(e()(),t["\u0275and"](16777216,null,null,1,null,g)),t["\u0275did"](7,278528,null,0,s.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(e,l){var n=l.component;e(l,3,0,""),e(l,7,0,n.items)}),(function(e,l){e(l,4,0,l.component.title)}))}var p=n("hrfs"),m=n("NgMZ"),b=n("s7LF"),v=n("mtxq"),C=n("FV9A"),S=n("48MR"),y=n("rD0E"),k=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"getOrigins",value:function(){var e="";return this.origins&&this.origins.forEach((function(l,n){0!==n&&(e+=", "),e+=l.name})),e}}]),e}(),w=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function x(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","row align-items-center pr-3 pl-3"]],null,null,null,null,null)),(e()(),t["\u0275eld"](1,0,null,null,1,"div",[["class","col-12 col-sm-12 col-md-12 col-lg-6 text-uppercase ides-text-blue ides-origins"]],null,null,null,null,null)),(e()(),t["\u0275ted"](2,null,[" "," "]))],null,(function(e,l){e(l,2,0,l.component.getOrigins())}))}var D=n("YCg4"),I=n("y1st"),O=n("hltz"),_=n("MEzG"),L=n("EE5B"),E=n("2+0p"),R=n("I5r7");n("ODTc"),n("ecYQ"),n("tWZD"),n("cplz"),n("CzLl"),n("OiFK"),n("iInd"),n.d(l,"a",(function(){return F})),n.d(l,"b",(function(){return j}));var F=t["\u0275crt"]({encapsulation:0,styles:[['.align-items-center[_ngcontent-%COMP%]{display:flex;align-items:bottom;justify-content:center}.ides-ml-clasificaions[_ngcontent-%COMP%]{margin-top:2rem!important;margin-left:9rem!important;margin-right:9rem!important}@media screen and (max-width:575px){.submenu-tematic[_ngcontent-%COMP%]{font:16px "Noto Sans TC"!important}.ides-ml-clasificaions[_ngcontent-%COMP%]{margin-left:5rem!important;margin-right:3rem!important}}@media screen and (min-width:576px){.submenu-tematic[_ngcontent-%COMP%]{font:22px "Noto Sans TC"!important}}.ides-thematic-description[_ngcontent-%COMP%]{font:13px "Noto Sans TC",sans-serif;font-weight:400}[_nghost-%COMP%]    .ui-multiselect{border-radius:14px;background:#fff;border-color:#064cc3;width:12rem}[_nghost-%COMP%] .ui-multiselect .ui-multiselect-trigger{border-radius:14px;background:#ffffff00;color:#064cc3}[_nghost-%COMP%] .ui-multiselect .ui-multiselect-label{color:#064cc3}[_nghost-%COMP%] .ui-multiselect .ui-multiselect-panel{background-color:#fff;border-radius:14px}[_nghost-%COMP%] .ui-multiselect .ui-multiselect-panel .ui-widget-header .ui-chkbox{display:none!important;background-color:red;color:red}[_nghost-%COMP%]    .ui-dropdown{border-radius:14px;background:#fff;border-color:#064cc3;width:12rem}[_nghost-%COMP%]    .ui-dropdown:hover{border-radius:14px;background:#fff;border-color:#064cc3;width:12rem}[_nghost-%COMP%]    .ui-dropdown-clearable{background-color:#064cc3;border-color:#064cc3;border-radius:15px}[_nghost-%COMP%]    .ui-dropdown-label{background-color:#ffffff00;border-color:#064cc3;color:#064cc3;width:10rem}[_nghost-%COMP%]    .ui-dropdown .ui-dropdown-trigger{background-color:#ffffff00;border-color:#064cc3;border-radius:15px;color:#064cc3}[_nghost-%COMP%]    .ui-dropdown .ui-dropdown-panel{background-color:#fff;border-radius:14px}@media (min-width:1280px){.ides-ml-clasificaions[_ngcontent-%COMP%]{margin-top:2rem!important;margin-left:6%!important;margin-right:5%!important;margin:0 auto}.ides-ml-charts[_ngcontent-%COMP%]{margin:1rem 2%!important}}@media (min-width:1024px){.ides-ml-charts[_ngcontent-%COMP%]{margin:1rem 2%!important}}@media (min-width:768px){.ides-ml-charts[_ngcontent-%COMP%]{margin:1rem 2%!important}}.row.mb-4.ides-ml-analyse_topics[_ngcontent-%COMP%]{max-width:1500px;min-width:300px;margin:0 auto}.ides-ml-charts[_ngcontent-%COMP%]{margin:1rem 1%!important}@media screen and (max-width:575px){.ides-ml-clasificaions[_ngcontent-%COMP%]{margin-left:4rem!important;display:block}}.anima-texto[_ngcontent-%COMP%]{-webkit-animation-name:anima-texto;animation-name:anima-texto;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes anima-texto{0%{transform:translateY(-100%);visibility:visible;opacity:0}100%{transform:translateY(0)}}@-webkit-keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible;opacity:100%}100%{transform:translateY(0)}}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible;opacity:100%}100%{transform:translateY(0)}}.ides-card1.text-center.ides-height-100.row.ides-card-clasification[_ngcontent-%COMP%]:active{background:#fbbb31;background:linear-gradient(78deg,#fbbb31 0,#f8ab06 100%);box-shadow:0 14px 14px -7px #9ba2a3b0;border-radius:15px;cursor:pointer;color:#fff;font-family:Arial;font-size:16px;padding:10px;min-width:200px;max-width:250px;text-decoration:none;text-shadow:0 0 0 #000}']],data:{}});function A(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","col-6 col-sm-6 col-md-6 col-lg-6 col-xl mb-3 ides-mr-5"]],null,[[null,"click"]],(function(e,l,n){var t=!0;return"click"===l&&(t=!1!==e.component.onSelectClasification(e.context.$implicit)&&t),t}),null,null)),(e()(),t["\u0275eld"](1,0,null,null,1,"app-ides-card-clasification",[],null,null,null,a.b,a.a)),t["\u0275did"](2,114688,null,0,i.a,[],{clasification:[0,"clasification"],selected:[1,"selected"]},null)],(function(e,l){e(l,2,0,l.context.$implicit,l.context.$implicit._id===l.component.clasificationSelected._id)}),null)}function B(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,4,"div",[["class","col-12"]],null,null,null,null,null)),(e()(),t["\u0275eld"](1,0,null,null,3,"div",[["class","row mb-2"]],null,null,null,null,null)),(e()(),t["\u0275eld"](2,0,null,null,2,"div",[["class","ides-ml-charts"]],null,null,null,null,null)),(e()(),t["\u0275eld"](3,0,null,null,1,"app-ides-dropdown",[],null,[[null,"checkItem"]],(function(e,l,n){var t=!0;return"checkItem"===l&&(t=!1!==e.component.onCheckYear(n)&&t),t}),f,c)),t["\u0275did"](4,114688,null,0,d,[],{title:[0,"title"],items:[1,"items"],selectable:[2,"selectable"]},{checkItem:"checkItem"})],(function(e,l){var n=l.component;e(l,4,0,n.yearSelected,n.years,!1)}),null)}function P(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,3,"canvas",[["baseChart",""],["style","min-height: 180px;"],["width","3600"]],[[8,"id",0]],null,null,null,null)),t["\u0275prd"](512,null,s["\u0275NgClassImpl"],s["\u0275NgClassR2Impl"],[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](2,278528,null,0,s.NgClass,[s["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),t["\u0275did"](3,999424,[[1,4]],0,p.a,[t.ElementRef,p.c],{datasets:[0,"datasets"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"],colors:[4,"colors"],legend:[5,"legend"],plugins:[6,"plugins"]},null)],(function(e,l){var n=l.component;e(l,2,0,n.lineChartData.length>10?"chart-size-plus":"chart-size"),e(l,3,0,n.lineChartData,n.lineChartLabels,n.lineChartOptions,n.lineChartType,n.lineChartColors,n.lineChartLegend,n.lineChartPlugins)}),(function(e,l){var n=l.component;e(l,0,0,t["\u0275inlineInterpolate"](1,"",null==n.variableSelected?null:n.variableSelected._id,""))}))}function V(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,4,"div",[["class","col custom-slider"],["style","width: 100%; float: right;"]],null,null,null,null,null)),(e()(),t["\u0275eld"](1,0,null,null,3,"ng5-slider",[["class","ng5-slider"]],[[2,"vertical",null],[2,"animate",null],[1,"disabled",0]],[[null,"userChange"],[null,"valueChange"],[null,"highValueChange"],["window","resize"]],(function(e,l,n){var a=!0,i=e.component;return"window:resize"===l&&(a=!1!==t["\u0275nov"](e,3).onResize(n)&&a),"userChange"===l&&(a=!1!==i.sliderChange(n)&&a),"valueChange"===l&&(a=!1!==(i.value=n)&&a),"highValueChange"===l&&(a=!1!==(i.highValue=n)&&a),a}),m.b,m.a)),t["\u0275prd"](5120,null,b.m,(function(e){return[e]}),[v.b]),t["\u0275did"](3,4964352,null,1,v.b,[t.Renderer2,t.ElementRef,t.ChangeDetectorRef,t.NgZone],{value:[0,"value"],highValue:[1,"highValue"],options:[2,"options"]},{valueChange:"valueChange",highValueChange:"highValueChange",userChange:"userChange"}),t["\u0275qud"](335544320,6,{tooltipTemplate:0})],(function(e,l){var n=l.component;e(l,3,0,n.value,n.highValue,n.options)}),(function(e,l){e(l,1,0,t["\u0275nov"](l,3).sliderElementVerticalClass,t["\u0275nov"](l,3).sliderElementAnimateClass,t["\u0275nov"](l,3).sliderElementDisabledAttr)}))}function M(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,1,"app-ides-social-media",[],null,null,null,C.b,C.a)),t["\u0275did"](1,638976,null,0,S.a,[y.a],{imageBase64:[0,"imageBase64"]},null)],(function(e,l){e(l,1,0,l.component.imageBase64)}),null)}function T(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,25,"div",[["class","row"]],null,null,null,null,null)),(e()(),t["\u0275eld"](1,0,null,null,24,"div",[["class","col-lg-12 col-xl-12 ides-height-100"]],null,null,null,null,null)),(e()(),t["\u0275eld"](2,0,null,null,23,"div",[["class","row"]],null,null,null,null,null)),(e()(),t["\u0275eld"](3,0,null,null,2,"div",[["class","col-12 ides-text-blue"]],null,null,null,null,null)),(e()(),t["\u0275eld"](4,0,null,null,1,"h2",[["class","submenu-tematic "]],null,null,null,null,null)),(e()(),t["\u0275ted"](5,null,["",""])),(e()(),t["\u0275eld"](6,0,null,null,3,"div",[["class","col-md-12 d-none d-md-none d-lg-block"]],null,null,null,null,null)),(e()(),t["\u0275eld"](7,0,null,null,2,"div",[["class","ides-thematic-description"]],null,null,null,null,null)),(e()(),t["\u0275eld"](8,0,null,null,1,"p",[],null,null,null,null,null)),(e()(),t["\u0275ted"](9,null,["",""])),(e()(),t["\u0275and"](16777216,null,null,1,null,B)),t["\u0275did"](11,16384,null,0,s.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),t["\u0275eld"](12,0,null,null,5,"div",[["class","col-lg-12 col-lx-12 mb-4"]],null,null,null,null,null)),(e()(),t["\u0275eld"](13,0,null,null,2,"div",[["style","display: block;"]],null,null,null,null,null)),(e()(),t["\u0275and"](16777216,null,null,1,null,P)),t["\u0275did"](15,16384,null,0,s.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),t["\u0275and"](16777216,null,null,1,null,V)),t["\u0275did"](17,16384,null,0,s.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),t["\u0275eld"](18,0,null,null,3,"div",[["class","col-12 col-sm-12 col-md-12 col-lg-12"]],null,null,null,null,null)),(e()(),t["\u0275eld"](19,0,null,null,2,"div",[["class","col"],["style","width: 100%; float: left;"]],null,null,null,null,null)),(e()(),t["\u0275eld"](20,0,null,null,1,"app-ides-origin",[],null,null,null,x,w)),t["\u0275did"](21,114688,null,0,k,[],{origins:[0,"origins"]},null),(e()(),t["\u0275eld"](22,0,null,null,3,"div",[["class","col-12 col-sm-12 col-md-12 col-lg-12"]],null,null,null,null,null)),(e()(),t["\u0275eld"](23,0,null,null,2,"div",[["class","col"],["style","width: 100%; float: right;"]],null,null,null,null,null)),(e()(),t["\u0275and"](16777216,null,null,1,null,M)),t["\u0275did"](25,16384,null,0,s.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(e,l){var n=l.component;e(l,11,0,"stacked"===(null==n.variableSelected?null:n.variableSelected.chart_type.split(" ")[0])),e(l,15,0,!n.loading&&n.lineChartData.length>0),e(l,17,0,"stacked"!==n.variableSelected.chart_type.split(" ")[0]),e(l,21,0,null==n.variableSelected?null:n.variableSelected.origins),e(l,25,0,n.imageBase64)}),(function(e,l){var n=l.component;e(l,5,0,null==n.variableSelected?null:n.variableSelected.name),e(l,9,0,null==n.variableSelected?null:n.variableSelected.description)}))}function N(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,4,"div",[["class","col-12"]],null,null,null,null,null)),(e()(),t["\u0275eld"](1,0,null,null,3,"div",[["class","alert alert-warning mb-0"],["role","alert"]],null,null,null,null,null)),(e()(),t["\u0275eld"](2,0,null,null,2,"span",[["translate",""]],null,null,null,null,null)),t["\u0275did"](3,8536064,null,0,u.e,[u.k,t.ElementRef,t.ChangeDetectorRef],{translate:[0,"translate"]},null),(e()(),t["\u0275ted"](-1,null,["nothing"]))],(function(e,l){e(l,3,0,"")}),null)}function j(e){return t["\u0275vid"](0,[t["\u0275qud"](402653184,1,{chart:0}),(e()(),t["\u0275eld"](1,0,null,null,3,"div",[["class","row ides-ml-clasificaions cursor-pointer"]],null,null,null,null,null)),(e()(),t["\u0275and"](16777216,null,null,2,null,A)),t["\u0275did"](3,278528,null,0,s.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),t["\u0275pid"](131072,s.AsyncPipe,[t.ChangeDetectorRef]),(e()(),t["\u0275eld"](5,0,null,null,29,"div",[["class","anima-texto"],["id","test"]],null,null,null,null,null)),(e()(),t["\u0275eld"](6,0,null,null,28,"div",[["class","row mb-2 ides-ml-charts"]],null,null,null,null,null)),(e()(),t["\u0275eld"](7,0,null,null,27,"div",[["class","col-lg-12 col-xl-12"]],null,null,null,null,null)),(e()(),t["\u0275eld"](8,0,null,null,26,"div",[["class","ides-card p-5"]],null,null,null,null,null)),(e()(),t["\u0275eld"](9,0,null,null,22,"div",[["class","row pb-2 "]],null,null,null,null,null)),(e()(),t["\u0275eld"](10,0,null,null,8,"div",[["class","col-lg-3  col-lx-12 text-left form-group"]],null,null,null,null,null)),(e()(),t["\u0275eld"](11,0,null,null,7,"p-dropdown",[["class","block "],["name","variableSelected"],["optionLabel","name"]],[[2,"ui-inputwrapper-filled",null],[2,"ui-inputwrapper-focus",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"onChange"]],(function(e,l,n){var t=!0,a=e.component;return"ngModelChange"===l&&(t=!1!==(a.variableSelected=n)&&t),"onChange"===l&&(t=!1!==a.getVariableSelected()&&t),t}),D.b,D.a)),t["\u0275did"](12,13877248,null,1,I.a,[t.ElementRef,t.Renderer2,t.ChangeDetectorRef,t.NgZone],{filter:[0,"filter"],name:[1,"name"],placeholder:[2,"placeholder"],optionLabel:[3,"optionLabel"],options:[4,"options"]},{onChange:"onChange"}),t["\u0275qud"](603979776,2,{templates:1}),t["\u0275pid"](131072,s.AsyncPipe,[t.ChangeDetectorRef]),t["\u0275prd"](1024,null,b.m,(function(e){return[e]}),[I.a]),t["\u0275did"](16,671744,null,0,b.r,[[8,null],[8,null],[8,null],[6,b.m]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,b.n,null,[b.r]),t["\u0275did"](18,16384,null,0,b.o,[[4,b.n]],null,null),(e()(),t["\u0275eld"](19,0,null,null,9,"div",[["class","col-lg-3 col-lx-12 text-left form-group"]],null,null,null,null,null)),(e()(),t["\u0275eld"](20,0,null,null,8,"p-multiSelect",[["class","block"],["name","citiesSelected"],["optionLabel","name"],["selectedItemsLabel","{0} Ciudades Seleccionadas"]],[[2,"ui-inputwrapper-filled",null],[2,"ui-inputwrapper-focus",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"onChange"]],(function(e,l,n){var t=!0,a=e.component;return"ngModelChange"===l&&(t=!1!==(a.citiesSelected=n)&&t),"onChange"===l&&(t=!1!==a.getSelectCities()&&t),t}),O.b,O.a)),t["\u0275did"](21,13877248,null,3,_.a,[t.ElementRef,t.Renderer2,t.ChangeDetectorRef],{defaultLabel:[0,"defaultLabel"],name:[1,"name"],selectedItemsLabel:[2,"selectedItemsLabel"],optionLabel:[3,"optionLabel"],showHeader:[4,"showHeader"],options:[5,"options"]},{onChange:"onChange"}),t["\u0275qud"](335544320,3,{footerFacet:0}),t["\u0275qud"](335544320,4,{headerFacet:0}),t["\u0275qud"](603979776,5,{templates:1}),t["\u0275prd"](1024,null,b.m,(function(e){return[e]}),[_.a]),t["\u0275did"](26,671744,null,0,b.r,[[8,null],[8,null],[8,null],[6,b.m]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,b.n,null,[b.r]),t["\u0275did"](28,16384,null,0,b.o,[[4,b.n]],null,null),(e()(),t["\u0275eld"](29,0,null,null,2,"div",[["class","col-lg-6 col-lx-6 text-right"]],null,null,null,null,null)),(e()(),t["\u0275eld"](30,0,null,null,1,"app-ides-download",[],null,[[null,"downloadCSV"]],(function(e,l,n){var t=!0;return"downloadCSV"===l&&(t=!1!==e.component.onDownloadCSV(n)&&t),t}),L.b,L.a)),t["\u0275did"](31,638976,null,0,E.a,[R.b,y.a],{origins:[0,"origins"],idElement:[1,"idElement"],data:[2,"data"],titleExport:[3,"titleExport"],nameFile:[4,"nameFile"]},{downloadCSV:"downloadCSV"}),(e()(),t["\u0275and"](16777216,null,null,1,null,T)),t["\u0275did"](33,16384,null,0,s.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(e()(),t["\u0275and"](0,[["Nothing",2]],null,0,null,N))],(function(e,l){var n,a=l.component;e(l,3,0,t["\u0275unv"](l,3,0,t["\u0275nov"](l,4).transform(a.resultClasification$))),e(l,12,0,!0,"variableSelected","Seleccione","name",null==(n=t["\u0275unv"](l,12,4,t["\u0275nov"](l,14).transform(a.resultVariables$)))?null:n.data),e(l,16,0,"variableSelected",a.variableSelected),e(l,21,0,"Ciudades","citiesSelected","{0} Ciudades Seleccionadas","name",!0,a.cities),e(l,26,0,"citiesSelected",a.citiesSelected),e(l,31,0,null==a.variableSelected?null:a.variableSelected.origins,null==a.variableSelected?null:a.variableSelected._id,a.lineChartData,null==a.variableSelected?null:a.variableSelected.name,(null==a.variableSelected?null:a.variableSelected.name)+"_"+a.value+"_"+a.highValue+"_ideas_urbanas"),e(l,33,0,null==a.resultData?null:a.resultData.length,t["\u0275nov"](l,34))}),(function(e,l){e(l,11,0,t["\u0275nov"](l,12).filled,t["\u0275nov"](l,12).focused,t["\u0275nov"](l,18).ngClassUntouched,t["\u0275nov"](l,18).ngClassTouched,t["\u0275nov"](l,18).ngClassPristine,t["\u0275nov"](l,18).ngClassDirty,t["\u0275nov"](l,18).ngClassValid,t["\u0275nov"](l,18).ngClassInvalid,t["\u0275nov"](l,18).ngClassPending),e(l,20,0,t["\u0275nov"](l,21).filled,t["\u0275nov"](l,21).focus,t["\u0275nov"](l,28).ngClassUntouched,t["\u0275nov"](l,28).ngClassTouched,t["\u0275nov"](l,28).ngClassPristine,t["\u0275nov"](l,28).ngClassDirty,t["\u0275nov"](l,28).ngClassValid,t["\u0275nov"](l,28).ngClassInvalid,t["\u0275nov"](l,28).ngClassPending)}))}}}]);