console.log('%c HI', 'color: firebrick')

fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(function(json){
      json.message.forEach(function (dog) {
          document.querySelector("#dog-image-container").innerHTML += `<img src=${dog}> </img>`
      })
    })
const breeds = []

fetch('https://dog.ceo/api/breeds/list/all')
.then(resp => resp.json())
.then(function(json){
    for (dog in json.message){
        document.querySelector("#dog-breeds").innerHTML += `<li>${dog}</li>`
    }
    document.querySelectorAll('li').forEach(function(dog) { breeds.push(dog.innerText)})
})

document.addEventListener("click", function (e) {
    if (e.target.localName === "li"){
        e.target.style.color = "blue";
    }
})

let mySelect = document.getElementById('breed-dropdown')


document.onchange = function (e){
    let html = ""
    if (e.target.value === 'select'){
        breeds.forEach(function(dog) { 
            html += `<li>${dog}</li>`})
    } 
    else {
        breeds.forEach(function(dog) { 
            if (dog[0] === e.target.value){
            html += `<li>${dog}</li>`}
        })
    }
    document.querySelector("#dog-breeds").innerHTML = html
    
}

