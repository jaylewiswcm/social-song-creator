import { combineReducers } from "redux";

import { user } from "./user/reducers";
import { playbarStatus } from "./playbar/reducers";
import { applicationReducer } from "./application/reducers";
import { project } from "./project/reducers";
import { workspace } from "./workspace/reducers";
import {profileReducer} from "./profile/reducers"
import {postReducer} from "./posts/reducers";

export const rootReducer = combineReducers({
  application : applicationReducer,
  user,
  profile: profileReducer,
  posts:postReducer,
  project,
  workspace,
  playbar: playbarStatus,
}); 

export type RootState = ReturnType<typeof rootReducer>