let journalCollection = []

export const getEntries = () => {
  return fetch("http://localhost:3000/entries") 
    .then(response => response.json())  // Parse as JSON
    .then(entries => {
        console.table(entries)
     journalCollection= entries
    })
}

export const useJournalEntries = () => {
    const sortedByDate = journalCollection.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}