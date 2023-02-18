// Replace WEBHOOK_URL with your actual webhook URL
const webhookUrl = 'https://discordapp.com/api/webhooks/1076406136179273879/LZLjYQOoj2lT_S_OQUI1Y4KcjlQ6b3z4NwKhSA_3SFSSZzj6uiouInQzE7bBeFQ6bjfK';

// Define the message content as a JSON payload
const payload = {
  content: 'Hello, world!'
};

// Send the message to the webhook
fetch(webhookUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(payload)
})
  .then(response => console.log(response))
  .catch(error => console.error(error));
