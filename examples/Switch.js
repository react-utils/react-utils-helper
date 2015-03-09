var value =	2;

var TestComponent = (
    <RU.Switch expression={value}>
			<RU.When switchCase={1}>One</RU.When>
			<RU.When switchCase={2}>Two</RU.When>
			<RU.When switchCase={3}>Three</RU.When>
			<RU.When switchCase={4}>Four</RU.When>
			<RU.When switchCase={5}>Five</RU.When>
			<RU.When switchCase={6}>Six</RU.When>
			<RU.Default>Default</RU.Default>
	</RU.Switch>
  );

React.render(TestComponent, mountNode);