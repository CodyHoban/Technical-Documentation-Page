import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import  Quotes from './Quotes';



const initialState = {
    randomQuote: Quotes,
    quote: "zero"
}

function qreducer(state = initialState, action) {
    switch(action.type) {
        case "NEWQ":
            var qArr = ["zero", "one", "two", "three"]
            var rand = qArr[Math.floor(Math.random() * qArr.length)]
            return {
                quote: rand,
                randomQuote: Quotes
            };
        default:
            return state;
    }
}

const store = createStore(qreducer, composeWithDevTools());
store.dispatch({type: "NEWQ"});


export default store;
