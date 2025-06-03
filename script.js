document.getElementById('cadastroForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const formData = {
      nome: this.nome.value,
      telefone: this.telefone.value,
      cpf: this.cpf.value,
      cep: this.cep.value,
      rua: this.rua.value,
      numero: this.numero.value,
      bairro: this.bairro.value,
      cidade: this.cidade.value,
      estado: this.estado.value
    };
  
    console.log("Cadastro recebido:", formData);
    alert("Cadastro realizado com sucesso! Obrigado por se cadastrar 😊");
    this.reset();
  });