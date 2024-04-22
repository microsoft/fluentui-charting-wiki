"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[515],{313:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>d});var a=n(5893),i=n(1151);const r={},l="RFC: Fix 2:1 spacing",t={id:"rfcs/fix-2-to-1-spacing",title:"RFC: Fix 2:1 spacing",description:"Summary",source:"@site/../../docs/rfcs/fix-2-to-1-spacing.md",sourceDirName:"rfcs",slug:"/rfcs/fix-2-to-1-spacing",permalink:"/fluentui-charting-contrib/docs/rfcs/fix-2-to-1-spacing",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bundle Size",permalink:"/fluentui-charting-contrib/docs/BundleSize"},next:{title:"RFC: Fix overlapping bars on continuous axes",permalink:"/fluentui-charting-contrib/docs/rfcs/fix-overlapping-bars-on-continuous-axes"}},c={},d=[{value:"Summary",id:"summary",level:2},{value:"Background",id:"background",level:2},{value:"Problem",id:"problem",level:2},{value:"Proposal",id:"proposal",level:2},{value:"Definitions",id:"definitions",level:3},{value:"Pros and Cons",id:"pros-and-cons",level:2},{value:"Pros",id:"pros",level:3},{value:"Cons",id:"cons",level:3},{value:"Discarded Solutions",id:"discarded-solutions",level:2},{value:"Open Issues",id:"open-issues",level:2}];function m(e){const s={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mo:"mo",mrow:"mrow",ol:"ol",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"rfc-fix-21-spacing",children:"RFC: Fix 2:1 spacing"}),"\n",(0,a.jsx)(s.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(s.p,{children:"This document suggests a way to address issues that came up after the implementation of 2:1 spacing in vertical bar charts with string x-axis. The proposed solution introduces new props that will give users more control over both bar width and spacing within the chart."}),"\n",(0,a.jsx)(s.h2,{id:"background",children:"Background"}),"\n",(0,a.jsxs)(s.p,{children:["The 2:1 spacing feature was added through ",(0,a.jsx)(s.a,{href:"https://github.com/microsoft/fluentui/pull/25838",children:"Pull Request #25838"}),", as per ",(0,a.jsx)(s.a,{href:"https://www.figma.com/file/WOoCs0CmNYZhYl9xXeCGpi/Data-viz-(Archive)?type=design&node-id=21153-80245&mode=design&t=yuXjQl2xGWzQrsK8-4",children:"the design"}),". Following its release in version ",(0,a.jsx)(s.code,{children:"5.16.0"}),", queries from partner teams arose regarding the possibility of disabling or overriding this feature, as they found the previous uniform spacing better suited to their requirements."]}),"\n",(0,a.jsx)(s.h2,{id:"problem",children:"Problem"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:n(7465).Z+"",width:"1933",height:"1054"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"The bars don\u2019t occupy the entire space due to the default bar width of 16px and a fixed 2:1 spacing, often leaving considerable amount of blank space before the first bar and after the last bar. This becomes particularly noticeable when the chart width is large."}),"\n",(0,a.jsx)(s.li,{children:"Additionally, this setup causes unnecessary overlapping of x-axis labels."}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"proposal",children:"Proposal"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(6315).Z+"",children:(0,a.jsx)("img",{src:n(2447).Z,alt:"",width:"500"})})}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["Add optional ",(0,a.jsx)(s.code,{children:"xAxisInnerPadding"}),", ",(0,a.jsx)(s.code,{children:"xAxisOuterPadding"})," props to vertical bar charts.","\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"xAxisInnerPadding"})," controls the space between bars, while ",(0,a.jsx)(s.code,{children:"xAxisOuterPadding"})," controls the space before the first bar and after the last bar."]}),"\n",(0,a.jsxs)(s.li,{children:["These props accept values between 0 and 1, representing a fraction of the ",(0,a.jsx)(s.a,{href:"https://d3js.org/d3-scale/band#band_step",children:"step"}),". These props are particularly relevant when using a string x-axis. For additional information on padding in string axes, see ",(0,a.jsx)(s.a,{href:"https://d3js.org/d3-scale/band#band_paddingInner",children:"Band scales | D3 by Observable"}),"."]}),"\n",(0,a.jsxs)(s.li,{children:["By default, the inner padding is set to 2/3, meaning the space between bars is twice the bar width. This default value is calculated using the formula:","\n",(0,a.jsx)(s.span,{className:"katex-display",children:(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"r"}),(0,a.jsx)(s.mi,{children:"P"}),(0,a.jsx)(s.mi,{children:"a"}),(0,a.jsx)(s.mi,{children:"d"}),(0,a.jsx)(s.mi,{children:"d"}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mi,{children:"g"}),(0,a.jsx)(s.mo,{children:"="}),(0,a.jsxs)(s.mfrac,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mi,{children:"p"}),(0,a.jsx)(s.mi,{children:"a"}),(0,a.jsx)(s.mi,{children:"c"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"B"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"t"}),(0,a.jsx)(s.mi,{children:"w"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mi,{children:"B"}),(0,a.jsx)(s.mi,{children:"a"}),(0,a.jsx)(s.mi,{children:"r"}),(0,a.jsx)(s.mi,{children:"s"})]}),(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mi,{children:"p"}),(0,a.jsx)(s.mi,{children:"a"}),(0,a.jsx)(s.mi,{children:"c"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"B"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"t"}),(0,a.jsx)(s.mi,{children:"w"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mi,{children:"B"}),(0,a.jsx)(s.mi,{children:"a"}),(0,a.jsx)(s.mi,{children:"r"}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mo,{children:"+"}),(0,a.jsx)(s.mi,{children:"b"}),(0,a.jsx)(s.mi,{children:"a"}),(0,a.jsx)(s.mi,{children:"r"}),(0,a.jsx)(s.mi,{children:"W"}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mi,{children:"d"}),(0,a.jsx)(s.mi,{children:"t"}),(0,a.jsx)(s.mi,{children:"h"})]})]})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"innerPadding = {spaceBetweenBars \\over spaceBetweenBars + barWidth}"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"inn"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"er"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"dd"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"in"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mrel",children:"="}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"2.2408em",verticalAlign:"-0.8804em"}}),(0,a.jsx)(s.span,{className:"mord",children:(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mopen nulldelimiter"}),(0,a.jsx)(s.span,{className:"mfrac",children:(0,a.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(s.span,{className:"vlist-r",children:[(0,a.jsxs)(s.span,{className:"vlist",style:{height:"1.3603em"},children:[(0,a.jsxs)(s.span,{style:{top:"-2.314em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"ce"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05017em"},children:"B"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"tw"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"ee"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05017em"},children:"B"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"rs"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"+"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"ba"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"Wi"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"h"})]})]}),(0,a.jsxs)(s.span,{style:{top:"-3.23em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(s.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,a.jsxs)(s.span,{style:{top:"-3.677em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"ce"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05017em"},children:"B"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"tw"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"ee"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05017em"},children:"B"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"rs"})]})]})]}),(0,a.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.8804em"},children:(0,a.jsx)(s.span,{})})})]})}),(0,a.jsx)(s.span,{className:"mclose nulldelimiter"})]})})]})]})]})}),"\n","For a more detailed explanation of how these values were derived, see ",(0,a.jsx)(s.a,{href:"/fluentui-charting-contrib/docs/implementing-2-to-1-spacing",children:"Implementing 2:1 spacing"}),"."]}),"\n",(0,a.jsxs)(s.li,{children:["The default configuration includes some space before the first bar and after the last bar. However, users can opt to eliminate this space by setting the ",(0,a.jsx)(s.code,{children:"xAxisOuterPadding"})," prop to 0."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["Use the existing ",(0,a.jsx)(s.code,{children:"barWidth"})," prop and add an optional ",(0,a.jsx)(s.code,{children:"maxBarWidth"})," prop to vertical bar charts.","\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["The ",(0,a.jsx)(s.code,{children:"barWidth"})," prop takes precedence over the props mentioned above. If not explicitly specified, the bar width will be dynamically adjusted to avoid overlapping while maintaining specified spacing between and around the bars. However, when ",(0,a.jsx)(s.code,{children:"barWidth"})," is provided, it will be respected, potentially compromising padding."]}),"\n",(0,a.jsxs)(s.li,{children:["In cases where the chart width is large, the bar width might become excessively large. To mitigate this, the ",(0,a.jsx)(s.code,{children:"maxBarWidth"})," prop can be utilized to restrict the width of the bars to a specified maximum."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"definitions",children:"Definitions"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Step"})," is the interval between the start of a bar and the start of the next bar."]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"pros-and-cons",children:"Pros and Cons"}),"\n",(0,a.jsx)(s.h3,{id:"pros",children:"Pros"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Add new props and functionalities to vertical bar charts without breaking any existing functionalities, making it a backward compatible change."}),"\n",(0,a.jsx)(s.li,{children:"Provide more options for adjusting bar width and spacing, making the charts suitable for more generic cases."}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"cons",children:"Cons"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Understanding and configuring padding values might be a bit tricky."}),"\n",(0,a.jsx)(s.li,{children:"While the padding functionality is available for a string axis, users may find a lack of similar capabilities for continuous (numeric or date) axes."}),"\n",(0,a.jsx)(s.li,{children:"The padding within a group in grouped vertical bar chart is fixed and can't be customized by users."}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"discarded-solutions",children:"Discarded Solutions"}),"\n",(0,a.jsx)(s.h2,{id:"open-issues",children:"Open Issues"})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},6315:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/files/2-to-1-spacing-fix-flow-ec2d984dbb947871ceed2e6990aac924.drawio"},2447:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/2-to-1-spacing-fix-flow-11782ba19549341217b75d5d6eda2bba.png"},7465:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/2-to-1-spacing-problem-62754d79fefaf4adf991f612b8160979.png"},1151:(e,s,n)=>{n.d(s,{Z:()=>t,a:()=>l});var a=n(7294);const i={},r=a.createContext(i);function l(e){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);