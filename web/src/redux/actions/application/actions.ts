import { 
  ApplicationTypes,
  Application,
  CLOSE_POST_PANEL,
  CLOSE_SETTINGS_PANEL,
  INIT_PROJECT,
  SET_APP_LOCATION,
  TOGGLE__NOTIFICATIONS,
  TOGGLE__CONTRIBUTORS,
  TOGGLE_SEARCH} from "./types";

import { Dispatch } from "redux"


export const setAppLocation = (location: Application) => (dispatch: Dispatch<ApplicationTypes>) => {
  dispatch({
    type: SET_APP_LOCATION,
    payload: location
  })
}

export const closePostPanel = (payload: Application) => (dispatch: Dispatch<ApplicationTypes>) => {
  dispatch({
    type:  CLOSE_POST_PANEL,
    payload: payload
  })
}

export const closeSettingsPanel = (payload: Application) => (dispatch: Dispatch<ApplicationTypes>) => {
  dispatch({
    type: CLOSE_SETTINGS_PANEL,
    payload: payload
  })
}

export const toggleNotifications = (payload: Application) => (dispatch: Dispatch<ApplicationTypes>) => {
  dispatch({
    type: TOGGLE__NOTIFICATIONS,
    payload: payload
  })
}


export const intialiseProject = (payload: Application) => (dispatch: Dispatch<ApplicationTypes>) => {
  dispatch({
    type: INIT_PROJECT,
    payload: payload
  })
}

export const toggleContributors = (payload: Application) => (dispatch: Dispatch<ApplicationTypes>) => {
  dispatch({
    type: TOGGLE__CONTRIBUTORS,
    payload: payload
  })
}

export const toggleSearch = (payload: Application) => (dispatch: Dispatch<ApplicationTypes>) => {
  dispatch({
    type: TOGGLE_SEARCH,
    payload: payload
  })
}
