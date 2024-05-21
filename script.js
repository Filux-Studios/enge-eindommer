// Dummy data for eiendommer
const properties = [
  { type: 'house', name: 'Vakker Villa', price: 2500000 },
  { type: 'apartment', name: 'Sentral Leilighet', price: 1500000 },
  // Legg til flere eiendommer etter behov
];

// Funksjon for å vise eiendommer basert på valgt type
function showProperties(type) {
  const propertiesContainer = document.getElementById('properties');
  propertiesContainer.innerHTML = '';

  properties.filter(property => type === 'all' || property.type === type)
            .forEach(property => {
              const propertyElement = document.createElement('div');
              propertyElement.classList.add('property');
              propertyElement.innerHTML = `<h2>${property.name}</h2><p>Pris: ${property.price}</p>`;
              propertiesContainer.appendChild(propertyElement);
            });
}

// Hent select-elementet
const propertyTypeSelect = document.getElementById('property-type');

// Lytt etter endringer i select-elementet
propertyTypeSelect.addEventListener('change', () => {
  showProperties(propertyTypeSelect.value);
});

// Vis alle eiendommer ved lasting av siden
showProperties('all');
