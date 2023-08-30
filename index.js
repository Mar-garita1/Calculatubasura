// Modal Image Gallery
// function onClick(element) {
//     document.getElementById("img01").src = element.src;
//     document.getElementById("modal01").style.display = "block";
//     var captionText = document.getElementById("caption");
//     captionText.innerHTML = element.alt;
// }

  // Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

//##### Código para inputs
function fetch_info() {
    let first_age = document.getElementById("first_age").value;
    let actual_age = document.getElementById("actual_age").value;
    // document.getElementById("first_age_output").innerHTML = first_age;
    fecth_picture(first_age, actual_age);  
}   

function fecth_picture(first_age, actual_age){
    let dif = actual_age - first_age;
    let picture = document.getElementById("graphic");
    
    // picture.src="https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/06/appa-avatar.jpg?fit=1280%2C720&quality=80&ssl=1";

    if (dif < 3){
        picture.src="img/img-01.png";
        picture.style="width:100%";
    }
    else if ( dif < 6){
        picture.src="img/img-02.png";
        picture.style="width:100%";
    }
    else if ( dif < 9){
        picture.src="img/img-03.png";
        picture.style="width:100%";
    }
    else if ( dif < 15){
        picture.src="img/img-04.png";
        picture.style="width:100%";
    }
    else if ( dif < 18){
        picture.src="img/img-05.png";
        picture.style="width:100%";
    }
    else if ( dif < 21){
        picture.src="img/img-06.png";
        picture.style="width:80%";
    }
    else if ( dif < 24){
        picture.src="img/img-07.png";
        picture.style="width:70%";
    }
    else if ( dif < 27){
        picture.src="img/img-08.png";
        picture.style="width:70%";
    }
    else if ( dif < 30){
        picture.src="img/img-09.png";
        picture.style="width:50%";
    }
    else if ( dif < 33){
        picture.src="img/img-10.png";
        picture.style="width:50%";
    }
    else if ( dif < 36){
        picture.src="img/img-11.png";
        picture.style="width:40%";
    }
    else if ( dif < 39){
        picture.src="img/img-12.png";
        picture.style="width:30%";
    }
    else if ( dif < 42){
        picture.src="img/img-13.png";
        picture.style="width:30%";
    }
    else if ( dif < 45){
        picture.src="img/img-14.png";
        picture.style="width:30%";
    }
    else{
        picture.src="img/error.png";
    }

}