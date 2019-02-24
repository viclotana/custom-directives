import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Vue.directive('focus', {
//   // When the bound element is inserted into the DOM...
//   inserted: function (el) {
//     // Focus the element
//     el.focus()
//   }
// })

new Vue({
  render: h => h(App),
}).$mount('#app')
