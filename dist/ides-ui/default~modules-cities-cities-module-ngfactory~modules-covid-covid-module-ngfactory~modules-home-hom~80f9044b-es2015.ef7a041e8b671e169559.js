(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{CzLl:function(l,e,t){"use strict";t.d(e,"a",(function(){return d}));var n=t("AytR"),i=t("IheW"),r=t("lJxs"),a=t("8Y7J"),s=t("OiFK"),o=function(l){return l.Province="provincia",l.Canton="canton",l.Parish="parroquia",l}({});const u={headers:new i.g({"Content-Type":"application/json"})};let d=(()=>{class l{constructor(l,e){this.httpClient=l,this.utilsService=e,this.serverUrl=n.a.serverUrl,this.urlProvince=n.a.province.base,this.urlCanton=n.a.canton.base,this.urlParish=n.a.parish.base}listRegionsPublic(l,e,t={}){const n=this.utilsService.buildFilters(l);return this.httpClient.get(this.serverUrl+"api/"+o[e]+n).pipe(Object(r.a)(l=>l.results))}listRegions(l,e,t={}){const n=this.utilsService.buildFilters(l);return this.httpClient.post(this.serverUrl+o[e]+"/filter/"+n,t).pipe(Object(r.a)(l=>l.results))}addRegion(l,e){return null===l.active&&(l.active=!1),this.httpClient.post(this.serverUrl+o[e],l,u)}editRegion(l,e,t){return this.httpClient.put(this.serverUrl+o[t]+"/"+e,l,u)}deleteRegion(l,e){return this.httpClient.delete(this.serverUrl+o[e]+"/"+l,u)}getRegion(l,e){return this.httpClient.get(this.serverUrl+"api/"+o[e]+"/"+l).pipe(Object(r.a)(l=>l.results.data))}}return l.ngInjectableDef=a["\u0275\u0275defineInjectable"]({factory:function(){return new l(a["\u0275\u0275inject"](i.c),a["\u0275\u0275inject"](s.a))},token:l,providedIn:"root"}),l})()},NgMZ:function(l,e,t){"use strict";t.d(e,"a",(function(){return a})),t.d(e,"b",(function(){return d}));var n=t("8Y7J"),i=t("mtxq"),r=t("SVse"),a=(t("s7LF"),n["\u0275crt"]({encapsulation:0,styles:[".ng5-slider{display:inline-block;position:relative;height:4px;width:100%;margin:35px 0 15px;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-touch-action:pan-y;touch-action:pan-y}  .ng5-slider.with-legend{margin-bottom:40px}  .ng5-slider[disabled]{cursor:not-allowed}  .ng5-slider[disabled] .ng5-slider-pointer{cursor:not-allowed;background-color:#d8e0f3}  .ng5-slider[disabled] .ng5-slider-draggable{cursor:not-allowed}  .ng5-slider[disabled] .ng5-slider-selection{background:#8b91a2}  .ng5-slider[disabled] .ng5-slider-tick{cursor:not-allowed}  .ng5-slider[disabled] .ng5-slider-tick.ng5-slider-selected{background:#8b91a2}  .ng5-slider .ng5-slider-span{white-space:nowrap;position:absolute;display:inline-block}  .ng5-slider .ng5-slider-base{width:100%;height:100%;padding:0}  .ng5-slider .ng5-slider-bar-wrapper{left:0;-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:-16px;padding-top:16px;width:100%;height:32px;z-index:1}  .ng5-slider .ng5-slider-draggable{cursor:move}  .ng5-slider .ng5-slider-bar{left:0;width:100%;height:4px;z-index:1;background:#d8e0f3;border-radius:2px}  .ng5-slider .ng5-slider-bar-wrapper.ng5-slider-transparent .ng5-slider-bar{background:0 0}  .ng5-slider .ng5-slider-bar-wrapper.ng5-slider-left-out-selection .ng5-slider-bar{background:#df002d}  .ng5-slider .ng5-slider-bar-wrapper.ng5-slider-right-out-selection .ng5-slider-bar{background:#03a688}  .ng5-slider .ng5-slider-selection{z-index:2;background:#0db9f0;border-radius:2px}  .ng5-slider .ng5-slider-pointer{cursor:pointer;width:32px;height:32px;top:-14px;background-color:#0db9f0;z-index:3;border-radius:16px}  .ng5-slider .ng5-slider-pointer:after{content:'';width:8px;height:8px;position:absolute;top:12px;left:12px;border-radius:4px;background:#fff}  .ng5-slider .ng5-slider-pointer:hover:after{background-color:#fff}  .ng5-slider .ng5-slider-pointer.ng5-slider-active{z-index:4}  .ng5-slider .ng5-slider-pointer.ng5-slider-active:after{background-color:#451aff}  .ng5-slider .ng5-slider-bubble{cursor:default;bottom:16px;padding:1px 3px;color:#55637d;font-size:16px}  .ng5-slider .ng5-slider-bubble.ng5-slider-limit{color:#55637d}  .ng5-slider .ng5-slider-ticks{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:0;position:absolute;left:0;top:-3px;margin:0;z-index:1;list-style:none}  .ng5-slider .ng5-slider-ticks-values-under .ng5-slider-tick-value{top:auto;bottom:-36px}  .ng5-slider .ng5-slider-tick{text-align:center;cursor:pointer;width:10px;height:10px;background:#d8e0f3;border-radius:50%;position:absolute;top:0;left:0;margin-left:11px}  .ng5-slider .ng5-slider-tick.ng5-slider-selected{background:#0db9f0}  .ng5-slider .ng5-slider-tick-value{position:absolute;top:-34px;-webkit-transform:translate(-50%,0);transform:translate(-50%,0)}  .ng5-slider .ng5-slider-tick-legend{position:absolute;top:24px;-webkit-transform:translate(-50%,0);transform:translate(-50%,0);max-width:50px;white-space:normal}  .ng5-slider.vertical{position:relative;width:4px;height:100%;margin:0 20px;padding:0;vertical-align:baseline;-ms-touch-action:pan-x;touch-action:pan-x}  .ng5-slider.vertical .ng5-slider-base{width:100%;height:100%;padding:0}  .ng5-slider.vertical .ng5-slider-bar-wrapper{top:auto;left:0;margin:0 0 0 -16px;padding:0 0 0 16px;height:100%;width:32px}  .ng5-slider.vertical .ng5-slider-bar{bottom:0;left:auto;width:4px;height:100%}  .ng5-slider.vertical .ng5-slider-pointer{left:-14px!important;top:auto;bottom:0}  .ng5-slider.vertical .ng5-slider-bubble{left:16px!important;bottom:0}  .ng5-slider.vertical .ng5-slider-ticks{height:100%;width:0;left:-3px;top:0;z-index:1}  .ng5-slider.vertical .ng5-slider-tick{vertical-align:middle;margin-left:auto;margin-top:11px}  .ng5-slider.vertical .ng5-slider-tick-value{left:24px;top:auto;-webkit-transform:translate(0,-28%);transform:translate(0,-28%)}  .ng5-slider.vertical .ng5-slider-tick-legend{top:auto;right:24px;-webkit-transform:translate(0,-28%);transform:translate(0,-28%);max-width:none;white-space:nowrap}  .ng5-slider.vertical .ng5-slider-ticks-values-under .ng5-slider-tick-value{bottom:auto;left:auto;right:24px}  .ng5-slider *{-webkit-transition:none;transition:none}  .ng5-slider.animate .ng5-slider-bar-wrapper{-webkit-transition:all linear .3s;transition:all linear .3s}  .ng5-slider.animate .ng5-slider-selection{-webkit-transition:background-color linear .3s;transition:background-color linear .3s}  .ng5-slider.animate .ng5-slider-pointer{-webkit-transition:all linear .3s;transition:all linear .3s}  .ng5-slider.animate .ng5-slider-bubble{-webkit-transition:all linear .3s;transition:all linear .3s}  .ng5-slider.animate .ng5-slider-bubble.ng5-slider-limit{-webkit-transition:opacity linear .3s;transition:opacity linear .3s}  .ng5-slider.animate .ng5-slider-bubble.ng5-slider-combined{-webkit-transition:opacity linear .3s;transition:opacity linear .3s}  .ng5-slider.animate .ng5-slider-tick{-webkit-transition:background-color linear .3s;transition:background-color linear .3s}"],data:{}}));function s(l){return n["\u0275vid"](0,[(l()(),n["\u0275eld"](0,0,null,null,1,"ng5-slider-tooltip-wrapper",[["class","ng5-slider-span ng5-slider-tick-value"]],null,null,null,b,c)),n["\u0275did"](1,49152,null,0,i.f,[],{template:[0,"template"],tooltip:[1,"tooltip"],placement:[2,"placement"],content:[3,"content"]},null)],(function(l,e){l(e,1,0,e.component.tooltipTemplate,e.parent.context.$implicit.valueTooltip,e.parent.context.$implicit.valueTooltipPlacement,e.parent.context.$implicit.value)}),null)}function o(l){return n["\u0275vid"](0,[(l()(),n["\u0275eld"](0,0,null,null,0,"span",[["class","ng5-slider-span ng5-slider-tick-legend"]],[[8,"innerHTML",1]],null,null,null,null))],null,(function(l,e){l(e,0,0,e.parent.context.$implicit.legend)}))}function u(l){return n["\u0275vid"](0,[(l()(),n["\u0275eld"](0,0,null,null,11,"span",[["class","ng5-slider-tick"]],null,null,null,null,null)),n["\u0275prd"](512,null,r["\u0275NgClassImpl"],r["\u0275NgClassR2Impl"],[n.IterableDiffers,n.KeyValueDiffers,n.ElementRef,n.Renderer2]),n["\u0275did"](2,278528,null,0,r.NgClass,[r["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),n["\u0275pod"](3,{"ng5-slider-selected":0}),n["\u0275prd"](512,null,r["\u0275NgStyleImpl"],r["\u0275NgStyleR2Impl"],[n.ElementRef,n.KeyValueDiffers,n.Renderer2]),n["\u0275did"](5,278528,null,0,r.NgStyle,[r["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),(l()(),n["\u0275eld"](6,0,null,null,1,"ng5-slider-tooltip-wrapper",[],null,null,null,b,c)),n["\u0275did"](7,49152,null,0,i.f,[],{template:[0,"template"],tooltip:[1,"tooltip"],placement:[2,"placement"]},null),(l()(),n["\u0275and"](16777216,null,null,1,null,s)),n["\u0275did"](9,16384,null,0,r.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),n["\u0275and"](16777216,null,null,1,null,o)),n["\u0275did"](11,16384,null,0,r.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,e){var t=e.component,n=l(e,3,0,e.context.$implicit.selected);l(e,2,0,"ng5-slider-tick",n),l(e,5,0,e.context.$implicit.style),l(e,7,0,t.tooltipTemplate,e.context.$implicit.tooltip,e.context.$implicit.tooltipPlacement),l(e,9,0,null!=e.context.$implicit.value),l(e,11,0,null!=e.context.$implicit.legend)}),null)}function d(l){return n["\u0275vid"](0,[n["\u0275qud"](402653184,1,{leftOuterSelectionBarElement:0}),n["\u0275qud"](402653184,2,{rightOuterSelectionBarElement:0}),n["\u0275qud"](402653184,3,{fullBarElement:0}),n["\u0275qud"](402653184,4,{selectionBarElement:0}),n["\u0275qud"](402653184,5,{minHandleElement:0}),n["\u0275qud"](402653184,6,{maxHandleElement:0}),n["\u0275qud"](402653184,7,{floorLabelElement:0}),n["\u0275qud"](402653184,8,{ceilLabelElement:0}),n["\u0275qud"](402653184,9,{minHandleLabelElement:0}),n["\u0275qud"](402653184,10,{maxHandleLabelElement:0}),n["\u0275qud"](402653184,11,{combinedLabelElement:0}),n["\u0275qud"](402653184,12,{ticksElement:0}),(l()(),n["\u0275eld"](12,0,[["leftOuterSelectionBar",1]],null,2,"span",[["class","ng5-slider-span ng5-slider-bar-wrapper ng5-slider-left-out-selection"],["ng5SliderElement",""]],[[4,"opacity",null],[4,"visibility",null],[4,"left",null],[4,"bottom",null],[4,"height",null],[4,"width",null]],null,null,null,null)),n["\u0275did"](13,16384,[[1,4]],0,i.c,[n.ElementRef,n.Renderer2],null,null),(l()(),n["\u0275eld"](14,0,null,null,0,"span",[["class","ng5-slider-span ng5-slider-bar"]],null,null,null,null,null)),(l()(),n["\u0275eld"](15,0,[["rightOuterSelectionBar",1]],null,2,"span",[["class","ng5-slider-span ng5-slider-bar-wrapper ng5-slider-right-out-selection"],["ng5SliderElement",""]],[[4,"opacity",null],[4,"visibility",null],[4,"left",null],[4,"bottom",null],[4,"height",null],[4,"width",null]],null,null,null,null)),n["\u0275did"](16,16384,[[2,4]],0,i.c,[n.ElementRef,n.Renderer2],null,null),(l()(),n["\u0275eld"](17,0,null,null,0,"span",[["class","ng5-slider-span ng5-slider-bar"]],null,null,null,null,null)),(l()(),n["\u0275eld"](18,0,[["fullBar",1]],null,2,"span",[["class","ng5-slider-span ng5-slider-bar-wrapper ng5-slider-full-bar"],["ng5SliderElement",""]],[[2,"ng5-slider-transparent",null],[4,"opacity",null],[4,"visibility",null],[4,"left",null],[4,"bottom",null],[4,"height",null],[4,"width",null]],null,null,null,null)),n["\u0275did"](19,16384,[[3,4]],0,i.c,[n.ElementRef,n.Renderer2],null,null),(l()(),n["\u0275eld"](20,0,null,null,0,"span",[["class","ng5-slider-span ng5-slider-bar"]],null,null,null,null,null)),(l()(),n["\u0275eld"](21,0,[["selectionBar",1]],null,4,"span",[["class","ng5-slider-span ng5-slider-bar-wrapper ng5-slider-selection-bar"],["ng5SliderElement",""]],[[2,"ng5-slider-draggable",null],[4,"opacity",null],[4,"visibility",null],[4,"left",null],[4,"bottom",null],[4,"height",null],[4,"width",null]],null,null,null,null)),n["\u0275did"](22,16384,[[4,4]],0,i.c,[n.ElementRef,n.Renderer2],null,null),(l()(),n["\u0275eld"](23,0,null,null,2,"span",[["class","ng5-slider-span ng5-slider-bar ng5-slider-selection"]],null,null,null,null,null)),n["\u0275prd"](512,null,r["\u0275NgStyleImpl"],r["\u0275NgStyleR2Impl"],[n.ElementRef,n.KeyValueDiffers,n.Renderer2]),n["\u0275did"](25,278528,null,0,r.NgStyle,[r["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),(l()(),n["\u0275eld"](26,0,[["minHandle",1]],null,3,"span",[["class","ng5-slider-span ng5-slider-pointer ng5-slider-pointer-min"],["ng5SliderHandle",""]],[[4,"opacity",null],[4,"visibility",null],[4,"left",null],[4,"bottom",null],[4,"height",null],[4,"width",null],[2,"ng5-slider-active",null],[1,"role",0],[1,"tabindex",0],[1,"aria-orientation",0],[1,"aria-label",0],[1,"aria-labelledby",0],[1,"aria-valuenow",0],[1,"aria-valuetext",0],[1,"aria-valuemin",0],[1,"aria-valuemax",0]],null,null,null,null)),n["\u0275prd"](512,null,r["\u0275NgStyleImpl"],r["\u0275NgStyleR2Impl"],[n.ElementRef,n.KeyValueDiffers,n.Renderer2]),n["\u0275did"](28,278528,null,0,r.NgStyle,[r["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),n["\u0275did"](29,16384,[[5,4]],0,i.d,[n.ElementRef,n.Renderer2],null,null),(l()(),n["\u0275eld"](30,0,[["maxHandle",1]],null,3,"span",[["class","ng5-slider-span ng5-slider-pointer ng5-slider-pointer-max"],["ng5SliderHandle",""]],[[4,"display",null],[4,"opacity",null],[4,"visibility",null],[4,"left",null],[4,"bottom",null],[4,"height",null],[4,"width",null],[2,"ng5-slider-active",null],[1,"role",0],[1,"tabindex",0],[1,"aria-orientation",0],[1,"aria-label",0],[1,"aria-labelledby",0],[1,"aria-valuenow",0],[1,"aria-valuetext",0],[1,"aria-valuemin",0],[1,"aria-valuemax",0]],null,null,null,null)),n["\u0275prd"](512,null,r["\u0275NgStyleImpl"],r["\u0275NgStyleR2Impl"],[n.ElementRef,n.KeyValueDiffers,n.Renderer2]),n["\u0275did"](32,278528,null,0,r.NgStyle,[r["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),n["\u0275did"](33,16384,[[6,4]],0,i.d,[n.ElementRef,n.Renderer2],null,null),(l()(),n["\u0275eld"](34,0,[["floorLabel",1]],null,1,"span",[["class","ng5-slider-span ng5-slider-bubble ng5-slider-limit ng5-slider-floor"],["ng5SliderLabel",""]],[[4,"opacity",null],[4,"visibility",null],[4,"left",null],[4,"bottom",null],[4,"height",null],[4,"width",null]],null,null,null,null)),n["\u0275did"](35,16384,[[7,4]],0,i.e,[n.ElementRef,n.Renderer2],null,null),(l()(),n["\u0275eld"](36,0,[["ceilLabel",1]],null,1,"span",[["class","ng5-slider-span ng5-slider-bubble ng5-slider-limit ng5-slider-ceil"],["ng5SliderLabel",""]],[[4,"opacity",null],[4,"visibility",null],[4,"left",null],[4,"bottom",null],[4,"height",null],[4,"width",null]],null,null,null,null)),n["\u0275did"](37,16384,[[8,4]],0,i.e,[n.ElementRef,n.Renderer2],null,null),(l()(),n["\u0275eld"](38,0,[["minHandleLabel",1]],null,1,"span",[["class","ng5-slider-span ng5-slider-bubble ng5-slider-model-value"],["ng5SliderLabel",""]],[[4,"opacity",null],[4,"visibility",null],[4,"left",null],[4,"bottom",null],[4,"height",null],[4,"width",null]],null,null,null,null)),n["\u0275did"](39,16384,[[9,4]],0,i.e,[n.ElementRef,n.Renderer2],null,null),(l()(),n["\u0275eld"](40,0,[["maxHandleLabel",1]],null,1,"span",[["class","ng5-slider-span ng5-slider-bubble ng5-slider-model-high"],["ng5SliderLabel",""]],[[4,"opacity",null],[4,"visibility",null],[4,"left",null],[4,"bottom",null],[4,"height",null],[4,"width",null]],null,null,null,null)),n["\u0275did"](41,16384,[[10,4]],0,i.e,[n.ElementRef,n.Renderer2],null,null),(l()(),n["\u0275eld"](42,0,[["combinedLabel",1]],null,1,"span",[["class","ng5-slider-span ng5-slider-bubble ng5-slider-combined"],["ng5SliderLabel",""]],[[4,"opacity",null],[4,"visibility",null],[4,"left",null],[4,"bottom",null],[4,"height",null],[4,"width",null]],null,null,null,null)),n["\u0275did"](43,16384,[[11,4]],0,i.e,[n.ElementRef,n.Renderer2],null,null),(l()(),n["\u0275eld"](44,0,[["ticksElement",1]],null,3,"span",[["class","ng5-slider-ticks"],["ng5SliderElement",""]],[[8,"hidden",0],[2,"ng5-slider-ticks-values-under",null],[4,"opacity",null],[4,"visibility",null],[4,"left",null],[4,"bottom",null],[4,"height",null],[4,"width",null]],null,null,null,null)),n["\u0275did"](45,16384,[[12,4]],0,i.c,[n.ElementRef,n.Renderer2],null,null),(l()(),n["\u0275and"](16777216,null,null,1,null,u)),n["\u0275did"](47,278528,null,0,r.NgForOf,[n.ViewContainerRef,n.TemplateRef,n.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(l,e){var t=e.component;l(e,25,0,t.barStyle),l(e,28,0,t.minPointerStyle),l(e,32,0,t.maxPointerStyle),l(e,47,0,t.ticks)}),(function(l,e){var t=e.component;l(e,12,0,n["\u0275nov"](e,13).opacity,n["\u0275nov"](e,13).visibility,n["\u0275nov"](e,13).left,n["\u0275nov"](e,13).bottom,n["\u0275nov"](e,13).height,n["\u0275nov"](e,13).width),l(e,15,0,n["\u0275nov"](e,16).opacity,n["\u0275nov"](e,16).visibility,n["\u0275nov"](e,16).left,n["\u0275nov"](e,16).bottom,n["\u0275nov"](e,16).height,n["\u0275nov"](e,16).width),l(e,18,0,t.fullBarTransparentClass,n["\u0275nov"](e,19).opacity,n["\u0275nov"](e,19).visibility,n["\u0275nov"](e,19).left,n["\u0275nov"](e,19).bottom,n["\u0275nov"](e,19).height,n["\u0275nov"](e,19).width),l(e,21,0,t.selectionBarDraggableClass,n["\u0275nov"](e,22).opacity,n["\u0275nov"](e,22).visibility,n["\u0275nov"](e,22).left,n["\u0275nov"](e,22).bottom,n["\u0275nov"](e,22).height,n["\u0275nov"](e,22).width),l(e,26,1,[n["\u0275nov"](e,29).opacity,n["\u0275nov"](e,29).visibility,n["\u0275nov"](e,29).left,n["\u0275nov"](e,29).bottom,n["\u0275nov"](e,29).height,n["\u0275nov"](e,29).width,n["\u0275nov"](e,29).active,n["\u0275nov"](e,29).role,n["\u0275nov"](e,29).tabindex,n["\u0275nov"](e,29).ariaOrientation,n["\u0275nov"](e,29).ariaLabel,n["\u0275nov"](e,29).ariaLabelledBy,n["\u0275nov"](e,29).ariaValueNow,n["\u0275nov"](e,29).ariaValueText,n["\u0275nov"](e,29).ariaValueMin,n["\u0275nov"](e,29).ariaValueMax]),l(e,30,1,[t.range?"inherit":"none",n["\u0275nov"](e,33).opacity,n["\u0275nov"](e,33).visibility,n["\u0275nov"](e,33).left,n["\u0275nov"](e,33).bottom,n["\u0275nov"](e,33).height,n["\u0275nov"](e,33).width,n["\u0275nov"](e,33).active,n["\u0275nov"](e,33).role,n["\u0275nov"](e,33).tabindex,n["\u0275nov"](e,33).ariaOrientation,n["\u0275nov"](e,33).ariaLabel,n["\u0275nov"](e,33).ariaLabelledBy,n["\u0275nov"](e,33).ariaValueNow,n["\u0275nov"](e,33).ariaValueText,n["\u0275nov"](e,33).ariaValueMin,n["\u0275nov"](e,33).ariaValueMax]),l(e,34,0,n["\u0275nov"](e,35).opacity,n["\u0275nov"](e,35).visibility,n["\u0275nov"](e,35).left,n["\u0275nov"](e,35).bottom,n["\u0275nov"](e,35).height,n["\u0275nov"](e,35).width),l(e,36,0,n["\u0275nov"](e,37).opacity,n["\u0275nov"](e,37).visibility,n["\u0275nov"](e,37).left,n["\u0275nov"](e,37).bottom,n["\u0275nov"](e,37).height,n["\u0275nov"](e,37).width),l(e,38,0,n["\u0275nov"](e,39).opacity,n["\u0275nov"](e,39).visibility,n["\u0275nov"](e,39).left,n["\u0275nov"](e,39).bottom,n["\u0275nov"](e,39).height,n["\u0275nov"](e,39).width),l(e,40,0,n["\u0275nov"](e,41).opacity,n["\u0275nov"](e,41).visibility,n["\u0275nov"](e,41).left,n["\u0275nov"](e,41).bottom,n["\u0275nov"](e,41).height,n["\u0275nov"](e,41).width),l(e,42,0,n["\u0275nov"](e,43).opacity,n["\u0275nov"](e,43).visibility,n["\u0275nov"](e,43).left,n["\u0275nov"](e,43).bottom,n["\u0275nov"](e,43).height,n["\u0275nov"](e,43).width),l(e,44,0,!t.showTicks,t.ticksUnderValuesClass,n["\u0275nov"](e,45).opacity,n["\u0275nov"](e,45).visibility,n["\u0275nov"](e,45).left,n["\u0275nov"](e,45).bottom,n["\u0275nov"](e,45).height,n["\u0275nov"](e,45).width)}))}var c=n["\u0275crt"]({encapsulation:0,styles:[".ng5-slider-inner-tooltip[_ngcontent-%COMP%]{height:100%}"],data:{}});function p(l){return n["\u0275vid"](0,[(l()(),n["\u0275and"](0,null,null,0))],null,null)}function g(l){return n["\u0275vid"](0,[(l()(),n["\u0275and"](0,null,null,0,null,p))],null,null)}function h(l){return n["\u0275vid"](0,[(l()(),n["\u0275eld"](0,0,null,null,3,null,null,null,null,null,null,null)),(l()(),n["\u0275and"](16777216,null,null,2,null,g)),n["\u0275did"](2,540672,null,0,r.NgTemplateOutlet,[n.ViewContainerRef],{ngTemplateOutletContext:[0,"ngTemplateOutletContext"],ngTemplateOutlet:[1,"ngTemplateOutlet"]},null),n["\u0275pod"](3,{tooltip:0,placement:1,content:2}),(l()(),n["\u0275and"](0,null,null,0))],(function(l,e){var t=e.component,n=l(e,3,0,t.tooltip,t.placement,t.content);l(e,2,0,n,t.template)}),null)}function v(l){return n["\u0275vid"](0,[(l()(),n["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),n["\u0275eld"](1,0,null,null,1,"div",[["class","ng5-slider-inner-tooltip"]],[[1,"title",0],[1,"data-tooltip-placement",0]],null,null,null,null)),(l()(),n["\u0275ted"](2,null,[" "," "]))],null,(function(l,e){var t=e.component;l(e,1,0,t.tooltip,t.placement),l(e,2,0,t.content)}))}function b(l){return n["\u0275vid"](0,[(l()(),n["\u0275and"](16777216,null,null,1,null,h)),n["\u0275did"](1,16384,null,0,r.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),n["\u0275and"](16777216,null,null,1,null,v)),n["\u0275did"](3,16384,null,0,r.NgIf,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,e){var t=e.component;l(e,1,0,t.template),l(e,3,0,!t.template)}),null)}},O4L6:function(l,e){function t(l){return l?l.charAt(0).toUpperCase()+l.substr(1).toLowerCase():""}l.exports={capitalizeFirst:t,formatLabel:function(l){let e=t(l);return e.length>11&&(e=e.substring(0,11)+"..."),e},tagCloud:function(l,e,t,n,i){l.forEach((function(l){l.size=+l.size})),l.sort((function(l,e){return e.size-l.size}));var r=e,a=t,s=n/(l[0].size||1)/2;d3.layout.cloud().size([r,a]).words(l).spiral("archimedean").rotate(0).font("Noto Sans TC").fontSize((function(l){return Math.max(20,Math.min(l.size*s,n))})).on("end",(function(){$("#svg-node").remove();var e=d3.select("#tag-cloud-wrapper").append("svg").attr({width:r,height:a,id:"svg-node"}).append("g").attr("transform","translate("+[r>>1,(a>>1)-10]+")scale(2)");e.selectAll("text").data(l).enter().append("text").style("font-family",(function(l){return l.font})).style("font-size",(function(l){return l.size+"px"})).style("fill",i).style({cursor:"pointer",opacity:1e-6}).attr("text-anchor","middle").attr("transform",(function(l){return"translate("+[l.x,l.y]+")rotate("+l.rotate+")"})).text((function(l){return l.text})).transition().duration(1e3).style("opacity",1),e.transition().delay(450).duration(750).attr("transform","translate("+[r>>1,10+(a>>1)]+")scale(1)")})).start()},titleCase:function(l){if(!l)return l;if("string"!=typeof l)throw"invalid argument";return l.toLowerCase().split(" ").map(l=>l.charAt(0).toUpperCase()+l.substring(1)).join(" ")}}},OiFK:function(l,e,t){"use strict";t.d(e,"a",(function(){return i}));var n=t("8Y7J");let i=(()=>{class l{constructor(){this.buttonVisible=!1}buildFilters(l){let e="";return Object.keys(l).forEach((t,n)=>{e+=0===n?"?":"&",e+=t+"="+l[t]}),e}getStringFromDateNow(){const l=new Date;return l.getFullYear()+"-"+(l.getMonth()+1)+"-"+l.getDate()+" "+l.getHours()+":"+l.getMinutes()+":"+l.getSeconds()}format(l){let e=(l=l.toString()).replace(/\./g,"");return isNaN(e)?l=l.value.replace(/[^\d\.]*/g,""):(e=e.toString().split("").reverse().join("").replace(/(?=\d*\.?)(\d{3})/g,"$1."),e=e.split("").reverse().join("").replace(/^[\.]/,""),l=e),parseFloat(l)}}return l.ngInjectableDef=n["\u0275\u0275defineInjectable"]({factory:function(){return new l},token:l,providedIn:"root"}),l})()},Wucu:function(l,e,t){"use strict";t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return r}));var n=t("8Y7J"),i=(t("hOhj"),t("IP0z"),t("/HVE"),n["\u0275crt"]({encapsulation:2,styles:["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:0}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:0}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}"],data:{}}));function r(l){return n["\u0275vid"](2,[n["\u0275qud"](402653184,1,{_contentWrapper:0}),(l()(),n["\u0275eld"](1,0,[[1,0],["contentWrapper",1]],null,1,"div",[["class","cdk-virtual-scroll-content-wrapper"]],null,null,null,null,null)),n["\u0275ncd"](null,0),(l()(),n["\u0275eld"](3,0,null,null,0,"div",[["class","cdk-virtual-scroll-spacer"]],[[4,"width",null],[4,"height",null]],null,null,null,null))],null,(function(l,e){var t=e.component;l(e,3,0,t._totalContentWidth,t._totalContentHeight)}))}},cplz:function(l,e,t){"use strict";t.d(e,"a",(function(){return u}));var n=t("AytR"),i=t("IheW"),r=t("lJxs"),a=t("8Y7J"),s=t("OiFK");const o={headers:new i.g({"Content-Type":"application/json"})};let u=(()=>{class l{constructor(l,e){this.httpClient=l,this.utilsService=e,this.serverUrl=n.a.serverUrl,this.urlData=n.a.data.base,this.urlDataIndexes=n.a.data.indexes}listDataIndexes(l,e){const t={cities:l,years:e};return e||(t.cities=[l]),this.httpClient.post(this.serverUrl+"api/"+this.urlDataIndexes,t).pipe(Object(r.a)(l=>l.results.data))}listYears(){return this.httpClient.get(this.serverUrl+"api/years",o).pipe(Object(r.a)(l=>l.results.data.years))}listDatasPublic(l,e,t){const n=this.utilsService.buildFilters(l),i={id_Variable:e,cities:null};return t&&(i.cities=t.filter(l=>!!l.check).map(l=>l.id)),this.httpClient.post(this.serverUrl+"api/"+this.urlData+n,i).pipe(Object(r.a)(l=>l.results))}listDatas(l,e,t,n){const i=this.utilsService.buildFilters(l),a={id_Variable:e,cities:null,search:n};return t&&(a.cities=t.filter(l=>!!l.check).map(l=>l.id)),this.httpClient.post(this.serverUrl+this.urlData+"/filter/"+i,a).pipe(Object(r.a)(l=>l.results))}listDatasCovid(l,e){const t=this.utilsService.buildFilters(l);return this.httpClient.post(this.serverUrl+"api/covid/"+t,{idVariable:e}).pipe(Object(r.a)(l=>l.results))}getData(){return this.httpClient.get(this.serverUrl+"getCSV/datos/diarios",o)}addData(l){return this.httpClient.post(this.serverUrl+this.urlData,l,o)}editData(l,e){return this.httpClient.put(this.serverUrl+this.urlData+"/"+e,l,o)}deleteData(l){return this.httpClient.delete(this.serverUrl+this.urlData+"/"+l,o)}downloadCSV(l,e,t,n){const a=this.utilsService.buildFilters(l),s={id_Variable:e,cities:null,years:null};return t&&(s.cities=t.filter(l=>!!l.check).map(l=>l.id)),n&&(s.years=n.filter(l=>!!l.check).map(l=>l.id)),new i.g,this.httpClient.post(this.serverUrl+"exportdata/"+a,s,{responseType:"arraybuffer"}).pipe(Object(r.a)(l=>l))}}return l.ngInjectableDef=a["\u0275\u0275defineInjectable"]({factory:function(){return new l(a["\u0275\u0275inject"](i.c),a["\u0275\u0275inject"](s.a))},token:l,providedIn:"root"}),l})()},ecYQ:function(l,e,t){"use strict";t.d(e,"a",(function(){return u}));var n=t("AytR"),i=t("IheW"),r=t("lJxs"),a=t("8Y7J"),s=t("OiFK");const o={headers:new i.g({"Content-Type":"application/json"})};let u=(()=>{class l{constructor(l,e){this.httpClient=l,this.utilsService=e,this.serverUrl=n.a.serverUrl,this.urlClasification=n.a.clasification.base}listClasification(l){const e=this.utilsService.buildFilters(l);return this.httpClient.get(this.serverUrl+"api/"+this.urlClasification+e).pipe(Object(r.a)(l=>(l.results.data.forEach(l=>{l.image_route=this.serverUrl+l.image_route.substr(2),l.image_active_route=this.serverUrl+l.image_active_route.substr(2)}),l.results)))}addClasification(l){const e=new FormData;return e.append("name",l.name),e.append("description",l.description),e.append("image",l.images.image,l.images.image.name),e.append("image_active",l.images.image_active,l.images.image_active.name),this.httpClient.post(this.serverUrl+this.urlClasification,e)}editClasification(l,e){const t=new FormData;return t.append("name",l.name),t.append("description",l.description),l.images.image&&l.images.image.name&&t.append("image",l.images.image,l.images.image.name),l.images.image_active&&l.images.image_active.name&&t.append("image_active",l.images.image_active,l.images.image_active.name),this.httpClient.put(this.serverUrl+this.urlClasification+"/"+e,t)}deleteClasification(l){return this.httpClient.delete(this.serverUrl+this.urlClasification+"/"+l,o)}}return l.ngInjectableDef=a["\u0275\u0275defineInjectable"]({factory:function(){return new l(a["\u0275\u0275inject"](i.c),a["\u0275\u0275inject"](s.a))},token:l,providedIn:"root"}),l})()},rD0E:function(l,e,t){"use strict";t.d(e,"a",(function(){return u}));var n=t("AytR"),i=t("IheW"),r=t("lJxs"),a=t("8Y7J"),s=t("OiFK");const o={headers:new i.g({"Content-Type":"application/json"})};let u=(()=>{class l{constructor(l,e){this.httpClient=l,this.utilsService=e,this.serverUrl=n.a.serverUrl,this.urlCharts=n.a.charts.base,this.urlYearsAvailableForVariable=n.a.charts.yearsAvailableForVariable}listCharts(){return this.httpClient.get(this.serverUrl+this.urlCharts).pipe(Object(r.a)(l=>l))}listYears(l){return this.httpClient.get(this.serverUrl+this.urlYearsAvailableForVariable+"/"+l).pipe(Object(r.a)(l=>l))}generateImage(l){return this.httpClient.post(this.serverUrl+this.urlCharts+"/image",l,o).pipe(Object(r.a)(l=>l))}shareImage(l){return this.httpClient.post(this.serverUrl+this.urlCharts+"/share",l,o).pipe(Object(r.a)(l=>this.serverUrl+this.urlCharts+"/share/"+l.img))}saveImageBase64(l){return this.httpClient.post(this.serverUrl+this.urlCharts+"/sharing",l,o).pipe(Object(r.a)(l=>l))}}return l.ngInjectableDef=a["\u0275\u0275defineInjectable"]({factory:function(){return new l(a["\u0275\u0275inject"](i.c),a["\u0275\u0275inject"](s.a))},token:l,providedIn:"root"}),l})()}}]);