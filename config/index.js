var configValues = require('./config');

module.exports = {
getDbConnectionsString: function(){
    return 'mongodb://' + configValues.uname + ':' + configValues.pwd 
    + '@ds041678.mlab.com:41678/sampletodos';
}


}