// Google Analytics setup
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

// Video progress tracking
const video = document.getElementById('test-video');
const milestones = [25, 50, 75, 100]; // Percentage milestones
let milestonesTracked = new Set();

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

video.addEventListener('timeupdate', () => {
    const currentTime = video.currentTime;
    const duration = video.duration;

    if (!duration) return; // Prevent division by zero
    const percentWatched = Math.floor((currentTime / duration) * 100);

    milestones.forEach(milestone => {
        if (percentWatched >= milestone && !milestonesTracked.has(milestone)) {
            milestonesTracked.add(milestone);
            console.log(`Reached ${milestone}% of the video.`);
            gtag('event', 'video_progress', {
                event_category: 'Video',
                event_label: 'Test Video',
                progress: `${milestone}%`,
            });
        }
    });
});

video.addEventListener('ended', () => {
    console.log('Video ended.');
    gtag('event', 'ended', {
        event_category: 'Video',
        event_label: 'Test Video',
    });
});
