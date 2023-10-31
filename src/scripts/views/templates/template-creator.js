import CONFIG from '../../globals/config';

const foodsList = (resto) => {
  let foodsHtml = '';
  resto.menus.foods.forEach((food) => {
    foodsHtml += `<p>${food.name}</p>`;
  });
  return foodsHtml;
};

const drinksList = (resto) => {
  let drinksHtml = '';
  resto.menus.drinks.forEach((drink) => {
    drinksHtml += `<p>${drink.name}</p>`;
  });
  return drinksHtml;
};

const reviewsList = (resto) => {
  let reviewsHtml = '';
  resto.customerReviews.forEach((review) => {
    reviewsHtml += `<p>${review.name}</p> <br> <p>${review.date}</p> <br> <p>${review.review}</p>`;
  });
  return reviewsHtml;
};

const createRestoDetailTemplate = (resto) => `
  <h2 class="resto__title">${resto.name}</h2>
  <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
  <div class="resto__info">
    <h3>Information Detail</h3>
    <h4>Nama Restoran</h4>
    <p>${resto.name}</p>
    <h4>Gambar</h4>
    <p>${resto.pictureId}</p>
    <h4>Alamat</h4>
    <p>${resto.address}</p>
    <h4>Kota</h4>
    <p>${resto.city}</p>
    <h4>Deskripsi</h4>
    <p>${resto.description}</p>
    <h4>menu Makanan</h4>
    ${foodsList(resto)}
    <h4>Menu Minuman</h4>
    ${drinksList(resto)}
    <h4>Customer Reviews</h4>
    ${reviewsList(resto)}    
  </div>
`;

const createRestoItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
      <img class="resto-item__header__poster" alt="${resto.name}"
            src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}">
      <div class="resto-item__header__rating"> 
        <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3><a href="/#/detail/${resto.id}">${resto.name}</a></h3>
      <p>${resto.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate, createRestoDetailTemplate, createLikeButtonTemplate,
  createLikedButtonTemplate,
};
