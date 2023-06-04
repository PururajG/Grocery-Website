

// For the timner clock
function clock() {
    const day = document.getElementById("Day");
    const Hour = document.getElementById("Hour");
    const Minut = document.getElementById("Minut");
    const Second = document.getElementById("Second");
    var d = new Date().getDay();
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    day.innerHTML = d;
    Hour.innerHTML = h;
    Minut.innerHTML = m;
    Second.innerHTML = s;
}
var interwval = setInterval(clock, 1000)

//For  product details page img chenge

function chengeimg1() {
    const subimg = document.getElementById('subimg1');
    images.src = 'Img/tomato sub (1).jpg'
}

function chengeimg2() {
    const subimg = document.getElementById('subimg2');
    images.src = 'Img/Veg (2).png'
}
function chengeimg3() {
    const subimg = document.getElementById('subimg3');
    images.src = 'Img/tomato sub (2).png'

}
function chengeimg4() {
    const subimg = document.getElementById('subimg4');
    images.src = 'Img/tomato sub .jpg'
}

// for plus minus quentiry of product page
function plus() {
    var minus = document.getElementById('minus')
    var total = document.getElementById('total');
    var plus = document.getElementById('plus')
    var price = document.getElementById('price').value = price * 2
    x = total.value++;
    console.log(total.value)
    if (x => 1) {
        minus.style.display = "block"
    }

}
function minus() {
    var minus = document.getElementById('minus')
    var total = document.getElementById('total');
    var plus = document.getElementById('plus')
    x = total.value--;
    console.log(total.value)
    if (x <= 1) {
        minus.style.display = "none"
    }

}


// for the popups 


function showcart() {
    const cardlist = document.getElementById('cart').style.display = "block";
    const user = document.getElementById('user').style.display = "none";
    const signupform = document.getElementById('sign-popup').style.display = "none";
    var logout = document.getElementById('logout').style.display = "none"

    
}

function hidecart() {
    const cardlist = document.getElementById('cart').style.display = "none";
    var logout = document.getElementById('logout').style.display = "none"

}


function showuser() {
    const signupform = document.getElementById('cart').style.display = "none";
    const cardlist = document.getElementById('sign-popup').style.display = "none";
    const user = document.getElementById('user').style.display = "block";
}

function hideuser() {
    const cardlist = document.getElementById('user').style.display = "none";
}
function showsignpopup() {
    const userfornm = document.getElementById('sign-popup').style.display = "block";
    const user = document.getElementById('user').style.display = "none";

}
function hidesignpopup() {
    const cardlist = document.getElementById('sign-popup').style.display = "none";
}

function afterlogin() {
    var afterlogin = document.getElementById('loginicon').style.display = 'none'
    var afterlogin = document.getElementById('user').style.display = 'none'
    var userlogin = document.getElementById('afterlogin').style.display = 'block';
    const userfornm = document.getElementById('sign-popup').style.display = "none";

}

function logout() {
    var logout = document.getElementById('logout').style.display = "block"
    const cardlist = document.getElementById('cart').style.display = "none";

    
}
function hidelogout() {
    var logoutuser = document.getElementById('logout').style.display="none"
}       
// for manage address
function oldaddress() {
    let oldaddress = document.getElementById('old-address').style.display = "none"
    let newaddress = document.getElementById('new-address').style.display = "block"

}                 