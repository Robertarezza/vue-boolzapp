## Il compito di oggi è quello di svolgere almeno la milestone 1 e 2:

1. [x] Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto.

2. [x] Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione. Click sul contatto mostra la conversazione del contatto cliccato

3. [x] Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
- [x] Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo

4. Ricerca utenti: 
- [x] scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
“mar” rimangono solo Marco e Martina).

5. [x] Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
- [x] Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti.

## Bonus aggiuntivi:
1. [x] evitare che l'utente possa inviare un messaggio vuoto o composto solamente da spazi

2. [x]cambiare icona in basso a destra (a fianco all'input per scrivere un nuovo messaggio) finché l'utente sta scrivendo: 
- di default si visualizza l'icona del microfono, quando l'input non è vuoto si visualizza l'icona dell'aeroplano. 
- Quando il messaggio è stato inviato e l'input si svuota, si torna a visualizzare il microfono.

3. [x]Inviare quindi il messaggio anche cliccando sull'icona dell'aeroplano.

4. [x]predisporre una lista di frasi e/o citazioni da utilizzare al posto della risposta "ok:" quando il pc risponde, anziché scrivere "ok", scegliere una frase random dalla lista e utilizzarla come testo del messaggio di risposta del pc