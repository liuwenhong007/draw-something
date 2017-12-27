webpackJsonp([0],{764:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,r,l,u,i=a(92),c=n(i),o=a(89),d=n(o),f=a(90),m=n(f),p=a(93),v=n(p),h=a(94),E=n(h),b=a(248),k=n(b),g=a(9),y=n(g),N=a(16),w=n(N),_=a(23),S=a(91),C=a(249),M=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(C),x=a(769),P=n(x),R=a(767),$=n(R),H=a(765),O=n(H),I=a(771),D=a(766),W=a(251),V=function(e){return y.default.createElement("div",null,e.map(function(e){switch(e.type){case"enter":case"leave":return y.default.createElement("div",{className:"message",key:e.timestamp},y.default.createElement("div",{className:"info system"},y.default.createElement("span",{className:"by"},(0,D.getPersonName)(e.by)," ",{enter:"进入房间",leave:"离开房间"}[e.type])));case"info-change":return y.default.createElement("div",{className:"message",key:e.timestamp},y.default.createElement("div",{className:"info system"},y.default.createElement("span",{className:"by"},e.content.old.name," 改名为 ",e.content.info.name)));case"message":return y.default.createElement("div",{className:"message",key:e.timestamp},y.default.createElement("div",{className:"info"},y.default.createElement("span",{className:"by"},(0,D.getPersonName)(e.by)),y.default.createElement("span",{className:"time"},(0,I.getFormatTime)(e.timestamp,"HMS"))),y.default.createElement("div",{className:"content"},e.content));default:return null}}))},j=(s=(0,S.connect)(function(e){return{currentRoom:e.room.currentRoom,user:e.user}},function(e){return(0,_.bindActionCreators)((0,k.default)({},M),e)}))((u=l=function(e){function t(){var e,a,n,s;(0,d.default)(this,t);for(var r=arguments.length,l=Array(r),u=0;u<r;u++)l[u]=arguments[u];return a=n=(0,v.default)(this,(e=t.__proto__||(0,c.default)(t)).call.apply(e,[this].concat(l))),n.state={messageInputValue:""},s=a,(0,v.default)(n,s)}return(0,E.default)(t,e),(0,m.default)(t,[{key:"render",value:function(){var e=this,t=this.props.currentRoom,a=t.owner,n=t.people,s=t.name;return y.default.createElement("section",null,y.default.createElement($.default,{title:s,type:"room"}),y.default.createElement("section",{className:"room-container"},y.default.createElement("section",{className:"game-block"},y.default.createElement(P.default,null)),y.default.createElement("section",{className:"people-block"},y.default.createElement("div",{title:"房主"},y.default.createElement("span",{className:"icon-wrapper"},y.default.createElement("svg",{className:"icon","aria-hidden":"true"},y.default.createElement("use",{xlinkHref:"#icon-favor"}))),y.default.createElement("span",null,(0,D.getPersonName)(a))),y.default.createElement("div",null,n.filter(function(e){return a&&e.id!==a.id}).map(function(e,t){var a=(0,D.getPersonName)(e);return y.default.createElement("div",{key:e.id},y.default.createElement("span",{className:"icon-wrapper",style:{visibility:0===t?"visible":"hidden"}},y.default.createElement("svg",{className:"icon","aria-hidden":"true"},y.default.createElement("use",{xlinkHref:"#icon-group"}))),y.default.createElement("span",{title:a},a))}))),y.default.createElement("section",{className:"chat-block",ref:"chat-block"},V(t.messageList)),y.default.createElement("section",{className:"input-block"},y.default.createElement("input",{className:"input input-default input-md",placeholder:"请输入内容",value:this.state.messageInputValue,onChange:function(t){var a=t.target.value;e.setState({messageInputValue:a})},onKeyDown:function(t){return 13===t.keyCode&&e.sendMessage()}}),y.default.createElement("span",{className:"btn btn-default btn-md"+(this.state.messageInputValue?"":" disabled"),onClick:this.sendMessage.bind(this)},"发送"))))}},{key:"sendMessage",value:function(){this.state.messageInputValue&&(O.default.sendRoomMessage(this.state.messageInputValue),this.setState({messageInputValue:""}))}},{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.roomName,n=t.currentRoom;this.message$$=W.message$.subscribe(function(t){e.refs["chat-block"].scrollTop=e.refs["chat-block"].scrollHeight}),n&&n.name===a||O.default.enterRoom(a)}},{key:"componentWillUnmount",value:function(){this.message$$.unsubscribe()}}]),t}(g.Component),l.propTypes={roomName:w.default.string.isRequired},r=u))||r;t.default=j},765:function(e,t,a){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(252),l=s(r),u=a(147),i=s(u),c=a(148),o=s(c),d=a(249),f=n(d),m=a(144),p=(n(m),a(146)),v=n(p),h=a(250),E=(n(h),a(251));t.default={enterRoom:function(e){l.default.emit("enterRoom",e,function(){o.default.dispatch(f.setRoomInfo({roomName:e}))})},leaveRoom:function(){l.default.emit("leaveRoom"),o.default.dispatch(f.setRoomInfo({roomName:""}))},sendRoomMessage:function(e){var t=o.default.getState().user;l.default.emit("sendRoomMessage",e,function(a){a.ok&&E.message$.next({content:e,by:t,timestamp:a.timestamp,type:"message"})})},startGame:function(){l.default.emit("startGame")},emitCanvasStroke:function(e){l.default.emit("canvasStroke",e)},setUserInfo:function(e){l.default.emit("setClientInfo",e,function(t){i.default.set("clientInfo",e,6048e5),o.default.dispatch(v.setUserData({info:e}))})}}},766:function(e,t,a){"use strict";function n(e){return e?e.info.name||e.id:""}Object.defineProperty(t,"__esModule",{value:!0}),t.getPersonName=n;var s={};t.default=s},767:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,r,l,u,i=a(92),c=n(i),o=a(89),d=n(o),f=a(90),m=n(f),p=a(93),v=n(p),h=a(94),E=n(h),b=a(248),k=n(b),g=a(9),y=n(g),N=a(23),w=a(91),_=a(145),S=a(144),C=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(S),M=a(765),x=n(M),P=(s=(0,w.connect)(function(e){return{loadingStatus:e.network.loadingStatus,webSocketStatus:e.network.webSocketStatus,user:e.user}},function(e){return(0,N.bindActionCreators)((0,k.default)({},C),e)}))((u=l=function(e){function t(){var e,a,n,s;(0,d.default)(this,t);for(var r=arguments.length,l=Array(r),u=0;u<r;u++)l[u]=arguments[u];return a=n=(0,v.default)(this,(e=t.__proto__||(0,c.default)(t)).call.apply(e,[this].concat(l))),n.state={nameEditable:!1,nameValue:""},s=a,(0,v.default)(n,s)}return(0,E.default)(t,e),(0,m.default)(t,[{key:"render",value:function(){var e=this,t=this.props,a=(t.loadingStatus,t.webSocketStatus),n=(t.loading,t.loaded,t.wsConnect,t.wsDisconnect,t.user),s=t.title,r=t.type;return y.default.createElement("section",{className:"fixed-header"},y.default.createElement("div",{className:"item left"},a?null:y.default.createElement("span",{className:"item wifi alert-color",title:"网络出错"},y.default.createElement("svg",{className:"icon","aria-hidden":"true"},y.default.createElement("use",{xlinkHref:"#icon-wifi"}))),y.default.createElement("span",null,function(e){switch(e){case"home":return null;case"room":return y.default.createElement(_.Link,{to:"/"},y.default.createElement("span",{className:"icon-wrapper"},y.default.createElement("svg",{className:"icon clickable","aria-hidden":"true"},y.default.createElement("use",{xlinkHref:"#icon-back"}))));default:return null}}(r)),y.default.createElement("span",null,"room"===r?"房间["+s+"]":s)),y.default.createElement("div",{className:"item right",onClick:this.switchInfoEditable.bind(this)},this.state.nameEditable?[y.default.createElement("span",{className:"icon-wrapper"},y.default.createElement("svg",{className:"icon","aria-hidden":"true"},y.default.createElement("use",{xlinkHref:"#icon-people"}))),y.default.createElement("input",{className:"input input-white input-md",value:this.state.nameValue,onChange:function(t){e.setState({nameValue:t.target.value})},onKeyDown:function(t){13===t.keyCode&&e.setName()}}),y.default.createElement("span",{className:"icon-wrapper",onClick:this.setName.bind(this)},y.default.createElement("svg",{className:"icon clickable","aria-hidden":"true"},y.default.createElement("use",{xlinkHref:"#icon-roundcheck"}))),y.default.createElement("span",{className:"icon-wrapper",onClick:function(){e.setState({nameEditable:!1})}},y.default.createElement("svg",{className:"icon clickable","aria-hidden":"true"},y.default.createElement("use",{xlinkHref:"#icon-roundclose"})))]:y.default.createElement("div",{title:"点击修改昵称",className:"clickable"},y.default.createElement("span",{className:"icon-wrapper"},y.default.createElement("svg",{className:"icon","aria-hidden":"true"},y.default.createElement("use",{xlinkHref:"#icon-profile"}))),y.default.createElement("span",null,n.info.name||n.id))))}},{key:"componentWillMount",value:function(){}},{key:"switchInfoEditable",value:function(){this.state.nameEditable||this.setState({nameEditable:!0,nameValue:this.props.user.info.name||this.props.user.id})}},{key:"setName",value:function(){x.default.setUserInfo({name:this.state.nameValue}),this.setState({nameEditable:!1})}}]),t}(g.Component),l.defaultProps={type:""},r=u))||r;t.default=P},769:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,r,l=a(92),u=n(l),i=a(89),c=n(i),o=a(90),d=n(o),f=a(93),m=n(f),p=a(94),v=n(p),h=a(248),E=n(h),b=a(9),k=n(b),g=a(16),y=(n(g),a(23)),N=a(91),w=a(770),_=n(w),S=a(95),C=n(S),M=a(765),x=n(M),P=a(255),R=a(250),$=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(R),H=a(766),O=function(e){var t=[];for(var a in e){var n=e[a];t.push(n)}return t.sort(function(e,t){return e.score>t.score?-1:1}),t=t.map(function(e,t){return k.default.createElement("div",{key:e.id,className:"table-row"},k.default.createElement("span",{className:"rank"},t+1),k.default.createElement("span",{title:(0,H.getPersonName)(e),className:"name"+(e.online?" on":" off")},(0,H.getPersonName)(e)),k.default.createElement("span",{className:"score"},e.score))})},I=["red","black","green"],D=(s=(0,N.connect)(function(e){return{game:e.game,user:e.user,currentRoom:e.room.currentRoom}},function(e){return(0,y.bindActionCreators)((0,E.default)({},$),e)}))(r=function(e){function t(){var e,a,n,s;(0,c.default)(this,t);for(var r=arguments.length,l=Array(r),i=0;i<r;i++)l[i]=arguments[i];return a=n=(0,m.default)(this,(e=t.__proto__||(0,u.default)(t)).call.apply(e,[this].concat(l))),n.resizeCanvas=function(){var e=this.refs.canvas;e.width=e.offsetWidth,e.height=e.offsetHeight,this.brush.redraw(this.props.game.canvasData.strokes)}.bind(n),s=a,(0,m.default)(n,s)}return(0,v.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.game,n=t.user,s=t.currentRoom,r=a.word,l=a.countDown,u=a.banker,i=a.players,c=a.status,o=s.owner,d=o&&n.id===o.id;u&&(u.id,o.id);return k.default.createElement("section",{className:"game-wrapper"},k.default.createElement("section",{className:"game-info"},k.default.createElement("div",{className:"tip"},{pending:"等待下个回合",going:"进行中",await:"等待房主开始游戏"}[c]),"await"===c&&d?k.default.createElement("div",{className:"starter"},k.default.createElement("span",{className:"btn btn-default btn-md",onClick:x.default.startGame},"开始游戏")):null,r?k.default.createElement("div",{title:"目标词语",key:"target"},k.default.createElement("span",{className:"icon-wrapper"},k.default.createElement("svg",{className:"icon","aria-hidden":"true"},k.default.createElement("use",{xlinkHref:"#icon-focus"}))),k.default.createElement("span",{className:"value"},r)):null,k.default.createElement("div",{title:"倒计时"},k.default.createElement("span",{className:"icon-wrapper"},k.default.createElement("svg",{className:"icon","aria-hidden":"true"},k.default.createElement("use",{xlinkHref:"#icon-countdown"}))),k.default.createElement("span",{className:"value"},l||"")),k.default.createElement("div",{title:"当前庄家"},k.default.createElement("span",{className:"icon-wrapper"},k.default.createElement("svg",{className:"icon","aria-hidden":"true"},k.default.createElement("use",{xlinkHref:"#icon-write"}))),k.default.createElement("span",{className:"value"},(0,H.getPersonName)(u))),k.default.createElement("div",{className:"rank-wrapper"},k.default.createElement("div",{key:"",className:"table-row"},k.default.createElement("span",{className:"rank"},"排名"),k.default.createElement("span",{className:"name"},"玩家"),k.default.createElement("span",{className:"score"},"积分")),O(i))),k.default.createElement("section",{className:"game-panel"},k.default.createElement("canvas",{className:"canvas",ref:"canvas",width:"600",height:"400",style:{cursor:"going"===c&&u&&u.id===n.id?"crosshair":"default"}}),k.default.createElement("div",{className:"controls"},I.map(function(t){return k.default.createElement("div",{key:t,style:{background:t},className:"color-brush",onClick:function(){e.syncStroke({type:"mode",mode:"brush"}),e.syncStroke({type:"color",color:t})}})}),k.default.createElement("div",{className:"color-brush eraser",title:"橡皮",onClick:function(){e.syncStroke({type:"mode",mode:"eraser"})}}))))}},{key:"componentWillMount",value:function(){var e=this.props,t=e.setGameStatus,a=e.setGameCountDown,n=e.setGameBanker,s=e.setGamePlayers,r=e.setGameWord,l=e.setCanvasData;t("await"),a(0),n(null),s({}),r(""),l({strokes:[]})}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",this.resizeCanvas),this.brush=new _.default({canvas:this.refs.canvas}),this.canvasStroke$$=P.canvasStroke$.subscribe(function(t){return e.syncStroke(t,!0)}),this.canvasReset$$=P.canvasReset$.subscribe(function(){return e.resetCanvas()}),this.mouseEvent$$=C.default.Observable.fromEvent(this.refs.canvas,"mousedown").do(function(t){e.syncStroke({x:t.offsetX/e.refs.canvas.offsetWidth,y:t.offsetY/e.refs.canvas.offsetHeight,type:"begin"})}).switchMap(function(t){return C.default.Observable.fromEvent(e.refs.canvas,"mousemove").takeUntil(C.default.Observable.fromEvent(document.body,"mouseup").do(function(t){e.syncStroke({type:"close"})}))}).do(function(t){e.syncStroke({x:t.offsetX/e.refs.canvas.offsetWidth,y:t.offsetY/e.refs.canvas.offsetHeight,type:"move"})}).subscribe(),setTimeout(function(){e.resizeCanvas()})}},{key:"componentWillUnmount",value:function(){this.mouseEvent$$.unsubscribe(),this.canvasReset$$.unsubscribe(),this.canvasStroke$$.unsubscribe(),window.removeEventListener("resize",this.resizeCanvas)}},{key:"syncStroke",value:function(e,t){var a=this.props,n=a.game,s=a.user,r=a.pushCanvasStroke;(t||"going"===n.status&&n.banker&&n.banker.id===s.id)&&(r(e),this.brush.draw(e),!t&&x.default.emitCanvasStroke(e))}},{key:"resetCanvas",value:function(){(0,this.props.setCanvasData)({size:[this.refs.canvas.width,this.refs.canvas.height],strokes:[]}),this.brush.redraw()}}]),t}(b.Component))||r;t.default=D},770:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(254),r=n(s),l=a(89),u=n(l),i=a(90),c=n(i),o=function(){function e(t){var a=t.canvas,n=t.lineWidth,s=void 0===n?4:n,r=t.color,l=void 0===r?"red":r;(0,u.default)(this,e),this.ctx=a.getContext("2d"),this.mode="brush",this.ctx.strokeStyle=l,this.ctx.lineWidth=s}return(0,c.default)(e,[{key:"redraw",value:function(e){var t=this.ctx.canvas,a=t.width,n=t.height;if(this.ctx.clearRect(0,0,a,n),e){var s=!0,l=!1,u=void 0;try{for(var i,c=(0,r.default)(e);!(s=(i=c.next()).done);s=!0){var o=i.value;this.draw(o)}}catch(e){l=!0,u=e}finally{try{!s&&c.return&&c.return()}finally{if(l)throw u}}}}},{key:"draw",value:function(e){var t=this.ctx,a=t.canvas,n=a.width,s=a.height,r=e.x*n,l=e.y*s;switch(e.type){case"mode":this.mode=e.mode;break;case"color":this.ctx.strokeStyle=e.color;break;case"begin":t.beginPath(),t.moveTo(r,l),t.stroke();break;case"move":switch(this.mode){case"brush":t.lineTo(r,l),t.stroke();break;case"eraser":t.clearRect(r-10*t.lineWidth,l-10*t.lineWidth,20*t.lineWidth,20*t.lineWidth)}break;case"close":t.closePath()}}}]),e}();t.default=o},771:function(e,t,a){"use strict";function n(e){return e=+e,e<=9?"0"+e:""+e}Object.defineProperty(t,"__esModule",{value:!0});t.getFormatTime=function(e,t){if(!e)return"";e=new Date(e);var a=[e.getFullYear(),n(e.getMonth()+1),n(e.getDate())],s=a[0],r=a[1],l=a[2],u=[n(e.getHours()),n(e.getMinutes()),n(e.getSeconds())],i=u[0],c=u[1],o=u[2];return"HMS"===t?i+":"+c+":"+o:"YMD"===t?s+"-"+r+"-"+l:s+"-"+r+"-"+l+" "+i+":"+c+":"+o}}});
//# sourceMappingURL=chunk.0.1ccc311336988e9be069.js.map