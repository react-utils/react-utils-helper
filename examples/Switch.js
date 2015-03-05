var value =	2;

var TestComponent = (
    <RU.Switch expression={value}>
			<RU.When switchCase={1}>one</RU.When>
			<RU.When switchCase={2}>two</RU.When>
			<RU.When switchCase={3}>three</RU.When>
			<RU.When switchCase={4}>four</RU.When>
			<RU.When switchCase={5}>five</RU.When>
			<RU.When switchCase={6}>six</RU.When>
			<RU.Default>default</RU.Default>
	</RU.Switch>
  );

React.render(TestComponent, mountNode);