const INITIAL_STATE = {
  login: {
    isLoggedinUser: false,
    isLoading: false,
    errors: [],
  },

  signup: {
    isLoggedinUser: false,
    isLoading: false,
    errors: [],
  },

  data: {
    houses: [],
    isLoading: false,
    isError: false,
  },

  details: {
    houses: [],
    isLoading: false,
    isError: false,
  },
};

export default INITIAL_STATE;
