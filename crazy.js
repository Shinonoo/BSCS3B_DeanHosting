// console.log(fetch('https://chargeraccount.org/wp-content/uploads/2023/06/K7Kk3DSxN0r4AVhONa9ruggbas3DWRIrbnHw1dJc-1-900x600.jpg')
// .then(response =>{
//   console.log(response);
//   return response.blob()
// })

// .then(blob => {
//   console.log(blob)
//   document.querySelector('#myImage').src=URL.createObjectURL(blob)
// })

// .catch(error =>{
//   console.log(error)
// })

// )





const content = document.querySelector("#content")

window.addEventListener("load", () => {
    getUsers();
})

function getUsers(){

    let html = ""

    //fetch("http://localhost:5001/api/members", {mode:"cors"})
    fetch("https://bscs2b-api-crud-bh4x.onrender.com/api/members", {mode:"cors"})
    .then((response) => {
      console.log(response)
      return response.json()
    })

    .then((data) => {
        data.forEach((element) => {
            html += `<li> ${(element.first_name)} ${(element.last_name)} </li>`
        })
        content.innerHTML = html
    })

    .catch((error) => {
      console.log(error)
    })

}



