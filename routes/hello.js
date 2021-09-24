'use strict';

{
    const express = require('express');
    const router = express.Router();

    router.get("/", (req, res, next) => {
        const search = req.query.explore
        const data = {
            title: "Hello Express!",
            content: search
        }
        res.render("hello", data);
    });

    module.exports = router;
}