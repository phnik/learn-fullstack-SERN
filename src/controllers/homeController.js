import db from '../models/index'
let getHomePage = async (req, res) => {
    try { 
        let data = await db.User.findAll();
        console.log(data);
        return res.send(data);
    } catch (e) {
        console.log(e);
    }
    
    // return res.render('homepage.ejs');
}

let getAboutPage = (req, res) => {
    return res.render('./test/about.ejs');
}
// object: {
//     key: '',
//     value: ''
// }
module.exports = {
    getHomePage, getAboutPage
}