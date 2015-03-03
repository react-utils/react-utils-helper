var TestComponent = React.createClass({

	mixins: [formMixin],

    getInitialState: function(){
        return {
            "classroom_id": 2
        }; 
    },

    render: function(){
        return <div> 
                    <Radio model={this.link("classroom_id")} name="name" value={1}/>1 <br/>
                    <Radio model={this.link("classroom_id")} name="name" value={2}/>2 <br/>
                    <Radio model={this.link("classroom_id")} name="name" value={3}/>3 <br/>
          			{this.state.classroom_id}

                </div>;
    }

});

React.render(<TestComponent />, mountNode);