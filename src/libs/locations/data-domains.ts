// NOTE: duplicated code from BE, might need something like a contract

export interface IImageMetaData {
  height: number;
  width: number;
  md5: string;
}

export interface ICoordinates {
  latitude: number;
  longitude: number;
}

export interface ICamera {
  timestamp: string;
  image: string;
  location: ICoordinates;
  // TODO: convert these to camel case, and add a transformer
  camera_id: string;
  image_metadata: IImageMetaData;
}

export interface IForecast {
  area: string;
  forecast: string;
}

export interface IAreaMetaData {
  name: string;
  label_location: ICoordinates;
}

export type TLocationResponse = ICamera & IForecast & IAreaMetaData;

export interface IPlusCode {
  compound_code: string;
  global_code: string;
}

export interface IAddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

export interface IGeoCodeCoordinates {
  lat: number;
  lng: number;
}

export interface IAddressWrapper {
  address_components: IAddressComponent[];
  formatted_address: string;
  geometry: {
    location: IGeoCodeCoordinates;
    location_type: string;
    viewport: {
      northeast: IGeoCodeCoordinates;
      southwest: IGeoCodeCoordinates;
    };
  };
  place_id: string;
  plus_code: IPlusCode;
  types: string[];
}

export interface IGeocodeResponse {
  plus_code: IPlusCode;
  status: string;
  results: IAddressWrapper[];
}
