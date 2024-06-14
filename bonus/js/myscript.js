// Utente clicca su un bottone che genererà una griglia di gioco quadrata.

// richiamo container dentro il quale genererò la griglia
const container = document.querySelector(".container");

// richiamo il bottone da cliccare
const button = document.querySelector(".btn");



// creo evento al click per generare griglia
button.addEventListener("click",
    function() {

        // richiamo la select
        let select = document.querySelector("select");

        // trovo il valore della select
        let option = select.value;

        // se viene scelto livello semplice
        if(option === "easy") {
            for(i = 1; i <= 100; i++) {
                giocoCampoMinato("easy");
            }   
            
        }else if(option === "middle") {
            for(i = 1; i <= 81; i++) {
                giocoCampoMinato("middle");
            }
        }else {
            for(i = 1; i <= 49; i++) {
                giocoCampoMinato("hard");
            }
        }   
    }  
)



// FUNZIONE GIOCO CAMPO MINATO
function giocoCampoMinato(livello) {
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
    return container.classList.add(livello);
}