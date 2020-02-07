/*

Radio[productLine] button will reset all forms value to "".

$(document).ready(function(){
    $("input[name='productLine']").click(function(){
        $("#radio1, #radio2, #radio3").is(":checked")
            $('form :input').val('');
        }
    );

});

*/

