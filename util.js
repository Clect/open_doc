
function Util() {}

/**
 * @constructor
 */
Util.prototype.JsonError = function(msg) {
	this.msg = msg;
}

/**
 * @constructor
 */
Util.prototype.JsonOk = function(data) {
	this.data = data;
}

/**
 * @constructor
 */
Util.prototype.TmplError = function(msg) {
	this.msg = msg;
}

/**
 * @constructor
 */
Util.prototype.TmplResult = function(name, data) {
	this.name = name;
	this.data = data;
}

Util.prototype.SendFile = function(name, data, file) {
	this.name = name;
	this.data = data;
	this.file = file;
}

//API use
Util.prototype.JsonOk = function(data) {
	this.data = data;
}

Util.prototype.TmplNone = function() {}

module.exports = new Util();