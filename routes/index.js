
const indexModel= require('../model')()


module.exports = function(router, expressApp){
    router.get('/users', indexModel.getUsers);
    router.post('/saveuser', indexModel.saveUser);
    router.put('./users', indexModel.users);
    router.patch('./updatepassword', indexModel.updatepassword);
    router.delete('./user', indexModel.user);
    
    
    return router;
    
}