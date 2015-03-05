
var TestComponent = React.createClass({

	mixins: [RU.FormMixin],

    getInitialState: function(){
        return {
            "name": "Defaut Text"
        }; 
    },

    render: function(){
        return (<div>

        			<RU.Input model={this.link("name")}/> {this.state.name}

         		</div>);
    }

});

React.render(<TestComponent />, mountNode);