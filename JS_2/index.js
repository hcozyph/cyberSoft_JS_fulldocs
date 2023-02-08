
//Ví dụ 1: thay đổi nội dung
function thayDoiNoiDung() {
    var thayDoiNoiDung = document.getElementById('txtNoiDung');
    thayDoiNoiDung.innerHTML = 'Nội dung sau khi thay đổi'; 
}

//Ví dụ 2: Thay đổi màu sắc
function changeColor () {
    var tagHome = document.getElementById('home');
    // tagHome.style.color = 'red';
    // // đối với thuộc tính CSS có 2 từ trở lên -> viết kiểu camelS
    // tagHome.style.fontSize = '200px';

    //Thay đổi class
        tagHome.className = 'fa fa-home big-home shadow-lg';
}

/* 
Chuyển đổi style trong css và js
    css                 js
    font-weight         fontWeight
    background-color    backgroundColor
    margin-top          marginTop
*/

function changeContent () {
    var tagTieuDe = document.getElementById('tieuDe')
    var tagNoiDung = document.getElementById('noiDung');

    //ẩn thẻ p
    tagNoiDung.style.display = 'none';
    //thêm background, opacity, fontSize, border thẻ h2#tieuDe
    tagTieuDe.style.background = 'orange';
    tagTieuDe.style.opacity = '0.5';
    tagTieuDe.style.border = '1px solid red';
    tagTieuDe.style.fontSize = '20px';
    tagTieuDe.innerHTML = 'CyberSoft frontend !!!';
}



