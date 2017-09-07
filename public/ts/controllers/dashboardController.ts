namespace inkedin.controllers {

  export class DashboardController {
    public artist;
    public newStyle;

    static $inject = ['artistService', 'loginService', '$state', '$stateParams'];

    constructor(private artistService, private loginService, private $state, private $stateParams) {
      let artistId = this.$stateParams['id'];
      this.artist = this.artistService.getArtistById(artistId);
    }

    public editProfile() {
      this.$state.go('edit', { id: this.$stateParams['id'] });
    }

    public addStyle() {
      if (this.newStyle) {
        let styleToAdd = this.newStyle;
        this.artist.styles.push(styleToAdd);
        this.artistService.updateArtist(this.$stateParams['id'], this.artist);
        this.newStyle = '';
      } else {
        alert('Invalid input.');
      }
    }

    public removeStyle(index) {
      this.artist.styles.splice(index, 1);
      this.artistService.updateArtist(this.$stateParams['id'], this.artist);
    }
  }

}
