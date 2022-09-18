import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { renderCountriesList, renderCountry } from './index';

function fetchCountries(url) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .then(data => {
      if (data.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        return;
      }
      if (data.length > 2 && data.length < 10) {
        renderCountriesList(data);
        return;
      }

      if (data.length === 1) {
        renderCountry(data);
        return;
      }
    })
    .catch(err => {
      console.log(err);
      Notify.failure('Oops, there is no country with that name');
    });
}

export { fetchCountries };
