import client from "@sendgrid/client";

export default async (req, res) => {    
    client.setApiKey(process.env.sendgridKey);

    const data = {
        "list_ids": [req.body.list],
        "contacts": [
            {
            "email": req.body.email,
            "first_name": req.body.name
            }
        ]
    };

    const request = {
    url: `/v3/marketing/contacts`,
    method: 'PUT',
    body: data
    }

    client.request(request)
    .then(([response, body]) => {
        console.log(response.body);
        res.status(response.statusCode).send("Vous recevrez désormais toute notre actualité");
    })
    .catch(error => {
        console.error(error.response.body);
        res.status(500).send("Il s'est produit une erreur. Veuillez essayer plus tard");
    });
}