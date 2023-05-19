import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Card from "../components/cards";

const NewsList = () => {
  const [loadmore, setLoadmore] = useState(true);
  const [page, setPage] = useState(0);
  const interviews = useSelector(state => state.interviews.interviews);
  const news = interviews.slice(0, 12 * (page + 1));

  useEffect(()=> {
    if ( (page + 1) * 12 < interviews.length ) {
      setLoadmore(true);
    } else {
      setLoadmore(false);
    }
  }, [page, interviews.length]);

  return (
    <div className="explorepage main">
      <h2 className="explore__heading">Explore</h2>
      <section className="news news--recent">
        <div className="news__items">
          {news &&
            news.map((item, idx) => (
              <Card data={ item } key={idx} />
            ))
          }
        </div>
      </section>

      {loadmore &&
      <div className="loadmore-wrapper">
        <button className="loadmore btn btn--white" onClick={() => { setPage(page + 1); }}>Load more</button>
      </div>
      }
    </div>
  )
}

export default NewsList;