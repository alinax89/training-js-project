var str = 'Hello';
var num = 10;
var bool = true;
var newStr = 'hello'; // любой тип
//============================================================================================================
var arr = [1, 2, 3];
var arr1 = ['H', 'E', 'L', 'P'];
//============================================================================================================
function info(name, age) {
    console.log(name + ", " + age);
}
info('Andrei', 30);
//============================================================================================================
var Server = /** @class */ (function () {
    function Server(name, ip) {
        this.name = name;
        this.ip = ip;
        this.status = 'working';
    }
    Server.prototype.turnOn = function () {
        this.status = 'working';
    };
    Server.prototype.turnOff = function () {
        this.status = 'offline';
    };
    Server.prototype.getStatus = function () {
        return this.status;
    };
    Server.VERSION = '1.0.0';
    return Server;
}());
var server = new Server('VS', '1.3.4.2');
var user = {
    newName: 'Andrei',
    newAge: 30,
    logInfo: function () {
        console.log(this.newName + this.newAge);
    }
};
