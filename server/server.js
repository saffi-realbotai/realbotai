const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const scriptRoutes = require('./routes/scriptRoutes');
const aiAgentRoutes = require('./routes/aiAgentRoutes');
// Other necessary routes

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/scripts', scriptRoutes);
app.use('/api/ai-agents', aiAgentRoutes);
// Add other routes like /api/conversations, /api/metadata, etc.

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
