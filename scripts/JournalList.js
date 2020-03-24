
import {useJournalEntries, useEntries, getEntries, deleteEntry} from "./JournalDataProvider.js"
import Journal from "./Journal.js"


const contentTarget = document.querySelector(".journalEntries")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
       deleteEntry(id).then(
           () => {
               const updatedEntries = useEntries()
               render(updatedEntries)
           }
       )
    }
})

let visibility = true

eventHub.addEventListener("allEntriesClicked", customEvent => {
    visibility = !visibility
    if (visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }
})

eventHub.addEventListener("entryStateChanged", customEvent => {
    render()
})

const render = () => {
    getEntries().then(() => {
        const allTheEntries = useEntries().reverse()
        contentTarget.innerHTML = allTheEntries.map(
            currentJournalObject => {
                return Journal(currentJournalObject)
            }
        ).join("")
    })
}

const JournalList = () => {
    
    render()
}

export default JournalList 