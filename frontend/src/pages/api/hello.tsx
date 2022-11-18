// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Пример изолированного запроса. Например, для записи чего в бд

export default function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { text: string }): void; new(): any; }; }; }) {
  res.status(200).json({ text: 'Hello' });
}
