import client from '@sendgrid/client'
import { NextApiRequest, NextApiResponse } from 'next'

const API_KEY = process.env.sendgridKey || ''

const Newsletter = async (req: NextApiRequest, res: NextApiResponse) => {
  const { list, email, name } = req.body
  const data = {
    list_ids: [list],
    contacts: [
      {
        email: email,
        first_name: name,
      },
    ],
  }

  client.setApiKey(API_KEY)
  client
    .request({
      url: '/v3/marketing/contacts',
      method: 'PUT',
      body: data,
    })
    .then(([response]) => {
      res
        .status(response.statusCode)
        .send('Vous recevrez désormais toute notre actualité')
    })
    .catch((error) => {
      res.status(500).send(error.message)
    })
}

export default Newsletter
