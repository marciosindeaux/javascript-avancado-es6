class NegociacaoController{
    

    adiciona(event){
        event.preventDefault();

        let select = document.querySelector.bind(document);

        let inputData = select('#data');
        let inputQuantidade = select('#quantidade');
        let inputValor = select('#valor');

        console.log(inputQuantidade.value);
        console.log(inputValor.value);
    }
}