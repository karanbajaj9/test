function _defineProperties(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{hMR4:function(e,t,n){"use strict";n.r(t),n.d(t,"SpeakerViewModuleNgFactory",(function(){return L}));var s=n("8Y7J"),i=function e(){_classCallCheck(this,e)},o=n("pMnS"),a=n("BdQk"),l=n("k5h5"),r=n("1EJS"),c=n("tZre"),u=n("mTci"),g=n("iInd"),d=n("sjK5"),p=n("s7LF"),h=function(){function e(t,n,s,i,o){var a=this;_classCallCheck(this,e),this._fd=t,this.route=n,this.msgService=s,this.dataservice=i,this.chatService=o,this.participantsList=[],this.noBlankList=[],this.chatlist=[],this.pollList=[],this.showPoll=!0,this.showMsg=!1,this.pollpercent=[],this.roleData=[],this.show=!1,this.approvedTweets=[],this.norecords="No Records Found",this.sessions=[],this.speakers=[],this.message={},this.pollForm=new p.h({polling:new p.f("")}),this.user_id=JSON.parse(localStorage.getItem("user_id")),this.speaker_id=JSON.parse(localStorage.getItem("speaker_id")),this.dataservice.currentUser.subscribe((function(e){a.speakers=e.speakers,a.sessionToken=e.session_token}))}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.getDashboardData(),this.getSessionParticipants(),this.chatService.checkPolllist(localStorage.getItem("session_token")),this.route.queryParams.subscribe((function(t){e.chatService.checksessionchat(t.session_id,!0)})),this.route.queryParams.subscribe((function(t){e.chatService.checksessionParticipants(t.session_id)})),this.route.queryParams.subscribe((function(t){e.chatService.checktwitters(t.session_id,1)}));var t=JSON.parse(localStorage.getItem("logindata")).event_id;this._fd.getLoggedinUsersList(t).subscribe((function(t){e.participantsList=t.result})),this.chatService.getChatlist().subscribe((function(t){var n=JSON.parse(t);e.chatlist=n})),this.chatService.getPollList(localStorage.getItem("session_token")).subscribe((function(e){console.log("polls",e),console.log("data",e[0]),setTimeout((function(){}),100)})),this.chatService.getTweetslist().subscribe((function(t){var n=JSON.parse(t);console.log("tweets",n.result),e.approvedTweets=n.result}))}},{key:"getspeakerChat",value:function(){var e=this;this.route.queryParams.subscribe((function(t){e._fd.getAudienceAndSponsorChat(t.session_id).subscribe((function(t){e.chatlist=t}))}))}},{key:"getDashboardData",value:function(){var e=localStorage.getItem("token");localStorage.removeItem("sessionData"),this._fd.getDashboardData(e).subscribe((function(e){localStorage.setItem("sessionData",JSON.stringify(e.result)),localStorage.setItem("loadData",JSON.stringify(e.result))}))}},{key:"getPolls",value:function(e){console.log("voteval",this.pollForm.value),this.roleData=JSON.parse(localStorage.getItem("logindata")),console.log(this.roleData);var t=localStorage.getItem("session_token");this.chatService.pushVote(e,t,this.pollForm.value.polling,this.roleData.email,this.roleData.name),this.show=!0}},{key:"getValue",value:function(e,t){var n=localStorage.getItem("session_token");this.roleData=JSON.parse(localStorage.getItem("logindata")),this.chatService.pushVote(t,n,e,this.roleData.email,this.roleData.name),this.show=!0}},{key:"sendMessage",value:function(){var e=this,t=JSON.parse(localStorage.getItem("logindata")).name;this.route.queryParams.subscribe((function(n){e._fd.postAudienceChat({user_id:n.user_id,message:e.msgs,user_name:t,status:"false",eventname:n.session_id}).subscribe((function(t){e.msgs=""}))}))}},{key:"getSessionParticipants",value:function(){var e=this;this.route.queryParams.subscribe((function(t){e.session_id=t.session_id;var n=new FormData;n.append("user_id",t.user_id),n.append("event_id",t.event_id),n.append("session_id",t.session_id),e._fd.registerSession(n).subscribe((function(n){e._fd.getSessionParticipants(t.session_id).subscribe((function(t){e.participantsList=t.result,e.noBlankList=t.result}))}))}))}},{key:"searchParticipants",value:function(e){var t=this;this._fd.getSearchSessionParticipants(this.session_id,e).subscribe((function(e){t.participantsList=e.result}),(function(e){404===e.status&&(t.participantsList=t.noBlankList)}))}},{key:"speakerChat",value:function(e){}},{key:"ngOnDestroy",value:function(){console.log("kkkkhjkh")}}]),e}(),f=n("EnSQ"),m=s["\u0275crt"]({encapsulation:0,styles:[["#image_fluid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-top-right-radius:5px;border-top-left-radius:5px}#image_fluid[_ngcontent-%COMP%]   #img_text[_ngcontent-%COMP%]{text-align:center;padding-top:3px;background-color:#898d69;background-image:linear-gradient(0deg,#000 23%,#adb3b3 95%);border-bottom-right-radius:5px;border-bottom-left-radius:5px;color:#fff;height:33px;font-weight:500}.profileImage1[_ngcontent-%COMP%]{width:36px;height:36px;border-radius:50%;background:#5f9ea0;font-size:14px;color:#fff;text-align:center;float:left;font-weight:700;padding:10px}#img_banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:10px}#img_banner[_ngcontent-%COMP%]   #img_icons[_ngcontent-%COMP%]{text-align:center}#img_banner[_ngcontent-%COMP%]   #img_icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:18px;padding:10px;color:rgba(52,47,47,.74)}#image_profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{float:left;border-radius:50%}#image_profile[_ngcontent-%COMP%]   #profile_detail[_ngcontent-%COMP%]{padding:5px;margin-left:55px}#image_profile[_ngcontent-%COMP%]   #profile_detail[_ngcontent-%COMP%]   #profile_name[_ngcontent-%COMP%]{font-weight:600}#search_tab[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{padding-left:25px}#search_tab[_ngcontent-%COMP%]{position:relative}#search_tab[_ngcontent-%COMP%]   .fa-search[_ngcontent-%COMP%]{position:absolute;color:#aaa;vertical-align:center;top:9px;left:6px}"]],data:{}});function _(e){return s["\u0275vid"](0,[(e()(),s["\u0275eld"](0,0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(e()(),s["\u0275eld"](1,0,null,null,3,"div",[["class","col-md-12 col-xl-12"]],null,null,null,null,null)),(e()(),s["\u0275eld"](2,0,null,null,1,"app-session-room",[],null,null,null,a.b,a.a)),s["\u0275did"](3,245760,null,0,l.a,[r.c,c.a,u.a,g.a,d.a],null,null),(e()(),s["\u0275eld"](4,0,null,null,0,"div",[["class","row pt-5"]],null,null,null,null,null))],(function(e,t){e(t,3,0)}),null)}var v=s["\u0275ccf"]("app-speaker-view",h,(function(e){return s["\u0275vid"](0,[(e()(),s["\u0275eld"](0,0,null,null,1,"app-speaker-view",[],null,null,null,_,m)),s["\u0275did"](1,245760,null,0,h,[u.a,g.a,c.a,f.a,d.a],null,null)],(function(e,t){e(t,1,0)}),null)}),{},{},[]),b=n("SVse"),C=n("mviv"),k=n("nWGD"),P=n("eXUs"),S=n("3+oq"),M=n("bhM+"),O=function e(){_classCallCheck(this,e)},w=n("LKh9"),y=n("8zTQ"),x=n("tFwg"),V=n("wrzv"),D=n("l1rd"),I=n("wc44"),L=s["\u0275cmf"](i,[],(function(e){return s["\u0275mod"]([s["\u0275mpd"](512,s.ComponentFactoryResolver,s["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,v]],[3,s.ComponentFactoryResolver],s.NgModuleRef]),s["\u0275mpd"](4608,b.NgLocalization,b.NgLocaleLocalization,[s.LOCALE_ID]),s["\u0275mpd"](4608,p.e,p.e,[]),s["\u0275mpd"](4608,p.x,p.x,[]),s["\u0275mpd"](4608,C.VgAPI,C.VgAPI,[]),s["\u0275mpd"](4608,k.VgFullscreenAPI,k.VgFullscreenAPI,[]),s["\u0275mpd"](4608,P.VgUtils,P.VgUtils,[]),s["\u0275mpd"](4608,S.VgControlsHidden,S.VgControlsHidden,[]),s["\u0275mpd"](1073742336,b.CommonModule,b.CommonModule,[]),s["\u0275mpd"](1073742336,g.s,g.s,[[2,g.x],[2,g.o]]),s["\u0275mpd"](1073742336,O,O,[]),s["\u0275mpd"](1073742336,p.w,p.w,[]),s["\u0275mpd"](1073742336,p.t,p.t,[]),s["\u0275mpd"](1073742336,p.j,p.j,[]),s["\u0275mpd"](1073742336,w.VgCoreModule,w.VgCoreModule,[]),s["\u0275mpd"](1073742336,y.VgControlsModule,y.VgControlsModule,[]),s["\u0275mpd"](1073742336,x.VgOverlayPlayModule,x.VgOverlayPlayModule,[]),s["\u0275mpd"](1073742336,V.VgBufferingModule,V.VgBufferingModule,[]),s["\u0275mpd"](1073742336,D.VgStreamingModule,D.VgStreamingModule,[]),s["\u0275mpd"](1073742336,I.a,I.a,[]),s["\u0275mpd"](1073742336,i,i,[]),s["\u0275mpd"](1024,g.m,(function(){return[[{path:"",component:h,canDeactivate:[M.a]}]]}),[])])}))}}]);