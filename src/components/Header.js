import React, { useEffect } from 'react'
import logo from '../assets/logo.svg'

const Header = () => {
    const [theme, setTheme] = React.useState('dark');
    useEffect(() => {
        const themeSelector = document.querySelector('.themeSelector');
        const theme = localStorage.getItem('theme') || 'light';
        document.documentElement.className = theme;
        themeSelector.querySelectorAll('span').forEach((span) => {
            span.addEventListener('click', () => {
                const currentTheme = document.documentElement.className;
                const selectedTheme = span.className;
                if (currentTheme !== selectedTheme) {
                    document.documentElement.className = selectedTheme;
                    localStorage.setItem('theme', selectedTheme);
                }
            });
        });
    }, []);

  return (
  <header>
    <div className='logo'>
        <img src={logo} alt="Taskmate logo" />
        <span>Taskmate</span>

    </div>
    <div className="themeSelector">
        <span className='light'></span>
        <span className='medium'></span>
        <span className='dark'></span>
        <span className='gOne'></span>
        <span className='gTwo'></span>
        <span className='gThree'></span>
    </div>
  </header>
  )
}

export default Header
