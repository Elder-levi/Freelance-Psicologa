function IrProZap() {
    const numero = "557192242424";
    const mensagem = "Olá, gostaria de agendar uma consulta.";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}

// Modal for relatos text
const modal = document.getElementById('relato-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');

// Assuming relatos data, for now placeholder
const relatos = [
    { id: 1, title: 'Superando a ansiedade', text: 'Texto completo do relato sobre ansiedade...' },
    { id: 2, title: 'Encontrando motivação', text: 'Texto completo do relato sobre motivação...' },
    // Add more as needed
];

document.querySelectorAll('.relato-card img').forEach(img => {
    img.addEventListener('click', (e) => {
        const src = e.target.src;
        document.getElementById('modal-image').src = src;
        document.getElementById('image-modal').showModal();
    });
});

document.getElementById('image-modal-close').addEventListener('click', () => {
    document.getElementById('image-modal').close();
});

// Close modal when clicking outside
document.getElementById('image-modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('image-modal')) {
        document.getElementById('image-modal').close();
    }
});