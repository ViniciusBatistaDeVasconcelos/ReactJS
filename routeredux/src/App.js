import { Provider } from 'react-redux'
import { store } from './store/configureStore'

import Routes from './routes'

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;