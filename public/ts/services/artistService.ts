namespace inkedin.services {

  export class ArtistService {
    private ARTIST_RESOURCE = this.$resource('/api/artists');

    static $inject = ['$resource'];

    constructor(private $resource) {}

    public getArtists() {
      return this.ARTIST_RESOURCE.query();
    }

    public getArtistById(artistId) {
      return this.ARTIST_RESOURCE.get({ id: artistId });
    }

    public saveArtist(newArtist) {
      return this.ARTIST_RESOURCE.save(newArtist).$promise;
    }

    public removeArtist(artistId) {
      return this.ARTIST_RESOURCE.remove({ id: artistId }).$promise;
    }
  }

  angular.module('inkedin').service('artistService', ArtistService);

}
