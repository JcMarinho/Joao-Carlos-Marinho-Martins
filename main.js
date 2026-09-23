let itensNoCarrinho = 0;
function adicionarAoCarrinho(nomeDoProduto) {
    itensNoCarrinho++;
    document.getElementById('contador-carrinho').innerText = itensNoCarrinho;
    mostrarNotificacao(`🛒 "${nomeDoProduto}" adicionado ao carrinho!`);
}

function mostrarNotificacao(mensagem) {
    const toast = document.getElementById("toast-notificacao");
    toast.innerText = mensagem;
    toast.className = "toast mostrar";
    setTimeout(function() {
        toast.className = toast.className.replace("toast mostrar", "toast");
    }, 3000);
}