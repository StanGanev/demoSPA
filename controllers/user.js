const user = (function () {
    const getLogin = function (ctx) {
        if (userModel.isAuthorized()) {
            ctx.redirect('#/dashboard')
        } else {
            ctx.loadPartials({
                header: './views/common/header.hbs',
                footer: './views/common/footer.hbs',
            }).then(function () {
                this.partial('views/forms/login.hbs');
            })
        }
    };

    const postLogin = function (ctx) {
        let username = ctx.params.username;
        let password = ctx.params.password;

        userModel.login(username, password).done((data) => {
            storage.saveUser(data);
            notify.showInfo('Login successful.');
            ctx.redirect('#/dashboard');
        }).fail(function () {
            notify.showError('Invalid username or password!')
        });
    };

    const logout = function (ctx) {
        if (!userModel.isAuthorized()) {
            ctx.redirect('#/login')
        } else {
            userModel.logout().done(() => {
                storage.deleteUser();
                notify.showInfo('Successfuly logged out.');
                ctx.redirect('#/');
            }).fail(function () {
                notify.showError('Error')
            });
        }
    }

    const getRegister = function (ctx) {
        if (userModel.isAuthorized()) {
            ctx.redirect('#/dashboard')
        } else {
            ctx.loadPartials({
                header: './views/common/header.hbs',
                footer: './views/common/footer.hbs',
            }).then(function () {
                this.partial('views/forms/register.hbs');
            })
        }
    };

    const postRegister = function (ctx) {
        let username = ctx.params.username;
        let password = ctx.params.password;

        if (!/^[a-zA-Z]{3,}$/.test(username)) {
            notify.showError('Username must be at least 3 symbols of english alphabet!');
        } else if (!/^[a-zA-Z0-9]{6,}/.test(password)) {
            notify.showError('Password must be at least 6 symbols and contain only digits or symbols from english alphabet!');
        } else {
            userModel.register(username,password).done((data) => {
                storage.saveUser(data);
                notify.showInfo('User registration successful.');
                ctx.redirect('#/dashboard');
            }).fail(function () {
                notify.showError('User already exists!');
            });
        }
    }

    const initializeLogin = function () {
        if (userModel.isAuthorized()) {
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