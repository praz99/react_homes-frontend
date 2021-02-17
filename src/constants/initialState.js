const INITIAL_STATE = {
  login: {
    isLoggedInUser: false,
    isLoading: false,
    isError: false,
  },

  signup: {
    isLoggedInUser: false,
    isLoading: false,
    isError: false,
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
}

export default INITIAL_STATE;
