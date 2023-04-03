const baseUrl = process.env.NODE_ENV === "production" 
? 'https://www.ktekdesign.com' 
: 'http://localhost:3000';

export default baseUrl;