$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const textoTask = $('#input-tarefa').val();
        console.log(textoTask);
        let novoItem = $('<li class="adicionadoAgora"></li>');
        $(textoTask).appendTo(novoItem);
        $(`<button type="button" class="btn-concluir"></button><span>${textoTask}</span> <button type="button" class="btn-excluir"></button>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#input-tarefa').val('');
        
        $('.btn-excluir').click(function(event){
            var elementoClicado = event.target;
            if (elementoClicado.classList.contains("btn-excluir")) {
                var elementoPai = elementoClicado.parentNode;
                elementoPai.remove();
            }
            
        })  
        
        $('.btn-concluir').click(function(event){
            var outroClicado = event.target;
            if (outroClicado.classList.contains("btn-concluir")){
                $('.adicionadoAgora').click( function(){
                    $(this).css("text-decoration","line-through");
                });
            }
    
    })

    })


})