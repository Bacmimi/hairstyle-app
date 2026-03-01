// YOUR REAL HAIRSTYLE PHOTOS - Replace these with your own images
const hairstyles = [
    {
        id: 1,
        name: "Style 1",
        image: "images/hairstyle1.jpg"  // You'll add your photos here
    },
    {
        id: 2,
        name: "Style 2",
        image: "images/hairstyle2.jpg"
    },
    {
        id: 3,
        name: "Style 3",
        image: "images/hairstyle3.jpg"
    },
    {
        id: 4,
        name: "Style 4",
        image: "images/hairstyle4.jpg"
    },
    {
        id: 5,
        name: "Style 5",
        image: "images/hairstyle5.jpg"
    },
    {
        id: 6,
        name: "Style 6",
        image: "images/hairstyle6.jpg"
    }
    // Add as many as you want!
];

// Display all hairstyles (PHOTOS ONLY)
function displayHairstyles() {
    const gallery = document.getElementById('hairstyle-gallery');
    
    hairstyles.forEach(style => {
        const card = document.createElement('div');
        card.className = 'hairstyle-card';
        
        card.innerHTML = `
            <img src="${style.image}" alt="Hairstyle by Me" loading="lazy">
        `;
        
        gallery.appendChild(card);
    });
}

// Load hairstyles when page opens
displayHairstyles();
