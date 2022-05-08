import axios from "axios"
// varaible to hold the result div
const formResults=document.getElementById("results")
// Update user interface
function updateUI (res) {
    formResults.innerHTML=`<h3>Text:  ${res.data.sentence_list[0].text} <h3> <br> 
    <h3>Score_tag: ${res.data.score_tag} </h3> <br> <h3>Agreement: ${res.data.agreement} </h3> <br>
    <h3>Subjectivity ${res.data.subjectivity} </h3> <br> <h3>Confidence: ${res.data.confidence} </h3> <br>
    <h3>Irony: ${res.data.irony} </h3> <br>`
};
//async function to make a Post request
function handleSubmit(event) {
    event.preventDefault()
    getData()
}
async function getData(){
        // take the url checkforurl function to check for it
        let userInput = document.getElementById('name').value
        Client.checkForUrl(userInput)
        const res =await axios.post('http://localhost:8081/add-api',{url:userInput}).then((res) => {
        console.log(res)
        console.log(res.data)
        updateUI(res)
    })
}
export { handleSubmit } 