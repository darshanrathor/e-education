var localUrl = '';
if(window.location.origin === "http://localhost"){
    localUrl = "http://localhost/upastrology/";
}
else{
    localUrl = "/";
}
var eConst = {
    'ALL_DETAILS': 'All details must be filled!',
    'DATE': 'Check date of birth!',
    'DATE2': 'Date cannot be greater than 29!',
    'DATE3': 'Date cannot be greater than 28!',
    'DATE4': 'Set date of Birth first',
    'TIME': 'Check the Time of Birth!',
    'PLACE': 'Please select valid birth place!',
    'PLACE2': 'Please wait for a second.',
    'EMAIL': 'Please enter valid email address',
};
jQuery(document).ready(function () {
//Get Page Language
    var PAGE_LANGUAGE = $('#page_language_is').val();
    eConst = FORM_CONSTANT[PAGE_LANGUAGE];
});
var FORM_CONSTANT = {
    'en': {
        'ALL_DETAILS': 'All details must be filled!',
        'DATE': 'Check date of birth!',
        'DATE2': 'Date cannot be greater than 29!',
        'DATE3': 'Date cannot be greater than 28!',
        'DATE4': 'Set date of Birth first',
        'TIME': 'Check the Time of Birth!',
        'PLACE': 'Please select valid birth place!',
        'PLACE2': 'Please wait for a second.',
        'EMAIL': 'Please enter valid email address',
    },
    'de':{
        'ALL_DETAILS': 'Alle Angaben müssen ausgefüllt werden!',
        'DATE': 'Set Geburtsdatum vor der Auswahl statt.',
        'DATE2': 'Date cannot be greater than 29!',
        'DATE3': 'Date cannot be greater than 28!',
        'DATE4': 'Set date of Birth first',
        'TIME': 'Check the Time of Birth!',
        'PLACE': 'Please select valid birth place!',
        'PLACE2': 'Please wait for a second.',
        'EMAIL': 'Geben Sie eine gültige E-Mail-ID',

    },
    'es': {
        'ALL_DETAILS': '¡Todos los detalles deben ser rellenados!',
        'DATE': 'Añade una fecha de nacimiento antes de seleccionar un lugar',
        'DATE2': 'Date cannot be greater than 29!',
        'DATE3': 'Date cannot be greater than 28!',
        'DATE4': 'Set date of Birth first',
        'TIME': 'Check the Time of Birth!',
        'PLACE': 'Please select valid birth place!',
        'PLACE2': 'Please wait for a second.',
        'EMAIL': 'Inserte una dirección de correo electrónico válida',
    },
    'fr': {
        'ALL_DETAILS': 'Tous les détails doivent être complétés !',
        'DATE': 'Sélectionner date de naissance avant de choisir un lieu',
        'DATE2': 'Date cannot be greater than 29!',
        'DATE3': 'Date cannot be greater than 28!',
        'DATE4': 'Set date of Birth first',
        'TIME': 'Check the Time of Birth!',
        'PLACE': 'Please select valid birth place!',
        'PLACE2': 'Please wait for a second.',
        'EMAIL': 'Écrivez une adresse mail valide',
    },
    'it': {
        'ALL_DETAILS': 'Tutti i dettagli devono essere compilati!',
        'DATE': 'Inserire la data di nascita prima di selezionare il luogo.',
        'DATE2': 'Date cannot be greater than 29!',
        'DATE3': 'Date cannot be greater than 28!',
        'DATE4': 'Set date of Birth first',
        'TIME': 'Check the Time of Birth!',
        'PLACE': 'Please select valid birth place!',
        'PLACE2': 'Please wait for a second.',
        'EMAIL': 'Please enter valid email address',
    },
    'pt': {
        'ALL_DETAILS': 'Todos os detalhes devem ser preenchidos!',
        'DATE': 'Defina a data de nascimento antes de selecionar o local.',
        'DATE2': 'Date cannot be greater than 29!',
        'DATE3': 'Date cannot be greater than 28!',
        'DATE4': 'Set date of Birth first',
        'TIME': 'Check the Time of Birth!',
        'PLACE': 'Please select valid birth place!',
        'PLACE2': 'Please wait for a second.',
        'EMAIL': 'Insira um e-mail válido',
    },
    'ru': {
        'ALL_DETAILS': 'Все поля должны быть заполнены!',
        'DATE': 'Установить дату рождения, прежде чем выбрать место.',
        'DATE2': 'Date cannot be greater than 29!',
        'DATE3': 'Date cannot be greater than 28!',
        'DATE4': 'Set date of Birth first',
        'TIME': 'Check the Time of Birth!',
        'PLACE': 'Please select valid birth place!',
        'PLACE2': 'Please wait for a second.',
        'EMAIL': 'Введите действительный адрес электронной почты ID',
    }

};

function validateEmail(emailField){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField) == false)
    {
        return false;
    }
    return true;
}

