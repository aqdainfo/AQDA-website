import Axios from 'axios';

Axios.interceptors.response.use(
  response => response,
  error => Promise.reject(error.response)
);

const API = {
  get: (url, config = {}) =>
    Axios.get(url, config).then(res => res.data),
  post: (url, data, config = {}) =>
    Axios.post(url, data, config).then(res => res.data),
  put: (url, data, config = {}) =>
    Axios.put(url, data, config).then(res => res.data),
  delete: (url, config = {}) =>
    Axios.delete(url, config).then(res => res.data),
}

export default API;

export const getMigrations = data => {
  const migKeys = {};

  data.forEach(item => {
    if ( item.migration.name in migKeys ) {
      migKeys[item.migration.name].value ++;
    } else {
      migKeys[item.migration.name] = {};
      migKeys[item.migration.name].checked = false;
      migKeys[item.migration.name].value = 1;
    }
  });

  return migKeys;
}

//Init Migration
export const initMigrations = data => {
  const migrationKeys = {};

  data.forEach(item => {
    if (!(item.migration.name in migrationKeys) ) {
      migrationKeys[item.migration.name] = {
        checked: false
      };      
    }
  });

  return migrationKeys;
}

//Filter by Migrations
export const filterByMigrations = (items, migrations) => {
  const migrationData = {};

  const isAllDeactivated = Object.values(migrations).every(g => !g.checked)
  Object.keys(migrations).forEach(g => migrationData[g] = 0)

  if(isAllDeactivated) {
    items.forEach(item => {
      migrationData[item.migration.name] ++;
    });
  } else {
    items.forEach(item => {
      if(!migrations[item.migration.name].checked) return;
      migrationData[item.migration.name] ++;
    });
  }
  
  return migrationData;
}

//Init Gender
  /*
export const initGenders = data => {
const genderKeys = {};

  data.forEach(item => {
    if ( item.gender === undefined ) return;
    if (!(item.gender.name in genderKeys) ) {
      genderKeys[item.gender.name] = {
        checked: false
      };      
    }
  });

  return genderKeys;

  const genderKeys = {};

  data.forEach(item => {
    const keys = item.gender.split(',');

    keys.forEach(key => {
      if ( !(key in genderKeys) ) {
        genderKeys[key] = {
          checked: false
        };      
      }
    });
  });

  return genderKeys;
  
}*/

//Filter by Genders
/*
export const filterByGenders = (items, genders) => {
  const genderData = {};

  const isAllDeactivated = Object.values(genders).every(g => !g.checked)
  Object.keys(genders).forEach(g => genderData[g] = 0)

  if(isAllDeactivated) {
    items.forEach(item => {
      if ( item.gender === undefined ) return;
      genderData[item.gender.name] ++;
    });
  } else {
    items.forEach(item => {
      if(!genders[item.gender.name].checked) return;
      genderData[item.gender.name] ++;
    });
  }
  
  return genderData;


  const gendersData = {};

  const isAllDeactivated = Object.values(genders).every(g => !g.checked)
  Object.keys(genders).forEach(g => gendersData[g] = 0)

  if(isAllDeactivated) {
    items.forEach(item => {
      const keys = item.genders.split(',');
      keys.forEach(key => {
        gendersData[key] ++;
      })
    });
  } else {
    items.forEach(item => {
      const keys = item.genders.split(',');
      keys.forEach(key => {
        if(!genders[key].checked) return;
        gendersData[key] ++;
      });
    });
  }
  
  return gendersData;
  
}*/

//Init Language
export const initLanguages = data => {
  const languageKeys = {};

  data.forEach(item => {
    if (!(item.language.name in languageKeys) ) {
      languageKeys[item.language.name] = {
        checked: false
      };      
    }
  });

  return languageKeys;
}

