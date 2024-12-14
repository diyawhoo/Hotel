document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const rooms = document.getElementById('rooms').value;

    // Display confirmation message
    const confirmationMessage = `Thank you, ${name}! Your booking from ${checkin} to ${checkout} for ${rooms} room(s) has been confirmed.`;
    document.getElementById('confirmationMessage').innerText = confirmationMessage;
    document.getElementById('confirmation').classList.remove('hidden');

    // Optionally, reset the form
    document.getElementById('bookingForm').reset();
});