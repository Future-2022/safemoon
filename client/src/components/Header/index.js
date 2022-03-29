
import React, { useState, useEffect, useHistory } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {

    return (
        <>
            <header>
                <div className="logo">
                    <img src="img/SafeMoon_Logo.svg.png" alt="Logo" />

                    <h1>SafeMoonSwap</h1>

                    <p>Beta</p>
                </div>
                <div class="rest">
                    <img src="img/gas.f1920a4b.svg" alt="gas" />

                    <div class="rates">
                        <div class="rate">
                            <div class="ticker">
                                SafeMoon&nbsp;
                                    <span>
                                        <i class="fas fa-dollar-sign" aria-hidden="true"></i>
                                        0.00247
                                    </span>
                            </div>
                                <span class="percent">
                                    <i class="fas fa-caret-up" aria-hidden="true"></i>&nbsp;9,05
                                </span>
                        </div>
                        <div class="rate">
                            <div class="ticker">AST&nbsp;
                                <span><i class="fas fa-dollar-sign" aria-hidden="true"></i>21.02</span>
                            </div>
                                <span class="percent">
                                    <i class="fas fa-caret-up" aria-hidden="true"></i>&nbsp;4,18
                                </span>
                        </div>
                        <div class="rate">
                            <div class="ticker">STAR&nbsp;
                                <span><i class="fas fa-dollar-sign" aria-hidden="true"></i>0.0000002</span>
                            </div>
                            <span class="percent"><i class="fas fa-caret-up" aria-hidden="true"></i>&nbsp;0,00</span>
                        </div>
                    </div>
                    <div class="dollar">
                        <i class="fas fa-dollar-sign" aria-hidden="true"></i>
                    </div>
                    <button type="button" id="connect_wallet" style={{fontFamily:'Open Sans', fontWeight:'bold'}}>Connect your wallet</button>

                    
                    <div id="drop-down" style={{float:'right', marginRight:'70px', display:'none'}}> 
                        <button id="drop" >Balance <i class="fas fa-caret-down" aria-hidden="true"></i></button> 
                        <div id="dropdown-menu"> 
                            <p class="show-balance">Asteroids AST : <span class="shib-balance">0</span></p> 
                        </div> 
                    </div> 
                </div>
            </header>
            
            <ToastContainer
                autoClose={3000}
                closeButton={false}
                closeOnClick
            />
        </>
    )
}

export default Header;
