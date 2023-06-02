"use strict";(globalThis["webpackChunkelize_demo"]=globalThis["webpackChunkelize_demo"]||[]).push([[227],{227:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var l=a(252),i=a(262),d=a(491),n=a(577);const r=(0,l._)("h1",null,"Parents",-1),o={key:0},s=(0,l._)("h1",null,"Children",-1),u={key:0},_=(0,l._)("h1",null,"Videos",-1),w={key:0},c=["href"];function m(e,t,a,i,d,m){const h=(0,l.up)("ion-button"),f=(0,l.up)("ion-text"),p=(0,l.up)("ion-col"),k=(0,l.up)("ion-row"),g=(0,l.up)("ion-grid");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(h,{onClick:e.getAllData},{default:(0,l.w5)((()=>[(0,l.Uk)("Get Data")])),_:1},8,["onClick"]),(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[r])),_:1}),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.parents,(e=>((0,l.wg)(),(0,l.j4)(g,{key:e.id},{default:(0,l.w5)((()=>[""!==e.id?((0,l.wg)(),(0,l.iD)("div",o,[(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l._)("h4",null,(0,n.zw)(e.first_name)+" "+(0,n.zw)(e.last_name),1)])),_:2},1024),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e,((e,t)=>((0,l.wg)(),(0,l.j4)(k,{key:t},{default:(0,l.w5)((()=>[(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(t),1)])),_:2},1024),(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e),1)])),_:2},1024)])),_:2},1024)))),128))])):(0,l.kq)("",!0)])),_:2},1024)))),128)),(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[s])),_:1}),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.children,(e=>((0,l.wg)(),(0,l.j4)(g,{key:e.id},{default:(0,l.w5)((()=>[""!==e.id?((0,l.wg)(),(0,l.iD)("div",u,[(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l._)("h4",null,(0,n.zw)(e.first_name)+" "+(0,n.zw)(e.last_name),1)])),_:2},1024),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e,((e,t)=>((0,l.wg)(),(0,l.j4)(k,{key:t},{default:(0,l.w5)((()=>[(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(t),1)])),_:2},1024),(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e),1)])),_:2},1024)])),_:2},1024)))),128))])):(0,l.kq)("",!0)])),_:2},1024)))),128)),(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[_])),_:1}),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.videos,(t=>((0,l.wg)(),(0,l.j4)(g,{key:t.id},{default:(0,l.w5)((()=>[""!==t.id?((0,l.wg)(),(0,l.iD)("div",w,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t,((t,a)=>((0,l.wg)(),(0,l.j4)(k,{key:a},{default:(0,l.w5)((()=>["bucket_path"===a?((0,l.wg)(),(0,l.j4)(p,{key:0},{default:(0,l.w5)((()=>[(0,l._)("a",{href:e.makeVideoUrl(t)},(0,n.zw)(a),9,c)])),_:2},1024)):((0,l.wg)(),(0,l.j4)(p,{key:1},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(a),1)])),_:2},1024)),(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(t),1)])),_:2},1024)])),_:2},1024)))),128))])):(0,l.kq)("",!0)])),_:2},1024)))),128))],64)}var h=a(108);const f=(0,l.aZ)({components:{IonGrid:d.jY,IonRow:d.Nd,IonCol:d.wI,IonButton:d.YG},data(){return{parents:[{id:"",created_at:"",email:"",first_name:"",last_name:""}],children:[{id:"",created_at:"",first_name:"",last_name:"",actual_birthday:"",expected_birthday:"",hospital:"",doctor:"",parent_id:""}],videos:[{id:"",created_at:"",bucket_path:"",child_id:"",description:"",reviewed_by:"",date_recorded:""}]}},methods:{async getUserId(e){var t;const{data:a}=await h.Z.from("parent").select().eq("email",e);return a?null===(t=a[0])||void 0===t?void 0:t.id:""},async getParents(e){const{data:t}=await h.Z.from("parent").select().eq("id",e),a=t||[];return a.map((e=>({id:e["id"],created_at:e["created_at"],email:e["email"],first_name:e["first_name"],last_name:e["last_name"]})))},async getChildren(e){const{data:t}=await h.Z.from("child").select().eq("parent_id",e),a=t||[];return a.map((e=>({id:e["id"],created_at:e["created_at"],first_name:e["first_name"],last_name:e["last_name"],actual_birthday:e["actual_birthday"],expected_birthday:e["expected_birthday"],hospital:e["hospital"],doctor:e["doctor"],parent_id:e["hospital"]})))},async getVideos(e){const{data:t}=await h.Z.from("video").select().eq("child_id",e),a=t||[];return a.map((e=>({id:e["id"],created_at:e["created_at"],bucket_path:e["bucket_path"],child_id:e["child_id"],description:e["description"],reviewed_by:e["reviewed_by"],date_recorded:e["date_recorded"]})))},async getAllData(){var e;const{data:t}=await h.Z.auth.getUser(),a=(null===(e=t.user)||void 0===e?void 0:e.email)||"",l=await this.getUserId(a);this.parents=await this.getParents(l);const i=this.parents[0].id;this.children=await this.getChildren(i);const d=this.children[0].id;this.videos=await this.getVideos(d)},makeVideoUrl(e){return"https://wwjjtkxvaidokhekafiw.supabase.co/storage/v1/object/public/videos/"+e||0}}});var p=a(744);const k=(0,p.Z)(f,[["render",m]]),g=k,y=(0,l.aZ)({__name:"ViewUploadsTab",setup(e){return(0,l.aZ)({components:{IonPage:d._i,IonHeader:d.Gu,IonToolbar:d.sr,IonTitle:d.wd,IonContent:d.W2,ItemsList:g}}),(e,t)=>((0,l.wg)(),(0,l.j4)((0,i.SU)(d._i),null,{default:(0,l.w5)((()=>[(0,l.Wm)((0,i.SU)(d.Gu),null,{default:(0,l.w5)((()=>[(0,l.Wm)((0,i.SU)(d.sr),null,{default:(0,l.w5)((()=>[(0,l.Wm)((0,i.SU)(d.wd),null,{default:(0,l.w5)((()=>[(0,l.Uk)("View Uploads")])),_:1})])),_:1})])),_:1}),(0,l.Wm)((0,i.SU)(d.W2),{class:"ion-text-center",fullscreen:!0},{default:(0,l.w5)((()=>[(0,l.Wm)(g)])),_:1})])),_:1}))}}),b=y,v=b}}]);
//# sourceMappingURL=227.45b73613.js.map