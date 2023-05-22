import{d,a as m}from"./vue.7fbf5199.js";import{ad as u,bC as _,af as f,r as p,Q as i,s as h,A as n,B as r,E as y,x as o,y as l,a as v,a3 as k}from"./index.d386e02e.js";import{_ as g}from"./VDataTable.ca06f9e7.js";import{_ as x}from"./VCheckbox.027f923c.js";import"./index.08494d40.js";const C=d({name:"RssArticles",mixins:[u],data(){return{headers:[{text:this.$t("modals.rss.columnTitle.id"),value:"id"},{text:this.$t("modals.rss.columnTitle.title"),value:"title"},{text:this.$t("modals.rss.columnTitle.category"),value:"category"},{text:this.$t("modals.rss.columnTitle.author"),value:"author"},{text:this.$t("modals.rss.columnTitle.date"),value:"parsedDate"},{text:this.$t("modals.rss.columnTitle.feedName"),value:"feedName"},{text:this.$t("modals.rss.columnTitle.actions"),value:"actions",sortable:!1}],filter:"",filterUnread:!1,mdiEmailOpen:_,mdiDownload:f,mdiClose:p}},mounted(){document.addEventListener("keydown",this.handleKeyboardShortcut)},created(){this.$store.commit("FETCH_FEEDS")},beforeDestroy(){document.removeEventListener("keydown",this.handleKeyboardShortcut)},computed:{...m(["rss"]),articles(){const s=[];return this.rss.feeds.forEach(t=>{t.articles&&s.push(...t.articles.map(e=>({key:`${t.uid}|${e.id}`,feedName:t.name,parsedDate:new Date(e.date),...e})))}),s},unreadArticles(){return this.articles.filter(s=>!s.isRead)}},methods:{close(){this.$router.back()},customFilter(s,t,e){return e.title.toLowerCase().indexOf(t.toLowerCase())!==-1},getRowStyle(s){return s.isRead?"rss-read":"rss-unread"},downloadTorrent(s){this.createModal("AddModal",{initialMagnet:s.torrentURL})},async markAsRead(s){await i.markAsRead(s.feedName,s.id),this.$store.commit("FETCH_FEEDS")},async markAllAsRead(){for(const s of this.unreadArticles)await i.markAsRead(s.feedName,s.id);this.$store.commit("FETCH_FEEDS")},handleKeyboardShortcut(s){s.key==="Escape"&&this.close()}}});var b=function(){var t=this,e=t._self._c;return t._self._setupProxy,e("div",{staticClass:"px-1 px-sm-5 background noselect"},[e(n,{staticClass:"grey--text",attrs:{"no-gutters":"",align:"center",justify:"center"}},[e(r,[e("h1",{staticClass:"subtitle-1 ml-2",staticStyle:{"font-size":"1.6em !important"}},[t._v(" "+t._s(t.$t("modals.rss.title"))+" ")])]),e(r,{staticClass:"align-center justify-center"},[e(y,{staticClass:"justify-end"},[e(o,{attrs:{small:"",elevation:"0"},on:{click:t.close}},[e(l,[t._v(t._s(t.mdiClose))])],1)],1)],1)],1),e(n,{staticClass:"ma-0 pa-0"},[e(g,{attrs:{id:"articlesTable",headers:t.headers,items:t.filterUnread?t.unreadArticles:t.articles,"items-per-page":15,"item-key":"key",search:t.filter,"custom-filter":t.customFilter,"multi-sort":"","sort-by":["parsedDate"],"sort-desc":[!0],"item-class":t.getRowStyle},scopedSlots:t._u([{key:"top",fn:function(){return[e("div",{staticClass:"mx-4 mb-5"},[e(v,{attrs:{label:t.$t("filter")},model:{value:t.filter,callback:function(a){t.filter=a},expression:"filter"}}),e(n,[e(r,[e(x,{staticClass:"my-0",attrs:{label:t.$t("modals.rss.filterRead"),"hide-details":""},model:{value:t.filterUnread,callback:function(a){t.filterUnread=a},expression:"filterUnread"}})],1),e(r,[e(o,{staticStyle:{float:"right"},attrs:{small:"",elevation:"3"},on:{click:t.markAllAsRead}},[t._v(" "+t._s(t.$t("modals.rss.markAllAsRead"))+" ")])],1)],1)],1),e(k)]},proxy:!0},{key:"item.title",fn:function({item:a}){return[e("a",{attrs:{href:a.link,target:"_blank"},domProps:{textContent:t._s(a.title)}})]}},{key:"item.parsedDate",fn:function({item:a}){return[t._v(" "+t._s(a.parsedDate.toLocaleString())+" ")]}},{key:"item.actions",fn:function({item:a}){return[e("span",{staticClass:"rss-actions"},[e(l,{on:{click:function(c){return t.markAsRead(a)}}},[t._v(t._s(t.mdiEmailOpen))]),e(l,{on:{click:function(c){return t.downloadTorrent(a)}}},[t._v(t._s(t.mdiDownload))])],1)]}}],null,!0)})],1)],1)},A=[],$=h(C,b,A,!1,null,"a6bc56ed",null,null);const D=$.exports;export{D as default};