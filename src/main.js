import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource";
import MaskedInput from 'vue-text-mask'


import InputText from './InputText'
import OutPutText from './OutPutText'

Vue.use(VueResource);

Vue.component('app-InputText',InputText);
Vue.component('app-OutPutText',OutPutText);
Vue.component('masked-input', MaskedInput);

new Vue({
  el: '#app',
  render: h => h(App)
})
