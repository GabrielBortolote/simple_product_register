# Simple Product Register

Simple product register system using stack: DRF (Django Rest Framework), React and Docker.

## Requirements

### Part 1 | Back-End Architecture

- Create a Back-End system that maintains the data of a "Product" Entity. This entity has the following attributes:
  - name
  - description
  - value
- This Back-End must provide full maintenance of this "Product" Entity:
  - add
  - remove
  - update
- The Python+Django stack should be used, with one of the following options:
  - Option 1: Django Rest Framework to create the API backend **<--Option chosen**
  - Option 2: Django using Templates.
- Preferably use CBV for view development.

### Part 2 | Front-End Architecture

- Create a Front-End system that presents the data of your "Product" Entity from Part 1.
- This Front-End should provide the entire graphical interface for maintaining the "Product" Entity, such as adding Product, removing Product, etc.
- One of the following stack options should be used to build this Front-End:
  - Option 1: ReactJS **<--Option chosen**
  - Option 2: If you are not familiar with ReactJS, Django (Templates) can be used.

### Part 3 | Infrastructure

- Create an infrastructure for these systems using **Docker** and **Docker Compose**.
- This infrastructure should consist of 3 servers:
  1. Front-End Server
  2. Back-End Server
  3. DB Server.
- The Back-End Server should have the system from Part 1 installed.
- The Front-End Server should have the system from Part 2 installed.
- The DB Server should have the database for the systems installed.
- The Database should be **PostgreSQL**.
- Create a README.md with instructions for installing and starting the systems in development mode, i.e., on the local machine.

## Solution

### Back-End Architecture

The Back-end was implemented using the Python language and DRF (Django Rest Framework). I used a simple structure containing two folders.

1. The **base** folder functions as a native Django app, containing the files that relate logic and persistence: *models.py, views.py, and serializers.py*;
2. The **api** folder contains API configurations using DRF, as well as tests related to the API.

Within the **base** app, I defined the *Product* model containing the necessary attributes: *name, value, and description*. In the *serializer.py* file, I defined a standard serializer using a predefined DRF class (ModelSerializer). Finally, within the *views.py* file, I defined a CBV (Class-Based View), also using a predefined DRF class (ModelViewSet). This combination, although simple, is very powerful; you only need to configure the URLs for the Product model CRUD to be up and running.

I configured the CRUD URLs at the */product/* endpoint, so we have:

- **GET** /product/ -> lists all products
- **GET** /product/id/ -> returns only the identified product
- **POST** /product/ -> creates a product
- **PUT** /product/id/ -> updates the data of the identified product
- **DELETE** /product/id/ -> deletes the identified product.

To ensure the quality and integrity of the back-end structure, I created unit tests for each CRUD endpoint. The tests can be found in the *api/tests/test_product_crud.py* file.

### Front-End Architecture

For the front-end, I chose to use **ReactJS** served with **NextJS**. NextJS is a powerful framework that brings many functionalities and conveniences to React. The NextJS documentation is very comprehensive and can be found at this link [https://nextjs.org/](https://nextjs.org/). The creation of the front-end can be divided into two stages:

1. **Fetch**: in this stage, I implemented some functions to communicate with the previously created Django API. All these functions can be found in the *frontend/src/app/adapters/APIAdapter.js* file, and they are: *fetchProducts*, *createProduct*, *updateProduct*, *deleteProduct*. The names are self-explanatory; each of these functions returns a **promise** since they are asynchronous, so when calling one of these functions, it is necessary to define an execution callback.
2. **Interface**: in this stage, I designed the system's appearance, sketched on **Canva** to understand and visualize how I wanted the system to look. I used original fonts and colors from the **BNEX** website. Then, I just created the components, which can be found in the *frontend/src/app/components* folder. To style the components, I used **Tailwind**, a simple way to style using predefined classes instead of creating your own CSS classes.

### Infrastructure

The application’s infrastructure was created using 3 Docker containers, as suggested, here are their names and functions:

- **db**: the application’s persistence container. It runs a *postgresql* service and is connected to the backend system;
- **api**: the back-end server, containing the **Django** application implementing the API that will communicate with the application;
- **app**: the front-end server, containing a **NextJs** application implementing the application that will be accessed by the user.

## How to run?

To run this application, just have **docker** installed in the environment. Likewise, the **compose** module must be installed in Docker to be able to run the **docker compose** command.

To run the application, open a terminal in the project's root folder and run:

```bash
docker compose up --build
```

All services will be started and will be running through Docker. Once all services are running, it is possible to access the applications:

1. Front-End: to access the front-end application, open your browser and go to the link localhost:3000.
2. Back-End: to access the back-end application, you can use the browser by going to the link localhost:8000; DRF offers an HTML interface, and you can navigate the endpoints through it. Or you can use a program that makes requests, like Postman, curl, etc.
3. Database: the database is a service running on port 5432 (Postgres default); to access this service, you need to have a Postgres client installed on your machine, such as DBeaver or psql. The credentials to access the database are in the *.env* file.

It is also possible to run the back-end service tests; to do so, open a terminal and run the following command:

```bash
docker exec api python manage.py test
```

This command will run the test command inside the Docker container responsible for the back-end. The following output should be displayed:

```bash
Creating test database for alias 'default'...
Found 5 test(s).
System check identified no issues (0 silenced).
.....
----------------------------------------------------------------------
Ran 5 tests in 0.022s

OK
```
