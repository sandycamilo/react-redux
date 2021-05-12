import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import NewTimer from './components/NewTimer'
import ListTimers from './components/ListTimers'
import { update } from './actions'
import { loadState, saveState } from './utils'
import throttle from 'lodash/throttle'

const persistedState = loadState()
const store = createStore(reducers, persistedState)
store.subscribe(throttle(() => {
  saveState(store.getState())
}, 1000));

// const store = createStore(reducers);

let lastUpdateTime = Date.now()
setInterval(() => {
  const now = Date.now()
  const deltaTime = now - lastUpdateTime
  lastUpdateTime = now
  store.dispatch(update(deltaTime))
}, 50)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <h1 className="title">timers</h1>
          <NewTimer />
        <div className="allTimers">
          <ListTimers />
        </div> 
      </div>
    </Provider>
  );
}

export default App;
