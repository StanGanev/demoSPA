const user = (function(){
    const getLogin = function(ctx){
        ctx.partial('views/forms/login.hbs');
    };

    const postLogin = function(ctx){
        var username = ctx.params.username;
        var password = ctx.params.password;
        
        userModel.login(username, password).done(function(data){
            storage.saveUser(data);
            notify.showInfo('Login successful.');
            ctx.redirect('#/');
        });
    };

    const logout = function(ctx){
        userModel.logout().done(function(){
            storage.deleteUser();
            
            ctx.redirect('#/');
        });
    }

    const getRegister = function(ctx) {
        ctx.partial('views/forms/register.hbs');
    };

    const postRegister = function(ctx) {
        userModel.register(ctx.params).done(function(data){
            storage.saveUser(data);
            notify.showInfo('User registration successful.');
            ctx.redirect('#/');
        });
    }

    const initializeLogin = function(){
        if(userModel.isAuthorized()){
            return true
        }
        else {
            return false
        }
    };

    return {
        getLogin,
        postLogin,
        logout,
        getRegister,
        postRegister,
        initializeLogin
    };
}());