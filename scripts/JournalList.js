
import {useJournalEntries} from "./JournalDataProvider.js"
import Journal from "./Journal.js"

// Import `useFish` from the data provider module

const JournalList = () => {
    console.log("hi")

    // Get a reference to the `<article class="content">` element

    // get the data from the provider

    const journals = useJournalEntries()
    
    // iterate the array
    const contentElement = document.querySelector(".journalList")

    for (const journalObject of journals) {
        //convert each object to HTML representation 
        contentElement.innerHTML += Journal(journalObject)
    }
    
    // put HTML in DOM 
  
}

export default JournalList 