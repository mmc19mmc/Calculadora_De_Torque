function calcularValorNominal() {
    const limiteInferior = parseFloat(document.getElementById('limiteInferior').value);
    const limiteSuperior = parseFloat(document.getElementById('limiteSuperior').value);

    if (isNaN(limiteInferior) || isNaN(limiteSuperior)) {
        alert("Por favor, insira valores válidos para os limites.");
        return;
    }

    const valorNominal = (limiteInferior + limiteSuperior) / 2;
    document.getElementById('resultadoNominal').innerText = `Valor Nominal: ${valorNominal.toFixed(2)} Nm`;
}

function calcularLimitesTorque() {
    const valorNominal = parseFloat(document.getElementById('valorNominal').value);
    const toleranciaPercentual = parseFloat(document.getElementById('toleranciaPercentual').value);

    if (isNaN(valorNominal) || isNaN(toleranciaPercentual)) {
        alert("Por favor, insira valores válidos para o valor nominal e a tolerância.");
        return;
    }

    const tolerancia = valorNominal * (toleranciaPercentual / 100);
    const limiteInferior = valorNominal - tolerancia;
    const limiteSuperior = valorNominal + tolerancia;

    document.getElementById('resultadoLimites').innerText = `Limite Inferior: ${limiteInferior.toFixed(2)} Nm, Limite Superior: ${limiteSuperior.toFixed(2)} Nm`;
}
