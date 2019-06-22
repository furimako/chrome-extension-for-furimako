const nikkei = document.getElementById('nikkei')
const hackernews = document.getElementById('hackernews')

function onclickEvent(element) {
    const selector = element.target.value
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: `document.querySelectorAll('${selector}').forEach(v => window.open(v.href));` }
        )
    })
}

nikkei.onclick = onclickEvent
hackernews.onclick = onclickEvent
