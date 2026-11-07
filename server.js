const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let players = {};

app.post('/api/player/save', (req, res) => {
    const { playerId, playerName, x, y } = req.body;
    if (!playerId) {
        return res.status(400).json({ error: 'Player ID is required' });
    }
    players[playerId] = {
        playerName: playerName || 'Unknown',
        x: x || 0,
        y: y || 0,
        lastUpdated: Date.now()
    };
    res.json({ success: true, message: 'Player data saved successfully' });
});

app.get('/api/players', (req, res) => {
    res.json(players);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
