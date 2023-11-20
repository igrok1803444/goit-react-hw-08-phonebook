"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[643],{5643:function(e,r,i){i.r(r);var a=i(824),n=i(5350),l=i(7438),d=i(7236),o=i(9055),s=i(9434),t=i(5734),u=i(184);r.default=function(){var e=(0,s.I0)();return(0,u.jsx)(a.xu,{maxWidth:900,margin:"0 auto",marginTop:"24px",padding:"8px 0",children:(0,u.jsx)("form",{onSubmit:function(r){r.preventDefault();var i=r.currentTarget.name.value,a=r.currentTarget.email.value,n=r.currentTarget.password.value;e((0,t.z2)({name:i,email:a,password:n})),r.currentTarget.reset()},children:(0,u.jsxs)(n.NI,{width:"230px",margin:"0 auto",padding:"12px",border:"1px solid green",borderRadius:"16px",children:[(0,u.jsx)(l.l,{htmlFor:"name",children:"Name:"}),(0,u.jsx)(d.I,{id:"name",type:"text",name:"name",_focusVisible:{borderColor:"green",boxShadow:"0 0 0 1px green"}}),(0,u.jsx)(l.l,{htmlFor:"email",children:"Email:"}),(0,u.jsx)(d.I,{id:"email",type:"email",name:"email",_focusVisible:{borderColor:"green",boxShadow:"0 0 0 1px green"}}),(0,u.jsx)(l.l,{htmlFor:"password",children:"Password:"}),(0,u.jsx)(d.I,{id:"password",type:"password",name:"password",_focusVisible:{borderColor:"green",boxShadow:"0 0 0 1px green"}}),(0,u.jsx)(o.z,{type:"submit",margin:"0 auto",marginTop:"8px",display:"block",variant:"outline",colorScheme:"green",children:"Register now"})]})})})}},5350:function(e,r,i){i.d(r,{NI:function(){return q},NJ:function(){return k},e:function(){return Z}});var a=i(1413),n=i(4925),l=i(9439),d=i(9886),o=i(4591),s=i(5597),t=i(6516),u=i(2996),c=i(5812),m=i(6992),v=i(2791),p=i(184),h=["id","isRequired","isInvalid","isDisabled","isReadOnly"],f=["getRootProps","htmlProps"],b=(0,d.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),x=(0,l.Z)(b,2),g=x[0],Z=x[1],I=(0,d.k)({strict:!1,name:"FormControlContext"}),y=(0,l.Z)(I,2),R=y[0],k=y[1];var q=(0,s.G)((function(e,r){var i=(0,t.jC)("Form",e),d=function(e){var r=e.id,i=e.isRequired,d=e.isInvalid,s=e.isDisabled,t=e.isReadOnly,u=(0,n.Z)(e,h),c=(0,v.useId)(),p=r||"field-".concat(c),f="".concat(p,"-label"),b="".concat(p,"-feedback"),x="".concat(p,"-helptext"),g=(0,v.useState)(!1),Z=(0,l.Z)(g,2),I=Z[0],y=Z[1],R=(0,v.useState)(!1),k=(0,l.Z)(R,2),q=k[0],F=k[1],N=(0,v.useState)(!1),_=(0,l.Z)(N,2),P=_[0],j=_[1],C=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({id:x},e),{},{ref:(0,o.lq)(r,(function(e){e&&F(!0)}))})}),[x]),T=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({},e),{},{ref:r,"data-focus":(0,m.PB)(P),"data-disabled":(0,m.PB)(s),"data-invalid":(0,m.PB)(d),"data-readonly":(0,m.PB)(t),id:void 0!==e.id?e.id:f,htmlFor:void 0!==e.htmlFor?e.htmlFor:p})}),[p,s,P,d,t,f]),w=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({id:b},e),{},{ref:(0,o.lq)(r,(function(e){e&&y(!0)})),"aria-live":"polite"})}),[b]),B=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)((0,a.Z)({},e),u),{},{ref:r,role:"group","data-focus":(0,m.PB)(P),"data-disabled":(0,m.PB)(s),"data-invalid":(0,m.PB)(d),"data-readonly":(0,m.PB)(t)})}),[u,s,P,d,t]),S=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({},e),{},{ref:r,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!i,isInvalid:!!d,isReadOnly:!!t,isDisabled:!!s,isFocused:!!P,onFocus:function(){return j(!0)},onBlur:function(){return j(!1)},hasFeedbackText:I,setHasFeedbackText:y,hasHelpText:q,setHasHelpText:F,id:p,labelId:f,feedbackId:b,helpTextId:x,htmlProps:u,getHelpTextProps:C,getErrorMessageProps:w,getRootProps:B,getLabelProps:T,getRequiredIndicatorProps:S}}((0,u.Lr)(e)),s=d.getRootProps,b=(d.htmlProps,(0,n.Z)(d,f)),x=(0,m.cx)("chakra-form-control",e.className);return(0,p.jsx)(R,{value:b,children:(0,p.jsx)(g,{value:i,children:(0,p.jsx)(c.m.div,(0,a.Z)((0,a.Z)({},s({},r)),{},{className:x,__css:i.container}))})})}));q.displayName="FormControl",(0,s.G)((function(e,r){var i=k(),n=Z(),l=(0,m.cx)("chakra-form__helper-text",e.className);return(0,p.jsx)(c.m.div,(0,a.Z)((0,a.Z)({},null==i?void 0:i.getHelpTextProps(e,r)),{},{__css:n.helperText,className:l}))})).displayName="FormHelperText"},7438:function(e,r,i){i.d(r,{l:function(){return v}});var a=i(1413),n=i(4925),l=i(5350),d=i(5597),o=i(6516),s=i(2996),t=i(5812),u=i(6992),c=i(184),m=["className","children","requiredIndicator","optionalIndicator"],v=(0,d.G)((function(e,r){var i,d=(0,o.mq)("FormLabel",e),v=(0,s.Lr)(e),h=(v.className,v.children),f=v.requiredIndicator,b=void 0===f?(0,c.jsx)(p,{}):f,x=v.optionalIndicator,g=void 0===x?null:x,Z=(0,n.Z)(v,m),I=(0,l.NJ)(),y=null!=(i=null==I?void 0:I.getLabelProps(Z,r))?i:(0,a.Z)({ref:r},Z);return(0,c.jsxs)(t.m.label,(0,a.Z)((0,a.Z)({},y),{},{className:(0,u.cx)("chakra-form__label",v.className),__css:(0,a.Z)({display:"block",textAlign:"start"},d),children:[h,(null==I?void 0:I.isRequired)?b:g]}))}));v.displayName="FormLabel";var p=(0,d.G)((function(e,r){var i=(0,l.NJ)(),n=(0,l.e)();if(!(null==i?void 0:i.isRequired))return null;var d=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(t.m.span,(0,a.Z)((0,a.Z)({},null==i?void 0:i.getRequiredIndicatorProps(e,r)),{},{__css:n.requiredIndicator,className:d}))}));p.displayName="RequiredIndicator"},7236:function(e,r,i){i.d(r,{I:function(){return f}});var a=i(1413),n=i(4925),l=i(5350),d=i(6992),o=["isDisabled","isInvalid","isReadOnly","isRequired"],s=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function t(e){var r=function(e){var r,i,o,t=(0,l.NJ)(),u=e.id,c=e.disabled,m=e.readOnly,v=e.required,p=e.isRequired,h=e.isInvalid,f=e.isReadOnly,b=e.isDisabled,x=e.onFocus,g=e.onBlur,Z=(0,n.Z)(e,s),I=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==t?void 0:t.hasFeedbackText)&&(null==t?void 0:t.isInvalid)&&I.push(t.feedbackId);(null==t?void 0:t.hasHelpText)&&I.push(t.helpTextId);return(0,a.Z)((0,a.Z)({},Z),{},{"aria-describedby":I.join(" ")||void 0,id:null!=u?u:null==t?void 0:t.id,isDisabled:null!=(r=null!=c?c:b)?r:null==t?void 0:t.isDisabled,isReadOnly:null!=(i=null!=m?m:f)?i:null==t?void 0:t.isReadOnly,isRequired:null!=(o=null!=v?v:p)?o:null==t?void 0:t.isRequired,isInvalid:null!=h?h:null==t?void 0:t.isInvalid,onFocus:(0,d.v0)(null==t?void 0:t.onFocus,x),onBlur:(0,d.v0)(null==t?void 0:t.onBlur,g)})}(e),i=r.isDisabled,t=r.isInvalid,u=r.isReadOnly,c=r.isRequired,m=(0,n.Z)(r,o);return(0,a.Z)((0,a.Z)({},m),{},{disabled:i,readOnly:u,required:c,"aria-invalid":(0,d.Qm)(t),"aria-required":(0,d.Qm)(c),"aria-readonly":(0,d.Qm)(u)})}var u=i(5597),c=i(6516),m=i(2996),v=i(5812),p=i(184),h=["htmlSize"],f=(0,u.G)((function(e,r){var i=e.htmlSize,l=(0,n.Z)(e,h),o=(0,c.jC)("Input",l),s=t((0,m.Lr)(l)),u=(0,d.cx)("chakra-input",e.className);return(0,p.jsx)(v.m.input,(0,a.Z)((0,a.Z)({size:i},s),{},{__css:o.field,ref:r,className:u}))}));f.displayName="Input",f.id="Input"}}]);
//# sourceMappingURL=643.479d8365.chunk.js.map