import React from 'react';
import './App.scss';
import { CssBaseline } from '@material-ui/core';

const App: React.FC = () => {
	return (
			<React.Fragment>
				<CssBaseline/>
				<div className="app-root">
					<header>
						<p>
							SuppliShare is where you share your supplements.
						</p>
						<p>
							Supplements were created to be shared, if not used.
						</p>
					</header>
				</div>
			</React.Fragment>
	);
};

export default App;
