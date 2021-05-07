import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {Provider} from 'react-redux'
import reduxThunk from 'redux-thunk';
import { applyMiddleware, createStore ,compose} from 'redux'
import reducers from './store/reducers'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDOM.render(
        <Provider store={
            createStore(
                reducers,
                composeEnhancers(applyMiddleware(reduxThunk))
                )
        }>
            <App/>
        </Provider>
        ,document.querySelector('#root')
);