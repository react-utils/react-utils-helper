var condition = false;

var TestComponent = ( 
		<RU.Hide model={condition}>
			Hello World
		</RU.Hide>
	);

React.render(TestComponent, mountNode);