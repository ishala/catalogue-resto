import RestoDbSource from "../../data/restodb-source";
import { createRestoItemTemplate } from "../templates/template-creator";

const Home = {
  async render() {
    return `
    <div class="content">
    <h2 class="content__heading">Menu</h2>
    <div id="restos" class="restos">
    </div>
  </div>
      `;
  },

  async afterRender() {
    const response = await RestoDbSource.nameResto();
    if (response && response.restaurants) {
      const restos = response.restaurants;
      const restosContainer = document.querySelector('#restos');
      restos.forEach((resto) => {
        restosContainer.innerHTML += createRestoItemTemplate(resto);
      });
    }
  },
};

export default Home;
