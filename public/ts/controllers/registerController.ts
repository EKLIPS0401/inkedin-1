namespace inkedin.controllers {

  export class RegisterController {
    public artist;

    static $inject = ['artistService', '$state', '$stateParams'];

    constructor(private artistService, private $state, private $stateParams) {}

    public createUser() {
      if (this.artist.password === this.artist.verifyPassword) {
        let newArtist = {
          firstName: this.artist.firstName,
          lastName: this.artist.lastName,
          email: this.artist.email,
          username: this.artist.username,
          password: this.artist.password
        };

        this.artistService.saveArtist(newArtist).then(() => {
          this.resetUserData();
          this.$state.go('login');
        }).catch(() => {
          alert('Oops! Your account could not be created. Try again later!');
        });
      } else {
        alert('Passwords do not match.');
      }
    }

    public resetUserData() {
      this.artist.firstName = '';
      this.artist.lastName = '';
      this.artist.email = '';
      this.artist.username = '';
      this.artist.password = '';
      this.artist.verifyPassword = '';
    }
  }

}
