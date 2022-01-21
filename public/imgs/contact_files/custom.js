jQuery(document).ready(function () {
   /*mobile Navigation Toggle*/
   $('#site-mobile-navigation-toggle').on('click',function(){
       var text = $('#site-mobile-navigation-toggle');
       $('#site-navigation').toggleClass('d-none');
       if((text.text()).trim() == "Menu"){
           text.text("Close");
       }
       else{
           text.html('Menu <img src="'+localUrl+'assets/img/menu.svg" alt="" height="22px" style="margin-top:-2px">');
       }
   });

   // $('#birthMonth').on('click', function(){
   //     console.log($(this));
   //     console.log($(this).next('input'));
   //  });


   // $('[data-length]').keyup(function (e) {
   //     e.preventDefault();
   //     /*console.log(e.which);*/
   //     console.log("key pressed");
   //     /*console.log($(this));
   //     console.log($(this).next('input'));*/
   //
   //     if(this.value.length == this.attributes["data-length"].value){
   //         //debugger;
   //         console.log("next Input");
   //         /*$(this).next('.inputs').focus(function () {
   //             $(this).css("border-bottom", "1px solid blue");
   //         });*/
   //         $(this).next('input').focus();
   //     }
   // });




   /*free birth Chart*/
    $('#freeBirthChart').on('click',function (event) {
        event.preventDefault();
        var selectedForm, nextAction,errorBox,errorBoxP,res;
        selectedForm = $(this).parent().parent(); //The submit button should be wrapped in <div> inside <form> tag! P.S <form> tag must have an ID.
        var getAttribute = selectedForm.attr('action');
        res = validateData(selectedForm.attr('id'));
        if(res.status){
            var request = jQuery.ajax({
                url: localUrl+"php/data-session.php",
                method: "POST",
                data: { 'setSession': true, 'data':res.data}
            });
            request.then(function (resp) {
                $('#'+selectedForm.attr('id')).submit();
            }, function (err) {
                console.log(err);
            });
        }
        else
        {
            console.log(res.msg);
            errorBox = $('#'+selectedForm.attr('id')+' .astrofyError');
            errorBox.text(res.msg);
            errorBox.css('visibility', 'visible');
            setTimeout(function(){errorBox.css('visibility', 'hidden')}, 6000)
        }
    });

    $('#freeBirthChart2').on('click',function (event) {
        event.preventDefault();
        var selectedForm, nextAction,errorBox,errorBoxP,res;
        selectedForm = $(this).parent().parent(); //The submit button should be wrapped in <div> inside <form> tag! P.S <form> tag must have an ID.
        var getAttribute = selectedForm.attr('action');
        res = validateData(selectedForm.attr('id'));
        if(res.status){
            var request = jQuery.ajax({
                url: localUrl+"php/data-session.php",
                method: "POST",
                data: { 'setSession': true, 'data':res.data}
            });
            request.then(function (resp) {
                $('#'+selectedForm.attr('id')).submit();
            }, function (err) {
                console.log(err);
            });
        }
        else
        {
            console.log(res.msg);
            errorBox = $('#'+selectedForm.attr('id')+' .astrofyError');
            errorBox.text(res.msg);
            errorBox.css('visibility', 'visible');
            setTimeout(function(){errorBox.css('visibility', 'hidden')}, 6000)
        }
    });
   /*end free birth Chart*/

   // free solar report web
    $('#freeSolarReport').on('click',function (event) {
        event.preventDefault();
        var selectedForm, nextAction,errorBox,errorBoxP,res;
        selectedForm = $(this).parent().parent(); //The submit button should be wrapped in <div> inside <form> tag! P.S <form> tag must have an ID.
        var getAttribute = selectedForm.attr('action');
        res = validateSolarData(selectedForm.attr('id'));
        if(res.status){
            var request = jQuery.ajax({
                url: localUrl+"php/data-session.php",
                method: "POST",
                data: { 'setSession': true, 'thisIs': "Free_Solar_Report", 'data':res.data}
            });
            request.then(function (resp) {
                $('#'+selectedForm.attr('id')).submit();
            }, function (err) {
                console.log(err);
            });
        }
        else
        {
            console.log(res.msg);
            errorBox = $('#'+selectedForm.attr('id')+' .astrofyError');
            errorBox.text(res.msg);
            errorBox.css('visibility', 'visible');
            setTimeout(function(){errorBox.css('visibility', 'hidden')}, 6000)
        }
    });
    // end free solar report web

   /*natal report*/
    $('#natalReport').on('click',function (event) {
        event.preventDefault();
        var selectedForm,errorBox,res;
        selectedForm = $(this).parent().parent(); //The submit button should be wrapped in <div> inside <form> tag! P.S <form> tag must have an ID.

        var getAttribute = selectedForm.attr('action');
        res = validateData(selectedForm.attr('id'));
        if(res.status){
            if(res['data']['meridiem'] === "pm"){
                if (res['data']['hour'] === '12') {
                    res['data']['hour'] = '00';
                }
                res['data']['hour'] = (parseInt(res['data']['hour'], 10) + 12) + "";
            }
            //console.log(res);
            res['data']['orderfor'] = "natal";
            res['data']['newentry'] = 1;
            res['data']['profile_id'] = 0;
            res['data']['gender'] = 0;
            res['data']['number'] = "0000000000";
            res['data']['merchant'] = "paypal";
            res['data']['device'] = "website";
            res['data']['ref'] = "upastrology";
            res['data']['utm'] = "no-utm";
            res['data']['user_id'] = 0;
            res['data']['amount'] = "9";
            var request = jQuery.ajax({
                url: localUrl+"services/handleorder.php",
                method: "POST",
                data: res.data
            });
            request.then(function (resp1) {
                resp1 = JSON.parse(resp1);
                console.log(resp1);

                if(resp1.status)
                {
                   window.location = localUrl +'php/paypal/paypal-payment.php?order_id='+resp1.order_id+'&orderfor='+resp1.orderfor;
                }
                else
                {
                    errorBox = $('#'+selectedForm.attr('id')+' .astrofyError');
                    errorBox.text('Some error occurred!');
                    errorBox.css('visibility', 'visible');
                    setTimeout(function(){errorBox.css('visibility', 'hidden')}, 6000)
                }

            }, function (err) {
                errorBox = $('#'+selectedForm.attr('id')+' .astrofyError');
                errorBox.text('Some error occurred!');
                errorBox.css('visibility', 'visible');
                setTimeout(function(){errorBox.css('visibility', 'hidden')}, 6000)
            });
        }
        else
        {
            errorBox = $('#'+selectedForm.attr('id')+' .astrofyError');
            errorBox.text(res.msg);
            errorBox.css('visibility', 'visible');
            setTimeout(function(){errorBox.css('visibility', 'hidden')}, 6000)
        }
    });
   
    $('#natalReportPaypal').on('click',function (event) {
        event.preventDefault();
        var selectedForm,errorBox,res;
        //selectedForm = $(this).parent().parent(); //The submit button should be wrapped in <div> inside <form> tag! P.S <form> tag must have an ID.
        let selectedFormID = $(this).data('formid');
        // let merchantName = $(this)
       // var getAttribute = selectedForm.attr('action');
        console.log(selectedFormID);
        res = validateData(selectedFormID);
        if(res.status){
            if(res['data']['meridiem'] === "pm"){
                if (res['data']['hour'] === '12') {
                    res['data']['hour'] = '00';
                }
                res['data']['hour'] = (parseInt(res['data']['hour'], 10) + 12) + "";
            }

            /*Web Engage*/
            webengage.user.login(res.data.email);

            webengage.user.setAttribute('we_first_name', res.data.name);
            webengage.user.setAttribute('we_email', res.data.email);

            //console.log(res);
            res['data']['orderfor'] = "natal";
            res['data']['newentry'] = 1;
            res['data']['profile_id'] = 0;
            res['data']['gender'] = 0;
            res['data']['number'] = "0000000000";
            res['data']['merchant'] = "paypal";
            res['data']['device'] = "website";
            res['data']['ref'] = "upastrology";
            res['data']['utm'] = "no-utm";
            res['data']['user_id'] = 0;
            res['data']['amount'] = "9";
            var request = jQuery.ajax({
                url: localUrl+"services/handleorder.php",
                method: "POST",
                data: res.data
            });
            request.then(function (resp1) {
                resp1 = JSON.parse(resp1);
                console.log(resp1);

                if(resp1.status)
                {
                    window.location = localUrl +'php/paypal/paypal-payment.php?order_id='+resp1.order_id+'&orderfor='+resp1.orderfor;
                }
                else
                {
                    errorBox = $('#'+selectedFormID+' .astrofyError');
                    errorBox.text('Some error occurred!');
                    errorBox.css('visibility', 'visible');
                    setTimeout(function(){errorBox.css('visibility', 'hidden')}, 6000)
                }

            }, function (err) {
                errorBox = $('#'+selectedFormID+' .astrofyError');
                errorBox.text('Some error occurred!');
                errorBox.css('visibility', 'visible');
                setTimeout(function(){errorBox.css('visibility', 'hidden')}, 6000)
            });
        }
        else
        {
            errorBox = $('#'+selectedFormID+' .astrofyError');
            errorBox.text(res.msg);
            errorBox.css('visibility', 'visible');
            setTimeout(function(){errorBox.css('visibility', 'hidden')}, 6000)
        }
    });
    /*end natal report*/


   /*solar report*/
    $('#solarReport').on('click',function (event) {
        event.preventDefault();
        var selectedForm, nextAction,errorBox,errorBoxP,res;
        selectedForm = $(this).parent().parent(); //The submit button should be wrapped in <div> inside <form> tag! P.S <form> tag must have an ID.

        var getAttribute = selectedForm.attr('action');
        res = validateData(selectedForm.attr('id'));
        //console.log(res);

        if(res.status){
            if(res['data']['meridiem'] === "pm"){
                if (res['data']['hour'] === '12') {
                    res['data']['hour'] = '00';
                }
                res['data']['hour'] = (parseInt(res['data']['hour'], 10) + 12) + "";
            }

            /*Web Engage*/
            webengage.user.login(res.data.email);

            webengage.user.setAttribute('we_first_name', res.data.name);
            webengage.user.setAttribute('we_email', res.data.email);

            //console.log(res);
            res['data']['orderfor'] = "solar";
            res['data']['newentry'] = 1;
            res['data']['profile_id'] = 0;
            res['data']['gender'] = 0;
            res['data']['number'] = "0000000000";
            res['data']['merchant'] = "paypal";
            res['data']['device'] = "website";
            res['data']['ref'] = "upastrology";
            res['data']['utm'] = "no-utm";
            res['data']['user_id'] = 0;
            res['data']['amount'] = "9";

            var request = jQuery.ajax({
                url: localUrl+"services/handleorder.php",
                method: "POST",
                data: res.data
            });
            request.then(function (resp1) {
                resp1 = JSON.parse(resp1);
                //console.log(resp1);

                if(resp1.status)
                {
                    window.location = localUrl +'php/paypal/paypal-payment.php?order_id='+resp1.order_id+'&orderfor='+resp1.orderfor;
                }
                else
                {
                    errorBox = $('#'+selectedForm.attr('id')+' .astrofyError');
                    errorBox.text('Some error occurred!');
                    errorBox.css('visibility', 'visible');
                    setTimeout(function(){errorBox.css('visibility', 'hidden')}, 6000)
                }

            }, function (err) {
                errorBox = $('#'+selectedForm.attr('id')+' .astrofyError');
                errorBox.text('Some error occurred!');
                errorBox.css('visibility', 'visible');
                setTimeout(function(){errorBox.css('visibility', 'hidden')}, 6000)
            });
        }
        else
        {
            errorBox = $('#'+selectedForm.attr('id')+' .astrofyError');
            errorBox.text(res.msg);
            errorBox.css('visibility', 'visible');
            setTimeout(function(){errorBox.css('visibility', 'hidden')}, 6000)
        }
    });
   /*end solar report*/

   /*synastry repor*/
    $('#submitStep1').on('click',function (event) {
        event.preventDefault();
        var selectedForm, nextAction,errorBox,errorBoxP,res;
        selectedForm = $(this).closest('form'); //The submit button should be wrapped in <div> inside <form> tag! P.S <form> tag must have an ID.
        var getAttribute = selectedForm.attr('action');
        res = validateData(selectedForm.attr('id'));
        if(res.status){
            $('#matchingStep2').removeClass('d-none');
            $('#matchingStep1').addClass('d-none');
        }
        else
        {
            console.log(res.msg);
            errorBox = $('#'+selectedForm.attr('id')+' .astrofyError');
            errorBox.text(res.msg);
            errorBox.css('visibility', 'visible');
            setTimeout(function(){errorBox.css('visibility', 'hidden')}, 3000)
        }
    });
    $('#backToStep1').on('click',function (event) {
        $('#matchingStep2').addClass('d-none');
        $('#matchingStep1').removeClass('d-none');
    });


    $('#synastryDetails').on('click',function (event) {
        event.preventDefault();
        var step2 = $(this).closest('form').attr('id');
        var step1 = $(this).closest('form').prev().attr('id');
        var stepValidation2 = validateData(step2);
        if(!stepValidation2.status){
            errorBox = $('#'+step2.attr('id')+' .astrofyError');
            errorBox.text(res.msg);
            errorBox.css('visibility', 'visible');
            setTimeout(function(){errorBox.css('visibility', 'hidden')}, 3000)
        }
        else{
            var stepValidation1 = validateData(step1);
            if(stepValidation1.status){
                var request = jQuery.ajax({
                    url: localUrl+"php/data-session.php",
                    method: "POST",
                    data: { 'setSession': true, 'thisIs': "Synastry_Report", 'data':stepValidation1.data, 'data2': stepValidation2.data}
                });
                request.then(function (resp) {
                    $('#'+step2).submit();
                }, function (err) {
                    console.log(err);
                });
            }
            else{
                errorBox = $('#'+step2.attr('id')+' .astrofyError');
                errorBox.text(res.msg);
                errorBox.css('visibility', 'visible');
                setTimeout(function(){errorBox.css('visibility', 'hidden')}, 3000)
            }
        }

    });
   /*end synastry repor*/

   /* on checkBok check show currentPlaceForm */
   $('#customControlAutosizing').on('click', function(event){
       $('#currentCountry').toggleClass('d-none');
       $('#placeInputBox').toggleClass('d-none');
       console.log(this);
   })
   /* end  on checkBok check show currentPlaceForm */
});
