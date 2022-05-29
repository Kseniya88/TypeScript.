import { renderBlock } from './lib.js';

export function renderSearchFormBlock(entryDate?, departureDate?) {
  entryDate = dateTime;
  departureDate = departureDateTime
  function zeroFirstFormat(value)
  {
    if (value < 10) {
      value='0'+value;
    }
    return value;
  }

  function dateTime() {
    const currentDateTime = new Date();
    const day = zeroFirstFormat(currentDateTime.getDate());
    const month = zeroFirstFormat(currentDateTime.getMonth()+1);
    const year = currentDateTime.getFullYear();

    return day+month+year;
  }

  function departureDateTime() {
    const currentDateTime = new Date();
    const day = zeroFirstFormat(currentDateTime.getDate());
    const month = zeroFirstFormat(currentDateTime.getMonth()+1);
    const year = currentDateTime.getFullYear();

    return day+month+year;
  }

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${entryDate}" min="2022-05-30" max="2022-06-30" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${departureDate}" min="2022-05-31" max="2022-06-30" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  );
}
