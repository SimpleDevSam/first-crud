import { clienteService } from "../service/cliente-service.js";

(async ()=> {
    const pegaUrl = new URL(window.location);

    console.log(pegaUrl);
    
    const id = pegaUrl.searchParams.get("id");
    
    const inputNome = document.querySelector("[data-nome]");
    const inputEmail = document.querySelector("[data-email]");
    
    try {
        const dados = await clienteService.detalhaCliente(id)
        dados => {
            inputNome.value = dados.nome;
            inputEmail.value = dados.email;
    }
}
    catch(erro){
        console.log(erro);
        window.location.href = "../telas/erro.html"
    }
    
    const formulario = document.querySelector("[data-form]");
    
    formulario.addEventListener('submit', async (evento)=>{
        evento.preventDefault();
        try{
            await clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)
            window.location.href = "./edicao_concluida.html"
        }
        catch(erro){
            console.log(erro);
            window.location.href = "../telas/erro.html"
        }
    })
}) ()

