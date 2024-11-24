const options = [
    { value: 'default', title: 'Sunny\'s Gym', favicon: '/assets/img/brand/favicon.ico' },
    { value: 'canvas', title: 'Canvas Login | Instructure', favicon: '/assets/img/cloaked/canvas.ico' },
    { value: 'google', title: 'Google', favicon: '/assets/img/cloaked/google.ico' },
    { value: 'google drive', title: 'Home - Google Drive', favicon: '/assets/img/cloaked/drive.ico' },
    { value: 'gmail', title: 'Inbox (37)', favicon: '/assets/img/cloaked/gmail.ico' },
    { value: 'outlook', title: 'Mail - Outlook', favicon: '/assets/img/cloaked/outlook.ico' },
];

function changeFavicon(src) {
    let link = document.getElementById('favicon');
    if (!link) {
        link = document.createElement('link');
        link.id = 'favicon';
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = src;
}

function applySettings() {
    const selectedValue = localStorage.getItem('selectedOption') || 'default';
    const selectedOption = options.find(option => option.value === selectedValue);
    if (selectedOption) {
        document.title = selectedOption.title;
        changeFavicon(selectedOption.favicon);
    }

    const panicKey = localStorage.getItem('panicKey');
    const panicUrl = localStorage.getItem('panicUrl');
    if (panicKey && panicUrl) {
        document.addEventListener('keydown', function(e) {
            if (e.key === panicKey) {
                window.location.href = panicUrl;
            }
        });
    }
}

window.addEventListener('DOMContentLoaded', applySettings);
