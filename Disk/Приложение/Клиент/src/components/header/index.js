import React, {useState} from 'react';
import { slide as Menu } from 'react-burger-menu'

const getMenuStyles = () => ({
    bmBurgerButton: {
        position: 'absolute',
        width: 35,
        height: 35,
        margin: "30px",
        zIndex: 19,
    },
    bmBurgerBars: {
        background: "gray"
    },
    bmBurgerBarsHover: {
        background: "red"
    },
    bmCross: {
        background: "blue"
    },
    bmItemList: {
        background: "gray",
        paddingLeft: 10,
        paddingTop: 10,
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%',
        width: 255,
        zIndex: 30
    },
    bmMenu: {
        background: "blue"
    },
    bmItem: {
        outline: 'none',
        color: "white",
        '&:focus': {
            outline: 'none'
        }
    },
    bmMorphShape: {
        fill: "blue"
    },
    bmOverlay: {
        background: 'rgba(194,194,194,0.15)',
        zIndex: 20
    }
});

export const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <Menu
            isOpen={openMenu}
            styles={getMenuStyles()}
            onStateChange={(state) => setOpenMenu(state.isOpen)}
        >
            <a id="home" className="menu-item" href="/">Все пользователи</a>
            <a id="home" className="menu-item" href="/">Пользователи</a>
            <a id="about" className="menu-item" href="/about">Выйти</a>
        </Menu>
    );
};
