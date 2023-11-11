# Express.js with Mongoose MongoDB Backend API

This README provides an overview of the Express.js with Mongoose MongoDB backend API, serving as the backend for a question management system.

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

**GET /**

  Returns all questions
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
  Authorization: Bearer `<OAuth Token>`
* **Success Response:** 
* **Code:** 200  
  **Content:**  `{ <user_object> }` 
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "User doesn't exist" }`  
  OR  
  * **Code:** 401  
  **Content:** `{ error : error : "You are unauthorized to make this request." }`
