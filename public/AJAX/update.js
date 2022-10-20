document.querySelector("#btnUpdate").addEventListener("click", async ()=>{
    let form = document.querySelector("form")
    let data = {}
    let id = '';

    Array.from(form).forEach((inputElement)=>{
        if(inputElement.id == "studentID") id = inputElement.value;
        if(inputElement.id == "fullname") data.fullname = inputElement.value;
        if(inputElement.id == "yearLevel") data.yearLevel = inputElement.value;
        if(inputElement.id == "course") data.course = inputElement.value;
    })
    

    let result = await fetch('/update/'+id,{
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    if(result.status == 200){
        console.log(result)
        alert("succesfully updated!")
    }
})