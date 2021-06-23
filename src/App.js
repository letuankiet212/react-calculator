
import {data} from './assets/data'
function App() {
	return (
		<div className="App p-r h-screen">
			<div className="container centered bg-black h-1/3 px-1.5">
				<div className="header flex j-space-between">
					<div className="name">calc</div>
					<div className="theme"></div>
				</div>
				<div className="main">
					<div className="hienthi bg-blue-900 text-right color-white">
						399,981
					</div>
					<div className="mt-2 p-1.5 bg-blue-900 grid-cols-4 gap-3 grid">
						<div className="bg-gray-200 br-5 w-full h-4 p-r">
						</div>
						<div className="bg-gray-200 br-5 w-full h-4">

						</div>
						<div className="bg-gray-200 br-5 w-full h-4">

						</div>
						<div className="bg-gray-200 br-5 w-full h-4">

						</div>
						<div className="bg-gray-200 br-5 w-full h-4">

						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
