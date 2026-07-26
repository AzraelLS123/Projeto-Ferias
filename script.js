// Animação ao rolar

const elementos = document.querySelectorAll("section");

elementos.forEach(sec=>{
    sec.classList.add("oculto");
});

const observar = new IntersectionObserver((entradas)=>{

    entradas.forEach(entrada=>{

        if(entrada.isIntersecting){

            entrada.target.classList.add("mostrar");

        }

    });

},{
    threshold:0.2
});

elementos.forEach(sec=>observar.observe(sec));

// Efeito de clique nos botões

const botoes = document.querySelectorAll(".btn");

botoes.forEach(botao=>{

    botao.addEventListener("click",()=>{

        botao.innerHTML="Abrindo...";

        setTimeout(()=>{

            if(botao.href.includes("youtube")){

                botao.innerHTML="YouTube";

            }else{

                botao.innerHTML="Google Drive";

            }

        },1000);

    });

});

// Ano automático no rodapé

const footer = document.querySelector("footer p");

footer.innerHTML = `© ${new Date().getFullYear()} - ALL FICTION. Todos os direitos reservados.`;
