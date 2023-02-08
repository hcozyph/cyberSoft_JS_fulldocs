
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
    var tagNoiDung = document.getElementById('noiDung');
    tagNoiDung.innerHTML = null;
}



