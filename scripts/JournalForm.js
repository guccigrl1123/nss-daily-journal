import { recordJournalEntry } from "./JournalDataProvider.js"

const contentTarget = document.querySelector(".journalForm")

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "recordJournalEntry") {

        const journalDate = document.querySelector("#journalDate").value
        const Concepts = document.querySelector("#Concepts").value
        const journalEntry = document.querySelector("#journalEntry").value
        const Mood = document.querySelector("#Mood").value

        console.log(Concepts)
        // const journalEntry = document.querySelector("#journalEntry").value

        // Make a new object representation of a note
        const newEntry = {
            journalDate: journalDate,
            Concepts: Concepts,
            journalEntry: journalEntry,
            Mood: Mood

        }

        // Change API state and application state
        recordJournalEntry(newEntry)
    }
})

const render = () => {
    contentTarget.innerHTML = `
<form action="">
    <fieldset>
    <label for="journalDate">Date of entry</label>
    <br>
    <input type="date" name="journalDate" id="journalDate">
</fieldset>
<fieldset>
    <label for="Concepts">Concepts covered</label>
    <br>
    <input type="text" name="Concepts" id="Concepts">
</fieldset>
<fieldset>
    <label for="journalEntry">Journal Entry</label>
    <br>
    <textarea id="journalEntry"></textarea>
</fieldset>
<fieldset>
    <label for="Mood">Mood for the day</label>
    <br>
    <select id= "Mood">
            <Option>Sad</Option>
            <Option>Happy</Option>
            <Option>Nervous</Option>
            <Option>Frustrated</Option>
            <Option>Depressed</Option>
            <Option>Anxious</Option>
            <Option>Joyful</Option>
            <Option>Ok</Option>
            <Option>Pissed</Option>
    </select>
</fieldset>
</form>
    <button id="recordJournalEntry">Record Journal Entry</button>
    `
}

const JournalForm = () => {
    render()
}

export default JournalForm