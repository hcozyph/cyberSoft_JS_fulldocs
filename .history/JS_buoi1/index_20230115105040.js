            /*
            Các lệnh OUTPUT
            doucument.write: ghi lại nội dung lên html
            alert: hiển thị nội dung lên hộp thoại trên trình duyệt
            */

            document.write("javascript bc43");
            // alert("hello CyberSoft");
            console.log("lỗi đăng nhập thất bại");

            //Khai báo bieesnL đặt tên biến phải có ý nghĩa, tránh trùng 1 số từ khóa
            var thongBao = "lỗi đăng nhập thất bại";

            console.log(thongBao);
            console.log(thongBao);
            console.log(thongBao);
            console.log(thongBao);

            //KIỂU DỮ LIỆU (primative value - giá trị cơ sở  - máy tính đọc cái hiểu liền)
            var luong = 150;
            var soDienThoai = "+84 08989899"; //string
            var hople = true;

            //PHÉP TÍNH SỐ HỌC - TOÁN TỬ - OPERATOR
            var soA = 5;
            var soB = 10;
            var tong = soA + soB;
            var hieu = soA - soB;
            var thuong = soB / soA;
            var soDu = soA % soB;
            console.log(tong);
            console.log(hieu);
            console.log(thuong);
            console.log(soDu);

            console.log(10 + 10);
            console.log("10" + "10");
            console.log("10" * "10");
            // Number('chuoi'): Ép kiểu từ chuỗi sang số, NaN xảy ra khi ép k phải số
            var tong = Number(soA) + Number(soB);

            //Bài tập 1: tính trung bình và in ra màn hình
            var diemToan = 10;
            var diemLy = 8;
            var diemHoa = 9;

            var diemTB = (diemToan + diemLy + diemHoa) / Number(3);

            console.log("Điểm Trung Bình là", diemTB);

            //Bài tập 2: tính chiều dài cạnh huyền của tam giác vuông
            //input
            var canhGV1 = 3;
            var canhGV2 = 4;
            //output: cạnh huyền?
            // Tính căn bậc 2: Math.sqrt(giá_trị), Math.pow(giatri, soMũ)
            var canhHuyen = Math.sqrt(
                Math.pow(canhGV1, 2) + Math.pow(canhGV2, 2)
            );
            console.log("Chiều dài cạnh huyền là", canhHuyen);
            console.log("Chiều dài cạnh huyền là", canhHuyen);

            //Bài tập 3:
            //Chương trình tính số lương trên số giờ làm viêc / tháng
            //Biết rằng số giờ làm việc trong 1 tháng là 150 giờ, 1 giờ làm 20 đô.
            //Tính lương?

            /*
            Mô hình 3 khối:

            input: số giờ làm việc trong 1 tháng
            output: tính số lương
            */
            //input
            var soGioLam = 150;
            var tienCong1H = 20;

            //output
            var tienLuong = 0;

            tienLuonG = soGioLam * tienCong1H;
            console.log("Tiền lương 1 tháng là", tienLuong);

            /*TOÁN TỬ NÂNG CAO*/
            //phép tiền tố, hậu tố
            var soHang = 1;
            soHang = soHang + 1;
            console.log(++soHang); //tiền tố: thực hiện tố trước lệnh sau
            console.log(soHang++); //hậu tố: thực hiện lệnh trước tố sau

            soHang2 = 10;
            soHang2 -= 5; //=> 5

            //Bài 4: Chuyển tiền USD sang VND
            //input:number
            var priceUSD = 987;
            const tigia = 23000;

            //output
            var priceVND = priceUSD * tigia;
            console.log("Số tiền VND là", priceVND.toLocaleString());
