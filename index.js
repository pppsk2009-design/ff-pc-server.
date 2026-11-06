const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('*', (req, res) => {
    console.log(`Request received from: ${req.url}`);
    res.json({
        "status": "success",
        "pc_logo": true,
        "version": "1.0.0",
        "message": "PC Logo Enabled Successfully"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
