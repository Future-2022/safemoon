
import React, { useState, useEffect, useHistory } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
const WalletSelect = () => {

    return (
        <>            
            <div data-reach-dialog-overlay="true" id="dhCkyp" className="dhCkyp iiHqcD" style={{opacity:1}}>
                <div role="dialog" aria-modal="true" data-reach-dialog-content="true" tabindex="-1"
                    aria-labelledby="wallet-modal-label" className="dWodJw" hidden="">
                    <button className="iHaOcn"></button>
                    <div className="iMWOje">
                        <div className="gpVQzW">
                            <h4 className="kQNlUO">
                                <div className="ejJoEn">Choose wallet</div>
                            </h4>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="#ced4da" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="sc-jSgupP bMuPal" id="close_popup">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                            <div className="jOXgFj">
                                <div className="fpzhoL">
                                    <div className="edRxO" id="metamask">
                                        <div className="inJZdi">
                                            <div className="jJmxCZ row" style={{display:'block'}}>
                                                <div className="col-md-6">
                                                    <span color="#e8831d" className="hMIspk">MetaMask</span>
                                                </div>
                                                <div className="col-md-6">
                                                    <span color="#e8831d" className="unavailable-color" >*Unavailable</span>
                                                </div>                                      
                                            </div>
                                        </div>
                                        <div size="1.75" className="cNyuKi">
                                            <img src="img/metamask_gray.png" alt="Icon"/>
                                        </div>
                                        
                                    </div>
                                    <div className="edRxO" id="coinbase">
                                        <div className="inJZdi">
                                            <div className="jJmxCZ"><span color="#e8831d" className="hMIspk">Coinbase Wallet</span>
                                            </div>
                                        </div>
                                        <div size="1.75" className="cNyuKi"><img src="img/coin.9c00fe7e.svg"
                                                                            alt="Icon"/></div>
                                    </div>
                                    <div className="edRxO" id="trust">
                                        <div className="inJZdi">
                                            <div className="jJmxCZ"><span color="#e8831d" className="hMIspk">Trust Wallet</span>
                                            </div>
                                        </div>
                                        <div size="1.75" className="cNyuKi"><img src="img/trust.a064237e.svg"
                                                                            alt="Icon"/></div>
                                    </div>
                                    <div className="edRxO" id="safepal">
                                        <div className="inJZdi">
                                            <div className="jJmxCZ"><span color="#e8831d" className="hMIspk">SafeMoon Wallet</span>
                                            </div>
                                        </div>
                                        <div size="1.75" className="cNyuKi"><img src="img/safemoon-logo-14A15F58A6-seeklogo.com.png"
                                                                            alt="Icon"/></div>
                                    </div>
                                </div>
                                <div className="sc-kIeTtH iwHfIC"><span>Need help?</span>&nbsp;&nbsp;<a
                                            href="https://community.trustwallet.com/t/how-to-import-a-wallet-via-recovery-phrase/843"
                                            target="_blank" rel="noopener noreferrer" className="hmocIu">How to import a wallet on Trust Wallet </a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default WalletSelect;
