const petModel = (() => {

    var petsUrl = `appdata/${storage.appKey}/pets`
    const addPet = function (params) {
        var data = {
            "name": params.name,
            "description": params.description,
            "imageURL": params.imageURL,
            "category": params.category,
            "likes": "0"
        };

        return requester.post(petsUrl,data);
    }

    const getOtherPets = function() {
        let url = petsUrl + '?query={}&sort={"likes": -1}';

        return requester.get(url);
    }

    const getOtherPetsByCategory = function(category) {
        let url = petsUrl + `?query={"category":"${category}"}&sort={"likes": -1}`;

        return requester.get(url);
    }

    return {
        addPet,
        getOtherPets,
        getOtherPetsByCategory
    }
})()