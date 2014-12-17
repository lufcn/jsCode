
var JsUtil = {};
JsUtil.isTargetType = function(obj,target){
        var allType = {
                'array' : '[object Array]',
                'object' : '[object Object]',
                'function' : '[object Function]',
                'data' : '[object Date]',
                'null' : '[object Null]',
                'undefined' : '[object Undefined]',
                'regex' : '[object RegExp]',
                'number' : '[object Number]',
                'boolean' : '[object Boolean]',
                'string' : '[object String]'
            }
        var objType = Object.prototype.toString.call(obj);
        var getType = allType[target.toLowerCase()];
        return objType === getType;
    };
    
JsUtil.validate = function(arr,fn){
        var _this = this;
        var isArr = _this.isTargetType(arr,'array');
        var isFun = _this.isTargetType(fn,'function');
        if(!isArr) {
                throw new Error('请传入数组对象');
        }
        else if(!isFun){
                throw new Error('请传入函数对象');
        }
    }
    
JsUtil.filter = function(arr,fn){
    var result = [];
    var _this = this;
    _this.validate(arr,fn);
        if(arr && arr.filter) {
            console.log('use Array filter');
            return arr.filter(fn);
            }
        else{
            console.log('Object does not support filter');
            var length = arr.length;
            for(var i = 0 ; i < length ; i++){
                    if(fn.call(null,arr[i])){
                            result.push(arr[i]);
                        }
                }
        }
        return result;
             
    };
JsUtil.map = function(arr,fn) {
    var result = [];
    var _this = this;
    _this.validate(arr,fn);
    if(arr && arr.map) {
        console.log('user Array map');
        return arr.map(fn);
    }
    else{
        console.log('Object does not support map');
        var length = arr.length;
        for(var i = 0 ; i < length ; i++) {
                result.push(fn.call(null,arr[i]));
            }
            return result;
        }
    };
JsUtil.reduce = function(arr,fn) {
    var result = [];
    var _this = this;
    _this.validate(arr,fn);
    if(arr && arr.reduce) {
        console.log('use Array reduce');
        return arr.reduce(fn);
        }
    else{
        console.log('Object does not support reduce');
        var length = arr.length;
            if(length) {
            var rst = a[0];
            for(var i = 1 ; i < length ; i++) {
                    rst  = fn.call(null,rst,arr[i]);
                }
                return rst;
            }
            return 0;
        }
    }
JsUtil.some = function(arr,fn) {
    var result = false;
    var _this = this;
    _this.validate(arr,fn);
    if(arr && arr.some) {
        console.log('use Array some');
        return arr.some(fn);
        }
    else {
        console.log('Object does not support some');
        var length = arr.length;
        if(length) {
            for(var i = 0 ; i < length ; i++) {
                    if(fn.call(null,arr[i])){
                        return true;
                    }
                }
            }
        return result;
        }
    };
JsUtil.every = function(arr,fn) {
    var result = true;
    var _this = this;
    _this.validate(arr,fn);
    var key = false;
    if(key && arr && arr.every) {
            console.log('use Array every');
            return arr.every(fn);
        }
    else {
            console.log('Objet does not support every');
            var length = arr.length;
            if(length) {
                    for(var i = 0 ; i < length ; i++) {
                            if(!fn.call(null,arr[i])){
                                return false;
                                }
                        }
                }
            return result;
        }
    }

