import { useState } from 'react';
import './App.scss';
import data from './assets/data';
import Header from './components/Header';
import Menu from './components/Menu';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';

function App() {
	const [cart, setCart] = useState([]);

	console.log(cart);
	return (
		<div>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<Menu cart={cart} setCart={setCart} />} />
					<Route
						path='/cart'
						element={<Cart cart={cart} setCart={setCart} />}
					/>
				</Routes>
			</main>
		</div>
	);
}

export default App;
