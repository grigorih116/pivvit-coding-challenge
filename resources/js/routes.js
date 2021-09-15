import Offerings from "./components/offerings/Offerings.vue"
import Purchases from "./components/purchases/Purchases.vue"


const routes = [
    {
        path: '',
        redirect: '/offerings' 
    },
    {
        path: '/offerings',
        component: Offerings
    },
    {
        path: '/purchases',
        component: Purchases
    }
]

export default routes;