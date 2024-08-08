
import prisma from "@/lib/prismaClient"

// Api ini digunakan untuk melakukan request token dan informasi terkait akun notion yang melakukan integrasi
export default async function handle(req, res)
{
    try
    {
        // check apakan code dan dan user id yang di kirim ada
        if (!req.query.code) {
            res.status(400).json({
              message: "Page ID can't be null!",
            });
          }
        if (!req.query.id) {
            res.status(400).json({
              message: "ID can't be null!",
            });
          }
        
        // request api ke notion menggunakan code informasi authorize yang di dapat saat membuat public integrasi dan code yang di kirim di url callback untuk mendapatkan informasi menyeluruh terkait notion yang di auhtorize
        const response = await fetch('https://api.notion.com/v1/oauth/token', {
            method: 'POST',
            headers: {
              'Authorization': `Basic ${Buffer.from(`${process.env.NOTION_CLIENT_ID}:${process.env.NOTION_CLIENT_SECRET}`).toString('base64')}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              grant_type: 'authorization_code',
              code: req.query.code,
              redirect_uri: `${process.env.BASE_URL}/notion`,
            }),
          });
      
        const result = await response.json();
        
        // jika request success
        if (!result.error)
        {
            // simpan informasi notion ke database dan relasikan dengan user id yang di kirim
            const payload = {
                access_token: result.access_token,
                type: result.token_type,
                userNotion_id: result.owner.user.id,
                email_notion: result.owner.user.person.email,
                template_id: result.duplicated_template_id,
                workspace_id: result.workspace_id,
                workspace_name: result.workspace_name
            }
            const notionAccount = await prisma.notionAccount.count({
                where: {
                    userNotion_id: result.owner.user.id
                }
            });

            if (notionAccount !== 0)
            {
                res.status(400).json({
                    message: "Account already connected with or another user!",
                });
            }
            
            await prisma.notionAccount.create({
                data: {
                    ...payload,
                    user_id: req.query.id
                }
            });
            res.status(200).json(result);
        }
        else
        {
            // jika gagal kembalikan response gagalnya
            res.status(400).json(result.error_description)
        }
    }
    catch (error)
    {
        res.status(500).json(error);
    }
}
