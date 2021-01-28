module.exports = {
    "api": {
        "token": process.env.TELEGRAM_BOT_API_TOKEN
    },

    "plugins": {
        "loadAll": false,
        "register": ["richard-stallman"],
        "autoEnabled": ["richard-stallman"],
    }
}
