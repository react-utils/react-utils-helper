var TestComponent = React.createClass({

    mixins: [formMixin],

    getInitialState: function(){
        return {
            "isValid": true,
            "isChecked": "Yes" 
        }; 
    },

    render: function(){
        return <div>
                    <Checkbox model={this.link("isValid")} /> 
                    {String(this.state.isValid)}
                    <br/>
                    <Checkbox 
                        model={this.link("isChecked")} 
                        trueValue={"Yes"} 
                        falseValue={"No"} />
                    {this.state.isChecked}
                </div>;
    }

});

React.render(<TestComponent />, mountNode);