document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const popCat = document.getElementById('popCat');
    const catClosed = document.getElementById('catClosed');
    const catOpen = document.getElementById('catOpen');
    const counter = document.getElementById('counter');
    const resetButton = document.getElementById('resetButton');
    
    // Initialize variables
    let popCount = 0;
    let isPopped = false;
    let isAutoPopping = false;
    
    // Update the counter display
    function updateCounter() {
        counter.textContent = popCount;
    }
    
    // Function to pop the cat
    function popTheCat() {

        // Increment count
        popCount++;
        updateCounter();
        
        // Show open mouth
        catClosed.classList.remove('visible');
        catClosed.classList.add('hidden');
        catOpen.classList.remove('hidden');
        catOpen.classList.add('visible');
        
        // Add pop animation
        popCat.classList.add('pop-animation');
        
        // Set popped state
        isPopped = true;
        
        // Reset after a short delay
        setTimeout(function() {
            if (!isAutoPopping) {
                unpopTheCat();
            }
        }, 200);
    }
    
    // Function to restore the cat to unpopped state
    function unpopTheCat() {
        // Hide open mouth
        catOpen.classList.remove('visible');
        catOpen.classList.add('hidden');
        catClosed.classList.remove('hidden');
        catClosed.classList.add('visible');
        
        // Remove pop animation
        popCat.classList.remove('pop-animation');
        
        // Reset popped state
        isPopped = false;
    }
    function handleInteraction(event) {
        if (event.type === 'touchstart') {
            event.preventDefault();
        }
        if (isAutoPopping) return;
        
        // Pop the cat
        popTheCat();
    }
    
    // Add event listeners for clicking/tapping
    popCat.addEventListener('mousedown', handleInteraction);
    popCat.addEventListener('touchstart', handleInteraction);
    
    // Reset button functionality
    resetButton.addEventListener('click', function() {
        popCount = 0;
        updateCounter();
        
        // Stop auto-popping if it's on
        if (isAutoPopping) {
            stopAutoPop();
        }
    });
    
    
    // Use keyboard space bar as an alternative way to pop
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            event.preventDefault(); // Prevent scrolling
            
            if (!isAutoPopping) {
                popTheCat();
            }
        }
    });


    // Initialize counter
    updateCounter();
});