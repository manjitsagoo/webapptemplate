import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import history from './history'
import Loading from '../components/loading';
import Loadable from 'react-loadable';

const Header = Loadable({ loader: () => import('../components/header'), loading: Loading });
const Home = Loadable({ loader: () => import('../components/home'), loading: Loading });
const Footer = Loadable({ loader: () => import('../components/footer'), loading: Loading });

const Root = ({ store }) => (
    <Provider history={history} store={store}>
        <div>
            <Route path="/" component={Header} />
            <div>
                <Route exact path="/" component={Home} />
            </div>
            <Route path="/" component={Footer} />
        </div>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired,
}

export default Root