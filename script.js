document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Filter/Sort Logic
const brandFilter = document.getElementById('brandFilter');
const priceSort = document.getElementById('priceSort');
const perfumeGrid = document.getElementById('perfumeGrid');

function filterAndSort() {
  let cards = Array.from(perfumeGrid.children);
  const brand = brandFilter.value;
  const sort = priceSort.value;

  if (brand !== 'all') {
    cards = cards.filter(card => card.dataset.brand === brand);
  }

  if (sort !== 'default') {
    cards.sort((a, b) => {
      const priceA = parseInt(a.dataset.price);
      const priceB = parseInt(b.dataset.price);
      return sort === 'asc' ? priceA - priceB : priceB - priceA;
    });
  }

  perfumeGrid.innerHTML = '';
  cards.forEach(card => perfumeGrid.appendChild(card));
}

brandFilter.addEventListener('change', filterAndSort);
priceSort.addEventListener('change', filterAndSort);

