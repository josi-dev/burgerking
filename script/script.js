if(navigator.userAgent.match(/Android/i)

|| navigator.userAgent.match(/webOS/i)

|| navigator.userAgent.match(/iPhone/i)

|| navigator.userAgent.match(/iPad/i)

|| navigator.userAgent.match(/iPod/i)

|| navigator.userAgent.match(/BlackBerry/i)

|| navigator.userAgent.match(/Windows Phone/i)

) {


    console.log("verdade celular")
    
    var thumb = document.getElementById("thumb")
    var imgAmostra = document.getElementById("imgAmostra")
    var valor = document.getElementById("precoAndroid")
    
    function img1() {
        imgAmostra.src = './img/frita1.png'
        valor.innerHTML = 'R$ 12,00'
        imgAmostra.style.width = '100%'
        thumb.style.marginLeft = '28%'
    }
    function img2() {
        imgAmostra.src = './img/frita2.png'
        valor.innerHTML = 'R$ 35,00'
        imgAmostra.style.width = '100%'
        thumb.style.marginLeft = '28%'
    }
    function img3() {
        imgAmostra.src = './img/frita3.png'
        valor.innerHTML = 'R$ 37,00'
        imgAmostra.style.width = '100%'
        thumb.style.marginLeft = '28%'
    }
    function img4() {
        imgAmostra.src = './img/frita4.png'
        valor.innerHTML = 'R$ 12,00'
        imgAmostra.style.width = '100%'
        thumb.style.marginLeft = '28%'
    }
    function img5() {
        imgAmostra.src = './img/refri1.png'
        valor.innerHTML = 'R$ 8,00'
        imgAmostra.style.width = '60%'
        thumb.style.marginLeft = '38%'
    }
    function img6() {
        imgAmostra.src = './img/refri2.png'
        valor.innerHTML = 'R$ 5,00'
        imgAmostra.style.width = '100%'
        thumb.style.marginLeft = '28%'
    }
    
    
    
    
    
}else {

var imgAmostra = document.getElementById("imgAmostra")
var valor = document.getElementById("preco")

function img1() {
    imgAmostra.src = '../img/frita1.png'
    valor.innerHTML = 'R$ 12,00'
    imgAmostra.style.width = '80%'
    valor.style.marginTop = "0px"
}
function img2() {
    imgAmostra.src = '../img/frita2.png'
    valor.innerHTML = 'R$ 35,00'
    imgAmostra.style.width = '80%'
    valor.style.marginTop = "0px"
}
function img3() {
    imgAmostra.src = '../img/frita3.png'
    valor.innerHTML = 'R$ 37,00'
    imgAmostra.style.width = '75%'
    valor.style.marginTop = "25%"
}
function img4() {
    imgAmostra.src = '../img/frita4.png'
    valor.innerHTML = 'R$ 12,00'
    imgAmostra.style.width = '80%'
    valor.style.marginTop = "0px"
}
function img5() {
    imgAmostra.src = '../img/refri1.png'
    valor.innerHTML = 'R$ 8,00'
    imgAmostra.style.width = '60%'
    valor.style.marginTop = "0px"
}
function img6() {
    imgAmostra.src = '../img/refri2.png'
    valor.innerHTML = 'R$ 5,00'
    valor.style.marginTop = ""
    imgAmostra.style.width = '80%'
}




}







/* navigator.userAgent.match(/Android/i)

|| navigator.userAgent.match(/webOS/i)

|| navigator.userAgent.match(/iPhone/i)

|| navigator.userAgent.match(/iPad/i)

|| navigator.userAgent.match(/iPod/i)

|| navigator.userAgent.match(/BlackBerry/i)

|| navigator.userAgent.match(/Windows Phone/i

 */
