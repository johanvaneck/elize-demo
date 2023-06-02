"use strict";(globalThis["webpackChunkelize_demo"]=globalThis["webpackChunkelize_demo"]||[]).push([[272],{272:(e,a,t)=>{t.r(a),t.d(a,{default:()=>f});var l=t(252),o=t(262),d=t(491);function i(e,a,t,o,d,i){const n=(0,l.up)("ion-input"),u=(0,l.up)("ion-item"),s=(0,l.up)("ion-button");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(n,{modelValue:e.firstName,"onUpdate:modelValue":a[0]||(a[0]=a=>e.firstName=a),label:"First name",required:""},null,8,["modelValue"])])),_:1}),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(n,{modelValue:e.lastName,"onUpdate:modelValue":a[1]||(a[1]=a=>e.lastName=a),label:"Last name",required:""},null,8,["modelValue"])])),_:1}),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(n,{type:"date",modelValue:e.actualBirthday,"onUpdate:modelValue":a[2]||(a[2]=a=>e.actualBirthday=a),label:"Actual birthday",required:""},null,8,["modelValue"])])),_:1}),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(n,{type:"date",modelValue:e.expectedBirthday,"onUpdate:modelValue":a[3]||(a[3]=a=>e.expectedBirthday=a),label:"Expected birthday",required:""},null,8,["modelValue"])])),_:1}),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(n,{modelValue:e.hospital,"onUpdate:modelValue":a[4]||(a[4]=a=>e.hospital=a),label:"Hospital",placeholder:"(optional)"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(n,{modelValue:e.doctor,"onUpdate:modelValue":a[5]||(a[5]=a=>e.doctor=a),label:"Doctor",placeholder:"(optional)"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(s,{onClick:e.submit},{default:(0,l.w5)((()=>[(0,l.Uk)("Submit")])),_:1},8,["onClick"])],64)}var n=t(108);const u=(0,l.aZ)({components:{IonItem:d.Ie,IonInput:d.pK,IonButton:d.YG},data(){return{firstName:"",lastName:"",expectedBirthday:"",actualBirthday:"",hospital:"",doctor:""}},methods:{async submit(){if(""in[this.firstName,this.lastName,this.expectedBirthday,this.actualBirthday])return void this.showToast("Please fill in the required fields.");const{data:{session:e}}=await n.Z.auth.getSession(),{data:a,error:t}=await n.Z.from("parent").select().eq("email",null===e||void 0===e?void 0:e.user.email);t?this.showToast(t.message):this.showToast("Got parent.");const l=a?a[0].id:"",{error:o}=await n.Z.from("child").insert({first_name:this.firstName,last_name:this.lastName,actual_birthday:this.actualBirthday,expected_birthday:this.expectedBirthday,hospital:this.hospital,doctor:this.doctor,parent_id:l});o?this.showToast(o.message):this.showToast("Successfully added.")},async showToast(e){const a=await d.Mn.create({message:e,duration:5e3});return a.present()}}});var s=t(744);const r=(0,s.Z)(u,[["render",i]]),m=r,h=(0,l._)("h1",null,"Fill in your child's information",-1),c=(0,l.aZ)({__name:"ChildInfoTab",setup(e){return(0,l.aZ)({components:{IonPage:d._i,IonHeader:d.Gu,IonToolbar:d.sr,IonTitle:d.wd,IonContent:d.W2,IonText:d.yW}}),(e,a)=>((0,l.wg)(),(0,l.j4)((0,o.SU)(d._i),null,{default:(0,l.w5)((()=>[(0,l.Wm)((0,o.SU)(d.Gu),null,{default:(0,l.w5)((()=>[(0,l.Wm)((0,o.SU)(d.sr),null,{default:(0,l.w5)((()=>[(0,l.Wm)((0,o.SU)(d.wd),null,{default:(0,l.w5)((()=>[(0,l.Uk)("Child Info")])),_:1})])),_:1})])),_:1}),(0,l.Wm)((0,o.SU)(d.W2),{class:"ion-padding ion-text-center",fullscreen:!0},{default:(0,l.w5)((()=>[(0,l.Wm)((0,o.SU)(d.yW),null,{default:(0,l.w5)((()=>[h])),_:1}),(0,l.Wm)(m)])),_:1})])),_:1}))}}),p=c,f=p}}]);
//# sourceMappingURL=272.758b9c3d.js.map