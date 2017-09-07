namespace inkedin.controllers {

  export class DashboardController {
    public artist;

    static $inject = ['artistService', 'loginService', '$state', '$stateParams'];

    constructor(private artistService, private loginService, private $state, private $stateParams) {
      let artistId = this.$stateParams['id'];
      this.artist = this.artistService.getArtistById(artistId);
    }
  }

}
