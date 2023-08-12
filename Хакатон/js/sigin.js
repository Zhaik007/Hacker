const Formas = document.querySelector('#Form')
const users = [{password:"HackerNinja",email:"zhaszhasulan35@gmail.com"},];

function isReal(email,password){
    if(password.value!='HackerNinja' || email.value!='zhaszhasulan35@gmail.com'){
        console.log("Niga works")
    return true}
}

Formas.addEventListener('submit',tekser)
function tekser(event){
    event.preventDefault()
    const {email,password} = event.target
    console.log(email.value,password.value)
    if(isReal(email,password)){
        if (email.value!='zhaszhasulan35@gmail.com') {email.style.borderColor = '#e75a5a'}
        if (password.value!='HackerNinja') {password.style.borderColor = '#e75a5a'}
        setTimeout(() => {
          email.style.borderColor = '#e4eafc';
          password.style.borderColor = '#e4eafc';
        }, 1500);
        return
    }
    window.location.href = "/html/uroki.html";
}
