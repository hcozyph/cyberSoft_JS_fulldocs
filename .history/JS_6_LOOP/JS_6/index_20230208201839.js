console.log('lần1');
console.log('lần2');
console.log('lần3');
console.log('lần4');

/*
    Cấu trúc vòng lặp: Dùng để thực hiện 1 hành động được lặp đi lặp lại nhiều lần.

    //CÁC BƯỚC CẤU THÀNH VÒNG LẶP
    B1: Xác định điều kiện thay đổi trong biểu thức lặp (có 1 biến nào đó gọi là biến điều kiện)

    B2: Dựa vào biến thay đổi để thực hiện điều kiện lặp

    B3: Cài đặt xử lý trong mỗi lần lặp

    B4: Thay đổi giá trị của biến điều kiện để đến 1 lúc nào đó nó sẽ dừng

*/

////

//Bước 1: Xác định điều kiện lặp
var soLan = 0;

//Bước 2: Điều kiện lặp
while (soLan <= 5) {
    //Bước 3: xử lý
    console.log('hello CyberSoft ! lần' + soLan);

    //Bước 4: thay đổi điều kiện sau mỗi lần lặp để DỪNG
    soLan += 1;
};

////////////////////////////////////////////////////////

//BÀI 1: Bài tập in ra số div tương ứng

document.getElementById('btn-in-div').onclick = function () {

    //input: số lượng div
    var soLuongDiv = Number(document.getElementById('so-div').value);

    //output: 
    var htmlOutput = '';

    //process:

    //B1: xác định điều kiện thay đổi - khai báo biến điều kiện
    var soLan = 1;

    //B2: Điều kiện lặp
    while (soLan <= soLuongDiv) {

        //B3: Xử lý mỗi lần lặp
        htmlOutput = htmlOutput + '<div>Helu</div>';

        //B4: Thay đổi điều kiện để stop loop
        soLan += 1;
    }

    //////////////////Nhớ đặt trong function//////////////
    //In output ra giao điện
    document.getElementById('ket-qua-bai-1').innerHTML = htmlOutput;
}

//BÀI 2: Tính giai thừa

document.getElementById('btn-tinh-giai-thua').onclick = function () {
    //input
    var soGiaiThua = Number(document.getElementById('so-giai-thua').value);

    //output
    var ketQua = 1;

    //process
    
    //B1: khai báo biến điều kiện
    var 



}