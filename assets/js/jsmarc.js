$(document).ready(function(){
    $("input[name='productLine']").click(function(){
        if ($("#radio1, #radio2, #radio3").is(":checked")){
            $('form :input').val('');
        }
    });

});

