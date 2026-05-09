<h1 align="center">📚 Smart Library Borrowing System</h1>

<p align="center">
A Full Stack MERN Application for managing book borrowing, overdue calculations, payments, and dashboard tracking.
</p>

<hr>

<h2>🚀 Live Deployment</h2>

<p>
Frontend Live Link:<br>
<a href="https://smart-library-frontend-snowy.vercel.app/">
https://smart-library-frontend-snowy.vercel.app/
</a>
</p>


<hr>

<h2>📌 Project Overview</h2>

<p>
Smart Library Borrowing System is a full-stack MERN application developed to manage student book borrowing activities. 
The application includes secure authentication, book availability management, borrowing validation, overdue calculations, payment tracking, and dashboard summaries.
</p>

<hr>

<h2>✨ Features</h2>

<h3>🔐 Authentication</h3>

<ul>
  <li>User Signup</li>
  <li>User Login</li>
  <li>JWT Authentication</li>
  <li>Protected Routes</li>
  <li>User Profile</li>
</ul>

<h3>📚 Book Management</h3>

<ul>
  <li>View all available books</li>
  <li>View single book details</li>
  <li>Book availability tracking</li>
  <li>Hardcoded backend book repository</li>
</ul>

<h3>📖 Borrowing System</h3>

<ul>
  <li>Borrow available books</li>
  <li>One active borrow per student</li>
  <li>Borrow validation handling</li>
  <li>Maximum borrow days validation</li>
  <li>Borrow cost calculation</li>
  <li>Due date calculation</li>
</ul>

<h3>⏰ Return & Overdue</h3>

<ul>
  <li>Return borrowed books</li>
  <li>Overdue amount calculation</li>
  <li>Final payment amount generation</li>
  <li>Book availability restoration</li>
</ul>

<h3>💳 Payment System</h3>

<ul>
  <li>Pending and Paid payment tracking</li>
  <li>Payment history</li>
  <li>Pay now functionality</li>
</ul>

<h3>📊 Dashboard</h3>

<ul>
  <li>Active borrow count</li>
  <li>Borrow history count</li>
  <li>Total payment amount</li>
  <li>Pending balance amount</li>
</ul>

<hr>

<h2>🛠 Tech Stack</h2>

<h3>Frontend</h3>

<ul>
  <li>React.js</li>
  <li>React Router DOM</li>
  <li>Axios</li>
  <li>CSS</li>
</ul>

<h3>Backend</h3>

<ul>
  <li>Node.js</li>
  <li>Express.js</li>
</ul>

<h3>Database</h3>

<ul>
  <li>MongoDB Atlas</li>
  <li>Mongoose</li>
</ul>

<h3>Authentication</h3>

<ul>
  <li>JWT Authentication</li>
  <li>bcryptjs</li>
</ul>

<hr>

<h2>📂 Folder Structure</h2>

<h3>Backend Structure</h3>

<pre>
Back-end
│
├── config
├── controllers
├── middleware
├── models
├── routes
├── seed
├── utils
├── package.json
└── server.js
</pre>

<h3>Frontend Structure</h3>

<pre>
Front-end
│
├── src
│   ├── assets
│   ├── components
│   ├── context
│   ├── pages
│   ├── routes
│   ├── services
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── vite.config.js
</pre>

<hr>

<h2>⚙️ Installation & Setup</h2>

<h3>Backend Setup</h3>

<pre>
cd Back-end
npm install
</pre>

<h3>Create .env File</h3>

<pre>
PORT=5000
MONGO_URL=YOUR_MONGODB_URL
JWT_SECRET=YOUR_SECRET_KEY
</pre>

<h3>Run Backend</h3>

<pre>
node server.js
</pre>

<h3>Frontend Setup</h3>

<pre>
cd Front-end
npm install
npm run dev
</pre>

<hr>

<h2>📡 API Endpoints</h2>

<table border="1" cellpadding="10">

<tr>
  <th>Method</th>
  <th>Endpoint</th>
</tr>

<tr>
  <td>POST</td>
  <td>/auth/signup</td>
</tr>

<tr>
  <td>POST</td>
  <td>/auth/login</td>
</tr>

<tr>
  <td>GET</td>
  <td>/auth/profile</td>
</tr>

<tr>
  <td>GET</td>
  <td>/books</td>
</tr>

<tr>
  <td>GET</td>
  <td>/books/:bookId</td>
</tr>

<tr>
  <td>POST</td>
  <td>/borrow/validate</td>
</tr>

<tr>
  <td>POST</td>
  <td>/borrow/calculate</td>
</tr>

<tr>
  <td>POST</td>
  <td>/borrow</td>
</tr>

<tr>
  <td>GET</td>
  <td>/borrow/active</td>
</tr>

<tr>
  <td>GET</td>
  <td>/borrow/:borrowId/summary</td>
</tr>

<tr>
  <td>POST</td>
  <td>/borrow/:borrowId/submit</td>
</tr>

<tr>
  <td>GET</td>
  <td>/borrow/history</td>
</tr>

<tr>
  <td>GET</td>
  <td>/payments/history</td>
</tr>

<tr>
  <td>PATCH</td>
  <td>/payments/:paymentId/pay</td>
</tr>

<tr>
  <td>GET</td>
  <td>/dashboard/summary</td>
</tr>

</table>

<hr>

<h2>🔒 Validation & Security</h2>

<ul>
  <li>Password hashing using bcryptjs</li>
  <li>JWT Authentication</li>
  <li>Protected APIs</li>
  <li>Protected frontend routes</li>
  <li>Negative days validation</li>
  <li>Invalid ID validation</li>
  <li>Duplicate borrow prevention</li>
  <li>Pending payment validation</li>
</ul>

<hr>

<h2>🔄 Application Flow</h2>

<pre>
User Signup
      ↓
User Login
      ↓
JWT Token Generated
      ↓
Dashboard Access
      ↓
View Available Books
      ↓
Borrow Book
      ↓
Track Active Borrow
      ↓
Return Book
      ↓
Overdue Calculation
      ↓
Payment Generated
      ↓
Payment History Updated
      ↓
Pay Now
      ↓
Borrow Again Allowed
</pre>

<hr>

<h2>🧪 Sample Credentials</h2>

<pre>
Email: test@gmail.com
Password: 123456
</pre>

<hr>

<h2>🌍 Deployment</h2>

<ul>
  <li>Frontend: Vercel</li>
  <li>Backend: Render</li>
  <li>Database: MongoDB Atlas</li>
</ul>

<hr>

<h2>📈 Future Improvements</h2>

<ul>
  <li>Responsive UI</li>
  <li>Search functionality</li>
  <li>Toast notifications</li>
  <li>Admin dashboard</li>
  <li>Real payment gateway integration</li>
</ul>

<hr>

<h2>👨‍💻 Author</h2>

<p>
<b>Karan Kumar</b><br>
Full Stack MERN Developer
</p>
