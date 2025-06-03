document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cadastroForm');
    const cepInput = form.querySelector('input[name="cep"]');

    cepInput.addEventListener('blur', function () {
        const cep = cepInput.value.replace(/\D/g, '');

        if (cep.length !== 8) {
            alert('CEP inválido. Deve conter 8 dígitos.');
            return;
        }

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (data.erro) {
                    alert('CEP não encontrado.');
                } else {
                    form.querySelector('input[name="rua"]').value = data.logradouro || '';
                    form.querySelector('input[name="bairro"]').value = data.bairro || '';
                    form.querySelector('input[name="cidade"]').value = data.localidade || '';
                    form.querySelector('input[name="estado"]').value = data.uf || '';
                }
            })
            .catch(error => {
                console.error('Erro ao buscar o CEP:', error);
                alert('Erro ao buscar o CEP. Tente novamente.');
            });
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        // Aqui você pode adicionar mais validações ou enviar os dados para o servidor
        alert('Formulário enviado com sucesso!');
    });
});
