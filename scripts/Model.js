// eslint-disable-next-line no-unused-vars
class Model {
  constructor() {
    this.data = null;
  }

  init() {
    return fetch("data/photographers.json")
      .then((httpBodyResponse) => httpBodyResponse.json())
      .then((response) => {
        this.data = response;
      });
  }

  getPhotographerMedia(photographerId) {
    const mediaList = [];
    this.data.media.map((e) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      (e.photographerId === photographerId ? mediaList.push(e) : undefined));
    return mediaList;
  }

  getPhotographerDetail(photographerId) {
    const detail = this.data.photographers.find(
      (photographer) => photographer.id === photographerId,
    );
    return detail;
  }

  getPhotographer(photographerId) {
    const photographer = {};
    photographer.detail = this.getPhotographerDetail(photographerId);
    photographer.media = this.getPhotographerMedia(photographerId);
    return photographer;
  }

  getPhotographers() {
    return this.data.photographers;
  }
}
