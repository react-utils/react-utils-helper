

var TestComponent = React.createClass({

    mixins: [RU.FormMixin],

    getInitialState: function(){
        return {
            "isValid": true,
            "isChecked": "Yes" 
        }; 
    },

    render: function(){
        return <div>
                    <RU.Checkbox model={this.link("isValid")} /> 
                    {String(this.state.isValid)}
                    <br/>
                    <RU.Checkbox 
                        model={this.link("isChecked")} 
                        trueValue={"Yes"} 
                        falseValue={"No"} />
                    {this.state.isChecked}
                </div>;
    }

});

React.render(<TestComponent />, mountNode);