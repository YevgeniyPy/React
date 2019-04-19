import React from 'react';
import Button from '@material-ui/core/Button';
import { withLocalize } from 'react-localize-redux';
import { withStyles } from '@material-ui/core/styles';

const LanguageSwitcher = ({
  languages, activeLanguage, setActiveLanguage, classes,
}) => (
  <div>
    {
      languages.map(lang => (
        <Button
          key={lang.code}
          color={lang.code === activeLanguage.code ? 'secondary' : 'default'}
          onClick={() => setActiveLanguage(lang.code)}
          className={classes.button}
        >
          {lang.name}
        </Button>
      ))
    }
  </div>
);

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

export default withLocalize(withStyles(styles, { withTheme: true })(LanguageSwitcher));
