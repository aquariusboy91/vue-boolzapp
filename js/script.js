// Milestone 1
// Replica della grafica con la possibilità 
// di avere messaggi scritti dall’utente (verdi) e 
// dall’interlocutore (bianco) assegnando due classi 
// CSS diverse
// Visualizzazione dinamica della lista
//  contatti: tramite la direttiva v-for, 
//  visualizzare nome e immagine di ogni contatto

// Milestone 2
// Visualizzazione dinamica 
// dei messaggi: tramite la direttiva v-for, 
// visualizzare tutti i messaggi relativi al
//  contatto attivo all’interno del pannello 
//  della conversazione
// Click sul contatto mostra
//  la conversazione del contatto cliccato

// Milestone 3
// Aggiunta di un messaggio: l’utente scrive
//  un testo nella parte bassa e digitando “enter” 
//  il testo viene aggiunto al thread sopra, come 
//  messaggio verde
// Risposta dall’interlocutore: ad ogni inserimento 
// di un messaggio, l’utente riceverà un “ok” come 
// risposta, che apparirà dopo 1 secondo.

// Milestone 4
// Ricerca utenti: scrivendo qualcosa nell’input
//  a sinistra, vengono visualizzati solo i contatti
//   il cui nome contiene le lettere inserite (es, Marco, 
//     Matteo Martina -> Scrivo “mar” rimangono solo 
//     Marco e Martina)


// Cancella messaggio: cliccando sul messaggio appare un 
// menu a tendina che permette di cancellare 
// il messaggio selezionato



  var app = new Vue({
    el: '#app',
    data: {
      io_image: "avatar_io.jpg",
      image_chat: "avatar_3.jpg",
      bgchat: {backgroundImage: "url(mine.jpg)"},
      indexA: 0,
      indexB: '',
      textInput: '',
      search: '',
      drop_visible: false,
      contacts: [
        {
          name: "Michele",
          avatar: "avatar_1.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              text: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              text: "Ricordati di dargli da mangiare",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              text: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "avatar_2.jpg",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              text: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              text: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              text: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
      
        {
          name: "Samuele",
          avatar: "avatar_3.jpg",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              text: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              text: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              text: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Luisa",
          avatar: "avatar_4.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              text: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              text: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
      ]
    },
    methods:{
      activeContact: function(index) {
        this.indexA = index;
        console.log(this.indexA);
      },
      timeoutAnswer: function () { 
        this.contacts[this.indexA].messages.push({text : "ok",
        status:"received"});
    },
      submit: function () {
        console.log(this.textInput)
        this.contacts[this.indexA].messages.push({text : this.textInput,
        status:"sent"});
        setTimeout(function () { this.timeoutAnswer() }.bind(this), 1000)
        
    },
      nameSearch: function () {
      console.log(this.search)
      this.contacts.forEach(element=> {
        console.log(element.name)
        if(element.name.toLowerCase().includes(this.search.toLowerCase())) {
          element.visible = true;
          
        } else {
          element.visible = false;
        }
      });
  },
    dropdown: function(index){
      this.indexB = index;
      console.log(this.indexB)
      this.drop_visible= !this.drop_visible;
    }

    }
  })