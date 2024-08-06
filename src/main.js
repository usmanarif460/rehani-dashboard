
import './style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import NewHamburgerMenu from '@/components/NewHamburgerDropDown.vue'
import TheLogo from './components/TheLogo.vue'
import TheUsers from './components/TheUsers.vue'
import TheButton from './components/TheButton.vue'
import TheProjects from './components/TheProjects.vue'
import TheApplications from './components/TheApplications.vue'
import TheProperties from './components/TheProperties.vue'
import TheNotifications from './components/TheNotifications.vue'
import App from './App.vue'
const app = createApp(App)
app.component('HamburgerDropdown', NewHamburgerMenu).component('TheLogo', TheLogo).component('TheUsers', TheUsers).component('TheButton', TheButton).component('TheProjects', TheProjects).component('TheApplications', TheApplications).component('TheProperties', TheProperties).component('TheNotifications', TheNotifications)
app.use(createPinia())
app.mount('#app')
import './assets/index.css'