import Vue from 'vue'
import App from './App.vue'
import router from './router'



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

const button = document.getElementById('button');

button.addEventListener('click', (event) => {
  event.preventDefault();
  checkInputs();

})

function checkInputs(){
  form.classList = 'form back';
  sucess.classList = 'sucess go';
}