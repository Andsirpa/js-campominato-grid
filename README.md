# TRACCIA

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


Partiamo da quanto fatto già ieri, quindi lavoriamo nella stessa repo.
Step 1) Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
Step 2) In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
Step 3) La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe). Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
Bonus 1
Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle.
Bonus 2
Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste. 


# SVOLGIMENTO

- creo un bottone per generare la griglia
    - creo una funzione per generare la griglia
    - invoco la funzione al momento del click

- selesiono la difficoltà tramite un SELECT

- creo una funzione per generare un numero diverso di celle a seconda della difficoltà selezionata

- genero le bombe

- gestisco il click delle celle
    - verde se è una cella safe
    - rosso se è una bomba

- gestisco il click di una bomba
    - termina la partita
    - mostra un alert con il punteggio totalizzato
    - scopro tutte le bombe nascoste
    

