$(document).ready( e => {
    if( !document.cookie.length ) return window.location.href = "./login.html";
    $.post( "/api/index", {
            cookie: document.cookie.split("=")[1],
        },
        res => {
            console.log( res );
            if( res ){
                $(".waiting").fadeOut( 500, () => {
                    $(".waiting").detach();
                } )
            }else {
                window.location.href = "./login.html";
            }
        }
    )
} );