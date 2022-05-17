import { useHistory } from "react-router";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQoutes = ()=> {
    const history =useHistory();
    const addQouteHandler = (data) => {
        console.log(data);
        history.push('/qoutes');
    };

    return (
       <QuoteForm onAddQuote={addQouteHandler}/>
    );

};
export default NewQoutes;