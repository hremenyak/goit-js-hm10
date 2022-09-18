// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// function fetchCountries(url) {
//   return fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error();
//       }
//       return response.json();
//     })
//     .then(data => {
//       if (data.length > 10) {
//         Notify.info(
//           'Too many matches found. Please enter a more specific name.'
//         );
//         return;
//       }
//       if (data.length > 2 && data.length < 10) {
//         renderCountriesList(data);
//         return;
//       }

//       if (data.length === 1) {
//         renderCountry(data);
//         return;
//       }
//     })
//     .catch(err => {
//       Notify.failure('Oops, there is no country with that name');
//     });
// }

// function renderCountry(data) {
//   const markup = data
//     .map(
//       ({
//         capital,
//         population,
//         languages,
//         flags: { svg },
//         name: { official },
//       }) => {
//         const language = Object.values(languages).join(', ');

//         for (let i = 0; i < data.length; i += 1) {
//           return ` <div class="country-info__wrapper"><img src="${svg}" height="20" width="30">
//   <h1 class="country-info__name">${official}</h1></div>
//   <p class="country-info__desc">Capital: <span class="country-info__value">${capital}</span></p>
//   <p class="country-info__desc">Population: <span class="country-info__value">${population}</span></p>
//   <p class="country-info__desc">Languages: <span class="country-info__value">${language}</span></p>`;
//         }
//       }
//     )
//     .join('');

//   refs.countryInfo.insertAdjacentHTML('beforeend', markup);
// }

// function renderCountriesList(data) {
//   const markup = data
//     .map(({ flags: { svg }, name: { official } }) => {
//       for (let i = 0; i < data.length; i += 1) {
//         return `<li><img height="20" width="30" src="${svg}"/> ${official} </li>`;
//       }
//     })
//     .join('');

//   refs.countryList.insertAdjacentHTML('beforeend', markup);
// }

// function renderCountry(data) {
//   const markup = data
//     .map(
//       ({
//         capital,
//         population,
//         languages,
//         flags: { svg },
//         name: { official },
//       }) => {
//         const language = Object.values(languages).join(', ');

//         for (let i = 0; i < data.length; i += 1) {
//           return ` <div class="country-info__wrapper"><img src="${svg}" height="20" width="30">
//   <h1 class="country-info__name">${official}</h1></div>
//   <p class="country-info__desc">Capital: <span class="country-info__value">${capital}</span></p>
//   <p class="country-info__desc">Population: <span class="country-info__value">${population}</span></p>
//   <p class="country-info__desc">Languages: <span class="country-info__value">${language}</span></p>`;
//         }
//       }
//     )
//     .join('');

//   refs.countryInfo.insertAdjacentHTML('beforeend', markup);
// }

// export { fetchCountries };
