/////// TOÁN TỬ LUẬN LÝ
//Ví dụ 1: về TRUE & FALSE
var number1 = '10';
var number2 = 10;

/// '==' : bằng
console.log('==', number1 == number2);

/// '!=' : khác 
console.log('!==', number1 != number2);

/// '===' : so sánh bằng giá trị trước và kiểu dữ liệu
console.log ('===', number1 === number2);

/// '!==' : khác và khác kiểu dữ liệu
console.log ('!==', number1 !== number2);

/// '>' : lớn hơn
console.log ('>', number1 > number2 );

/// '>=' : lớn hơn hoặc bằng 
console.log ('>=', number1 >= number2 );

/////// TOÁN TỬ SO SÁNH

var bieuThucA = true;
var bieuThucB = true;
var bieuThucC = false;


/// '!' : phủ định
console.log ('phủ định', !bieuThucA)

/// '&&' : và - tất cả phải đều đúng 
console.log ('và', bieuThucA && bieuThucB) //true

console.log ('và', bieuThucA && bieuThucB && bieuThucC) //false

/// '||' : hoặc - chỉ cần 1 biểu thức đúng 
console.log ('và', bieuThucA || bieuThucB && bieuThucC) //false


///////////// IF

//Ví dụ 2: Tính điểm thi , xếp loại

//input
var dtb = 5 ;
var hanhKiem = 5;

//output
var ketQua = '';

//Viết chương trình xem sinh viên có đậu hay không, nếu đạu in ra console.log('Đậu'). Biết rằng trung bình trên 5 và hanhKiem trên 5 thì mới đậu

if (dtb >= 5 && hanhKiem >= 5) {
    console.log ('Đậu');
};
// else {
//     ketqua = 'Rớt'

function tinhTienLuong () {
    // input
    var tienLuong1h = document.getElementById('tienLuong1h').value;
    var soGioLam = document.getElementById('soGioLam').value;
    
    //output
    var tongLuong = 0;

    // process
    if (soGioLam <= 40) {
        tongLuong = soGioLam * tienLuong1h;}

    else {
        tongLuong = (soGioLam - 40) * 1.5 * tienLuong1h + soGioLam * tienLuong1h;
        console.log(tongLuong)
    };

    document.getElementById('tongLuong').innerHTML = tongLuong;
};


// var btn = document.getElementById('btnTinhTien');
// btn.onclick = tinhTienLuong;


/////BT 2:

function tinhTienHang () {
    // input
    var tenSanPham = document.getElementById('tenSanPham');

    var soLuongNhap = document.getElementById('soLuongNhap').value;

    var donGiaNhap = document.getElementById('donGiaNhap').value;

    //output
    var tongTienHang = 0;

    // process

    if (soLuongNhap < 50) {
        tongTienHang = soLuongNhap * donGiaNhap
    } else if (soLuongNhap > 100) {
        tongTienHang = soLuongNhap * donGiaNhap * 0.92
    } else {
        tongTienHang = soLuongNhap * donGiaNhap * 0.88
    }

    document.getElementById('tongTienHang').innerHTML = tongTienHang;

}

// Biểu thức 3 ngôi thay thế if else
// Ví dụ: cho 1 số tự nhiên, cho biết số đó là số chắn hay lẻ

var n = 9 ;

/*  if (n % 2 == 0) {
        console.log('số chẵn');
    else {
        console.log('số lẻ');
    }
}
*/

// 3 ngôi

/// Viết chưo

/// TÍNH ĐIỂM TRUNG BÌNH TOÁN - LÝ - HÓA

document.getElementById('btnXepLoai').onclick = function () {

    //input
    var hoVaTen = document.getElementById('hoVaTen').value;

    var diemToan = Number(document.getElementById('diemToan').value);

    var diemLy = Number(document.getElementById('diemLy').value);

    var diemHoa = Number(document.getElementById('diemHoa').value);

    //output
    var diemTrungBinh = 0;

    var xepLoai = '';

    //process 
    document.getElementById('out-put-ho-ten').innerHTML = hoVaTen;

    diemTrungBinh = ( diemToan + diemLy + diemHoa ) / 3;
    // diemTrungBinh = num.toFixed(2);

    console.log(diemTrungBinh);
    document.getElementById('out-put-diem-trung-binh').innerHTML = diemTrungBinh + " điểm" ;

    if (diemTrungBinh >= 8.5) {
        xepLoai =  'Giỏi' ;
    }
    else if (diemTrungBinh < 8.5 && diemTrungBinh>= 6.5) {
        xepLoai = 'Khá'
    }

    if (diemTrungBinh < 5) {
        xepLoai =  'Kém';
    } 
    else {
        xepLoai =  'Trung bình';
    }

    document.getElementById('out-put-xep-loai').innerHTML = xepLoai;

}

