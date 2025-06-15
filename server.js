// server.js
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json()); // to parse JSON body

app.post('/webhook', async (req, res) => {
    const { name, phone } = req.body;

    console.log('Received:', name, phone);

    // Example: Send a WhatsApp message via third-party API (customize this)
    try {
        await axios.post('https://api.your-whatsapp-provider.com/send', {
            to: phone,
            message: `Hello ${name}, thank you for registering!`
        });
        res.status(200).send('Success');
    } catch (err) {
        console.error('Error sending message:', err);
        res.status(500).send('Error sending message');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
