//console.log(luxon.DateTime.now());


const dt = luxon.DateTime;
const now = dt.now(); //oggetto --> data e ora dell avvio della pagina

///formattare la data
//console.log(now.toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS));

const { createApp } = Vue;

createApp({
    data() {
        return {
            dt: luxon.DateTime,
            now: null, // Ora corrente
            phrases: [
                "Va bene.",
                "Capito!",
                "Ho ricevuto il messaggio.",
                "Sì, sono qui.",
                "Certamente.",
                "In effetti!",
                "Sono d'accordo.",
                "Certo, nessun problema.",
                "Interessante punto di vista.",
                "Grazie per l'informazione.",
                "Lo terrò presente.",
                "Dipende."
            ],
            selectedMessageIndex: null,
            search: "",
            newMessage: {
                date: '',
                message: '',
                status: 'sent'
            },
            activeContact: 0,
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        }
    },
    mounted() {
        this.updateNow()
    },
    methods: {
        setActiveContact(index) {
            this.activeContact = index;
            console.log(this.contacts[this.activeContact]);
            console.log(this.contacts[this.activeContact].avatar)
            //console.log(this.contacts[this.activeContact].messages[this.activeContact].date)

            if (this.contacts[this.activeContact].messages && this.contacts[this.activeContact].messages.length > 0) {
                console.log(this.contacts[this.activeContact].messages[0].date);
            }
        },

        getRandomPhrase: function () {
            return this.phrases[Math.floor(Math.random() * this.phrases.length)];
        },


        addMessage: function () {
            console.log("newMessage");
            const activeContactIndex = this.activeContact;
            const now = this.dt.now().toLocaleString(this.dt.DATETIME_SHORT_WITH_SECONDS);
            if (this.newMessage.message !== "") {

                
                this.contacts[activeContactIndex].messages.push({ ...this.newMessage })
                this.newMessage.data = now,
                console.log(this.newMessage.data);
                this.newMessage.message = "",
                this.newMessage.status = 'sent';

                this.contacts[activeContactIndex].data = "Online";
                console.log(this.contacts[activeContactIndex].data);

                setTimeout(() => {
                    this.contacts[activeContactIndex].data = "sta scrivendo...";
                    //console.log(this.contacts[activeContactIndex].data);
                }, 1000);

                 setTimeout(() => {
                    this.contacts[activeContactIndex].data = "online";
                     //console.log(this.contacts[activeContactIndex].data);
                }, 2000);
        
               
                setTimeout(() => {
                    //const now = this.dt.now().toLocaleString(this.dt.DATETIME_SHORT_WITH_SECONDS);
                    const randomPhrase = this.getRandomPhrase();
        
                   
                    this.contacts[activeContactIndex].messages.push({
                        date: now,
                        message: randomPhrase,
                        status: 'received'
                    });
        
                   
                    setTimeout(() => {
                        this.contacts[activeContactIndex].data = `ultimo accesso alle ${now}`;
                    }, 3000);
                }, 3000);
            }
        },
        filterContacts() {

            this.contacts.forEach(curContact => {
                if (curContact.name.toLowerCase().includes(this.search.toLowerCase())) {
                    console.log(curContact.name, this.search);
                    curContact.visible = true;
                } else {
                    curContact.visible = false;

                }
            });

        },

        deleteMessage() {

            if (this.selectedMessageIndex !== null) {
                this.contacts[this.activeContact].messages.splice(this.selectedMessageIndex, 1);


                this.selectedMessageIndex = null;
            }
        },
        updateNow() {
            this.now = this.dt.now(); // Aggiorna l'ora corrente
            
        }
    },

}).mount("#app")