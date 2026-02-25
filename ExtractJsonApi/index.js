const main = document.getElementById('main')
const btn = document.getElementById('btn')

let alldata=[]

fetch('https://jsonplaceholder.typicode.com/todos').then((response)=>{
    return response.json()
}).then((datas)=>{
    alldata=datas
    displaycards(alldata)
}).catch(()=>{
    main.innerHTML="<h2>Failed to Fetch Details</h2>"
})

btn.addEventListener('click',start)

function start(){

    main.innerHTML=""
    
    const input = document.getElementById('input')
    const error = document.getElementById('error')
    
    const filterdata = alldata.filter((datas)=>{
        return datas.userId===Number(input.value)
    })

    if(filterdata.length<1){
        error.innerHTML="Entered User Id is not there! All items are here check"
        displaycards(alldata)
        return
    }
    error.innerHTML=""

    displaycards(filterdata)
}

function displaycards(datarr){
    datarr.forEach((datas)=>{
        createcards(datas)
    })
}

function createcards(datas){

    var newdiv = document.createElement('div')
    newdiv.classList.add('cardsdiv')

    var userid = document.createElement('h3')
    userid.innerText=`UserID : ${datas.userId}`

    var id = document.createElement('h3')
    id.innerText=`ID : ${datas.id}`

    var title = document.createElement('h2')
    title.classList.add('title')
    title.innerText=`Title : ${datas.title}`

    var status = document.createElement('h3')
    status.innerText=`Status : ${datas.completed}`

    newdiv.appendChild(userid)
    newdiv.appendChild(id)
    newdiv.appendChild(title)
    newdiv.appendChild(status)

    main.appendChild(newdiv)

}