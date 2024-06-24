import { textParser } from "./helper/text-parser";

export default async function handle(req, res) {
  try {
    if (!req.query.pageId) {
      res.status(400).json({
        message: "Page ID can't be null!",
      });
    }

    const resp = await textParser(true, req.query.pageId);

    res.setHeader("Cache-Control", "no-store");
    res.status(200).json({
      message: "Successfully get page content!",
      data: resp,
    });
  } catch (error) {
    console.error(error);
  }
}
