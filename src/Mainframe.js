import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './home';
import signup from './signup';

const Mainrouter = () => (
<div>
		<Switch>	

			<Route exact path = "/" component = {Home} />

			<Route exact path = "/signup" component = {signup} />


		</Switch>
</div>

)
export default Mainrouter;