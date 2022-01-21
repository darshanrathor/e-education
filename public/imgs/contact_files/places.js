"use strict";

//if true google places will be used instead of local db
let isGooglePlaces = false;

var localServerUrl = '/';
if(window.location.origin === "http://localhost"){
    localServerUrl = "http://localhost/upastrology/";
}
else{
    localServerUrl = "/";
}


let CountryNames = [
    {
        "country_name": "Afghanistan"
    },
    {
        "country_name": "Akrotiri"
    },
    {
        "country_name": "Albania"
    },
    {
        "country_name": "Algeria"
    },
    {
        "country_name": "American Samoa"
    },
    {
        "country_name": "Andorra"
    },
    {
        "country_name": "Angola"
    },
    {
        "country_name": "Anguilla"
    },
    {
        "country_name": "Antigua And Barbuda"
    },
    {
        "country_name": "Argentina"
    },
    {
        "country_name": "Armenia"
    },
    {
        "country_name": "Aruba"
    },
    {
        "country_name": "Australia"
    },
    {
        "country_name": "Austria"
    },
    {
        "country_name": "Azerbaijan"
    },
    {
        "country_name": "Bahamas, The"
    },
    {
        "country_name": "Bahrain"
    },
    {
        "country_name": "Bangladesh"
    },
    {
        "country_name": "Barbados"
    },
    {
        "country_name": "Belarus"
    },
    {
        "country_name": "Belgium"
    },
    {
        "country_name": "Belize"
    },
    {
        "country_name": "Benin"
    },
    {
        "country_name": "Bermuda"
    },
    {
        "country_name": "Bhutan"
    },
    {
        "country_name": "Bolivia"
    },
    {
        "country_name": "Bosnia And Herzegovina"
    },
    {
        "country_name": "Botswana"
    },
    {
        "country_name": "Brazil"
    },
    {
        "country_name": "British Indian Ocean Territory"
    },
    {
        "country_name": "Brunei"
    },
    {
        "country_name": "Bulgaria"
    },
    {
        "country_name": "Burkina Faso"
    },
    {
        "country_name": "Burma"
    },
    {
        "country_name": "Burundi"
    },
    {
        "country_name": "Cabo Verde"
    },
    {
        "country_name": "Cambodia"
    },
    {
        "country_name": "Cameroon"
    },
    {
        "country_name": "Canada"
    },
    {
        "country_name": "Cayman Islands"
    },
    {
        "country_name": "Central African Republic"
    },
    {
        "country_name": "Chad"
    },
    {
        "country_name": "Chile"
    },
    {
        "country_name": "China"
    },
    {
        "country_name": "Christmas Island"
    },
    {
        "country_name": "Cocos (Keeling) Islands"
    },
    {
        "country_name": "Colombia"
    },
    {
        "country_name": "Comoros"
    },
    {
        "country_name": "Congo (Brazzaville)"
    },
    {
        "country_name": "Congo (Kinshasa)"
    },
    {
        "country_name": "Cook Islands"
    },
    {
        "country_name": "Costa Rica"
    },
    {
        "country_name": "Croatia"
    },
    {
        "country_name": "Cuba"
    },
    {
        "country_name": "Cura\u00e7ao"
    },
    {
        "country_name": "Cyprus"
    },
    {
        "country_name": "Czechia"
    },
    {
        "country_name": "C\u00f4te D\u2019Ivoire"
    },
    {
        "country_name": "Denmark"
    },
    {
        "country_name": "Dhekelia"
    },
    {
        "country_name": "Djibouti"
    },
    {
        "country_name": "Dominica"
    },
    {
        "country_name": "Dominican Republic"
    },
    {
        "country_name": "Ecuador"
    },
    {
        "country_name": "Egypt"
    },
    {
        "country_name": "El Salvador"
    },
    {
        "country_name": "Equatorial Guinea"
    },
    {
        "country_name": "Eritrea"
    },
    {
        "country_name": "Estonia"
    },
    {
        "country_name": "Ethiopia"
    },
    {
        "country_name": "Falkland Islands (Islas Malvinas)"
    },
    {
        "country_name": "Faroe Islands"
    },
    {
        "country_name": "Fiji"
    },
    {
        "country_name": "Finland"
    },
    {
        "country_name": "France"
    },
    {
        "country_name": "French Guiana"
    },
    {
        "country_name": "French Polynesia"
    },
    {
        "country_name": "French Southern And Antarctic Lands"
    },
    {
        "country_name": "Gabon"
    },
    {
        "country_name": "Gambia, The"
    },
    {
        "country_name": "Gaza Strip"
    },
    {
        "country_name": "Georgia"
    },
    {
        "country_name": "Germany"
    },
    {
        "country_name": "Ghana"
    },
    {
        "country_name": "Gibraltar"
    },
    {
        "country_name": "Greece"
    },
    {
        "country_name": "Greenland"
    },
    {
        "country_name": "Grenada"
    },
    {
        "country_name": "Guadeloupe"
    },
    {
        "country_name": "Guam"
    },
    {
        "country_name": "Guatemala"
    },
    {
        "country_name": "Guernsey"
    },
    {
        "country_name": "Guinea"
    },
    {
        "country_name": "Guinea-Bissau"
    },
    {
        "country_name": "Guyana"
    },
    {
        "country_name": "Haiti"
    },
    {
        "country_name": "Honduras"
    },
    {
        "country_name": "Hong Kong"
    },
    {
        "country_name": "Hungary"
    },
    {
        "country_name": "Iceland"
    },
    {
            "country_name": "India"
    },
    {
        "country_name": "Indonesia"
    },
    {
        "country_name": "Iran"
    },
    {
        "country_name": "Iraq"
    },
    {
        "country_name": "Ireland"
    },
    {
        "country_name": "Isle Of Man"
    },
    {
        "country_name": "Israel"
    },
    {
        "country_name": "Italy"
    },
    {
        "country_name": "Jamaica"
    },
    {
        "country_name": "Japan"
    },
    {
        "country_name": "Jersey"
    },
    {
        "country_name": "Jordan"
    },
    {
        "country_name": "Kazakhstan"
    },
    {
        "country_name": "Kenya"
    },
    {
        "country_name": "Kiribati"
    },
    {
        "country_name": "Korea, North"
    },
    {
        "country_name": "Korea, South"
    },
    {
        "country_name": "Kosovo"
    },
    {
        "country_name": "Kuwait"
    },
    {
        "country_name": "Kyrgyzstan"
    },
    {
        "country_name": "Laos"
    },
    {
        "country_name": "Latvia"
    },
    {
        "country_name": "Lebanon"
    },
    {
        "country_name": "Lesotho"
    },
    {
        "country_name": "Liberia"
    },
    {
        "country_name": "Libya"
    },
    {
        "country_name": "Liechtenstein"
    },
    {
        "country_name": "Lithuania"
    },
    {
        "country_name": "Luxembourg"
    },
    {
        "country_name": "Macau"
    },
    {
        "country_name": "Macedonia"
    },
    {
        "country_name": "Madagascar"
    },
    {
        "country_name": "Malawi"
    },
    {
        "country_name": "Malaysia"
    },
    {
        "country_name": "Maldives"
    },
    {
        "country_name": "Mali"
    },
    {
        "country_name": "Malta"
    },
    {
        "country_name": "Marshall Islands"
    },
    {
        "country_name": "Martinique"
    },
    {
        "country_name": "Mauritania"
    },
    {
        "country_name": "Mauritius"
    },
    {
        "country_name": "Mayotte"
    },
    {
        "country_name": "Mexico"
    },
    {
        "country_name": "Micronesia, Federated States Of"
    },
    {
        "country_name": "Moldova"
    },
    {
        "country_name": "Monaco"
    },
    {
        "country_name": "Mongolia"
    },
    {
        "country_name": "Montenegro"
    },
    {
        "country_name": "Montserrat"
    },
    {
        "country_name": "Morocco"
    },
    {
        "country_name": "Mozambique"
    },
    {
        "country_name": "Namibia"
    },
    {
        "country_name": "Nauru"
    },
    {
        "country_name": "Nepal"
    },
    {
        "country_name": "Netherlands"
    },
    {
        "country_name": "New Caledonia"
    },
    {
        "country_name": "New Zealand"
    },
    {
        "country_name": "Nicaragua"
    },
    {
        "country_name": "Niger"
    },
    {
        "country_name": "Nigeria"
    },
    {
        "country_name": "Niue"
    },
    {
        "country_name": "Norfolk Island"
    },
    {
        "country_name": "Northern Mariana Islands"
    },
    {
        "country_name": "Norway"
    },
    {
        "country_name": "Oman"
    },
    {
        "country_name": "Pakistan"
    },
    {
        "country_name": "Palau"
    },
    {
        "country_name": "Panama"
    },
    {
        "country_name": "Papua New Guinea"
    },
    {
        "country_name": "Paracel Islands"
    },
    {
        "country_name": "Paraguay"
    },
    {
        "country_name": "Peru"
    },
    {
        "country_name": "Philippines"
    },
    {
        "country_name": "Pitcairn Islands"
    },
    {
        "country_name": "Poland"
    },
    {
        "country_name": "Portugal"
    },
    {
        "country_name": "Puerto Rico"
    },
    {
        "country_name": "Qatar"
    },
    {
        "country_name": "Reunion"
    },
    {
        "country_name": "Romania"
    },
    {
        "country_name": "Russia"
    },
    {
        "country_name": "Rwanda"
    },
    {
        "country_name": "Saint Barthelemy"
    },
    {
        "country_name": "Saint Helena, Ascension, And Tristan Da Cunha"
    },
    {
        "country_name": "Saint Kitts And Nevis"
    },
    {
        "country_name": "Saint Lucia"
    },
    {
        "country_name": "Saint Martin"
    },
    {
        "country_name": "Saint Pierre And Miquelon"
    },
    {
        "country_name": "Saint Vincent And The Grenadines"
    },
    {
        "country_name": "Samoa"
    },
    {
        "country_name": "San Marino"
    },
    {
        "country_name": "Sao Tome And Principe"
    },
    {
        "country_name": "Saudi Arabia"
    },
    {
        "country_name": "Senegal"
    },
    {
        "country_name": "Serbia"
    },
    {
        "country_name": "Seychelles"
    },
    {
        "country_name": "Sierra Leone"
    },
    {
        "country_name": "Singapore"
    },
    {
        "country_name": "Sint Maarten"
    },
    {
        "country_name": "Slovakia"
    },
    {
        "country_name": "Slovenia"
    },
    {
        "country_name": "Solomon Islands"
    },
    {
        "country_name": "Somalia"
    },
    {
        "country_name": "South Africa"
    },
    {
        "country_name": "South Georgia And South Sandwich Islands"
    },
    {
        "country_name": "South Sudan"
    },
    {
        "country_name": "Spain"
    },
    {
        "country_name": "Spratly Islands"
    },
    {
        "country_name": "Sri Lanka"
    },
    {
        "country_name": "Sudan"
    },
    {
        "country_name": "Suriname"
    },
    {
        "country_name": "Svalbard"
    },
    {
        "country_name": "Swaziland"
    },
    {
        "country_name": "Sweden"
    },
    {
        "country_name": "Switzerland"
    },
    {
        "country_name": "Syria"
    },
    {
        "country_name": "Taiwan"
    },
    {
        "country_name": "Tajikistan"
    },
    {
        "country_name": "Tanzania"
    },
    {
        "country_name": "Thailand"
    },
    {
        "country_name": "Timor-Leste"
    },
    {
        "country_name": "Togo"
    },
    {
        "country_name": "Tokelau"
    },
    {
        "country_name": "Tonga"
    },
    {
        "country_name": "Trinidad And Tobago"
    },
    {
        "country_name": "Tunisia"
    },
    {
        "country_name": "Turkey"
    },
    {
        "country_name": "Turkmenistan"
    },
    {
        "country_name": "Turks And Caicos Islands"
    },
    {
        "country_name": "Tuvalu"
    },
    {
        "country_name": "U.S. Virgin Islands"
    },
    {
        "country_name": "Uganda"
    },
    {
        "country_name": "Ukraine"
    },
    {
        "country_name": "United Arab Emirates"
    },
    {
        "country_name": "United Kingdom"
    },
    {
        "country_name": "United States"
    },
    {
        "country_name": "Uruguay"
    },
    {
        "country_name": "Uzbekistan"
    },
    {
        "country_name": "Vanuatu"
    },
    {
        "country_name": "Venezuela"
    },
    {
        "country_name": "Vietnam"
    },
    {
        "country_name": "Virgin Islands, British"
    },
    {
        "country_name": "Wallis And Futuna"
    },
    {
        "country_name": "West Bank"
    },
    {
        "country_name": "Western Sahara"
    },
    {
        "country_name": "Yemen"
    },
    {
        "country_name": "Zambia"
    },
    {
        "country_name": "Zimbabwe"
    }
];

