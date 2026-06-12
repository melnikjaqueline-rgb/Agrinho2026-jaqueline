// Aguarda o carregamento do documento
document.addEventListener('DOMContentLoaded', () => {
    
    // Ação do botão "Saiba Mais"
    const btnConhecer = document.getElementById('btn-conhecer');
    const secaoPilares = document.getElementById('pilares');

    btnConhecer.addEventListener('click', () => {
        secaoPilares.scrollIntoView({ behavior: 'smooth' });
    });

    // Interceptação do Formulário de Contato
    const form = document.getElementById('form-contato');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede a página de recarregar
        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        
        // Mensagem de sucesso para o usuário
        alert(`Obrigado pelo interesse, ${nome}! Juntos vamos construir um futuro mais sustentável. Enviaremos novidades para o e-mail: ${email}.`);
        
        // Limpa o formulário
        form.reset();
    });
});