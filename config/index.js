const development = process.env.NODE_ENV !== 'production';  

export const server = development ? 
    'http://localhost:300': 
        'https://www.parsclick.net'