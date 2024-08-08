import { textParser } from "./helper/text-parser";

// api ini digunakan untuk mengambil data list category
export default async function handle(req, res) {
  try {
    if (!req.query.pageId) {
      res.status(400).json({
        message: "Page ID can't be null!",
      });
    };

    //  fe akan mengirim token yang diambil dari notion akun masing masing user
    const token = (req.headers.authorization || '');

    // memanggil helper untuk melakukan formating response dari notion agar mudah di gunakan
    const resp = await textParser(false, req.query.pageId, token);
    
    
    let response = [];
    
    // memanggil helper kembali untuk masing masing categories agar mendapatkan jumlah list artikel yang tersedia
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
