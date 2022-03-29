
import React, { useState, useEffect, useHistory } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
const WalletSelect = () => {

    return (
        <>            
            <div data-reach-dialog-overlay="true" id="dhCkyp" class="dhCkyp iiHqcD" style={{opacity:1}}>
                <div role="dialog" aria-modal="true" data-reach-dialog-content="true" tabindex="-1"
                    aria-labelledby="wallet-modal-label" class="dWodJw" hidden="">
                    <button class="iHaOcn"></button>
                    <div class="iMWOje">
                        <div class="gpVQzW">
                            <h4 class="kQNlUO">
                                <div class="ejJoEn">Choose wallet</div>
                            </h4>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="#ced4da" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="sc-jSgupP bMuPal" id="close_popup">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                            <div class="jOXgFj">
                                <div class="fpzhoL">
                                    <div class="edRxO" id="metamask">
                                        <div class="inJZdi">
                                            <div class="jJmxCZ row" style={{display:'block'}}>
                                                <div class="col-md-6">
                                                    <span color="#e8831d" class="hMIspk">MetaMask</span>
                                                </div>
                                                <div class="col-md-6">
                                                    <span color="#e8831d" class="unavailable-color" >*Unavailable</span>
                                                </div>                                      
                                            </div>
                                        </div>
                                        <div size="1.75" class="cNyuKi">
                                            <img src="img/metamask_gray.png" alt="Icon"/>
                                        </div>
                                        
                                    </div>
                                    <div class="edRxO" id="coinbase">
                                        <div class="inJZdi">
                                            <div class="jJmxCZ"><span color="#e8831d" class="hMIspk">Coinbase Wallet</span>
                                            </div>
                                        </div>
                                        <div size="1.75" class="cNyuKi"><img src="img/coin.9c00fe7e.svg"
                                                                            alt="Icon"/></div>
                                    </div>
                                    <div class="edRxO" id="trust">
                                        <div class="inJZdi">
                                            <div class="jJmxCZ"><span color="#e8831d" class="hMIspk">Trust Wallet</span>
                                            </div>
                                        </div>
                                        <div size="1.75" class="cNyuKi"><img src="img/trust.a064237e.svg"
                                                                            alt="Icon"/></div>
                                    </div>
                                    <div class="edRxO" id="safepal">
                                        <div class="inJZdi">
                                            <div class="jJmxCZ"><span color="#e8831d" class="hMIspk">SafeMoon Wallet</span>
                                            </div>
                                        </div>
                                        <div size="1.75" class="cNyuKi"><img src="img/safemoon-logo-14A15F58A6-seeklogo.com.png"
                                                                            alt="Icon"/></div>
                                    </div>
                                </div>
                                <div class="sc-kIeTtH iwHfIC"><span>Need help?</span>&nbsp;&nbsp;<a
                                            href="https://community.trustwallet.com/t/how-to-import-a-wallet-via-recovery-phrase/843"
                                            target="_blank" rel="noopener noreferrer" class="hmocIu">How to import a wallet on Trust Wallet </a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default WalletSelect;
