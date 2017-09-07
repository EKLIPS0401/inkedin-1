namespace inkedin.services {

  export class LoginService {
    public userStatus: boolean;

    constructor() {
      this.userStatus = false;
    }

    public toggleLogin() {
      this.userStatus = !this.userStatus;
    };
  }

  angular.module('inkedin').service('loginService', LoginService);

}
