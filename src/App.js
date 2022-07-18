import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Alert from './components/layout/Alert';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { GitHubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';
import User from './pages/User';
import { ThemeProvider } from './context/ThemeContext/ThemeContext';

function App() {
	return (
		<ThemeProvider>
			<GitHubProvider>
				<AlertProvider>
					<BrowserRouter>
						<div className='flex flex-col justify-between h-screen'>
							<Navbar />

							<main className='container mx-auto px-3 pb-12'>
								<Alert />
								<Routes>
									<Route exact path='/' element={<Home />} />
									<Route exact path='/about' element={<About />} />
									<Route exact path='/user/:login' element={<User />} />
									<Route exact path='/notfound' element={<NotFound />} />
									<Route exact path='/*' element={<NotFound />} />
								</Routes>
							</main>
							<Footer />
						</div>
					</BrowserRouter>
				</AlertProvider>
			</GitHubProvider>
		</ThemeProvider>
	);
}

export default App;
