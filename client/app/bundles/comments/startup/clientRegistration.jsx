import App from './ClientApp';
import RouterApp from './ClientRouterApp';
import HomeApp from './HomeApp';
import SimpleCommentScreen from '../components/SimpleCommentScreen/SimpleCommentScreen';
import ReactOnRails from 'react-on-rails';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

ReactOnRails.setOptions({
  traceTurbolinks: TRACE_TURBOLINKS, // eslint-disable-line no-undef
});

ReactOnRails.register(
  {
    App,
    RouterApp,
    HomeApp,
    SimpleCommentScreen,
  }
);
