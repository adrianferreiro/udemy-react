import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quotes } from "./";

export const MultipleCustomHooks = () => {

    const {counter, increment, decrement} = useCounter(1);
    
    const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    const {quote, author} = !!data && data[0];
    //la doble negación en éste caso de data es porque tiene un valor inicial de undefined
    //al negarlo la primera vez se convierte en true
    //y al negarlo por segunda vez se convierte en false
    
    
    
    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />
            {
                (isLoading)
                    ? <LoadingQuote/>
                    : <Quotes quote={quote} author={author} />
                    
            }
            <button 
                className="btn btn-primary"
                disabled={isLoading || (counter<2)}
                onClick={()=> decrement()}>
                    Prev quote
            </button>
            <button 
                onClick={()=> increment()}
                disabled= {isLoading} 
                className="btn btn-primary">
                     Next quote
            </button>
            <h1>{counter}</h1>
        </>
        )
}
