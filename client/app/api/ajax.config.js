const base = 'www.localhost:8000/api/';
const config = {
  timeout: 2000,
  baseUrl: base,
  headers: {
    'Content-Type': 'text/plain',
  },
  responseType: 'json',
}

export default config;
