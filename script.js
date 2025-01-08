// Google Analytics setup
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'YOUR_TRACKING_ID');

// Video play tracking
const video = document.getElementById('test-video');

video.addEventListener('play', () => {
    console.log('Video started playing.');
    gtag('event', 'play', {
        event_category: 'Video',
        event_label: 'Test Video',
    });
});

video.addEventListener('pause', () => {
    console.log('Video paused.');
    gtag('event', 'pause', {
        event_category: 'Video',
        event_label: 'Test Video',
    });
});

video.addEventListener('ended', () => {
    console.log('Video ended.');
    gtag('event', 'ended', {
        event_category: 'Video',
        event_label: 'Test Video',
    });
});
