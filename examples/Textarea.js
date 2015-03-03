
var TestComponent = React.createClass({

	mixins: [formMixin],

    getInitialState: function(){
        return {
            "description": "Defaut Text"
        }; 
    },


    render: function(){
        return <div>
        			<Textarea model={this.link("description")} rows={5} cols={40} /><br/>
                    {this.state.description}
                </div>;
    }

});

React.render(<TestComponent />, mountNode);