!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.Lazyload=e()}(this,function(){"use strict";function t(t){for(var o=0;o<t.length;o++){var A=t[o];e(A)&&(n(A,"img")?A.setAttribute("src",A.getAttribute("data-original")):A.style.backgroundImage="url('"+A.getAttribute("data-original")+"')",A.className=A.className.replace(/(\s|^)lazyload(\s|$)/,""),t.splice(o,1),o--)}}function e(t){var e=t.getBoundingClientRect();return(e.top>=0&&e.left>=0&&e.top)<=(c.innerHeight||l.clientHeight)+parseInt(r)}function n(t,e){return t.nodeName.toLowerCase()===e}function o(){u.on("scrollEnd",function(){d()})}function A(){c.addEventListener?c.addEventListener("scroll",function(){d()}):c.attachEvent?c.attachEvent("onscroll",function(){d()}):c.onscroll=d}var c=window,i=document,l=i.documentElement,a=[],r=0,u=null,s={selector:"",placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"},f={init:function(e,n){s.selector=e||".lazyload",r=(n=n||{}).offset||0,u=n.iscroll||null,this.update(),setTimeout(function(){t(a)},500),u?o():A()},update:function(){var t=s.selector,e=i.querySelectorAll(t),o=s.placeholder;[].slice.call(e).forEach(function(t,e){n(t,"img")&&(t.src=o),a.push(t)})}},d=function(t,e,n,o,A){var c=new Date,i=null;return function(){var l=new Date;clearTimeout(i),l-c<A?i=setTimeout(function(){e.apply(t,n)},o):(e.apply(t,n),c=l)}}(t,t,[a],500,2e3);return f});