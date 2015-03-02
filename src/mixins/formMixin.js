
var formMixin = {
    link: function(name){
        var that = this;
        return {
            getValue: function(){
                return that.state[name];
            },
            onChange: function(value, e){

                var state = {};
                state[name] = value;
                that.setState(state);
                
            }
        }
    }
};

module.exports = formMixin;