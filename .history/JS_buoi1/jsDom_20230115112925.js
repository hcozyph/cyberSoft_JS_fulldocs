// alert(123);
/*
    Truy xuất đến thẻ thông qua id
    var theH1 = document.getElementById('id');

    theH1.innerHTML
*/

//innerHTML: là phần nội dung ở giữa hai thẻ đóng mở 
// document.getElementById('title').innerHTML = 'CyberSoft xin chào';
var theH1 = document.getElementById('title');
theH1.innerHTML = 'CyberSoft xin chào';

var theDivContent = document.getElementById('content');
theDivContent.innerHTML = 'demo';

// var theImg = document.getElementById('hinhAnh');
// theImg.src ='../img/pic3_3.jpg';

var theInput = document.getElementById('txt');
theInput.value ='cybersoft';
