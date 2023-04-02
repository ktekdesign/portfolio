const baseUrl = process.env.NODE_ENV === "production" 
? process.env.baseURL 
: 'http://localhost:3000';

export default baseUrl;