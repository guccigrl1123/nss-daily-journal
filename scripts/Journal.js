
const Journal = (journal) => {
    return `
        <div class="journal">
        <div class="journal__date">${journal.journalDate}</div>
                <div>concept: ${journal.Concepts}</div>
                <div>entry: ${journal.journalEntry}</div>
                <div>mood: ${journal.Mood}</div>
                <br>
        </div>
    `
}

export default Journal