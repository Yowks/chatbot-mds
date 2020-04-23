class Switched { // Switch bot on select
  constructor() {
    this.selectedBot = '';
  }

  static setSelectedBot(bot) {
    this.selectedBot = bot;
  }

  static init() {
    switch (this.selectedBot) {
      case 'a226cv':
        break;
      case 'a213dz':
        break;
      case 'a97k47':
        break;

      default:
        break;
    }
  }
}

module.exports = Switched;
