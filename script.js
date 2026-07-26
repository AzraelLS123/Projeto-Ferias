// Animação das seções

const secoes=document.querySelectorAll("section");

secoes.forEach(sec=>{

    sec.classList.add("oculto");

});

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("aparecer");

        }

    });

},{threshold:.2});

secoes.forEach(sec=>observer.observe(sec));


// Botões

const botoes=document.querySelectorAll(".btn");

botoes.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.boxShadow="0 0 20px #4fc3ff";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.boxShadow="";

    });

});


// Efeito no título da aba

const titulos=[
"ALL FICTION",
"📚 ALL FICTION",
"🎬 ALL FICTION"
];

let indice=0;

setInterval(()=>{

    document.title=titulos[indice];

    indice++;

    if(indice>=titulos.length){

        indice=0;

    }

},1800);


// Ano automático

const rodape=document.querySelector("footer p");

if(rodape){

rodape.innerHTML=`© ${new Date().getFullYear()} - ALL FICTION. Todos os direitos reservados.`;

}
