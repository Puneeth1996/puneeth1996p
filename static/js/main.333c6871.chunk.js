(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){e.exports=a(141)},108:function(e,t,a){},109:function(e,t,a){},139:function(e,t,a){},141:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(34),i=a.n(l),c=(a(108),a(6)),o=a(9),s=a(8),m=a(7),u=a(11),p=a(10),h=a(15),d=a(38),g=a(102),b=(a(109),a(16)),f=a(14),E=a(23);var v=function(){return r.a.createElement("footer",{className:"mt-5"},r.a.createElement(h.a,{fluid:!0},r.a.createElement(b.a,{className:"border-top justify-content-between p-3"},r.a.createElement(f.a,{className:"p-0",md:3,sm:12},r.a.createElement("a",{href:"https://www.instagram.com/puneeth1996p/",target:"_blank",rel:"noopener noreferrer",style:{color:"black",textDecoration:"none"}}," ",r.a.createElement(E.d,{style:{width:25,height:25,marginRight:15}})," "),r.a.createElement("a",{href:"https://www.linkedin.com/in/puneeth-p-861095146/",target:"_blank",rel:"noopener noreferrer",style:{color:"black",textDecoration:"none"}}," ",r.a.createElement(E.e,{style:{width:25,height:25,marginRight:15}})," "),r.a.createElement("a",{href:"https://twitter.com/Puneeth1997",target:"_blank",rel:"noopener noreferrer",style:{color:"black",textDecoration:"none"}}," ",r.a.createElement(E.g,{style:{width:25,height:25,marginRight:15}})," "),r.a.createElement("a",{href:"https://www.facebook.com/puneeth1996p",target:"_blank",rel:"noopener noreferrer",style:{color:"black",textDecoration:"none"}}," ",r.a.createElement(E.a,{style:{width:25,height:25,marginRight:15}})," "),r.a.createElement("a",{href:"mailto: puneeth1996trainer@gmail.com?cc=puneeth1996p@gmail.com",target:"_blank",rel:"noopener noreferrer",style:{color:"black",textDecoration:"none"}}," ",r.a.createElement(E.c,{style:{width:25,height:25,marginRight:15}})," "),r.a.createElement("a",{href:"https://github.com/Puneeth1996",target:"_blank",rel:"noopener noreferrer",style:{color:"black",textDecoration:"none"}}," ",r.a.createElement(E.b,{style:{width:25,height:25,marginRight:15}})," "),r.a.createElement("a",{href:"https://www.youtube.com/channel/UCjccj32rGwQfPuh2ANC0TUQ",target:"_blank",rel:"noopener noreferrer",style:{color:"black",textDecoration:"none"}}," ",r.a.createElement(E.h,{style:{width:25,height:25,marginRight:15}})," ")))))},y=a(33);var w=function(e){var t=e.textArr.map(function(e,t){return r.a.createElement("span",{key:t},e)});return r.a.createElement("h4",{className:"display-4 font-weight-light py-5",style:{fontSize:"5vw",marginLeft:"5vw"}},"  ",r.a.createElement(y.a,null,t),"  ")},k=a(29);var S=function(e){return r.a.createElement(k.a,{className:"bg-transparent jumbotron-fluid p-0"},r.a.createElement(h.a,{fluid:!0},r.a.createElement(b.a,{className:"justify-content-center py-5"},r.a.createElement(f.a,{md:8,sm:12},e.title&&r.a.createElement("h3",{className:"display-1 font-weight-bolder",style:{fontSize:"8vw",marginLeft:"5vw"}},e.title),e.subTitle&&r.a.createElement("h4",{className:"display-4 font-weight-light",style:{fontSize:"5vw",marginLeft:"5vw"}},e.subTitle),e.text&&r.a.createElement("h4",{className:"lead font-weight-light",style:{fontSize:"3vw",marginLeft:"5vw"}},e.text)))))},j=a(30),x=a(60);var T=function(e){var t=Object(x.b)({opacity:1,from:{opacity:0}});return r.a.createElement(x.a.div,{className:"g-card-info",style:t},r.a.createElement("p",{className:"g-card-title"},e.title),r.a.createElement("p",{className:"g-card-sub-title"},e.subTitle),r.a.createElement(u.b,{to:e.link},"View"))};var A=function(e){return r.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)}},r.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&r.a.createElement(T,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},N=a(76),O=a.n(N),C=a(77),P=a.n(C),L=a(78),M=a.n(L),R=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e,t){var a=Object(j.a)(n.state.items);a[e].selected=!a[e].selected,a.forEach(function(t){t.id!==e&&(t.selected=!1)}),n.setState({items:a})},n.makeItems=function(e){return e.map(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("style",{type:"text/css"},"\n                                .g-card-info {\n                                    position: absolute;\n                                    transform: translate(30%,-100%) !important;\n                                    color: cornflowerblue;\n                                }\n                            "),r.a.createElement(A,{item:e,click:function(t){return n.handleCardClick(e.id,t)},key:e.id}))})},n.state={items:[{id:0,title:"Projects",subTitle:"All My Projects",imgSrc:O.a,link:"/projects",selected:!1},{id:1,title:"Puneeth P",subTitle:"Portfolio Page",imgSrc:P.a,link:"/about",selected:!1},{id:2,title:"Contact Me",subTitle:"You can contact me!",imgSrc:M.a,link:"/contact",selected:!1}]},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,{fluid:!0},r.a.createElement(b.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),a}(r.a.Component);var D=function(e){return r.a.createElement("div",null,r.a.createElement(w,{textArr:e.subTitle}),r.a.createElement(R,null))};var _=function(e){return r.a.createElement(h.a,{fluid:!0},r.a.createElement(b.a,{className:"justify-content-center"},r.a.createElement(f.a,{md:8},e.children)))};var z=function(e){return r.a.createElement("div",null,r.a.createElement(S,{title:e.title}),r.a.createElement(_,null,r.a.createElement("p",null,"Hello, my name is ",r.a.createElement(u.b,{to:"/"},"Puneeth"),"."),r.a.createElement("p",null,"I'm a full stack engineer with experience in WordPress, PHP, ReactJS, Express JS, Node JS, Oracle SQL, MongoDB, and MySQL."),r.a.createElement("p",null,"My dream is to one day start my own business and become an entrepreneur (currently working on some ideas)."),r.a.createElement("p",null,"I'm constantly learning new things. currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS"),r.a.createElement("p",null,"You can check out, all my latest ",r.a.createElement(u.b,{to:"/projects"},"Projects"),". Or some interesting ",r.a.createElement(u.b,{to:"/projects"},"Blogs.")),r.a.createElement("p",null,"When I'm not learning something new, I play basketball ",r.a.createElement("span",{role:"img","aria-labelledby":"smiley"},"\ud83d\ude01"),".")))};var J=function(e){var t=e.textArr.map(function(e,t){return r.a.createElement("span",{key:t},e)});return r.a.createElement(k.a,{className:"bg-transparent jumbotron-fluid p-0"},r.a.createElement(h.a,{fluid:!0},r.a.createElement(b.a,{className:"justify-content-center py-5"},r.a.createElement(f.a,{md:8,sm:12},e.title&&r.a.createElement("h3",{className:"display-1 font-weight-bolder",style:{fontSize:"8vw",marginLeft:"5vw"}},e.title),r.a.createElement("h4",{className:"display-4 font-weight-light py-5",style:{fontSize:"5vw",marginLeft:"5vw"}},"  ",r.a.createElement(y.a,null,t),"  ")))))},I=a(54),B=a.n(I),F=a(79),H=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(J,{title:this.props.title,textArr:this.props.subTitle}),r.a.createElement(_,null,r.a.createElement(b.a,null,r.a.createElement(f.a,{className:"d-flex justify-content-between",style:{width:"70vw"}},r.a.createElement("a",{href:"tel:+91 9066 339 217",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(E.f,{style:{height:"10vh",width:"10vw",color:"gray",textDecoration:"none"}})),r.a.createElement("a",{href:"https://www.linkedin.com/in/puneeth-p-861095146/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(E.e,{style:{height:"10vh",width:"10vw",color:"#0095ff",textDecoration:"none"}})),r.a.createElement("a",{href:"mailto: puneeth1996trainer@gmail.com?cc=puneeth1996p@gmail.com",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(F.a,{style:{height:"10vh",width:"10vw",color:"red",textDecoration:"none"}}))))))}}]),a}(r.a.Component),W=a(19),q=a.n(W),U=a(24);var Q=function(e){var t=e.textArr.map(function(e,t){return r.a.createElement("span",{key:t},e)});return r.a.createElement(k.a,{className:"bg-transparent jumbotron-fluid p-0"},r.a.createElement(h.a,{fluid:!0},r.a.createElement(b.a,{className:"justify-content-center py-5"},r.a.createElement(f.a,{md:8,sm:12},e.title&&r.a.createElement("h3",{className:"display-1 font-weight-bolder",style:{fontSize:"8vw",marginLeft:"5vw"}},e.title),r.a.createElement("h4",{className:"display-4 font-weight-light py-5",style:{fontSize:"5vw",marginLeft:"5vw"}},"Lets constanly keep","  ",r.a.createElement(y.a,null,t),"  ","in all aspects of life.")))))},V=a(147),G=a(142),$=a(80),Y=a(144),K=a(146),X=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={loading:!0,blogs:[],pgNumber:1,search:""},e.pageChanged_blog=function(t){var a=parseInt(t.target.text);e.setState({pgNumber:a})},e.updateSearch=function(t){e.setState({search:t.target.value.substr(0,25)})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(U.a)(q.a.mark(function e(){var t,a;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"http://thepuneeth1996p.tech/restAPIa/blog/readAll.php",e.next=3,fetch("http://thepuneeth1996p.tech/restAPIa/blog/readAll.php");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({blogs:a.Blogs_data,loading:!1});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){for(var e=this,t=this.state.blogs.filter(function(t){return-1!==t.card_heading.toLowerCase().indexOf(e.state.search.toLowerCase())}),a=this.state.pgNumber,n=[],l=Math.ceil(t.length/9),i=1;i<=l;i++)n.push(r.a.createElement(V.a.Item,{key:i,active:i===a},i));var c=t.slice(9*(a-1),9*a);return r.a.createElement("div",null,r.a.createElement(Q,{title:this.props.title,textArr:this.props.subTitle}),r.a.createElement(G.a,{inline:!0,style:{margin:"0 0 10vh 25vw"}},r.a.createElement($.a,{type:"text",placeholder:"Search",value:this.state.search,onChange:this.updateSearch,className:"mr-sm-2",style:{width:"50%"}})),this.state.loading||!this.state.blogs.length?r.a.createElement("div",null,"loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement(Y.a,{style:{marginLeft:"10vw",marginRight:"5vw"}},c.map(function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{key:t},r.a.createElement(K.a,null,r.a.createElement(K.a.Img,{variant:"top",src:e.card_image}),r.a.createElement(K.a.Body,null,r.a.createElement(K.a.Title,null,e.card_heading),r.a.createElement(K.a.Subtitle,{className:"mb-2 text-muted"},e.blog_type),r.a.createElement(K.a.Text,null,e.card_description),r.a.createElement(u.b,{to:"/blogs/".concat(e.blog_id)},"Read it Completly"),r.a.createElement("br",null),r.a.createElement(u.b,{to:"/patreon"},"Patreon")),r.a.createElement(K.a.Footer,null,r.a.createElement("small",{className:"text-muted"},e.date_added)))))})),r.a.createElement(V.a,{style:{marginLeft:"10vw",marginRight:"5vw"},size:"lg",onClick:this.pageChanged_blog},n)))}}]),a}(n.Component);a(139);var Z=function(e){return r.a.createElement("div",null,r.a.createElement("section",{class:"page_404"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-sm-12 "},r.a.createElement("div",{class:"col-sm-10 col-sm-offset-1  text-center"},r.a.createElement("div",{class:"four_zero_four_bg"},r.a.createElement("h1",{class:"text-center "},"404")),r.a.createElement("div",{class:"contant_box_404"},r.a.createElement("h3",{class:"h2"},"Look like you're lost"),r.a.createElement("p",null,"the page you are looking for not avaible!"),r.a.createElement("a",{href:"/",class:"link_404"},"Go to Home"))))))))},ee=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(U.a)(q.a.mark(function e(){return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.getData();case 1:case"end":return e.stop()}},e)})),n.getData=Object(U.a)(q.a.mark(function e(){var t,a;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).set("blog_id",n.props.match.params.string),e.next=4,B.a.post("http://thepuneeth1996p.tech/restAPIa/blog/readOne.php",t,{headers:{"Content-Type":"multipart/form-data"}});case 4:(a=e.sent).data?n.setState({blogData:a.data.Blog_data_single,successMessage:"True"}):n.setState({blogData:[],successMessage:"False"});case 6:case"end":return e.stop()}},e)})),n.state={blogData:[],successMessage:""},n}return Object(o.a)(a,[{key:"render",value:function(){return console.log(this.state.blogData),r.a.createElement("div",null,this.state.successMessage?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{style:{margin:"5vh 0 5vh 15vw"}},this.state.blogData.card_heading),r.a.createElement("h5",{style:{margin:"0 0 5vh 15vw"}},this.state.blogData.card_description),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.blogData.blog_info},style:{margin:"5vh 15vw 5vh 15vw"}})):r.a.createElement(Z,null))}}]),a}(n.Component),te=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/blogs",render:function(t){return r.a.createElement(X,Object.assign({title:e.props.title,subTitle:e.props.subTitle},t))}}),r.a.createElement(p.a,{path:"/blogs/:string",component:ee}))}}]),a}(n.Component),ae=a(81),ne=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={loading:!0,donations:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(U.a)(q.a.mark(function e(){var t,a;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"http://thepuneeth1996p.tech/restAPIa/donation/readAll.php",e.next=3,fetch("http://thepuneeth1996p.tech/restAPIa/donation/readAll.php");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({donations:a.Donations,loading:!1});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.donations&&this.state.donations.length;return r.a.createElement("div",{style:{margin:"0 7.5vw",fontSize:"1.25em"}},r.a.createElement(ae.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Dated"))),r.a.createElement("tbody",null,e&&this.state.donations.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.userName),r.a.createElement("td",null,e.Amount),r.a.createElement("td",null,e.dated.substr(0,e.dated.indexOf(" "))))}))))}}]),a}(n.Component),re=a(59),le=a(84),ie=a(82),ce=a.n(ie),oe=a(83),se=a.n(oe);var me=function(e){return r.a.createElement("div",null,r.a.createElement(S,{title:e.title}),r.a.createElement(_,null,r.a.createElement("p",{style:{fontSize:"1.5rem"}},"Donations for me means alot of appreciation and reward for the work that I post here.")),r.a.createElement(h.a,{style:{marginLeft:"15vw"}},r.a.createElement(b.a,null,r.a.createElement(f.a,{xs:6,md:4},r.a.createElement(re.a,{src:ce.a,style:{height:"25vh"},rounded:!0})),r.a.createElement(f.a,{xs:6,md:4},r.a.createElement(re.a,{src:se.a,style:{height:"25vh",width:"30vw"},rounded:!0})))),r.a.createElement(_,null,r.a.createElement("p",{style:{fontSize:"3em"}},"Big Shout Outs ",r.a.createElement(le.a,null)," ")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(ne,null))},ue=a(145),pe=a(85),he=a.n(pe),de=a(86),ge=a.n(de),be=a(87),fe=a.n(be),Ee=a(88),ve=a.n(Ee),ye=a(89),we=a.n(ye),ke=a(90),Se=a.n(ke),je=a(91),xe=a.n(je),Te=a(92),Ae=a.n(Te),Ne=a(93),Oe=a.n(Ne),Ce=a(94),Pe=a.n(Ce),Le=a(95),Me=a.n(Le),Re=a(96),De=a.n(Re),_e=a(97),ze=a.n(_e),Je=a(98),Ie=a.n(Je),Be=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).pageChanged=function(e){var t=parseInt(e.target.text);n.setState({pageNumber:t})},n.updateSearch=function(e){n.setState({search:e.target.value.substr(0,25)})},n.state={items:[{id:0,title:"EporiumUSA Ecom Website",subTitle:"This was a website build using HTML CSS JS and PHP as the Server Side Langauge.",imgSrc:he.a,link:"http://eporiumusa.com/",feature:["PHP","JS","Front End","MySQL"],dataAdded:"Made on 12 Feb 2020"},{id:1,title:"Drone Makers - Wordpress built",subTitle:"This was my first website after my Engeneering, trying to market Drone with website.",imgSrc:ge.a,link:"https://puneethskingstongq.000webhostapp.com/",feature:["Word-Press"],dataAdded:"Made on November 2017"},{id:2,title:"React Mini Chat App",subTitle:"This is very simple chat, should be improving it with persistance, backend, SOCKETS to have that real feel...The code https://github.com/Puneeth1996/chat_intermediate",imgSrc:fe.a,link:"https://dazzling-hopper-c995fe.netlify.com/",feature:["ReactJS","Javascript"],dataAdded:"Made on Sept 2018"},{id:3,title:"Meal Planner App",subTitle:"A react meal planner app that is built with react and with help of the api.I did learn it when taking short Reactjs Program with Udacity.",imgSrc:ve.a,link:"https://eloquent-ardinghelli-0935f8.netlify.com/",feature:["ReactJS","Javascript"],dataAdded:"Made on June 2018"},{id:4,title:"City Tours Planner App",subTitle:"A react city tours planner app which is built using bootstrap.",imgSrc:we.a,link:"https://flamboyant-mccarthy-795ac2.netlify.com",feature:["ReactJS","Javascript"],dataAdded:"Made on December 2018"},{id:5,title:"Tech Store Ecom App",subTitle:"A fully blown React Ecomm Project built using Contenful Backend.",imgSrc:Se.a,link:"https://serene-austin-5b971c.netlify.com/",feature:["ReactJS","Javascript","Contentfull Backend Admin"],dataAdded:"Made on Jan 2019"},{id:5,title:"Guest List",subTitle:"A CRUD app with React",imgSrc:xe.a,link:"https://vigorous-kepler-b8d8a1.netlify.com/",feature:["ReactJS","Javascript","CURD Operations"],dataAdded:"Made on October 2018"},{id:6,title:"React Weather Map",subTitle:"React Weather Map with api for any given country and state",imgSrc:Ae.a,link:"https://agitated-euler-200e23.netlify.com/",feature:["ReactJS","Javascript","Scattered Plot - D3.js","API"],dataAdded:"Made on Dec 2018"},{id:7,title:"React Todo Project And User Planner App",subTitle:"React Weather Map with api for any given country and state",imgSrc:Oe.a,link:"https://reverent-roentgen-06775e.netlify.com/",feature:["ReactJS","Javascript","Antdesign","Persistance With Loacal Storage "],dataAdded:"Made on Feb 2019"},{id:8,title:"Robot Friends - Contact Diary | React App",subTitle:"React App that can be used to store all the contact.",imgSrc:Pe.a,link:"https://puneeth1996.github.io/contact-friendly-zombies/",feature:["ReactJS","Javascript","Flex-box"],dataAdded:"Made on Feb 2020"},{id:9,title:"Face Recognization React App",subTitle:"React Project with Clarify API For Face Recognization.",imgSrc:Me.a,link:"https://gaze-reco.herokuapp.com/",feature:["ReactJS","Javascript","Clarify API","ML"],dataAdded:"Made on Mar 2020"},{id:10,title:"URL Shortner As Service - MERN App",subTitle:"React Project with simple Node Express Server Connected to MongoDB Atlas Cloud DB.",imgSrc:De.a,link:"https://damp-meadow-64348.herokuapp.com/",feature:["ReactJS","Javascript","ExpressJS","Nodejs","MongoDB","Data Structures & Alogrithm"],dataAdded:"Made on Apr 2020"},{id:11,title:"Retail CLub Ecom Website",subTitle:"Another Ecom Project Made PHP Stack and Mysql.",imgSrc:ze.a,link:"https://fruitsnveggies.000webhostapp.com/public",feature:["PHP","JS","Front End","MySQL"],dataAdded:"Made on Sept 2020"},{id:12,title:"Count Down Timer - Vanilla JS",subTitle:"A Simple JS build of Count Down Timmer.",imgSrc:Ie.a,link:"https://count-down-timmer.netlify.app/",feature:["Vanilla JS","HTML","Bootstrap"],dataAdded:"Made on Oct 2020"}],pageNumber:1,search:""},n}return Object(o.a)(a,[{key:"render",value:function(){for(var e=this,t=this.state.items.filter(function(t){return-1!==t.title.toLowerCase().indexOf(e.state.search.toLowerCase())}),a=this.state.pageNumber,n=[],l=Math.ceil(t.length/6),i=1;i<=l;i++)n.push(r.a.createElement(V.a.Item,{key:i,active:i===a},i));var c=t.slice(6*(a-1),6*a);return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{inline:!0,style:{margin:"0 0 10vh 25vw"}},r.a.createElement($.a,{type:"text",placeholder:"Search",value:this.state.search,onChange:this.updateSearch,className:"mr-sm-2",style:{width:"50%"}})),r.a.createElement(Y.a,{style:{marginLeft:"5vw",marginRight:"5vw"}},c.map(function(e,t){return r.a.createElement(K.a,{key:e.id,style:{marginLeft:"1vw",marginRight:"1vw"}},r.a.createElement(K.a.Img,{variant:"top",src:e.imgSrc}),r.a.createElement(K.a.Body,null,r.a.createElement(K.a.Title,null,e.title),r.a.createElement(K.a.Text,null,e.subTitle),e.feature.map(function(e,t){return r.a.createElement(ue.a,{key:t,variant:"secondary",className:"m-2"},e)}),r.a.createElement(K.a.Text,null,r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"here"))),r.a.createElement(K.a.Footer,null,r.a.createElement("small",{className:"text-muted"},e.dataAdded)))})),r.a.createElement(V.a,{style:{marginLeft:"5vw",marginRight:"5vw"},size:"lg",onClick:this.pageChanged},n))}}]),a}(n.Component);var Fe=function(e){return r.a.createElement("div",null,r.a.createElement(S,{title:e.title,subTitle:e.subTitle,text:e.text}),r.a.createElement(Be,null))},He=a(37),We=a(45),qe=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e={border:"2px solid gold",borderRadius:"5vw",padding:"10vh 5vw",margin:"10vh 5vw",backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9WRftzYx_T1UC3bX9QhvNhTfnHr-6JEV_5g&usqp=CAU')",backgroundRepeat:"no-repeat",backgroundSize:"75vw 20vh",backgroundPosition:"center"};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:e},r.a.createElement("h3",{style:{fontSize:"2.5vw",marginTop:"0.5vh"}},"Complete Python Training"),r.a.createElement("h3",{style:{fontSize:"2.5vw",marginTop:"3vh"}},"$100(2months duration, 30Hrs). In-person Online class"),r.a.createElement("div",{style:{fontSize:"1.75vw",marginTop:"5vh"}},"Learn all the major topics in python starting from basic and all the way up to object oriented technique",r.a.createElement("br",null),"Learn by building projects using Database like Sql, Networking Application with Sockets, Visualization Libraries Like Matplotlib, Web Scrapping and many more",r.a.createElement("br",null),"Hope to see you in this amazing course, its a data driven world and python is the exact vehicle that you should choose to go about solving large scale data driven problems."),r.a.createElement(He.a,{variant:"info",style:{margin:"3vh 0 0 0.5vw"}},r.a.createElement("a",{href:"mailto: puneeth1996trainer@gmail.com?cc=puneeth1996p@gmail.com",target:"_blank",rel:"noopener noreferrer",style:{color:"black",textDecoration:"none"}}," ",r.a.createElement(We.a,{style:{width:25,height:25}})," Inquire "))),r.a.createElement("div",{style:e},r.a.createElement("h3",{style:{fontSize:"2.5vw",marginTop:"0.5vh"}},"Complete Python Training"),r.a.createElement("h3",{style:{fontSize:"2.5vw",marginTop:"3vh"}},"$100(2months duration, 30Hrs). In-person Online class"),r.a.createElement("div",{style:{fontSize:"1.75vw",marginTop:"5vh"}},"Learn all the major topics in python starting from basic and all the way up to object oriented technique",r.a.createElement("br",null),"Learn by building projects using Database like Sql, Networking Application with Sockets, Visualization Libraries Like Matplotlib, Web Scrapping and many more",r.a.createElement("br",null),"Hope to see you in this amazing course, its a data driven world and python is the exact vehicle that you should choose to go about solving large scale data driven problems."),r.a.createElement(He.a,{variant:"info",style:{margin:"3vh 0 0 0.5vw"}},r.a.createElement("a",{href:"mailto: puneeth1996trainer@gmail.com?cc=puneeth1996p@gmail.com",target:"_blank",rel:"noopener noreferrer",style:{color:"black",textDecoration:"none"}}," ",r.a.createElement(We.a,{style:{width:25,height:25}})," Inquire "))),r.a.createElement("div",{style:e},r.a.createElement("h3",{style:{fontSize:"2.5vw",marginTop:"0.5vh"}},"Complete Python Training"),r.a.createElement("h3",{style:{fontSize:"2.5vw",marginTop:"3vh"}},"$100(2months duration, 30Hrs). In-person Online class"),r.a.createElement("div",{style:{fontSize:"1.75vw",marginTop:"5vh"}},"Learn all the major topics in python starting from basic and all the way up to object oriented technique",r.a.createElement("br",null),"Learn by building projects using Database like Sql, Networking Application with Sockets, Visualization Libraries Like Matplotlib, Web Scrapping and many more",r.a.createElement("br",null),"Hope to see you in this amazing course, its a data driven world and python is the exact vehicle that you should choose to go about solving large scale data driven problems."),r.a.createElement(He.a,{variant:"info",style:{margin:"3vh 0 0 0.5vw"}},r.a.createElement("a",{href:"mailto: puneeth1996trainer@gmail.com?cc=puneeth1996p@gmail.com",target:"_blank",rel:"noopener noreferrer",style:{color:"black",textDecoration:"none"}}," ",r.a.createElement(We.a,{style:{width:25,height:25}})," Inquire "))))}}]),a}(n.Component),Ue=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={loading:!0,student:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(U.a)(q.a.mark(function e(){var t,a;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"http://thepuneeth1996p.tech/restAPIa/student/readAll.php",e.next=3,fetch("http://thepuneeth1996p.tech/restAPIa/student/readAll.php");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({student:a.Students,loading:!1});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.student&&this.state.student.length;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginTop:"20vh"}},r.a.createElement("h4",{className:"display-1 font-weight-bolder",style:{fontSize:"5vw",marginLeft:"12vw"}},"Wall Of Fame"),r.a.createElement("h4",{className:"display-1 font-weight-bolder",style:{fontSize:"5vw",marginLeft:"20vw"}},"Respectfull Honorees"),r.a.createElement("div",{style:{marginBotton:"20vh"}},e&&this.state.student.map(function(e,t){return r.a.createElement(He.a,{variant:"light",key:t,style:{backgroundColor:"#cecece",margin:"2vh 1vw"}},e.userName," ",r.a.createElement(ue.a,{variant:"light"},e.studentid))}))))}}]),a}(n.Component);var Qe=function(e){return r.a.createElement("div",null,r.a.createElement(S,{title:e.title,subTitle:e.subTitle}),r.a.createElement(qe,null),r.a.createElement(Ue,null))},Ve=a(101),Ge=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={title:"Puneeth",home:{subTitle:["Be Thankfull To Everything","Always Uncomplaint","Stay On That Grind","Strive For Improvement","Be Kind & Sympathetic","Be Relentless"]},about:{title:"About Me"},projects:{title:"All My Projects",subTitle:"Projects that make a difference",text:"Checkout my projects below"},blogs:{title:"Blogs Page",subTitle:["Learning","Correcting","Improving","Helping","Enjoying"]},patreon:{title:"Patreon Page"},trainings:{title:"iTeach",subTitle:"Looook out, you can unlock the superhuman potential!"},contact:{title:"Contact Page",subTitle:["Let's Talk","Let's Collabrate ","Let's Discuss","Let's Start A Conversation","Let's Get On A Chat","Let's Build Together","Ask Questions"]}},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(u.a,null,r.a.createElement(h.a,{className:"p-0",fluid:!0},r.a.createElement(d.a,{className:"border-bottom",bg:"transparent",expand:"lg"},r.a.createElement(d.a.Brand,null,r.a.createElement("a",{href:"/",style:{color:"#00000080",textDecoration:"none"}},r.a.createElement(Ve.a,{color:"#61dafb",className:"react-icon"}),this.state.title)),r.a.createElement(d.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),r.a.createElement(d.a.Collapse,{id:"navbar-toggle"},r.a.createElement(g.a,{className:"ml-auto"},r.a.createElement(u.b,{className:"nav-link",to:"/"},"Home"),r.a.createElement(u.b,{className:"nav-link",to:"/about"},"About"),r.a.createElement(u.b,{className:"nav-link",to:"/projects"},"Projects"),r.a.createElement(u.b,{className:"nav-link",to:"/trainings"},"My Trainings"),r.a.createElement(u.b,{className:"nav-link",to:"/blogs"},"Blogs"),r.a.createElement(u.b,{className:"nav-link",to:"/patreon"},"Patreon"),r.a.createElement(u.b,{className:"nav-link",to:"/contact"},"Contact")))),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/",exact:!0,render:function(){return r.a.createElement(D,{subTitle:e.state.home.subTitle})}}),r.a.createElement(p.a,{path:"/about",render:function(){return r.a.createElement(z,{title:e.state.about.title})}}),r.a.createElement(p.a,{path:"/projects",render:function(){return r.a.createElement(Fe,{title:e.state.projects.title,subTitle:e.state.projects.subTitle,text:e.state.projects.text})}}),r.a.createElement(p.a,{path:"/trainings",render:function(){return r.a.createElement(Qe,{title:e.state.trainings.title,subTitle:e.state.trainings.subTitle})}}),r.a.createElement(p.a,{path:"/blogs",render:function(){return r.a.createElement(te,{title:e.state.blogs.title,subTitle:e.state.blogs.subTitle})}}),r.a.createElement(p.a,{path:"/patreon",render:function(){return r.a.createElement(me,{title:e.state.patreon.title,subTitle:e.state.patreon.subTitle})}}),r.a.createElement(p.a,{path:"/contact",render:function(){return r.a.createElement(H,{title:e.state.contact.title,subTitle:e.state.contact.subTitle})}}),r.a.createElement(p.a,{render:function(){return r.a.createElement(Z,null)}})),r.a.createElement(v,null)))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(140);i.a.render(r.a.createElement(Ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},76:function(e,t,a){e.exports=a.p+"static/media/projects.29e05b58.jpg"},77:function(e,t,a){e.exports=a.p+"static/media/myimg.4cdd7091.jpg"},78:function(e,t,a){e.exports=a.p+"static/media/contactme.954e00db.jpg"},82:function(e,t,a){e.exports=a.p+"static/media/patreon.f8cc8d4b.jpg"},83:function(e,t,a){e.exports=a.p+"static/media/patreon2.8a16b68c.png"},85:function(e,t,a){e.exports=a.p+"static/media/eporiumusa.d6abe886.png"},86:function(e,t,a){e.exports=a.p+"static/media/dronemakers.c72f5b31.png"},87:function(e,t,a){e.exports=a.p+"static/media/mini-chat-app.97e5a8ec.png"},88:function(e,t,a){e.exports=a.p+"static/media/mealPlanner.14cd50e3.png"},89:function(e,t,a){e.exports=a.p+"static/media/city-tours-planner.1ae8ff90.png"},90:function(e,t,a){e.exports=a.p+"static/media/techStoreEcom.24d1357b.png"},91:function(e,t,a){e.exports=a.p+"static/media/guestList.4495f110.png"},92:function(e,t,a){e.exports=a.p+"static/media/reactWeatherApp.b31ef431.png"},93:function(e,t,a){e.exports=a.p+"static/media/userTodo.bae35555.png"},94:function(e,t,a){e.exports=a.p+"static/media/roboFriends.c0d9b0c0.png"},95:function(e,t,a){e.exports=a.p+"static/media/faceReco.980675b3.png"},96:function(e,t,a){e.exports=a.p+"static/media/urlshortner.f8c158c7.png"},97:function(e,t,a){e.exports=a.p+"static/media/retailClub.142bee98.png"},98:function(e,t,a){e.exports=a.p+"static/media/countdowntimmerJS.606035ca.png"}},[[103,1,2]]]);
//# sourceMappingURL=main.333c6871.chunk.js.map