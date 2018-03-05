$(function(){
    var d = new Date();
    $.ajax({
        url: 'README.md?' + d.toISOString()
    }).done(function(data){
        console.log(data)
        $('#content').html(marked(data))
    })

})