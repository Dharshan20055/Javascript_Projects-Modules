const content = document.getElementById("content")

//Without using Promises (Countdown)
// function call(){
//     setTimeout(() => {
//         content.innerHTML=3
//     }, 1000);
//     setTimeout(() => {
//         content.innerHTML=2
//     }, 2000);
//     setTimeout(() => {
//         content.innerHTML=1
//     }, 3000);
//     setTimeout(() => {
//         content.innerHTML="Happy New Year"
//     }, 4000);

// }
// call()

//Using Promises (Countdown)
function call(duration){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res()
        }, duration);
    })
}
content.innerHTML="Countdown Begins!"

call(1000).then(()=>{
    content.innerHTML=3
    return call(1000)
}).then(()=>{
    content.innerHTML=2
    return call(1000)
}).then(()=>{
    content.innerHTML=1
    return call(1000)
}).then(()=>{
    content.innerHTML="Happy Birthday!"
})