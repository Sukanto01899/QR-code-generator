const bgColorPlate = document.getElementById('bg-color-set'),
colorInput = document.querySelector('.color input[type="color"]'),
generateBtn = document.getElementById('generate'),
imgBox  = document.querySelector('.qr-code .img'),
image = document.querySelector('.qr-code .img img'),
textField = document.querySelector('.data-input textarea'),
downlodeBtn = document.querySelector('.qr-code #downlode a')
const [ffd6cc, cce0ff, ffffcc, ccffcc, ccccff]  = document.querySelectorAll('#bg-color-set label input');
let bgColor = 'ffffff';
let color = '000000';
let downloadUrl;

bgColorPlate.addEventListener('click', ()=>{
    if(ffd6cc.checked){
        bgColor = 'ffd6cc'
    }else if(cce0ff.checked){
        bgColor = 'cce0ff'
    }else if(ffffcc.checked){
        bgColor = 'ffffcc'
    }else if(ccffcc.checked){
        bgColor = 'ccffcc'
    }else if(ccccff.checked){
        bgColor = 'ccccff'
    }
})

colorInput.addEventListener('change', ()=>{
    color = colorInput.value.substring(1)
})

const fetchRquest = async (value, color, bgColor)=>{
    const url = `https://api.qrserver.com/v1/create-qr-code/?data=${value}&size=200x200&color=${color}&bgcolor=${bgColor}&margin=10&format=png`
    const data = await fetch(url);
    console.log(data)
    generateBtn.innerText= 'Generate';
    generateBtn.removeAttribute('disabled')
    imgBox.classList.remove('loading')
    downloadUrl = data.url
    downlodeBtn.href = data.url
    image.src = data.url
};

generateBtn.addEventListener('click', ()=>{
    if(!textField.value) return alert('Give something')
    generateBtn.innerText= 'Generating...';
    generateBtn.setAttribute('disabled', true) 
    imgBox.classList.add('loading')
    fetchRquest(textField.value, color, bgColor)
})

