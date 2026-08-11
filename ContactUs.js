document.addEventListener("DOMContentLoaded", function() {
    
    const form = document.querySelector('form');
    const clearButton = form.querySelector('input[type="reset"]');
    const submitButton = form.querySelector('input[type="submit"]');

    clearButton.addEventListener('click', function(event) {
        event.preventDefault();
        form.reset();
    });

    submitButton.addEventListener('click', function(event) {
        const requiredFields = form.querySelectorAll('[required]');
        let isFormValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isFormValid = false;
                alert(`${field.previousElementSibling.textContent} cannot be empty!`);
            }
        });

        if (!isFormValid) {
            event.preventDefault();
        }
    });
});
