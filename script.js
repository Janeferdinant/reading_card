// Main JavaScript file for the application

document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for study mode cards
    if (document.querySelector('.study-mode')) {
        document.querySelectorAll('.reading-card').forEach(card => {
            card.addEventListener('click', function() {
                this.classList.toggle('active');
            });
        });
    }
    
    // Text highlighting functionality
    const enableTextHighlighting = () => {
        document.querySelectorAll('.card-text').forEach(textElement => {
            textElement.addEventListener('mouseup', function() {
                const selection = window.getSelection();
                if (selection.toString().length > 0) {
                    const range = selection.getRangeAt(0);
                    const newNode = document.createElement('mark');
                    try {
                        range.surroundContents(newNode);
                        selection.removeAllRanges();
                    } catch (e) {
                        console.warn('Cannot highlight overlapping elements', e);
                    }
                }
            });
        });
    };
    
    // Call the function to enable text highlighting when appropriate
    if (document.querySelector('.highlight-btn')) {
        document.querySelectorAll('.highlight-btn').forEach(btn => {
            btn.addEventListener('click', enableTextHighlighting);
        });
    }
    
    // Save cards progress to localStorage periodically
    const saveCardsProgress = () => {
        const cardStatuses = {};
        document.querySelectorAll('.reading-card').forEach(card => {
            const cardId = card.querySelector('.note-btn')?.dataset.cardId;
            if (cardId) {
                cardStatuses[cardId] = {
                    learned: card.classList.contains('card-learned'),
                    highlighted: card.classList.contains('highlighted'),
                    notes: document.getElementById(`note-${cardId}`)?.value || ''
                };
            }
        });
        
        localStorage.setItem('readingCardsProgress', JSON.stringify(cardStatuses));
    };
    
    // Set up auto-save every 30 seconds
    if (document.querySelector('.reading-card')) {
        setInterval(saveCardsProgress, 30000);
        
        // Also save on page unload
        window.addEventListener('beforeunload', saveCardsProgress);
    }
});

// Show tooltips for the application (requires Bootstrap)
const enableTooltips = () => {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
};

// Initialize tooltips when available
if (typeof bootstrap !== 'undefined') {
    enableTooltips();
}
