import { renderBlock } from './lib.js';

export function renderUserBlock(
  name: string, 
  link: string, 
  favoriteItemsAmount: number) {
  const favoritesCaption = favoriteItemsAmount
    ? favoriteItemsAmount
    : 'ничего нет';
  const hasFavoriteItems = favoriteItemsAmount ? true : false;

  const userName = name;
  const linkAvatar = link;

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar${linkAvatar}" src="/img/avatar.png" alt="Wade Warren" />
      <div class="info">
          <p class="name${userName}">Wade Warren</p>
          <p class="fav">
            <i class="heart-icon${
  hasFavoriteItems ? ' active' : ''
}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  );
}
