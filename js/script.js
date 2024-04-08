import {getRndInteger} from "./utility.js";
// import getRndInteger from "./utility.js";


const {createApp} = Vue;

createApp({
    data() {
        return {
            email: [],
            emailNumber: 10,
            api_path:'https://flynn.boolean.careers/exercises/api/',
            errore:null,
            tanks:null,
        }
    },
    methods: {
        getEmail(){
        const emailList=[]
        for(let i=0 ; i<this.emailNumber ; i++){
            axios.get(this.api_path+ 'random/mail')
            .then((response)=>{
              const email = response.data.response
                emailList.push(email)
               if(i === this.emailNumber -1){
                this.email = [...emailList]
               }
            })
            .catch((error)=>{
                console.log(error)
                this.errore='spiacenti si e verificato un errore'
            })
            .finally(()=>{
                this.tanks='Grazie per aver generato le tue random e-mail'
            })
        }
        }
    }
}).mount('#app')