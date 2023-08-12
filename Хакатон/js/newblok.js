const btn1 = document.querySelector('burys')
const btn2 = document.querySelector('dyrys')
const div1 = document.querySelector('#false')
const div2 = document.querySelector('#true')

btn1.addEventListener('click',showdiv)

function showdiv(){
   div1.style.display = "block";
   div2.style.display = 'none'
}

btn2.addEventListener('click',showans)
function showans(){
    div1.style.display = 'none'
    div2.style.display = "block";
}