import * as ActionTypes from '../constants';
import { initGenders, filterByGenders, calcFilterData, initLanguages, filterByLanguages, initDates, filterByDates, initSexos, filterBySexos, initMigrations, filterByMigrations, initCountries, filterByCountries } from '../../utils/helper';

const initState = {
  interviews: [],
  filterData: [],
  filters:    {
    migrations: [],
    gen:    [],
    countries:  [],
    dates:      [],
    languages:  [],
    ses:        [],
  },
  filteredDataByType: {
    migrations: [],
    gen:    [],
    countries:  [],
    dates:      [],
    languages:  [],
    ses:        [],
  },
  initFilter: {
    migrations: [],
    gen:    [],
    countries:  [],
    dates:      [],
    languages:  [],
    ses:        [],
  },
}

const interviewReducer = (state = initState, action) => {
  const payload = action.payload;

  switch (action.type) {
    case ActionTypes.GET_INTERVIEWS: {
      const gen = initGenders(payload);
      const languages = initLanguages(payload);
      const dates = initDates(payload);
      const ses = initSexos(payload);
      const migrations = initMigrations(payload);
      const countries = initCountries(payload);

      const initmigrations =  filterByMigrations(payload, migrations);
      const initgen =  filterByGenders(payload, gen);
      const initlanguages =  filterByLanguages(payload, languages);
      const initdates =  filterByDates(payload, dates);
      const initses =  filterBySexos(payload, ses);
      const initcountries =  filterByCountries(payload, countries);

      return {
        ...state,
        interviews: payload,
        filterData: payload,
        filters: {
          migrations,
          gen,
          languages,
          dates,
          ses,
          countries
        },
        filteredDataByType: {
          migrations  : initmigrations,
          gen         : initgen,
          languages   : initlanguages,
          dates       : initdates,
          ses         : initses,
          countries   : initcountries,
        },
        initFilter: {
          migrations  : initmigrations,
          gen         : initgen,
          languages   : initlanguages,
          dates       : initdates,
          ses         : initses,
          countries   : initcountries,
        }

      }
    }

    case ActionTypes.GET_FILTERED_DATA: {
      const {type, key, checked, searchKey} = payload;
      const filters = state.filters;
      if ( type ) {
        filters[type][key].checked = checked;
      }
      const interviews = state.interviews;
      const filterData = calcFilterData(interviews, filters, searchKey);

      return {
        ...state,
        filters,
        filteredDataByType: {
          migrations  : filterByMigrations(filterData, filters.migrations),
          gen         : filterByGenders(filterData, filters.gen),
          languages   : filterByLanguages(filterData, filters.languages),
          dates       : filterByDates(filterData, filters.dates),
          ses         : filterBySexos(filterData, filters.ses),
          countries   : filterByCountries(filterData, filters.countries),
        },
        filterData
      }
    }

    case ActionTypes.RESET_FILTER: {
      const interviews = state.interviews;
      const filters = state.filters;
      Object.keys(filters).forEach( filter => Object.keys(filters[filter]).forEach( item => filters[filter][item].checked = false ));
      const filterData = calcFilterData(interviews, filters, '');

      return {
        ...state,
        filters,
        filterData,
        filteredDataByType: {
          migrations  : filterByMigrations(filterData, filters.migrations),
          gen         : filterByGenders(filterData, filters.gen),
          languages   : filterByLanguages(filterData, filters.languages),
          dates       : filterByDates(filterData, filters.dates),
          ses         : filterBySexos(filterData, filters.ses),
          countries   : filterByCountries(filterData, filters.countries),
        },
      }
    }

    default:
      return state;
  }
}

export default interviewReducer;