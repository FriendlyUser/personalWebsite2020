// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
  })
  Vue.use(Buefy)
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
