const div = document.getElementById('heading')
const car = document.getElementById('cards')

const datas = fetch('./data.json').then((response)=>{
   return response.json();
}).then((data)=>{
        if(data.length===0) boilerplate("No one shown interest!")
        else {
            boilerplate("Interested candidate list")
            data.forEach((dat)=>{
                createcards(dat)
            })
        }
}).catch((err)=>{
    boilerplate("Failed to Fetch Details")
})


function boilerplate(msg){
    var h1=document.createElement('h1')
    h1.innerText=msg
    div.appendChild(h1)
}

function createcards(dat){
    const newdiv = document.createElement('div')
    newdiv.classList.add('dyncards')

    const id = document.createElement('h3')
    id.innerText=`ID : ${dat.id}`
    
    const name = document.createElement('h1')
    name.innerText=`Name : ${dat.name}`
    
    const course = document.createElement('h2')
    course.innerText=`Course : ${dat.course}`

    newdiv.appendChild(id)
    newdiv.appendChild(name)
    newdiv.appendChild(course)

    car.appendChild(newdiv)
}