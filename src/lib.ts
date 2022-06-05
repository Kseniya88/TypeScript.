import { User } from './models/user.js';

export function getUserData(): User | null {
  const rawUserData = localStorage.getItem('user');
  let userData: unknown;
  if (rawUserData) {
    userData = JSON.parse(rawUserData);
  }
  if (
    typeof userData === 'object' &&
    'username' in userData &&
    'avatarUrl' in userData
  ) {
    return userData as User;
  }

  return JSON.parse(rawUserData);
}

export function saveUserData(
  userName: string,
  linkAvatar: string
): void {
  localStorage.setItem(
    'user',
    JSON.stringify({ userName: userName, linkAvatar: linkAvatar })
  );
}

export function getFavoritesAmount(): number {
  const favoritesAmount = localStorage.getItem('favoritesAmount');
  if (favoritesAmount == null) return 0;
  return JSON.parse(favoritesAmount);
}

export function renderBlock(elementId, html) {
  const element = document.getElementById(elementId);
  element.innerHTML = html;
}

export function renderToast(message, action) {
  let messageText = '';

  if (message != null) {
    messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${action?.name || 'Закрыть'}</button>
      </div>
    `;
  }

  renderBlock('toast-block', messageText);

  const button = document.getElementById('toast-main-action');
  if (button != null) {
    button.onclick = function () {
      if (action != null && action.handler != null) {
        action.handler();
      }
      renderToast(null, null);
    };
  }
}
