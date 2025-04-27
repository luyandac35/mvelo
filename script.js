// Example JavaScript code
document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('h1');
    heading.style.color = 'blue';
    backgroundColor = 'lightblue';
    document.body.style.backgroundColor = backgroundColor;
    async function getPikachu() {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }
    getPikachu();
    // Example of a console warning

    console.log('JavaScript is running and the heading color has been changed to blue!');
});