populateTheCountryField('.YourCountry', 'IN');

function populateTheCountryField(selectBoxId, check) {

    $(selectBoxId).each(function () {

        for (let i = 0; i < CountryNames.length; i++) {
            let opt = document.createElement('option');
            opt.value = CountryNames[i]['country_name'];
            opt.innerHTML = CountryNames[i]['country_name'];

            if (check && CountryNames[i].country_name === check) {
                opt.selected = true;
                $(opt).attr('selected','selected');
            }
            else if (!check && CountryNames[i].country_name === 'India') {
                opt.selected = true;
            }
            else {

            }

            $(this).append(opt);
        }
    });

}


//let countryCode = $('select[name="YourCountry"]').val();

$(document).ready(function () {
    //initiate(true);
    initiate(false);

    $('#hr-country').on('change', function () {
        //console.log("hr-country called");
        clearPlaceData('#home-form-1');

    });
    if($('#hr-country2').length){
        $('#hr-country2').on('change', function () {
            clearSolarPlaceData('#home-form-1');
        })
    }


});

function saveSearchPlaceInDb(placeObj) {

    //$.post("https://yeshoroscope.com/php/save_place_data.php", placeObj);
}


function getKundliPlaceLatLonTz(inpId, inpLat, inpLon, inpTz, dob, country, errorBox, thisForm) {

    let countryCode = $('#'+thisForm+' select[name="YourCountry"]').val();

    var options = {
        types: ['geocode'],  // or '(cities)' if that's what you want?
        componentRestrictions: {country: countryCode}
    };

    var places = new google.maps.places.Autocomplete(document.getElementById(inpId),options);
    google.maps.event.addListener(places, 'place_changed', function () {
        var place = places.getPlace();
        var address = place.formatted_address;
        var latitude = place.geometry.location.lat();
        var longitude = place.geometry.location.lng();
        $('#' + inpId).val(address);
        $(inpLat).val(latitude);
        $(inpLon).val(longitude);

        var placeObject = {
            sublocality_level1: "-",
            sublocality_level2: "-",
            place: "-",
            place_one: "-",
            state: "-",
            country: "-",
            latitude: latitude.toFixed(6),
            longitude: longitude.toFixed(6),
            timezone: "-",

        };


        for (var i = 0; i < place.address_components.length; i++) {
            if (place.address_components[i]['types'][0] === 'country') {
                $(country).val(place.address_components[i]['short_name']);
                placeObject.country = place.address_components[i]['long_name'];
            }
            if (place.address_components[i]['types'][0] === 'administrative_area_level_1') {
                placeObject.state = place.address_components[i]['long_name'];
            }
            if (place.address_components[i]['types'][0] === 'locality') {
                placeObject.place_one = place.address_components[i]['long_name'];
            }
            if (place.address_components[i]['types'][0] === 'sublocality_level_2'
                || place.address_components[i]['types'][0] === 'route') {
                placeObject.sublocality_level2 = place.address_components[i]['long_name'];
            }
            if (place.address_components[i]['types'][0] === 'sublocality_level_1') {
                placeObject.sublocality_level1 = place.address_components[i]['long_name'];
            }
        }

        if (placeObject.sublocality_level1 !== '-' && placeObject.sublocality_level2 !== '-') {
            placeObject.place = placeObject.sublocality_level2 + ", " + placeObject.sublocality_level1;
        }
        else {
            placeObject.place = placeObject.sublocality_level1;
        }

        if ($(country).val() !== 'IN' || $(country).val() === '') {

            $(country).val('IN');

            var errorBoxP = $('.astrofyError p');
            errorBoxP.text("Please wait for a second.");
            errorBox.css("background-color", "rgb(212,225,87) !important");
            errorBox.removeClass('hidden');
            errorBox.fadeIn('fast');

            $.post(localServerUrl + "php/get_timezone_with_dst.php", {lat: latitude, lon: longitude, dob: dob})
                .done(function (data) {
                    $(inpTz).val(data);

                    placeObject.timezone = data;
                    errorBox.addClass('hidden');
                    errorBox.fadeOut('fast');
                    saveSearchPlaceInDb(placeObject);
                });
        }
        else {
            $(inpTz).val('5.5');
            placeObject.timezone = '5.5';
            saveSearchPlaceInDb(placeObject);
        }

    });
}


