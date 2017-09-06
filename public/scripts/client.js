console.log( 'js' );

$(document).ready(onReady);

function onReady() {
    $('#requestButton').on('click',makeGetRequest);
    
    $.ajax ({
        type : 'GET',
        url : '/',
        success: function(res) {
            console.log('on html load');
        }
    });
};

function makeGetRequest() {
    console.log('inside make get request');

    $.ajax ({
        type : 'GET',
        url : '/dead',
        success: function(res) {
            console.log('I am successful!', res);
        }
    });
};