const app = new Vue({
    el: '#app',
    data: {
        mail: '',
        array:[],
        
    },
    created() {

        for(i=0;i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                this.mail = res.data.response;
                this.array.push(this.mail);
                
            })
        }
       
        
       
        
    }
});


// Ciao ragazzi,
// Esercizio di oggi: Vue Email List
// nome repo: vue-email-list
// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.