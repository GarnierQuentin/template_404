const snowflakes = document.querySelector('.snowflake');

for (let index = 0; index < 200; index++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snow');
    snowflakes.appendChild(snowflake);
}