import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core';
import { withLocalize } from 'react-localize-redux';
import { connect } from 'react-redux';
import { setArchitect } from '../store/actions/architects';

class ArchitectsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.props.setArchitect(this.props.architects[this.state.selectedIndex].key);
  }

  handleChange(event, index) {
    this.setState({ selectedIndex: index });
    this.props.setArchitect(this.props.architects[index].key);
  }

  render() {
    const { classes, architects, language, activeLanguage } = this.props;
    const lan = activeLanguage === undefined ? language : activeLanguage.code;
    return (
      <div>
        <div className={classes.toolbar} />
        <List>
          {
          architects.map((architect, i) => (
            <ListItem button key={architect.key} onClick={event => this.handleChange(event, i)} selected={this.state.selectedIndex === i}>
              <ListItemText primary={`${architect.description.name[lan].firstName} ${architect.description.name[lan].secondName}`} />
            </ListItem>
          ))
        }
        </List>
      </div>
    );
  }
}

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
});

export default withLocalize(connect(
  store => ({
    language: store.page.language,
    architects: store.architects.architects,
    currentArchitect: store.architects.currentArchitect,
  }),
  {
    setArchitect,
  },
)(withStyles(styles, { withTheme: true })(ArchitectsList)));
