import './css/styles.css';

import debounce from 'lodash.debounce';

import { fetchCountries } from './fetchCountries';
const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

const options = '?fields=name,capital,population,flags,languages';

refs.input.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange(event) {
  const countryName = event.target.value.trim();
  if (countryName === '') {
    refs.countryInfo.innerHTML = '';
    refs.countryList.innerHTML = '';
    return;
  }
  const url = `https://restcountries.com/v3.1/name/${countryName}`;
  fetchCountries(url + options);
  refs.countryInfo.innerHTML = '';
  refs.countryList.innerHTML = '';
}

function renderCountry(data) {
  const markup = data
    .map(
      ({
        capital,
        population,
        languages,
        flags: { svg },
        name: { official },
      }) => {
        const language = Object.values(languages).join(', ');

        for (let i = 0; i < data.length; i += 1) {
          return ` <div class="wrapper"><img src="${svg}" height="20" width="30">
  <h1 class="country-info__name">${official}</h1></div>
  <ul class="list country-info__features"><li class="country-info__feature">Capital: <span class="country-info__value">${capital}</span></li>
  <li class="country-info__feature">Population: <span class="country-info__value">${population}</span></li>
  <li class="country-info__feature">Languages: <span class="country-info__value">${language}</span></li></ul>
  `;
        }
      }
    )
    .join('');

  refs.countryInfo.insertAdjacentHTML('beforeend', markup);
}

function renderCountriesList(data) {
  const markup = data
    .map(({ flags: { svg }, name: { official } }) => {
      for (let i = 0; i < data.length; i += 1) {
        return `<li class="list"><img height="20" width="30" src="${svg}"/> ${official} </li>`;
      }
    })
    .join('');

  refs.countryList.insertAdjacentHTML('beforeend', markup);
}

export { renderCountriesList, renderCountry };
