import { getPage, textParser } from "./helper/text-parser";

// Api ini digunakan untuk mengambil detail informasi artikel pada artikel list
export default async function handle(req, res) {
  try {
    // check apakah user mengirim page id
    if (!req.query.pageId) {
      res.status(400).json({
        message: "Page ID can't be null!",
      });
    }

    // fe akan mengirim token yang diambil dari notion akun masing masing user
    const token = (req.headers.authorization || '');

    // Memanggil helper request api notion untuk detail artikel
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
