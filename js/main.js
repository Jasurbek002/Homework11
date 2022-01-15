



// var cars =[{
//     type:"bmv",
//     name:"x5",
//     eat:['disel', 'mannol'],
//     parent:{
//         type:"mansoritti",
//         name:"comford",
//         eat:["metan","class"]
//     }
// },
// {
//     type:"mersades-benz",
//     name:"gelek",
//     eat:['cometa','desel']
// }
// ];
// var ulelement=document.createElement('ul')
// for(let i =0;i<cars.length;i++){
//     let livecars = cars[i]
//     var lielment=document.createElement('li')
//     lielment.textContent= `type: ${livecars.type}  | name: ${livecars.name}  `
//     ulelement.appendChild(lielment)
//     for(let f = 0;f<livecars.eat.length;f++){
//         let spanelemant =document.createElement('span')
//         spanelemant.style.margin='0 10px'
//         spanelemant.style.padding='1px'
//         spanelemant.style.color='blue'
//         // spanelemant.style.border='2px solid black'


//         spanelemant.textContent=livecars.eat[f]

//         lielment.appendChild(spanelemant)
//     }
// }
// document.body.appendChild(ulelement)
// const start=10

var isinput =document.createElement('input')
var isLable = document.getElementById('lable')
isLable.style.position='absolute'
isLable.style.margin='60px 10px'
isLable.style.color='white'
var isparol = document.getElementById('parol')
isparol.style.margin='0px 10px'

isinput.style.width='400px'
isinput.style.height='50px'
isinput.style.position='absolute'
isinput.style.margin='5px 10px '
isinput.style.border='3px solid black'
var thisinput =document.createElement('input')
thisinput.style.width='400px'
thisinput.style.height='50px'
thisinput.style.marginLeft='0px'
thisinput.style.margin='5px 10px '
thisinput.style.position='relative'
thisinput.style.opacity='0'
thisinput.style.zIndex='+1'
thisinput.setAttribute("type" ,"text")

isinput.addEventListener('focus',()=>{
    let text = " "
    const start=10
isinput.value=text.padEnd(thisinput.value.length,"*" )

console.log(text)
})
thisinput.addEventListener('keyup',(event)=>{
    let text = " "
    isinput.value=thisinput.value.padEnd(10,"*")
    if(thisinput.value.length>10){

        isLable.style.color='red'
    }else{
        isLable.style.color='white'
    }
   
})
document.body.appendChild(isinput)
document.body.appendChild(thisinput)



















