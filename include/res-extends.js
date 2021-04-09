module.exports = (res) => {
    res.send = (content) => {
        res.write(String(content));
    };
    res.sendFile = (file) => {
        res.send(fs.readFileSync(file));
    };
    res.json = (json) => {
        res.send(JSON.stringify(json));
    };

    return res;
}