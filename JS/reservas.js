document.addEventListener('DOMContentLoaded', function() {
 fetch('http://localhost:3000/reservas')
     .then(response => {
         if (!response.ok) {
             throw new Error('Network response was not ok');
         }
         return response.json();
     })
     .then(data => {
         const tableBody = document.getElementById('reservasTableBody');
         data.forEach(reserva => {
             const row = document.createElement('tr');
             
             row.innerHTML = `
                 <td>${reserva.id}</td>
                 <td>${reserva.nome}</td>
                 <td>${reserva.email}</td>
                 <td>${reserva.dataEntrada}</td>
                 <td>${reserva.dataSaida}</td>
                 <td>${reserva.adulto}</td>
                 <td>${reserva.crianca}</td>
                 <td>${reserva.observacoes}</td>
             `;
             
             tableBody.appendChild(row);
         });
     })
     .catch(error => {
         console.error('Error fetching reservas:', error);
         alert('Houve um erro ao buscar as reservas.');
     });
});
