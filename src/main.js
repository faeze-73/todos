import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://vue-todos-c3194-default-rtdb.europe-west1.firebasedatabase.app'

createApp(App).mount('#app')
