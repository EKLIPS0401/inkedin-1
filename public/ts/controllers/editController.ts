namespace inkedin.controllers {

  export class EditController {
    public artist;

    static $inject = ['artistService', 'loginService', '$state', '$stateParams'];

    constructor(private artistService, private loginService, private $state, private $stateParams) {
      let artistId = this.$stateParams['id'];
      this.artist = this.artistService.getArtistById(artistId);
    }

    public viewDashboard() {
      this.$state.go('dashboard', { id: this.$stateParams['id'] });
    }

    public updateProfile() {
      this.artistService.updateArtist(this.$stateParams['id'], this.artist).then(() => {
        this.$state.go('dashboard', { id: this.$stateParams['id'] });
      });
    }

    public deleteProfile() {
      this.artistService.removeArtist(this.$stateParams['id']);
      this.$state.go('home');
    }
  }

}
