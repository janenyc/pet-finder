document.addEventListener('DOMContentLoaded', () => {
    
    fetch('http://localhost:3000/api/v1/pets')
        .then(response => response.json())
        .then(data => {
            const div = document.getElementById('div'); 
            div.innerHTML = '<ul>' + data.map(pet => `<li>${pet.name}</li>`).join('') + '</ul>';
        })
        
        .catch(error => console.error('Error:', error));
});