const user = (function(){
    const getLogin = function(ctx){
        ctx.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs',
        }).then(function () {
            this.partial('views/forms/login.hbs');
        }) 
    };

    const postLogin = function(ctx){
        var username = ctx.params.username;
        var password = ctx.params.password;
        
        userModel.login(username, password).done(function(data){
            storage.saveUser(data);
            notify.showInfo('Login successful.');
            ctx.redirect('#/dashboard');
        });
    };

    const logout = function(ctx){
        userModel.logout().done(function(){
            storage.deleteUser();
            notify.showInfo('Successfuly logged out.');
            ctx.redirect('#/');
        });
    }

    const getRegister = function(ctx) {
        ctx.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs',
        }).then(function () {
            this.partial('views/forms/register.hbs');
        }) 
    };

    const postRegister = function(ctx) {
        userModel.register(ctx.params).done(function(data){
            storage.saveUser(data);
            notify.showInfo('User registration successful.');
            ctx.redirect('#/dashboard');
        });
    }

    const initializeLogin = function(){
        if(userModel.isAuthorized()){
            return storage.getData('userInfo').username;
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