const http = require("http");
const EventEmitter = require("eventemitter3");
const fs = require("fs");

const handler = require("./include/handler");


class WebServerHandler2 extends EventEmitter{
    constructor(){
        super();

        http.METHODS.forEach(method => {
            this[method.toLowerCase()] = (path, ...cbs) => {
                this.on(`${method} ${path}`, ...cbs);
            };
        });


        this.handler = handler;
    }
}

module.exports = function(){
    return new WebServerHandler2();
}