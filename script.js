const Amount = document.getElementById('Amount');
const bill = document.getElementById('bill');
const generateBill = () => {
    let billAmount = Amount.value;
    let discount = 0;
    if (billAmount >= 1000) {
        discount = billAmount * 20 / 100;
    } else if (billAmount >= 500) {
        discount = billAmount * 15 / 100;
    } else if (billAmount >= 200) {
        discount = billAmount * 10 / 100;
    } else if (billAmount >= 100) {
        discount = billAmount * 5 / 100;
    }
    else {
        discount = 0;
    }
    let totalBill = billAmount - discount;
    document.getElementById("bill").innerHTML = totalBill;
}