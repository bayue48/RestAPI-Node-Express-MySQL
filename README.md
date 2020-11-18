# REST-Node-Express-MySQL

## About The Project

Projek ini adalah projek latihan untuk belajar cara membuat Restful API menggunakan *framework* ExpressJS dan *database* MySQL.  dengan studi kasus membuat daftar *user*.

#### Built With

- [ExpressJS](https://expressjs.com/)

- [MySQL](https://www.mysql.com/)

- [Body Parser](https://www.npmjs.com/package/body-parser)

#### Scheme Database

```sql
- id INT PRIMARY KEY AUTO_INCREMENT
- username VARCHAR (10)
- full_name VARCHAR (50)
- username_github VARCHAR (15)
- class VARCHAR (10)
- description TEXT
```

## Getting Started

Berikut panduan untuk menjalankan projek ini secara lokal. untuk bisa menjalankan projek secara lokal adapun langkah-langkah yang harus diikuti.

#### Prerequisites

- npm
  
  ```text
  npm install npm@latest -g
  ```

atau bisa menggunakan yarn

- yarn
  
  ```text
  npm install -g yarn
  ```

#### Installation

1. Clone repository

```textile
https://github.com/dhiyo7/RestAPI-Node-Express-MySQL.git        
```

2. Install paket pendukung
- dengan NPM

```textile
npm install
```

- dengan Yarn

```textile
yarn add
```

3. Konfigurasi Database , silahkan sesuaikan pada halaman index.js

```js
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'namaDB'
});
```

#### Scheme API

- get all users 

```js
GET
/api/users
```

- get user by ID

```js
GET
/api/users/:id
```

- add user

```js
POST
/api/users
```

- edit user

```js
PUT
/api/users/:id
```

- delete user

```js
DELETE
/api/users/:id
```

#### Contribution

berkontribusi membuat komunitas open source menjadi tempat yang luar biasa untuk belajar, menginspirasi, dan berkreasi. sangat diperislahkan dan buat ***branch*** baru.

#### LICENSE

Distributed under the MIT License. See `LICENSE` for more information.
