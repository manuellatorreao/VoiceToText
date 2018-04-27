module.exports = function(app) {
    // home page
    app.get('/', (req, res) => {
        res.render('index.html');
        // res.sendfile(__dirname + '/views/index.html');
    });
};