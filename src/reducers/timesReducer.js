const fetchAPI = (date) => {
  return ["17:00", "18:00", "19:00"];
};

// Initialize available times for today's date
export const initializeTimes = () => {
  const today = new Date(); // Get today's date
  const availableTimes = fetchAPI(today);
  return availableTimes;
};

// Update available times based on the selected date
export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.payload;
    default:
      return state;
  }
};