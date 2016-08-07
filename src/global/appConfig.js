/**
* This service stores and retrieves user preferences in session storage
*/
class AppConfig {
  constructor() {
    this.sort = '+date';
    this.emailAddress = undefined;
    this.restDelay = 100;
    this.load();
  }

  load () {
    try {
      Object.assign(this, {
        ...JSON.parse(sessionStorage.getItem('appConfig'))
      });
    } catch (Error) { console.log(error); }
  }

  save () {
    sessionStorage.setItem('appConfig', JSON.stringify({ ...this }));
  }
}

let instance = new AppConfig();
export default instance;