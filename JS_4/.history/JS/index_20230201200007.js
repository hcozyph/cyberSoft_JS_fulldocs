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
console.log ('và', bieuThucA&&bieuThucB) //true
