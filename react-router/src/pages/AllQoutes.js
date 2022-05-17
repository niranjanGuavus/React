import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QOUTES = [
    {id: 'q1', author: 'max', text: 'Learning React is fun'},
    {id: 'q2', author: 'max1', text: 'Learning React is very fun'},
]

const AllQoutes = ()=> {
    return (
        <QuoteList quotes={DUMMY_QOUTES}></QuoteList>
    );

};
export default AllQoutes;