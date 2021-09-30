const tecla = $('textarea').on('keyup paste', function(){
    setTimeout(function(){
        const valorTextArea = $('textarea').val().length;
        const palavra = $('textarea').val().split(' ').length;
        $('.caracteres').text(valorTextArea);
        $('.palavras').text(palavra);
    }, 200)
  
});
