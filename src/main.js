import getRouteInfoTemplate from './components/route-info';
import getMenuTemplate from './components/menu';
import getFiltersTemplate from './components/filters';
import getFormTemplate from './components/form';
import getTripSortTemplate from './components/trip-sort';
import getEventsListTemplate from './components/events-list';

const DAYS_AMOUNT = 3;

const createElement = (template) => {
  const parent = document.createElement(`div`);
  parent.innerHTML = template;

  return parent.firstElementChild;
};

document.addEventListener(`DOMContentLoaded`, () => {
  const headerContainer = document.querySelector(`.page-header__container`);
  const tripInfo = headerContainer.querySelector(`.trip-info`);
  const tripControls = headerContainer.querySelector(`.trip-controls`);
  const content = document.querySelector(`.trip-events`);

  const routeInfo = createElement(getRouteInfoTemplate());
  const menu = createElement(getMenuTemplate());
  const filters = createElement(getFiltersTemplate());
  const tripSort = createElement(getTripSortTemplate());
  const form = createElement(getFormTemplate());
  const events = createElement(getEventsListTemplate(DAYS_AMOUNT));

  tripInfo.insertBefore(routeInfo, tripInfo.querySelector(`.trip-info__cost`));
  tripControls.querySelector(`h2`).insertAdjacentElement(`afterend`, menu);
  tripControls.appendChild(filters);

  [tripSort, form, events].forEach((item) => content.appendChild(item));
});
