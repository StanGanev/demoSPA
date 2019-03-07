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

    const listMyPets = function() {
        let url = petsUrl + `?query={"_acl.creator":"${storage.getData('userInfo').id}"}`;

        return requester.get(url);
    }

    const getPetId = function(id) {
        let url = petsUrl + '/' + `${id}`;

        return requester.get(url);
    }

    const deletePet = function(id) {
        let url = petsUrl + '/' + `${id}`;

        return requester.del(url);
    }

    const editPet = function(id,petInfo) {
        let url = petsUrl + '/' + `${id}`;

        return requester.put(url,petInfo);
    }

    return {
        addPet,
        getOtherPets,
        getOtherPetsByCategory,
        listMyPets,
        getPetId,
        deletePet,
        editPet
    }
})()