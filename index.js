// Discord webhook URL
const webhookUrl = "https://discordapp.com/api/webhooks/1076406136179273879/LZLjYQOoj2lT_S_OQUI1Y4KcjlQ6b3z4NwKhSA_3SFSSZzj6uiouInQzE7bBeFQ6bjfK";

// Function to send a message to the webhook
function sendMessage(message) {
  fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({content: message})
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to send message");
    }
  })
  .catch(error => {
    console.error(error);
  });
}

// Example usage: send a message
sendMessage("Hello, Discord!");
