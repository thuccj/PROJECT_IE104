var banners = [
    "https://anh4.com/images/2021/12/19/MGBOTa.png",
    "https://anh4.com/images/2021/12/10/MnEkFY.jpg",
    "https://anh4.com/images/2021/12/10/MnEEdZ.jpg"
]
var index = 0;
function changebg(){
    document.querySelector('.banner').style = `
    background: url('${banners[index]}');
    background-size: cover;
    background-repeat: no-repeat;
    `
    index ++
    if (index == banners.length ) index = 0
}
setInterval(changebg, 2500)

document.querySelector('.banner').addEventListener('click', ()=>{
    document.querySelector('.banner').style = `
    background: url('${banners[index]}');
    background-size: cover;
    background-repeat: no-repeat;
    `
    index ++
    if (index == banners.length ) index = 0
})