import { useState } from "react";
import { data } from "./assets/data";
function App() {
	const [numbers, setNumbers] = useState(data);
	return (
		<div className="App p-r h-screen">
			<div className="container centered  px-1.5">
				<div className="header flex j-space-between">
					<div className="name">calc</div>
					<div className="theme"></div>
				</div>
				<div className="main">
					<div className="hienthi bg-blue-900 text-right color-white br-5">
						399,981
					</div>
					<div className="mt-2 p-1.5 bg-blue-900 grid-cols-4 gap-3 grid br-5 btn text-base">
						{numbers.map((number, index) => (
							<div
								className={
									"bg-gray-200 br-5 w-full h-4 p-r pt-0.5" +
									(number === "DEL" ? " color-gray-200" : "")
								}
								style={
									number === "DEL"
										? {
												boxShadow: "0px 5px 0px #414E73",
												backgroundColor: "#647299",
										  }
										: { boxShadow: "0px 5px 0px #B2A39B" }
								}
							>
								<p className="centered w-full text-center">{number}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
