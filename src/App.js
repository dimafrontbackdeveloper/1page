import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from './assets/images/logo.png';
import './assets/scss/style.scss';
import { ConnectAndMintAndDisconect } from './components/ConnectAndMintAndDisconect';

function App() {
  const dispatch = useDispatch();

  const [isActiveBurger, setIsActiveBurger] = useState(false);
  const [isMouseMove, setIsMouseMove] = useState(false);

  const wallet = useSelector((state) => state.wallet);


  return (
    <div className="wrapper">
      <ConnectAndMintAndDisconect />
      <header className="header">
        <div className="container">
          <div className="header__row d-f jc-sb ai-c">
            <div className="header__left">
              <div className="logo">
                <a href="#">
                  <img src={logo} alt="logo" />
                </a>
              </div>
            </div>
            <div className={`header__right d-f ai-c ${isActiveBurger && 'header__right--active'}`}>
              <div className="close" onClick={() => setIsActiveBurger(false)}>
                <div></div>
                <div></div>
              </div>
              <div className="logo">
                <a href="#">
                  <img src={logo} alt="logo" />
                </a>
              </div>
              <nav className="nav">
                <ul className="d-f">
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Peeps Deeds</a>
                  </li>
                </ul>
              </nav>
              <button
                className={`button`}
                onMouseOver={() => {
                  setIsMouseMove(true);
                }}
                onMouseOut={() => {
                  setIsMouseMove(false);
                }}
                onClick={() => {
                  if (!wallet) {
                    const selectWalletFunctional = document.querySelector('.button-select-wallet');
                    dispatch({
                      type: 'SET_WALLET',
                      payload: null,
                    });
                    localStorage.setItem('isNeedMint', false);
                    selectWalletFunctional.click();
                  } else {
                    const disconnectFunctional = document.querySelector(
                      '.wallet-adapter-button-trigger',
                    );
                    localStorage.setItem('isNeedMint', false);
                    disconnectFunctional.click();

                    dispatch({
                      type: 'SET_WALLET',
                      payload: '',
                    });
                  }
                }}>
                {wallet ? (isMouseMove ? 'Disconnect' : wallet) : 'Connect Wallet'}
              </button>
              <ul className="socials">
                <li>
                  {' '}
                  <a className="soc" href="#">
                    soc
                  </a>
                </li>
                <li>
                  {' '}
                  <a className="soc" href="#">
                    soc
                  </a>
                </li>
                <li>
                  {' '}
                  <a className="soc" href="#">
                    soc
                  </a>
                </li>
              </ul>
            </div>
            <div className="burger" onClick={() => setIsActiveBurger(true)}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </header>
      <main className="content">
        <section className="claim">
          <div className="container d-f jc-c ai-c ">
            <button
              className="button"
              onClick={() => {
                if (!wallet) {
                  const selectWalletFunctional = document.querySelector('.button-select-wallet');
                  dispatch({
                    type: 'SET_WALLET',
                    payload: null,
                  });
                  localStorage.setItem('isNeedMint', false);
                  selectWalletFunctional.click();
                  localStorage.setItem('isNeedMint', true);
                } else {
                  const mintFunctional = document.querySelector('.mint');
                  localStorage.setItem('isNeedMint', false);
                  mintFunctional.click();
                }
              }}>
              Mint
            </button>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container ">
          <div className="footer__row d-f jc-sb ai-c">
            <div className="footer__left">
              <span>© 2022 </span>
              <a href="#">Peeps Official.</a>
              <span> | </span>
              <a href="#">Whitepaper.</a>
            </div>
            <div className="footer__right">
              <ul className="socials ">
                <li>
                  {' '}
                  <a className="soc" href="#">
                    soc
                  </a>
                </li>
                <li>
                  {' '}
                  <a className="soc" href="#">
                    soc
                  </a>
                </li>
                <li>
                  {' '}
                  <a className="soc" href="#">
                    soc
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
