import { useTheme } from '../hooks/useTheme';
import './ThemeSelector.css';
import modeIcon from '../assets/mode-icon.svg';

const themeColors = ['#58249c', '#249c6b', '#b70233'];

export default function ThemeSelector() {
	const { changeColor, changeMode, mode } = useTheme();

	const toggleMode = () => {
		changeMode(mode === 'dark' ? 'light' : 'dark');
	};

	const changeModeColor = () => {
		const myelement = document.querySelector('html').getAttribute('data-theme');

		if (myelement === 'dark') {
			document.querySelector('html').setAttribute('data-theme', 'emerald');
		} else {
			document.querySelector('html').setAttribute('data-theme', 'dark');
		}

		console.log(myelement);
	};

	return (
		<div className='theme-selector'>
			<div className='mode-toggle' onClick={changeModeColor}>
				<img
					src={modeIcon}
					// onClick={toggleMode}
					alt='mode icon'
					style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }}
				/>
			</div>
			<div className='theme-buttons'>
				{themeColors.map((color) => (
					<div
						key={color}
						onClick={() => changeColor(color)}
						style={{ background: color }}
					/>
				))}
			</div>
		</div>
	);
}
