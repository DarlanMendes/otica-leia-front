import type { Component } from "vue";

export class Views {
    static Home():()=> Promise<Component> {
      return ()=>import("./Home/index.vue");
    }
    static Login(): ()=>Promise<any> {
        return ()=>import("./Login/index.vue")
      }
    static SignUp():()=>Promise<Component>{
      return ()=>import("./SignUp/index.vue")
    }
  
   
  }