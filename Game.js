//DOM Variables
const compHand = document.querySelector('.computerCard')
const playerHand = document.querySelector('.PlayerCard')


const playPileDom = document.querySelector('.play-pile')
const drawPileDom = document.querySelector('.draw-pile')

const playerUno = document.querySelector('.player-animation')
const cpuUno = document.querySelector('.computer-animation')


//some global variables 

const initUNO = [
    //blue color
    {type:'number',color:'blue',value:'0',img:'assets/blue0.png' },
    {type:'number',color:'blue',value:'1',img:'assets/blue1.png'},
    {type:'number', color:'blue',value:'2',img:'assets/blue2.png'},
    {type:'number',color:'blue',value:'3',img:'assets/blue3.png'},
    {type:'number',color:'blue',value:'4',img:'assets/blue4.png'},
    {type:'number',color:'blue',value:'5',img:'assets/blue5.png'},
    {type:'number',color:'blue', value:'6',img:'assets/blue6.png'},
    {type:'number',color:'blue',value:'7',img:'assets/blue7.png'},
    {type:'number',color:'blue',value:'8',img:'assets/blue8.png'},
    {type:'number',color:'blue',value:'9',img:'assets/blue9.png'},
    {type:'action',color:'blue',value:'10',img:'assets/blue10.png'},
    {type:'action',color:'blue',value:'11',img:'assets/blue11.png'},
    {type:'action',color:'blue',value:'12',img:'assets/blue12.png'},
    //Yellow color
    {type:'number',color:'yellow',value:'0',img:'assets/yellow0.png' },
    {type:'number',color:'yellow',value:'1',img:'assets/yellow1.png'},
    {type:'number', color:'yellow',value:'2',img:'assets/yellow2.png'},
    {type:'number',color:'yellow',value:'3',img:'assets/yellow3.png'},
    {type:'number',color:'yellow',value:'4',img:'assets/yellow4.png'},
    {type:'number',color:'yellow',value:'5',img:'assets/yellow5.png'},
    {type:'number',color:'yellow', value:'6',img:'assets/yellow6.png'},
    {type:'number',color:'yellow',value:'7',img:'assets/yellow7.png'},
    {type:'number',color:'yellow',value:'8',img:'assets/yellow8.png'},
    {type:'number',color:'yellow',value:'9',img:'assets/yellow9.png'},
    {type:'action',color:'yellow',value:'10',img:'assets/yellow10.png'},
    {type:'action',color:'yellow',value:'11',img:'assets/yellow11.png'},
    {type:'action',color:'yellow',value:'12',img:'assets/yellow12.png'},
    //red color
    {type:'number',color:'red',value:'0',img:'assets/red0.png' },
    {type:'number',color:'red',value:'1',img:'assets/red1.png'},
    {type:'number', color:'red',value:'2',img:'assets/red2.png'},
    {type:'number',color:'red',value:'3',img:'assets/red3.png'},
    {type:'number',color:'red',value:'4',img:'assets/red4.png'},
    {type:'number',color:'red',value:'5',img:'assets/red5.png'},
    {type:'number',color:'red', value:'6',img:'assets/red6.png'},
    {type:'number',color:'red',value:'7',img:'assets/red7.png'},
    {type:'number',color:'red',value:'8',img:'assets/red8.png'},
    {type:'number',color:'red',value:'9',img:'assets/red9.png'},
    {type:'action',color:'red',value:'10',img:'assets/red10.png'},
    {type:'action',color:'red',value:'11',img:'assets/red11.png'},
    {type:'action',color:'red',value:'12',img:'assets/red12.png'},
    //green color 
    {type:'number',color:'green',value:'0',img:'assets/green0.png' },
    {type:'number',color:'green',value:'1',img:'assets/green1.png'},
    {type:'number', color:'green',value:'2',img:'assets/green2.png'},
    {type:'number',color:'green',value:'3',img:'assets/green3.png'},
    {type:'number',color:'green',value:'4',img:'assets/green4.png'},
    {type:'number',color:'green',value:'5',img:'assets/green5.png'},
    {type:'number',color:'green', value:'6',img:'assets/green6.png'},
    {type:'number',color:'green',value:'7',img:'assets/green7.png'},
    {type:'number',color:'green',value:'8',img:'assets/green8.png'},
    {type:'number',color:'green',value:'9',img:'assets/green9.png'},
    {type:'action',color:'green',value:'10',img:'assets/green10.png'},
    {type:'action',color:'green',value:'11',img:'assets/green11.png'},
    {type:'action',color:'green',value:'12',img:'assets/green12.png'},
    //wild card 
    {type:'action',color:'',value:'13',img:'assets/wild13.png'},
    {type:'action',color:'',value:'14',img:'assets/wild14.png'},
    {type:'action',color:'',value:'13',img:'assets/wild13.png'},
    {type:'action',color:'',value:'14',img:'assets/wild14.png'},
    {type:'action',color:'',value:'13',img:'assets/wild13.png'},
    {type:'action',color:'',value:'13',img:'assets/wild13.png'},
    {type:'action',color:'',value:'14',img:'assets/wild14.png'},
]

