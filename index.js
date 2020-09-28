const express = require('express');
app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const AdminBro = require('admin-bro');

const buildAdminRouter = require('./admin/routes/admin.routes');
const options = require('./admin/options/index.options');

const admin = new AdminBro(options);
const router = buildAdminRouter(admin);

mongoose.connect('mongodb://localhost:27017/adminbro', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

app.use('/admin', router);

app.use('/uploads', express.static('uploads'));

app.listen(8080, () => {
  console.log(`http://localhost:8080`);
});
