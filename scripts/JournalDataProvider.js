let journalCollection = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const entryStateChangedEvent = new CustomEvent("entryStateChanged")

    eventHub.dispatchEvent(entryStateChangedEvent)
}
// added 3/17
export const useEntries= () => journalCollection.slice()

export const getEntries = () => {
  return fetch("http://localhost:3000/entries") 
    .then(response => response.json())  // Parse as JSON
    .then(entries => {
        console.table(entries)
     journalCollection= entries
    })
}

export const recordJournalEntry = entry => {
    return fetch('http://localhost:3000/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}

export const useJournalEntries = () => {
    const sortedByDate = journalCollection.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}