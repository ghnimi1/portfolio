require('dotenv').config()
const express = require('express');
const cors = require('cors')
const app = express();
const cookieParser = require('cookie-parser')
const connectDB = require('./config/connectDB')
const usersRoutes = require('./routes/users.routes')
const skillsRoutes = require('./routes/skills.routes')
const projectsRoutes = require('./routes/projects.routes')
const experiencesRoutes = require('./routes/experience.routes')
const path = require('path');

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/uploads/images', express.static(path.join('uploads', 'images')));

//Routes
app.use('/users', usersRoutes)
app.use('/skills', skillsRoutes)
app.use('/projects', projectsRoutes)
app.use('/experience', experiencesRoutes)

//connect to DB
connectDB()
// server

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Listening on port `, PORT);
})

