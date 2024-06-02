
import Navbar from "@/components/Navbar.vue";
import type { App } from "vue";

export function setComponents(app:App){
    app.component('Navbar', Navbar)
}