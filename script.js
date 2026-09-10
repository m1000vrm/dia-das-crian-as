
(function(){
  const target = new Date('2026-10-12T00:00:00-03:00');
  const el = document.getElementById('countdownText');
  function update(){
    const now = new Date();
    const diff = target - now;
    if(diff <= 0){
      el.textContent = 'hoje é dia de brincar!';
      return;
    }
    const days = Math.ceil(diff / 86400000);
    el.textContent = days === 1 ? 'falta 1 dia' : `faltam ${days} dias`;
  }
  update();
  setInterval(update, 3600000);
})();
