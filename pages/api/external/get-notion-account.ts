import prisma from "@/lib/prismaClient";

// api ini digunakan untuk mencari akun notion yang ber relasi dengan user yang login
export default async function handle(req, res) {
    // cek apakah ada notion akun yang berelasi dengan user yang login
    const response = await prisma.notionAccount.findFirst({
        where: {
            user_id: req.query.id
        }
    });

    // jika tidak ada berikan response akun tidak ada
    if (response === null)
    {
        return res.status(404).json('account not found');
    }
    
    return res.status(200).json(response);
}