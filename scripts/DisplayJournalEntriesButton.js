const contentTarget = document.querySelector(".entries__button")
const eventHub = document.querySelector(".container")


contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "hideAllEntries") {
        // Create a custom event to tell any interested component that the user wants to see notes
        const allEntriesEvent = new CustomEvent("allEntriesClicked")

        // Dispatch it to event hub
        eventHub.dispatchEvent(allEntriesEvent)
    }
})

export const DisplayJournalEntriesButton = () => {
    contentTarget.innerHTML = "<button id='hideAllEntries'>Hide All Entries</button>"
}