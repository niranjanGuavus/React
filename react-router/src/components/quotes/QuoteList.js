import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((qouteA, qouteB)=>{
    if(ascending) {
      return qouteA.id > qouteB.id ? 1 : -1;
    } else {
      return qouteA.id > qouteB.id ? -1 : 1;
    }
  });
}

const QuoteList = (props) => {

  const history = useHistory();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const isSortAscending = searchParams.get('sort') === 'asc' ? true :false;
  const sortedQoutes = sortQuotes(props.quotes, isSortAscending);

  

  const sortChangeHandler = ()=> {
    history.push(`/qoutes?sort=${!isSortAscending? 'asc' : 'desc'}`);
  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortChangeHandler}>Sort Ascending</button>
      </div>
      <ul className={classes.list}>
        {sortedQoutes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
