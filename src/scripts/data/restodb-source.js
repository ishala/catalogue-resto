import API_ENDPOINT from '../globals/api-endpoint';

class RestoDbSource {
  static async nameResto() {
    const response = await fetch(API_ENDPOINT.RESTO_LIST);
    const responseJson = await response.json();
    return responseJson;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTO(id));
    return response.json();
  }
}

export default RestoDbSource;