//Filter by Languages
export const filterByLanguages = (items, languages) => {
  const languageData = {};

  const isAllDeactivated = Object.values(languages).every(g => !g.checked)
  Object.keys(languages).forEach(g => languageData[g] = 0)

  if(isAllDeactivated) {
    items.forEach(item => {
      languageData[item.language.name] ++;
    });
  } else {
    items.forEach(item => {
      if(!languages[item.language.name].checked) return;
      languageData[item.language.name] ++;
    });
  }
  
  return languageData;
}

//Init Country
export const initCountries = data => {
  const countryKeys = {};

  data.forEach(item => {
    if (!(item.escapeCountry in countryKeys) ) {
      countryKeys[item.escapeCountry] = {
        checked: false
      };      
    }
  });

  return countryKeys;
}

//Filter by Countries
export const filterByCountries = (items, countries) => {
  const countryData = {};

  const isAllDeactivated = Object.values(countries).every(g => !g.checked)
  Object.keys(countries).forEach(g => countryData[g] = 0)

  if(isAllDeactivated) {
    items.forEach(item => {
      countryData[item.escapeCountry] ++;
    });
  } else {
    items.forEach(item => {
      if(!countries[item.escapeCountry].checked) return;
      countryData[item.escapeCountry] ++;
    });
  }
  
  return countryData;
}

//Init Date
export const initDates = data => {
  const dateKeys = {};

  data.forEach(item => {
    const year = item.date.split('-')[0];
    if (!(year in dateKeys) ) {
      dateKeys[year] = {
        checked: false
      };      
    }
  });

  return dateKeys;
}

//Filter by Dates
export const filterByDates = (items, dates) => {
  const datesData = {};

  const isAllDeactivated = Object.values(dates).every(g => !g.checked)
  Object.keys(dates).forEach(g => datesData[g] = 0)

  if(isAllDeactivated) {
    items.forEach(item => {
      const year = item.date.split('-')[0];
      datesData[year] ++;
    });
  } else {
    items.forEach(item => {
      const year = item.date.split('-')[0];
      if(!dates[year].checked) return;
      datesData[year] ++;
    });
  }
  
  return datesData;
}

//Init Genders
export const initGenders = data => {
  const genKeys = {};

  data.forEach(item => {
    const keys = item.genders.split(',');

    keys.forEach(key => {
      if ( !(key in genKeys) ) {
        genKeys[key] = {
          checked: false
        };      
      }
    });
  });

  return genKeys;
}

//Filter by Genders
export const filterByGenders = (items, gen) => {
  const genData = {};

  const isAllDeactivated = Object.values(gen).every(g => !g.checked)
  Object.keys(gen).forEach(g => genData[g] = 0)

  if(isAllDeactivated) {
    items.forEach(item => {
      const keys = item.genders.split(',');
      keys.forEach(key => {
        genData[key] ++;
      })
    });
  } else {
    items.forEach(item => {
      const keys = item.genders.split(',');
      keys.forEach(key => {
        if(!gen[key].checked) return;
        genData[key] ++;
      });
    });
  }
  return genData;
 
}

//Init Sexo
export const initSexos = data => {
  const sesKeys = {};

  data.forEach(item => {
    const keys = item.sexo.split(',');

    keys.forEach(key => {
      if ( !(key in sesKeys) ) {
        sesKeys[key] = {
          checked: false
        };      
      }
    });
  });

  return sesKeys;
}

//Filter by Sexos
export const filterBySexos = (items, ses) => {
  const sesData = {};

  const isAllDeactivated = Object.values(ses).every(g => !g.checked)
  Object.keys(ses).forEach(g => sesData[g] = 0)

  if(isAllDeactivated) {
    items.forEach(item => {
      const keys = item.sexo.split(',');
      keys.forEach(key => {
        sesData[key] ++;
      })
    });
  } else {
    items.forEach(item => {
      const keys = item.sexo.split(',');
      keys.forEach(key => {
        if(!ses[key].checked) return;
        sesData[key] ++;
      });
    });
  }
  
  return sesData;
}

