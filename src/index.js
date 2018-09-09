import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux';
import configureStore, { history } from './store/configureStore';
import { I18nextProvider } from 'react-i18next';

import App from './containers/App/App';
import i18n from './i18n';

const target = document.querySelector('#root');

render(
	<Provider store={configureStore}>
		<I18nextProvider i18n={ i18n }>
			<ConnectedRouter history={history}>
			    <App/>
			</ConnectedRouter>
		</I18nextProvider>
	</Provider>,
	target
);