import React from 'react'
import './Loader.css'

const Loader = () => {
  return (
    <div className="loader">
        <div className="logocontainer">
            <svg width="199" height="200" viewBox="0 0 186 187" fill="none" xmlns="http://www.w3.org/2000/svg" className='logo-svg'>
                <path className="logo-path" d="M46.2607 120.02C49.9326 120.769 53.6711 122.159 57.1094 124.438C62.8654 128.252 67.9345 134.655 70.4043 145.034C60.1784 148.797 43.6568 161.191 41 187H0C4.41624 168.815 19.0162 135.791 46.2607 120.02Z" fill="#246E3C"/>
                <path className="logo-path" d="M112 0L152 97.5C155.167 111 153.8 139.3 123 144.5H73.3584C70.7523 133.395 65.2892 126.259 58.7656 121.937C56.0129 120.113 53.0987 118.811 50.1748 117.92C56.8935 114.592 64.3241 112.31 72.5 111.5H108C111.56 110.833 116.5 106.5 113 97.5L92 45.5L72.5 99.5C54.5 99.5 51.5 99.5 29 112.5L72.5 0H112Z" fill="#246E3C"/>
                <path className="logo-path" d="M146.186 187L135 155.57C162.5 148 181.5 165 186 187H146.186Z" fill="#246E3C"/>
            </svg>
        </div>
    </div>
  )
}

export default Loader