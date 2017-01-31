//Create GLOBAL variable below here on line 2
    var global_result;
    var first_movie;

$(document).ready(function(){
    $('button').click(function(){
        console.log('click initiated');
        $.ajax({
            dataType: 'json',
            url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json',
            success: function(result) {
                console.log('AJAX Success function called, with the following result:', result);
                global_result = result;
                first_movie = result.feed.entry[0]["im:image"][2].label;
                for (var i = 0; i < result.feed.entry.length; i++){
                    var movie_image = result.feed.entry[i]["im:image"][2].label;
                    //the directors are in the title property for some reason too, but I'll keep both for completeness, although it's a bit redundant
                    var movie_info = "Title: " + result.feed.entry[i].title.label + " Director: " + result.feed.entry[i]["im:artist"].label;
                    var $fig= $('<figure>');
                    var $figcap= $('<figcaption>').text(movie_info);
                    var $img = $('<img>', {
                        src: movie_image
                    });
                    $fig.append($img).append($figcap);
                    $('#main').append($fig);
            }
        }
        });
        console.log('End of click function');
    });
});