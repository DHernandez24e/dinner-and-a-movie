//  add JSON Web Tokens (JWT), requires npm install jwt-decode
import decode from 'jwt-decode';


//  adding JWT for authentication
class AuthService {
    // token
    getProfile() {
      return decode(this.getToken());
    }
  
    loggedIn() {
      const token = this.getToken();
      return !!token && !this.isTokenExpired(token);
    }
  
    isTokenExpired(token) {
      try {
        const decoded = decode(token);
        if (decoded.exp < Date.now() / 1000) {
          return true;
        } else {
          return false;
        }
      } catch (err) {
        return false;
      }
    }
  
    // retrieve the token from localStorage
    getToken() {
      return localStorage.getItem('id_token');
    }
  
    // set the token to localStorage and reloads the page to the homepage
    login(idToken) {
      localStorage.setItem('id_token', idToken);  
      window.location.assign('/');
    }
  
    // clears the token from the localStorage and forces a logout 
    logout() {
      // clears the token
      localStorage.removeItem('id_token');
      // reload page and resets the state 
      window.location.assign('/');
    }
  }

export default new AuthService();