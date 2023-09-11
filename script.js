document.addEventListener("DOMContentLoaded", function () {
    const poltronas = document.querySelectorAll(".poltrona");
    const contador = document.getElementById("contador");
    const totalAPagar = document.getElementById("total-a-pagar");
    const btnContinuar = document.getElementById("btn-continuar");
    const btnReset = document.getElementById("btn-reset");

    let poltronasSelecionadas = 0;
    let totalPagar = 0;

    // Função para calcular o total a pagar com base nas poltronas selecionadas
    function calcularTotal() {
        poltronasSelecionadas = 0;
        totalPagar = 0;
        poltronas.forEach((poltrona) => {
            if (poltrona.classList.contains("selecionada")) {
                poltronasSelecionadas++;
                totalPagar += 30; // Cada poltrona selecionada custa a R$30
            }
        });
        contador.textContent = poltronasSelecionadas;
        totalAPagar.textContent = totalPagar.toFixed(2);
    }

    poltronas.forEach((poltrona) => {
        poltrona.addEventListener("click", function () {
            if (poltrona.classList.contains("disponivel")) {
                poltrona.classList.remove("disponivel");
                poltrona.classList.add("selecionada");
            } else if (poltrona.classList.contains("selecionada")) {
                poltrona.classList.remove("selecionada");
                poltrona.classList.add("disponivel");
            }
            calcularTotal();
        });
    });

    // Desabilita o botão "Continuar para o Pagamento" se não houver poltronas selecionadas
    btnContinuar.addEventListener("click", function (event) {
        if (poltronasSelecionadas === 0) {
            event.preventDefault();
            alert("Selecione pelo menos uma poltrona antes de continuar para o pagamento.");
        }
    });

    // Limpar Seleção das poltronas
    btnReset.addEventListener("click", function () {
        poltronas.forEach((poltrona) => {
            if (poltrona.classList.contains("selecionada")) {
                poltrona.classList.remove("selecionada");
                poltrona.classList.add("disponivel");
            }
        });
        calcularTotal();
    });

    calcularTotal();
});
