const intitialState = {
    count: 0
  }
  
  const CounterReducer = (state=intitialState, action) => {
    switch (action.type) {
      case "INCREMENT1000":
        return {
          count: state.count + 1000
        }
      case "DECREMENT1000": 
        return {
          count: state.count - 1
        }
      default:
        return state
    }
  }
  
  export default CounterReducer