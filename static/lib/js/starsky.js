// function random( min, max ){
//     return Math.random() * ( max - min + 1 ) + min;
// }

// function randomNot0( min, max ){
//     const num = Math.random() * ( max - min + 1 ) + min;
//     return num == 0 ? randomNot0( min, max ) : num;
// }

// // for( let i = 0 ; i < 40 ; i ++ ){
// //     const star = $(`<div class="star"></div>`);
// //     const length = randomNot0( 0, 2 );
// //     star.css({
// //         width: `${ length }px`,
// //         height: `${ length }px`,
// //         left: `${ random( 0, window.innerWidth ) }px`,
// //         top: `${ random( 0, window.innerHeight * 0.4 ) }px`
// //     }).appendTo( $(".stars") );
// // }

// for( let i = 0 ; i < 15 ; i ++ ){
//     const length = randomNot0( 1, 5 );
//     $(`<div class="moving-star"></div>`).css({
//         width: `${ length }px`,
//         height: `${ length }px`,
//         left: `${ random( 20, 150 ) }vw`,
//         animationDelay: `${ random( 0, 1 ) }s`,
//         animationDuration: `${ randomNot0( 2, 5 ) }s`
//     }).appendTo( $(".starsky") );
// }

// 视差滚动设置
$(".container").scroll( e => {
    // 获取滚动长度
    const value = e.target.scrollTop;

    if( value >= window.innerHeight * 3.2 ) 
        return e.target.scrollTop = window.innerHeight * 3.2;
    
    $(".cake-page .starsky").css( "top", `${ value * 0.5 }px` );
    $(".cake-page .img").css( "top", `${ - value }px` );
    $(".container .memory-page").css( "top", `${ - value * 0.5 }px` );
    $(".container .letter-page").css( "top", `${ - value * 0.5 }px` );
} )