(this["webpackJsonpreact-github-finder"]=this["webpackJsonpreact-github-finder"]||[]).push([[0],{40:function(e,t,a){e.exports=a(69)},45:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),i=(a(45),a(20)),s=a.n(i),o=a(33),u=a(7),h=a(8),m=a(10),d=a(9),p=a(16),b=a(11),f=a(73),g=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f.a,{bg:"success",variant:"dark"},r.a.createElement(f.a.Brand,null,r.a.createElement("i",{className:"fab fa-github"})," Github Finder")))}}]),t}(n.Component),E=a(71),v=a(36),j=a(75),O=a(72),C=a(76),y=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Spiners",align:"center"},r.a.createElement("div",{class:"spinner-border text-muted"}))}}]),t}(n.Component),k=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return this.props.loading?r.a.createElement(y,null):r.a.createElement("div",{className:"Users"},r.a.createElement(E.a,null,this.props.users.map((function(e){return r.a.createElement(v.a,{md:3},r.a.createElement(j.a,{className:"mt-2",align:"center"},r.a.createElement(j.a.Body,{key:e.id,user:e},r.a.createElement(O.a,{roundedCircle:!0,src:e.avatar_url,width:"100px"}),r.a.createElement(j.a.Title,null,e.login),r.a.createElement(j.a.Text,null,r.a.createElement(C.a,{block:!0,variant:"info",href:e.html_url},"Read More")))))}))))}}]),t}(n.Component),w=a(74),N=function(e){var t=e.handleChange;return r.a.createElement(E.a,null,r.a.createElement(v.a,null,r.a.createElement(w.a,{className:"mt-3"},r.a.createElement(w.a.Group,null,r.a.createElement(w.a.Control,{className:"search",type:"search",placeholder:"Search...",onChange:t})))))},x=(a(51),a(37)),S=a.n(x),B=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={users:[],searchField:"",loading:!1},e.handleChange=e.handleChange.bind(Object(p.a)(e)),e}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,S.a.get("https://api.github.com/users");case 3:t=e.sent,this.setState({users:t.data,loading:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.users,a=e.searchField,n=t.filter((function(e){return e.login.toLowerCase().includes(a.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement("div",{className:"container"},r.a.createElement(N,{handleChange:this.handleChange}),r.a.createElement(k,{users:n,loading:this.state.loading})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.11bbea32.chunk.js.map