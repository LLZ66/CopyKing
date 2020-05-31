import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Select, DatePicker, Alert } from 'element-ui';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(DatePicker.name, DatePicker);
Vue.component(Alert.name, Alert);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
