import { textParser } from "./helper/text-parser";




export default async function handle(req, res) {
  try {
    if (!req.query.pageId) {
      res.status(400).json({
        message: "Page ID can't be null!",
      });
    };

    const token = (req.headers.authorization || '');

    const resp = await textParser(false, req.query.pageId, token);
    
    
    let response = [];
    
    for (const res of resp) {
      const countResp = await textParser(false, res.id, token)
      
      if (res?.id === countResp?.[0]?.parentId)
      {
        response.push({
          ...res,
          count: countResp.length
        })
      }
      else
      {
        response.push({
          ...res,
          count: 0
        })
      }
    }
    
    res.setHeader("Cache-Control", "no-store");
    res.status(200).json({
      message: "Successfully get page list!",
      data: response,
    });
  } catch (error) {
    console.error(error);
  }
}
