import events from "./articles/eventListeners.js"
import eventEventListeners from "./events/eventListeners.js"
import messageBoxEventListeners from "./messages/eventListeners.js"

events.openEvents()
events.entryEventListener()

eventEventListeners.openEvents()
messageBoxEventListeners.openEvents()

