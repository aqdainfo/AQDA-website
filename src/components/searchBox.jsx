import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as InterviewACtions from '../store/actions/interviews';

const SearchBox = ({open, setOpen}) => {
  const [searchKey, setSearchKey] = useState('');
  const [search, setSearch] = useState(false);
  const [searchBox, setSearchBox] = useState(false);
  const interviews = useSelector(state => state.interviews);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFilterHandle = useCallback( (type, key, checked) => {
    setSearchBox(true);
    dispatch(InterviewACtions.getFilteredData(searchKey, type, key, checked));
  }, [dispatch, searchKey]);

  const handleInput = useCallback(e => {
    setSearchKey(e.target.value);
  }, [])

  const onSearch = useCallback(() => {
    setSearchBox(true);
    dispatch(InterviewACtions.getFilteredData(searchKey));
    setSearch(true);
    setOpen(false);
  }, [searchKey, dispatch]);

  const onReset = useCallback(() => {
    setSearchKey('');
    setSearchBox(false);
    dispatch(InterviewACtions.resetFilter());
  }, [dispatch])

  useEffect(() => {
    if(!search) return
    setSearch(false)
    navigate('/search')
  }, [search])

  return (
    <div className={`search${ open ? ' open' : '' }`}>
      <div className="search__sm-label">Filter Stories</div>

      <div className="search__input">
        <div className="search__lg-label">Search Keywords</div>
        
        <div className="search__input__wrapper">
          <input type="text" className="search__input__field" onChange={ e => handleInput(e) } value={ searchKey } />
          <button className="search__submit btn btn--white" onClick={ () => onSearch() }>Search</button>
          <button className="search__reset btn btn--white" onClick={ () => onReset() }>Reset</button>
        </div>
      </div>

      <div className="search__filter search__filter--gender">
        <div className="search__label">Gender</div>
        
        <div className="search__filter__wrapper">
          { Object.keys(interviews.filters.gen).map( (key) => 
            <div className={`button btn btn--white search__filter__item${ interviews.filters.gen[key].checked ? ' checked' : '' }`}
                 key={key}
                 data-key={key}
                 onClick={ () =>  onFilterHandle('gen', key, interviews.filters.gen[key].checked) }
            >
              {`${key} (${interviews.filteredDataByType.gen[key]})`}
            </div>
          )}
        </div>
      </div>

      <div className="search__filter search__filter--ses">
        <div className="search__label">Sexuality</div>
        
        <div className="search__filter__wrapper">
          { Object.keys(interviews.filters.ses).map( (key) => 
            <div className={`button btn btn--white search__filter__item${ interviews.filters.ses[key].checked ? ' checked' : '' }`}
                 key={key}
                 data-key={key}
                 onClick={ () =>  onFilterHandle('ses', key, interviews.filters.ses[key].checked) }
            >
              {`${key} (${interviews.filteredDataByType.ses[key]})`}
            </div>
          )}
        </div>
      </div>

      <div className="search__filter search__filter--language">
        <div className="search__label">Language</div>
        
        <div className="search__filter__wrapper">
        { Object.keys(interviews.filters.languages).map( (key) => 
            <div className={`button btn btn--white search__filter__item${ interviews.filters.languages[key].checked ? ' checked' : '' }`}
                 key={key}
                 data-key={key}
                 onClick={ () =>  onFilterHandle('languages', key, interviews.filters.languages[key].checked) }
            >
              {`${key} (${interviews.filteredDataByType.languages[key]})`}
            </div>
          )}
        </div>
      </div>

      <div className="search__filter search__filter--language">
        <div className="search__label">Year</div>

        <div className="search__ssm-label"></div>
        
        <div className="search__filter__wrapper">
        { Object.keys(interviews.filters.dates).map( (key) => 
            <div className={`button btn btn--white search__filter__item${ interviews.filters.dates[key].checked ? ' checked' : '' }`}
                 key={key}
                 data-key={key}
                 onClick={ () =>  onFilterHandle('dates', key, interviews.filters.dates[key].checked) }
            >
              {`${key} (${interviews.filteredDataByType.dates[key]})`}
            </div>
          )}
        </div>
      </div>

      <div className="search__filter search__filter--country">
        <div className="search__label">Location</div>
        
        <div className="search__filter__wrapper">
        { Object.keys(interviews.filters.countries).map( (key) => 
            <div className={`button btn btn--white search__filter__item${ interviews.filters.countries[key].checked ? ' checked' : '' }`}
                 key={key}
                 data-key={key}
                 onClick={ () =>  onFilterHandle('countries', key, interviews.filters.countries[key].checked) }
            >
              {`${key} (${interviews.filteredDataByType.countries[key]})`}
            </div>
          )}
        </div>
      </div>

      <div className="search__filter search__filter--migration">
        <div className="search__label">Choose Status</div>
        
        <div className="search__filter__wrapper">
        { Object.keys(interviews.filters.migrations).map( (key) => 
            <div className={`button btn btn--white search__filter__item${ interviews.filters.migrations[key].checked ? ' checked' : '' }`}
                 key={key}
                 data-key={key}
                 onClick={ () =>  onFilterHandle('migrations', key, interviews.filters.migrations[key].checked) }
            >
              {`${key} (${interviews.filteredDataByType.migrations[key]})`}
            </div>
          )}
        </div>
      </div>


      { searchBox && 
        <div className="search__result">
          <div className="search__label">Search Result</div>
          { interviews.filterData.map(item => (
            <Link className="search__result__item" to={`/explore/${item.id}`} key={item.id}>
              {item.narratorNameD}
            </Link>
          ))}
        </div>
      }

      <div className="search__input__wrapper search__input__wrapper--bottom">
        <button className="search__submit btn btn--white" onClick={ () => onSearch() }>Search</button>
        <button className="search__reset btn btn--white" onClick={ () => onReset() }>Reset</button>
      </div>
    </div>
  )
}

export default SearchBox