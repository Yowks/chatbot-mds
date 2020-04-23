class Bots {
  constructor() {
    this.bots = '';
  }

  static init() {
    const array = [
      {
        token: 'a226cv',
        name: 'Sport',
        desc: ' MMA, Basket, Football',
        image: 'https://img.aws.la-croix.com/2019/08/02/1201038998/Cinq-sports-redecouvrir_0_729_413.jpg',
        messages: [
          'ici c`est Paris ',
          'Khabib Forever',
          'Lebron MVP',
          'CR7>Messi',
        ],
      },
      {
        token: 'a213dz',
        name: 'Météo',
        desc: 'Quel temps fait-il ?',
        image: 'https://unap-plobsheim.clubeo.com/uploads/unap-plobsheim/news/icone-meteo-22.png',
        messages: [
          'Il faut rester confiné',
        ],
      },
      {
        token: 'a97k47',
        name: 'Art',
        desc: 'Musique, Architecture, Design, Jek`Design ',
        image: 'https://i.pinimg.com/280x280_RS/5a/ef/ab/5aefab86a6a5a685666a6432d60d4240.jpg',
        messages: [
          'Jek Best in the world',
          'Trump tower',
        ],
      },
    ];

    this.bots = array;
  }

  static get() {
    return this.bots;
  }
}

module.exports = Bots;
