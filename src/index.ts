import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderUserBlock } from './user.js';
import { renderToast, getUserData, saveUserData } from './lib.js';

window.addEventListener('DOMContentLoaded', () => {

  saveUserData('Wanna Warn', 'src=/img/avatar.png')

  const user = getUserData();
  console.log(user);
  renderUserBlock(user.userName, user.linkAvatar, 0);
  renderSearchFormBlock(new Date);
  renderSearchStubBlock();
  renderToast(
    {
      text: 'Это пример уведомления. Используйте его при необходимости',
      type: 'success',
    },
    {
      name: 'Понял(а)',
      handler: () => {
        console.log('Уведомление закрыто');
      },
    }
  );
});
