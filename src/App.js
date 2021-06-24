import { useState } from "react";
import { data } from "./assets/data";
function App() {
	const [numbers, setNumbers] = useState(data);
	const [result, setResult] = useState('')
	const filterClass = (text) => {
		switch (text) {
			case 'DEL':
				return " color-gray-200 btn-blue hover:press-down-blue"
			case 'RESET':
				return " color-gray-200 btn-blue hover:press-down-blue"
			case '=':
				return " color-gray-200 btn-red hover:press-down-red"
			default:
				return ' box-shadow hover:press-down';
		}
	}
	const fillterCol = (text) => {
		if (text === 'RESET' || text === '=') {
			return ' col-span-2'
		}
		else return ''
	}

	const handleClick = (text) => {
		setResult(result.concat(text))
		if (text === 'RESET') {
			setResult('')
		}
		if(text === 'DEL'){
			setResult(result.slice(0,-1))
		}
		if (text === '=') {
			try { 
				setResult(eval(result).toString())
			}
			catch {
				setResult('')
			}
		}
	}

	return (
		<div className="App p-r h-screen">
			<div className="container mx-auto  px-1.5">
				<div className="header flex j-space-between">
					<div className="name">calc</div>
					<div className="theme"></div>
				</div>
				<div className="main">
					<div className="hienthi bg-blue-900 text-right color-white rounded-3xl text-6xl pr-4 py-4 tracking-tight" >
						{result}
					</div>
					<div className="mt-3 p-3.5 bg-blue-900 grid-cols-4 gap-x-3 gap-y-3.5 grid rounded-2xl btn text-base">
						{numbers.map((number, index) => (
							<div key={index} className={"w-full h-7 p-r rounded-3xl " + fillterCol(number)} onClick={() => handleClick(number)}>
								<div className={"p-a t-0 l-0 w-full h-full transition-all duration-100 bg-gray-200 rounded-3xl" + filterClass(number)}>
									<p className="centered w-full text-center text-5xl pt-1">{number}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
