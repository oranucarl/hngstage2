# Person API Documentation

**Base URLs**:

- local: http://localhost:4000
- deployed: https://api-hngstage2.onrender.com/api

## Endpoints

### `/api`

**POST**

- Summary: Adds a new person.
- Request Body (JSON): name (required)
- Responses:
  - 200: Success Response
  - 400: Bad Request
- Examples:
  - Request body:
    `{
    "name": "Hakim Jenkings"
}`
  - Responses:
    - 201:
    ```
    {
    "name": "Hakim Jenkings",
    "description": "PostGraduate Student",
    "_id": "6503b69a62bc717209ab81ee",
    "createdAt": "2023-09-15T01:42:50.685Z",
    "updatedAt": "2023-09-15T01:42:50.685Z",
    "__v": 0
    }
    ```
    - 400:
    ```
    {
        "status": "error",
        "message": "Invalid name Type"
    }
    ```

### `/api/user_id`

**GET**

- Summary: Fetches an existing person's details.
- Parameters: user_id (required)
- Responses:
  - 200: Success Response
  - 400: Bad Request
  - 404: Resource not found
- Examples:
  - Request Parameter:
    `GET {baseURL}/api/6503164dc274bb1b8993e652`
  - Responses:
    - 200:
    ```
    {
        "status": "success",
        "message": "Person found.",
        "data": {
            "id":"6503164dc274bb1b8993e652",
            "name":"Mark Essien"
        }
    }
    ```
    - 400:
    ```
    {
        "status": "error",
        "message": "A valid user_id is required as request parameter."
    }
    ```
    - 404:
    ```
    {
        "status": "error",
        "message": "Person not found."
    }
    ```

### `/api/user_id`

**PUT**

- Summary: Updates an existing person's details.
  -Parameters: user_id (required)
- Responses:
  - 200: Success Response
  - 400: Bad Request
  - 404: Resource not found
- Examples:
  - Request Parameter (required):
    `PUT {baseURL}/api/6503c75bfa5971d22a76659b'
  - Request Body {optional}:
    `{"name": "Ron Jenkings"}`
  - Responses:
    - 200:
    ```
    {  
        "name": "Ron Jenkings",
        "description": "PostGraduate Student",
        "_id": "6503c75bfa5971d22a76659b",
        "createdAt": "2023-09-15T02:54:20.041Z",
        "updatedAt": "2023-09-15T02:54:20.041Z",
        "__v": 0
    }
    ```
    - 400:
    ```
    {
        "status": "error",
        "message": "A valid user_id is required as request parameter."
    }
    ```
    - 404:
    ```
    {
        "status": "error",
        "message": "Person not found."
    }
    ```

### `/api/user_id`

**DELETE**

- Summary: Deletes an existing person's details.
- Parameters: user_id (required)
- Responses:
  - 200: Success Response
  - 400: Bad Request
  - 404: Person not found
  - 500: Error
- Examples:
  - Request Parameter (required):
    `DELETE {baseURL}/api/6503164dc274bb1b8993e652`
  - Responses:
    - 200:
    ```
    {
        "status": "success",
        "message": "Person with Id: 6503164dc274bb1b8993e652 has been deleted."
    }
    ```
    - 400:
    ```
    {
        "status": "error",
        "message": "A valid user_id is required as request parameter."
    }
    ```
    - 404:
    ```
    {
        "status": "error",
        "message": "Person not found or has already been deleted."
    }
    ```
