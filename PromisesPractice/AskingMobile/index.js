const main = document.getElementById("main")
const button=document.getElementById("btn")

button.addEventListener('click',start)

function start(){
    main.innerHTML=""

    const fat=document.getElementById("father").value.trim();
    const mot=document.getElementById("mother").value.trim();
    
    const askingmobile = new Promise((res,rej)=>{
        const father=fat , mother =mot
    
        setTimeout(() => {
            
            if(father.toLowerCase()==="true" && mother.toLowerCase()==="true"){
                res({mes:"No Objection form Parents!",mes1:"Buying Mobile"})
            }
            else{
                rej({message:"Have to Convince your parents!",father,mother})
            }
        }, 2000);
    
    }).then((result)=>{
        boilerplate(result.mes,'h2')
        boilerplate(result.mes1,'h2')
    }).catch((err)=>{
        boilerplate(err.message,'h2')
    
        return new Promise((res,rej)=>{
            if(err.father.toLowerCase()!=="true" && err.mother.toLowerCase()!=="true"){
                res("Convine both father and mother")
            }
            else{
                rej(err)
            }
        }).then((result)=>{
            boilerplate(result,'h3')
        }).catch((err)=>{
            return new Promise((res,rej)=>{
                if(err.father.toLowerCase()==="true" && err.mother.toLowerCase()!=="true"){
                    res("Have to convince your mother")
                }
                else{
                    rej("Have to convince your father")
                }
            }).then((result)=>{
                boilerplate(result,'h3')
            }).catch((err)=>{
                boilerplate(err,'h3')
            }).finally(()=>{
                boilerplate("End!",'h1')
            })
        })
    })
    
    boilerplate("Asking Mobile From Parents",'h1')
    
    
    function boilerplate(message,element){
        var h2 = document.createElement(element)
        h2.innerHTML=message
        main.appendChild(h2)
    }

}