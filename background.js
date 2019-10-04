/* global chrome */

const queries = {
    nikkei: 'document.querySelectorAll(\'body > main > div.k-hub-body > div.k-layout__container > div > div > div > div > div.k-hub-card.k-hub-card--no-ellipsis > div > a\').forEach(v => window.open(v.href));',
    hackerNews: 'document.querySelectorAll(\'table.itemlist > tbody > tr.athing > td:nth-child(3) > a\')'
        + '.forEach((v, i) => { if (i < 10) window.open(v.href) });'
}

chrome.commands.onCommand.addListener((command) => {
    console.log(`Command: ${command}`)
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        console.log(`url: ${tabs[0].url}`)
        
        let code
        if (tabs[0].url.includes('https://www.nikkei.com/')) {
            code = queries.nikkei
        } else if (tabs[0].url.includes('https://news.ycombinator.com/')) {
            code = queries.hackerNews
        } else {
            console.log('match no URLs')
            return
        }
        
        console.log(`code: ${code}`)
        chrome.tabs.executeScript(tabs[0].id, { code })
    })
})
