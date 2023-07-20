// function random( min, max ){
//     return Math.random() * ( max - min + 1 ) + min;
// }

// function randomInteger( min, max ){
//     return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
// }

// class Box {
//     constructor( mode, text, imgUrl, rotate ){
//         this.mode = mode; // left-box, right-box
//         this.text = text;
//         this.imgUrl = imgUrl;
//         this.rotate =  rotate;

//         this.initEvent();
//     }
//     initEvent(){
//         // 创建 DOM 元素
//         this.element = $(`<div class=${ this.mode }></div>`)
//             .css({
//                 "margin-left": `${ random( 5, 15 ) }vw`,
//                 "margin-top": `${ random( 10, 20 ) }vh`,
//                 "transform": `rotate( ${ random( -10, 10 ) }deg )`
//             });
//         this.imgElement = $(`<img/>`)
//             .attr( "src", this.imgUrl );
//         this.textElement = $(`<p>${ this.text }</p>`);


//         // 添加 DOM 元素
//         if( this.mode == "left-box" ){
//             this.element
//                 .append( this.imgElement )
//                 .append( this.textElement )
//                 .appendTo( $(".container .memory-page") );
//         }else if( this.mode == "right-box" ) {
//             this.element
//             .append( this.textElement )
//             .append( this.imgElement )
//             .appendTo( $(".container .memory-page") );
//         }
//     }
// }

// // const box1 = new Box( 
// //     "left-box", 
// //     "这一天， 你16岁了",
// //     "./lib/img/ink.png"
// // );

// // const box2 = new Box(
// //     "right-box",
// //     "这一天，你16岁了",
// //     "./lib/img/pen.png"
// // )

// const datas = [
//     "第一次一起领奖", //1
//     "第一次一起爬山", //2
//     "运动会的合照", //3
//     "做完核酸一起在水上公园玩", //4
//     "提前批备考的寒假", //5
//     "在范梓涵家聊天时被偷拍", //6
//     "一起去竹垟研学", //7
//     "毕业典礼上与同学们嬉闹", //8
// ];

// const boxes = [];

// datas.forEach( ( cur, idx, arr ) => {
//     boxes.push(
//         new Box(
//             ["left-box","right-box"][ randomInteger( 0, 1  ) ],
//             cur,
//             ( idx >= 1 && idx <= 4 ) || ( idx == 7 )
//                 ? `./lib/img/memory/memory${ idx + 1 }.png`
//                 : `./lib/img/memory/memory${ idx + 1 }.jpg`
//         )
//     )
// } )