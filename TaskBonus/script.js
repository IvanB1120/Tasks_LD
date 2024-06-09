document.addEventListener('DOMContentLoaded', function() {
    const flagImg = document.getElementById('flag-img');
    const changeButton = document.getElementById('button--change');
    const countryInput = document.getElementById('country-input');

    let currentCountry;

    function getRandomFlag() {
        const randomIndex = Math.floor(Math.random() * countries.length);
        return countries[randomIndex];
    }

    function setFlag(country) {
        currentCountry = country;
        flagImg.src = country.flag;
        flagImg.alt = country.name;
    }

    setFlag(getRandomFlag());

    changeButton.addEventListener('click', function() {
        const userGuess = countryInput.value.trim().toLowerCase();
        const correctAnswer = currentCountry.name.trim().toLowerCase();
        
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        if (userGuess === correctAnswer) {
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Correct answer!",
                showConfirmButton: false,
                timer: 2500
              });
        } else {
            Swal.fire({
                position: "top",
                icon: "error",
                title: `Wrong answer! Correct answer is <span class="correct-answer">${correctAnswer.charAt(0).toUpperCase() + correctAnswer.slice(1)}</span>`,
                showConfirmButton: true
              });
        }

        countryInput.value = '';

        setFlag(getRandomFlag());
    });
});