function validateSolarData(formTagID) {
    var hashForm = "#"+formTagID;
    var name     = $(hashForm+' input[name="name"]').val();
    var date     = zeroPad($(hashForm+" input[name='date']"). val(),2);
    var month    = zeroPad($(hashForm+" input[name='month']").val(),2);
    var year     = $(hashForm+" input[name='year']").val();
    var hour     = zeroPad($(hashForm+" input[name='hour']").val(),2);
    var minute   = zeroPad($(hashForm+" input[name='minute']").val(),2);
    var place    = $(hashForm+" input[name='place']").val();
    var lat      = $(hashForm+" input[name='lat']").val();
    var lon      = $(hashForm+" input[name='lon']").val();
    var tz       = $(hashForm+" input[name='tz']").val();
    var country  = $(hashForm+" input[name='country']").val();
    var meridiem = $(hashForm+" input[name='meridiem']:checked").val();
    var email =  $(hashForm+" input[name='email']").val();
    var solarYear = $(hashForm+" input[name='solarYear']:checked").val();


    var customControlAutosizing = $(hashForm+' input[name="checkCurrentPlace"]').is(":checked");

    if(customControlAutosizing){
        var solarPlace    = $(hashForm+" input[name='solarPlace']").val();
        var solarLat      = $(hashForm+" input[name='solarLat']").val();
        var solarLon      = $(hashForm+" input[name='solarLon']").val();
        var solarTz       = $(hashForm+" input[name='solarTz']").val();
        var solarCountry  = $(hashForm+" input[name='solarCountry']").val();
    }else {
        var solarPlace    = place;
        var solarLat      = lat;
        var solarLon      = lon;
        var solarTz       = tz;
        var solarCountry  = country;
    }



    if(!name.trim() || !date.trim() || !month.trim() || !year.trim() || !hour.trim() || !minute.trim() || !place.trim() ){return sendFalse("All details must be filled!");}
    if( date > 31 || date<1 || month>12 || month<1 || year<1901 || year >2100){return sendFalse("Check date of birth!")}
    if( month == 2 ){
        var isLeap = new Date(year,1,29).getDate()===29;
        if(isLeap && date > 29){return sendFalse("Date cannot be greater than 29!");}
        else if(date > 28){return sendFalse("Date cannot be greater than 28!");}
    }
    if(hour>12 || hour<0 || minute>59 || minute<0 ){return sendFalse("Check the Time of Birth!");}
    if((lat.trim() ==0 || lon.trim()==0) || (lat.trim() =='' || lon.trim()=='' || tz.trim() =="")){return sendFalse("Please select valid birth place!");}
    if((solarLat.trim() ==0 || solarLon.trim()==0) || (solarLat.trim() =='' || solarLon.trim()=='' || solarTz.trim() =="")){return sendFalse("Please select valid current place!");}
    if(typeof(solarYear) === "undefined"){solarYear = 2021;}
    if(!validateEmail(email) && typeof(email) !== "undefined"){return sendFalse("Please enter valid email address");}
    return {status:true, msg:"",data:{'name':name,'day': date, 'month': month, 'year': year,'hour': ""+hour,'min': ""+minute, 'place': place,'lat': lat,
        'lon': lon,'tzone': ""+tz,'country': country,'meridiem': meridiem,'email': email, 'solar_year': solarYear, 'solar_place': solarPlace, 'solar_lat': solarLat,
        'solar_lon' : solarLon, 'solar_tz' : solarTz, 'solar_country' : solarCountry, }};
}

function validateData(formTagID) {
    var hashForm = "#"+formTagID;
    var name     = $(hashForm+' input[name="name"]').val();
    var date     = zeroPad($(hashForm+" input[name='date']"). val(),2);
    var month    = zeroPad($(hashForm+" input[name='month']").val(),2);
    var year     = $(hashForm+" input[name='year']").val();
    var hour     = zeroPad($(hashForm+" input[name='hour']").val(),2);
    var minute   = zeroPad($(hashForm+" input[name='minute']").val(),2);
    var place    = $(hashForm+" input[name='place']").val();
    var lat      = $(hashForm+" input[name='lat']").val();
    var lon      = $(hashForm+" input[name='lon']").val();
    var tz       = $(hashForm+" input[name='tz']").val();
    var country  = $(hashForm+" input[name='country']").val();
    var meridiem = $(hashForm+" input[name='meridiem']:checked").val();
    var email =  $(hashForm+" input[name='email']").val();
    var solarYear = $(hashForm+" input[name='solarYear']:checked").val();
    var lang = $(hashForm+" input[name='language']").val();
    var eConst = FORM_CONSTANT[lang];

    if(!name.trim() || !date.trim() || !month.trim() || !year.trim() || !hour.trim() || !minute.trim() || !place.trim()){return sendFalse(eConst.ALL_DETAILS);}
    if( date > 31 || date<1 || month>12 || month<1 || year<1901 || year >2100){return sendFalse(eConst.DATE)}
    if( month == 2 ){
        var isLeap = new Date(year,1,29).getDate()===29;
        if(isLeap && date > 29){return sendFalse(eConst.DATE2);}
        else if(date > 28){return sendFalse(eConst.DATE3);}
    }
    if(hour>12 || hour<0 || minute>59 || minute<0 ){return sendFalse(eConst.TIME);}
    if((lat.trim() ==0 || lon.trim()==0) || (lat.trim() =='' || lon.trim()=='' || tz.trim() =="")){return sendFalse(eConst.PLACE);}
    if(typeof(solarYear) === "undefined"){solarYear = 2021;}
    if(!validateEmail(email) && typeof(email) !== "undefined"){return sendFalse(eConst.EMAIL);}
    if(lang === "" || typeof(lang) === "undefined"){
        lang  = "en";
    }
    return {status:true, msg:"",data:{'name':name,'day': date, 'month': month, 'year': year,'hour': ""+hour,'min': ""+minute, 'place': place,'lat': lat,'lon': lon,'tzone': ""+tz,'country': country,'meridiem': meridiem,'email': email, language: lang, 'solar_year': solarYear}};
}

function zeroPad(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join('0') + num;
}

function sendFalse(msg) { return {status:false, msg:msg};}