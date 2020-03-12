import initializeDetailButtonEvents from './dialog.js';
import { getEntries, useJournalEntries } from './JournalDataProvider.js'
import JournalList from './JournalList.js'

useJournalEntries
getEntries()
JournalList()
initializeDetailButtonEvents()

