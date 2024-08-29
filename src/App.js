import { connect, useDispatch, useSelector } from 'react-redux';
import './App.css';
import {
  decreaseCounter,
  increaseCounter,
} from "./redux/action/actions";
function App(props) {
  const dispatch = useDispatch();
  const newCount = useSelector((state) => {
    return state.counter
  })
  return (
    <div className="App">
      <div>Count: {newCount.count} and {newCount.name} </div>

      <button onClick={() => dispatch(increaseCounter())}>Increase Count</button>

      <button onClick={() => dispatch(decreaseCounter())}>Decrease Count</button>
    </div>
  )
}

// const mapStateToProps = state => {
//   return {
//     count: state.counter.count,
//     ten: state.counter.name
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   }
// }

export default (App)
