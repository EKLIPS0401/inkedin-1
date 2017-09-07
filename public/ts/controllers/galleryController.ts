namespace inkedin.controllers {

  export class GalleryController {
    public artists;

    static $inject = ['artistService'];

    constructor(private artistService) {
      this.artists = this.artistService.getArtists();
    }
  }

}
