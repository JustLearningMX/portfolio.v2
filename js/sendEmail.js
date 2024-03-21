const sendEmail = (body) => {

    const { fullName, subject, userEmail, message } = body;
    const from = 'virtual.liga@gmail.com';

    Email.send({
        SecureToken : "842d730f-66ed-48f3-be3a-f24ffdc9c020",
        To : from,
        From : from,
        Subject : `Message from your web of ${userEmail}`,
        Body : message
    })
        .then(message => {
            if(message === "OK") {
                createSnackBar('Message sent successfully.');
            } else {
                createSnackBar('Error sending your message.');
                console.log(message);
            }
        })
        .catch(err => {
            createSnackBar('Error sending your message.');
            console.log(err)
        })
};

const form = document.querySelector(".main__contact__form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fullName = document.querySelector('.fullName').value;
    const subject = document.querySelector('.subject').value;
    const email = document.querySelector('.email').value;
    const message = document.querySelector('.textArea').value;
    const fullMessage = `Full Name: ${fullName} \n Email: ${email} \n Subject: ${subject} \n Message: ${message}`;
    sendEmail({ fullName, subject, userEmail: email, message: fullMessage });
    form.reset();
});
