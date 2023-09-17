import axios from 'axios';
import {
  ICoordinates,
  IGeocodeResponse,
  TLocationResponse,
} from '../libs/locations/data-domains';

const BASE_URL = 'http://localhost:3000';

const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'Cache-Control': 'no-cache',
  Pragma: 'no-cache',
  Expires: '0',
};

const getLocations = async (dateTime: string) => {
  const response = await axios.request({
    url: `${BASE_URL}/location/locations`,
    method: 'GET',
    headers: HEADERS,
    params: {
      date_time: dateTime,
    },
  });
  return response.data as TLocationResponse[];
};

const getGeoLocation = async ({ latitude, longitude }: ICoordinates) => {
  const response = await axios.request({
    url: `${BASE_URL}/geocode/location`,
    method: 'GET',
    headers: HEADERS,
    params: {
      latitude,
      longitude,
    },
  });
  return response.data as IGeocodeResponse;
};

export const BackendService = {
  getLocations,
  getGeoLocation,
};
