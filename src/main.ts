import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import DateInput from './components/ui/DateInput.vue'
const app = createApp(App)

app.component("DateInput",DateInput)
app.mount('#app')
