function submitApplication(event) {
  event.preventDefault();
  try {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const resume =document.getElementById('resume').value;

    if(!name || !email || !resume) {
      throw new Error("All fields are required");
    }
    // Simulate sending application
    console.log(`Appliction submitted by ${name} (${email}) with resume: ${resume.name}`);
    alert("Application submitted successfully!");
} catch (error) {
  console.error("Error submitting application:",error);
  alert("Failed to submit application:" + error.message);
}
}

function sendInvoice(event) {
  event.preventDefault();
  try {
    const conatactEmail = document.getElementById('contact-email').value;
    const message = document.getElementById('message').value;

    if (!conatactEmail || !message) {
      throw new Error("All fields are required.");
    }
    // simulate sinding invoice
    console.log(`Invoice sent to ${conatactEmail} with message: ${message}`);
    alert("Invoice sent successfully!");
  } catch (error) {
    console.error("Error sending invoice");
    alert("Failed to send invoice:" + error.message);
  }
}