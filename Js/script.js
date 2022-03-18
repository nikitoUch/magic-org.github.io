var Uname = prompt("Как тебя зовут?", "Никак");
if (Uname == null) {
    window.alert("Регистрация не удалась попробуйте снова");
}
else {
    document.write("<p class=text>Привет"+ " " + Uname +"</p>");
}

function dowland() {
    var text = document.getElementById('text');
    text.textContent = "50%";
}