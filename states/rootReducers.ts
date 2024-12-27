import { combineReducers } from '@reduxjs/toolkit';

import settingReducer from './reducers/settingReducer';

const rootReducer = combineReducers({
  setting: settingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;