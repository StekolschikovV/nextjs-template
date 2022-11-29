// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Пример изолированного запроса. Например, для записи чего в бд

var path = require('path');
var filename = path.basename(__filename);

const getIp = (req: any): string => {
    let ip;

    if (req.headers["x-forwarded-for"]) {
        ip = req.headers["x-forwarded-for"].split(',')[0]
    } else if (req.headers["x-real-ip"]) {
        ip = req.connection.remoteAddress
    } else {
        ip = req.connection.remoteAddress
    }

    return ip
}

export default function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: any): void; new(): any; }; }; }) {
    const {pid} = req.query

    console.log("+++", getIp(req))

    const responseText = `
      methode: ${req.method}
      query: ${JSON.stringify(req.query)}
      cookies: ${JSON.stringify(req.cookies)}
      body: ${JSON.stringify(req.body)}
      filename: ${filename}
     `

    res.status(200).json({text: responseText});


}
