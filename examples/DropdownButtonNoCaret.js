var buttonInstance = (
      <ButtonToolbar>
        <DropdownButton bsStyle="default" title="No caret" noCaret>
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
        </DropdownButton>
      </ButtonToolbar>
  );

React.render(buttonInstance, mountNode);