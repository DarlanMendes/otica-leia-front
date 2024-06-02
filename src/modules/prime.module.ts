import type { App } from "vue";
import Menubar from "primevue/menubar"
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
export function setPrimeVue(app:App){
    app.component('Menubar', Menubar);
    app.component('Button', Button);
    app.component('InputText', InputText);
    app.component('Password', Password)
}