function handleSelect (selectedKey) {
  alert('selected ' + selectedKey);
}

var navInstance = (
    <Nav bsStyle="tabs" activeKey={1} onSelect={handleSelect}>
      <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
      <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
      <NavItem eventKey={3} disabled={true}>NavItem 3 content</NavItem>
      <DropdownButton eventKey={4} title="Dropdown" navItem={true}>
        <MenuItem eventKey="4.1">Action</MenuItem>
        <MenuItem eventKey="4.2">Another action</MenuItem>
        <MenuItem eventKey="4.3">Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4.4">Separated link</MenuItem>
      </DropdownButton>
    </Nav>
  );

React.render(navInstance, mountNode);
