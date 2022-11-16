import{m as s}from"./vue.10642814.js";import{M as i,Z as r,l,q as c,Q as _,r as m,s as p,V as u,u as d,y as h,z as f,A as g,a,$ as x,D as v,v as o}from"./index.b51fce21.js";import{F as y}from"./FullScreenModal.cd9b8d19.js";import{_ as C}from"./VDialog.7ab1cb67.js";import{_ as k}from"./VContainer.6d1b7722.js";const w={name:"ChangeLocationModal",mixins:[i,y],props:{hash:String},data(){return{newPath:"",mdiFile:r,mdiFolder:l,mdiClose:c}},computed:{...s(["getTorrent"]),dialogWidth(){return this.phoneLayout?"100%":"750px"},torrent(){return this.getTorrent(this.hash)},isPhone(){return this.$vuetify.breakpoint.xsOnly}},created(){this.newPath=this.torrent.savePath},methods:{setLocation(){_.setTorrentLocation([this.hash],this.newPath),this.close()},close(){this.dialog=!1}}};var b=function(){var t=this,e=t._self._c;return e(C,{attrs:{scrollable:"",width:t.dialogWidth,fullscreen:t.isPhone},model:{value:t.dialog,callback:function(n){t.dialog=n},expression:"dialog"}},[e(p,[e(u,{staticClass:"pa-0"},[e(d,{staticClass:"ma-4 primarytext--text"},[e("h3",[t._v(t._s(t.$t("modals.changeLocation.title")))])])],1),e(h,[e(k,[e(f,[e(g,[e(a,{attrs:{label:t.$t("modals.changeLocation.torrentName"),"prepend-icon":t.mdiFile,readonly:""},model:{value:t.torrent.name,callback:function(n){t.$set(t.torrent,"name",n)},expression:"torrent.name"}}),e(a,{attrs:{label:t.$t("directory"),"prepend-icon":t.mdiFolder},on:{keydown:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.setLocation.apply(null,arguments)}},model:{value:t.newPath,callback:function(n){t.newPath=n},expression:"newPath"}})],1)],1)],1)],1),e(x),e(v,{staticClass:"justify-end"},[e(o,{staticClass:"accent white--text elevation-0 px-4",on:{click:t.setLocation}},[t._v(" "+t._s(t.$t("save"))+" ")]),e(o,{staticClass:"error white--text elevation-0 px-4",on:{click:t.close}},[t._v(" "+t._s(t.$t("cancel"))+" ")])],1)],1)],1)},L=[],P=m(w,b,L,!1,null,null,null,null);const A=P.exports;export{A as default};