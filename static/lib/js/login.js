$("input[type='button']").click( e => {
    $.post( "/api/login", 
    {
        username: $("input[name='username']").val(),
        password: $("input[name='password']").val()
    },
    res => {
        $(".messagebox").text( `* ${ res.message }` );
        if( res.cookie ){
            window.location.href = res.url;
            document.cookie = `passport=${ res.cookie }`;
        }
    } )
} )