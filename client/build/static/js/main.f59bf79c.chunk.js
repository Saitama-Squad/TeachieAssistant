(this.webpackJsonpcoursify=this.webpackJsonpcoursify||[]).push([[0],{223:function(e,t,n){},454:function(e,t,n){},455:function(e,t,n){},457:function(e,t,n){},458:function(e,t,n){},459:function(e,t,n){},506:function(e,t,n){},507:function(e,t,n){},508:function(e,t,n){},509:function(e,t,n){},510:function(e,t,n){},511:function(e,t,n){},512:function(e,t,n){},513:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n.n(r),s=n(87),o=n.n(s),i=n(6),l=n(9),u=n(8),d=n(7),h=n(22),j=n(13),p=n(47),b=n(20),f=n.n(b),m=n(56),O=n(69),v=n.n(O),x=n(25),g=Object(x.a)(),y="fetch_user",N="fetch_data",w="add_goals",k="fetch_data_yt",C=function(){return function(){var e=Object(m.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/api/current_user");case 2:n=e.sent,t({type:y,payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=(n(223),n(55)),R=n.n(T),M=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(R.a,{id:"tsparticles",options:{background:{color:{value:"#ffffff"}},fpsLimit:60,interactivity:{detectsOn:"canvas",events:{onHover:{enable:!0,mode:"repulse"},onClick:{enable:!0,mode:"push"},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.8,size:40},push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#000000"},links:{color:"#000000",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:6,straight:!1},number:{density:{enable:!0,value_area:800},value:80},opacity:{value:.5},shape:{type:"circle"},size:{random:!0,value:5}},detectRetina:!0}})})},_=n(195),L=n(57),G=(n(454),function(e,t){return[e-window.innerWidth/2,t-window.innerHeight/2]}),S=function(e,t){return"translate3d(".concat(e/10,"px,").concat(t/10,"px,0)")},F=function(e,t){return"translate3d(".concat(e/8+75,"px,").concat(t/8-200,"px,0) rotate(",45,"deg)")},H=function(e,t){return"translate3d(".concat(e/6-190,"px,").concat(t/6-110,"px,0) rotate(").concat(-45,"deg)")},A=function(e,t){return"translate3d(".concat(e/3.5-100,"px,").concat(t/3.5+200,"px,0) rotate(",25,"deg)")},E=function(){var e=Object(L.b)((function(){return{xy:[0,0],config:{mass:10,tension:550,friction:140}}})),t=Object(_.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)("div",{className:"dooddlecontainer",onMouseMove:function(e){var t=e.clientX,n=e.clientY;return r({xy:G(t,n)})},children:[Object(a.jsx)(L.a.div,{className:"card1",style:{transform:n.xy.interpolate(S)}}),Object(a.jsx)(L.a.div,{className:"card2",style:{transform:n.xy.interpolate(F)}}),Object(a.jsx)(L.a.div,{className:"card3",style:{transform:n.xy.interpolate(H)}}),Object(a.jsx)(L.a.div,{className:"card4",style:{transform:n.xy.interpolate(A)}})]})},z=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).notLogged=function(){return Object(a.jsxs)("div",{className:"landingpagecontainer",children:[Object(a.jsx)("div",{className:"leftcontainer rightdoodlecontainer",children:Object(a.jsx)(E,{})}),Object(a.jsxs)("div",{className:"rightcontainer",children:[Object(a.jsx)("h1",{className:"headingg",children:"Teachie Assistant"}),Object(a.jsx)("h2",{children:"Login To Explore The World Of Possibilities"}),Object(a.jsx)("div",{className:"loginwrapper",children:Object(a.jsx)("div",{className:"linkkwrapper",children:Object(a.jsx)("div",{className:"lncontainer",children:Object(a.jsx)("a",{href:"/auth/google",className:"btn effect01",children:Object(a.jsx)("span",{children:"Login"})})})})})]})]})},e.logged=function(){return Object(a.jsxs)("div",{className:"landingpagecontainer",children:[Object(a.jsx)("div",{className:"leftcontainer rightdoodlecontainer",children:Object(a.jsx)(E,{})}),Object(a.jsxs)("div",{className:"rightcontainer",children:[Object(a.jsx)("h1",{children:"Teachie Assistant"}),Object(a.jsx)("h2",{children:"Login To Explore The World Of Possibilities"}),Object(a.jsx)("div",{className:"loginwrapper",children:Object(a.jsx)("div",{className:"linkkwrapper",children:Object(a.jsx)("div",{className:"lncontainer",children:Object(a.jsx)("a",{href:"/api/logout",className:"btn effect01",children:Object(a.jsx)("span",{children:"Logout"})})})})})]})]})},e}return Object(l.a)(n,[{key:"render",value:function(){return this.props.auth?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(M,{}),this.logged()]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(M,{}),this.notLogged()]})}}]),n}(r.Component),D=Object(h.b)((function(e){return{auth:e.auth}}))(z),X=(n(455),n(33)),P=n(41),U=n.n(P),W=(n(81),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={word:null},e.onFormSubmit=function(t){t.preventDefault(),e.state.word?(e.setState({word:""}),e.mainForm.reset(),e.props.fetchData(e.state.word)):alert("enter any text!")},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){U.a.init({duration:1e3})}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"sbmain",children:[Object(a.jsxs)("form",{ref:function(t){return e.mainForm=t},className:"sb-container",onSubmit:this.onFormSubmit,children:[Object(a.jsxs)("div",{className:"sb-form","data-aos":"zoom-in",children:[Object(a.jsx)("input",{id:"maininput",type:"text",autoComplete:"off",className:"sb-input",onChange:function(t){e.setState({word:t.target.value})},required:!0}),Object(a.jsx)("label",{className:"sb-label-name",children:Object(a.jsx)("span",{className:"sb-content-name",children:"Enter any word here!"})})]}),Object(a.jsx)("div",{className:"linkwrapper","data-aos":"fade-up",children:Object(a.jsx)("div",{className:"loginwrapper",children:Object(a.jsx)("div",{className:"linkkwrapper",children:Object(a.jsx)("div",{className:"lncontainer",children:Object(a.jsx)(X.a,{to:"/home/".concat(this.state.word),className:"btn effect01",onClick:this.onFormSubmit,children:Object(a.jsx)("span",{children:"Search!"})})})})})})]}),Object(a.jsx)("br",{})]})}}]),n}(r.Component)),q=Object(h.b)((function(e){return e}),{fetchData:function(e){return function(){var t=Object(m.a)(f.a.mark((function t(n){var a,r,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=e,console.log("term: "+e),t.next=5,v.a.get("/results/".concat(e));case 5:return(r=t.sent).data=[e].concat(Object(p.a)(r.data)),console.log("fetchresponse: "+r.data[0]),console.log(r),n({type:N,payload:r.data}),t.next=12,v.a.get("/ytresults/".concat(e));case 12:c=t.sent,console.log(c),r.data.unshift(e),n({type:k,payload:c.data}),console.log("history: "+a),g.push("/home/".concat(a)),t.next=24;break;case 20:t.prev=20,t.t0=t.catch(0),n({type:"ERROR",payload:null}),g.push("/eRrOrXxX");case 24:case"end":return t.stop()}}),t,null,[[0,20]])})));return function(e){return t.apply(this,arguments)}}()}})(W),I=(n(457),n.p+"static/media/elearning.d6ff192e.png"),Y=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){U.a.init({duration:1e3}),a.myphoto.current.onmouseenter=a.onMouseEnterHandler,a.myphoto.current.onmouseleave=a.onMouseLeaveHandler,a.myphoto.current.onmousemove=a.onMouseMoveHandler,a.mouse.setOrigin(a.myphoto.current)},a.onMouseEnterHandler=function(e){a.update(e)},a.onMouseLeaveHandler=function(){a.inner.current.style=""},a.onMouseMoveHandler=function(e){a.isTimeToUpdate()&&a.update(e)},a.update=function(e){a.mouse.updatePosition(e),a.updateTransformStyle((a.mouse.y/a.inner.current.offsetHeight/2).toFixed(2),(a.mouse.x/a.inner.current.offsetWidth/2).toFixed(2))},a.updateTransformStyle=function(e,t){var n="rotateX("+e+"deg) rotateY("+t+"deg)";a.inner.current.style.transform=n,a.inner.current.style.webkitTransform=n,a.inner.current.style.mozTransform=n,a.inner.current.style.msTransform=n,a.inner.current.style.oTransform=n},a.isTimeToUpdate=function(){return a.counter++%a.updateRate===0},a.container="",a.inner="",a.counter=0,a.updateRate=10,a.mouse={_x:0,_y:0,x:0,y:0,updatePosition:function(e){var t=e||window.event;this.x=t.clientX-this._x,this.y=-1*(t.clientY-this._y)},setOrigin:function(e){this._x=e.offsetLeft+Math.floor(e.offsetWidth/2),this._y=e.offsetTop+Math.floor(e.offsetHeight/2)},show:function(){return"("+this.x+", "+this.y+")"}},a.myphoto=c.a.createRef(),a.inner=c.a.createRef(),a}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"myphoto-container",children:Object(a.jsx)("div",{className:"myphoto",ref:this.myphoto,children:Object(a.jsx)("div",{className:"innerContainer",ref:this.inner,children:Object(a.jsx)("img",{src:I,alt:"mypic",id:"myphotojpg","data-aos":"fade-down"})})})})}}]),n}(c.a.Component),B=(n(458),n(459),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"navbar-container",children:Object(a.jsxs)("div",{className:"navbar",children:[Object(a.jsx)("div",{className:"navbar-brand",children:Object(a.jsx)(X.a,{to:"/",children:"Welcome"})}),Object(a.jsxs)("div",{className:"navbar-menu",children:[Object(a.jsx)("div",{children:Object(a.jsx)(X.a,{to:"/profile",className:"navbar-menu-link btn-1",children:"Profile"})}),Object(a.jsx)("div",{children:Object(a.jsx)("a",{href:"/api/logout",className:"navbar-menu-link btn-1",children:"Logout"})})]})]})})}}]),n}(r.Component)),J=(n(460),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"homepagecontainer",children:[Object(a.jsx)(R.a,{id:"tsparticles",options:{background:{color:{value:"#0d47a1"}},fpsLimit:60,interactivity:{detectsOn:"canvas",events:{onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.8,size:40},push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:6,straight:!1},number:{density:{enable:!0,value_area:800},value:80},opacity:{value:.5},shape:{type:"square"},size:{random:!0,value:5}},detectRetina:!0}}),Object(a.jsx)("div",{className:"header-wrapper",children:Object(a.jsx)(B,{})}),Object(a.jsxs)("div",{className:"homepage",children:[Object(a.jsx)("div",{className:"logocontainer",children:Object(a.jsx)("div",{className:"logo",children:Object(a.jsx)(Y,{})})}),Object(a.jsx)("div",{className:"searchbarcontainer",children:Object(a.jsx)(q,{})})]})]})}}]),n}(r.Component)),V=(n(506),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"navbar-container",children:Object(a.jsxs)("div",{className:"navbar",children:[Object(a.jsx)("div",{className:"navbar-brand",children:Object(a.jsx)(X.a,{to:"/",children:"Welcome"})}),Object(a.jsxs)("div",{className:"navbar-menu",children:[Object(a.jsx)("div",{children:Object(a.jsx)(X.a,{to:"/home",className:"navbar-menu-link btn-1",children:"Home"})}),Object(a.jsx)("div",{children:Object(a.jsx)("a",{href:"/api/logout",className:"navbar-menu-link btn-1",children:"Logout"})})]})]})})}}]),n}(r.Component)),K=(n(507),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).renderRemGoals=function(){return e.props.auth.currentGoals.length<=0?Object(a.jsx)("div",{children:"No Goals"}):Object.keys(e.props.auth.currentGoals).map((function(t,n){return Object(a.jsx)("div",{children:e.props.auth.currentGoals[t]},n)}))},e.renderAllGoals=function(){return e.props.auth.goals.length<=0?Object(a.jsx)("div",{children:"No Goals"}):Object.keys(e.props.auth.goals).map((function(t,n){return Object(a.jsx)("div",{children:e.props.auth.goals[t]},n)}))},e.renderCard=function(e,t,n){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{class:"courses-container",children:Object(a.jsxs)("div",{class:"course",children:[Object(a.jsxs)("div",{class:"course-preview",children:[Object(a.jsx)("h2",{children:e}),Object(a.jsxs)("a",{href:"#",children:["View all chapters ",Object(a.jsx)("i",{class:"fas fa-chevron-right"})]})]}),Object(a.jsxs)("div",{class:"course-info",children:[Object(a.jsx)("h6",{style:{color:"black"},children:n}),Object(a.jsx)("h2",{style:{color:"black"},children:t})]})]})})})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"render",value:function(){return console.log(this.props.auth),Object(a.jsxs)("div",{className:"profilecontainer",children:[Object(a.jsx)(R.a,{id:"tssparticles",options:{background:{color:{value:"#0d47a1"}},fpsLimit:60,interactivity:{detectsOn:"canvas",events:{onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.8,size:40},push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:6,straight:!1},number:{density:{enable:!0,value_area:800},value:80},opacity:{value:.5},shape:{type:"square"},size:{random:!0,value:5}},detectRetina:!0}}),Object(a.jsx)("div",{className:"header-wrapper",children:Object(a.jsx)(V,{})}),Object(a.jsxs)("div",{className:"profilepage",children:[Object(a.jsx)("div",{className:"profiledetails",children:this.props.auth?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("img",{src:this.props.auth.userImage,alt:""}),Object(a.jsx)("h1",{className:"namediv",children:this.props.auth.name}),Object(a.jsx)("div",{className:"emaildiv",children:this.props.auth.email})]}):Object(a.jsx)("div",{children:"Login First"})}),Object(a.jsx)("div",{className:"detailscontainer",children:Object(a.jsx)("div",{className:"detailsdiv",children:this.props.auth?Object(a.jsxs)(a.Fragment,{children:[this.renderCard("Goals Remaining: "+Object.keys(this.props.auth.currentGoals).length,this.renderRemGoals(),"Programming"),this.renderCard("Goals Completed: "+this.props.auth.completedGoals,this.renderAllGoals("goals"),"All Goals: "+Object.keys(this.props.auth.goals).length),Object(a.jsx)("h4",{children:"If You Have Added Any new goals, Logout and Login Again to Refresh The Data."})]}):Object(a.jsx)("div",{children:"Login First"})})})]})]})}}]),n}(r.Component)),Q=Object(h.b)((function(e){return{auth:e.auth}}),{fetchUser:C})(K),Z=function(){return Object(a.jsx)("div",{className:"er-container",children:Object(a.jsx)("div",{className:"er-wrapper",children:Object(a.jsxs)("div",{className:"err-container",children:[Object(a.jsx)("span",{role:"img","aria-label":"faint",children:"\ud83d\ude35"}),"Sorry! No match Found!",Object(a.jsx)("span",{role:"img","aria-label":"faint",children:"\ud83d\ude35"})]})})})},$=function(e){var t=e.data;if(U.a.init({duration:1e3}),console.log("from resulsts"),t){console.log(t);return t.map((function(e,t){return 20,Object(a.jsx)("li",{className:"td-wrapper",children:Object(a.jsxs)("div",{className:"td-container",children:[e,"."]})},t)}))}return Object(a.jsx)("div",{className:"none",children:"None"})},ee=(n(508),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return this.props.results&&this.props.results.length>0?Object(a.jsx)("div",{className:"totalres",children:Object(a.jsx)("ul",{className:"res-container","data-aos":"fade-up","data-aos-offset":"50",children:Object(a.jsx)($,{data:this.props.results})})}):Object(a.jsx)("div",{className:"ntg-container","data-aos":"fade-up",children:"\ud83d\ude15Nothing to show here.Search anything different or reload the page!\ud83d\ude15"})}}]),n}(r.Component)),te=Object(h.b)((function(e){return{results:e.results}}))(ee),ne=(n(509),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.ytresults.shift();return console.log("w3: "+e),this.props.ytresults&&this.props.ytresults.length>0?Object(a.jsx)("ol",{className:"res-container","data-aos":"fade-up",children:Object(a.jsx)($,{data:this.props.ytresults})}):Object(a.jsx)("div",{className:"ntg-container","data-aos":"fade-up",children:"\ud83d\ude15Nothing to show here.Search anything different or reload the page!\ud83d\ude15"})}}]),n}(r.Component)),ae=Object(h.b)((function(e){return{ytresults:e.ytresults}}))(ne),re=(n(510),null),ce=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){U.a.init({duration:1e3})},a.sleep=function(e){return new Promise((function(t){return setTimeout(t,e)}))},a.state={word:null},a.onButtonClick=function(){var e=Object(m.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return re=null,console.log("button: "+a.props.results[0]+a.props.auth.googleId),a.props.addGoals(a.props.results[0],a.props.auth.googleId),a.buttonn.current.innerHTML="Goal Added\ud83d\ude0a",a.buttonn.current.onClick=null,e.next=7,a.sleep(1e3);case 7:console.log(t),a.buttonn.current.display="inline";case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.buttonn=c.a.createRef(),a}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.results[0];return re=t,Object(a.jsxs)("aside",{className:"totaldatacontainer",children:[Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(X.a,{to:"/home/".concat(t,"/w3"),children:"Topics To Be Learnt"})}),Object(a.jsx)("li",{children:Object(a.jsx)(X.a,{to:"/home/".concat(t,"/ytube"),children:"Youtube Courses That We Recommend"})})]}),Object(a.jsx)("div",{className:"addgoalcontainer",children:re?Object(a.jsx)("button",{className:"button",onClick:function(t){return e.onButtonClick(t)},ref:this.buttonn,children:t?"Add "+t.toUpperCase()+" To Goals?":t}):Object(a.jsx)("div",{})})]})}}]),n}(r.Component),se=Object(h.b)((function(e){return{results:e.results,auth:e.auth}}),{addGoals:function(e,t){return function(){var n=Object(m.a)(f.a.mark((function n(a){var r,c;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r=e,console.log("addgoal: "+e),n.next=5,v.a.put("/addgoals/".concat(e,"/").concat(t));case 5:c=n.sent,console.log("goals: "+c),a({type:w,payload:c.data}),console.log("goals data: "+c.data),g.push("/home/".concat(r,"/w3")),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(0),a({type:"ERROR",payload:null}),g.push("/eRrOrXxX");case 16:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()}})(ce),oe=(n(511),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"appcontainer",children:Object(a.jsxs)(j.b,{history:g,children:[Object(a.jsx)(j.a,{path:"/eRrOrXxX",exact:!0,component:Z}),Object(a.jsx)(j.a,{path:"/",exact:!0,component:D}),Object(a.jsx)(j.a,{path:"/profile",exact:!0,component:Q}),Object(a.jsx)(j.a,{path:"/home",component:J}),Object(a.jsx)(j.a,{path:"/home/:word",component:se}),Object(a.jsx)(j.a,{path:"/home/:word/w3",component:te}),Object(a.jsx)(j.a,{path:"/home/:word/ytube",component:ae})]})})}}]),n}(r.Component)),ie=Object(h.b)((function(e){return{auth:e.auth}}),{fetchUser:C})(oe),le=n(42),ue=n(194),de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return t.payload||!1;default:return e}},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return t.payload||!1;default:return e}},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return t.payload||!1;default:return e}},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return t.payload||!1;default:return e}},be=Object(le.c)({auth:de,results:he,goals:je,ytresults:pe}),fe=(n(512),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||le.d),me=Object(le.e)(be,{},fe(Object(le.a)(ue.a)));o.a.render(Object(a.jsx)(h.a,{store:me,children:Object(a.jsx)(ie,{})}),document.querySelector("#root"))}},[[513,1,2]]]);
//# sourceMappingURL=main.f59bf79c.chunk.js.map