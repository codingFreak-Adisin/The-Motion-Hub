import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#00FFFF",
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
    if(value === 0) history.push('/');
    else if(value === 1) history.push('/movies');
    else if(value === 2) history.push('/series');
    else if(value === 3) history.push('/search');
    else if(value === 4) history.push('/reality');
  }, [value, history])

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
              <BottomNavigationAction
        style={{ color: "#8B0000" }}
        label="Trending 🔥"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        style={{ color: "Black" }}
        label="Movies 🎥"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        style={{ color: "#8B0000" }}
        label="TV Series 📺"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        style={{ color: "black" }}
        label="Search 🏃"
        icon={<SearchIcon />}
      />
        <BottomNavigationAction
        style={{ color: "#8B0000" }}
        label="Augmented Reality 📱"
        icon={<VideoLibraryIcon />}
      />
    </BottomNavigation>
  );
}