# cmu-backend
Centro Medico Universitario (backend)
## Getting Started

Install dependency:

```bash
yarn install
```
Initialize database:

```bash
yarn init
```
Create a ".env" file and add the following variables:
```bash
DB_PASSWORD=
DB_NAME=
DB_HOST=
SECRET_TOKEN=
ALGORITHM_JWT=
CLOUDINARY_API_KEY=
CLOUDINARY_SECRET=
CLOUDINARY_CLOUD_NAME=
PORT=
```

## Run

Development:

```bash
yarn dev
```
open your browser in http://127.0.0.1:3000

Production:

```bash
yarn start
```

##Build
Create a build for production:

```bash
yarn build
```
