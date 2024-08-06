import prisma from "@/lib/prismaClient";

export default async function handle(req, res) {
    const response = await prisma.notionAccount.findFirst({
        where: {
            user_id: req.query.id
        }
    });

    if (response === null)
    {
        return res.status(404).json('account not found');
    }
    
    return res.status(200).json(response);
}