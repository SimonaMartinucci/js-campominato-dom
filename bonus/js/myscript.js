// Utente clicca su un bottone che genererà una griglia di gioco quadrata.

// richiamo container dentro il quale genererò la griglia
const container = document.querySelector(".container");

// richiamo il bottone da cliccare
const button = document.querySelector(".btn");

// richiamo div score
let score = document.querySelector(".score");


// creo evento al click per generare griglia
button.addEventListener("click",
    function() {

        // rimuovo qualsiasi classe riguardante il livello ad ogni click
        container.classList.remove("easy", "middle", "hard");

         // richiamo la select
        let select = document.querySelector("select");

        // trovo il valore della select
        let option = select.value;  

        let numeroCelle = 100;

        if(option === "middle") {
            numeroCelle = 81;
        }else if(option === "hard") {
            numeroCelle = 49;
        }

        // richiamo funzione che mi genera 16 num random
        let bombs = arrayRandDiversi();

        // richiamo div del punteggio
        let score = document.querySelector(".score");

        //  svuoto il container e il punteggio ogni volta che clicco il bottone
        container.innerHTML = "";
        score.innerHTML = "";

        // creo contatore per punteggio
        let contatore = 0;

        // creo ciclo
        for(i = 1; i <= numeroCelle; i++) {

            // richiamo funzione per creare i box con classe
            const box = createClassElement("div", "box");

            // dico che il contenuto sono i numeri generati dal ciclo
            let content = i;

            // creo evento al click per colorare box
            box.addEventListener("click",
                function() {
                    box.classList.add("clicked");
                    // emetto un messaggio in console con il numero della cella cliccata
                    console.log(content);

                    // aumento valore del contatore ad ogni click
                    contatore++;
                    // inserisco punteggio
                    score.innerHTML = "Il tuo punteggio è: " + contatore;

                    for(i = 1; i <= 84; i++) {

                        if(bombs.includes(content)) {
                            // aggiungo classe alle bombe
                            box.classList.add("boom");
                            // metto regola per non conteggiare il click sulla bomba
                            let sconfitta = contatore - 1;
                            // inserisco messaggio sconfitta
                            score.innerHTML = "HAI PERSO!!! Il tuo punteggio è stato: " + sconfitta;
                        }
                    }    
                }
            )         
            // metto i numeri all'interno dei box
            box.append(content);
            
            // li metto nel container
            container.append(box);
            
            // rendo visibile div punteggio
            score.classList.add("active");
        } 

        // aggiungo classe a container sulla base del livello
        if(numeroCelle === 81) {
            container.classList.add("middle");
        }else if(numeroCelle === 49) {
            container.classList.add("hard");
        }else {
            container.classList.add("easy");
        }
        
    }  
)