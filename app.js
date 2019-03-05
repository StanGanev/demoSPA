const app = Sammy('#container', function(){
    this.use('Handlebars', 'hbs');
    this.before({except: {}}, function() {
        user.initializeLogin();
    });

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
});

$(function(){
    app.run('#/');
});