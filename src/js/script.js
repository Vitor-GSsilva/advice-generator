const botao = document.querySelector('.att-aviso');
const numeroTemplate = document.querySelector('.id-aviso');
const textoTemplate = document.querySelector('.descricao-aviso')

async function adviceGenerator(){
    try{
    const response = await fetch("https://api.adviceslip.com/advice")

    if (!response.ok){
        throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
      }
      
    const adviceContent = await response.json();
    const numeroId = `Advice #${adviceContent.slip.id}`
    const conselho = `"${adviceContent.slip.advice}"`
    
    numeroTemplate.innerText = numeroId
    textoTemplate.innerText = conselho

}catch(err){
    console.log("Erro inesperado ao carregar a API")
}
}

botao.addEventListener("click", adviceGenerator);

adviceGenerator()