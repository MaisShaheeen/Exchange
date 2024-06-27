var exchangeform = document.querySelector(".exchangeform");
var data = ""; 

exchangeform.onsubmit = function(e){
    e.preventDefault(); 
    var elements = e.target.elements;

    if (elements[1].value === "dollar") {
        data = "Amount in dollar = " + elements[0].value * 3.5;
    }
    else if (elements[1].value === "dinar") {
        data = "Amount in dinar = " + elements[0].value * 5;
    }
    else {
        data = "Amount in nis = " + elements[0].value;
    }

    document.querySelector(".result").textContent = data;
}
