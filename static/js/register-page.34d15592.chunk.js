(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[5],{183:function(e,t,a){"use strict";a.r(t);var n=a(12),i=a(26),r=a(51),s=a(52),o=a(54),l=a(53),h=a(0),c=a(14),d=a(184),p=a(142),m=a(17),b=a(2),u={form:{width:320}},j=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,o=new Array(s),l=0;l<s;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={name:"",email:"",password:""},e.handleSubmit=function(t){t.preventDefault(),e.props.onRegister(Object(i.a)({},e.state)),e.setState({name:"",email:"",password:""})},e.handleChange=function(t){var a=t.target,i=a.name,r=a.value;e.setState(Object(n.a)({},i,r))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.password;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Register page"}),Object(b.jsxs)("form",{onSubmit:this.handleSubmit,style:u.form,children:[Object(b.jsx)(d.a,{id:"outlined-basic",label:"Name",variant:"outlined",name:"name",type:"text",value:t,onChange:this.handleChange,placeholder:"Enter name",style:{width:"400px",marginBottom:"10px"}}),Object(b.jsx)(d.a,{id:"outlined-basic",label:"Email",variant:"outlined",name:"email",type:"email",value:a,onChange:this.handleChange,placeholder:"Enter email",style:{width:"400px",marginBottom:"10px"}}),Object(b.jsx)(d.a,{id:"outlined-basic",label:"Password",variant:"outlined",name:"password",type:"password",value:n,onChange:this.handleChange,placeholder:"Enter password",style:{width:"400px",marginBottom:"10px"}}),Object(b.jsx)(p.a,{variant:"contained",color:"primary",style:{width:"400px"},type:"submit",children:"Register"})]})]})}}]),a}(h.Component);t.default=Object(c.b)(null,{onRegister:m.a.register})(j)}}]);
//# sourceMappingURL=register-page.34d15592.chunk.js.map