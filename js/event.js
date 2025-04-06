console.log('this is seperate js file')

/* option 1 is the directly set on the HTML element */
{/* <button onclick="document.body.style.backgroundColor = 'yellow'">Make yellow</button> */ }

/* option 2 OnClick function on the HTML element*/
 /*{ <button onclick="makeRed()">make red</button>   }    [will use this one very frequent] */

function makeRed() { /* it can be here or it can be external js fiel which is evevt.js */
    document.body.style.backgroundColor = 'red'
}

/* option-3 */
const makeblueButton = document.getElementById('make-blue')
makeblueButton.onclick = makeBlue /* when i set function in onclick then i do not need to call function here */
function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}


/* option 3 -anohter version -- here difference with the previous one is that the function is made in the same line with the onclick 
[we will use this somethim]*/
const purpleButton = document.getElementById('make-purple')
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple'
}

/* option 4 */
const makePinkBtn = document.getElementById('make-pink');
makePinkBtn.addEventListener('click', makePink)
function makePink() {
    document.body.style.backgroundColor = 'pink'
}

/* another version of number 4 */

const makeGreenBtn = document.getElementById('make-green');
makeGreenBtn.addEventListener('click', function makeGreen() { /* it is not necessary that i need to write function name */
    document.body.style.backgroundColor = 'green'
})

/* final versjon of number 4 */

document.getElementById('make-goldenrod').addEventListener('click', function () { /* here function name doesnot add - [we will use this one more- important]*/
    document.body.style.backgroundColor = 'goldenRod'
})