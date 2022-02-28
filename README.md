This is a ReactJS project, created to compose the React Intermediate course grade of the PUC course.

# BACKEND 

### Run the development server.

###### Enter the server folder.
```bash
cd server
```

###### Install server dependencies.
```bash
npm i
```

###### Run the command to start the server.
```bash
npm start
```

### Using GraphQL:

Open [http://localhost:3001/graphql](http://localhost:3001/graphql) with your browser to see the result.

###### Run the query below to view the result.
```bash
query{
  getAllUsers{
    id, 
    firstname,
    lastname,
    email
  }
}
```

###### Run the mutation below to insert a record.
```bash
mutation{
  createUser(firstname: "Maria", lastname: "da Silva", email: "msilva@email.com", password: "123") {
    firstname,
    lastname,
    email,
    password
  }
}
```



# FRONTEND 

### Run the App.

###### Enter the application folder.
```bash
cd landing-page
```

###### Install dependencies.
```bash
npm i
```

###### Run the command to start the app.
```bash
npm start
```

The application will open a window at the following address [http://localhost:3000](http://localhost:3000).



