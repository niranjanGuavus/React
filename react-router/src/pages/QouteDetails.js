import { Fragment } from "react";
import { Route, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QOUTES = [
    {id: 'q1', author: 'max', text: 'Learning React is fun'},
    {id: 'q2', author: 'max1', text: 'Learning React is very fun'},
]

const QouteDetails = ()=> {

    const match = useRouteMatch();

    console.log(match);

    const param = useParams();
    const quote = DUMMY_QOUTES.find(item => item.id === param.qouteId);

    if(!quote) {
        return <p>No Quote Found</p>;
    }

    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author}/>
            <Route path={`${match.path}`} exact>
                <div className="centered">
                <Link className="btn-flat" to={`${match.url}/comments`}>
                    load comments
                </Link>
                </div>
            </Route>
            
            <Route path={`/qoutes/${param.qouteId}/comments`}>
                <Comments></Comments>
            </Route>
        </Fragment>
    );

};
export default QouteDetails;