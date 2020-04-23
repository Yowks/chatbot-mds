import './index.scss';
import io from 'socket.io-client';

const socket = io('http://localhost:8000/');


socket.on('connection', () => {
});

const Bots = require('./model/Bots');
const Switched = require('./model/Switched');

Bots.init();
const bots = Bots.get();

// Get BotList
for (let i = 0; i < bots.length; i += 1) {
  const elem = document.querySelector('#bot_list');
  elem.innerHTML += `<div class="bot_list border-bottom"><a href=""><div class="bot_info"><div class="bot_img float-left"> <img src="${bots[i].image}" alt="Icon du bot"> </div><div class="bot_text float-left"><h6 class="text-color">${bots[i].name}<span class="bot_number float-right">${i + 1}</span></h6><p class="text-black-50">${bots[i].desc}</p></div></div></a></div>`;
}


// Get Welcome Message
const botselected = bots[0];
const welcomeMessage = botselected.messages;
const randomWelcomeMessage = welcomeMessage[Math.floor(Math.random() * welcomeMessage.length)];
const elem = document.querySelector('.msg_history');
elem.innerHTML += `<div class="incoming_msg"> <div class="incoming_msg_img d-inline-block"> <img src="${botselected.image}" alt="Icon du bot"> </div><div class="ml-2 received_msg d-inline-block bg-light rounded border"> <div class="received_withd_msg"> <p>${randomWelcomeMessage}</p><span class="time_date">${new Date().toLocaleString()}</span> </div></div></div>`;

Switched.setSelectedBot(botselected.token);
Switched.init();
