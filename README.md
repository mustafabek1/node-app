# Node.js App

This project is a simple Node.js application that demonstrates how to create a RESTful API with Express. It includes endpoints for storing and retrieving data.

## Project Structure

```
nodejs-app
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers           # Contains the logic for handling requests
│   │   └── dataController.js # Controller for managing data
│   ├── routes                # Defines the API routes
│   │   └── dataRoutes.js     # Routes for data operations
│   └── models                # Data models
│       └── dataModel.js      # Model for managing data
├── package.json              # NPM configuration file
├── .env                      # Environment variables
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd nodejs-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Create a `.env` file in the root directory and add any necessary environment variables.

2. Start the application:
   ```
   npm start
   ```

3. The API will be available at `http://localhost:3000`.

## API Endpoints

- **GET /data**
  - Retrieves the stored data.
  
- **POST /data**
  - Accepts a text value from the UI and stores it.

## Example

### GET Request
To retrieve data, send a GET request to:
```
http://localhost:3000/data
```

### POST Request
To store data, send a POST request to:
```
http://localhost:3000/data
```
With a JSON body:
```json
{
  "text": "Your text here"
}
```

## License

This project is licensed under the MIT License.