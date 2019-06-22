chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: { hostEquals: 'www.nikkei.com' }
                })],
                actions: [new chrome.declarativeContent.ShowPageAction()]
            },
            {
                conditions: [new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: { hostEquals: 'news.ycombinator.com' }
                })],
                actions: [new chrome.declarativeContent.ShowPageAction()]
            }
        ])
    })
})
