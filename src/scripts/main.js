import events from './tasks/eventListeners.js'
import eventEventListeners from "./events/eventListeners.js"
import messageBoxEventListeners from "./messages/eventListeners.js"

/*
    Import all the tools into main.js that are needed to display
    the initial UI to the user. Either the login form should appear
    or the dashboard should be rendered.
*/


eventEventListeners.openEvents()
messageBoxEventListeners.openEvents()

