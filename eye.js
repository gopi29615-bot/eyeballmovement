const eyes = document.querySelectorAll(".eye");

document.addEventListener("mousemove", function (event) {

    eyes.forEach(function (eye) {

        const ball = eye.querySelector(".ball");

        const eyeBounds = eye.getBoundingClientRect();

        // Find the center of the eye
        const eyeCenterX = eyeBounds.left + eyeBounds.width / 2;
        const eyeCenterY = eyeBounds.top + eyeBounds.height / 2;

        // Mouse position relative to eye center
        const mouseX = event.clientX - eyeCenterX;
        const mouseY = event.clientY - eyeCenterY;

        // Calculate angle
        const angle = Math.atan2(mouseY, mouseX);

        // Maximum distance the pupil can move in each direction
        const maxX = (eyeBounds.width - ball.offsetWidth) / 2;
        const maxY = (eyeBounds.height - ball.offsetHeight) / 2;

        // Scale the angle to stay inside the eye's oval shape
        const distance = Math.min(
            Math.sqrt(mouseX * mouseX + mouseY * mouseY),
            Math.sqrt(maxX * maxX + maxY * maxY)
        );
        const x = Math.cos(angle) * Math.min(distance, maxX);
        const y = Math.sin(angle) * Math.min(distance, maxY);

        // Move the eyeball
        ball.style.transform =
            `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    });

});
