const pet = (function() {
    const getAddPet = function(ctx) {
        ctx.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'
        }).then(function () {
            this.partial('./views/create.hbs');
        })
    };

    const postAddPet = function(ctx) {
        
    }

    //const getPets 


    return {
        getAddPet,
        postAddPet
    }
})();