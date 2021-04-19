import React from "react";
import { useThemeUpdate } from "./ThemeContext"
import Switch from '@material-ui/core/Switch';


function DTModifier() {

  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };


  const toggleTheme = useThemeUpdate()


  return (

    <div>
      <p className="dtmode" onClick={toggleTheme}>
        <Switch
          checked={state.checkedB}
          onChange={handleChange}
          color="secondary"
          name="checkedB"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      </p>
    </div>
  );
}


export default DTModifier;
