
const whitelist = ['http://localhost:3001']; //allowed domains

const corsOptions = (req, callback) => {
    let corsOptions;
    let isDomainAllowed = whitelist.indexOf(req.header('Origin')) !== -1;
    corsOptions = isDomainAllowed ? { origin: true } : { origin: false };
    callback(null, corsOptions);
}

module.exports = corsOptions;