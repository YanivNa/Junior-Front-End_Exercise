$(document).ready(function(){

$("form").submit(function(e) {
    e.preventDefault();
});
    
    $('#submit').on('click',function(){
        
        $('.inputArea').hide();
        $('.loading').show();

    })
});