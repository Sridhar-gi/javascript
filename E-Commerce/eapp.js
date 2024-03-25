let pname = document.getElementById("name")
let qty = document.getElementById("qty")
let rate = document.getElementById('rates')
let amount = document.getElementById("amount");
let tbody = document.getElementById("tbody");

let print = () => {
    let file = document.getElementById("img").files[0];
    let r = new FileReader();
    r.readAsDataURL(file);
    r.onloadend = function () {
        document.getElementById("img1").src = r.result;
    };

    tbody.innerHTML += `<tr>
    <td>${pname.value}</td>
    <td><img id="img1" src = ${r.result} height="50px" width="50px"/></td>
    <td>${qty.value}</td>
    <td>${rate.value}</td>
    <td>${amount.value}</td>
    </tr>`;

    pname.value="";
    qty.value="";
    rate.value="";
    amount.value="";
    img.value="";


}

let total = () => {
    amount.value = parseInt(qty.value) * parseInt(rate.value);
}

let Input = document.getElementById("rates");
Input.addEventListener("input", total);