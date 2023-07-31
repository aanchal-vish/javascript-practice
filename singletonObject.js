const singleton = (function () {
    let instance;

    function createInstance () {
        const obj = {message: 'i am a singleton object'};
        return obj;
    }

    return {
        getInstance: function() {
            if(!instance) {
                createInstance();
            }
        return instance;
        }
    }
})();

const singleton1 = singleton.getInstance();
const singleton2 = singleton.getInstance();
console.log(singleton1 === singleton2) // true