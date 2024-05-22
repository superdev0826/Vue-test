import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import DateInput from './components/ui/DateInput.vue'
import maskDate from './directives/date-mask'
const app = createApp(App)

app.component('DateInput', DateInput)
app.directive('maskDate', maskDate)
app.mount('#app')
