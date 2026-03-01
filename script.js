// Sample hairstyle data - REPLACE THESE WITH YOUR ACTUAL PHOTOS
const hairstyles = [
    {
        id: 1,
        name: "Elegant Updo",
        description: "Perfect for weddings and special occasions",
        price: "$85",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400"
    },
    {
        id: 2,
        name: "Beach Waves",
        description: "Casual, breezy waves for a relaxed look",
        price: "$65",
        image: "https://images.unsplash.com/photo-1485872299829-c673f5194813?w=400"
    },
    {
        id: 3,
        name: "Classic Bob",
        description: "Timeless and elegant shoulder-length cut",
        price: "$55",
        image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400"
    },
    {
        id: 4,
        name: "Braided Crown",
        description: "Bohemian style braids wrapped around the head",
        price: "$75",
        image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400"
    }
];

// Display all hairstyles
function displayHairstyles() {
    const gallery = document.getElementById('hairstyle-gallery');
    
    hairstyles.forEach(style => {
        const card = document.createElement('div');
        card.className = 'hairstyle-card';
        card.onclick = () => showHairstyleDetails(style);
        
        card.innerHTML = `
            <img src="${style.image}" alt="${style.name}">
            <div class="hairstyle-info">
                <h3>${style.name}</h3>
                <p>${style.description}</p>
                <span class="price-tag">${style.price}</span>
            </div>
        `;
        
        gallery.appendChild(card);
    });
}

// Show details when customer clicks a hairstyle
function showHairstyleDetails(style) {
    // Create modal if it doesn't exist
    let modal = document.getElementById('hairstyle-modal');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'hairstyle-modal';
        modal.className = 'modal';
        document.body.appendChild(modal);
    }
    
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn" onclick="closeModal()">&times;</span>
            <img src="${style.image}" alt="${style.name}" style="width: 100%; border-radius: 10px; margin-bottom: 20px;">
            <h2>${style.name}</h2>
            <p style="margin: 15px 0;">${style.description}</p>
            <p style="font-size: 1.5em; color: #667eea; font-weight: bold;">${style.price}</p>
            <button class="select-btn" onclick="selectHairstyle(${style.id})">Select This Style</button>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    document.getElementById('hairstyle-modal').style.display = 'none';
}

// Handle customer selection
function selectHairstyle(id) {
    const selected = hairstyles.find(style => style.id === id);
    alert(`Thank you for selecting ${selected.name}! I'll contact you to schedule your appointment.`);
    closeModal();
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('hairstyle-modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Load hairstyles when page opens
displayHairstyles();