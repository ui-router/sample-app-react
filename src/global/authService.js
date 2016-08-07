import AppConfig from './appConfig';
/**
 * This service emulates an Authentication Service.
 */
class AuthService {
  constructor() {
    this.usernames = ['myself@angular.dev', 'devgal@angular.dev', 'devguy@angular.dev'];
  }

  isAuthenticated () {
    return !!AppConfig.emailAddress;
  }

  /**
  * Fake authentication function that returns a promise that is either resolved or rejected.
  *
  * Given a username and password, checks that the username matches one of the known
  * usernames (this.usernames), and that the password matches 'password'.
  *
  * Delays 800ms to simulate an async REST API delay.
  */
  authenticate (username, password) {
    // checks if the username is one of the known usernames, and the password is 'password'
    const checkCredentials = () => new Promise((resolve, reject) => {
      var validUsername = this.usernames.indexOf(username) !== -1;
      var validPassword = password === 'password';
      setTimeout(() => {
        if (validUsername && validPassword) resolve(username)
        else reject("Invalid username or password");
      }, 800);
    });

    return checkCredentials()
      .then((authenticatedUser) => {
        AppConfig.emailAddress = authenticatedUser;
        AppConfig.save();
      });
  }

  /** Logs the current user out */
  logout () {
    AppConfig.emailAddress = undefined;
    AppConfig.save();
  }
}

let instance = new AuthService();
export default instance;