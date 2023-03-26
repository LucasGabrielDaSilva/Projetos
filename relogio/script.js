//* CODIGO PARA COLOCAR O PONTEIRO PARA GIRAR NO HORARIO CORRETO
function setClock() {
    const hourHand = document.querySelector('.hour');
    const minuteHand = document.querySelector('.minute');
    const secondHand = document.querySelector('.second');
  
    const date = new Date();
    const hours = date.getHours() % 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
  
    const hourRotation = (hours * 30) + (0.5 * minutes);
    const minuteRotation = (minutes * 6) + (0.1 * seconds);
    const secondRotation = seconds * 6;
  
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
  
    requestAnimationFrame(setClock);
  }
  
  setClock();

  //* CODIGO ABAIXO É PRA CRIAR BOTÃO PARA ALTERAR O MODO DE ESTILO DA PAGINA 

    const toggleThemeButton = document.querySelector('.modo-cor');
    const body = document.body;

    toggleThemeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
