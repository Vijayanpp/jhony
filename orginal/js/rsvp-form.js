jQuery(document).ready(function ($) {
    $("#rsvp_form").validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            number: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Please Enter Name"
            },
            email: {
                required: "Please Enter Email",
                email: "Please Enter Valid Email Address"
            }
           
        },
        submitHandler: function (form) {
            var name = $("#rsvp_name").val();
            var email = $("#rsvp_email").val();
            var number = $("#rsvp_number").val();
            var func = $("#rsvp_func").val();
            var message = $("#rsvp_message").val();
            var dataString = 'name=' + name + 'mail=' + email + 'message=' + message;
            $.ajax({
                type: "POST",
                url: "http://www.adbcd.com/mail.php",
                data: dataString,
                cache: false,
                success: function (result) {
                    $('#rsvpSuccessMessage').modal('show');
                    $("#rsvp_name").val('');
                    $("#rsvp_email").val('');                  
                    $("#rsvp_message").val('');
                }
            });
            return false;
        }
    });
});
