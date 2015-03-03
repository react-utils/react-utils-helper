var condition = true;

var TestComponent = ( 
		<Show model={condition}>
			Hello World
		</Show>
	);

React.render(TestComponent, mountNode);