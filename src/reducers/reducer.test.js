import { initializeTimes, updateTimes } from './timesReducer';

test('initializeTimes returns the correct expected value', () => {
  const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
  const result = initializeTimes();
  expect(result).toEqual(expectedTimes);
});

test('updateTimes returns the updated value based on the action', () => {
  const initialState = ["17:00", "18:00", "19:00"];
  const updatedTimes = ["18:00", "19:00", "20:00"];
  const action = { type: "UPDATE_TIMES", payload: updatedTimes };
  const result = updateTimes(initialState, action);
  expect(result).toEqual(updatedTimes);
});

test('updateTimes returns the current state for unknown action types', () => {
  const initialState = ["17:00", "18:00", "19:00"];
  const action = { type: "UNKNOWN_ACTION", payload: ["20:00", "21:00"] };
  const result = updateTimes(initialState, action);
  expect(result).toEqual(initialState);
});

test('updateTimes handles empty initial state', () => {
  const initialState = [];
  const updatedTimes = ["18:00", "19:00", "20:00"];
  const action = { type: "UPDATE_TIMES", payload: updatedTimes };
  const result = updateTimes(initialState, action);
  expect(result).toEqual(updatedTimes);
});