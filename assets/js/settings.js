const options = [
    { value: 'default', title: 'Sunny\'s Gym', favicon: '/assets/img/brand/favicon.ico' },
    { value: 'canvas', title: 'Canvas Login | Instructure', favicon: '/assets/img/cloaked/canvas.ico' },
    { value: 'google', title: 'Google', favicon: '/assets/img/cloaked/google.ico' },
    { value: 'google drive', title: 'Home - Google Drive', favicon: '/assets/img/cloaked/drive.ico' },
    { value: 'gmail', title: 'Inbox (37)', favicon: '/assets/img/cloaked/gmail.ico' },
    { value: 'outlook', title: 'Mail - Outlook', favicon: '/assets/img/cloaked/outlook.ico' },
];

function changeFavicon(src) {
    const link = document.getElementById('favicon') || document.createElement('link');
    link.id = 'favicon';
    link.rel = 'icon';
    link.href = src;
    document.head.appendChild(link);
}

const faviconSelector = document.getElementById('favicon-selector');
faviconSelector.addEventListener('change', function() {
    const selectedValue = this.value;
    const selectedOption = options.find(option => option.value === selectedValue);
    if (selectedOption) {
        document.title = selectedOption.title;
        changeFavicon(selectedOption.favicon);
        localStorage.setItem('selectedOption', selectedValue);
    }
});

window.addEventListener('load', function() {
    const selectedValue = localStorage.getItem('selectedOption') || 'default';
    faviconSelector.value = selectedValue;
    const selectedOption = options.find(option => option.value === selectedValue);
    if (selectedOption) {
        document.title = selectedOption.title;
        changeFavicon(selectedOption.favicon);
    }
});

const setPanicKeyButton = document.getElementById('set-panic-key');
setPanicKeyButton.addEventListener('click', function() {
    const panicUrlInput = document.getElementById('panic-url');
    const panicUrl = panicUrlInput.value.trim();
    if (!panicUrl) {
        alert('Please enter a Panic URL.');
        return;
    }
    localStorage.setItem('panicUrl', panicUrl);

    alert('Press any key to set as your panic key.');
    function keyHandler(e) {
        const panicKey = e.key;
        localStorage.setItem('panicKey', panicKey);
        alert(`Panic key set to "${panicKey}".`);
        document.removeEventListener('keydown', keyHandler);
    }
    document.addEventListener('keydown', keyHandler);
});

document.addEventListener('keydown', function(e) {
    const panicKey = localStorage.getItem('panicKey');
    const panicUrl = localStorage.getItem('panicUrl');
    if (panicKey && panicUrl && e.key === panicKey) {
        window.location.href = panicUrl;
    }
});

var urlObj = new window.URL(window.location.href);
var url = window.location.href;
if (url) {
    var win;

    document.querySelector('#abcloak').onclick = function() {
        if (win) {
            win.focus();
        } else {
            win = window.open();
            win.document.body.style.margin = '0';
            win.document.body.style.height = '100vh';
            var iframe = win.document.createElement('iframe');
            iframe.style.border = 'none';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.margin = '0';
            iframe.src = url;
            win.document.body.appendChild(iframe);
            window.location.replace("https://www.khanacademy.org");
        }
    };
}
