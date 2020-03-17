
import {useJournalEntries, useEntries, getEntries} from "./JournalDataProvider.js"
import Journal from "./Journal.js"


const contentTarget = document.querySelector(".journalEntries")
const eventHub = document.querySelector(".container")

    

let visibility = true

eventHub.addEventListener("allEntriesClicked", customEvent => {
    visibility = !visibility
    console.log("taco")
    if (visibility) {
        console.log("visibility===true")
        contentTarget.classList.remove("invisible")
    }
    else {
        console.log("visibility===false")
        contentTarget.classList.add("invisible")
    }
})

eventHub.addEventListener("entryStateChanged", customEvent => {
    render()
})

const render = () => {
    getEntries().then(() => {
        const allTheEntries = useEntries()
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