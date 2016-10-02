$(document).ready(function() {
    var buttonForm = $("#form-container input.btn");
    var spinnerGif = $("#spinnerGif");
    buttonForm.click(function(){
        $("#form-container").submit(function() {
            buttonForm.attr('disabled', 'true');
            spinnerGif.css('display', 'block');
        }).submit();
        buttonForm.attr('disabled', 'false');
    });
});
