document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
  
    try {
        const response = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
  
        const result = await response.json();
        if (response.ok) {
            alert(result.message);
            document.getElementById('contactForm').reset();
        } else {
            alert(result.error || "Something went wrong. Please try again.");
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        alert("Failed to submit the form. Please check your connection.");
    }
  });