
document.querySelector('#btnInsert').addEventListener("click", async ()=>{
    let form = document.querySelector("form")
    let data = {}
    Array.from(form).forEach((inputElement)=>{
        if(inputElement.id == "fullname") data.fullname = inputElement.value;
        if(inputElement.id == "yearLevel") data.yearLevel = inputElement.value;
        if(inputElement.id == "course") data.course = inputElement.value;
    })
    
    let result = await fetch('/insert',{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    if(result.status == 200){
        console.log(result)
        alert("succesfully created!")
    }
})





