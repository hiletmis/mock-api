import express from "express";
import * as mock from "./mock.service.js";

const router = express.Router();

router.get("/get/query", getQuery);
router.get("/get/header", getHeader);
router.get("/get/path/:id", getPath);
router.get("/get/cookie", getCookie);

router.post("/post/query", postQuery);
router.post("/post/header", postHeader);
router.post("/post/path/:id", postPath);
router.post("/post/cookie", postCookie);

function getCookie(req, res, next) {
    mock
        .getCookie(req)
        .then(function (result) {
            res.json(result);
        })
        .catch((err) => next(err));
}

function getPath(req, res, next) {
    mock
        .getPath(req)
        .then(function (result) {
            res.json(result);
        })
        .catch((err) => next(err));
}

function getHeader(req, res, next) {
    mock
        .getHeader(req)
        .then(function (result) {
            res.json(result);
        })
        .catch((err) => next(err));
}

function getQuery(req, res, next) {
    mock
        .getQuery(req)
        .then(function (result) {
            res.json(result);
        })
        .catch((err) => next(err));
}

function postCookie(req, res, next) {
    mock
        .postCookie(req)
        .then(function (result) {
            res.json(result);
        })
        .catch((err) => next(err));
}

function postPath(req, res, next) {
    mock
        .postPath(req)
        .then(function (result) {
            res.json(result);
        })
        .catch((err) => next(err));
}

function postHeader(req, res, next) {
    mock
        .postHeader(req)
        .then(function (result) {
            res.json(result);
        })
        .catch((err) => next(err));
}

function postQuery(req, res, next) {
    mock
        .postQuery(req)
        .then(function (result) {
            res.json(result);
        })
        .catch((err) => next(err));
}

export default router;
