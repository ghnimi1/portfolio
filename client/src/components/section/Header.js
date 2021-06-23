import React from 'react';
import HeaderButton from '../layouts/HeaderButton'
import { header } from '../../profile'
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';

const Header = () => {
    const scrollTo = () => {
        window.scrollTo({
            top: 0,
            left: 10000,
            behavior: "smooth"
        })
    }

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark-mode')
        document.getElementById('not-dark').classList.toggle('inverse-dark')
        document.getElementById('not').classList.toggle('inverse-dark')
        var x = document.getElementsByClassName('img-pro')
        for (let i = 0; i < x.length; i += 1) {
            x.item(i).classList.toggle("inverse-dark");
        }
        if (document.documentElement.classList.contains('dark-mode'))
            localStorage.setItem('mode', 'Dark')
        else
            localStorage.setItem('mode', 'Light')
    }
    return (
        <div>
            <div className="Header">
                <h1 className='mb-5 mb-sm-1'>{`I'm ${header.name}`}</h1>
                <p className="line-1 anim-typewriter mt-md-15">MERN stack developer and this is my portfolio... </p>
                <label className="switch">
                    <input id="mode-switch" onClick={toggleDarkMode} type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <HeaderButton />
            </div>
            <ExpandLessOutlinedIcon
                style={{
                    backgroundColor: '#e96224',
                    borderRadius: '50px',
                    width: '40px',
                    height: "40px"
                }}
                fontSize='large'
                id="not-dark" onClick={scrollTo} className="gtp" />
        </div>
    )

}

export default Header;