$(document).ready(function(){
    $('img').click(function(){
        let changePic = $(this).attr('alt-pic')
        $(this).attr('alt-pic', $(this).attr('src'))
        $(this).attr('src', changePic);
    })
});