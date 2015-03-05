var condition = true;

var TestComponent = ( 
		<RU.Show model={condition}>
			Hello World
		</RU.Show>
	);

React.render(TestComponent, mountNode);