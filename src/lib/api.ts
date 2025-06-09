const MODE = import.meta.env.QUICKTIFY_MODE || 'production';

export const MODEL_API_URL =
  MODE === 'production'
    ? 'https://model-api-752562206940.asia-southeast2.run.app'
    : 'http://localhost:9000';

export const SCRAPER_API_URL =
  MODE === 'production'
    ? 'https://scraper-api-752562206940.asia-southeast2.run.app'
    : 'http://localhost:8181';
