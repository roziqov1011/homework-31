function add(){
    var elage = document.getElementById('age').value;
    var elCheck = document.getElementById('check');
    if (elCheck.checked){
        document.getElementById('endage').textContent = "siz karupsiya orqali kirdingiz !!!";
    }
    else if (elage >= 189){
        document.getElementById('endage').textContent = "siz tanka surgansiz max balldan oshib ketti😎";
    }
    else if (elage >= 120){
        document.getElementById('endage').textContent = "siz bujet asosida o'qishga qabul qilindingiz";
    }
    else if (elage >= 80){
        document.getElementById('endage').textContent = "siz kantrakt asosida o'qishga qabul qilindingiz";
    }
    else if (elage >= 56){
        document.getElementById('endage').textContent = "siz super kantrakt asosida o'qishga qabul qilindingiz";
    }
    else if (elage < 56){
        document.getElementById('endage').textContent = "siz oqishga kira olmadingiz";
    }
}