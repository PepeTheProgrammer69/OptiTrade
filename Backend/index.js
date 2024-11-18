// Import the pg library
const { Client } = require('pg');

// Create a new client instance with your database connection configuration
const client = new Client({
    host: '100.70.103.46',         // e.g. 'localhost'
    port: 5432,                // Default PostgreSQL port
    user: 'postgres',     // Your PostgreSQL username
    password: 'Singham202', // Your PostgreSQL password
    database: 'postgres'  // Your PostgreSQL database name
});

// Connect to the PostgreSQL database
client.connect()
    .then(() => {
        console.log('Connected to the database successfully');

        // Example query
        return client.query('SELECT NOW()');  // Replace with your query
    })
    .then(res => {
        console.log('Query result:', res.rows);
    })
    .catch(err => {
        console.error('Error connecting to the database', err.stack);
    })
    .finally(() => {
        // Close the connection when done
        client.end();
    });