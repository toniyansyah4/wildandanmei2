!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e():"function"==typeof define&&define.amd?define(e):e()}(0,function(){"use strict";function t(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){return e.reject(n)})})}function e(t){return!(!t||void 0===t.length)}function n(){}function o(t){if(!(this instanceof o))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],s(t,this)}function a(t,e){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,o._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null!==n){var o;try{o=n(t._value)}catch(t){return void r(e.promise,t)}i(e.promise,o)}else(1===t._state?i:r)(e.promise,t._value)})):t._deferreds.push(e)}function i(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof o)return t._state=3,t._value=e,void c(t);if("function"==typeof n)return void s(function(t,e){return function(){t.apply(e,arguments)}}(n,e),t)}t._state=1,t._value=e,c(t)}catch(e){r(t,e)}}function r(t,e){t._state=2,t._value=e,c(t)}function c(t){2===t._state&&0===t._deferreds.length&&o._immediateFn(function(){t._handled||o._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;n>e;e++)a(t,t._deferreds[e]);t._deferreds=null}function s(t,e){var n=!1;try{t(function(t){n||(n=!0,i(e,t))},function(t){n||(n=!0,r(e,t))})}catch(t){if(n)return;n=!0,r(e,t)}}var d=setTimeout;o.prototype.catch=function(t){return this.then(null,t)},o.prototype.then=function(t,e){var o=new this.constructor(n);return a(this,new function(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}(t,e,o)),o},o.prototype.finally=t,o.all=function(t){return new o(function(n,o){function a(t,e){try{if(e&&("object"==typeof e||"function"==typeof e)){var c=e.then;if("function"==typeof c)return void c.call(e,function(e){a(t,e)},o)}i[t]=e,0==--r&&n(i)}catch(t){o(t)}}if(!e(t))return o(new TypeError("Promise.all accepts an array"));var i=Array.prototype.slice.call(t);if(0===i.length)return n([]);for(var r=i.length,c=0;i.length>c;c++)a(c,i[c])})},o.resolve=function(t){return t&&"object"==typeof t&&t.constructor===o?t:new o(function(e){e(t)})},o.reject=function(t){return new o(function(e,n){n(t)})},o.race=function(t){return new o(function(n,a){if(!e(t))return a(new TypeError("Promise.race accepts an array"));for(var i=0,r=t.length;r>i;i++)o.resolve(t[i]).then(n,a)})},o._immediateFn="function"==typeof setImmediate&&function(t){setImmediate(t)}||function(t){d(t,0)},o._unhandledRejectionFn=function(t){void 0!==console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)};var l=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw Error("unable to locate global object")}();"Promise"in l?l.Promise.prototype.finally||(l.Promise.prototype.finally=t):l.Promise=o}),function(t,e,n){"use strict";var o={addedScripts:{},addedStyles:{},addedAssetsPromises:[],init:function(){var n={"jet-tabs.default":o.tabsInit,"jet-accordion.default":o.accordionInit,"jet-image-accordion.default":o.imageAccordionInit,"jet-switcher.default":o.switcherInit};t.each(n,function(t,n){e.hooks.addAction("frontend/element_ready/"+t,n)})},tabsInit:function(e){var n,a=t(".jet-tabs",e).first(),i=(a.data("id"),t(window)),r=t(".jet-tabs__control-wrapper",a).first(),c=t(".jet-tabs__content-wrapper",a).first(),s=t("> .jet-tabs__control",r),d=t("> .jet-tabs__content",c),l=a.data("settings")||{},u=[],h=null,f=window.location.hash||!1,g=!!f&&f.replace("#","").split("&"),p=l.tabsPosition,m=l.tabsPositionTablet||p,w=l.tabsPositionMobile||m;if("click"===l.event?s.on("click.jetTabs",function(){var e=t(this),n=+e.data("tab")-1,o=e.data("template-id");clearInterval(h),l.ajaxTemplate&&o&&b(n),_(n)}):"ontouchend"in window||"ontouchstart"in window?(s.on("touchstart",function(e){n=t(window).scrollTop()}),s.on("touchend",function(e){var o=t(this),a=+o.data("tab")-1,i=o.data("template-id");if(n!==t(window).scrollTop())return!1;clearInterval(h),l.ajaxTemplate&&i&&b(a),_(a)})):s.on("mouseenter",function(e){var n=t(this),o=+n.data("tab")-1,a=n.data("template-id");clearInterval(h),l.ajaxTemplate&&a&&b(o),_(o)}),l.autoSwitch){var v=l.activeIndex,j=s.length;h=setInterval(function(){v<j-1?v++:v=0,l.ajaxTemplate&&b(v),_(v)},+l.autoSwitchDelay)}function _(t){var e,n=s.eq(t),o=d.eq(t),l="auto",u=window.elementorFrontend.getCurrentDeviceMode();c.css({height:c.outerHeight(!0)}),s.removeClass("active-tab"),n.addClass("active-tab"),s.attr("aria-expanded","false"),n.attr("aria-expanded","true"),d.removeClass("active-content"),l=o.outerHeight(!0),l+=parseInt(c.css("border-top-width"))+parseInt(c.css("border-bottom-width")),o.addClass("active-content"),d.attr("aria-hidden","true"),o.attr("aria-hidden","false"),("tablet"!==u||"left"!==m&&"right"!==m)&&("mobile"!==u||"left"!==w&&"right"!==w)&&("desktop"!==u||"left"!==p&&"right"!==p)?c.css({height:l}):l<c.outerHeight(!0)?c.css({height:r.outerHeight(!0)}):l>c.outerHeight(!0)&&c.css({height:l}),i.trigger("jet-tabs/tabs/show-tab-event/before",{target:a,tabIndex:t}),e&&clearTimeout(e),e=setTimeout(function(){i.trigger("jet-tabs/tabs/show-tab-event/after",{target:a,tabIndex:t}),c.css({height:"auto"})},500)}function b(e){var n=d.eq(e),r=n.data("template-loaded")||!1,c=n.data("template-id"),s=t(".jet-tabs-loader",n);if(r)return!1;i.trigger("jet-tabs/ajax-load-template/before",{toggleIndex:e,target:a,contentHolder:n}),n.data("template-loaded",!0),t.ajax({type:"GET",url:window.JetTabsSettings.templateApiUrl,dataType:"json",data:{id:c,dev:window.JetTabsSettings.devMode},success:function(t,r,c){var d=t.template_content,l=t.template_scripts,u=t.template_styles;for(var h in l)o.addedAssetsPromises.push(o.loadScriptAsync(h,l[h]));for(var f in u)o.addedAssetsPromises.push(o.loadStyle(f,u[f]));Promise.all(o.addedAssetsPromises).then(function(r){s.remove(),n.append(d),o.elementorFrontendInit(n),i.trigger("jet-tabs/ajax-load-template/after",{toggleIndex:e,target:a,contentHolder:n,responce:t})},function(t){console.log("Script Loaded Error")})}})}l.ajaxTemplate&&b(l.activeIndex),t(window).on("resize.jetTabs orientationchange.jetTabs",function(){c.css({height:"auto"})}),g&&s.each(function(e){var n=t(this),o=n.attr("id"),a=n.data("template-id"),i=e;g.forEach(function(t,e){t===o&&(l.ajaxTemplate&&a&&b(i),_(i))})}),s.each(function(){u.push('a[href*="#'+t(this).attr("id")+'"]')}),t(document).on("click.jetTabAnchor",u.join(","),function(n){var o=t(this.hash);if(o.closest(e)[0]){var a=o.data("tab")-1;l.ajaxTemplate&&b(a),_(a)}})},switcherInit:function(e){var n,o=t(".jet-switcher",e).first(),a=(o.data("id"),t(window)),i=t(".jet-switcher__control-wrapper",o).first(),r=t(".jet-switcher__content-wrapper",o).first(),c=t("> .jet-switcher__control-instance",i),s=t("> .jet-switcher__control-instance > .jet-switcher__control, > .jet-switcher__control",i),d=t("> .jet-switcher__content",r),l=(t("> .jet-switcher__content--disable",r),t("> .jet-switcher__content--enable",r),o.hasClass("jet-switcher--disable"));o.data("settings");function u(t){var e,n,i,c="auto";r.css({height:r.outerHeight(!0)}),o.toggleClass("jet-switcher--disable jet-switcher--enable"),e=(l=!o.hasClass("jet-switcher--disable"))?s.eq(1):s.eq(0),n=l?d.eq(1):d.eq(0),d.removeClass("active-content"),c=n.outerHeight(!0),c+=parseInt(r.css("border-top-width"))+parseInt(r.css("border-bottom-width")),n.addClass("active-content"),s.attr("aria-expanded","false"),e.attr("aria-expanded","true"),d.attr("aria-hidden","true"),n.attr("aria-hidden","false"),r.css({height:c}),a.trigger("jet-tabs/switcher/show-case-event/before",{target:o,caseIndex:t}),i&&clearTimeout(i),i=setTimeout(function(){a.trigger("jet-tabs/switcher/show-case-event/after",{target:o,caseIndex:t}),r.css({height:"auto"})},500)}"ontouchend"in window||"ontouchstart"in window?(c.on("touchstart",function(e){n=t(window).scrollTop()}),c.on("touchend",function(e){if(n!==t(window).scrollTop())return!1;u()})):c.on("click.jetSwitcher",function(){u()}),t(window).on("resize.jetSwitcher orientationchange.jetSwitcher",function(){r.css({height:"auto"})})},accordionInit:function(e){var n,a,i=t(".jet-accordion",e).first(),r=(i.data("id"),t(window)),c=t("> .jet-accordion__inner > .jet-toggle > .jet-toggle__control",i),s=i.data("settings"),d=t("> .jet-accordion__inner > .jet-toggle",i),l=[],u=window.location.hash||!1,h=!!u&&u.replace("#","").split("&");function f(e){var n=d.eq(e),a=t("> .jet-toggle__content",n),c=t("> .jet-toggle__content > .jet-toggle__content-inner",n),s=a.data("template-loaded")||!1,l=a.data("template-id"),u=t(".jet-tabs-loader",c);if(s)return!1;r.trigger("jet-tabs/ajax-load-template/before",{toggleIndex:e,target:i,contentHolder:a}),a.data("template-loaded",!0),t.ajax({type:"GET",url:window.JetTabsSettings.templateApiUrl,dataType:"json",data:{id:l,dev:window.JetTabsSettings.devMode},success:function(t,n,s){var d=t.template_content,l=t.template_scripts,h=t.template_styles;for(var f in l)o.addedAssetsPromises.push(o.loadScriptAsync(f,l[f]));for(var g in h)o.addedAssetsPromises.push(o.loadStyle(g,h[g]));Promise.all(o.addedAssetsPromises).then(function(n){u.remove(),c.append(d),o.elementorFrontendInit(c),r.trigger("jet-tabs/ajax-load-template/after",{toggleIndex:e,target:i,contentHolder:a,responce:t})},function(t){console.log("Script Loaded Error")})}})}t(window).on("resize.jetAccordion orientationchange.jetAccordion",function(){var e=t("> .jet-accordion__inner > .active-toggle",i);t("> .jet-toggle__content",e).css({height:"auto"})}),c.on("click.jetAccordion",function(){var e=t(this),o=e.closest(".jet-toggle"),c=+e.data("toggle")-1;if(s.collapsible)o.hasClass("active-toggle")||d.each(function(e){var o=t(this),d=t("> .jet-toggle__control",o),l=t("> .jet-toggle__content",o),u=t("> .jet-toggle__content > .jet-toggle__content-inner",o).outerHeight();u+=parseInt(l.css("border-top-width"))+parseInt(l.css("border-bottom-width")),e===c?(o.addClass("active-toggle"),l.css({height:u}),d.attr("aria-expanded","true"),l.attr("aria-hidden","false"),s.ajaxTemplate&&f(c),r.trigger("jet-tabs/accordion/show-toggle-event/before",{target:i,toggleIndex:c}),n&&clearTimeout(n),n=setTimeout(function(){r.trigger("jet-tabs/accordion/show-toggle-event/after",{target:i,toggleIndex:c}),l.css({height:"auto"})},300)):o.hasClass("active-toggle")&&(l.css({height:l.outerHeight()}),o.removeClass("active-toggle"),d.attr("aria-expanded","false"),l.attr("aria-hidden","true"),a&&clearTimeout(a),a=setTimeout(function(){l.css({height:0})},5))});else{var l=t("> .jet-toggle__content",o),u=t("> .jet-toggle__content > .jet-toggle__content-inner",o).outerHeight();u+=parseInt(l.css("border-top-width"))+parseInt(l.css("border-bottom-width")),o.toggleClass("active-toggle"),o.hasClass("active-toggle")?(l.css({height:u}),e.attr("aria-expanded","true"),l.attr("aria-hidden","false"),s.ajaxTemplate&&f(c),r.trigger("jet-tabs/accordion/show-toggle-event/before",{target:i,toggleIndex:c}),n&&clearTimeout(n),n=setTimeout(function(){r.trigger("jet-tabs/accordion/show-toggle-event/after",{target:i,toggleIndex:c}),l.css({height:"auto"})},300)):(l.css({height:l.outerHeight()}),e.attr("aria-expanded","false"),l.attr("aria-hidden","true"),a&&clearTimeout(a),a=setTimeout(function(){l.css({height:0})},5))}}),h&&c.each(function(e){var n=t(this),o=n.attr("id");h.forEach(function(t,e){t===o&&n.trigger("click.jetAccordion")})}),c.each(function(){l.push('a[href*="#'+t(this).attr("id")+'"]')}),t(document).on("click.jetAccordionAnchor",l.join(","),function(n){var o=t(this.hash);o.closest(e)[0]&&o.trigger("click.jetAccordion")})},imageAccordionInit:function(e){var n,o=t(".jet-image-accordion",e);o.length&&(n=o.data("settings"),new jetImageAccordion(o,n).init())},loadScriptAsync:function(t,e){return o.addedScripts.hasOwnProperty(t)?t:e?(o.addedScripts[t]=e,new Promise(function(n,o){var a=document.createElement("script");a.src=e,a.async=!0,a.onload=function(){n(t)},document.head.appendChild(a)})):void 0},loadStyle:function(t,e){return o.addedStyles.hasOwnProperty(t)&&o.addedStyles[t]===e?t:e?(o.addedStyles[t]=e,new Promise(function(n,o){var a=document.createElement("link");a.id=t,a.rel="stylesheet",a.href=e,a.type="text/css",a.media="all",a.onload=function(){n(t)},document.head.appendChild(a)})):void 0},elementorFrontendInit:function(e){e.find("[data-element_type]").each(function(){var e=t(this),n=e.data("element_type");if(n)try{"widget"===n&&(n=e.data("widget_type"),window.elementorFrontend.hooks.doAction("frontend/element_ready/widget",e,t)),window.elementorFrontend.hooks.doAction("frontend/element_ready/global",e,t),window.elementorFrontend.hooks.doAction("frontend/element_ready/"+n,e,t)}catch(t){return console.log(t),e.remove(),!1}})}};window.jetImageAccordion=function(e,n){var o,a=this,i=e,r=t(".jet-image-accordion__item",i),c=r.length;n=n||{};n=t.extend({orientation:"vertical",activeSize:{size:50,unit:"%"},duration:500,activeItem:-1},n),o=n.activeItem,this.layoutBuild=function(){r.css({"transition-duration":n.duration+"ms"}),r.each(function(e){e===o&&(t(this).addClass("active-accordion"),a.layoutRender())}),t(".jet-image-accordion__image-instance",r).imagesLoaded().progress(function(e,n){var o=t(n.img),a=o.closest(".jet-image-accordion__item"),i=t(".jet-image-accordion__item-loader",a);o.addClass("loaded"),i.fadeTo(250,0,function(){t(this).remove()})}),a.layoutRender(),a.addEvents()},this.layoutRender=function(e){var o=n.activeSize.size,a=((100/c).toFixed(2),o/((100-o)/(c-1)));t(".jet-image-accordion__item:not(.active-accordion)",i).css({"flex-grow":1}),t(".active-accordion",i).css({"flex-grow":a})},this.addEvents=function(){var e=t(window).scrollTop();"ontouchend"in window||"ontouchstart"in window?(r.on("touchstart.jetImageAccordion",function(n){e=t(window).scrollTop()}),r.on("touchend.jetImageAccordion",function(n){n.stopPropagation();var o=t(this);if(e!==t(window).scrollTop())return!1;o.hasClass("active-accordion")?r.removeClass("active-accordion"):(r.removeClass("active-accordion"),o.addClass("active-accordion")),a.layoutRender()})):r.on("mouseenter",function(e){var n=t(this);n.hasClass("active-accordion")||(r.removeClass("active-accordion"),n.addClass("active-accordion")),a.layoutRender()}),i.on("mouseleave.jetImageAccordion",function(t){r.removeClass("active-accordion"),-1!==o&&r.eq(o).addClass("active-accordion"),a.layoutRender()})},this.init=function(){a.layoutBuild()}},t(window).on("elementor/frontend/init",o.init),window.JetTabs=o}(jQuery,window.elementorFrontend,window.JetTabsSettings);