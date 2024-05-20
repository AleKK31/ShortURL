function encurtar() {
    // Validar o link
    let url = document.getElementById("input-url").value;

    if (!url) {
        alert("URL não encontrada!");
        return;
    }

    // Encurtar o link
    // Headers
    let headers = {
        "Content-Type": "application/json",
        "apiKey": "f71415edb8944f2e9aa641cb5c802f1a"
    };
    
    // Dados
    let linkRequest = {
        destination: url,
        domain: { fullName: "rebrand.ly" }
    };

    fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(linkRequest)
    })
    .then(response => response.json())
    .then(json => {
        console.log(json);
        let inputUrl = document.getElementById("input-url");
        inputUrl.value = json.shortUrl;
    })
    .catch(error => console.error('Erro:', error));
}

function copiar() {
    let inputUrl = document.getElementById("input-url");

    inputUrl.select();
    inputUrl.setSelectionRange(0, 99999); // Para dispositivos móveis

    navigator.clipboard.writeText(inputUrl.value).then(() => {
        alert("URL copiada!");
    }).catch(err => {
        console.error('Erro ao copiar a URL:', err);
    });
}
