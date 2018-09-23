module.exports.index = (req, res) => {
    res.render('login');
}

module.exports.indexPost = (req, res) => {
    console.log(req.body);
    res.render('login');
}