function getGeoDetails(a, formId, countryId, placeParent,  dob) {
    //debugger;
    var b = [], e = function (a, c) {
        let data = {
            country : $(formId+ " "+countryId).val(),
            name : a

        };
        $.post("https://geo.vedicrishi.in/places/",data, function (a) {
            b = [];

            if(!Array.isArray(a))
            {
                return;
            }
            var d = a;
            $.each(d, function (a, c) {
                var place = c.place;


                var d = c.place + ", " + c.country ;
                //var d = c.name+", "+c.country;
                b.push({
                    value: d,
                    place_1: place,
                    country: c.country,
                    latitude: c.latitude,
                    longitude: c.longitude,
                    countryCode: c.country,
                    timezone: 5.5
                })
            }), c(b)
        })
    };
    $(a).typeahead({minLength: 2}, {
        source: function (a, b) {
            e(a, b)
        },
        templates: {
            suggestion: function(data) {
                return "<p><i class='fa fa-map-marker bttn-danger' style='opacity: 0.5;'></i>&nbsp;" + data.place_1 + ", " + data.country + "</small></p>";
            }
        }
    }), $(a).on("typeahead:selected", function (a, b) {
        if(b.countryCode !== 'India' || b.countryCode === ''){
            var errorBoxP = $(formId+' .astrofyError');
            var dateBox = $(formId+' input[name="date"]');
            var monthBox = $(formId+' input[name="month"]');
            var yearBox = $(formId+' input[name="year"]');

            var date = $(formId + " input[name='date']").val();
            var month = $(formId + " input[name='month']").val();
            var year = $(formId + " input[name='year']").val();

            //var checkDate = new Date(year+"/"+month+"/"+date);


            if (date > 31 || date < 1 || month > 12 || month < 1 || year < 1901 || year > 2100) {
                if (!month) {
                    monthBox.focus();
                }
                else if (!date) {
                    dateBox.focus();
                }
                else if (!year) {
                    yearBox.focus();
                }

                //debugger;
                errorBoxP.text(eConst["DATE4"]);
                errorBoxP.css("background-color", "rgb(212,225,87) !important");
                errorBoxP.css('visibility', 'visible');
                //setTimeout(function(){errorBoxP.css('visibility', 'hidden')}, 10000);
                clearPlaceData(formId);
                clearSolarPlaceData(formId);
            }
            else if (month == 2) {
                var isLeap = new Date(year, 1, 29).getDate() === 29;
                if (isLeap && date > 29) {
                    errorBoxP.text(eConst["DATE2"]);
                    errorBoxP.css("background-color", "rgb(212,225,87) !important");
                    errorBoxP.css('visibility', 'visible');
                    setTimeout(function(){errorBoxP.css('visibility', 'hidden')}, 6000);
                    clearPlaceData(formId);
                    clearSolarPlaceData(formId);
                }
                else if (date > 28) {
                    errorBoxP.text(eConst["DATE3"]);
                    errorBoxP.css("background-color", "rgb(212,225,87) !important");
                    errorBoxP.css('visibility', 'visible');
                    setTimeout(function(){errorBoxP.css('visibility', 'hidden')}, 6000);
                    clearPlaceData(formId);
                    clearSolarPlaceData(formId);
                }
                else {
                    errorBoxP.text(eConst["PLACE2"]);
                    errorBoxP.css("background-color", "rgb(212,225,87) !important");
                    //errorBoxP.removeClass('hidden');
                    errorBoxP.css('visibility', 'visible');
                    var dob = month + "-" + date + "-" + year;
                }
            }
            else {
                errorBoxP.text("Please wait for a second.");
                errorBoxP.css("background-color", "rgb(212,225,87) !important");
                errorBoxP.css('visibility', 'visible');
                var dob = month + "-" + date + "-" + year;
                $.post(localServerUrl + "php/get_timezone_with_dst.php", {lat: b.latitude, lon: b.longitude, dob: dob})
                    .done(function (data) {
                        b.timezone =  data;
                        if(placeParent === "#currentCountry"){
                            $(formId+" input[name='solarLat']").val(b.latitude);
                            $(formId+" input[name='solarLon']").val(b.longitude);
                            $(formId+" input[name='solarTz']").val(b.timezone);
                            $(formId+" input[name='solarCountry']").val(b.countryCode);
                            errorBoxP.css('visibility', 'hidden');
                        }
                        else{
                            $(formId+" input[name='lat']").val(b.latitude);
                            $(formId+" input[name='lon']").val(b.longitude);
                            $(formId+" input[name='tz']").val(b.timezone);
                            $(formId+" input[name='country']").val(b.countryCode);
                            errorBoxP.css('visibility', 'hidden');
                        }

                        //setTimeout(function(){errorBoxP.css('visibility', 'hidden')}, 3000);
                    });
            }
            setTimeout(function(){errorBoxP.css('visibility', 'hidden')}, 6000);


        }
        else{
            $(formId+" input[name='lat']").val(b.latitude);
            $(formId+" input[name='lon']").val(b.longitude);
            $(formId+" input[name='tz']").val(b.timezone);
            $(formId+" input[name='country']").val('India');
        }
    });

};

