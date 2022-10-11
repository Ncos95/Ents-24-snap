let deckA = [];

let deckB = [];

//player 1
let crackle = 'Crackle';

let cracklesScore = 0;

//player 2
let pop = 'Pop';

let popsScore = 0;

let cards = [2,3,4,5,6,7,8,9,10,'jack','queen','king','ace',2,3,4,5,6,7,8,9,10,'jack','queen','king','ace',2,3,4,5,6,7,8,9,10,'jack','queen','king','ace',2,3,4,5,6,7,8,9,10,'jack','queen','king','ace'];

//randomises the cards array
const shuffleCards = () => {
    
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }

    console.log("Cards have been shuffled");

    return cards;
}

//splits the randomised cards array into 2
const splitDeck = () => {    

    deckA = cards.splice(cards.length - 26, 52);
    deckB = cards.splice(cards.length - 26, 26);

    console.log("The deck has been split in 2");

    return deckA, deckB;
}

//'deals' the cards each round by looping through both arrays at the same time and forcing a 'snap' if they match
const playSnap = () => {

    let cracklesCard;

    let popsCard;

    let round = 0;

    console.log("Let's play snap!");

    deckA.forEach((cracklesCard, i) => {
        setTimeout(() => {
            const popsCard = deckB[i];
            console.log(cracklesCard, popsCard);
    
            if (cracklesCard == popsCard){

                let winner = (Math.random()>=0.5) ? 1 : 0;

                if (winner === 0){
                    console.log('Crackle calls Snap!');
                    cracklesScore ++;
                    console.log('Crackle wins a point!');
                }
                else {
                    console.log('Pop calls Snap!');
                    popsScore ++;
                    console.log('Pop wins a point!');
                }
            }

            round ++;

            if (round == 26){

                console.log('Game is finished! Crackle has ' + cracklesScore + ' while Pop has ' + popsScore);
        
                if (cracklesScore > popsScore){
                    console.log('Crackle wins!');
                }
                else if (cracklesScore == popsScore){
                    console.log("It's a draw!");
                }
                else {
                    console.log('Pop wins!');
                }
            }

        }, i * 500)
    });
}

shuffleCards();

splitDeck();

playSnap();