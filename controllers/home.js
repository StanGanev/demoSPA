 const home = (function(){
    const index = function(ctx) {
        ctx.loadPartials({
            header: './views/common/header.hbs',
            loginForm: './views/forms/login.hbs',
            registerForm: './views/forms/register.hbs',
            footer: './views/common/footer.hbs'
        }).then(function () {
            this.partial('./views/wellcome.hbs');
        })
    };

    return {
        index
    };
}());