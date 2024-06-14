// Utente clicca su un bottone che genererà una griglia di gioco quadrata.

// richiamo container dentro il quale genererò la griglia
const container = document.querySelector(".container");

// richiamo il bottone da cliccare
const button = document.querySelector(".btn");


// creo evento al click per generare griglia
button.addEventListener("click",
    function() {

        // creo ciclo
        for(i = 1; i <= 100; i++) {
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
                }
            )         
            // metto i numeri all'interno dei box
            box.append(content);
            // li metto nel container
            container.append(box);
        }   
    }  
)
