

function validateForm(id){
    var count   = 0;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    $('.contact-form-'+id+' form .validate').each(function(k,v){
        var that    = $(v);

        that.removeClass("error");
        that.parents(".forminput").removeClass("error");
        that.parents(".row").removeClass("error");


        if(that.is("textarea")){
            if(that.val() == ""){
                that.addClass("error");
                that.parents(".forminput").addClass("error");
                that.parents(".row").addClass("error");
                count++;
            }
        }

        if(that.is("input")){
            switch(that.attr("type")){
                case "text":
                case "tel":
                    if(that.val() == ""){
                        that.addClass("error");
                        that.parents(".forminput").addClass("error");
                        that.parents(".row").addClass("error");
                        count++;
                    }
                    break;
                case "email":
                    if (!filter.test(that.val())) {
                        that.addClass("error");
                        that.parents(".forminput").addClass("error");
                        that.parents(".row").addClass("error");
                        count++;
                    }
                    break;
                case "checkbox":
                    if(!that.is(":checked")){
                        that.addClass("error");
                        that.parents(".forminput").addClass("error");
                        that.parents(".row").addClass("error");
                        count++;
                    }
                    break;
                case "radio":
                    break;
            }
        }

    });

    if(count == 0){
        return true;
    } else {
        return false;
    }
}

function showService(id){
    $('.contact-form').hide();
    $('.btn-service').addClass('act');
    $('.btn-service-'+id).removeClass('act');
    $('#service-wrapper .contact-form-'+id).fadeIn();

}


$(document).ready(function() {

    $('.btn-terms').click(function(){
        $(this).next('.terms-notes').slideToggle();
    })

});