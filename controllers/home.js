 const home = (function(){
    const index = function(ctx) {
        if(storage.getData('userInfo')) {
            ctx.username = storage.getData('userInfo').username;
        } else {
            ctx.username = null;
        }
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