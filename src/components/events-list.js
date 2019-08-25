import getCardTemplate from './card';

const getEventsListTemplate = (eventsAmount) => `
  <ul class="trip-days">
    ${Array.from({length: eventsAmount}, () => getCardTemplate()).join(``)}
  </ul>
`;

export default getEventsListTemplate;
