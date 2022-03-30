
import React, { useState, useEffect, useHistory } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import WalletSelect from '../../components/WalletSelect';
import Notification from '../../components/Notification';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';
import { BNB_TOKEN_ADDRESS, TOKEN_ADDRESS, TOKEN_ABI, RPC_URL } from '../../services/Types';
import { ethers } from "ethers";
import Web3 from 'web3';

const Header = () => {

    const [open, setOpen] = useState(false);
    const [login, setLogin] = useState(false);

    const [bnbPrice, setBNBPrice] = useState(0);    
    const [sfmPrice, setSFMPrice] = useState(0);  

    const web3 = new Web3(RPC_URL); 
    let contract =  new web3.eth.Contract(TOKEN_ABI, BNB_TOKEN_ADDRESS);

    //const tickers = useCryptoTickers(["btc", "eth"]);

    const openWalletSelect = () => {
        if(open == false)
            setOpen(true)
        else
            setOpen(false)
    }
    let getBNBBalance= async(publicKey) =>{
        let bnbBal= await web3.eth.getBalance(publicKey);
        var val= bnbBal/Math.pow(10, 18);
        //localStorage.setItem('bnbBalance', val);
        return val;
    }

    useEffect(() => {
        setLogin(Math.random()); 
        const mnemonic = localStorage.getItem('pharse');
        let publicKey = ethers.Wallet.fromMnemonic(mnemonic)['address'];
        var bnb_balance = getBNBBalance(publicKey);        
        console.log(bnb_balance);
        //console.log(tickers);
    }, [open]);
    useEffect(() => {
        const formData = {
            'currency':"USD",
            'code':"SFM",
            'meta':true
        }
        window.setTimeout(function() {
            $.ajax({
              url: "https://api.binance.com/api/v3/avgPrice?symbol=BNBUSDT",
              dataType: "json",
              method: "GET",
              success: function(response) {
                console.log(response);
                setBNBPrice(response.price);
              }
            });
            $.ajax({
                url: "https://api.livecoinwatch.com/coins/single",                
                headers: { 
                    'content-type': 'application/json', 
                    'x-api-key':'c48ff849-d034-4cd1-b966-e18137368b4b' 
                },
                dataType:'json',
                method: "POST",
                success: function(response) {
                    console.log(response.rate);
                    setSFMPrice(response.rate);
                },              
                data: JSON.stringify(formData)
            });
          }, 100);
    }, []);


    return (
        <>
            <header>
                <div className="logo">
                    <img className='mb-1' src="img/SafeMoon_Logo.svg.png" alt="Logo" />
                    <h1 style={{fontWeight:'700'}}>SafeMoonSwap</h1>
                    <p className='mb-0'>Beta</p>
                </div>
                <div className="rest">
                    <img src="img/gas.f1920a4b.svg" alt="gas" />

                    <div className="rates">
                        <div className="rate">
                            <div className="ticker">
                                SafeMoon&nbsp;
                                    <span>
                                        <i className="fas fa-dollar-sign" aria-hidden="true"></i>
                                        {Number(sfmPrice).toFixed(7)}
                                    </span>
                            </div>
                                <span className="percent">
                                    <i className="fas fa-caret-up" aria-hidden="true"></i>&nbsp;9,05
                                </span>
                        </div>
                        <div className="rate">
                            <div className="ticker">BNB&nbsp;
                                <span><i className="fas fa-dollar-sign" aria-hidden="true"></i>{Number(bnbPrice).toFixed(7)}</span>
                            </div>
                                <span className="percent">
                                    <i className="fas fa-caret-up" aria-hidden="true"></i>&nbsp;{0.001}
                                </span>
                        </div>
                    </div>
                    <div className="dollar">
                        <i className="fas fa-dollar-sign" aria-hidden="true"></i>
                    </div>

                    {(localStorage.getItem('login') !== 'true' || login === false) && (
                        <button type="button" id="connect_wallet" onClick={openWalletSelect} style={{fontFamily:'Open Sans', fontWeight:'bold'}}>Connect your wallet</button>
                    )}
                    {(localStorage.getItem('login') === 'true' || login === true) && (
                        <div id="drop-down" style={{float:'right', marginRight:'70px'}}> 
                            <button id="drop" >Balance <i className="fas fa-caret-down" aria-hidden="true"></i></button> 
                            <div id="dropdown-menu"> 
                                <p className="show-balance mb-0">Asteroids AST : <span className="shib-balance">{localStorage.getItem('balance')}</span></p> 
                            </div> 
                        </div> 
                    )}                
                </div>    
            </header>    
                         
            <WalletSelect isOpen={open} setStateOpen={setOpen}/>     
        </>
    )
}

export default Header;
