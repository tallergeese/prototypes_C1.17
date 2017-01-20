// Answer the questions here:

// - What do you think is going to happen?

//The new element will not activate the click handler.

// - What happened?

//The new element did not activate the click handler

// - Why?

//The new button did not exist at the time the event handlers were called.

//========== Write your code below ===========//

//Feature Set 1
$(document).ready(function(){
    $('#list button').on('click',function(){
        console.log($(this).text());
    });

//Feature Set 2
    var newButton = $('<button>', {
        style:'margin: 10px',
        text:'Button #5'
    });

    var newLi = $('<li>');

    $(newLi).append(newButton);
    $("#list").append(newLi);

//Feature Set 3

    $('#list').on('click','button',function(){
        console.log($(this).text());
    });

//Additional Challenge

    var specialButton = $('<button>', {
        style:'margin: 10px',
        text:'Special',
        datacoolness: 'low'
    });

    var newerLi = $('<li>');

    newerLi.append(specialButton);
    $("#list").append(newerLi);

    $('#list').on('click','button', function(event){

        var coolCheck = event.target;
        console.log('coolCheck is ' + coolCheck);
        var attr = $(coolCheck).attr('datacoolness');
        console.log('attribute: ' + attr);
        if (attr !== undefined){
            window.open("http://www.google.com");
        }
    })

});

