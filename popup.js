var getSelectedTab = (tab) => {
    var tabId = tab.id;
    var sendMessage = (messageObj) => chrome.tabs.sendMessage(tabId, messageObj);
    document.getElementById('check').addEventListener('click', () => sendMessage({ action: 'CHECK' }));
    document.getElementById('hide').addEventListener('click', () => sendMessage({ action: 'HIDE' }));
    document.getElementById('show').addEventListener('click', () => sendMessage({ action: 'SHOW' }));
}
chrome.tabs.getSelected(null, getSelectedTab);