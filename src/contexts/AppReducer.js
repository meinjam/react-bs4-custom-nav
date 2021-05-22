const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TEST':
      return {
        ...state,
        tests: [action.payload, ...state.tests],
      };
    case 'DELETE_TEST':
      return {
        ...state,
        tests: state.tests.filter((test) => test.id !== action.payload.id),
      };
    case 'DELETE_ALL_TEST':
      return {
        ...state,
        tests: [],
      };
    default:
      return state;
  }
};

export default AppReducer;
