(()=>{"use strict";function e(e){return{name:e,todos:[],addTodo(e){this.todos.push(e)},removeTodo(e){const t=this.todos.indexOf(e);-1!==t&&this.todos.splice(t,1)},getTodos(){return this.todos}}}Math.pow(10,8);var t=6e4,n=36e5;function r(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function o(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function a(e,a){var f;r(1,arguments);var g=o(null!==(f=null==a?void 0:a.additionalDigits)&&void 0!==f?f:2);if(2!==g&&1!==g&&0!==g)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var v,p=function(e){var t,n={},r=e.split(i.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?t=r[0]:(n.date=r[0],t=r[1],i.timeZoneDelimiter.test(n.date)&&(n.date=e.split(i.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var o=i.timezone.exec(t);o?(n.time=t.replace(o[1],""),n.timezone=o[1]):n.time=t}return n}(e);if(p.date){var w=function(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:NaN,restDateString:""};var o=r[1]?parseInt(r[1]):null,a=r[2]?parseInt(r[2]):null;return{year:null===a?o:100*a,restDateString:e.slice((r[1]||r[2]).length)}}(p.date,g);v=function(e,t){if(null===t)return new Date(NaN);var n=e.match(u);if(!n)return new Date(NaN);var r=!!n[4],o=c(n[1]),a=c(n[2])-1,i=c(n[3]),d=c(n[4]),s=c(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,d,s)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var o=7*(t-1)+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+o),r}(t,d,s):new Date(NaN);var l=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(m[t]||(h(e)?29:28))}(t,a,i)&&function(e,t){return t>=1&&t<=(h(e)?366:365)}(t,o)?(l.setUTCFullYear(t,a,Math.max(o,i)),l):new Date(NaN)}(w.restDateString,w.year)}if(!v||isNaN(v.getTime()))return new Date(NaN);var y,b=v.getTime(),T=0;if(p.time&&(T=function(e){var r=e.match(d);if(!r)return NaN;var o=l(r[1]),a=l(r[2]),i=l(r[3]);return function(e,t,n){return 24===e?0===t&&0===n:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(o,a,i)?o*n+a*t+1e3*i:NaN}(p.time),isNaN(T)))return new Date(NaN);if(!p.timezone){var C=new Date(b+T),D=new Date(0);return D.setFullYear(C.getUTCFullYear(),C.getUTCMonth(),C.getUTCDate()),D.setHours(C.getUTCHours(),C.getUTCMinutes(),C.getUTCSeconds(),C.getUTCMilliseconds()),D}return y=function(e){if("Z"===e)return 0;var r=e.match(s);if(!r)return 0;var o="+"===r[1]?-1:1,a=parseInt(r[2]),i=r[3]&&parseInt(r[3])||0;return function(e,t){return t>=0&&t<=59}(0,i)?o*(a*n+i*t):NaN}(p.timezone),isNaN(y)?new Date(NaN):new Date(b+T+y)}var i={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},u=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,d=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,s=/^([+-])(\d{2})(?::?(\d{2}))?$/;function c(e){return e?parseInt(e):1}function l(e){return e&&parseFloat(e.replace(",","."))||0}var m=[31,null,31,30,31,30,31,31,30,31,30,31];function h(e){return e%400==0||e%4==0&&e%100!=0}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function g(e){r(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===f(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function v(e){r(1,arguments);var t=g(e),n=t.getUTCDay(),o=(n<1?7:0)+n-1;return t.setUTCDate(t.getUTCDate()-o),t.setUTCHours(0,0,0,0),t}function p(e){r(1,arguments);var t=g(e),n=t.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(n+1,0,4),o.setUTCHours(0,0,0,0);var a=v(o),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var u=v(i);return t.getTime()>=a.getTime()?n+1:t.getTime()>=u.getTime()?n:n-1}var w={};function y(){return w}function b(e,t){var n,a,i,u,d,s,c,l;r(1,arguments);var m=y(),h=o(null!==(n=null!==(a=null!==(i=null!==(u=null==t?void 0:t.weekStartsOn)&&void 0!==u?u:null==t||null===(d=t.locale)||void 0===d||null===(s=d.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==i?i:m.weekStartsOn)&&void 0!==a?a:null===(c=m.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==n?n:0);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=g(e),v=f.getUTCDay(),p=(v<h?7:0)+v-h;return f.setUTCDate(f.getUTCDate()-p),f.setUTCHours(0,0,0,0),f}function T(e,t){var n,a,i,u,d,s,c,l;r(1,arguments);var m=g(e),h=m.getUTCFullYear(),f=y(),v=o(null!==(n=null!==(a=null!==(i=null!==(u=null==t?void 0:t.firstWeekContainsDate)&&void 0!==u?u:null==t||null===(d=t.locale)||void 0===d||null===(s=d.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==i?i:f.firstWeekContainsDate)&&void 0!==a?a:null===(c=f.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==n?n:1);if(!(v>=1&&v<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var p=new Date(0);p.setUTCFullYear(h+1,0,v),p.setUTCHours(0,0,0,0);var w=b(p,t),T=new Date(0);T.setUTCFullYear(h,0,v),T.setUTCHours(0,0,0,0);var C=b(T,t);return m.getTime()>=w.getTime()?h+1:m.getTime()>=C.getTime()?h:h-1}function C(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const D=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return C("yy"===t?r%100:r,t.length)},P=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):C(n+1,2)},M=function(e,t){return C(e.getUTCDate(),t.length)},S=function(e,t){return C(e.getUTCHours()%12||12,t.length)},j=function(e,t){return C(e.getUTCHours(),t.length)},k=function(e,t){return C(e.getUTCMinutes(),t.length)},E=function(e,t){return C(e.getUTCSeconds(),t.length)},x=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return C(Math.floor(r*Math.pow(10,n-3)),t.length)};var U={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return D(e,t)},Y:function(e,t,n,r){var o=T(e,r),a=o>0?o:1-o;return"YY"===t?C(a%100,2):"Yo"===t?n.ordinalNumber(a,{unit:"year"}):C(a,t.length)},R:function(e,t){return C(p(e),t.length)},u:function(e,t){return C(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return C(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return C(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return P(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return C(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,a){var i=function(e,t){r(1,arguments);var n=g(e),a=b(n,t).getTime()-function(e,t){var n,a,i,u,d,s,c,l;r(1,arguments);var m=y(),h=o(null!==(n=null!==(a=null!==(i=null!==(u=null==t?void 0:t.firstWeekContainsDate)&&void 0!==u?u:null==t||null===(d=t.locale)||void 0===d||null===(s=d.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==i?i:m.firstWeekContainsDate)&&void 0!==a?a:null===(c=m.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==n?n:1),f=T(e,t),g=new Date(0);return g.setUTCFullYear(f,0,h),g.setUTCHours(0,0,0,0),b(g,t)}(n,t).getTime();return Math.round(a/6048e5)+1}(e,a);return"wo"===t?n.ordinalNumber(i,{unit:"week"}):C(i,t.length)},I:function(e,t,n){var o=function(e){r(1,arguments);var t=g(e),n=v(t).getTime()-function(e){r(1,arguments);var t=p(e),n=new Date(0);return n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0),v(n)}(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(o,{unit:"week"}):C(o,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):M(e,t)},D:function(e,t,n){var o=function(e){r(1,arguments);var t=g(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var o=n-t.getTime();return Math.floor(o/864e5)+1}(e);return"Do"===t?n.ordinalNumber(o,{unit:"dayOfYear"}):C(o,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var o=e.getUTCDay(),a=(o-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(a);case"ee":return C(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var o=e.getUTCDay(),a=(o-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(a);case"cc":return C(a,t.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),o=0===r?7:r;switch(t){case"i":return String(o);case"ii":return C(o,t.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,o=e.getUTCHours();switch(r=12===o?"noon":0===o?"midnight":o/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,o=e.getUTCHours();switch(r=o>=17?"evening":o>=12?"afternoon":o>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return S(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):j(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):C(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):C(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):k(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):E(e,t)},S:function(e,t){return x(e,t)},X:function(e,t,n,r){var o=(r._originalDate||e).getTimezoneOffset();if(0===o)return"Z";switch(t){case"X":return L(o);case"XXXX":case"XX":return W(o);default:return W(o,":")}},x:function(e,t,n,r){var o=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return L(o);case"xxxx":case"xx":return W(o);default:return W(o,":")}},O:function(e,t,n,r){var o=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+N(o,":");default:return"GMT"+W(o,":")}},z:function(e,t,n,r){var o=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+N(o,":");default:return"GMT"+W(o,":")}},t:function(e,t,n,r){var o=r._originalDate||e;return C(Math.floor(o.getTime()/1e3),t.length)},T:function(e,t,n,r){return C((r._originalDate||e).getTime(),t.length)}};function N(e,t){var n=e>0?"-":"+",r=Math.abs(e),o=Math.floor(r/60),a=r%60;if(0===a)return n+String(o);var i=t||"";return n+String(o)+i+C(a,2)}function L(e,t){return e%60==0?(e>0?"-":"+")+C(Math.abs(e)/60,2):W(e,t)}function W(e,t){var n=t||"",r=e>0?"-":"+",o=Math.abs(e);return r+C(Math.floor(o/60),2)+n+C(o%60,2)}const Y=U;var q=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},F=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},O={p:F,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],o=r[1],a=r[2];if(!a)return q(e,t);switch(o){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",q(o,t)).replace("{{time}}",F(a,t))}};const B=O;var H=["D","DD"],z=["YY","YYYY"];function I(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var A={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function $(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var Q,G={date:$({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:$({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:$({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},R={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function X(e){return function(t,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,a=null!=n&&n.width?String(n.width):o;r=e.formattingValues[a]||e.formattingValues[o]}else{var i=e.defaultWidth,u=null!=n&&n.width?String(n.width):e.defaultWidth;r=e.values[u]||e.values[i]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function J(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],a=t.match(o);if(!a)return null;var i,u=a[0],d=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(d)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(u))return n}(d):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(u))return n}(d);return i=e.valueCallback?e.valueCallback(s):s,{value:i=n.valueCallback?n.valueCallback(i):i,rest:t.slice(u.length)}}}const Z={code:"en-US",formatDistance:function(e,t,n){var r,o=A[e];return r="string"==typeof o?o:1===t?o.one:o.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:G,formatRelative:function(e,t,n,r){return R[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:X({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:X({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:X({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:X({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:X({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(Q={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(Q.matchPattern);if(!n)return null;var r=n[0],o=e.match(Q.parsePattern);if(!o)return null;var a=Q.valueCallback?Q.valueCallback(o[0]):o[0];return{value:a=t.valueCallback?t.valueCallback(a):a,rest:e.slice(r.length)}}),era:J({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:J({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:J({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:J({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:J({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var _=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,V=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,K=/^'([^]*?)'?$/,ee=/''/g,te=/[a-zA-Z]/;function ne(e,t,n){var a,i,u,d,s,c,l,m,h,v,p,w,b,T,C,D,P,M;r(2,arguments);var S=String(t),j=y(),k=null!==(a=null!==(i=null==n?void 0:n.locale)&&void 0!==i?i:j.locale)&&void 0!==a?a:Z,E=o(null!==(u=null!==(d=null!==(s=null!==(c=null==n?void 0:n.firstWeekContainsDate)&&void 0!==c?c:null==n||null===(l=n.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==s?s:j.firstWeekContainsDate)&&void 0!==d?d:null===(h=j.locale)||void 0===h||null===(v=h.options)||void 0===v?void 0:v.firstWeekContainsDate)&&void 0!==u?u:1);if(!(E>=1&&E<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var x=o(null!==(p=null!==(w=null!==(b=null!==(T=null==n?void 0:n.weekStartsOn)&&void 0!==T?T:null==n||null===(C=n.locale)||void 0===C||null===(D=C.options)||void 0===D?void 0:D.weekStartsOn)&&void 0!==b?b:j.weekStartsOn)&&void 0!==w?w:null===(P=j.locale)||void 0===P||null===(M=P.options)||void 0===M?void 0:M.weekStartsOn)&&void 0!==p?p:0);if(!(x>=0&&x<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!k.localize)throw new RangeError("locale must contain localize property");if(!k.formatLong)throw new RangeError("locale must contain formatLong property");var U=g(e);if(!function(e){if(r(1,arguments),!function(e){return r(1,arguments),e instanceof Date||"object"===f(e)&&"[object Date]"===Object.prototype.toString.call(e)}(e)&&"number"!=typeof e)return!1;var t=g(e);return!isNaN(Number(t))}(U))throw new RangeError("Invalid time value");var N=function(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}(U),L=function(e,t){return r(2,arguments),function(e,t){r(2,arguments);var n=g(e).getTime(),a=o(t);return new Date(n+a)}(e,-o(t))}(U,N),W={firstWeekContainsDate:E,weekStartsOn:x,locale:k,_originalDate:U};return S.match(V).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,B[t])(e,k.formatLong):e})).join("").match(_).map((function(r){if("''"===r)return"'";var o,a,i=r[0];if("'"===i)return(a=(o=r).match(K))?a[1].replace(ee,"'"):o;var u,d=Y[i];if(d)return null!=n&&n.useAdditionalWeekYearTokens||(u=r,-1===z.indexOf(u))||I(r,t,String(e)),null!=n&&n.useAdditionalDayOfYearTokens||!function(e){return-1!==H.indexOf(e)}(r)||I(r,t,String(e)),d(L,r,k.localize,W);if(i.match(te))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return r})).join("")}function re(e,t,n,r){return{title:e,description:t,dueDate:ne(a(new Date(n).toISOString()),"MMM d, yyyy h:mm a"),priority:r,isComplete:!1,updateDetails(e,t,n,r,o){this.title=e||this.title,this.description=t||this.description,this.dueDate=n||this.dueDate,this.priority=r||this.priority,this.isComplete=void 0!==o?o:this.isComplete},markAsComplete(){this.isComplete=!0}}}const oe={projects:[],currentProject:null,saveProjectsToLocalStorage(){localStorage.setItem("projects",JSON.stringify(this.projects))},loadProjectsFromLocalStorage(){const t=JSON.parse(localStorage.getItem("projects"));t&&(this.projects=t.map((t=>{const n=e(t.name);return n.todos=t.todos.map((e=>re(e.title,e.description,e.dueDate,e.priority,e.isComplete))),n})),this.currentProject=this.projects[0])},initializeProjects(t){if(t&&Array.isArray(t)&&t.length>0)this.projects=t,this.currentProject=this.projects[0];else{const t=e("Inbox");console.log(t),this.projects.push(t),this.currentProject=t}console.log("After initializeProjects, currentProject:",this.currentProject)},addProject(e){this.projects.push(e)},addTodoToProject(e,t){console.log("Adding todo to project:",e),console.log("Todo to add:",t),e.addTodo(t)},switchProject(e){this.currentProject=e},getProjects(){return this.projects},removeProject(e){const t=this.projects.indexOf(e);-1!==t&&this.projects.splice(t,1),e===this.currentProject&&(this.currentProject=this.projects[0]||null)}},ae={initializeEventListeners:()=>{document.querySelector(".projectsList"),addProjectBtn.addEventListener("click",(()=>{ae.clearForms(),document.getElementById("projectForm").style.display="block",document.getElementById("todoForm").style.display="none"})),addTodoBtn.addEventListener("click",(()=>{ae.clearForms(),document.getElementById("todoForm").style.display="block",document.getElementById("projectForm").style.display="none"})),submitProjectBtn.addEventListener("click",(()=>{ae.handleSubmitProject(),document.getElementById("projectForm").style.display="none"})),submitTodoBtn.addEventListener("click",(()=>{ae.handleSubmitTodo(),document.getElementById("todoForm").style.display="none"}))},clearForms:()=>{const e=document.getElementById("projectForm"),t=document.getElementById("todoForm");e.querySelector("#projectName").value="",t.querySelector("#todoTitle").value="",t.querySelector("#todoDescription").value="",t.querySelector("#todoDueDate").value="",t.querySelector("#todoPriority").value=""},createButton:(e,t)=>{const n=document.createElement("button");return n.textContent=e,n.addEventListener("click",t),console.log("delete button created"),n},createTodoContainer:e=>{const t=document.createElement("div");t.classList.add("todo-container");const n=()=>{const t=document.createElement("div");t.innerHTML=`\n      <p>Title: ${e.title}</p>\n      <p>Due Date: ${e.dueDate}</p>\n      <p>Priority: ${e.priority}</p>\n      <p>Description: ${e.description}</p>\n      <p>Complete: <input type="checkbox" ${e.isComplete?"checked":""} id="completeCheckbox"></p>\n    `;const n=t.querySelector("#completeCheckbox");return n.addEventListener("change",(()=>{e.updateDetails(void 0,void 0,void 0,void 0,n.checked)})),t},r=ae.createButton("Delete",(()=>{oe.currentProject.removeTodo(e),oe.saveProjectsToLocalStorage(),console.log(oe.currentProject.getTodos()),todosList.removeChild(t)})),o=ae.createButton("Edit",(()=>{const a=document.createElement("form");a.innerHTML=`\n      <label for="editTodoTitle">Title:</label>\n      <input type="text" id="editTodoTitle" value="${e.title}" required>\n\n      <label for="editTodoDescription">Description:</label>\n      <textarea id="editTodoDescription" rows="3">${e.description}</textarea>\n\n      <label for="editTodoDueDate">Due Date:</label>\n      <input type="date" id="editTodoDueDate" value="${e.dueDate}" required>\n\n      <label for="editTodoPriority">Priority:</label>\n      <select id="editTodoPriority" required>\n        <option value="low" ${"low"===e.priority?"selected":""}>Low</option>\n        <option value="medium" ${"medium"===e.priority?"selected":""}>Medium</option>\n        <option value="high" ${"high"===e.priority?"selected":""}>High</option>\n      </select>\n\n      <button type="button" id="submitEditTodoBtn">Update</button>\n    `,a.querySelector("#submitEditTodoBtn").addEventListener("click",(()=>{const i=a.querySelector("#editTodoTitle").value,u=a.querySelector("#editTodoDescription").value||e.dueDate,d=a.querySelector("#editTodoDueDate").value,s=a.querySelector("#editTodoPriority").value;e.updateDetails(i,u,d,s);const c=`Title: ${i}, DueDate: ${d}, Priority: ${s}, Description: ${u}`;t.textContent=c,t.innerHTML="",t.appendChild(n()),t.appendChild(o),t.appendChild(r)})),t.innerHTML="",t.appendChild(a)}));return t.appendChild(n()),t.appendChild(o),t.appendChild(r),t},createProjectContainer:e=>{const t=document.createElement("div");t.classList.add("project-container");const n=document.createElement("h3");n.textContent=e.name,t.appendChild(n);const r=ae.createButton("Delete",(()=>{oe.removeProject(e),oe.saveProjectsToLocalStorage(),console.log(oe.getProjects()),t.innerHTML=""}));return t.appendChild(r),t.addEventListener("click",(()=>{oe.currentProject=e;const t=document.getElementById("todosList");t.innerHTML="",e.getTodos().forEach((e=>{const n=ae.createTodoContainer(e);t.appendChild(n)}))})),t},handleSubmitProject:()=>{const t=document.getElementById("projectName").value,n=document.querySelector(".projectsList");if(t){const r=e(t);oe.currentProject=r;const o=document.createElement("div");o.classList.add("project-container");const a=document.createElement("h3");a.textContent=t,o.appendChild(a);const i=ae.createButton("Delete",(()=>{oe.removeProject(r),oe.saveProjectsToLocalStorage(),console.log(oe.getProjects()),o.innerHTML=""}));o.appendChild(i),oe.addProject(r),o.addEventListener("click",(()=>{oe.currentProject=r;const e=document.getElementById("todosList");e.innerHTML="",r.getTodos().forEach((t=>{const n=ae.createTodoContainer(t);e.appendChild(n)}))})),n.appendChild(o),ae.clearForms(),oe.saveProjectsToLocalStorage()}},handleSubmitTodo:()=>{const e=document.getElementById("todosList"),t=document.getElementById("todoTitle"),n=document.getElementById("todoDescription"),r=document.getElementById("todoDueDate"),o=document.getElementById("todoPriority"),a=t.value,i=n.value,u=r.value,d=o.value;if(a&&i&&u&&d){const t=re(a,i,u,d);oe.addTodoToProject(oe.currentProject,t);const n=ae.createTodoContainer(t);e.appendChild(n),ae.clearForms(),oe.saveProjectsToLocalStorage()}}};document.addEventListener("DOMContentLoaded",(()=>{oe.loadProjectsFromLocalStorage(),oe.getProjects().forEach((e=>{const t=ae.createProjectContainer(e);document.querySelector(".projectsList").appendChild(t)}))})),oe.initializeProjects(),console.log("After initialization, currentProject:",oe.currentProject),ae.initializeEventListeners()})();