(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{ODTc:function(e,l,t){"use strict";t.d(l,"a",(function(){return u}));var n=t("lJxs"),a=t("Ym+k"),i=t("5RHE");t("SjEX");let{formatLabel:s,capitalizeFirst:o}=t("O4L6"),{titleCase:r}=t("O4L6");var d=function(e){return e.lineal="line",e.bar="bar",e.stacked="bar",e.pie="pie",e}({});class u{constructor(e,l,t,n,i,s,o){this.clasificationService=e,this.variableService=l,this.dataService=t,this.regionService=n,this.chartService=i,this.utilsService=s,this.router=o,this.loading=!1,this.spinner1="spinner",this.value=20,this.highValue=40,this.options={ceil:100,floor:0},this.filters={page:0,limit:100,ascending:!0,sort:"name"},this.years=[],this.cities=[],this.citiesSelected=[],this.yearSelected="",this.downloadOptions=[{id:"pdf",name:"PDF",check:!1},{id:"csv",name:"CSV",check:!1},{id:"jpeg",name:"JPEG",check:!1},{id:"png",name:"PNG",check:!1}],this.lineChartData=[],this.lineChartLabels=[],this.lineChartOptions={responsive:!0,maintainAspectRatio:!1,legend:{onLeave(e,l){const t=l.datasetIndex,n=this.chart;n.data.datasets[t].borderWidth=sessionStorage.getItem("borderWidth"),n.data.datasets[t].pointBorderColor=n.data.datasets[t].hoverBorderColor,n.data.datasets[t].pointRadius=window.innerWidth<575?3:7,n.data.datasets[t].pointBackgroundColor="white",n.data.datasets[t].pointBorderWidth=1,n.data.datasets[t].backgroundColor=sessionStorage.getItem("backgroundColor"),n.update()},onHover(e,l){const t=l.datasetIndex,n=this.chart;sessionStorage.setItem("borderWidth",n.data.datasets[t].borderWidth),sessionStorage.setItem("backgroundColor",n.data.datasets[t].backgroundColor),n.data.datasets[t].borderWidth=n.data.datasets[t].hoverBorderWidth,n.data.datasets[t].borderColor=n.data.datasets[t].hoverBorderColor,n.data.datasets[t].pointBorderColor=n.data.datasets[t].pointHoverBorderColor,n.data.datasets[t].pointRadius=5,n.data.datasets[t].pointBackgroundColor=n.data.datasets[t].pointHoverBackgroundColor,n.data.datasets[t].pointBorderWidth=1,n.data.datasets[t].backgroundColor=n.data.datasets[t].hoverBackgroundColor,n.update()},onClick(e,l){const t=l.datasetIndex,n=this.chart,a=n.getDatasetMeta(t);let i=[];if(!sessionStorage.getItem("citiesHidden")||(i=JSON.parse(sessionStorage.getItem("citiesHidden")),n.data.datasets.length-1!==JSON.parse(sessionStorage.getItem("citiesHidden")).length||-1!==i.indexOf(l.text))){if(a.hidden=null===a.hidden?!n.data.datasets[t].hidden:null,a.hidden)i.push(l.text);else{const e=i.indexOf(l.text);i.splice(e,1)}sessionStorage.setItem("citiesHidden",JSON.stringify(i)),n.update()}},labels:{fontFamily:'"Noto Sans TC", sans-serif',fontSize:10,fontColor:"black"}},hover:{mode:"dataset"},tooltips:{bodyFontSize:14,titleFontSize:14,bodyFontFamily:'"Noto Sans TC", sans-serif',titleFontFamily:'"Noto Sans TC", sans-serif',backgroundColor:"white",bodyFontColor:"black",titleFontColor:"#076DCD",enabled:!1,bodySpacing:10,custom(e){const l=document.getElementById("chartjs-tooltip");l&&l.remove();let t=document.getElementById("chartjs-tooltip");if(t||(t=document.createElement("div"),t.id="chartjs-tooltip",t.innerHTML="<table></table>",this._chart.canvas.parentNode.appendChild(t)),0===e.opacity)return void(t.style.opacity="0");if(t.classList.remove("above","below","no-transform"),t.classList.add(e.yAlign?e.yAlign:"no-transform"),e.body){const l=e.afterBody,n=[sessionStorage.getItem("variableSelectedName")+" "+e.dataPoints[0].label],a=e.body.map((function(e){return e.lines})),i=" "+sessionStorage.getItem("variableSelectedMeasureSymbol");let s='<thead style="color: rgba(7, 109, 205, 1)">';n.forEach((function(e){s+="<tr><th>"+e+"</th></tr>"})),s+="</thead><tbody>",a.forEach((function(e,l){let t="background:"+sessionStorage.getItem(e[0].split(":")[0].toLocaleLowerCase());t+="; border-color:white",t+="; border-width: 2px",s+='<tr><td><span class="chartjs-tooltip-key" style="'+t+'"></span>'+e[0].split(":")[0]+"</td></tr>",s+='<tr><td style="color: #8F8F8F; font: Regular 16px/30px Noto Sans TC;"><span class="chartjs-tooltip-key1"></span>'+e[0].split(":")[1]+i+"</td></tr>"})),l.length>0&&(s+="<tr><td>"+l+"</td></tr>"),s+="</tbody>",t.querySelector("table").innerHTML=s}const n=this._chart.canvas.offsetTop,a=this._chart.canvas.offsetLeft;t.style.opacity="1",t.style.left=a+e.caretX+"px",t.style.top=n+e.caretY+"px",t.style.fontFamily=e._bodyFontFamily,t.style.fontSize=e.bodyFontSize+"px",t.style.fontStyle=e._bodyFontStyle,t.style.padding=e.yPadding+"px "+e.xPadding+"px"},callbacks:{title:(e,l)=>sessionStorage.getItem("variableSelectedName")+" "+e[0].xLabel.toString(),label(e,l){const t=l.datasets[e.datasetIndex].label||"";let n=e.yLabel.toString();return parseInt(n)>=1e3&&(n=n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")),t+": "+n},afterBody:(e,l)=>l.datasets[e[0].datasetIndex].data[e[0].index].x}},scales:{xAxes:[{scaleLabel:{display:!0,labelString:"A\xf1o",fontFamily:'"Noto Sans TC", sans-serif',fontSize:window.innerWidth<575?10:16},gridLines:{lineWidth:0}}],yAxes:[{id:"y-axis-0",position:"left",ticks:{beginAtZero:!0,callback:(e,l,t)=>Number(e)>=1e3?e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."):e},scaleLabel:{display:!0,labelString:"Cantidad",fontFamily:'"Noto Sans TC", sans-serif',fontSize:window.innerWidth<575?10:16}}]},annotation:{}},this.lineChartColors=[],this.lineChartLegend=!0,this.lineChartType="line",this.lineChartPlugins=[a],this.loadCity=!1}ngOnInit(){sessionStorage.clear(),this.loadCity=!0,this.getCities()}getCities(){this.regionService.listRegionsPublic({page:0,limit:1e3,ascending:!0,sort:"_id"},"Canton").subscribe(e=>{this.cities=[];const l=new Set;e.data.forEach(e=>{!l.has(e._id)&&e.active&&(this.cities.push({id:e._id,name:r(e.name),check:!0,color:e.color}),l.add(e._id))}),this.getClasifications()})}getClasifications(){let e,l=[];this.resultClasification$=this.clasificationService.listClasification(this.filters).pipe(Object(n.a)(t=>{this.clasificationSelected=t.data[1],this.getVariables(),e=t.data.filter(e=>"Corona Virus"!==e.name);for(const n of e)n.image_active_route=`assets/ICONOS/${n.name}.png`,n.image_route=`assets/ICONOS/${n.name}.png`,l.push(n);return l}))}getVariables(){this.resultVariables$=this.variableService.getVariablesByClasification(this.clasificationSelected._id).pipe(Object(n.a)(e=>(this.variableSelected=e.data[0],sessionStorage.setItem("variableSelectedName",this.variableSelected.name),sessionStorage.setItem("variableSelectedLabel",this.variableSelected.label),sessionStorage.setItem("variableSelectedMeasureSymbol",this.variableSelected.measure_symbol),this.getData(),e)))}getYearsAndCities(){this.years=[];const e=new Set;this.resultData.forEach(l=>{e.add(l.year)});const l=Array.from(e.values()).sort(),t=Object.assign({},this.options);t.floor=+l[0],t.ceil=+l[l.length-1],this.options=t,this.highValue=+l[0],this.value=+l[l.length-1];for(let n=this.highValue;n<=this.value;n++)this.yearSelected=n.toString(),this.years.push({id:n.toString(),name:n.toString(),check:!0})}getSelectCities(){this.loadData2()}getVariableSelected(){this.onSelectVariable(this.variableSelected)}loadData2(){this.lineChartData=[],this.lineChartLabels=[],this.lineChartLabels=this.years.filter(e=>!!e.check).map(e=>e.name),this.lineChartType===d.lineal||this.lineChartType===d.bar?"stacked"===this.variableSelected.chart_type.split(" ")[0]?(this.lineChartOptions.scales.xAxes[0].scaleLabel.labelString="Ciudades",this.lineChartOptions.scales.yAxes[0].scaleLabel.labelString=""==sessionStorage.getItem("variableSelectedLabel")?"Cantidad":sessionStorage.getItem("variableSelectedLabel"),this.lineChartOptions.scales.xAxes[0].stacked=!0,this.lineChartOptions.scales.yAxes[0].stacked=!0,this.lineChartOptions.hover={mode:"label"},this.lineChartLabels=[],this.lineChartColors=[{backgroundColor:"#004587"},{backgroundColor:"#076DCD"},{backgroundColor:"#FFDA20"},{backgroundColor:"#F8A901"},{backgroundColor:"#1BD4D4"},{backgroundColor:"#AAD6FF"},{backgroundColor:"#8F8F8F"},{backgroundColor:"#BFBFBF"},{backgroundColor:"#E3E3E3"}],Object.keys(this.resultData[0].value).forEach(e=>{this.lineChartData.push({label:o(e),data:Array(),stack:"a"})}),this.resultData.forEach(e=>{e.year.toString()===this.yearSelected&&this.citiesSelected.forEach(l=>{s(e.obj_Canton.name)===l.name&&(this.lineChartLabels.push(s(e.obj_Canton.name)),Object.keys(e.value).forEach((l,t)=>{this.lineChartData[t].data.push(e.value[l])}))})})):(this.lineChartOptions.scales.xAxes[0].stacked=!1,this.lineChartOptions.scales.yAxes[0].stacked=!1,this.lineChartOptions.scales.xAxes[0].scaleLabel.labelString="A\xf1o",this.lineChartOptions.scales.yAxes[0].scaleLabel.labelString=""==sessionStorage.getItem("variableSelectedLabel")?"Cantidad":sessionStorage.getItem("variableSelectedLabel"),this.lineChartOptions.hover={mode:"dataset"},this.citiesSelected.forEach((e,l)=>{const t=JSON.parse(sessionStorage.getItem("citiesHidden"));if(e.check){let l=e.color||"",n=this.getColorStrong(e.color)||"";this.lineChartColors.push({backgroundColor:l}),sessionStorage.setItem(e.name.toLowerCase(),l);let a=!1;t&&-1!==t.indexOf(e.name)&&(a=!0),this.lineChartData.push({label:s(e.name),data:Array(),fill:!1,borderColor:n,pointBorderColor:l,pointBackgroundColor:"white",pointRadius:2,borderWidth:2,pointHoverRadius:4,pointHoverBackgroundColor:n,pointHoverBorderWidth:1,hoverRadius:8,pointHoverBorderColor:"white",hoverBorderColor:n,hoverBorderWidth:4,hoverBackgroundColor:n,backgroundColor:l,hidden:a}),this.lineChartLabels.forEach(l=>{this.lineChartData[this.lineChartData.length-1].data.push(null),this.resultData.forEach(t=>{t.obj_Canton._id===e.id&&t.year.toString()===l&&(this.lineChartData[this.lineChartData.length-1].data[this.lineChartData[this.lineChartData.length-1].data.length-1]={x:t.description,y:t.value})})})}})):this.citiesSelected.forEach(e=>{e.check&&(this.lineChartData.push({label:s(e.name),data:[],fill:!1}),this.lineChartLabels.forEach(l=>{this.lineChartData[this.lineChartData.length-1].data.push(null),this.resultData.forEach(t=>{t.obj_Canton._id===e.id&&t.year.toString()===l&&(this.lineChartData[this.lineChartData.length-1].data[this.lineChartData[this.lineChartData.length-1].data.length-1]=t.value.electricidad)})}))}),setTimeout(()=>{this.chartService.imageBase24.then(e=>{this.imageBase64={name:"chart",data:e,type:"chart"}})},3e3)}loadData(){this.lineChartData=[],this.lineChartLabels=[],this.lineChartLabels=this.years.filter(e=>!!e.check).map(e=>e.name),this.lineChartType===d.lineal||this.lineChartType===d.bar?"stacked"===this.variableSelected.chart_type.split(" ")[0]?(this.lineChartOptions.scales.xAxes[0].scaleLabel.labelString="Ciudades",this.lineChartOptions.scales.yAxes[0].scaleLabel.labelString=""==sessionStorage.getItem("variableSelectedLabel")?"Cantidad":sessionStorage.getItem("variableSelectedLabel"),this.lineChartOptions.scales.xAxes[0].stacked=!0,this.lineChartOptions.scales.yAxes[0].stacked=!0,this.lineChartOptions.hover={mode:"label"},this.lineChartLabels=[],this.lineChartColors=[{backgroundColor:"#004587"},{backgroundColor:"#076DCD"},{backgroundColor:"#FFDA20"},{backgroundColor:"#F8A901"},{backgroundColor:"#1BD4D4"},{backgroundColor:"#AAD6FF"},{backgroundColor:"#8F8F8F"},{backgroundColor:"#BFBFBF"},{backgroundColor:"#E3E3E3"}],Object.keys(this.resultData[0].value).forEach(e=>{this.lineChartData.push({label:o(e),data:Array(),stack:"a"})}),this.resultData.forEach(e=>{e.year.toString()===this.yearSelected&&(this.lineChartLabels.push(s(e.obj_Canton.name)),Object.keys(e.value).forEach((l,t)=>{this.lineChartData[t].data.push(e.value[l])}))})):(this.lineChartOptions.scales.xAxes[0].stacked=!1,this.lineChartOptions.scales.yAxes[0].stacked=!1,this.lineChartOptions.scales.xAxes[0].scaleLabel.labelString="A\xf1o",this.lineChartOptions.scales.yAxes[0].scaleLabel.labelString=""==sessionStorage.getItem("variableSelectedLabel")?"Cantidad":sessionStorage.getItem("variableSelectedLabel"),this.lineChartOptions.hover={mode:"dataset"},this.cities.forEach((e,l)=>{const t=JSON.parse(sessionStorage.getItem("citiesHidden"));if(e.check){let l=e.color||"",n=this.getColorStrong(e.color)||"";this.lineChartColors.push({backgroundColor:l}),sessionStorage.setItem(e.name.toLowerCase(),l);let a=!1;t&&-1!==t.indexOf(e.name)&&(a=!0),this.lineChartData.push({label:s(e.name),data:Array(),fill:!1,borderColor:n,pointBorderColor:l,pointBackgroundColor:"white",pointRadius:2,borderWidth:2,pointHoverRadius:4,pointHoverBackgroundColor:n,pointHoverBorderWidth:1,hoverRadius:8,pointHoverBorderColor:"white",hoverBorderColor:n,hoverBorderWidth:4,hoverBackgroundColor:n,backgroundColor:l,hidden:a}),this.lineChartLabels.forEach(l=>{this.lineChartData[this.lineChartData.length-1].data.push(null),this.resultData.forEach(t=>{t.obj_Canton._id===e.id&&t.year.toString()===l&&(this.lineChartData[this.lineChartData.length-1].data[this.lineChartData[this.lineChartData.length-1].data.length-1]={x:t.description,y:t.value})})})}})):this.cities.forEach(e=>{e.check&&(this.lineChartData.push({label:s(e.name),data:[],fill:!1}),this.lineChartLabels.forEach(l=>{this.lineChartData[this.lineChartData.length-1].data.push(null),this.resultData.forEach(t=>{t.obj_Canton._id===e.id&&t.year.toString()===l&&(this.lineChartData[this.lineChartData.length-1].data[this.lineChartData[this.lineChartData.length-1].data.length-1]=t.value.electricidad)})}))})}getData(){this.loading=!0;let e=null;this.variableSelected&&(e=this.variableSelected._id,this.lineChartType=d[this.variableSelected.chart_type.split(" ")[0]]),this.subscription&&this.subscription.unsubscribe(),this.subscription=this.dataService.listDatasPublic({page:0,limit:2e3,ascending:!0,sort:"obj_Canton.name"},e).subscribe(e=>{this.loading=!1,this.resultData=e.data,this.getYearsAndCities(),0===this.citiesSelected.length&&(this.citiesSelected.push(this.cities[0]),this.loadData2()),this.loadData2()},e=>{this.loading=!1})}onSelectClasification(e){this.clasificationSelected=e,sessionStorage.removeItem("citiesHidden"),this.getVariables()}onSelectVariable(e){this.variableSelected=e,sessionStorage.setItem("variableSelectedName",this.variableSelected.name),sessionStorage.setItem("variableSelectedLabel",this.variableSelected.label),sessionStorage.setItem("variableSelectedMeasureSymbol",this.variableSelected.measure_symbol),sessionStorage.removeItem("citiesHidden"),this.getData()}onCheckItemCity(e){const l=this.citiesSelected.findIndex(l=>l.id===e);this.citiesSelected[l].check=!this.citiesSelected[l].check,this.loadData2()}onCheckItemYear(e){const l=this.years.findIndex(l=>l.id===e);this.years[l].check=!this.years[l].check,this.loadData2()}downloadCanvas(e,l){const t=e.target,n=document.getElementById(this.variableSelected._id),a=new i;switch(l){case"pdf":{const e=n.toDataURL();a.addImage(e,"JPEG",0,0),a.save("download.pdf");break}case"csv":break;case"png":{const e=n.toDataURL();t.href=e,t.download="download.png";break}default:{const e=n.toDataURL("image/jpeg");t.href=e,t.download="download.jpeg";break}}}sliderChange(e){for(let l=this.options.floor;l<=this.options.ceil;l++)if(l<e.value||l>e.highValue){const e=this.years.findIndex(e=>+e.id===l);this.years[e].check=!1}else{const e=this.years.findIndex(e=>+e.id===l);this.years[e].check=!0}this.loadData2()}onDownloadCSV(e){let l=null;this.variableSelected&&(l=this.variableSelected._id,this.lineChartType=d[this.variableSelected.chart_type.split(" ")[0]]),new Date,this.dataService.downloadCSV({page:0,limit:1e4,ascending:!0,sort:"obj_Canton.name"},l,this.citiesSelected,this.years).subscribe(l=>{const t=new Blob([l],{type:"text/csv"}),n=window.URL.createObjectURL(t);if(navigator.msSaveOrOpenBlob)navigator.msSaveBlob(t,e+".csv");else{const e=document.createElement("a");e.href=n,e.download="data-"+this.utilsService.getStringFromDateNow()+".csv",document.body.appendChild(e),e.click(),document.body.removeChild(e)}window.URL.revokeObjectURL(n)})}onCheckYear(e){this.yearSelected=e,this.loadData2()}ngOnDestroy(){sessionStorage.clear()}getColorStrong(e){return null!=e&&""!=e?e.replace(")",", 08)"):""}}},R7PI:function(e,l,t){"use strict";var n=t("8Y7J"),a=t("A8xo"),i=t("QvxX"),s=t("G8W4"),o=t("1tbR"),r=t("SVse"),d=t("TSSN");class u{constructor(){this.selectable=!0,this.checkItem=new n.EventEmitter}ngOnInit(){}onCheckItem(e){this.checkItem.emit(e)}}var c=n["\u0275crt"]({encapsulation:0,styles:[[".ides-mr-80[_ngcontent-%COMP%]{margin-right:80px}"]],data:{}});function h(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,2,"span",[["class","float-right"]],null,null,null,null,null)),(e()(),n["\u0275eld"](1,0,null,null,1,"i-feather",[["name","check"]],null,null,null,s.b,s.a)),n["\u0275did"](2,573440,null,0,o.a,[n.ElementRef,n.ChangeDetectorRef,o.c],{name:[0,"name"]},null)],(function(e,l){e(l,2,0,"check")}),null)}function g(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,3,"a",[["class","dropdown-item "]],null,[[null,"click"]],(function(e,l,t){var n=!0;return"click"===l&&(n=!1!==e.component.onCheckItem(e.context.$implicit.id)&&n),n}),null,null)),(e()(),n["\u0275ted"](1,null,[" "," "])),(e()(),n["\u0275and"](16777216,null,null,1,null,h)),n["\u0275did"](3,16384,null,0,r.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(e,l){e(l,3,0,l.context.$implicit.check&&l.component.selectable)}),(function(e,l){e(l,1,0,l.context.$implicit.name)}))}function p(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,7,"div",[["class","dropdown"]],null,null,null,null,null)),(e()(),n["\u0275eld"](1,0,null,null,3,"button",[["aria-expanded","false"],["aria-haspopup","true"],["class","btn ides-dropdown dropdown-toggle ides-text-blue"],["data-toggle","dropdown"],["id","dropdownMenuButton"],["type","button"]],null,null,null,null,null)),(e()(),n["\u0275eld"](2,0,null,null,2,"span",[["class","ides-mr-80 font-weight-bold"],["translate",""]],null,null,null,null,null)),n["\u0275did"](3,8536064,null,0,d.e,[d.k,n.ElementRef,n.ChangeDetectorRef],{translate:[0,"translate"]},null),(e()(),n["\u0275ted"](4,null,["",""])),(e()(),n["\u0275eld"](5,0,null,null,2,"div",[["aria-labelledby","dropdownMenuButton"],["class","dropdown-menu"]],null,null,null,null,null)),(e()(),n["\u0275and"](16777216,null,null,1,null,g)),n["\u0275did"](7,278528,null,0,r.NgForOf,[n.ViewContainerRef,n.TemplateRef,n.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(e,l){var t=l.component;e(l,3,0,""),e(l,7,0,t.items)}),(function(e,l){e(l,4,0,l.component.title)}))}var m=t("hrfs"),b=t("NgMZ"),C=t("s7LF"),f=t("mtxq"),v=t("FV9A"),S=t("48MR"),y=t("rD0E");class k{constructor(){}ngOnInit(){}getOrigins(){let e="";return this.origins&&this.origins.forEach((l,t)=>{0!==t&&(e+=", "),e+=l.name}),e}}var x=n["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function w(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,2,"div",[["class","row align-items-center pr-3 pl-3"]],null,null,null,null,null)),(e()(),n["\u0275eld"](1,0,null,null,1,"div",[["class","col-12 col-sm-12 col-md-12 col-lg-6 text-uppercase ides-text-blue ides-origins"]],null,null,null,null,null)),(e()(),n["\u0275ted"](2,null,[" "," "]))],null,(function(e,l){e(l,2,0,l.component.getOrigins())}))}var D=t("YCg4"),I=t("y1st"),O=t("hltz"),_=t("MEzG"),L=t("EE5B"),E=t("2+0p"),R=t("I5r7");t("ODTc"),t("ecYQ"),t("tWZD"),t("cplz"),t("CzLl"),t("OiFK"),t("iInd"),t.d(l,"a",(function(){return F})),t.d(l,"b",(function(){return j}));var F=n["\u0275crt"]({encapsulation:0,styles:[['.align-items-center[_ngcontent-%COMP%]{display:flex;align-items:bottom;justify-content:center}.ides-ml-clasificaions[_ngcontent-%COMP%]{margin-top:2rem!important;margin-left:9rem!important;margin-right:9rem!important}@media screen and (max-width:575px){.submenu-tematic[_ngcontent-%COMP%]{font:16px "Noto Sans TC"!important}.ides-ml-clasificaions[_ngcontent-%COMP%]{margin-left:5rem!important;margin-right:3rem!important}}@media screen and (min-width:576px){.submenu-tematic[_ngcontent-%COMP%]{font:22px "Noto Sans TC"!important}}.ides-thematic-description[_ngcontent-%COMP%]{font:13px "Noto Sans TC",sans-serif;font-weight:400}[_nghost-%COMP%]    .ui-multiselect{border-radius:14px;background:#fff;border-color:#064cc3;width:12rem}[_nghost-%COMP%] .ui-multiselect .ui-multiselect-trigger{border-radius:14px;background:#ffffff00;color:#064cc3}[_nghost-%COMP%] .ui-multiselect .ui-multiselect-label{color:#064cc3}[_nghost-%COMP%] .ui-multiselect .ui-multiselect-panel{background-color:#fff;border-radius:14px}[_nghost-%COMP%] .ui-multiselect .ui-multiselect-panel .ui-widget-header .ui-chkbox{display:none!important;background-color:red;color:red}[_nghost-%COMP%]    .ui-dropdown{border-radius:14px;background:#fff;border-color:#064cc3;width:12rem}[_nghost-%COMP%]    .ui-dropdown:hover{border-radius:14px;background:#fff;border-color:#064cc3;width:12rem}[_nghost-%COMP%]    .ui-dropdown-clearable{background-color:#064cc3;border-color:#064cc3;border-radius:15px}[_nghost-%COMP%]    .ui-dropdown-label{background-color:#ffffff00;border-color:#064cc3;color:#064cc3;width:10rem}[_nghost-%COMP%]    .ui-dropdown .ui-dropdown-trigger{background-color:#ffffff00;border-color:#064cc3;border-radius:15px;color:#064cc3}[_nghost-%COMP%]    .ui-dropdown .ui-dropdown-panel{background-color:#fff;border-radius:14px}@media (min-width:1280px){.ides-ml-clasificaions[_ngcontent-%COMP%]{margin-top:2rem!important;margin-left:6%!important;margin-right:5%!important;margin:0 auto}.ides-ml-charts[_ngcontent-%COMP%]{margin:1rem 2%!important}}@media (min-width:1024px){.ides-ml-charts[_ngcontent-%COMP%]{margin:1rem 2%!important}}@media (min-width:768px){.ides-ml-charts[_ngcontent-%COMP%]{margin:1rem 2%!important}}.row.mb-4.ides-ml-analyse_topics[_ngcontent-%COMP%]{max-width:1500px;min-width:300px;margin:0 auto}.ides-ml-charts[_ngcontent-%COMP%]{margin:1rem 1%!important}@media screen and (max-width:575px){.ides-ml-clasificaions[_ngcontent-%COMP%]{margin-left:4rem!important;display:block}}.anima-texto[_ngcontent-%COMP%]{-webkit-animation-name:anima-texto;animation-name:anima-texto;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes anima-texto{0%{transform:translateY(-100%);visibility:visible;opacity:0}100%{transform:translateY(0)}}@-webkit-keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible;opacity:100%}100%{transform:translateY(0)}}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible;opacity:100%}100%{transform:translateY(0)}}.ides-card1.text-center.ides-height-100.row.ides-card-clasification[_ngcontent-%COMP%]:active{background:#fbbb31;background:linear-gradient(78deg,#fbbb31 0,#f8ab06 100%);box-shadow:0 14px 14px -7px #9ba2a3b0;border-radius:15px;cursor:pointer;color:#fff;font-family:Arial;font-size:16px;padding:10px;min-width:200px;max-width:250px;text-decoration:none;text-shadow:0 0 0 #000}']],data:{}});function B(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,2,"div",[["class","col-6 col-sm-6 col-md-6 col-lg-6 col-xl mb-3 ides-mr-5"]],null,[[null,"click"]],(function(e,l,t){var n=!0;return"click"===l&&(n=!1!==e.component.onSelectClasification(e.context.$implicit)&&n),n}),null,null)),(e()(),n["\u0275eld"](1,0,null,null,1,"app-ides-card-clasification",[],null,null,null,a.b,a.a)),n["\u0275did"](2,114688,null,0,i.a,[],{clasification:[0,"clasification"],selected:[1,"selected"]},null)],(function(e,l){e(l,2,0,l.context.$implicit,l.context.$implicit._id===l.component.clasificationSelected._id)}),null)}function A(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,4,"div",[["class","col-12"]],null,null,null,null,null)),(e()(),n["\u0275eld"](1,0,null,null,3,"div",[["class","row mb-2"]],null,null,null,null,null)),(e()(),n["\u0275eld"](2,0,null,null,2,"div",[["class","ides-ml-charts"]],null,null,null,null,null)),(e()(),n["\u0275eld"](3,0,null,null,1,"app-ides-dropdown",[],null,[[null,"checkItem"]],(function(e,l,t){var n=!0;return"checkItem"===l&&(n=!1!==e.component.onCheckYear(t)&&n),n}),p,c)),n["\u0275did"](4,114688,null,0,u,[],{title:[0,"title"],items:[1,"items"],selectable:[2,"selectable"]},{checkItem:"checkItem"})],(function(e,l){var t=l.component;e(l,4,0,t.yearSelected,t.years,!1)}),null)}function V(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,3,"canvas",[["baseChart",""],["style","min-height: 180px;"],["width","3600"]],[[8,"id",0]],null,null,null,null)),n["\u0275prd"](512,null,r["\u0275NgClassImpl"],r["\u0275NgClassR2Impl"],[n.IterableDiffers,n.KeyValueDiffers,n.ElementRef,n.Renderer2]),n["\u0275did"](2,278528,null,0,r.NgClass,[r["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),n["\u0275did"](3,999424,[[1,4]],0,m.a,[n.ElementRef,m.c],{datasets:[0,"datasets"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"],colors:[4,"colors"],legend:[5,"legend"],plugins:[6,"plugins"]},null)],(function(e,l){var t=l.component;e(l,2,0,t.lineChartData.length>10?"chart-size-plus":"chart-size"),e(l,3,0,t.lineChartData,t.lineChartLabels,t.lineChartOptions,t.lineChartType,t.lineChartColors,t.lineChartLegend,t.lineChartPlugins)}),(function(e,l){var t=l.component;e(l,0,0,n["\u0275inlineInterpolate"](1,"",null==t.variableSelected?null:t.variableSelected._id,""))}))}function P(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,4,"div",[["class","col custom-slider"],["style","width: 100%; float: right;"]],null,null,null,null,null)),(e()(),n["\u0275eld"](1,0,null,null,3,"ng5-slider",[["class","ng5-slider"]],[[2,"vertical",null],[2,"animate",null],[1,"disabled",0]],[[null,"userChange"],[null,"valueChange"],[null,"highValueChange"],["window","resize"]],(function(e,l,t){var a=!0,i=e.component;return"window:resize"===l&&(a=!1!==n["\u0275nov"](e,3).onResize(t)&&a),"userChange"===l&&(a=!1!==i.sliderChange(t)&&a),"valueChange"===l&&(a=!1!==(i.value=t)&&a),"highValueChange"===l&&(a=!1!==(i.highValue=t)&&a),a}),b.b,b.a)),n["\u0275prd"](5120,null,C.m,(function(e){return[e]}),[f.b]),n["\u0275did"](3,4964352,null,1,f.b,[n.Renderer2,n.ElementRef,n.ChangeDetectorRef,n.NgZone],{value:[0,"value"],highValue:[1,"highValue"],options:[2,"options"]},{valueChange:"valueChange",highValueChange:"highValueChange",userChange:"userChange"}),n["\u0275qud"](335544320,6,{tooltipTemplate:0})],(function(e,l){var t=l.component;e(l,3,0,t.value,t.highValue,t.options)}),(function(e,l){e(l,1,0,n["\u0275nov"](l,3).sliderElementVerticalClass,n["\u0275nov"](l,3).sliderElementAnimateClass,n["\u0275nov"](l,3).sliderElementDisabledAttr)}))}function M(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,1,"app-ides-social-media",[],null,null,null,v.b,v.a)),n["\u0275did"](1,638976,null,0,S.a,[y.a],{imageBase64:[0,"imageBase64"]},null)],(function(e,l){e(l,1,0,l.component.imageBase64)}),null)}function N(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,25,"div",[["class","row"]],null,null,null,null,null)),(e()(),n["\u0275eld"](1,0,null,null,24,"div",[["class","col-lg-12 col-xl-12 ides-height-100"]],null,null,null,null,null)),(e()(),n["\u0275eld"](2,0,null,null,23,"div",[["class","row"]],null,null,null,null,null)),(e()(),n["\u0275eld"](3,0,null,null,2,"div",[["class","col-12 ides-text-blue"]],null,null,null,null,null)),(e()(),n["\u0275eld"](4,0,null,null,1,"h2",[["class","submenu-tematic "]],null,null,null,null,null)),(e()(),n["\u0275ted"](5,null,["",""])),(e()(),n["\u0275eld"](6,0,null,null,3,"div",[["class","col-md-12 d-none d-md-none d-lg-block"]],null,null,null,null,null)),(e()(),n["\u0275eld"](7,0,null,null,2,"div",[["class","ides-thematic-description"]],null,null,null,null,null)),(e()(),n["\u0275eld"](8,0,null,null,1,"p",[],null,null,null,null,null)),(e()(),n["\u0275ted"](9,null,["",""])),(e()(),n["\u0275and"](16777216,null,null,1,null,A)),n["\u0275did"](11,16384,null,0,r.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),n["\u0275eld"](12,0,null,null,5,"div",[["class","col-lg-12 col-lx-12 mb-4"]],null,null,null,null,null)),(e()(),n["\u0275eld"](13,0,null,null,2,"div",[["style","display: block;"]],null,null,null,null,null)),(e()(),n["\u0275and"](16777216,null,null,1,null,V)),n["\u0275did"](15,16384,null,0,r.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),n["\u0275and"](16777216,null,null,1,null,P)),n["\u0275did"](17,16384,null,0,r.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),n["\u0275eld"](18,0,null,null,3,"div",[["class","col-12 col-sm-12 col-md-12 col-lg-12"]],null,null,null,null,null)),(e()(),n["\u0275eld"](19,0,null,null,2,"div",[["class","col"],["style","width: 100%; float: left;"]],null,null,null,null,null)),(e()(),n["\u0275eld"](20,0,null,null,1,"app-ides-origin",[],null,null,null,w,x)),n["\u0275did"](21,114688,null,0,k,[],{origins:[0,"origins"]},null),(e()(),n["\u0275eld"](22,0,null,null,3,"div",[["class","col-12 col-sm-12 col-md-12 col-lg-12"]],null,null,null,null,null)),(e()(),n["\u0275eld"](23,0,null,null,2,"div",[["class","col"],["style","width: 100%; float: right;"]],null,null,null,null,null)),(e()(),n["\u0275and"](16777216,null,null,1,null,M)),n["\u0275did"](25,16384,null,0,r.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(e,l){var t=l.component;e(l,11,0,"stacked"===(null==t.variableSelected?null:t.variableSelected.chart_type.split(" ")[0])),e(l,15,0,!t.loading&&t.lineChartData.length>0),e(l,17,0,"stacked"!==t.variableSelected.chart_type.split(" ")[0]),e(l,21,0,null==t.variableSelected?null:t.variableSelected.origins),e(l,25,0,t.imageBase64)}),(function(e,l){var t=l.component;e(l,5,0,null==t.variableSelected?null:t.variableSelected.name),e(l,9,0,null==t.variableSelected?null:t.variableSelected.description)}))}function T(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,4,"div",[["class","col-12"]],null,null,null,null,null)),(e()(),n["\u0275eld"](1,0,null,null,3,"div",[["class","alert alert-warning mb-0"],["role","alert"]],null,null,null,null,null)),(e()(),n["\u0275eld"](2,0,null,null,2,"span",[["translate",""]],null,null,null,null,null)),n["\u0275did"](3,8536064,null,0,d.e,[d.k,n.ElementRef,n.ChangeDetectorRef],{translate:[0,"translate"]},null),(e()(),n["\u0275ted"](-1,null,["nothing"]))],(function(e,l){e(l,3,0,"")}),null)}function j(e){return n["\u0275vid"](0,[n["\u0275qud"](402653184,1,{chart:0}),(e()(),n["\u0275eld"](1,0,null,null,3,"div",[["class","row ides-ml-clasificaions cursor-pointer"]],null,null,null,null,null)),(e()(),n["\u0275and"](16777216,null,null,2,null,B)),n["\u0275did"](3,278528,null,0,r.NgForOf,[n.ViewContainerRef,n.TemplateRef,n.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),n["\u0275pid"](131072,r.AsyncPipe,[n.ChangeDetectorRef]),(e()(),n["\u0275eld"](5,0,null,null,29,"div",[["class","anima-texto"],["id","test"]],null,null,null,null,null)),(e()(),n["\u0275eld"](6,0,null,null,28,"div",[["class","row mb-2 ides-ml-charts"]],null,null,null,null,null)),(e()(),n["\u0275eld"](7,0,null,null,27,"div",[["class","col-lg-12 col-xl-12"]],null,null,null,null,null)),(e()(),n["\u0275eld"](8,0,null,null,26,"div",[["class","ides-card p-5"]],null,null,null,null,null)),(e()(),n["\u0275eld"](9,0,null,null,22,"div",[["class","row pb-2 "]],null,null,null,null,null)),(e()(),n["\u0275eld"](10,0,null,null,8,"div",[["class","col-lg-3  col-lx-12 text-left form-group"]],null,null,null,null,null)),(e()(),n["\u0275eld"](11,0,null,null,7,"p-dropdown",[["class","block "],["name","variableSelected"],["optionLabel","name"]],[[2,"ui-inputwrapper-filled",null],[2,"ui-inputwrapper-focus",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"onChange"]],(function(e,l,t){var n=!0,a=e.component;return"ngModelChange"===l&&(n=!1!==(a.variableSelected=t)&&n),"onChange"===l&&(n=!1!==a.getVariableSelected()&&n),n}),D.b,D.a)),n["\u0275did"](12,13877248,null,1,I.a,[n.ElementRef,n.Renderer2,n.ChangeDetectorRef,n.NgZone],{filter:[0,"filter"],name:[1,"name"],placeholder:[2,"placeholder"],optionLabel:[3,"optionLabel"],options:[4,"options"]},{onChange:"onChange"}),n["\u0275qud"](603979776,2,{templates:1}),n["\u0275pid"](131072,r.AsyncPipe,[n.ChangeDetectorRef]),n["\u0275prd"](1024,null,C.m,(function(e){return[e]}),[I.a]),n["\u0275did"](16,671744,null,0,C.r,[[8,null],[8,null],[8,null],[6,C.m]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),n["\u0275prd"](2048,null,C.n,null,[C.r]),n["\u0275did"](18,16384,null,0,C.o,[[4,C.n]],null,null),(e()(),n["\u0275eld"](19,0,null,null,9,"div",[["class","col-lg-3 col-lx-12 text-left form-group"]],null,null,null,null,null)),(e()(),n["\u0275eld"](20,0,null,null,8,"p-multiSelect",[["class","block"],["name","citiesSelected"],["optionLabel","name"],["selectedItemsLabel","{0} Ciudades Seleccionadas"]],[[2,"ui-inputwrapper-filled",null],[2,"ui-inputwrapper-focus",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"onChange"]],(function(e,l,t){var n=!0,a=e.component;return"ngModelChange"===l&&(n=!1!==(a.citiesSelected=t)&&n),"onChange"===l&&(n=!1!==a.getSelectCities()&&n),n}),O.b,O.a)),n["\u0275did"](21,13877248,null,3,_.a,[n.ElementRef,n.Renderer2,n.ChangeDetectorRef],{defaultLabel:[0,"defaultLabel"],name:[1,"name"],selectedItemsLabel:[2,"selectedItemsLabel"],optionLabel:[3,"optionLabel"],showHeader:[4,"showHeader"],options:[5,"options"]},{onChange:"onChange"}),n["\u0275qud"](335544320,3,{footerFacet:0}),n["\u0275qud"](335544320,4,{headerFacet:0}),n["\u0275qud"](603979776,5,{templates:1}),n["\u0275prd"](1024,null,C.m,(function(e){return[e]}),[_.a]),n["\u0275did"](26,671744,null,0,C.r,[[8,null],[8,null],[8,null],[6,C.m]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),n["\u0275prd"](2048,null,C.n,null,[C.r]),n["\u0275did"](28,16384,null,0,C.o,[[4,C.n]],null,null),(e()(),n["\u0275eld"](29,0,null,null,2,"div",[["class","col-lg-6 col-lx-6 text-right"]],null,null,null,null,null)),(e()(),n["\u0275eld"](30,0,null,null,1,"app-ides-download",[],null,[[null,"downloadCSV"]],(function(e,l,t){var n=!0;return"downloadCSV"===l&&(n=!1!==e.component.onDownloadCSV(t)&&n),n}),L.b,L.a)),n["\u0275did"](31,638976,null,0,E.a,[R.b,y.a],{origins:[0,"origins"],idElement:[1,"idElement"],data:[2,"data"],titleExport:[3,"titleExport"],nameFile:[4,"nameFile"]},{downloadCSV:"downloadCSV"}),(e()(),n["\u0275and"](16777216,null,null,1,null,N)),n["\u0275did"](33,16384,null,0,r.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(e()(),n["\u0275and"](0,[["Nothing",2]],null,0,null,T))],(function(e,l){var t,a=l.component;e(l,3,0,n["\u0275unv"](l,3,0,n["\u0275nov"](l,4).transform(a.resultClasification$))),e(l,12,0,!0,"variableSelected","Seleccione","name",null==(t=n["\u0275unv"](l,12,4,n["\u0275nov"](l,14).transform(a.resultVariables$)))?null:t.data),e(l,16,0,"variableSelected",a.variableSelected),e(l,21,0,"Ciudades","citiesSelected","{0} Ciudades Seleccionadas","name",!0,a.cities),e(l,26,0,"citiesSelected",a.citiesSelected),e(l,31,0,null==a.variableSelected?null:a.variableSelected.origins,null==a.variableSelected?null:a.variableSelected._id,a.lineChartData,null==a.variableSelected?null:a.variableSelected.name,(null==a.variableSelected?null:a.variableSelected.name)+"_"+a.value+"_"+a.highValue+"_ideas_urbanas"),e(l,33,0,null==a.resultData?null:a.resultData.length,n["\u0275nov"](l,34))}),(function(e,l){e(l,11,0,n["\u0275nov"](l,12).filled,n["\u0275nov"](l,12).focused,n["\u0275nov"](l,18).ngClassUntouched,n["\u0275nov"](l,18).ngClassTouched,n["\u0275nov"](l,18).ngClassPristine,n["\u0275nov"](l,18).ngClassDirty,n["\u0275nov"](l,18).ngClassValid,n["\u0275nov"](l,18).ngClassInvalid,n["\u0275nov"](l,18).ngClassPending),e(l,20,0,n["\u0275nov"](l,21).filled,n["\u0275nov"](l,21).focus,n["\u0275nov"](l,28).ngClassUntouched,n["\u0275nov"](l,28).ngClassTouched,n["\u0275nov"](l,28).ngClassPristine,n["\u0275nov"](l,28).ngClassDirty,n["\u0275nov"](l,28).ngClassValid,n["\u0275nov"](l,28).ngClassInvalid,n["\u0275nov"](l,28).ngClassPending)}))}}}]);