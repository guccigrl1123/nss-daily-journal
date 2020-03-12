
const Journal = (journal) => {
    return `
        <div class="journal">
        <div class="journal__date">${journal.date}</div>
                <div>date: ${journal.species}</div>
                <div>concept: ${journal.concept}</div>
                <div>entry: ${journal.entry}</div>
                <div>mood: ${journal.mood}</div>
        </div>
    `
}

export default Journal