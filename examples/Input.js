
var formMixin = require('react-utils-helpers/src/mixins/formMixin');

var InputComponent = React.createClass({

	mixins: [formMixin],

    getInitialState: function(){
        return {
            "name": "Something"
        }; 
    },

    handleChange: function(e){
        this.state.textbox = e.target.value;
    },

    changeState: function(){
        this.setState({
            name : this.state.textbox 
        }) ;
    },

    dummyAjaxCall: function(){
      console.log("ajax call");
    },

    render: function(){
        return (<div>
                    Input:
        			<Input model={this.link("name")} onChange={this.dummyAjaxCall}/>
                    <br/><br/>
                    Current State: {this.state.name}
                    <br/><br/>
                    Set State: <input type="text" onChange={this.handleChange}/><button type="button" onClick={this.changeState}>Change State</button>
         		</div>);
    }

});

React.render(<InputComponent />, mountNode);