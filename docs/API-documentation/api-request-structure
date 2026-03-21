
When an application communicates with an API, it sends a **request**.

This request contains several components that tell the server **what action to perform and what data is needed**.

A typical API request contains the following parts:

```
Method + URL + Headers + Parameters + Body
```

Example request:

```
GET https://api.example.com/users?country=india
```

Each part of the request plays an important role.

---

## 2. Components of an API Request

### 2.1 URL (Endpoint)

The **URL** is the address where the API request is sent.

Example:

```
https://api.example.com/users
```

Breakdown:

| Part | Meaning |
|-----|-----|
| https | Protocol used for communication |
| api.example.com | Server hosting the API |
| /users | Endpoint that returns user data |

This request means:

> Retrieve the list of users from the server.

---

### 2.2 Query Parameters

Query parameters help **filter or customize the data returned by the API**.

Example:

```
GET /users?country=india
```

Here:

| Parameter | Value |
|-----|-----|
| country | india |

Meaning:

> Return users who belong to **India**.

Another example:

```
GET /products?category=laptop&limit=10
```

Interpretation:

- `category=laptop` → Return only laptop products
- `limit=10` → Return only 10 results

---

### 2.3 Headers

Headers contain **additional information about the request**.

Common headers used in APIs:

| Header | Purpose |
|-----|-----|
| Authorization | Used for API authentication |
| Content-Type | Specifies the data format |
| User-Agent | Identifies the client application |

Example request with headers:

```
GET /users
Authorization: Bearer TOKEN123
Content-Type: application/json
```

Explanation:

- The request includes an **authentication token**
- The server expects **JSON formatted data**

---

### 2.4 Request Body

The **request body** contains data sent to the server.

It is commonly used with these methods:

- POST: Create new resource
- PUT: Update entire resource
- PATCH: Update part of a resource

Example request:

```
POST /users
```

Request body:

```json
{
"name": "Manoharan",
"email": "mano@email.com"
}
```

Meaning:

> Create a new user using the provided information.

<details>
<summary>PUT example</summary>
PUT replaces the entire resource.
Example existing user:

```
{
"id": 101,
"name": "Manoharan",
"email": "mano@email.com",
"role": "Technical Writer" 
}
```
Now suppose you want to update only the name. Using PUT, you must send all fields again, even if they didn’t change.
**Request:** PUT /users/101
Body:
```
{
"id": 101,
"name": "Manoharan S",
"email": "mano@email.com",
"role": "Technical Writer"
}
```
The server replaces the entire object.

</details>
---

## 3. Complete API Request Example

Below is an example of a complete API request.

Request:

```
POST https://api.example.com/users
```

Headers:

```
Authorization: Bearer TOKEN123
Content-Type: application/json
```

Request body:

```json
{
"name": "Manoharan",
"email": "mano@email.com",
"role": "Technical Writer"
}
```

---

## 4. What Happens Next?

After receiving the request, the server processes it and sends a **response**.

Example response:

```json
{
"id": 201,
"name": "Manoharan",
"status": "User created"
}
```

---

## 5. Status Codes (Very Important)

Every API response contains a **status code** that indicates whether the request was successful.

Common HTTP status codes:

| Status Code | Meaning |
|-----|-----|
| 200 | Request successful |
| 201 | Resource created successfully |
| 400 | Bad request |
| 401 | Unauthorized request |
| 404 | Resource not found |
| 500 | Internal server error |

Example:

Request:

```
GET /users/10
```

Response:

```
404 Not Found
```

Meaning:

> The user with ID `10` does not exist.

---

## 6. Technical Writer Perspective

When documenting APIs, technical writers must clearly describe:

- Endpoint
- HTTP method
- Request headers
- Query parameters
- Request body
- Response format
- Possible error responses

Example documentation structure:

### Endpoint
```
POST /users
```

**Description**
Creates a new user in the system.

---

### Headers

| Header | Required | Description |
|-----|-----|-----|
| Authorization | Yes | API authentication token |
| Content-Type | Yes | Request body format |

---

### Request Body

```json
{
"name": "string",
"email": "string"
}
```

---

### Response

```json
{
"id": 101,
"name": "Manoharan"
}
```

---

## 7. Hands-on Practice

Let’s explore an API that uses **query parameters**.

Open this link in your browser:

```
https://jsonplaceholder.typicode.com/posts?userId=1
```

Observation:

You will see **posts created only by user 1**.

This demonstrates how **query parameters filter API results**.

Try another example:

```
https://jsonplaceholder.typicode.com/comments?postId=1
```

You will see **comments related to post 1**.

---

## 8. Key Concepts Learned

In this lesson you learned:

- API request structure
- URL and endpoints
- Query parameters
- Headers
- Request body
- Status codes

These are **core concepts every API technical writer should understand**.

---

## Small Challenge

Interpret the following request in plain English:

```
GET /products?category=mobile&limit=5
```

What does this request ask the server to do?

---

<Details>

Next Lesson

<Summary> Lesson 4: API Authentication </Summary>

Topics covered:

- Why APIs require authentication
- API keys
- Bearer tokens
- OAuth
- Authorization headers

We will also perform our **first API testing using Postman (step-by-step)**.

</Details>