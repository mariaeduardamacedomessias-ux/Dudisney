const botoesAbas = document.querySelectorAll(".aba-btn");
const conteudosAbas = document.querySelectorAll(".aba-conteudo");

botoesAbas.forEach((botao) => {
    botao.addEventListener("click", () => {
         const aba = botao.dataset.aba;

         botoesAbas.forEach((b) => b.classList.remove("ativo"));
         conteudosAbas.forEach((c) => c.classList.remove("ativo"));
        
         botao.classList.add("ativo");
         document.getElementById(`aba-${aba}`).classList.add("ativo");


    });
    
});

const fotoPerfil = document.getElementById("fotoPerfil");
const fotoPreview = document.querySelector(".foto-preview");

if(fotoPerfil) {
    
}