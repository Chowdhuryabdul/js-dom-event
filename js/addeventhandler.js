const makepinkBtn = document.getElementById('make-pink');
makepinkBtn.addEventListener ('click', makePink)

function makePink(){
    document.body.style.backgroundColor = 'pink'
}


const makeredBtn = document.getElementById('make-red');
makeredBtn.addEventListener('click', function makeRed(){
    document.body.style.backgroundColor = 'red'
});

document.getElementById('make-yellow').addEventListener('click', function(){
    document.body.style.backgroundColor = 'yellow'
});