const validApiKeys = process.env.API_KEY;

const apiKeyMiddleware = (req, res, next) => {
    const apiKey = req.get('API-Key');
    if (!apiKey || !validApiKeys.includes(apiKey)) {
        return res.status(401).json({ error: 'Invalid API Key' });
    }
    next();
}

module.exports = apiKeyMiddleware;