function validar()
{
    var valor = document.getElementById("numero").value;

    if (valor.length > 2) {
        alert('Você digitou mais do que dois algarísmo. Inválido!!');
        return false;
    }else {
        return true;
    }
}