let select=document.get


fetch('https://api.frankfurter.dev/v1/currencies')
.then(res=>res.json())
.then(res=>displayDropDown(res))
function displayDropDown(res){
    //console.log(Object.entries(res)[5][0])to display the object into array using entries
    let curr=Object.entries(res)
    for(let i=0;i<curr.length;i++){
        let opt =`<option value="${curr[i][0]}">${curr[i][0]}</option>`
        console.log(opt)
    }
}