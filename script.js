
    let imgbox = document.getElementById("imgbox");
    let QRimg = document.getElementById("QRimg");
    let QRinput = document.getElementById("QRinput");

  function QRgenerator(){
     
     QRimg.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QRinput.value
    imgbox.classList.add("show-img")


}