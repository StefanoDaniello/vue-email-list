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
        getEmail(){
        
        for(let i=0 ; i<this.emailNumber ; i++){
            axios.get(this.api_path+ 'random/mail')
            .then((response)=>{
              console.log(response.data.response)
            })
        }
         
        }
    }
}).mount('#app')