// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Пример изолированного запроса. Например, для записи чего в бд

var path = require('path');
var filename = path.basename(__filename);

export default function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: any): void; new(): any; }; }; }) {
    const {pid} = req.query

    const responseText = `
      methode: ${req.method}
      query: ${JSON.stringify(req.query)}
      cookies: ${JSON.stringify(req.cookies)}
      body: ${JSON.stringify(req.body)}
      filename: ${filename}
     `

    res.status(200).json({text: responseText});


}
