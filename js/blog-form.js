jQuery(document).ready(function ($) {
    $("#blog_form").validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
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
            },
            message: {
                required: "Please Enter Message"
            }
        },
        submitHandler: function (form) {
            $.ajax({
                success: function (result) {
                    $('#blogSuccessMessage').modal('show');
                    $("#blog_name").val('');
                    $("#blog_email").val('');
                    $("#blog_message").val('');
                }
            });
            return false;
        }
    });
});