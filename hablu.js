// function myFunction() {
//     // let call = document.getElementById("signin-call");
//     let here = document.getElementById("signin-show");
//     const p = document.createElement("p");
//     p.innerText = "Enjoy your journey.";
//     here.appendChild(p);
//     // alert("Enjoy your journey.");
// }

document.getElementById('signin-call').addEventListener('click',function(){
    const call = document.getElementById('signin-show');
    call.innerHTML = "Enjoy your journey."+new Date();
})
