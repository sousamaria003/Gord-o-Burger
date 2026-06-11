// Cardápio data
const burgers = [
  { name: "O Gigante da Casa", tag: "O Carro-Chefe", desc: "Triplo bife, bacon crocante, onion rings, cheddar e barbecue defumado.", price: "R$ 48", img: "O gigante da casa.png", featured: true },
  { name: "Gordão Salada", tag: "Clássico", desc: "Bife, queijo, alface, tomate, cebola roxa e maionese caseira.", price: "R$ 28", img: "Gordão Salada.png" },
  { name: "Bruto do Gordão", tag: "Pra Encher o bucho", desc: "Pão brioche, dois bifões suculentos, cheddar derretido e o molho secreto da casa.", price: "R$ 34", img: "Bruto do Gordão.png" },
  { name: "Gran-Gordão", tag: "Reforçado", desc: "Bife duplo, queijo prato, bacon, alface e maionese da casa no pão brioche.", price: "R$ 36", img: "Gran-Gordão.png" },
  { name: "Gordão Sinistro", tag: "Picante", desc: "Bife, jalapeños, geleia de pimenta e cheddar. Pra quem aguenta o calor.", price: "R$ 32", img: "Gordão Sinistro.png" },
];

function renderCard(b, featured = false) {
  return `
    <article class="burger-card${featured ? ' featured' : ''}">
      <div class="burger-image">
        <img src="${b.img}" alt="${b.name}" loading="lazy" />
        <span class="burger-tag">${b.tag}</span>
      </div>
      <div class="burger-body">
        <div>
          <h3>${b.name}</h3>
          <p>${b.desc}</p>
        </div>
        <div class="burger-price">${b.price}</div>
      </div>
    </article>
  `;
}

document.getElementById('burgerGrid').innerHTML = burgers.map((b, i) => renderCard(b, i === 0)).join('');
document.getElementById('dogGrid').innerHTML = dogs.map(d => renderCard(d)).join('');

document.getElementById('navToggle').addEventListener('click', () => {
  document.getElementById('navMobile').classList.toggle('open');
});
document.querySelectorAll('.nav-mobile a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('navMobile').classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();
