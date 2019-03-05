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
        if (!userModel.isAuthorized()) {
            ctx.redirect('#/login')
        } else {
            ctx.username = user.initializeLogin();
            petModel.getOtherPetsByCategory('Cat').done((pets) => {


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

    const getDogs = function (ctx) {
        if (!userModel.isAuthorized()) {
            ctx.redirect('#/login')
        } else {
            ctx.username = user.initializeLogin();
            petModel.getOtherPetsByCategory('Dog').done((pets) => {


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

    const getParrots = function (ctx) {
        if (!userModel.isAuthorized()) {
            ctx.redirect('#/login')
        } else {
            ctx.username = user.initializeLogin();
            petModel.getOtherPetsByCategory('Parrot').done((pets) => {


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

    const getReptiles = function (ctx) {
        if (!userModel.isAuthorized()) {
            ctx.redirect('#/login')
        } else {
            ctx.username = user.initializeLogin();
            petModel.getOtherPetsByCategory('Reptile').done((pets) => {


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

    const getOthers = function (ctx) {
        if (!userModel.isAuthorized()) {
            ctx.redirect('#/login')
        } else {
            ctx.username = user.initializeLogin();
            petModel.getOtherPetsByCategory('Other').done((pets) => {


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

    const getMyPets = function (ctx) {
        if (!userModel.isAuthorized()) {
            ctx.redirect('#/login')
        } else {
            ctx.username = user.initializeLogin();
            petModel.listMyPets().done((pets) => {
                ctx.pet = pets;

                ctx.loadPartials({
                    header: './views/common/header.hbs',
                    footer: './views/common/footer.hbs'
                }).then(function () {
                    this.partial('./views/myPets.hbs');
                })
            }).fail(function () {
                notify.handleError();
            })
        }
    }

    const getDetails = function (ctx) {
        if (!userModel.isAuthorized()) {
            ctx.redirect('#/login')
        } else {
            ctx.username = user.initializeLogin();
            petModel.getPetId(ctx.params['_id']).done((pet) => {
                ctx.pet = pet

                ctx.loadPartials({
                    header: './views/common/header.hbs',
                    footer: './views/common/footer.hbs'
                }).then(function () {
                    this.partial('./views/details.hbs');
                })
            }).fail(function () {
                notify.handleError();
            })
        }
    }


    return {
        getAddPet,
        postAddPet,
        getPets,
        getCats,
        getDogs,
        getParrots,
        getReptiles,
        getOthers,
        getMyPets,
        getDetails
    }
})();