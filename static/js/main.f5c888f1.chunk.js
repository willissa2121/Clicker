(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports=[{img:"https://ca-times.brightspotcdn.com/dims4/default/1d6597c/2147483647/strip/true/crop/1523x857+0+0/resize/840x473!/quality/90/?url=https%3A%2F%2Fca-times.brightspotcdn.com%2Fa6%2F87%2F77843778cc6dd908382327b22fc1%2Fla-1551943455-r9kqe7nh29-snap-image",id:0},{img:"https://heatnation.com/wp-content/uploads/2019/05/USATSI_12447942-e1558568845935.jpg",id:1},{img:"https://cdn.cnn.com/cnnnext/dam/assets/151129194729-kobe-dec-2013-exlarge-169.jpg",id:2},{img:"https://i.kinja-img.com/gawker-media/image/upload/s--vre1NEf1--/c_scale,f_auto,fl_progressive,q_80,w_800/zkoiqebwm4zueyhpz6w2.jpg",id:3},{img:"https://thumbor.forbes.com/thumbor/300x0/https%3A%2F%2Fblogs-images.forbes.com%2Fallenstjohn%2Ffiles%2F2012%2F03%2F300px-Dwight_howard_2009z.jpg",id:4},{img:"http://stmedia.stimg.co/ctyp_6550509KG.jpg?w=800",id:5},{img:"https://i.imgur.com/QhwdzSi.jpg",id:6},{img:"https://si.wsj.net/public/resources/images/BN-PT530_IVERSO_P_20160909112145.jpg",id:7},{img:"https://media.gq.com/photos/55828cfd1177d66d68d53084/master/w_1024%2Cc_limit/blogs-the-feed-steve-nash-elegy-los-angeles-lakers-basketball-nba.jpg",id:8}]},15:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(3),o=a.n(n),i=a(4),l=a(5),s=a(7),m=a(6),u=a(8),d={height:"250px",width:"300px",margin:"10px",boxShadow:"3px 3px 5px 6px #ccc",border:"4px solid #FFF"};function p(e){return c.a.createElement("div",null,c.a.createElement("div",{onClick:function(){return e.clicked(e.id)},className:"card"},c.a.createElement("img",{style:d,className:"card-img-top",src:e.image,alt:"Card image cap"})))}var g=a(1);function h(e){var t={display:"flex",background:"orange",flexDirection:"row",justifyContent:"space-around",alignItems:"center",height:"8vh",color:e.color,position:"fixed",width:"100vw"};return c.a.createElement("div",null,c.a.createElement("div",{style:t,className:"header-group"},c.a.createElement("h3",null,"Clicky Game"),c.a.createElement("h3",null,e.quote),c.a.createElement("h3",null,"Current Score: ",e.counter," High Score : ",e.maxScore)))}var f={paddingTop:"20vh",background:"blue"},b={color:"#fff",fontWeight:600};function y(){return c.a.createElement("div",{style:f,className:"jumbotron text-center"},c.a.createElement("h1",{style:b,className:"display-4"},"The Basketball Clicky Game"),c.a.createElement("p",{style:b,className:"lead"},"Click on a picture to begin. If you have never clicked it before, you get a point. If its been clicked before, you lose!"))}var v={background:"orange",color:"#fff"};function w(){return c.a.createElement("div",{style:v},c.a.createElement("footer",{className:"page-footer font-small blue"},c.a.createElement("div",{className:"footer-copyright text-center py-3"},"\xa9 2018 Copyright:",c.a.createElement("a",{href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}," Scott Willis"))))}var x={alignItems:"center",margin:"0 auto"},k=[],E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={friends:g,array:k,counter:0,maxScore:0,quote:"Click Any card to play, but only click Once!",color:"#fff"},a.shuffle=function(e){for(var t,a,r=e.length;0!==r;)a=Math.floor(Math.random()*r),t=e[r-=1],e[r]=e[a],e[a]=t;return e},a.clicked=function(e){-1===(k=a.state.array).indexOf(e)?(k.push(e),a.shuffle(g),a.setState({array:k,friends:g,counter:a.state.counter+1,quote:"Correct!",color:"green"})):(k=[],a.state.counter>a.state.maxScore?a.setState({array:k,maxScore:a.state.counter,counter:a.state.counter=0,quote:"Already Been Clicked!",color:"red"}):a.setState({array:k,counter:a.state.counter=0}))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(h,{quote:this.state.quote,color:this.state.color,counter:this.state.counter,maxScore:this.state.maxScore}),c.a.createElement("div",null,c.a.createElement(y,null),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row",style:x},g.map(function(t){return c.a.createElement(p,{image:t.img,id:t.id,clicked:e.clicked})})))),c.a.createElement(w,null))}}]),t}(c.a.Component);o.a.render(c.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.f5c888f1.chunk.js.map