var arr = [1, 2, 3, 4, 5 ];

var TestComponent = <div>
      	{Repeat(arr, function(val){
        	return <span>{val}</span>;
      	})}
    </div>;

React.render(TestComponent, mountNode);
