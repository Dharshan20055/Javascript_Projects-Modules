const div = document.getElementById("main")


// var coffeeshop = new Promise((res,rej)=>{
//     const coffeemachine = true
//     const price =20

//     setTimeout(() => {
//         if(coffeemachine){
//             res({message:"Get coffee",price})
//         }
//         else{
//             rej("No Coffee available! Machine broken")
//         }
//     }, 3000);
// })

// console.log("Ordering Coffee")

// coffeeshop.then((result)=>{
//     console.log(result.message)
//     console.log("Price : $",result.price)
// }).catch(msg=>{
//     console.log(msg)
// }).finally(()=>{
//     console.log('Thanks for visiting!')
// });


var coffeeshop = new Promise((res,rej)=>{
    const coffeemachine = true
    const price =20

    setTimeout(() => {
        if(coffeemachine){
            res({message:"Get coffee",price})
        }
        else{
            rej("No Coffee available! Machine broken")
        }
    }, 3000);
})

 var order =document.createElement("h1")
 order.innerHTML="Ordering Coffee!"
 div.appendChild(order)

coffeeshop.then((value)=>{
    
        var con = document.createElement('h2')
        con.innerHTML=value.message
        div.appendChild(con)

        var price = document.createElement('h3')
        price.innerHTML='$'+value.price
        div.appendChild(price)
    }).catch(msg=>{
    console.log(msg)
}).finally(()=>{
    var final = document.createElement('h2')
    final.innerHTML="Thank You for Visiting!"
    div.appendChild(final)
});