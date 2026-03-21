## Lesson 4: API Authentication

### 1. What is API Authentication?

API authentication is the process of **verifying the identity of the client or application** that is making an API request.

In simple terms:

> API authentication ensures that only **authorized users or applications** can access the API.

Without authentication, **anyone on the internet could send requests and access sensitive data**.

---

### 2. Why APIs Need Authentication

APIs often expose important data such as:

- User information
- Payment details
- Orders and transactions
- Internal business data

Authentication helps protect this data by ensuring that only **verified clients** can access the API.

Common reasons for authentication include:

- Prevent unauthorized access
- Protect sensitive data
- Track API usage
- Apply usage limits (rate limiting)

---

### 3. Real-World Analogy

Think of **entering an office building**.

You cannot walk directly inside.  
You must show your **ID card or access badge**.

| Real World | API World |
|---|---|
Employee | Application |
Security Guard | API |
ID Card | API Key / Token |
Office | Server |

The guard verifies your identity before allowing access.

Similarly, APIs require **authentication credentials** before processing requests.

---

### 4. Types of API Authentication

Common authentication methods used in APIs include:

- API Keys
- Bearer Tokens
- OAuth

Each method has a different level of **security and complexity**.

---

### 5. API Keys

An **API Key** is a unique identifier assigned to a client application.

The client must include this key in every API request.

#### Example Request

```
GET /users
x-api-key: 12345ABCDE
```

**Explanation**:

- The API key identifies **which application is making the request**
- The server verifies the key before returning the response

#### Example Documentation

**Header**

| Header | Required | Description |
|---|---|---|
x-api-key | Yes | Unique key assigned to the client application |

---

### 6. Bearer Tokens

Bearer tokens are another popular authentication method.

A **Bearer token** is usually generated after a user logs in.

The client sends this token with every request to prove its identity.

#### Example Request

```
GET /users
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```

**Explanation**:

- `Authorization` is the header name
- `Bearer` indicates the authentication type
- The long string is the token

The server checks whether the token is valid before responding.

---

### 7. OAuth Authentication

OAuth is a more advanced authentication method commonly used in modern applications.

It allows users to **grant limited access to their data without sharing passwords**.

You have probably seen this while using:

- Login with Google
- Login with GitHub
- Login with Facebook

#### OAuth Flow (Simplified)

```
User → Application → OAuth Provider → Token → API Access
```

Example:

1. User logs in using Google
2. Google verifies the user
3. Google issues an access token
4. The application uses the token to call the API

---

### 8. Authorization Header

Many APIs send authentication credentials using the **Authorization header**.

**Example**:

```
Authorization: Bearer ACCESS_TOKEN
```

**Explanation**:

| Part | Meaning |
|---|---|
Authorization | Header used for authentication |
Bearer | Authentication type |
ACCESS_TOKEN | Token provided by the server |

---

### 9. Example Authenticated API Request

Below is an example of a complete authenticated request.

#### Request

```
GET https://api.example.com/users
```

#### Headers

```
Authorization: Bearer TOKEN123
Content-Type: application/json
```

The server verifies the token and returns the response.

#### Example Response

```json
[
 {
  "id": 101,
  "name": "Manoharan"
 }
]
```

---

### 10. Technical Writer Perspective

When documenting API authentication, technical writers must clearly describe:

- Authentication method used
- Required headers
- How to obtain credentials
- Example requests
- Possible authentication errors

Example documentation structure:

#### Authentication Method

This API uses **Bearer Token Authentication**.

#### Header

| Header | Required | Description |
|---|---|---|
Authorization | Yes | Bearer token used for authentication |

#### Example Request

```
GET /users
Authorization: Bearer ACCESS_TOKEN
```

---

### 11. Common Authentication Errors

APIs return specific status codes when authentication fails.

| Status Code | Meaning |
|---|---|
401 | Unauthorized – Missing or invalid credentials |
403 | Forbidden – Access denied |
400 | Bad request |

Example error response:

```json
{
"error": "Invalid API key"
}
```

---

