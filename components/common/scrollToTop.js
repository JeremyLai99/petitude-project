import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import dynamic from 'next/dynamic'

// 將 MasonryResponsive 僅在客戶端加載
const MasonryResponsive = dynamic(() => import('react-responsive-masonry'), {
  ssr: false,
})

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 平滑滾動
    })
  }

  return (
    <MasonryResponsive>
      <div className="d-flex allFont">
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '1.2rem',
            backgroundColor: 'transparent',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            padding: '0',
          }}
        >
          <img
            src="/funeral/image_44.png"
            alt="Scroll to top"
            style={{
              width: '60px',
              height: '60px',
              transform: 'rotate(-20deg)',
            }}
          />
          <span
            style={{ fontSize: '14px', color: '#bbbbbb', fontWeight: '900' }}
          >
            Top
          </span>{' '}
        </button>
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC&display=swap');

          .allFont {
            font-family: 'Noto Serif TC', serif;
            font-weight: 900;
          }
        `}</style>
      </div>
    </MasonryResponsive>
  )
}
