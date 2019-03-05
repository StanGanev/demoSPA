const pet = (function () {
    const getAddPet = function (ctx) {
        if (!userModel.isAuthorized()) {
            ctx.redirect('#/login')
        } else {
            ctx.username = user.initializeLogin();
            ctx.loadPartials({
                header: './views/common/header.hbs',
                footer: './views/common/footer.hbs'
            }).then(function () {
                this.partial('./views/create.hbs');
            })
        }
    };

    const postAddPet = function (ctx) {
        petModel.addPet(ctx.params).done(function () {
            notify.showInfo('Pet added sucessfuly!')
            ctx.redirect('#/dashboard')
        }).fail(function () {
            notify.handleError()
        })
    }

    const getPets = function (ctx) {
        if (!userModel.isAuthorized()) {
            ctx.redirect('#/login')
        } else {
            ctx.username = user.initializeLogin();
            petModel.getOtherPets().done((pets) => {
                pets = pets.filter((p) => p._acl.creator !== storage.getData('userInfo').id);
                ctx.pet = pets;


                ctx.loadPartials({
                    header: './views/common/header.hbs',
                    footer: './views/common/footer.hbs'
                }).then(function () {
                    this.partial('./views/dashboard.hbs');
                })
            }).fail(function () {
                notify.handleError();
            })
        }
    }

    const getCats = function (ctx) {
        petModel.getOtherPetsByCategory('Cat').done((pets) => {
            console.log(pets)
            
            pets = pets.filter((p) => p._acl.creator !== storage.getData('userInfo').id);

            ctx.pet = pets;
            ctx.partial('views/dashboard.hbs');
        }).fail(function() {
            notify.handleError();
        })
    }


    return {
        getAddPet,
        postAddPet,
        getPets,
        getCats
    }
})();