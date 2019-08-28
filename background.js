/* global chrome */

const queries = {
    nikkei: 'document.querySelectorAll(\'#JSID_baseRefreshNxTop2 > div.m-miM09 > h3 > a\').forEach(v => window.open(v.href));'
        + 'document.querySelectorAll(\'#JSID_baseRefreshNxTop2 > div.m-miM10 > div > h3 > a\').forEach(v => window.open(v.href));',
    hackerNews: 'document.querySelectorAll(\'table.itemlist > tbody > tr.athing > td:nth-child(3) > a\')'
        + '.forEach((v, i) => { if (i < 10) window.open(v.href) });',
    google: 'document.querySelectorAll(\'div.srg > div.g > div > div > div:nth-child(1) > a\').forEach(v => window.open(v.href));'
}

chrome.commands.onCommand.addListener((command) => {
    console.log(`Command: ${command}`)
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let code
        if (tabs[0].url === 'https://www.nikkei.com/') {
            code = queries.nikkei
        } else if (tabs[0].url === 'https://news.ycombinator.com/') {
            code = queries.hackerNews
        } else if (tabs[0].url.includes('https://www.google.com/search')) {
            code = queries.google
        } else {
            console.log(`url: ${tabs[0].url}`)
            return
        }
        
        chrome.tabs.executeScript(tabs[0].id, { code })
    })
})
