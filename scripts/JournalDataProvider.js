/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data. Can't Touch This.
const journalCollection = [
    {
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },
    {
        date: "02/26/20",
        concept: "Git & Github",
        entry: "Through the group project Hello, World, we learned how to save and share our code with others.",
        mood: "Frustrated"
    },
    {
        date: "02/28/20",
        concept: "Javascript & EventListeners",
        entry: "We learned how to automate Event Listeners.",
        mood: "Pretty good"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journalCollection.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}