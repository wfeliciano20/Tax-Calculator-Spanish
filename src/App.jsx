import { useState } from 'react';
import './App.css';

function App() {
	const [tax, setTax] = useState(11.5);
	const [price, setPrice] = useState(0);
	const [totalTaxes, setTotalTaxes] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);

	const handleClear = (e) => {
		e.preventDefault();
		setTax(11.5);
		setPrice(0);
		setTotalTaxes(0);
		setTotalPrice(0);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const totalTax = price * (tax / 100);
		setTotalTaxes(totalTax);

		setTotalPrice(Number(price) + totalTax);
	};

	return (
		<div className="App">
			<h1>Calculadora de Taxes</h1>

			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend>Calculadora de Tax</legend>
					<label for="price">Cantidad</label>
					<input
						type="number"
						step="0.1"
						name="price"
						id="price"
						placeholder="Cantidad"
						value={price ? price : ''}
						onChange={(e) => setPrice(e.target.value)}
					/>
					<label for="tax">Tax</label>
					<input
						type="number"
						step="0.1"
						name="tax"
						id="tax"
						value={tax}
						onChange={(e) => setTax(e.target.value)}
					/>
					<button type="reset" id="reset" onClick={handleClear}>
						clear
					</button>
					<input type="submit" value="calcular" />
				</fieldset>
			</form>

			<div className="Total">
				<h3>Cantidad: ${price ? price : '0.00'}</h3>
				<h3>Total de tax: ${Number(totalTaxes).toFixed(2)} </h3>
				<h3>Total con tax incluido: ${Number(totalPrice).toFixed(2)}</h3>
			</div>
		</div>
	);
}

export default App;
