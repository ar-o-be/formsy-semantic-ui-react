import React from 'react';
import Checkbox from './FormsyCheckbox';
import { Radio } from 'semantic-ui-react';
export default (props) => <Checkbox as={ Radio } { ...props }/>;