### 12. Hands-on Practice

Open the following public API endpoint:

```
https://jsonplaceholder.typicode.com/users
```

Observation:

This API works **without authentication**, which makes it useful for learning.

However, most real-world APIs require **authentication credentials** such as API keys or tokens.

---

### 13. Key Concepts Learned

In this lesson, you learned:

- What API authentication is
- Why APIs require authentication
- API keys
- Bearer tokens
- OAuth authentication
- Authorization headers
- Authentication errors

These concepts are **essential for writing API documentation**.

---

### Small Challenge

Look at the request below and identify the authentication method:

```
GET /orders
Authorization: Bearer ABCD1234TOKEN
```

**Questions:**

1. Which header is used for authentication?  Authorization
2. What type of authentication is used?  Bearer

---


### FAQs

<details>
<summary>What is authentication in simple terms? How is it different from authorization?</summary>

#### Authentication

Authentication means **verifying who you are**.

In APIs, authentication checks whether the **user or application making the request is valid**.

Example:

When you log into an application using your **username and password**, the system verifies your identity.

If the credentials are correct, you are authenticated.

Real-world analogy:

| Concept | Example |
|---|---|
Authentication | Showing your ID card at the office entrance |
Authorization | Getting permission to enter specific rooms |

#### Authorization

Authorization happens **after authentication**.

It determines **what actions you are allowed to perform**.

Example:

After logging into a system:

- A **regular user** may only view data
- An **admin user** may edit or delete data

So the flow usually looks like this:

```
Authentication → Verify identity
Authorization → Check permissions
```

Simple way to remember:

- **Authentication = Who are you?**
- **Authorization = What are you allowed to do?**

</details>

---

<details>
<summary>What is the difference between an API token and a Bearer token?</summary>

Both API tokens and Bearer tokens are used to **authenticate API requests**, but they are slightly different in how they are used.

#### API Token

An API token is a **unique key issued to a client or application**.

It is usually generated by the API provider and used to identify the application making requests.

Example:

```
x-api-key: 12345ABCDE
```

The server verifies this key to confirm that the application is allowed to use the API.

API tokens are often used for:

- Server-to-server communication
- Internal integrations
- Simple authentication systems

---

#### Bearer Token

A Bearer token is a **type of access token used in Authorization headers**.

It is commonly generated after a **user logs in** or through an **OAuth authentication flow**.

Example:

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```

The word **Bearer** means:

> Whoever holds this token can access the API.

This token is usually:

- temporary
- more secure
- used in modern APIs

---

#### Key Difference

| Feature | API Token | Bearer Token |
|---|---|---|
Where used | Custom headers like `x-api-key` | Authorization header |
Purpose | Identify application | Authenticate user/session |
Common in | Simple APIs | OAuth and modern APIs |

</details>

---

<details>
<summary>What is the Authorization header? (Explained in simple terms)</summary>

The **Authorization header** is used to send **authentication credentials** along with an API request.

It tells the server:

> "This request is coming from an authenticated user or application."

Example request:

```
GET /users
Authorization: Bearer TOKEN123
```

Explanation:

| Part | Meaning |
|---|---|
Authorization | Header used for authentication |
Bearer | Type of authentication |
TOKEN123 | Access token provided by the server |

The API server reads this header and verifies whether the token is valid.

If the token is valid, the request is processed.

If the token is invalid or missing, the API returns an error such as:

```
401 Unauthorized
```

---

#### Real-world example

Imagine entering a **corporate office building**.

You show your **employee ID card** to the security guard.

| Real-world action | API equivalent |
|---|---|
Show ID card | Send Authorization header |
Security guard checks ID | Server verifies token |
Allowed to enter | API returns data |

So the Authorization header is similar to **showing your ID card to access a building**.

</details>


***

<details>

<summary>Next Lesson</summary>

#### Lesson 5: API Responses and Status Codes (Deep Dive)

Topics covered:

- API response structure
- JSON response formats
- Success responses
- Error responses
- Status codes in detail
- How technical writers document responses

</details>
