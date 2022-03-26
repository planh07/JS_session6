// bài 5 
const isPrime = (n) => {
    let flag = 1;
  
    if (n < 2) return (flag = 0);
    for (let j = 2; j < n; j++) {
      if (n % j === 0) {
        flag = 0;
        break;
      }
    }
    return flag;
  };
  const result = document.getElementById("result");
  
  document.getElementById("btnInSoNguyenTo").onclick = () => {
    let soNguyenToList = [];
    result.innerHTML = "";
    let number = +document.getElementById("number").value;
    for (let i = 1; i <= number; i++) {
      soNguyenToList.push(i);
    }
    if (number < 2) {
      result.innerHTML = `Không có số nguyên tố nào =_= ! `;
    } else {
      for (let j = 0; j < soNguyenToList.length; j++) {
        if (isPrime(soNguyenToList[j]) == 1)
          result.innerHTML = `${result.innerHTML} ${soNguyenToList[j]}`;
      }
    }
  };
  