document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('service').value = link.dataset.service;
  });
});
const form = document.getElementById('quote-form');
const result = document.getElementById('form-result');
form.addEventListener('input', () => { result.hidden = true; });
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  result.replaceChildren();
  const title = document.createElement('strong');
  title.textContent = 'Looking fresh! Your demo request is ready.';
  const summary = document.createElement('p');
  summary.textContent = `${data.get('service')} · ${data.get('size')} · ${data.get('frequency')} · Area: ${data.get('postcode')}`;
  const note = document.createElement('p');
  note.textContent = 'Nothing was sent or saved. A real business would review these details and contact you with a quote once the form is connected.';
  result.append(title, summary, note);
  result.hidden = false;
});
