// Subindo imagens

const uploadBtn = document.getElementById("upload-btn");
const uploadInput = document.getElementById("upload-img");

uploadBtn.addEventListener("click", () => {
    uploadInput.click();
})

// Funcionalidade de leitura de arquivos

function lerConteudoDoArquivo (arquivo) {
    return new Promise( ( resolve, reject ) => {
        const leitor = new FileReader();

        leitor.onload = () => {
            resolve({ url: leitor.result , nome: arquivo.name})
        }

        leitor.onerror = () => {
            reject (`Erro na leitura do arquivo ${arquivo.name}`)
        }

        leitor.readAsDataURL(arquivo)

    }) 
}

const imagemPrincipal = document.querySelector(".main-image");
const nomeDaImagem = document.querySelector(".container-imagem-nome p");

uploadInput.addEventListener("change", async (evento) => {
    const arquivo = evento.target.files[0];

    if(arquivo) {
        try {
            const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
            imagemPrincipal.src = conteudoDoArquivo.url;
            nomeDaImagem.textContent = conteudoDoArquivo.nome;
        } catch (error){
            console.error("Erro na leitura do arquivo")
        }
    }
})