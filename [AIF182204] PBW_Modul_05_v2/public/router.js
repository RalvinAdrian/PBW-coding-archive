import fs from 'fs';

const router = async (request, response) => {

    try {
        console.log(request.url);
        let filePath = '';
        let contentType = '';

        if (request.url === '/' && request.method === 'GET') {
            filePath = 'index.html';
            contentType = 'text/html';
            console.log('index');
        } else if (request.url === '/about.html' && request.method === 'GET') {
            filePath = 'about.html';
            contentType = 'text/html';
            console.log('about');
            // && request.method === 'GET'
            if (request.url === '/script.js') {
                filePath = 'script.js';
                contentType = 'application/javascript';
            }
        } else if (request.url === '/script.js') {
            filePath = 'script.js';
            contentType = 'application/javascript';
        } else {
            throw new Error('Not Found');
        }

        // simplified async promise :
        const content = await fs.promises.readFile(filePath, 'utf-8');
        response.statusCode = 200;
        response.setHeader('Content-Type', contentType);
        response.end(content);
        // exception jika url tidak ditemukan
    } catch (error) {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/plain');
        response.end('Page is not found');
        console.log('Error:', error.message);
    }
};

export { router as router }