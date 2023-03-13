let dateAniver = new Date(new Date().getFullYear(), 3, 2);

if (dateAniver.getTime() - Date.now() < 0) {
  dateAniver = new Date(new Date().getFullYear + 1, 3, 2);
}

function currentDate() {
  const now = new Date();
  let day = now.getDate();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();
  day = day < 10 ? '0' + day : day;
  month = month < 10 ? '0' + month : month;
  return `${day}/${month}/${year}`;
}

document.getElementById("data-atual").innerHTML = currentDate();

const timeCountdown = setInterval(() => {
  const timeLeft = dateAniver.getTime() - Date.now();

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("contagem-regressiva")
    .innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  nextAge = new Date().getFullYear() - new Date(1997, 3, 2).getFullYear();

  document.getElementById("proxima-idade").innerHTML = `${nextAge}`;

}, 1000)