export const calcFilterData = (interviews, filters, searchKey) => { 
  let result = []

  let searchKeyCapitalised = searchKey.charAt(0).toUpperCase() + searchKey.slice(1).toLowerCase();
  //Search Key
  if ( searchKey ) {
    result = interviews.filter( item => {
      

      return (item.accessionName.indexOf(searchKeyCapitalised) > -1) || 
             (item.narratorNameD.indexOf(searchKeyCapitalised) > -1) ||
             (item.interviewer.name.indexOf(searchKeyCapitalised) > -1) ||
             (item.interviewer.bio.indexOf(searchKeyCapitalised) > -1) ||
             (item.migration.name.indexOf(searchKeyCapitalised) > -1) ||
             (item.language.name.indexOf(searchKeyCapitalised) > -1) ||
             (item.genders.indexOf(searchKeyCapitalised) > -1) ||
             (item.pronouns.indexOf(searchKeyCapitalised) > -1) ||
             (item.sexo.indexOf(searchKeyCapitalised) > -1) ||
             (item.contextual.indexOf(searchKeyCapitalised) > -1)

    })
  } else {
    result = interviews;
  }


  // Migration
  interviews = result;
  const isMigrationAllDeactivated = Object.values( filters.migrations ).every( v => !v.checked )

  if(!isMigrationAllDeactivated)  {
    result = interviews.filter((item)=>{      
      return Object.entries( filters.migrations ).some( ( [key, v] ) => {
        if ( !v.checked ) return false
        return item.migration.name === key  
      })
    })
  } else {
    result = interviews;
  }

  // Countries
  interviews = result;
  const isCountriesAllDeactivated = Object.values( filters.countries ).every( v => !v.checked )

  if(!isCountriesAllDeactivated)  {
    result = interviews.filter((item)=>{      
      return Object.entries( filters.countries ).some( ( [key, v] ) => {
        if ( !v.checked ) return false
        return item.escapeCountry === key  
      })
    })
  } else {
    result = interviews;
  }
  
  //Language
  interviews = result;
  const isLanguageAllDeactivated = Object.values( filters.languages ).every( v => !v.checked )

  if(!isLanguageAllDeactivated)  {
    result = interviews.filter((item)=>{      
      return Object.entries( filters.languages ).some( ( [key, v] ) => {
        if ( !v.checked ) return false
        return item.language.name === key  
      })
    })
  } else {
    result = interviews;
  }

  //Dates
  interviews = result;
  const isDatesAllDeactivated = Object.values( filters.dates ).every( v => !v.checked )

  if(!isDatesAllDeactivated)  {
    result = interviews.filter((item)=>{      
      return Object.entries( filters.dates ).some( ( [key, v] ) => {
        if ( !v.checked ) return false
        return item.date.indexOf(key) > -1  
      })
    })
  } else {
    result = interviews;
  }

  
  //Genders
  interviews = result;
  const isGendersAllDeactivated = Object.values( filters.gen ).every( v => !v.checked )

  if(!isGendersAllDeactivated)  {
    result = interviews.filter((item)=>{      
      return Object.entries( filters.gen ).some( ( [key, v] ) => {
        if ( !v.checked ) return false
        return item.genders.indexOf(key) > -1  
      })
    })
  } else {
    result = interviews;
  }

  //Sexos
  interviews = result;
  const isSexosAllDeactivated = Object.values( filters.ses ).every( v => !v.checked )

  if(!isSexosAllDeactivated)  {
    result = interviews.filter((item)=>{      
      return Object.entries( filters.ses ).some( ( [key, v] ) => {
        if ( !v.checked ) return false
        return item.sexo.indexOf(key) > -1  
      })
    })
  } else {
    result = interviews;
  }

  return result 
}

export const getCountry = data => {
  const countryKeys = {}

  data.forEach(item => {
    if ( item.escapeCountry in countryKeys ) {
      countryKeys[item.escapeCountry].value ++;
    } else {
      countryKeys[item.escapeCountry] = {};
      countryKeys[item.escapeCountry]['checked'] = false
      countryKeys[item.escapeCountry]['value'] = 1;
    }
  });

  return countryKeys;
}