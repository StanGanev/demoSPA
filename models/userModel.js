const userModel = (() => {
    var userUrl = `user/${storage.appKey}`;

    const login = function(username, password){
        var authString = btoa(`${username}:${password}`);
        var headers = { 
            Authorization: 'Basic ' + authString 
        };

        var data = { username, password };
        var url = userUrl + '/login';
        
        return requester.post(url, data, headers);
    };

    const logout = function(){
        var url = userUrl +  '/_logout';

        return requester.post(url);
    }

    const register = function(params){
        var data = {
            username: params.username,
            password: params.password,
            first_name: params.first_name,
            last_name: params.last_name
        }

        var authString = btoa(`${storage.appKey}:${storage.appSecret}`);
        var headers = { Authorization: 'Basic ' + authString};
        
        return requester.post(userUrl, data, headers);
    };

     function isAuthorized(){
        return storage.getData('authToken') !== null;
    };

    return {
        login,
        logout,
        register,
        isAuthorized
    }
})();