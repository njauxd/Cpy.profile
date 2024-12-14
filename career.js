function apply(position) {
    alert(`You are applying for the position of ${position}.`);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const resume = document.getElementById('resume').files[0];
  
    try {
        if (!name || !email || !resume) {
            throw new Error("All fields are required.");
        }
        // Simulate form submission
        console.log("Form submitted successfully:", { name, email, resume });
        alert("Application submitted successfully!");
    } catch (error) {
        document.getElementById('error-message').innerText = error.message;
    }
  }
  