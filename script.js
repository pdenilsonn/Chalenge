// funcção para codificação
function codificaContent() {
    const codificaVogal = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"

    }

    // pegar o conteúdo do textarea
    let inputText = document.getElementById('inputText').value;
    
    // Substituir cada vogal no texto
    let outputText = inputText.replace(/[aeiou]/g, function (vogal) {
        return codificaVogal[vogal] || vogal;
    });
    
    //Mostrar resultado da codificação
    document.getElementById('outputText').textContent = outputText;
    
    // esconder conteudo e mostrar botão 
    if ( inputText.length > 0) {
        document.getElementById('contentOutput').style.display = 'none';
        document.getElementById('copiButton').style.display = 'inline';
        document.getElementById('clearButton').style.display = 'inline';
    }
   
}

// funcção para descodificação
function decodificaContent() {
    const decodificaVogal = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u"

    }

    // pegar o conteúdo do textarea
    let inputText = document.getElementById('inputText').value;
    

    // Substituir cada vogal no texto
    let outputText = inputText.replace(/ai|enter|imes|ober|ufat/g, function (match) {
        return decodificaVogal[match] || vogal;
       
    });
    
    
    //Mostrar resultado da codificação
    document.getElementById('outputText').textContent = outputText;
    

    // esconder conteudo e mostrar botão 
    if ( inputText.length > 0) {
        document.getElementById('contentOutput').style.display = 'none';
        document.getElementById('copiButton').style.display = 'inline';
        document.getElementById('clearButton').style.display = 'inline';
    }

   
}




/* ocultar imagem e texto | mostrar botão de copiar.
const textarea = document.getElementById('inputText');

textarea.addEventListener('input', function() {
    if (textarea.value.trim() === '') {
        document.getElementById('waitingText').style.display = 'inline';
        document.getElementById('typingText').style.display = 'none';
        
    } else {
        document.getElementById('waitingText').style.display = 'none';
        document.getElementById('typingText').style.display = 'inline';
        
    }
})

function copyText() {
    document.getElementById('outputText').vlaue
} */


// Animação de digitação do textarea.
document.addEventListener("DOMContentLoaded", function () {
    const textarea = this.getElementById("inputText");
    const placeholderText = "Digite seu texto aqui...";
    let index = 0;

    function type() {
        if (index < placeholderText.length) {
            textarea.placeholder += placeholderText[index];
            index++;
            setTimeout(type, 80);
        } else {
            setTimeout(() => {
                textarea.placeholder = "";
                index = 0;
                type();
            }, 900);
        }
    }

    type();

});

// limpoa página
function limpaPagina() {
    location.reload();
}

// copy button
function copyButton() {
    const spanElement = document.getElementById('outputText');
    const textToCopy = spanElement.innerText;
    navigator.clipboard.writeText(textToCopy);
    console.log(textToCopy);

    document.getElementById('inputText').value = '';
}
