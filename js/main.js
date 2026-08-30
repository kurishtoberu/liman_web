const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const menuPanel = document.querySelector('[data-menu-panel]');
const menuClose = document.querySelector('[data-menu-close]');
const whatsappNumber = '628561185179';
const projectWhatsappNumbers = {
  'Tira Hill Living': '628561185179',
  'Kutilang Living': '6281357530388'
};

function setHeaderState(){
  if(!header) return;
  header.classList.toggle('scrolled', window.scrollY > 70);
}
window.addEventListener('scroll', setHeaderState, { passive: true });
setHeaderState();

function openMenu(){
  menuPanel?.classList.add('open');
  menuPanel?.setAttribute('aria-hidden', 'false');
}
function closeMenu(){
  menuPanel?.classList.remove('open');
  menuPanel?.setAttribute('aria-hidden', 'true');
}
menuToggle?.addEventListener('click', openMenu);
menuClose?.addEventListener('click', closeMenu);
menuPanel?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
window.addEventListener('keydown', event => { if(event.key === 'Escape') closeMenu(); });

const inquiryForm = document.querySelector('[data-inquiry-form]');
inquiryForm?.addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(inquiryForm);
  const name = String(form.get('name') || '').trim();
  const phone = String(form.get('phone') || '').trim();
  const project = String(form.get('project') || 'Tira Hill Living').trim();
  const intent = String(form.get('intent') || 'Minta pricelist').trim();
  const message = String(form.get('message') || 'Saya ingin minta info unit, pricelist, dan jadwal survey.').trim();
  const text = [
    `Halo Liman, saya ingin bertanya tentang ${project}.`,
    name ? `Nama: ${name}` : '',
    phone ? `Nomor WhatsApp: ${phone}` : '',
    `Kebutuhan: ${intent}`,
    `Pesan: ${message}`
  ].filter(Boolean).join('\n');
  const targetNumber = projectWhatsappNumbers[project] || whatsappNumber;
  window.open(`https://wa.me/${targetNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
});
