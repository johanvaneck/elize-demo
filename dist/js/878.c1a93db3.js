"use strict";(globalThis["webpackChunkelize_demo"]=globalThis["webpackChunkelize_demo"]||[]).push([[878],{878:(e,o,t)=>{t.r(o),t.d(o,{default:()=>w});var n=t(252),a=t(262),l=t(491);const i=(0,n._)("h1",null," Click to upload your video ",-1);function r(e,o,t,a,l,r){const d=(0,n.up)("ion-text"),s=(0,n.up)("ion-button");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[i])),_:1}),(0,n.Wm)(s,{onClick:e.onButtonClick},{default:(0,n.w5)((()=>[(0,n.Uk)("Upload Video")])),_:1},8,["onClick"]),(0,n._)("input",{id:"video-input",style:{display:"none"},name:"video-upload",type:"file",onChange:o[0]||(o[0]=o=>e.onChange(o))},null,32)],64)}var d=t(108),s=t(750);const u=(0,n.aZ)({components:{IonButton:l.YG},data(){return{}},methods:{async onChange(e){var o;let t="";const n=null===(o=e.target)||void 0===o?void 0:o.files[0];if(n)try{const{data:{session:o}}=await d.Z.auth.getSession(),{data:n,error:a}=await d.Z.from("parent").select().eq("email",null===o||void 0===o?void 0:o.user.email);t+=a?"\nparentError: "+a.message:"";const i=n?n[0].id:"",{data:r,error:u}=await d.Z.from("child").select().eq("parent_id",i);t+=u?"\nchildError: "+u.message:"";const c=r?r[0].id:"",p=`public/video-${(0,s.Vj)()}.mp4`,m=e.target.files[0],{error:f}=await d.Z.storage.from("videos").upload(p,m,{cacheControl:"3600",upsert:!1});t+=f?"\nbucketError: "+f.message:"";const{error:g}=await d.Z.from("video").insert({child_id:c,date_recorded:new Date,bucket_path:p});t+=g?"\nvideoError: "+g.message:"";const w=""===t?"Successfully uploaded video.":t,v=await l.Mn.create({message:w,duration:2e3});v.present()}catch(a){const e=await l.Mn.create({message:t,duration:2e3});e.present()}else console.log("No file provided or found.")},onButtonClick(){const e=document.getElementById("video-input");null===e||void 0===e||e.click()}}});var c=t(744);const p=(0,c.Z)(u,[["render",r]]),m=p,f=(0,n.aZ)({__name:"VideoUploadTab",setup(e){return(0,n.aZ)({components:{}}),(e,o)=>((0,n.wg)(),(0,n.j4)((0,a.SU)(l._i),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,a.SU)(l.Gu),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,a.SU)(l.sr),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,a.SU)(l.wd),null,{default:(0,n.w5)((()=>[(0,n.Uk)("Upload")])),_:1})])),_:1})])),_:1}),(0,n.Wm)((0,a.SU)(l.W2),{class:"ion-padding ion-text-center",fullscreen:!0},{default:(0,n.w5)((()=>[(0,n.Wm)(m)])),_:1})])),_:1}))}}),g=f,w=g}}]);
//# sourceMappingURL=878.c1a93db3.js.map