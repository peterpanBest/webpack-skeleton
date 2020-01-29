import Vue from 'vue';
import App from './App';
import router from './router/index'; 

new Vue({
  router,
  render: createEle => createEle(App)
}).$mount('#app');