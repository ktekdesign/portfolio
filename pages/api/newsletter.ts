import client from "@sendgrid/client";
import { NextApiRequest, NextApiResponse } from "next";

const API_KEY = process.env.sendgridKey || "";

export default async (req: NextApiRequest, res: NextApiResponse) => {    
    const { list, email, name } = req.body;
    client.setApiKey(API_KEY);

    const data = {
        "list_ids": [list],
        "contacts": [
            {
            "email": email,
            "first_name": name
            }
        ]
    };

    client.request({
        url: '/v3/marketing/contacts',
        method: 'PUT',
        body: data
    })
    .then(([response]) => {
        res.status(response.statusCode).send("Vous recevrez désormais toute notre actualité");
    })
    .catch(error => {
        console.error(error.response.body);
        res.status(500).send("Il s'est produit une erreur. Veuillez essayer plus tard");
    });
}