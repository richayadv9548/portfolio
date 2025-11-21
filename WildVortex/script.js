// var istatus = document.querySelector("h5")
// var btn = document.querySelector("#add")
// var check = 0
// btn.addFriendEventListener("click",function(){
//     if(check == 0){
//     idstatus.innerHTML = "Friend"
//     istatus.style.color="green"
//     btn.innerHTML = "Remove Friend"
//     check = 1;

    
//     }else{
//         istatus.innerHTML = "Stranger"
//     istatus.style.color="red"
//     btn.innerHTML = "Add Friend"
//     check = 0;
//     }

// })
// add.addFriendEventListener("click",function(){
//     idstatus.innerHTML = "Stranger"
//     istatus.style.color="Red"

// })
var istatus = document.querySelector("h5")
var btn = document.querySelector("#add")
var check = 0

btn.addEventListener("click", function(){
    if(check == 0){
        istatus.innerHTML = "Friend"
        istatus.style.color = "green"
        btn.innerHTML = "Remove Friend"
        check = 1
    } else {
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        btn.innerHTML = "Add Friend"
        check = 0
    }
})


// let R = 3;
// let B = 4;
// let G = Math.min(R,B);
// R = R - G;
// B = B - G;
// let total = (R*1)+(B*2)+(G*5);
// console.log(total);


// let n = 4;
// // let row = 0;
// for(let i = 1; i<=n; i++){
// let row = 0;
// for(let j = 1; j<=i; j++){
//     row += j;
// }
// for(let k = 1; k<)
// console.log(row);
// }

