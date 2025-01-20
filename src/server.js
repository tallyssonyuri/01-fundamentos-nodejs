import http from 'node:http';

// Métodos HTTP

// GET => Buscar um recurso do back-end
// POST => Criar um recurso do back-end
// PUT => Atualizar um recurso do back-end
// PATCH => Atualizar uma informação específica de um recurso no back-end
// DELETE => Deletar um recurso do back-end

/* Para testar com curl: => curl -X GET http://localhost:3333/users
*/

// Stateful - Stateless

// JSON - JavaScript Object Notation

// Cabeçalhos (Requisição/respsota) => Metadados

// HTTP Status Code

const users = [];

const server = http.createServer((request, response) => {

    const {method, url} = request;

    if (method == 'GET' && url === '/users'){
        return response
            .setHeader('Content-type', 'application/json') // para retornar como JSON
            .end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/users'){
        users.push({
            name: 'Fulano',
            email: 'fulano@exemplo.com'
        })

        return response.writeHead(201).end('Criação de usuário')
    }

    return response.writeHead(404).end('Not Found') // caso não encontrar nenhuma rota
});

server.listen(3333);