 const home = (function(){
    const index = function(ctx) {
        ctx.username = user.initializeLogin();
        ctx.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'
        }).then(function () {
            this.partial('./views/wellcome.hbs');
        })
    };

    return {
        index
    };
}());