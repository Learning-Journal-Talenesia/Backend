# Talenesia Learning journal Backend API by CP-FS-06

This README provides an overview of the Express.js with Mongoose MongoDB backend API, serving as the backend for the Talenesia learning journal Industry Partner Capstone project in completition of Generasi GIGIH 3.0 program by GoTo Impact foundation

## Question Model

### Schema

```javascript
{
  idThema: String,
  thema: String,
  slug: String,
  question: [String],
  inputType: String,
  createdAt: Date (default: new Date())
}
```
---
### Endpoint: `GET /` 

  Returns all questions
* **URL Params**  
  *Required:* `none`
* **Data Params**  
  None
* **Headers**  
  None
* **Success Response:** 
* **Code:** 200  
  **Content:**  
```
{
  questions: [
           {<question_object>},
           {<question_object>},
           {<question_object>}
         ]
}
```

### Endpoint: `GET /thema/:idThema` 
  Returns the questions on a certain theme by a theme ID.
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Headers**  
  None
* **Success Response:** 
* **Code:** 200  
  **Content:**  
```
{
  data: [
           {<question_object>},
           {<question_object>},
           {<question_object>}
         ]
},
message: "Get all question by thema id successfully",
```
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error message }`
  
### Endpoint: `POST /`

Creates a new question.

- **Data Params**
  - *Required:*
    - `idThema` (integer)
    - `thema` (string)
    - `question` (string)
    - `inputType` (string)
- **Headers**
  - None
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    {
      "newQuestion": {
        "idThema": "<integer>",
        "thema": "<string>",
        "question": "<string>",
        "inputType": "<string>",
        "_id": "<newly_created_question_id>"
      }
    }
    ```

### Endpoint: `GET /:id`

Returns a specific question by ID.

- **URL Params**
  - *Required:* `id=[string]` (MongoDB Object ID)
- **Data Params**
  - None
- **Headers**
  - None
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    {
      "question": {
        "idThema": "<integer>",
        "thema": "<string>",
        "question": "<string>",
        "inputType": "<string>",
        "_id": "<question_id>"
      }
    }
    ```
- **Error Response:**
  - **Code:** 404
  - **Content:** `{ "message": "Error message if the question is not found" }`


### Endpoint: `PATCH /:id`

Updates a specific question by ID.

- **URL Params**
  - *Required:* `id=[string]` (MongoDB Object ID)
- **Data Params**
  - *Required:*
    - `idThema` (integer)
    - `thema` (string)
    - `question` (string)
    - `inputType` (string)
- **Headers**
  - None
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    {
      "updatedQuestion": {
        "idThema": "<integer>",
        "thema": "<string>",
        "question": "<string>",
        "inputType": "<string>",
        "_id": "<question_id>"
      }
    }
    ```
- **Error Response:**
  - **Code:** 404
  - **Content:** `{ "message": "Error message if the question is not found" }`

### Endpoint: `DELETE /:id`

Deletes a specific question by ID.

- **URL Params**
  - *Required:* `id=[string]` (MongoDB Object ID)
- **Data Params**
  - None
- **Headers**
  - None
- **Success Response:**
  - **Code:** 200
  - **Content:** `{ "message": "Question deleted successfully." }`
- **Error Response:**
  - **Code:** 404
  - **Content:** `{ "message": "Error message if the question is not found" }`



