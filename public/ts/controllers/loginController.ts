namespace inkedin.controllers {

  export class LoginController {
    public artists;
    public artist;

    static $inject = ['artistService', 'loginService', '$state', '$stateParams'];

    constructor(private artistService, private loginService, private $state, private $stateParams) {
      this.artists = this.artistService.getArtists();
    }

    public login() {
      if (this.artist.username && this.artist.password) {
        for (let i = 0; i < this.artists.length; i++) {
          this.artists[i];
          if (this.artist.username === this.artists[i].username && this.artist.password === this.artists[i].password) {
            this.loginService.toggleLogin();
            if (this.loginService.userStatus) {
              this.$state.go('dashboard', { id: this.artists[i]._id });
            }
            break;
          }
        }
      } else {
        alert('Invalid username and / or password.');
      }
    }
  }

}
