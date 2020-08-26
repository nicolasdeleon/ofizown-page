import React from 'react'
import '../css/Wallpaper.css';

export default function Wallpaper({children, wallpaper}) {
    return (
        <header id="home" className={wallpaper}>
            <div className="layer">
                {children}
            </div>
        </header>
    )
}

Wallpaper.defaultProps = {
    wallpaper: "defaultWallpaper"
}