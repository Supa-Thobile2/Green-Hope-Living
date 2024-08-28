const firstNameEl = document.querySelector('#fname');
const lastNameEl = document.querySelector('#lname');
const emailEl = document.querySelector('#email');
const btn = document.querySelector('#btn');

const readBtn = document.querySelector("#read");
const hideEl = document.querySelector(".hidden")


btn.addEventListener("click", function(e){
    e.preventDefault()
   
    alert("Your query has been received")
})


readBtn.addEventListener("click", function(e){
    e.preventDefault()

    hideEl.style.display = "block";
    console.log("tell them")
    
})