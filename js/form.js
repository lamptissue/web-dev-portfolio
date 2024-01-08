export function handleFormSubmit() {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const { firstName, lastName, email, subject, message } = event.target;

    const endpoint = "https://awful-gold-tweed-jacket.cyclic.app/submit";
    //use JSON.stringify here so the data can be sent as a string via HTTP
    const body = JSON.stringify({
      senderFirstName: firstName.value,
      senderLastName: lastName.value,
      senderSubject: subject.value,
      senderEmail: email.value,
      message: message.value,
    });
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    };

    fetch(endpoint, requestOptions)
      .then((response) => {
        if (!response.ok) throw new Error("Error in fetch");
        // Change here: use response.text() instead of response.json()
        return response.text();
      })
      .then((responseText) => {
        console.log("Response: ", responseText);
        document.getElementById("result-text").innerText = "Email sent successfully";

        // Resetting the form fields
        firstName.value = "";
        lastName.value = "";
        subject.value = "";
        email.value = "";
        message.value = "";
      })
      .catch((error) => {
        console.error(error);
        document.getElementById("result-text").innerText = "An unknown error occurred.";
      });
  });
}
