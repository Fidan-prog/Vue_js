 const HelloVueApp = {
    data() {
        return {
            message: 'Hello World'
        }
    }
}
Vue.createApp(HelloVueApp).mount('#hello-vue')

const Counter = {
    data() {
        return {
            counter: 0
        }
    },
    mounted() {
        setInterval(() => {
            this.counter++
        }, 1000)
    }
}
Vue.createApp(Counter).mount('#counter')

const AttributeBinding = {
    data() {
        return {
            mes: 'Страница загружена ' + new Date().toLocaleString()
        }
    }
}
Vue.createApp(AttributeBinding).mount('#bind-attribute')

// PR2
const EventHandling = {
    data() {
        return {
            message: 'Привет, Vue.js!'
        }
    },
    methods: {
        reverseMessage() {
            this.message = this.message
            .split('')
            .reverse()
            .join('')
        }
    }
}
Vue.createApp(EventHandling).mount('#event-handling')

const TwoWayBinding = {
    data() {
        return{
            message: 'Привет, Vue.js!'
        }
    }
}
Vue.createApp(TwoWayBinding).mount('#two-way-binding')

const CounditionalRendering = {
    data() {
        return{
            seen: false
        }
    }
}
Vue.createApp(CounditionalRendering).mount('#counditional-rendering')

const ListRendering = {
    data() {
        return{
            todos: [
                {text: 'я учу js', level: '6'},
                {text: 'я учу Vue', level: '2'},
                {text: 'я учу Frontend', level: '5'}
            ]
        }
    }
}
Vue.createApp(ListRendering).mount('#list-rendering')
