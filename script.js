console.log("Systems operational.");

// 1. Setup Parallax Universe
const universeEl = document.getElementById('universe');
const PARALLAX_SPEED = 0.3; 

// Calculate how much the user can scroll based on the HTML content
const maxScroll = document.body.scrollHeight - window.innerHeight;

// Set universe height
const universeHeight = window.innerHeight + (maxScroll * PARALLAX_SPEED);
universeEl.style.height = `${universeHeight}px`;

function createStars() {
    const starCount = 2400; // Tripled from 800

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        const size = Math.pow(Math.random(), 3) * 3 + 1;
        const opacity = (size / 4) + (Math.random() * 0.2);

        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.opacity = Math.min(opacity, 1);

        universeEl.appendChild(star);
    }
}

createStars();

// 2. The Smooth Parallax Loop
function animate() {
    const scrolled = window.scrollY;
    universeEl.style.transform = `translate3d(0, -${scrolled * PARALLAX_SPEED}px, 0)`;
    requestAnimationFrame(animate);
}

animate();