const app = Sammy('#container', function(){
    this.use('Handlebars', 'hbs');

    this.get('#/', home.index);
    this.get('/', home.index);
    this.get('/index', home.index);

    this.get('#/login', user.getLogin);
    this.post('#/login', user.postLogin);
    this.get('#/logout', user.logout);
    this.get('#/register', user.getRegister);
    this.post('#/register', user.postRegister);

    this.get('#/addPet', pet.getAddPet);
    this.post('#/addPet', pet.postAddPet);
    this.get('#/dashboard', pet.getPets);
    this.get('#/dashboard/all', pet.getPets);
    this.get('#/dashboard/cats', pet.getCats);
    this.get('#/dashboard/dogs', pet.getDogs);
    this.get('#/dashboard/parrots', pet.getParrots);
    this.get('#/dashboard/reptiles', pet.getReptiles);
    this.get('#/dashboard/other', pet.getOthers);
    this.get('#/myPets', pet.getMyPets);
    this.get('#/details/:id', pet.getDetails);
    this.get('#/delete/:id', pet.getDelete);
    this.post('#/delete/:id', pet.postDelete);
    this.get('#/edit/:id', pet.getEdit);
    this.post('#/edit/:id', pet.postEdit);
    this.get('#/pet/:id', pet.petPet);
});

$(function(){
    app.run('#/');
});