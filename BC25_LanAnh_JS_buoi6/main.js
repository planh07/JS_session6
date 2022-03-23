
// bai 1
const soNguyennhonhat = () => {
    let sum = 0;
    let number = 0;
    while (sum < 10000) {
        number++;
        sum += number;
    }
    return number;
};

const result1 = document.getElementById("result1");
document.getElementById("btnClickhere").addEventListener("click", function () {
    let result = soNguyennhonhat();
    result1.innerHTML = `Số nguyên dương nhỏ nhất là : ${result}`;
});

// bài 2 
var tinhTong;
document.getElementById("btnCal").onclick = function () {
    var x = document.getElementById("txtX").value;
    var n = document.getElementById("txtN").value;
    tinhTong = 0;
    tinh1(x, n,);
    document.getElementById("result").innerHTML = tinhTong
}
function tinh1(x, n) {
    for (var i = 1; i <= n; i++) {
        tinhTong += Math.pow(x, i);
        ;
    }
};

// bài 3 
const result_3 = document.getElementById("result-3");
const tinhGiaiThua = (number) => {
    let tich = 1;
    for (let i = 1; i <= number; i++) {
        tich *= i;
    }
    return tich;
};
document.getElementById("btnClick").addEventListener("click", function () {
    let number = +document.getElementById("txtNumber").value;
    let sum = tinhGiaiThua(number);

    result_3.innerText = sum;
});

// bài 4 
const result_4 = document.getElementById("result-4");
document.getElementById("btnCreatediv").onclick = function () {
    for (var i = 1; i <= 10; i++) {
        var btn = document.createElement("div");

        i % 2 === 0
            ? (result_4.innerHTML = `${result_4.innerHTML}<div style="background: #d3a19b;">Thẻ div chẵn ${i}</div>`)
            : (result_4.innerHTML = `${result_4.innerHTML}<div style="background: #daecff; text-align : right">Thẻ div lẻ ${i}</div>`);
    }
    document.getElementById("create10div").appendChild(btn);
}