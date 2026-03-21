1. API stands for Application Programming Interface.

In simple words:



An API is a messenger that allows two software applications to communicate with each other.

It allows one application to request data or perform an action in another application.

Example:

	•	App A asks something

	•	API carries the request

	•	App B sends the response



2. Real-World Analogy (Restaurant Example)

Think of a restaurant.

You → Customer

Kitchen → System

Waiter → API

Steps:

	1.	You give your order to the waiter.

	2.	The waiter takes the request to the kitchen.

	3.	The kitchen prepares the food.

	4.	The waiter brings the response (food).

Here:







Real World



API World





Customer



Application





Waiter



API





Kitchen



Server/System





Food



Data/Response

So the API acts like a middleman.

⸻

3. Real-World API Examples

Weather Apps

When you open a weather app, it shows temperature, humidity, and wind.

But the app doesn’t store weather data itself.

Instead:

Weather App → API → Weather Server

                     ↓

              Returns weather data

Example response:

{

  "city": "Chennai",

  "temperature": "32°C",

  "humidity": "70%"

}

The API fetches this data.

⸻

Payment APIs

When you pay using UPI or Razorpay, an API connects:

Shopping Website → Payment API → Bank

The API processes the payment and sends the result.

⸻

Login with Google

When you click “Login with Google”

App → Google API → Authentication → Access granted

⸻

4. Developer Perspective

Developers use APIs to:

• Get data from other services

• Send data to another system

• Automate processes

• Connect different applications

Example:

A developer wants to get user data.

They call an API:

GET /users

API response:

{

"id":101,

"name":"Manoharan",

"email":"mano@email.com"

}



⸻

5. Technical Writer Perspective

A technical writer does not build APIs, but must explain how developers use them.

Your job includes documenting:

• What the API does

• How to send a request

• What parameters are needed

• What response developers will get

• What errors might occur

Example

Endpoint

GET /users

Description

Retrieves a list of users from the system.

Response

{

"id":101,

"name":"Manoharan"

}

Your goal is to make this clear and easy for developers.

⸻

6. Why APIs Are Important

APIs allow software to:

• Communicate with other systems

• Reuse existing services

• Integrate third-party platforms

• Build scalable applications

Without APIs:



Most modern applications like Uber, Paytm, Swiggy, or Spotify wouldn’t work.

⸻

7. Hands-On Practice (Very Simple)

Let’s try your first API request.

Step 1

Open this website: https://jsonplaceholder.typicode.com/users

Step 2

You will see something like: 

[

 {

   "id": 1,

   "name": "Leanne Graham",

   "email": "leanne@example.com"

 }

]

This is API response data.

Step 3 (Observe)

Try to identify:

• What data is returned

• What format it is in

• How many users are listed



What You Just Did

Your browser made an API request.

Browser → API Server → Response (JSON)

This is exactly what developers do in applications.

Two more sample websites:

https://jsonplaceholder.typicode.com/posts

https://jsonplaceholder.typicode.com/comments

