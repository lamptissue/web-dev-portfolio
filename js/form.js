export function handleFormSubmit() {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const { firstName, lastName, email, subject, message } = event.target;

    const endpoint = "https://wc7ilba90j.execute-api.eu-west-2.amazonaws.com/default/sendContactEmail";
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
      body,
    };

    fetch(endpoint, requestOptions)
      .then((response) => {
        if (!response.ok) throw new Error("Error in fetch");
        return response.json();
      })
      .then((response) => {
        console.log("Name: ", firstName.value + " " + lastName.value);
        console.log("Subject: ", subject.value);
        console.log("Email: ", email.value);
        console.log("Message: ", message.value);
        firstName.value = "";
        lastName.value = "";
        subject.value = "";
        email.value = "";
        message.value = "";

        document.getElementById("result-text").innerText = "Email sent successfully!";
      })
      .catch((error) => {
        console.error(error);
        document.getElementById("result-text").innerText = "An unkown error occured.";
      });
  });
}
