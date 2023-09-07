$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botão-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit',function(e){
        e.preventDefault();
        const enderecoDANovaImagem = $('#endereço-imagem-nova').val();
        const novoItem = $('<li></li>')
        $(`<img src="${enderecoDANovaImagem}"/>`).appendTo(novoItem);
        $(`
        <div=class="overlay-imagem-link">
            <a href='${enderecoDANovaImagem}" target="_blank" title ="ver imagem em tamanho real">
                ver imagem em tamanho real
            </a>
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
    })
})