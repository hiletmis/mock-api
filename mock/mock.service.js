
export async function getCookie(req) {
    var cookie = getcookie(req);
    return { cookie: cookie, name: "cookie" };
}

export async function getPath(req) {
    return { id: req.params.id, name: "path" };
}

export async function getHeader(req) {
    console.log(req.headers);
    return { id: req.headers, name: "header" };
}

export async function getQuery(req) {
    return { id: req.query.id, name: "query" };
}

export async function postCookie(req) {
    var cookie = getcookie(req);
    return { cookie: cookie, name: "cookie post" };
}

export async function postPath(req) {
    return { id: req.params.id, name: "path post" };
}

export async function postHeader(req) {
    console.log(req.headers);
    return { id: req.headers, name: "header post" };
}

export async function postQuery(req) {
    return { id: req.query.id, name: "query post" };
}

function getcookie(req) {
    var cookie = req.headers.cookie;
    return cookie.split('; ');
}