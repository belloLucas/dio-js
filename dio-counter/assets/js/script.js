var currentNumWrapper = document.getElementById('currentNum');
var currentNum = 0;

function increment() {
    currentNum = currentNum + 1;
    currentNumWrapper.innerHTML = currentNum;
    if(currentNum > 0){
        document.getElementById('currentNum').style.color = "green";
    }

    /* Way to stop the counter when it reaches 10
    
    if(currentNum == 10){
        document.querySelector('#plus').disabled = true;
    }
    else if(currentNum < -0){
        document.querySelector('#plus').disabled = false;
    }
    */
}
function decrement() {
    currentNum = currentNum - 1;
    currentNumWrapper.innerHTML = currentNum;
    if(currentNum < 0){
        document.getElementById('currentNum').style.color = "red";
    }

    /* Way to stop the counter when it reaches -10

    if(currentNum == -10){
        document.querySelector('#minus').disabled = true;
    }
    else if(currentNum > 0){
        document.querySelector('#minus').disabled = false;
    }
    */
}

