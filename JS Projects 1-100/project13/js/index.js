const form = document.querySelector('#frm');
const output = document.querySelector('#output');
const spinner =document.querySelector('#loading');
const qrcodeElement = document.querySelector('#qrcode');
const btnSave = document.querySelector('#btn-save');


function generateQRCode(e) {
    e.preventDefault();
    const url =document.querySelector('#url').value;
    const size = document.querySelector('#size').value;
    const colordk = document.querySelector('#colordark').value;
    const colorlt = document.querySelector('#colorlight').value;

    if (url === "") {
        alert('Please Enter Your Website Link')
    }
    else{
        //show spinner
        spinner.style.display = "flex";


        setTimeout(() => {
            spinner.style.display = "none";
             qrcodeElement.innerHTML = "";

            const qrcode =new QRCode('qrcode',{
                text:url,
                width: size,
                height: size,
                colordark: colordk,
                colorlight: colorlt,
                correctlevel: QRCode.correctlevel.H
            })
        },1000);
    }
}
form.addEventListener('sumbit',generateQRCode);

function createDownloadLink() {
    const imgSrc = qrcodeElement.querySelector('img').src;
    btnSave.href=imgSrc;
}

btnSave.addEventListener('click',() => {
    setTimeout(() => {
        btnSave.download = 'qrcode';
    },50);
});
