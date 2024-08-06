import { getPage, textParser } from "./helper/text-parser";

export default async function handle(req, res) {
  try{
    if (!req.query.pageId) {
      res.status(400).json({
        message: "Page ID can't be null!",
      });
    }
    const token = (req.headers.authorization || '');
    const response = await getPage(req.query.pageId, token);

    res.setHeader("Cache-Control", "no-store");
    res.status(response.code).json({
      message: response.message,
      data: response.data,
    });
  } catch (error) {
    return error;
  }
}
