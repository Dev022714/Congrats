document.getElementById('surpriseButton').addEventListener('click', function() {
    const heartContainer = document.getElementById('heartContainer');
    const numHearts = 100;

    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement('div');
        heart.textContent = '💜';
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDelay = `${Math.random() * 1}s`;
        heartContainer.appendChild(heart);
    }
    document.getElementById('surpriseMessage').style.display = 'block';
    this.style.display = 'none';
});