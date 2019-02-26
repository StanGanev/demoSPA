const pet = (function() {
    const getAddPet = function(ctx) {
        ctx.partial('./views/create.hbs')
    };

    const postAddPet = function(ctx) {
        var name = ctx.parms.name;
        var description = ctx.parms.description
        var img = ctx.parms.imageURL
        var category = ctx.parms.category
    }


    return {
        getAddPet,
        postAddPet
    }
})();