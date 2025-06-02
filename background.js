chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "sendEmail",
    title: "Send Email via n8n",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "sendEmail") {
    const selectedEmail = info.selectionText.trim();
    chrome.storage.local.set({ selectedEmail }, () => {
      chrome.action.openPopup();
    });
  }
});