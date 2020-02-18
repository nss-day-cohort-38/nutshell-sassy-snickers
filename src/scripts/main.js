import apiActions from "./articles/newsApi.js"
import renderNewsEntries from "./articles/newsDOM.js"
import events from "./articles/eventListeners.js"
import openEvents from "./articles/eventListeners.js"

events.openEvents()
events.entryEventListener()