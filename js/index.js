let dataCollector = document.querySelector('#data-collector')

dataCollector.addEventListener("submit", function(event) {
    event.preventDefault()
    
    let formData = new FormData(event.target)

    let userFirstName = formData.get("first-name")
    let userLastName = formData.get('last-name')
    let userEmail = formData.get("email")

    let updatedHtmlContent = `
        <h2>Thank you, ${userFirstName} ${userLastName}!</h2>

        <p>Your interaction with this page will help me become a better developer!</p>

        <p class="fine-print">Nothing was sent to: ${userEmail}</p>

    `
     
    dataCollector.innerHTML = updatedHtmlContent
})

