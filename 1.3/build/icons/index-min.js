/*! kcharts - v1.3 - 2014-01-14 9:48:53 AM
* Copyright (c) 2014 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.3/icons/index",function(t){var l=t.merge,e=t.isArray,r=[10,6],i="M",n="L",a="Z",s={trianglePath:function(t,l,e){var r=Math.sqrt(3)/3*e,s=1/6*e,o=[t,l-2/3*e+s],h=[t-r,l+1/3*e+s],c=[t+r,l+1/3*e+s],x=[i,o[0],o[1],n,h[0],h[1],n,c[0],c[1],a];return x},lineThrouth:function(t,l,e,r){var n=r.paper,a=r.size[0];return n.path([i,t-1.1*a*e,l,t+1.1*a*e,l].join(","))}},o={rect:function(t,e,i){var n=i.width||r[0],a=i.height||r[1],s=t-n/2,o=e-a/2,h=i.paper.rect(s,o,n,a).attr(l({},i.attrs));return h},square:function(t,e,i){return this.rect(t,e,l({width:r[1]},i))},linesquare:function(t,l,e){var i=this.square(t,l,e),n=r[1],a=e.paper.set();a.push(i);var o=s.lineThrouth(t,l,n,e);return a.push(o),a},diamond:function(t,l,e){var r=this.square(t,l,e).attr("transform","r45");return r},linediamond:function(t,l,e){var i=this.square(t,l,e).attr("transform","r45"),n=r[1],a=e.paper.set();a.push(i);var o=s.lineThrouth(t,l,n,e);return a.push(o),a},circle:function(t,l,e){var i;return i=e.paper.circle(t,l,r[1]/2)},linecircle:function(t,l,e){var i=this.circle(t,l,e),n=r[1],a=e.paper.set();a.push(i);var o=s.lineThrouth(t,l,n,e);return a.push(o),a},triangle:function(t,l,e){var i=r[1],n=s.trianglePath(t,l,i);return e.paper.path(n.join(","))},linetriangle:function(t,l,e){var i=r[1],n=s.trianglePath(t,l,i),a=e.paper.set();a.push(e.paper.path(n.join(",")));var o=s.lineThrouth(t,l,i,e);return a.push(o),a}},h={};for(var c in o)(function(l){var r=o[l];h[l]=function(l,i,n){var a=r.call(o,l,i,n);n.size&&(e(n.size)||(n.size=[n.size,n.size]),a.scale(n.size[0],n.size[1]));var s,h,c=n.attrs||{};return a.clear?(s=a[0],h=a[1],h.attr({stroke:c.fill||"#000","stroke-width":2*n.size[1]})):s=a,s.attr(t.merge({"stroke-width":0},n.attrs)),a}})(c);return h.BASIC=r,h});