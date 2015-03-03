var condition = false;

var TestComponent = ( 
		<Hide model={condition}>
			Hello World
		</Hide>
	);

React.render(TestComponent, mountNode);