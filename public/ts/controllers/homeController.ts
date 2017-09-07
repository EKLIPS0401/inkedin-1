namespace inkedin.controllers {

  export class HomeController {
    static $inject = ['$state'];

    constructor(private $state) {}

    public goRegister() {
      this.$state.go('register');
    }

    public goLogin() {
      this.$state.go('login');
    }

    public displayGallery() {
      this.$state.go('gallery');
    }
  }

}
