import * as React from "react";
import * as ReactDOM from 'react-dom';
import Hello from "./components/Hello";
import registerServiceWorker from './registerServiceWorker';




class App  extends React.Component<any,any>{

	public render() {
		return (
			<div>
				<Hello />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById("root")as HTMLElement);
registerServiceWorker();