// Fireworks
let fireworks;
try {
    fireworks = new Fireworks(document.getElementById('fireworks'), {
        autoresize: true,
        opacity: 0.6,
        acceleration: 1.1,
        friction: 0.95,
        gravity: 1.7,
        particles: 50,
        trace: 4,
        explosion: 5,
        boundaries: { top: 0, bottom: document.getElementById('fireworks').height, left: 0, right: document.getElementById('fireworks').width },
        sound: { enable: false },
        colors: ['#00b4d8', '#ff1493', '#e6e6fa', '#ffd700', '#ff7f50']
    });
    fireworks.start();
    setTimeout(() => fireworks.stop(), 3000);
} catch (e) {
    console.log('Fireworks failed—cosmic vibes still on!');
}

// Countdown
const birthday = new Date('April 4, 2025 00:00:00').getTime();
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = birthday - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s to Your Cosmic Bash, Ifemide!`;
    if (distance < 0) {
        countdownElement.textContent = "Happy Birthday, Ifemide! You Rule the Universe! 💙✨";
    }
}
setInterval(updateCountdown, 1000);

// Confetti Button
document.getElementById('confetti-btn').addEventListener('click', () => {
    if (fireworks) {
        fireworks.start();
        setTimeout(() => fireworks.stop(), 2000);
    }
});

// Wishes
document.getElementById('wish-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const wishText = document.querySelector('textarea').value;
    if (wishText) {
        const wish = document.createElement('p');
        wish.className = 'wish';
        wish.textContent = `“${wishText}” - A Cosmic Admirer 💕`;
        document.getElementById('wish-list').appendChild(wish);
        document.querySelector('textarea').value = '';
    }
});

// Heart Particles
try {
    particlesJS('heart-particles', {
        particles: {
            number: { value: 25, density: { enable: true, value_area: 800 } },
            color: { value: ['#00b4d8', '#ff1493', '#e6e6fa', '#ffd700', '#ff7f50'] },
            shape: { type: 'image', image: { src: 'https://i.imgur.com/5XzX9nQ.png', width: 32, height: 32 } },
            opacity: { value: 0.9, random: true },
            size: { value: 15, random: true },
            line_linked: { enable: false },
            move: { enable: true, speed: 3, direction: 'top', random: true, out_mode: 'out' }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
            modes: { repulse: { distance: 70 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });
} catch (e) {
    console.log('Particles failed—still shining for Ifemide!');
}