let currentColor='';
let currentNumber='';
let GameState= true 
let playerState = true
let computerState= false
let play='player'
let player=[]
let computer=[]
let currentCard=''
let Draw=[]
let UNO=[...initUNO]
playAgain=false 
let selectedColor =''

//Search About it (I don't know it before)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


function letStart() {

// Select a random card from UNO array
let randomIndex = Math.floor(Math.random() * UNO.length);
currentCard = UNO[randomIndex];

// If the randomly selected card is of type 'action', choose another random index until it selects a card of type 'number'
while (currentCard.type === 'action') {
    randomIndex = Math.floor(Math.random() * UNO.length);
    currentCard = UNO[randomIndex];
}

// Remove the selected card from the UNO array
UNO.splice(randomIndex, 1);

// Update the play pile image with the selected card's image
const playPileImg = document.getElementById('card1');
playPileImg.src = currentCard.img;

    
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * UNO.length);
        computer.push(UNO[randomIndex]);
        UNO.splice(randomIndex, 1);
    }
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * UNO.length);
        player.push(UNO[randomIndex]);
        UNO.splice(randomIndex, 1);
    }
   
    updatePlayerCards(); 
    updateComputerCards();
    updateGameState()
    

    Draw = UNO;
    shuffleArray(Draw);
    drawPileDom.addEventListener('click', () => {
        console.log("Draw pile clicked");
        if (Draw.length > 0) {
            player.push(Draw[0]);
            Draw.shift();
            console.log("Player:", player); 
            console.log("Draw:", Draw); 
            updatePlayerCards(); 
            playAgain = false; 
        }
        else {
            console.log('Draw empty')
        }
    });

    console.log('Current Card:', currentCard);
    console.log('Computer:', computer);
    console.log('Player:', player);
    console.log('Draw Pile:', Draw);

    // Reset UNO array
    UNO = [...initUNO];
    
    
    
}




function resetGame() {
    UNO = [...initUNO];
    currentCard = '';
    computer = [];
    player = [];
    Draw = [];
    letStart();
    
}

function updatePlayerCards() {
    const playerCardsContainer = document.querySelector('.PlayerCard');
    playerCardsContainer.innerHTML = '';

    player.forEach((card, index) => {
        const cardImg = document.createElement('img');
        cardImg.src = card.img;
        cardImg.addEventListener('click', () => {
            if (checkPlayConditions(player[index], currentCard)) {
                currentCard = player[index];
                // Remove the clicked card from the player array
                player.splice(index, 1);
                // Update the play pile card
                const playPileImg = document.getElementById('card1');
                playPileImg.src = currentCard.img;
                // Re-render the player's cards
                updatePlayerCards();
                playAgain = false; // Reset playAgain flag after playing a valid card
            } else {
                console.log("You can't play this card");
            }
        });

        cardImg.addEventListener('mouseenter', () => {
            if (player[index].type === 'action' && (player[index].value === '13' || player[index].value === '14')) {
                // If it's a wild card, add a border with the color chosen by the user
                cardImg.style.border = `2px solid ${selectedColor}`;
            }
        });
        
        cardImg.addEventListener('mouseleave', () => {
            // Remove the border when the mouse leaves the card
            cardImg.style.border = 'none';
        });

        // Show color picker when clicking on a wild card
        if (card.type === 'action' && (card.value === '13' || card.value === '14')) {
            cardImg.addEventListener('click', () => {
                showColorPicker();
            });
        }

        playerCardsContainer.appendChild(cardImg);
    });
}


function updateComputerCards() {
    const computerCardsContainer = document.querySelector('.computerCard'); 
    computerCardsContainer.innerHTML = '';

    computer.forEach((card, index) => {
        const cardImg = document.createElement('img');
        cardImg.src = 'assets/back.png';

        //to disable interaction
        cardImg.style.pointerEvents = 'none';

        computerCardsContainer.appendChild(cardImg);
    });
}
function playCard(selectedCard, index) {
    if (checkPlayConditions(selectedCard)) {
        currentCard = selectedCard;
        player.splice(index, 1);
        const playPileImg = document.getElementById('card1');
        playPileImg.src = currentCard.img;
        updatePlayerCards();
        playAgain = false;

        // Handle Skip and Reverse cards
        if (currentCard.value === '10' || currentCard.value === '11') {
            switchTurns(); // Skip the computer's turn
        }

        // Handle Wild cards
        if (currentCard.value === '13' || currentCard.value === '14') {
            showColorPicker();
            return;
        }

        switchTurns();
    } else {
        console.log("You can't play this card");
    }
}


// function checkPlayConditions(selectedCard, currentCard) {
//     // Check if the selected card is a number card
//     if (selectedCard.type === 'number') {
//         if (selectedCard.color === currentCard.color || selectedCard.value === currentCard.value) {
//             return true;
//         }
//         return false;
//     }



    
//     // If the selected card is an action card
//    else if (selectedCard.type === 'action') {
//         switch (selectedCard.value) {
//             case '10': // Skip card
//                 playAgain=true
//                 return selectedCard.color === currentCard.color || selectedCard.value === currentCard.value;