function clearPlaceData(formId){
   // console.log("clearPlaceData called");
    $(formId + " input[name='place']").val("");
    $(formId + " input[name='lat']").val("");
    $(formId + " input[name='lon']").val("");
    $(formId + " input[name='tz']").val("");
    $(formId + " input[name='place']").val("");
    $('#india-place-1').val("");
}
function clearSolarPlaceData (formId) {
    if( $('#currentCountry').length) {
        $(formId + " input[name='solarPlace']").val("");
        $(formId + " input[name='solarLat']").val("");
        $(formId + " input[name='solarLon']").val("");
        $(formId + " input[name='solarTz']").val("");
        $(formId + " input[name='solarPlace']").val("");
        $('#india-place-2').val("");
    }
}

function initiate(isGooglePlaces) {

    if (isGooglePlaces) {

        jQuery("form input[name='birthDay']").change(function () {
            var thisForm = $(this).parent().parent().attr('id');
            $("#" + thisForm + " input[name='lat']").val("");
            $("#" + thisForm + " input[name='lon']").val("");
            $("#" + thisForm + " input[name='tz']").val("");
            $("#" + thisForm + " input[name='place']").val("");
        });

        jQuery("form input[name='place']").keyup(function (e) {
            var thisForm = $(this).parent().parent().attr('id');
            var errorBoxP =  $('#' + thisForm + ' .astrofyError p');
            var dateBox = $('#'+thisForm+' input[name="date"]');
            var monthBox = $('#'+thisForm+' input[name="month"]');
            var yearBox = $('#'+thisForm+' input[name="year"]');

            var birthDay = $('#' + thisForm + ' input[name="birthDay"]').val();

            if (birthDay && birthDay.length) {
                birthDay = birthDay.split("/");
                var date = birthDay[0];
                var month = birthDay[1];
                var year = birthDay[2];
            }
            else {
                var date = $("#" + thisForm + " input[name='date']").val();
                var month = $("#" + thisForm + " input[name='month']").val();
                var year = $("#" + thisForm + " input[name='year']").val();
            }

            var dob = month + "-" + date + "-" + year;


            if(date > 31 || date < 1 || month > 12 || month < 1 || year < 1901 || year > 2100){
                $(this).val('');
                if(!date){dateBox.focus();}
                else if(!month){monthBox.focus();}
                else if(!year){yearBox.focus();}
                errorBoxP.text("Set date of Birth first");
                errorBox.removeClass('hidden');
                errorBox.fadeIn('fast').delay(2000).fadeOut('fast', function () {errorBox.addClass('hidden');});
            }
            else if(month == 2){
                var isLeap = new Date(year,1,29).getDate()===29;
                if(isLeap && date > 29){
                    errorBoxP.text("Date cannot be greater than 29");
                    errorBox.removeClass('hidden');
                    errorBox.fadeIn('fast').delay(2000).fadeOut('fast', function () {errorBox.addClass('hidden');});
                }
                else if(date > 28){
                    errorBoxP.text("Date cannot be greater than 28!");
                    errorBox.removeClass('hidden');
                    errorBox.fadeIn('fast').delay(2000).fadeOut('fast', function () {errorBox.addClass('hidden');});
                }
                else{
                    var dob = month+"-"+date+"-"+year;
                    getKundliPlaceLatLonTz($(this).attr('id'), $("#" + thisForm + " input[name='lat']"), $("#" + thisForm + " input[name='lon']"), $("#" + thisForm + " input[name='tz']"), dob, $("#" + thisForm + " input[name='country']"), errorBox, thisForm)
                }
            }
            else{
                var dob = month+"-"+date+"-"+year;
                getKundliPlaceLatLonTz($(this).attr('id'), $("#" + thisForm + " input[name='lat']"), $("#" + thisForm + " input[name='lon']"), $("#" + thisForm + " input[name='tz']"), dob, $("#" + thisForm + " input[name='country']"), errorBox, thisForm)
            }
        });
    }
    else {

        if( $('#home-form-1').length )
        {
            getGeoDetails(".typeahead2", '#home-form-1', '#hr-country', '#birthCountry');
        }
        if( $('#currentCountry').length){
            getGeoDetails(".typeahead3", '#home-form-1', '#hr-country2', '#currentCountry');
        }

        if( $('#matchingStep1').length){
            getGeoDetails(".typeahead4", '#matchingStep1', '#hr-country3');
        }
        if( $('#matchingStep2').length){
            getGeoDetails(".typeahead5", '#matchingStep2', '#hr-country4');
        }

    }

}