'use strict';

const chalk = require('chalk');

{
    const express = require('express');
    const router = express.Router();

    router.get("/", (req, res, next) => {
        const search = req.query.explore
        const data = {
            title: "Hello Express!",
            content: search
        }
        console.log(chalk.blue("青色のログ"));
        res.render("hello", data);
    });

    module.exports = router;
}