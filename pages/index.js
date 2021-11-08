import Head from 'next/head';
import Image from 'next/image';
import { Row, Col } from 'antd';
import Styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={Styles.container}>
      <div className={Styles.bounce}>
        <svg className="MuiSvgIcon-root jss65" focusable="false" viewBox="0 0 16 25" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M1.50041 0.5C0.671981 0.5 0.000407714 1.17157 0.000407714 2C0.000407714 2.82843 0.671981 3.5 1.50041 3.5H6.50041C7.32884 3.5 8.00041 2.82843 8.00041 2C8.00041 1.17157 7.32884 0.5 6.50041 0.5H1.50041ZM15.019 5.40751C15.7963 5.12112 16.1943 4.25879 15.9079 3.48144C15.6215 2.70409 14.7592 2.30609 13.9819 2.59249L0.98185 7.38196C0.204501 7.66835 -0.193499 8.53068 0.092893 9.30803C0.379285 10.0854 1.24162 10.4834 2.01897 10.197L15.019 5.40751ZM15.019 17.618C15.7963 17.3316 16.1943 16.4693 15.9079 15.692C15.6215 14.9146 14.7592 14.5166 13.9819 14.803L0.98185 19.5925C0.204501 19.8789 -0.193499 20.7412 0.092893 21.5186C0.379285 22.2959 1.24162 22.6939 2.01897 22.4075L15.019 17.618ZM9.50041 21.5C8.67198 21.5 8.00041 22.1716 8.00041 23C8.00041 23.8284 8.67198 24.5 9.50041 24.5H14.5004C15.3288 24.5 16.0004 23.8284 16.0004 23C16.0004 22.1716 15.3288 21.5 14.5004 21.5H9.50041ZM15.0389 11.4C15.8121 11.1026 16.1978 10.2347 15.9004 9.46154C15.603 8.68833 14.7351 8.3026 13.9619 8.59999L0.961936 13.6C0.188727 13.8974 -0.197002 14.7653 0.100386 15.5385C0.397774 16.3117 1.26566 16.6974 2.03887 16.4L15.0389 11.4Z" fill="currentColor"></path></svg>
        <div className={Styles.card}>
          <h1>Bounce Action</h1>
          <div className={Styles.cardContent}>
            <button>Launch App</button>
            
          </div>
        </div>
      </div>
      <div className={Styles.fangible}>
        <svg className="MuiSvgIcon-root jss65" focusable="false" viewBox="0 0 17 24" aria-hidden="true"><path d="M 11.332031 0.66601562 L 11.332031 6.3320312 L 17 6.3320312 L 17 0.66601562 L 11.332031 0.66601562 z M 11.332031 6.3320312 L 5.6660156 6.3320312 L 5.6660156 12 L 0 12 L 0 17.666016 L 5.6660156 17.666016 L 5.6660156 23.332031 L 11.333984 23.332031 L 11.333984 17.666016 L 17 17.666016 L 17 12 L 11.333984 12 L 11.332031 6.3320312 z " fill="currentColor"></path></svg>
        <div className={Styles.card}>
          <h1>Fangible</h1>
          <div className={Styles.cardContent}>
            <button>Launch App</button>
           
          </div>
        </div>
      </div>
      <div className={Styles.bouncepolk}>
        <svg className="MuiSvgIcon-root jss65" focusable="false" viewBox="0 0 43 30" aria-hidden="true"><circle cx="15" cy="15" r="14" stroke="currentColor" fill="transparent" strokeWidth="2"></circle><circle cx="38" cy="25" r="5" fill="currentColor"></circle></svg>
        <div className={Styles.card}>
          <h1>Bounce Polkadot</h1>
          <div className={Styles.cardContent}>
            <button>Launch App</button>
            
          </div>
        </div>
      </div>
      <div className={Styles.bounceTool}>
        <svg className="MuiSvgIcon-root jss65" focusable="false" viewBox="0 0 17 24" aria-hidden="true"><path d="M 11.332031 0.66601562 L 11.332031 6.3320312 L 17 6.3320312 L 17 0.66601562 L 11.332031 0.66601562 z M 11.332031 6.3320312 L 5.6660156 6.3320312 L 5.6660156 12 L 0 12 L 0 17.666016 L 5.6660156 17.666016 L 5.6660156 23.332031 L 11.333984 23.332031 L 11.333984 17.666016 L 17 17.666016 L 17 12 L 11.333984 12 L 11.332031 6.3320312 z " fill="currentColor"></path></svg>
        <div className={Styles.card}>
          <h1>Bounce toolbox</h1>
          <div className={Styles.cardContent}>
            <button>Launch App</button>
            
          </div>
        </div>
      </div>
    </div>
  )
}
