var TestComponent = React.createClass({

	mixins: [RU.FormMixin],

    getInitialState: function(){
        return {
            "classroom_id": 2
        }; 
    },

    render: function(){
        return <div> 
                    <RU.Radio model={this.link("classroom_id")} name="name" value={1}/>1 <br/>
                    <RU.Radio model={this.link("classroom_id")} name="name" value={2}/>2 <br/>
                    <RU.Radio model={this.link("classroom_id")} name="name" value={3}/>3 <br/>
          			{this.state.classroom_id}

                </div>;
    }

});

React.render(<TestComponent />, mountNode);