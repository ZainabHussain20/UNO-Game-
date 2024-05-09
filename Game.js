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
let playerTurn = true
// let cpuDelay = Math.floor((Math.random() * computer.length * 200) + 1500)



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
console.log(currentCard)
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
    console.log("Player cards length:", player.length);
    const playerCardsContainer = document.querySelector('.PlayerCard');
    playerCardsContainer.innerHTML = '';

    player.forEach((card, index) => {
        const cardImg = document.createElement('img');
        cardImg.src = card.img;
        cardImg.addEventListener('click', () => {
            if (checkPlayConditions(player[index], currentCard )) {
                currentCard = player[index];
                player.splice(index, 1);
                const playPileImg = document.getElementById('card1');
                playPileImg.src = currentCard.img;
                updatePlayerCards();
            } 
            
            else {
                console.log("You can't play this card");
            }
        });

        if (card.type === 'action' && (card.value === '13' || card.value === '14')) {
            cardImg.addEventListener('click', () => {
                showColorPicker();
            });
        }

        playerCardsContainer.appendChild(cardImg);
    });
    if (player.length === 1) {
        const playerUnoImg = document.querySelector('#Player-uno');
        console.log("Showing Uno animation");
        playerUnoImg.classList.remove('hidden');
    } else {
        const playerUnoImg = document.querySelector('#Player-uno');
        console.log("Hiding Uno animation");
        playerUnoImg.classList.add('hidden');
    }
}





function checkPlayConditions(selectedCard, currentCard) {
    // Check if the selected card is a number card
    if (selectedCard.type === 'number') {
        if (selectedCard.color === currentCard.color || selectedCard.value === currentCard.value) {
            return true;
        }
        return false;
    }



    
    // If the selected card is an action card
   else if (selectedCard.type === 'action') {
        switch (selectedCard.value) {
            case '10': // Skip card
                playAgain=true
                return selectedCard.color === currentCard.color || selectedCard.value === currentCard.value;

            case '11': // Reverse card
                playAgain=true
                return selectedCard.color === currentCard.color || selectedCard.value === currentCard.value;

            case '12': // Draw Two card
                
            playAgain=true;
            // Add two cards from the Draw array to the computer's hand
            for (let i = 0; i < 2; i++) {
                if (Draw.length > 0) {
                    const backCardImg = document.createElement('img');
                    backCardImg.src = 'assets/back.png'; // Assuming the back.png image path
                    compHand.appendChild(backCardImg); // Append the back card to the computer's hand container
                    computer.push(Draw[0]);
                    Draw.shift();
                }
            }
           
            console.log(computer)
            console.log(Draw)
            return selectedCard.color === currentCard.color || selectedCard.value === currentCard.value;

            case '13': 
            // Wild card
                // Wild cards can always be played
                playAgain=true
                return true;

                case '14': // Wild Draw Four card
                playAgain=true;
                // Add four cards from the Draw array to the computer's hand
                for (let i = 0; i < 4; i++) {
                    if (Draw.length > 0) {
                        const backCardImg = document.createElement('img');
                        backCardImg.src = 'assets/back.png'; // Assuming the back.png image path
                        compHand.appendChild(backCardImg); // Append the back card to the computer's hand container
                        computer.push(Draw[0]);
                        Draw.shift();
                    }
                }
                return true;


            default:
                return false; 
        }
    }
    return false;
}


const showColorPicker = () => {
    // show the color picker
    const colorPicker = document.querySelector('.color-picker')
    colorPicker.style.opacity = 1
    colorPickerIsOpen = true

    document.querySelector('.red').addEventListener('click', (e) => {
        chooseColor('red')
    })
    document.querySelector('.green').addEventListener('click', (e) => {
        chooseColor('green')
    })
    document.querySelector('.blue').addEventListener('click', (e) => {
        chooseColor('blue')
    })
    document.querySelector('.yellow').addEventListener('click', (e) => {
        chooseColor('yellow')
    })
}
const chooseColor = (color) => {
    currentCard.color = color; 
    selectedColor = color; 
    console.log("Selected color:", selectedColor);
    console.log("Current card after selecting color:", currentCard);
    const playPileImg = document.getElementById('card1');
    playPileImg.src = currentCard.img;
    hideColorPicker();
}


function hideColorPicker() {
    const colorPicker = document.querySelector('.color-picker')
    colorPicker.style.opacity = 0
    colorPickerIsOpen = false
}



letStart();
