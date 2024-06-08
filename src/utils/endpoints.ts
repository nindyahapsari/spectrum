const BASE_URL =
  import.meta.env.MODE === 'production'
    ? import.meta.env.VITE_BASE_URL_PROD
    : import.meta.env.VITE_BASE_URL_DEV;
export { BASE_URL };

export const TICKETS_API = `${BASE_URL}/api/tickets`;
export const PURCHASE_API = `${BASE_URL}/api/tickets/purchase`;

export const FLIGHTS_ALL_API = `${BASE_URL}/api/flights/all`;

// console.log('Current NODE_ENV:', process.env.NODE_ENV);
// console.log('Current BASE_URL:', BASE_URL);
