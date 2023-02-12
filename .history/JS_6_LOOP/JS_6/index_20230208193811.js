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
    console.log('hello CyberSoft !' + soLan);

    //Bước 4: thay đổi điều kiện sau mỗi lần lặp để DỪNG
    soLan += 1;
};