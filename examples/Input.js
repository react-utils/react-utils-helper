
var TestComponent = React.createClass({

	mixins: [formMixin],

    getInitialState: function(){
        return {
            "name": "Defaut Text"
        }; 
    },

    render: function(){
        return (<div>

        			<Input model={this.link("name")}/> {this.state.name}

         		</div>);
    }

});

React.render(<TestComponent />, mountNode);