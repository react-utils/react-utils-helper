var TestComponent = React.createClass({

	mixins: [FormMixin],

    getInitialState: function(){
        return {
            "classroom_id": 2
        }; 
    },

    render: function(){
        var options=[
                    {id: 1, value: "One"},
                    {id: 2, value: "Two"},
                    {id: 3, value: "Three"}
                ];

        return <div>
                <RU.Select 
                    model={this.link("classroom_id")}
                    options={options}/>
                    &nbsp;
                    {this.state.classroom_id}
                </div>;
    }

});

React.render(<TestComponent />, mountNode);