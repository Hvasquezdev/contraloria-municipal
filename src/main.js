import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './../node_modules/bulma/css/bulma.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faEnvelope, faLock, faComment, faSearch, faPaperPlane, faHome, faInbox, faUserCircle, faUserTag, faQuoteLeft, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add(faUser, faEnvelope, faLock, faComment, faSearch, faPaperPlane, faHome, faInbox, faUserCircle, faUserTag, faQuoteLeft, faUpload)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
