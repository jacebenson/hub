var loadReadme = function () {
    var newDate = new Date();
    var d = newDate.toISOString();
    console.log(d + ' - Loading ./public/README.md');
    $.ajax({
        url: 'https://raw.githubusercontent.com/jacebenson/hub/master/README.md?datetime=' + d
    }).done(function (data) {
        $('#content').html(marked(data))
    })
}
$(function () {
    var local = function () {
        if (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost') {
            return true;
        } else {
            return false;
        }
    }
    loadReadme();
    if (local()) {
        console.log('local');
        setInterval(function(){loadReadme();}, 5000);
    }
})