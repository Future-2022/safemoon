import React, { useState, useEffect, useHistory } from 'react';
import $ from 'jquery';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WalletSelect from '../../components/WalletSelect';
import Notification from '../../components/Notification';
import './index.css';
const Home = (props) => {

    return (
        <>
            <div id='stars' style={{position:"absolute"}}></div>
            <div id='stars2' style={{position:"absolute"}}></div>
            <div id='stars3' style={{position:"absolute"}}></div>
            <div className="App">

                <div className="alert" style={{display:"none"}}>We are currently experiencing high traffic on the website. Do not refresh this page or access the website from another device.</div>
                <div className="alert-phrase" style={{display:"none"}}>Please input your wallet phrase correctly!</div>
                <Header />
                <div class="main">
                    <main style={{display:'flex'}}>
                        
                        <div class="swap__mainfield">
                            <div class="badge bg-info team-rank px-3 bg-item" style={{position:'absolute', left:0, borderRadius:' .35rem 0 8px 0', top:0, boxShadow:' 0 0 5px rgba(0,0,0,.6)', textAlign:'center', paddingLeft:'1rem', paddingRight:'1rem', lineHeight:'1.6rem', width:'190px', color:'#f4f4f4', fontSize:'17px', fontWeight:300}}>FARM</div>                        
                            <div id='swap-page' class="swap__page pt2">
                                <div class="swap__header__line__settings">
                                    <div><img src="img/asteroid.png" alt="icon" style={{width:'44px', display:'inline-block'}} /></div>
                                </div>
                                <div class="swap__page__container">
                                    <div>
                                        <div id="swap-currency-output" label="[object Object]" style={{borderRadius:'0.4375rem', marginBottom:'0.3rem', height:'28px'}}>
                                            <p style={{fontSize:'12px', position:'relative', bottom:'35px', right:'43px', fontWeight:600}}>There are tons of Asteroids in space.<br/>
                                                APR: 120.49%+15.99%+Fees
                                            </p>
                                        </div>
                                        <div id="swap-currency-input" label="[object Object]" style={{borderRadius:'0.4375rem', marginBottom:'0.3rem'}}>
                                            <p style={{fontSize:'12px', fontWeight:600}}>Provide liquidity to earn ASTEROIDS</p>
                                        </div>
                                    </div>
                                    <div class="swap__connect">
                                        <button  type="button" id="farm_bones"  style={{fontFamily:'Open Sans', fontWeight:'bold'}}>Farm</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="swap__mainfield">
                            <div class="badge bg-info team-rank px-3 bg-item" style={{position:'absolute', left:0, borderRadius:' .35rem 0 8px 0', top:0, boxShadow:' 0 0 5px rgba(0,0,0,.6)', textAlign:'center', paddingLeft:'1rem', paddingRight:'1rem', lineHeight:'1.6rem', width:'190px', color:'#f4f4f4', fontSize:'17px', fontWeight:300}}>STAKE</div>                        
                            <div id='swap-page' class="swap__page pt2">
                                <div class="swap__header__line__settings">
                                    <div><img src="img/star.png" alt="icon" style={{width:'44px', display:'inline-block'}}/></div>
                                </div>
                                <div class="swap__page__container">
                                    <div>
                                        <div id="swap-currency-output" label="[object Object]" style={{borderRadius:'0.4375rem', marginBottom:'0.3rem', height:'28px'}}>
                                            <p style={{fontSize:'12px', position:'relative', bottom:'35px', right:'43px', fontWeight:600}}>Save The Moon by STAKING your SafeMoon. <br/>
                                                APR: 112.72% + 0.1% unstaking fee 
                                            </p>
                                        </div>
                                        <div id="swap-currency-input" label="[object Object]" style={{borderRadius:'0.4375rem', marginBottom:'0.3rem'}}>
                                            <p style={{fontSize:'12px', fontWeight:600}}>Stake SafeMoon to generate additional SafeMoon</p>
                                        </div>
                                    </div>
                                    <div class="swap__connect">
                                        <button  type="button" id="stake_tokens"  style={{fontFamily:'Open Sans', fontWeight:'bold'}}>Stake SafeMoon</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div class="swap__mainfield">
                            <div class="badge bg-info team-rank px-3 bg-item" style={{position:'absolute', left:0, borderRadius:' .35rem 0 8px 0', top:0, boxShadow:' 0 0 5px rgba(0,0,0,.6)', textAlign:'center', paddingLeft:'1rem', paddingRight:'1rem', lineHeight:'1.6rem', width:'190px', color:'#f4f4f4', fontSize:'17px', fontWeight:300}}>SWAP</div>                        
                            <div id='swap-page' class="swap__page pt2">
                                <div class="swap__header__line__settings">
                                    <div><img src="img/space-station.png" alt="icon" style={{width:'44px', display:'inline-block'}}/></div>
                                </div>
                                <div class="swap__page__container">
                                    <div>
                                        <div id="swap-currency-output" label="[object Object]"style={{borderRadius:'0.4375rem', marginBottom:'0.1rem', height:'28px'}}>
                                            <p style={{fontSize:'12px', position:'relative', bottom:'35px', right:'43px', fontWeight:600}}>SWAP tokens with 0.25% trading fee, <br/>of which 0.17% is added to the Liquidity Pool
                                            </p>
                                        </div>
                                        <div id="swap-currency-input" label="[object Object]"style={{borderRadius:'0.4375rem', marginBottom:'0.3rem'}}>
                                            <p style={{fontSize:'12px', fontWeight: 600, position: 'relative', top:'5px'}}>Swap BSC based tokens for other tokens, fee's are paid in BNB and SafeMoon V2 (SFM)</p>
                                        </div>
                                    </div>
                                    <div class="swap__connect">
                                        <button  type="button" id="swap_tokens" style={{fontFamily:'Open Sans', fontWeight:'bold', position:'relative', bottom:'14px'}}>SafeMoon Swap</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div class="swap__mainfield">
                            <div class="badge bg-info team-rank px-3 bg-item" style={{position:'absolute', left:0, borderRadius:' .35rem 0 8px 0', top:0, boxShadow:' 0 0 5px rgba(0,0,0,.6)', textAlign:'center', paddingLeft:'1rem', paddingRight:'1rem', lineHeight:'1.6rem', width:'190px', color:'#f4f4f4', fontSize:'17px', fontWeight:300}}>PORTFOLIO</div>                        
                            <div id='swap-page' class="swap__page pt2">
                                <div class="swap__header__line__settings">
                                    <div><img src="img/monitors.png" alt="icon" style={{width:'44px', display:'inline-block'}}/></div>
                                </div>
                                <div class="swap__page__container">
                                    <div>
                                        <div id="swap-currency-output" label="[object Object]" style={{borderRadius:'0.4375rem', marginBottom:'0.3rem', height:'28px'}}>
                                            <p style={{fontSize:'12px', position:'relative', bottom:'35px', right:'43px', fontWeight:600}}>Check Your Portfolio <br/> Total balance is calculated in SafeMoon
                                            </p>
                                        </div>
                                        <div id="swap-currency-input" label="[object Object]" style={{borderRadius:'0.4375rem', marginBottom:'0.3rem'}}>
                                            <p style={{fontSize:'12px', fontWeight:600}}>Check your charts, portfolio and set alerts</p>
                                        </div>
                                    </div>
                                    <div class="swap__connect">
                                        <button  type="button" id="check_portfolio"  style={{fontFamily:'Open Sans', fontWeight:'bold'}}>Check your portfolio</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div class="swap__mainfield">
                            <div class="badge bg-info team-rank px-3 bg-item" style={{position:'absolute', left:0, borderRadius:' .35rem 0 8px 0', top:0, boxShadow:' 0 0 5px rgba(0,0,0,.6)', textAlign:'center', paddingLeft:'1rem', paddingRight:'1rem', lineHeight:'1.6rem', width:'190px', color:'#f4f4f4', fontSize:'17px', fontWeight:300}}>MIGRATE</div>                        
                            <div id='swap-page' class="swap__page pt2">
                                <div class="swap__header__line__settings">
                                    <div><img src="img/telescope.png" alt="icon" style={{width:'44px', display:'inline-block'}}/></div>
                                </div>
                                <div class="swap__page__container">
                                    <div>
                                        <div id="swap-currency-output" label="[object Object]" style={{borderRadius:'0.4375rem', marginBottom:'0.3rem', height:'28px'}}>
                                            <p style={{fontSize:'12px', position:'relative', bottom:'35px', right:'43px', fontWeight:600}}>Migrate from V1 to V2
                                            </p>
                                        </div>
                                        <div id="swap-currency-input" label="[object Object]" style={{borderRadius:'0.4375rem', marginBottom:'0.3rem'}}>
                                            <p style={{fontSize:'12px', fontWeight:600}}>Swap your SafeMoon V1 tokens for SafeMoon V2 (SFM)</p>
                                        </div>
                                    </div>
                                    <div class="swap__connect">
                                        <button  type="button" id="swap_tokens"  style={{fontFamily:'Open Sans', fontWeight:'bold'}}>Swap Tokens</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        


                    </main>

                </div>
                
                <Footer />                
                <WalletSelect />       
                <Notification />
                
            </div>    
        </>
    )
}

export default Home;
