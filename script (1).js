
const novaTarefa = document.querySelector("#input_id");
const botaoAdd = document.getElementById("botao_add_id");
const formulario = document.getElementById("form_id");
const listaDeTarefas = document.getElementById("lista_id");
const botaoMarca = document.getElementById("botao_marca_id"); 
const botaoLimpa = document.getElementById("botao_limpa_id");


botaoAdd.addEventListener("click"), (event) =>  {
    event.preventDefault();
    
    const elementolista = document.createElement("li");
    const textoTarefa = document.createElement("p");
    const iconeDeleta = document.createElement("span");
    
    textoTarefa.innerText = novaTarefa.value;
    iconeDeleta.innerText = " 🗑️ ";

    if (textoTarefa.innerText.trim() === "") {
        alert("Você precisa digitar alguma coisa!");
    }else {

        listaDeTarefas.appendChild(elementolista);
        elementolista.appendChild(textoTarefa);
        elementolista.appendChild(iconeDeleta);
        formulario.request();
    }
    novaTarefa.focus();

    textoTarefa.addEventListener("click",()=> {

    textoTarefa.classList.toggle("checked");
    verificarMarcados(); 
});

iconeDeleta.addEventListener("click", () => {

    elementolista.remove();
});
verificarMarcados(); 
};

botaoMarca.addEventListener("click", () => {
    let todasAsTarefas = document.querySelectorAll("p");

    if (botaoMarca.innerText==="Marcar todos") {
        todasAsTarefas.forEach((tarefa)=> {
            tarefa.classList.add("cheked");
        });
    botaoMarca.innerText = "Desmarcar todos";
    } else {
        todasAsTarefas.forEach((tarefa) => {
            tarefa.classList.remove("cheked");
        })
        botaoMarca.innerText = "Marcar todos";
    }
});

botaoLimpa.addEventListener("click", () => {
    listaDeTarefas.innerHTML = "";
});

function verificarMarcados() {
    let todasAsTarefas = document.querySelectorAll("p")
    let verificacao = [];

    todasAsTarefas.forEach((tarefa) => {
        if (!tarefa.classList.contains("cheked")) {
            verificacao.push(tarefa);
        }
    })

    if (verificacao.length === 0 && todasAsTarefas) {
        botaoMarca.innerText = "Desmarcar todos";
    }else{
        botaoMarca.innerText = "marcar todos"
     }
    }