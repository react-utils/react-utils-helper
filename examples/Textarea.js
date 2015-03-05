
var TestComponent = React.createClass({

	mixins: [FormMixin],

    getInitialState: function(){
        return {
            "description": "Defaut Text"
        }; 
    },


    render: function(){
        return <div>
        			<RU.Textarea model={this.link("description")} rows={5} cols={40} /><br/>
                    {this.state.description}
                </div>;
    }

});

React.render(<TestComponent />, mountNode);