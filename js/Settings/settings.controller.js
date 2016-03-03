referralApp.factory('settingsFactory',['$http','__url',function($http,__url){
    
    var settingsFactory = {};
    var cache = {"data":{"logo":"https:\/\/referraldemo2.github.io\/img\/logo.jpg","program":"Mycompany Referral / IJP Program"}};
    
    settingsFactory.getSettings = function(__callback){
        return cache ? __callback(cache) : $http.get(__url+'/settings').success(__callback);
    };
    
    return settingsFactory;
        
}]);

referralApp.controller('SettingsCtrl',function(){
    
});
