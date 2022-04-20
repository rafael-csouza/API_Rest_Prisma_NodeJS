# API_Rest_Prisma_NodeJS

Using NodeJS, Express and Prisma, applying the methods GET/POST/DEL/PUT

NPM: npm i, npm run dev

YARN: yarn install, yarn dev

Routes:

GET: http://localhost:3030/users

GET: http://localhost:3030/user/9

DEL: http://localhost:3030/user/9

POST: http://localhost:3030/user
Body:
{
	"name": "João",
	"email": "João@uol.com"
}

PUT: http://localhost:3030/user/8
Body:
{
	"name": "Pedro Lucas",
	"email": "PedroLucas@gmail.com"
}
