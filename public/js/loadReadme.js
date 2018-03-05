$(function(){
    $.ajax({
        url: 'README.md'
    }).done(function(data){
        console.log(data)
        $('#content').html(marked(data))
    })

})