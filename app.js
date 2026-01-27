function IrProZap() {
    const numero = "557192242424";
    const mensagem = "Olá, gostaria de agendar uma consulta.";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}