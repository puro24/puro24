

function loadstate()
{
    var gtdata= document.getElementById("validationCustom03")
    var resultdropdown=document.getElementById("validationCustom04")


var keyvalue=gtdata.options[gtdata.selectedIndex].value
resultdropdown.length=0

let defaultOption = document.createElement('option')
defaultOption.text=''

resultdropdown.add(defaultOption)
resultdropdown.selectedIndex=0 

//var result=document.getElementById("rslt")

let option

fetch("https://gist.githubusercontent.com/ebaranov/41bf38fdb1a2cb19a781/raw/fb097a60427717b262d5058633590749f366bd80/gistfile1.json")
.then((data) => {

return data.json()  

}).then((state) =>{

//console.log(state)
console.log(keyvalue)
for(i=0;i< state.countries[keyvalue].states.length;i++)

       {
       option=document.createElement('option')
       option.text=state.countries[keyvalue].states[i]
       option.value=i
       resultdropdown.add(option)
       
      // result.innerHTML+=`<br> The states of ${state.countries[keyvalue].country} are:`   
       //result.innerHTML+=`${state.countries[keyvalue].states[i]}`
      }
             
})

}


