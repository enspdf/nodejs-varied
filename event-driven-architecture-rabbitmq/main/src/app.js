"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var typeorm_1 = require("typeorm");
var amqp = require("amqplib/callback_api");
typeorm_1.createConnection().then(function (db) {
    amqp.connect("amqps://ohsihqoh:HWieklFgIFyFfQ1-owGBohT6LItIkz4H@beaver.rmq.cloudamqp.com/ohsihqoh", function (error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function (error1, channel) {
            if (error1) {
                throw error1;
            }
            channel.assertQueue("hello", {});
            var app = express();
            app.use(cors({
                origin: [
                    "http://localhost:3000",
                    "http://localhost:8080",
                    "http://localhost:4200",
                ],
            }));
            app.use(express.json());
            channel.consume("hello", function (msg) {
                console.log(msg.content.toString());
            });
            app.listen(8001, function () { return console.log("Listening on port 8001"); });
            process.on("beforeExit", function () {
                console.log("closing");
                connection.close();
            });
        });
    });
});
