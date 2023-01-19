const btnSubmit = document.getElementById("submit")
const conteudo2 = document.querySelector(".conteudo2")
const conteudo = document.querySelector(".conteudo")
const btns = document.querySelectorAll(".bt")

//voto
btns.forEach(conteudo =>{
    conteudo.addEventListener('click', () =>
    vote.innerHTML = conteudo.value)
})


//oculta conteudo de uma div(conteudo) e substitui por outro(conteudo2)
btnSubmit.addEventListener('click', () => {
        
        if(conteudo.style.display == "block"){
            conteudo.style.display ="none";
        }else{
            conteudo2.style.display = "block";
        }
        conteudo.style.display ="none";
    });
