const app = require('./app');
const port = process.env.PORT || 3000;

module.exports = app;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 