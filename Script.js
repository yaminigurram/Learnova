function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
}

function updateProgress(value) {
    document.getElementById('progress-fill').style.width = value + '%';
    document.getElementById('progress-text').innerText = value + '%';
}


setTimeout(() => updateProgress(70), 3000);
