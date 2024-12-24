function showInfo(group) {
    const contentDiv = document.getElementById('content');
    const memeDiv = document.getElementById('meme');

    // Clear previous content
    contentDiv.innerHTML = '';
    memeDiv.innerHTML = '';

    // Set initial animation state
    contentDiv.style.opacity = 0;
    contentDiv.style.transform = 'translateY(30px)';

    setTimeout(() => {
        if (group === 'boys') {
            contentDiv.innerHTML = `
                <h2>For the Boys!</h2>
                <p>Wow, this year has been an amazing journey! We've grown, learned, and faced challenges together. From every small moment to every big achievement, you guys have made this experience unforgettable!</p>
            `;
            memeDiv.innerHTML = `
                <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `;
        } else if (group === 'girls') {
            contentDiv.innerHTML = `
                <h2>For the Girls!</h2>
                <p>To the amazing girls of our class, you are the embodiment of strength and beauty. You've made this journey colorful, filled with laughter, kindness, and endless memories. The future is yours!</p>
            `;
            memeDiv.innerHTML = `
                <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `;
        } else if (group === 'adviser') {
            contentDiv.innerHTML = `
                <h2>For Our Adviser!</h2>
                <p>Thank you for your wisdom and guidance throughout our high school journey. You've been a beacon of support, always there when we needed it the most. Your influence will stay with us forever.</p>
            `;
            memeDiv.innerHTML = `
                <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `;
        }

        // Trigger animations
        contentDiv.style.opacity = 1;
        contentDiv.style.transform = 'translateY(0)';
    }, 300); // Delay to allow for clearing content before updating
}
