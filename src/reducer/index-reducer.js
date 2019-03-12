import { combineReducers } from 'redux';

const calculate = (num1, num2) => {
  return {
    add: parseInt(num1) + parseInt(num2),
    sub: parseInt(num1) - parseInt(num2),
    div: parseFloat(num1) / parseFloat(num2),
    mul: parseFloat(num1) * parseFloat(num2)
  };
};
const arithmeticOperation = (state = { valueOne: 2, valueTwo: 2 }, action) => {
  switch (action.type) {
    case 'VALUE_ONE':
      return { ...state, ...calculate(action.value, state.valueTwo) };
    case 'VALUE_TWO':
      return { ...state, ...calculate(state.valueOne, action.value) };
    default:
      return { ...state, ...calculate(state.valueOne, state.valueTwo) };
  }
};
const postInformation = (state = { posts: [], isLoading: false, errorInfo: null }, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, isLoading: true };
    case 'POST_DATA_SUCCESS':
      return { ...state, posts: action.postData, isLoading: false };
    case 'POST_DATA_ERROR':
      return { ...state, posts: [], errorInfo: action.errorInfo, isLoading: false };
    default:
      return state;
  }
};
export const indexReducer = combineReducers({
  arithmeticOperation,
  postInformation
});
