document.getElementById("sendBtn").addEventListener("click", () => {
  const template = document.getElementById("templateSelect").value;

  chrome.storage.local.get("selectedEmail", async (data) => {
    const email = data.selectedEmail;
    if (!email) return alert("No email selected.");

    const webhookUrl = "http://localhost:5678/webhook-test/13a6b49b-5d44-4412-b174-7728bea3e57c";

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, template })
      });

      if (response.ok) {
        alert("✅ Email Sent!");
      } else {
        alert("❌ Failed to send email.");
      }
    } catch (error) {
      console.error("Send error:", error);
      alert("⚠️ Error sending email.");
    }
  });
});