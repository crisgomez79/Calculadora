const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const action = btn.dataset.action;
    const value  = btn.textContent;

    if (action === 'clear') {
      display.value = '';
    } else if (action === 'delete') {
      display.value = display.value.slice(0, -1);
    } else if (action === 'decimal') {
      if (!display.value.includes('.')) display.value += '.';
    } else if (action === 'equals') {
      // Atención: eval tiene riesgos, podrías implementar un parser más seguro
      try {
        display.value = eval(display.value) ?? '';
      } catch {
        display.value = 'Error';
      }
    } else if (action === 'operator') {
      display.value += value;
    } else {
      // números
      display.value += value;
    }
  });
});