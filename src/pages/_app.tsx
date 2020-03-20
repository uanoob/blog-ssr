import { NextPageContext } from 'next';
import App from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import store, { Store } from '../store/store';

interface AppContext extends NextPageContext {
  store: Store;
}

class MyApp extends App<AppContext> {
  render() {
    const { store, Component, ...props } = this.props;
    return (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    );
  }
}

export default withRedux(store)(MyApp);
