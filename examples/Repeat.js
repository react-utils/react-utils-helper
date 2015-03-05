var arr = [1, 2, 3, 4, 5 ];

var TestComponent = <div>
      	{RU.Repeat(arr, function(val){
        	return <span>{val}</span>;
      	})}
    </div>;

React.render(TestComponent, mountNode);
