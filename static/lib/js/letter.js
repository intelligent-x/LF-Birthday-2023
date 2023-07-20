// $(".container").scrollTop( window.innerHeight * 3.2 );

$(".letter-page .letter").fadeToggle( 0 );

$(".cover .button").click( e => {
    $(".envelope .cover").toggleClass("cover-open")
    $(".letter-page .letter").fadeToggle( 300 );
} )

$(".letter .quit").click( e => {
    $(".envelope .cover").toggleClass("cover-open")
    $(".letter-page .letter").fadeToggle( 300 );
} )