Greeting App (ReactJS, NodeJS and ExpressJS)

This is a simple full-stack web application built using "ReactJS (frontend)" and "NodeJS with Express (backend)". It allows users to enter their name, send a request to the backend, and receive a personalized greeting message.

Features
- Input field to enter a name.
- Button to fetch a greeting message.
- Displays greeting message from the backend.
- Styled with Tailwind CSS.
- Backend built with ExpressJS.

---

1. Backend (NodeJS & ExpressJS)

-> Setup & Run Locally

--Prerequisites--
- Install [NodeJS](https://nodejs.org/)

--Steps to Run--
1. Clone the repository :
   `git clone https://github.com/Ali19092002/greeting-app.git
   cd greeting-app/backend`
2. Install dependencies :
   `npm install`
3. Start the server :
   `node server.js`
4. The backend will run at `https://greeting-app-backend.onrender.com`

---

2. Frontend (ReactJS & Tailwind CSS)

-> Setup & Run Locally

--Prerequisites--
- Install [Node.js](https://nodejs.org/)
- Install [npm](https://www.npmjs.com/)

--Steps to Run--
1. Navigate to frontend directory :
   `cd ../frontend`
2. Install dependencies :
   `npm install`
3. Start the React app :
   `npm start`
4. Open the browser & go to `https://greeting-app-frontend.onrender.com`

---

3. Deployment on Render

--Deploying Backend--
1. Push the backend code to GitHub.
2. Go to [Render](https://render.com/) and create a 'New Web Service'.
3. Connect your GitHub repository.
4. Set the 'Build Command' to :
   `npm install`
5. Set the 'Start Command' to :
   `node server.js`
6. Click 'Deploy' & copy the Render backend URL `https://greeting-app-backend.onrender.com`.

--Deploying Frontend--
1. Update the API request URL in React (`App.js`) :
   `const response = await axios.get(https://greeting-app-backend.onrender.com/api/greet?name=${name}`
2. Push the frontend code to GitHub.
3. On Render, create a 'New Static Site'.
4. Connect your GitHub repository.
5. Set the 'Build Command' to :
   `npm install; npm run build`
6. Set the 'Publish Directory' to `./dist`.
7. Click 'Deploy' & get your live frontend URL `https://greeting-app-frontend.onrender.com`.

---

4. API Endpoint
-> Endpoint : `GET /api/greet?name=YourName`
-> Response :
  `{
    "message": "Hello, YourName! Welcome to Younglabs."
   }
  `
-> Error Response (if name is missing) :
  `{
    "error": "Name is required."
   }
  `

---

5. Technologies Used
-> Frontend : ReactJS, Tailwind CSS & Axios
-> Backend : NodeJS & ExpressJS
-> Deployment : Render

---

6. License
This project is open-source & available under the MIT License.

---

7. Author
-> Created by Shoeb Ali
-> GitHub : https://github.com/Ali19092002
-> LinkedIn : https://www.linkedin.com/in/shoeb-ali-65261a245/
