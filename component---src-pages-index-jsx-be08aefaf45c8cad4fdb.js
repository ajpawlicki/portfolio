webpackJsonp([0xc23565d713b7],{89:function(e,t){"use strict";var l={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,r=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,s=u&&u(Object);e.exports=function e(t,c,d){if("string"!=typeof c){if(s){var f=u(c);f&&f!==s&&e(t,f,d)}var p=r(c);o&&(p=p.concat(o(c)));for(var m=0;m<p.length;++m){var h=p[m];if(!(l[h]||n[h]||d&&d[h])){var g=i(c,h);try{a(t,h,g)}catch(e){}}}return t}return t}},406:function(e,t,l){e.exports=l.p+"static/reddit-reader-system-design-diagram.b80de136.png"},407:function(e,t,l){e.exports=l.p+"static/salesforce-compensation-schema-design-diagram.52d79d4b.png"},181:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=l(2),r=n(a),o=l(41),i=n(o);t.default=function(e){var t=e.html,l=e.github,n=e.handleClickToCloseSnippet;return r.default.createElement("div",null,r.default.createElement("h6",null,r.default.createElement("span",null,"Example:"),r.default.createElement("a",{className:i.default.link,style:{float:"right"},href:l,target:"_blank"},"Check out on GitHub")),r.default.createElement("div",{dangerouslySetInnerHTML:{__html:t}}),r.default.createElement("h6",null,r.default.createElement("span",{style:{cursor:"pointer"},onClick:n},"Close"),r.default.createElement("a",{className:i.default.link,style:{float:"right"},href:l,target:"_blank"},"Check out on GitHub")))},e.exports=t.default},182:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=l(2),u=n(i),s=l(181),c=n(s),d=l(41),f=n(d),p=function(e){function t(l){a(this,t);var n=r(this,e.call(this,l));return n.state={renderCodeSnippet:!1},n.handleClickToToggleSnippet=n.handleClickToToggleSnippet.bind(n),n.handleClickToCloseSnippet=n.handleClickToCloseSnippet.bind(n),n}return o(t,e),t.prototype.handleClickToToggleSnippet=function(){this.setState({renderCodeSnippet:!this.state.renderCodeSnippet})},t.prototype.handleClickToCloseSnippet=function(){this.setState({renderCodeSnippet:!1})},t.prototype.render=function(){var e=this.props.skill,t=e.frontmatter,l=e.html,n=t.title,a=t.github;return u.default.createElement("div",null,u.default.createElement("h5",{style:{fontStyle:"italic",cursor:"pointer",display:"inline-block"},className:f.default.title,onClick:this.handleClickToToggleSnippet},n),this.state.renderCodeSnippet?u.default.createElement(c.default,{handleClickToCloseSnippet:this.handleClickToCloseSnippet,github:a,html:l}):null)},t}(u.default.Component);t.default=p,e.exports=t.default},183:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=l(2),r=n(a);t.default=function(e){var t=e.image,l=e.title,n=e.handleClickToCloseImage;return r.default.createElement("div",{id:"image-container"},r.default.createElement("img",{src:t,alt:l,style:{border:"3px solid black",borderRadius:"5px",marginBottom:"0"}}),r.default.createElement("h6",null,r.default.createElement("span",{style:{cursor:"pointer"},onClick:n},"Close")))},e.exports=t.default},184:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=l(2),u=n(i),s=l(183),c=n(s),d=l(41),f=n(d),p=function(e){function t(l){a(this,t);var n=r(this,e.call(this,l));return n.state={renderImage:!1},n.handleClickToToggleImage=n.handleClickToToggleImage.bind(n),n.handleClickToCloseImage=n.handleClickToCloseImage.bind(n),n}return o(t,e),t.prototype.handleClickToToggleImage=function(){this.setState({renderImage:!this.state.renderImage})},t.prototype.handleClickToCloseImage=function(){this.setState({renderImage:!1})},t.prototype.render=function(){var e=this.props,t=e.image,l=e.title;return u.default.createElement("div",null,u.default.createElement("h5",{style:{fontStyle:"italic",cursor:"pointer",display:"inline-block"},className:f.default.title,onClick:this.handleClickToToggleImage},l),this.state.renderImage?u.default.createElement(c.default,{handleClickToCloseImage:this.handleClickToCloseImage,image:t,title:l}):null)},t}(u.default.Component);t.default=p,e.exports=t.default},188:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var a=l(2),r=n(a),o=l(86),i=(n(o),l(269)),u=n(i),s=l(182),c=n(s),d=l(184),f=n(d),p=l(406),m=n(p),h=l(407),g=n(h),y=function(e){var t=e.data.allMarkdownRemark.edges,l=t[0],n=t[1],a=t[2],o=t[3],i=t[4],s=t[5],d=t[6];return r.default.createElement("div",null,r.default.createElement("div",{className:u.default.intro,style:{margin:"3rem auto",maxWidth:"600px",textAlign:"center"}},r.default.createElement("p",null,"Here are a few quick examples to give you an idea of my software engineering skills:")),r.default.createElement("h3",{style:{color:"#4169e1"}},"Front-End"),r.default.createElement("div",null,r.default.createElement(c.default,{skill:l.node}),r.default.createElement(c.default,{skill:n.node}),r.default.createElement(c.default,{skill:a.node})),r.default.createElement("h3",{style:{color:"#4169e1"}},"Back-End"),r.default.createElement("div",null,r.default.createElement(c.default,{skill:o.node}),r.default.createElement(c.default,{skill:i.node}),r.default.createElement(c.default,{skill:s.node})),r.default.createElement("h3",{style:{color:"#4169e1"}},"Tools"),r.default.createElement("div",null,r.default.createElement(c.default,{skill:d.node})),r.default.createElement("h3",{style:{color:"#4169e1"}},"Diagrams"),r.default.createElement("div",null,r.default.createElement(f.default,{image:m.default,title:"System Design"}),r.default.createElement(f.default,{image:g.default,title:"Schema Design"})))};t.default=y;t.query="** extracted graphql fragment **"},269:function(e,t){e.exports={intro:"src-styles----home-page-module---intro---2CqG5",skill:"src-styles----home-page-module---skill---PMJFc"}},41:function(e,t){e.exports={link:"src-styles----link-module---link---3-B2N",title:"src-styles----link-module---title---j0Bhp"}}});
//# sourceMappingURL=component---src-pages-index-jsx-be08aefaf45c8cad4fdb.js.map