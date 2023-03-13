import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { defineAsyncComponent } from 'vue'

// icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'

// Quasar css
import 'quasar/src/css/index.sass'
import './styles/main.sass'

import App from './App.vue'
const myApp = createApp(App)

myApp.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
    /*
    config: {
      brand: {
        // primary: '#e46262',
        // ... or all other brand colors
      },
      notify: {...}, // default set of options for Notify Quasar plugin
      loading: {...}, // default set of options for Loading Quasar plugin
      loadingBar: { ... }, // settings for LoadingBar Quasar plugin
      // ..and many more (check Installation card on each Quasar component/directive/plugin)
    }
    */
})

// auto import all components
const globalComponentsPaths = import.meta.glob('/src/components/**/*.vue')
Object.entries(globalComponentsPaths).forEach(([path, module]) => {
    // "./components/SvgIcon.vue" -> "SvgIcon"
    const componentName = path
        .split('/')
        .pop()
        .replace(/\.vue$/, '')

    myApp.component(componentName, defineAsyncComponent(module))
})



// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')
