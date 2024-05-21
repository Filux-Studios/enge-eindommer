// Funksjon for å vise spesifikke sider
function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.style.display = 'none';
  });
  document.getElementById(pageId).style.display = 'block';
}

// Dummy data for eiendommer
const properties = [
  { title: 'Vakker Villa', price: '2 500 000 NOK', location: 'Oslo' },
  { title: 'Sentral Leilighet', price: '1 500 000 NOK', location: 'Bergen' },
  { title: 'Landlig Hus', price: '3 000 000 NOK', location: 'Trondheim' }
];

// Funksjon for å vise eiendomsannonser
function showProperties() {
  const propertiesContainer = document.getElementById('properties');
  propertiesContainer.innerHTML = '';

  properties.forEach(property => {
    const propertyElement = document.createElement('div');
    propertyElement.classList.add('property');
    propertyElement.innerHTML = `
      <h2>${property.title}</h2>
      <p>Pris: ${property.price}</p>
      <p>Beliggenhet: ${property.location}</p>
    `;
    propertiesContainer.appendChild(propertyElement);
  });
}

// Vis eiendomsannonser ved lasting av siden
document.addEventListener('DOMContentLoaded', showProperties);
