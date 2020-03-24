
const Journal = (journal) => {
    return `
        <div class="journal">
        <h2 class="journal__date">${journal.journalDate}</h2>
                <div>concept: ${journal.Concepts}</div>
                <div>entry: ${journal.journalEntry}</div>
                <div>mood: ${journal.Mood}</div>
                <button class = "button" id="deleteNote--${journal.id}">Delete</button>
                <br>
                <br>
        </div>
    `
}

export default Journal

