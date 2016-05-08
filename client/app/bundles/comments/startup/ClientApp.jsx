import React from 'react';
import { Provider } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

import createStore from '../store/commentsStore';
import NonRouterCommentsContainer from '../containers/NonRouterCommentsContainer';

export default props => {
  const store = createStore(props);
  return (
      <Provider store={store}>
        <NonRouterCommentsContainer />
      </Provider>
  );
};
