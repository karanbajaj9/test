(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"4BR/":function(n,l,e){"use strict";e.d(l,"a",(function(){return u})),e.d(l,"b",(function(){return i}));var t=e("8Y7J"),u=(e("nsQ7"),e("mviv"),e("3+oq"),t["\u0275crt"]({encapsulation:2,styles:["\n        vg-controls {\n            position: absolute;\n            display: flex;\n            width: 100%;\n            height: 50px;\n            z-index: 300;\n            bottom: 0;\n            background-color: rgba(0, 0, 0, 0.5);\n            -webkit-transition: bottom 1s;\n            -khtml-transition: bottom 1s;\n            -moz-transition: bottom 1s;\n            -ms-transition: bottom 1s;\n            transition: bottom 1s;\n        }\n\n        vg-controls.hide {\n            bottom: -50px;\n        }\n    "],data:{}}));function i(n){return t["\u0275vid"](0,[t["\u0275ncd"](null,0)],null,null)}},"4YZL":function(n,l,e){"use strict";e.d(l,"a",(function(){return u})),e.d(l,"b",(function(){return i}));var t=e("8Y7J"),u=(e("e5x6"),e("mviv"),t["\u0275crt"]({encapsulation:2,styles:["\n        vg-mute {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n\n        vg-mute .icon {\n            pointer-events: none;\n        }\n    "],data:{}}));function i(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,0,"div",[["aria-label","mute button"],["class","icon"],["role","button"],["tabindex","0"]],[[2,"vg-icon-volume_up",null],[2,"vg-icon-volume_down",null],[2,"vg-icon-volume_mute",null],[2,"vg-icon-volume_off",null],[1,"aria-valuetext",0]],null,null,null,null))],null,(function(n,l){var e=l.component;n(l,0,0,e.getVolume()>=.75,e.getVolume()>=.25&&e.getVolume()<.75,e.getVolume()>0&&e.getVolume()<.25,0===e.getVolume(),e.ariaValue)}))}},"6WwY":function(n,l,e){"use strict";e.d(l,"a",(function(){return t}));class t{}},"A+Kj":function(n,l,e){"use strict";e.d(l,"a",(function(){return u})),e.d(l,"b",(function(){return i}));var t=e("8Y7J"),u=(e("dpti"),e("mviv"),t["\u0275crt"]({encapsulation:2,styles:["\n        vg-play-pause {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n\n        vg-play-pause .icon {\n            pointer-events: none;\n        }\n    "],data:{}}));function i(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,0,"div",[["class","icon"],["role","button"],["tabindex","0"]],[[2,"vg-icon-pause",null],[2,"vg-icon-play_arrow",null],[1,"aria-label",0],[1,"aria-valuetext",0]],null,null,null,null))],null,(function(n,l){var e=l.component;n(l,0,0,"playing"===e.getState(),"paused"===e.getState()||"ended"===e.getState(),"paused"===e.getState()?"play":"pause",e.ariaValue)}))}},ABvj:function(n,l,e){"use strict";e.d(l,"a",(function(){return i})),e.d(l,"b",(function(){return o}));var t=e("8Y7J"),u=e("SVse"),i=(e("GuVN"),e("mviv"),t["\u0275crt"]({encapsulation:2,styles:["\n        vg-volume {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 100px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n        vg-volume .volumeBar {\n            position: relative;\n            display: flex;\n            flex-grow: 1;\n            align-items: center;\n        }\n        vg-volume .volumeBackground {\n            display: flex;\n            flex-grow: 1;\n            height: 5px;\n            pointer-events: none;\n            background-color: #333;\n        }\n        vg-volume .volumeValue {\n            display: flex;\n            height: 5px;\n            pointer-events: none;\n            background-color: #FFF;\n            transition:all 0.2s ease-out;\n        }\n        vg-volume .volumeKnob {\n            position: absolute;\n            width: 15px; height: 15px;\n            left: 0; top: 50%;\n            transform: translateY(-50%);\n            border-radius: 15px;\n            pointer-events: none;\n            background-color: #FFF;\n            transition:all 0.2s ease-out;\n        }\n        vg-volume .volumeBackground.dragging .volumeValue,\n        vg-volume .volumeBackground.dragging .volumeKnob {\n            transition: none;\n        }\n    "],data:{}}));function o(n){return t["\u0275vid"](0,[t["\u0275qud"](402653184,1,{volumeBarRef:0}),(n()(),t["\u0275eld"](1,0,[[1,0],["volumeBar",1]],null,5,"div",[["aria-label","volume level"],["aria-level","polite"],["aria-orientation","horizontal"],["aria-valuemax","100"],["aria-valuemin","0"],["class","volumeBar"],["role","slider"],["tabindex","0"]],[[1,"aria-valuenow",0],[1,"aria-valuetext",0]],[[null,"click"],[null,"mousedown"]],(function(n,l,e){var t=!0,u=n.component;return"click"===l&&(t=!1!==u.onClick(e)&&t),"mousedown"===l&&(t=!1!==u.onMouseDown(e)&&t),t}),null,null)),(n()(),t["\u0275eld"](2,0,null,null,4,"div",[["class","volumeBackground"]],null,null,null,null,null)),t["\u0275did"](3,278528,null,0,u.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275pod"](4,{dragging:0}),(n()(),t["\u0275eld"](5,0,null,null,0,"div",[["class","volumeValue"]],[[4,"width",null]],null,null,null,null)),(n()(),t["\u0275eld"](6,0,null,null,0,"div",[["class","volumeKnob"]],[[4,"left",null]],null,null,null,null))],(function(n,l){var e=n(l,4,0,l.component.isDragging);n(l,3,0,"volumeBackground",e)}),(function(n,l){var e=l.component;n(l,1,0,e.ariaValue,e.ariaValue+"%"),n(l,5,0,85*e.getVolume()+"%"),n(l,6,0,85*e.getVolume()+"%")}))}},F8q2:function(n,l,e){"use strict";e.d(l,"a",(function(){return u})),e.d(l,"b",(function(){return i}));var t=e("8Y7J"),u=(e("nhFB"),e("mviv"),t["\u0275crt"]({encapsulation:2,styles:["\n        vg-buffering {\n            display: none;\n            z-index: 201;\n        }\n\n        vg-buffering.is-buffering {\n            display: block;\n        }\n        \n        .vg-buffering {\n            position: absolute;\n            display: block;\n            width: 100%;\n            height: 100%;\n        }\n\n        .vg-buffering .bufferingContainer {\n            width: 100%;\n            position: absolute;\n            cursor: pointer;\n            top: 50%;\n            margin-top: -50px;\n\n            zoom: 1;\n            filter: alpha(opacity=60);\n            opacity: 0.6;\n        }\n\n        \n        .vg-buffering .loadingSpinner {\n            background-color: rgba(0, 0, 0, 0);\n            border: 5px solid rgba(255, 255, 255, 1);\n            opacity: .9;\n            border-top: 5px solid rgba(0, 0, 0, 0);\n            border-left: 5px solid rgba(0, 0, 0, 0);\n            border-radius: 50px;\n            box-shadow: 0 0 35px #FFFFFF;\n            width: 50px;\n            height: 50px;\n            margin: 0 auto;\n            -moz-animation: spin .5s infinite linear;\n            -webkit-animation: spin .5s infinite linear;\n        }\n\n        .vg-buffering .loadingSpinner .stop {\n            -webkit-animation-play-state: paused;\n            -moz-animation-play-state: paused;\n        }\n\n        @-moz-keyframes spin {\n            0% {\n                -moz-transform: rotate(0deg);\n            }\n            100% {\n                -moz-transform: rotate(360deg);\n            }\n        }\n\n        @-moz-keyframes spinoff {\n            0% {\n                -moz-transform: rotate(0deg);\n            }\n            100% {\n                -moz-transform: rotate(-360deg);\n            }\n        }\n\n        @-webkit-keyframes spin {\n            0% {\n                -webkit-transform: rotate(0deg);\n            }\n            100% {\n                -webkit-transform: rotate(360deg);\n            }\n        }\n\n        @-webkit-keyframes spinoff {\n            0% {\n                -webkit-transform: rotate(0deg);\n            }\n            100% {\n                -webkit-transform: rotate(-360deg);\n            }\n        }\n    "],data:{}}));function i(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","vg-buffering"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"div",[["class","bufferingContainer"]],null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,0,"div",[["class","loadingSpinner"]],null,null,null,null,null))],null,null)}},S6U3:function(n,l,e){"use strict";e.d(l,"a",(function(){return t}));class t{constructor(n){this.chatService=n,this.isShow=!0,this.newMSg=[],this.showDiv=!0,this.showchat=!0,this.hidechat=!1,this.messageList=[];const l=localStorage.getItem("chatroom_id");console.log("room id from chat  ima your room id",l)}sendMessage(){this.roomName="ddbjb1bk",""!=this.msgs&&(this.chatService.sendMessage(this.msgs,this.uName,this.roomName),this.msgs="")}hidediv(){this.showDiv=!1,this.showchat=!1,this.hidechat=!0}show(){this.showDiv=!0,this.hidechat=!1,this.showchat=!0}ngOnInit(){this.getUser(),this.chatService.getMessages().subscribe(n=>{console.log("check data",n),this.messageList.push(n),console.log(this.messageList)})}getUser(){let n=JSON.parse(localStorage.getItem("logindata"));this.uName=n.name,this.roomName="ddbjb1bk",this.chatService.addUser(this.uName,this.roomName)}}},SgHl:function(n,l,e){"use strict";e.d(l,"a",(function(){return o})),e.d(l,"b",(function(){return s}));var t=e("8Y7J"),u=e("Tyes"),i=e("SVse"),o=(e("mviv"),t["\u0275crt"]({encapsulation:2,styles:["\n        vg-time-display {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 60px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n            pointer-events: none;\n            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n        }\n    "],data:{}}));function a(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["LIVE"]))],null,null)}function r(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,["",""])),t["\u0275ppd"](2,2)],null,(function(n,l){var e=l.component,u=t["\u0275unv"](l,1,0,n(l,2,0,t["\u0275nov"](l.parent,0),e.getTime(),e.vgFormat));n(l,1,0,u)}))}function s(n){return t["\u0275vid"](0,[t["\u0275pid"](0,u.VgUtcPipe,[]),(n()(),t["\u0275and"](16777216,null,null,1,null,a)),t["\u0275did"](2,16384,null,0,i.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,r)),t["\u0275did"](4,16384,null,0,i.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),t["\u0275ncd"](null,0)],(function(n,l){var e=l.component;n(l,2,0,null==e.target?null:e.target.isLive),n(l,4,0,!(null!=e.target&&e.target.isLive))}),null)}},enzq:function(n,l,e){"use strict";e.d(l,"a",(function(){return o})),e.d(l,"b",(function(){return v}));var t=e("8Y7J"),u=e("SVse"),i=e("s7LF"),o=(e("S6U3"),e("sjK5"),t["\u0275crt"]({encapsulation:0,styles:[["#image_profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{float:left;border-radius:50%}#image_profile[_ngcontent-%COMP%]   #profile_detail[_ngcontent-%COMP%]{padding:5px;margin-left:55px}#image_profile[_ngcontent-%COMP%]   #profile_detail[_ngcontent-%COMP%]   #profile_name[_ngcontent-%COMP%]{font-weight:600}.profileImage[_ngcontent-%COMP%]{background:#5f9ea0;float:right}.profileImage[_ngcontent-%COMP%], .profileImage1[_ngcontent-%COMP%]{width:36px;height:36px;border-radius:50%;font-size:14px;color:#fff;text-align:center;font-weight:700;padding:10px}.profileImage1[_ngcontent-%COMP%]{background:#28a745;float:left}.bord[_ngcontent-%COMP%]:nth-child(2n){border-left:5px solid #5f9ea0}.bord[_ngcontent-%COMP%]:nth-child(odd){border-left:5px solid #000}#profile_details[_ngcontent-%COMP%]{padding:0;margin-left:115px}#profile_details[_ngcontent-%COMP%]   #profile_name[_ngcontent-%COMP%]{font-weight:600}#profile_detail1[_ngcontent-%COMP%]{padding:5px;margin-left:55px}#profile_detail1[_ngcontent-%COMP%]   #profile_name[_ngcontent-%COMP%]{font-weight:600}#search_tab[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{padding-left:25px}#search_tab[_ngcontent-%COMP%]{position:relative}#search_tab[_ngcontent-%COMP%]   .fa-paper-plane[_ngcontent-%COMP%]{position:absolute;color:#fff;vertical-align:center;top:1px;right:1px;font-size:20px;background-color:#da251c;width:37px;height:33px}"]],data:{}}));function a(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,0,"i",[["class","fa fa-arrow-down float-right"],["title","Minimize Chat"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.hidediv()&&t),t}),null,null))],null,null)}function r(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,0,"i",[["class","fa fa-arrow-up float-right"],["title","Maximize Chat"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.show()&&t),t}),null,null))],null,null)}function s(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"span",[["class","profileImage card-body"]],[[8,"title",0]],null,null,null,null)),(n()(),t["\u0275ted"](1,null,["",""])),t["\u0275pid"](0,u.SlicePipe,[])],null,(function(n,l){n(l,0,0,t["\u0275inlineInterpolate"](1,"",l.parent.context.$implicit[1],"")),n(l,1,0,t["\u0275unv"](l,1,0,t["\u0275nov"](l,2).transform(l.parent.context.$implicit[1],0,1)))}))}function c(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"span",[["class","profileImage1 card-body"]],[[8,"title",0]],null,null,null,null)),(n()(),t["\u0275ted"](1,null,["",""])),t["\u0275pid"](0,u.SlicePipe,[])],null,(function(n,l){n(l,0,0,t["\u0275inlineInterpolate"](1,"",l.parent.context.$implicit[1],"")),n(l,1,0,t["\u0275unv"](l,1,0,t["\u0275nov"](l,2).transform(l.parent.context.$implicit[1],0,1)))}))}function d(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"div",[["id","profile_details"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),t["\u0275ted"](2,null,["",""]))],null,(function(n,l){n(l,2,0,l.parent.context.$implicit[0])}))}function g(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"div",[["id","profile_detail1"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),t["\u0275ted"](2,null,["",""]))],null,(function(n,l){n(l,2,0,l.parent.context.$implicit[0])}))}function f(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,9,"div",[["class","card p-2"],["style","border-left: 5px solid cadetblue; margin-bottom: 5px"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,8,"div",[["class","card-body"],["id","image_profile"],["style","padding: 1px 12px;\n            "]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,s)),t["\u0275did"](3,16384,null,0,u.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,c)),t["\u0275did"](5,16384,null,0,u.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,d)),t["\u0275did"](7,16384,null,0,u.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,g)),t["\u0275did"](9,16384,null,0,u.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,3,0,e.uName===l.context.$implicit[1]),n(l,5,0,e.uName!=l.context.$implicit[1]),n(l,7,0,e.uName===l.context.$implicit[1]),n(l,9,0,e.uName!=l.context.$implicit[1])}),null)}function p(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,16,"div",[["class","row"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,15,"div",[["class","col-md-12 col-xl-12 col-sm-12"]],null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,2,"div",[["style","max-height: 200px;  min-height: 200px; overflow:auto"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,f)),t["\u0275did"](4,278528,null,0,u.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275eld"](5,0,null,null,11,"div",[["class","pt-3 pb-3 pl-1 pr-1"]],null,null,null,null,null)),(n()(),t["\u0275eld"](6,0,null,null,7,"input",[["class","form-control"],["maxlength","60"],["placeholder","Write something here.."]],[[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,e){var u=!0,i=n.component;return"input"===l&&(u=!1!==t["\u0275nov"](n,7)._handleInput(e.target.value)&&u),"blur"===l&&(u=!1!==t["\u0275nov"](n,7).onTouched()&&u),"compositionstart"===l&&(u=!1!==t["\u0275nov"](n,7)._compositionStart()&&u),"compositionend"===l&&(u=!1!==t["\u0275nov"](n,7)._compositionEnd(e.target.value)&&u),"ngModelChange"===l&&(u=!1!==(i.msgs=e)&&u),"keyup"===l&&(u=!1!==(13==e.keyCode&&i.sendMessage())&&u),u}),null,null)),t["\u0275did"](7,16384,null,0,i.d,[t.Renderer2,t.ElementRef,[2,i.a]],null,null),t["\u0275did"](8,540672,null,0,i.k,[],{maxlength:[0,"maxlength"]},null),t["\u0275prd"](1024,null,i.l,(function(n){return[n]}),[i.k]),t["\u0275prd"](1024,null,i.m,(function(n){return[n]}),[i.d]),t["\u0275did"](11,671744,null,0,i.r,[[8,null],[6,i.l],[8,null],[6,i.m]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,i.n,null,[i.r]),t["\u0275did"](13,16384,null,0,i.o,[[4,i.n]],null,null),(n()(),t["\u0275eld"](14,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t["\u0275eld"](15,0,null,null,1,"button",[["class","btn btn-danger"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.sendMessage()&&t),t}),null,null)),(n()(),t["\u0275ted"](-1,null,["Send"]))],(function(n,l){var e=l.component;n(l,4,0,e.messageList),n(l,8,0,"60"),n(l,11,0,e.msgs)}),(function(n,l){n(l,6,0,t["\u0275nov"](l,8).maxlength?t["\u0275nov"](l,8).maxlength:null,t["\u0275nov"](l,13).ngClassUntouched,t["\u0275nov"](l,13).ngClassTouched,t["\u0275nov"](l,13).ngClassPristine,t["\u0275nov"](l,13).ngClassDirty,t["\u0275nov"](l,13).ngClassValid,t["\u0275nov"](l,13).ngClassInvalid,t["\u0275nov"](l,13).ngClassPending)}))}function m(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,8,"div",[["class","card"],["id","chatSection"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,5,"div",[["class","p-3"],["style","font-weight: 500; background-color: #da251c; color: white;"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Chat Room "])),(n()(),t["\u0275and"](16777216,null,null,1,null,a)),t["\u0275did"](4,16384,null,0,u.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,r)),t["\u0275did"](6,16384,null,0,u.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,p)),t["\u0275did"](8,16384,null,0,u.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,4,0,e.showchat),n(l,6,0,e.hidechat),n(l,8,0,e.showDiv)}),null)}function v(n){return t["\u0275vid"](0,[(n()(),t["\u0275and"](16777216,null,null,1,null,m)),t["\u0275did"](1,16384,null,0,u.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,1,0,l.component.isShow)}),null)}},rT1L:function(n,l,e){"use strict";e.d(l,"a",(function(){return u})),e.d(l,"b",(function(){return i}));var t=e("8Y7J"),u=(e("mLQn"),e("mviv"),t["\u0275crt"]({encapsulation:2,styles:["\n        vg-playback-button {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n        }\n\n        vg-playback-button .button {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 50px;\n        }\n    "],data:{}}));function i(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"span",[["aria-label","playback speed button"],["class","button"],["role","button"],["tabindex","0"]],[[1,"aria-valuetext",0]],null,null,null,null)),(n()(),t["\u0275ted"](1,null,[" ","x "]))],null,(function(n,l){var e=l.component;n(l,0,0,e.ariaValue),n(l,1,0,e.getPlaybackRate())}))}},tHRT:function(n,l,e){"use strict";e.d(l,"a",(function(){return u})),e.d(l,"b",(function(){return i}));var t=e("8Y7J"),u=(e("p2KA"),e("mviv"),e("nWGD"),t["\u0275crt"]({encapsulation:2,styles:["\n        vg-fullscreen {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n\n        vg-fullscreen .icon {\n            pointer-events: none;\n        }\n    "],data:{}}));function i(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,0,"div",[["aria-label","fullscreen button"],["class","icon"],["role","button"],["tabindex","0"]],[[2,"vg-icon-fullscreen",null],[2,"vg-icon-fullscreen_exit",null],[1,"aria-valuetext",0]],null,null,null,null))],null,(function(n,l){var e=l.component;n(l,0,0,!e.isFullscreen,e.isFullscreen,e.ariaValue)}))}}}]);