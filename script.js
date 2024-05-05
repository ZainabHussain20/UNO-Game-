let timer = Date.now()+(3*1000)

//Update timer after each sec
let t = setInterval(function(){
    //take the current time 
    let now = Date.now()

    //calculate remaining time 
    let rem = timer - now 

    let sec = Math.floor((rem % (1000*10))/1000)

     document.getElementById('timer').innerHTML=sec
    //When timer finish 
    if (rem <0 ){
        clearInterval(t)
        window.location.href='rulesPage.html'
    }
}, 1000)