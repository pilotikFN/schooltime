let current_data = 0
let days = ['пн','вт','ср','чт','пт','сб','вс']

let logo = document.querySelector('.logo')

// Dialog
let dialog_title = document.querySelector('#dialog_title')
let dialog_text = document.querySelector('#dialog_text')
let dialog = document.querySelector('.dialog')
let dialog_input = document.querySelector('.dialog_input')
let dialog_ok_btn = document.querySelector('#dialog_ok_btn')
let dialog_close_btn = document.querySelector('#dialog_close_btn')
let dialog_button = document.querySelector('.dialog_button');
let glob_action = ''

function new_dialog (ok_btn, close_btn, title, text, input, action) {
  if (input == 'hide') {
    dialog_input.style.display = 'none';
  }
  else {
    dialog_input.style.display = 'block';
  }
  dialog_ok_btn.textContent = ok_btn;
  dialog_close_btn.textContent = close_btn;
  console.log(title)

  dialog_title.textContent = title;
  dialog_text.textContent = text;

  glob_action = action

  dialog.style.display = 'block';
}


// меню
let menu = document.querySelector('.menu');
let menu_btn = document.querySelector('.menu_btn');

let menu_state = false;

menu_btn.addEventListener('click', function () {
  if (menu_state == false) {
    menu_state = true;
    menu.style.transform = 'translateY(0)';
  }
  else {
    menu_state = false;
    menu.style.transform = 'translateY(-100%)';
  }
});

// menu buttons
let m_down = document.querySelector('#m_down');
let m_news = document.querySelector('#m_news');
let m_hw = document.querySelector('#m_hw');
let m_raspis = document.querySelector('#m_raspis');

m_down.addEventListener('click', function () {
  window.open('index.html', '_self');
});

m_news.addEventListener('click', function () {
window.open('news', '_self');
});

m_raspis.addEventListener('click', function () {
window.open('shedule', '_self');
});

m_hw.addEventListener('click', function () {
window.open('hw', '_self');
});

// egg
let Mammott = document.querySelector("#Mammott");
Mammott.addEventListener('click', function(){
	var audio = new Audio('01-B_Monster_02.wav');
	audio.play();
});