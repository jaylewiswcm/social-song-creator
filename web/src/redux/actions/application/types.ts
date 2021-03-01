export const SET_APP_LOCATION = "SET_APP_LOCATION";
export const CLOSE_POST_PANEL = "CLOSE_POST_PANEL";
export const CLOSE_SETTINGS_PANEL = "CLOSE_SETTINGS_PANEL";
export const TOGGLE__NOTIFICATIONS = "TOGGLE__NOTIFICATIONS";
export const INIT_PROJECT = "INIT_PROJECT";
export const TOGGLE__CONTRIBUTORS = "TOGGLE__CONTRIBUTORS";
export const TOGGLE_SEARCH = "TOGGLE_SEARCH";


export interface Application {
  location : string
  postPanel : boolean
  projectPanel: boolean
  settingsPanel: boolean
  notificationPanel: boolean
  contributorsPanel: boolean
  searchPanel: boolean
}

interface setAppLocation  {
  type:typeof SET_APP_LOCATION,
  payload: Application
}


interface closePostPanel  {
  type:typeof CLOSE_POST_PANEL,
  payload: Application
}

interface intialiseProject {
  type: typeof INIT_PROJECT
  payload: Application
}

interface closeSettingsPanel  {
  type:typeof CLOSE_SETTINGS_PANEL,
  payload: Application
}

interface toggleNotification  {
  type:typeof TOGGLE__NOTIFICATIONS,
  payload: Application
}

interface toggleContributors {
  type: typeof TOGGLE__CONTRIBUTORS,
  payload : Application
}

interface toggleSearch {
  type: typeof TOGGLE_SEARCH,
  payload : Application
}

export type ApplicationTypes = setAppLocation | closePostPanel | closeSettingsPanel | intialiseProject |toggleNotification |toggleContributors | toggleSearch;