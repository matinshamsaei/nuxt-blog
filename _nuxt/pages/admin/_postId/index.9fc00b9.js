(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{257:function(t,e,n){"use strict";n.r(e);n(40),n(20),n(21),n(12),n(34);var r=n(17);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"index",middleware:["check-auth","authenticate"],layout:"admin",asyncData:function(t){return t.app.$axios.$get("/posts/"+t.params.postId+".json").then((function(data){return{loadedPost:c(c({},data),{},{id:t.params.postId})}})).catch((function(e){return t.error(e)}))},methods:{onSubmit:function(t){var e=this;this.$store.dispatch("editPost",t).then((function(){e.$router.push("/admin")}))}}},f=n(2),component=Object(f.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"admin-post-page"},[e("section",{staticClass:"update-form"},[e("admin-post-form",{attrs:{post:this.loadedPost},on:{submit:this.onSubmit}})],1)])}),[],!1,null,"26b067d5",null);e.default=component.exports;installComponents(component,{AdminPostForm:n(105).default})}}]);