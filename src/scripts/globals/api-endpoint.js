import CONFIG from './config';

const API_ENDPOINT = {
  RESTO_LIST: `${CONFIG.BASE_URL}/list`,
  DETAIL_RESTO: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;
