const res_extends = require("./res-extends");

module.exports = (req, res) => {
    res = res_extends(res);


    try{
        this.emit(`${req.method} ${req.url}`, req, res);
    }catch(err){
        try{
            this.emit("error", req, res);
        }catch(err){
            res.write("URL Not Found!");
        }
    };

    res.end();
}