const development = process.env.NODE_ENV === 'development';  

export const server = development ? 
    'http://localhost:300': 
        'https://www.parsclick.net'