import {getRndInteger} from "./utility.js";
// import getRndInteger from "./utility.js";


const {createApp} = Vue;

createApp({
    data() {
        return {
            email: [],
            emailNumber: 10,
            api_path:'https://flynn.boolean.careers/exercises/api/',
        }
    },
    methods: {

    }
}).mount('#app')