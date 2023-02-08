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
    if (soGioLam == 40) {
        tongLuong = soGioLam * tienLuong1h;
        console.log(tongLuong);
    }
    else (soGioLam > 40) {
        tongLuong = (soGioLam - 40) * 1.5 * tienLuong1h + soGioLam * tienLuong1h;
        console.log(tongLuong)
    }

}

var btn = document.getElementById('btnTinhTien');
btn.onclick = tinhTienLuong;
