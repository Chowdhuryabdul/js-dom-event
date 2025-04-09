function makeRed(){
    document.body.style.backgroundColor = 'red'
}

const makeBlack = document.getElementById('make-black')
makeBlack.onclick = makeblackBtn
function makeblackBtn(){
    document.body.style.backgroundColor = 'black'
}


const makePurple = document.getElementById('make-purple');
makePurple.onclick = function makePurpleBtn(){
    document.body.style.backgroundColor = 'purple'
}