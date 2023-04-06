const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://www.ktekdesign.com'
    : `http://${process.env.NEXT_PUBLIC_HOSTNAME}:${process.env.NEXT_PUBLIC_PORT}`

const newsletterUrl = `${baseUrl}/api/newsletter`
const contactUrl = `${baseUrl}/api/contact`

export {baseUrl, newsletterUrl, contactUrl}
