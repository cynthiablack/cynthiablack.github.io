document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('yellow').onclick = partyYellow


function partyPurple() {
  document.querySelector('img').style.backgroundColor = 'rgb(241,63,247)'
  document.querySelector('img').style.color = 'white'
}

function partyGreen() {
  document.querySelector('img').style.backgroundColor = 'rgb(0,253,81)'
  document.querySelector('img').style.color = 'white'
}

function partyBlue() {
  document.querySelector('img').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('img').style.color = 'white'
}

function partyYellow() {
  document.querySelector('img').style.backgroundColor = 'rgba(208,255,0)'
  document.querySelector('img').style.color = 'white'
}
