var value =	2;

var switchComponent = (
    <Switch expression={value}>
		<When switchCase={1}>one</When>
		<When switchCase={2}>two</When>
		<When switchCase={3}>three</When>
		<When switchCase={4}>four</When>
		<When switchCase={5}>five</When>
		<When switchCase={6}>six</When>
		<Default>default</Default>
	</Switch>
  );

React.render(switchComponent, mountNode);