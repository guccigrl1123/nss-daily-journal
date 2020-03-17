import initializeDetailButtonEvents from './dialog.js';
import { getEntries, useJournalEntries } from './JournalDataProvider.js'
import JournalList from './JournalList.js'
import JournalForm from './JournalForm.js';
import "./JournalList.js"
import { DisplayJournalEntriesButton } from './DisplayJournalEntriesButton.js';

JournalForm()
useJournalEntries()
getEntries()
JournalList()
initializeDetailButtonEvents()
DisplayJournalEntriesButton()

