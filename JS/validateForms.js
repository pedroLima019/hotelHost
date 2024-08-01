document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('postForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Previne o comportamento padrão do formulário

      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const dataEntrada = document.getElementById('dataEntrada').value;
      const dataSaida = document.getElementById('dataSaida').value;
      const adulto = document.getElementById('adulto').value;
      const crianca = document.getElementById('crianca').value;
      const observacoes = document.getElementById('observacoes').value;

      const formData = {
          nome: nome,
          email: email,
          dataEntrada: dataEntrada,
          dataSaida: dataSaida,
          adulto: adulto,
          crianca: crianca,
          observacoes: observacoes
      };

      fetch('http://localhost:3000/reservas', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          console.log('Success:', data);
          alert('Reserva enviada com sucesso!');
      })
      .catch(error => {
          console.error('Error:', error);
          alert('Houve um erro ao enviar a reserva.');
      });
  });
});
