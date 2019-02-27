/**
  Model of a Home object.

  Created this Home Model for the json to be parsed to an array of Home objects. This would make it easier to work with.
*/

export class Home {
  propertyId: number;
  groupLogoUrl: string;
  bedsString: string;
  price: number;
  sizeStringMeters: number;
  displayAddress: string;
  propertyType: string;
  berRating: string;
  mainPhoto: string;
  galleryPictures: string[]; //Would be adding in an array to hold the additional pictures.

  constructor(json: any) {
    if (json) {
      this.propertyId = json.PropertyId;
      this.groupLogoUrl = json.GroupLogoUrl;
      this.bedsString = json.BedsString;
      this.price = json.Price;
      this.sizeStringMeters = json.SizeStringMeters;
      this.displayAddress = json.DisplayAddress;
      this.propertyType = json.PropertyType;
      this.berRating = json.BerRating;
      this.mainPhoto = json.MainPhoto;
      this.galleryPictures = json.Photos;

    }
  }
}