//             case '11': // Reverse card
//                 playAgain=true
//                 return selectedCard.color === currentCard.color || selectedCard.value === currentCard.value;

//             case '12': // Draw Two card
                
//                 playAgain=true
//                 return selectedCard.color === currentCard.color || selectedCard.value === currentCard.value;
                
//             case '13': 
//             // Wild card
//                 // Wild cards can always be played
//                 playAgain=true
//                 return true;

//             case '14': 
//             // Wild Draw Four card
//             // Wild cards can always be played

//                 playAgain=true
//                 return true;

//             default:
//                 return false; 
//         }
//     }
//     return false;
// }
function checkPlayConditions(selectedCard) {
    if (selectedCard.type === 'number') {
        return selectedCard.color === currentCard.color || selectedCard.value === currentCard.value;
    } else if (selectedCard.type === 'action') {
        switch (selectedCard.value) {
            case '10': // Skip card
            case '11': // Reverse card
            case '12': // Draw Two card
                return selectedCard.color === currentCard.color || selectedCard.value === currentCard.value;
            case '13': // Wild card
            case '14': // Wild Draw Four card
                return true;
            default:
                return false;
        }
    }
}

const showColorPicker = () => {
    // show the color picker
    const colorPicker = document.querySelector('.color-picker')
    colorPicker.style.opacity = 1
    colorPickerIsOpen = true

    document.querySelector('.red').addEventListener('click', (e) => {
        chooseColor('rgb(255, 6, 0)')
    })
    document.querySelector('.green').addEventListener('click', (e) => {
        chooseColor('rgb(0, 170, 69)')
    })
    document.querySelector('.blue').addEventListener('click', (e) => {
        chooseColor('rgb(0, 150, 224)')
    })
    document.querySelector('.yellow').addEventListener('click', (e) => {
        chooseColor('rgb(255, 222, 0)')
    })
}

const chooseColor = (rgb) => {
    currentCard.color = rgb; 
    selectedColor = rgb; 
    // hide the color picker class again
    hideColorPicker();
}

function hideColorPicker() {
    const colorPicker = document.querySelector('.color-picker')
    colorPicker.style.opacity = 0
    colorPickerIsOpen = false
}
// Function to handle player's turn
function playerTurn() {
    // Check if the player has any valid cards to play
    let validCards = player.filter(card => checkPlayConditions(card));

    if (validCards.length > 0) {
        // Player has valid cards to play
        // Implement logic to allow the player to choose a card to play
        // For simplicity, let's assume the player plays the first valid card in their hand
        const selectedCard = validCards[0];

        // Remove the selected card from the player's hand
        const index = player.findIndex(card => card === selectedCard);
        player.splice(index, 1);

        // Update the current card
        currentCard = selectedCard;

        // Update the play pile card
        const playPileImg = document.getElementById('card1');
        playPileImg.src = currentCard.img;

        // Re-render the player's cards
        updatePlayerCards();

        // Check if the player has won
        if (player.length === 0) {
            console.log("Player wins!");
            // End the game or reset
        } else {
            // Switch turns to the computer
            switchTurns();
        }
    } else {
        // Player doesn't have any valid cards to play, so they must draw from the draw pile
        console.log("Player draws a card from the draw pile.");
        player.push(Draw.pop());
        updatePlayerCards();

        // Check if the drawn card can be played
        if (checkPlayConditions(player[player.length - 1])) {
            console.log("Player can play the drawn card.");
            // Implement logic here if needed
        } else {
            console.log("Player cannot play the drawn card.");
            // Switch turns to the computer
            switchTurns();
        }
    }
}
function computerTurn() {
    // Check if the computer has any valid cards to play
    let validCards = computer.filter(card => checkPlayConditions(card));

    if (validCards.length > 0) {
        // Choose the first valid card from its hand
        const selectedCard = validCards[0];
        // Remove the selected card from the computer's hand
        const index = computer.findIndex(card => card === selectedCard);
        computer.splice(index, 1);
        // Update the current card
        currentCard = selectedCard;
        // Update the play pile card
        const playPileImg = document.getElementById('card1');
        playPileImg.src = currentCard.img;
        // Re-render the computer's cards
        updateComputerCards();
        // Check if the computer has won
        if (computer.length === 0) {
            console.log("Computer wins!");
            // End the game or reset
        } else {
            // Switch turns to the player
            switchTurns();
        }
    } else {
        // Computer doesn't have any valid cards to play, so it must draw from the draw pile
        console.log("Computer draws a card from the draw pile.");
        computer.push(Draw.pop());
        updateComputerCards();
        // Check if the computer can play the drawn card
        if (checkPlayConditions(computer[computer.length - 1])) {
            console.log("Computer can play the drawn card.");
            // Implement logic here if needed
        } else {
            console.log("Computer cannot play the drawn card.");
            // Switch turns to the player
            switchTurns();
        }
    }
}



function updateGameState() {
    if (computerState) {
        computerTurn();
    } else if (playerState) {
        playerTurn();
    }
}


function switchTurns() {
    playerState = !playerState;
    computerState = !computerState;
}





letStart();
