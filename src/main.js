import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import veeValidatePlugins from './plugins/vee-validate'

const app = createApp(App)
import VueTelInput from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import VueTheMask from "vue-the-mask"

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faEye,  faEyeSlash} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faEye, faEyeSlash)
const VueTelInputOptions = {
  mode: 'international',
  onlyCountries: ['UZ', 'RU', 'US']
}
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)
app.use(VueTheMask)
app.use(veeValidatePlugins)
app.use(VueTelInput, VueTelInputOptions)

app.mount('#app')
