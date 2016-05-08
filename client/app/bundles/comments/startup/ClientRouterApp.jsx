import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import createStore from '../store/routerCommentsStore';
import routes from '../routes/routes';
import { syncHistoryWithStore } from 'react-router-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

export default (props, location) => {
  const store = createStore(props);

  // Create an enhanced history that syncs navigation events with the store
  const history = syncHistoryWithStore(
    browserHistory,
    store
  );

  return (
    <Provider store={store}>
      <Router history={history} children={routes} />
    </Provider>
  );
};
