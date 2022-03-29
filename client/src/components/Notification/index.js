
import React, { useState, useEffect, useHistory } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
const Notification = () => {

    return (
        <>            
            <div data-reach-dialog-overlay="true" id ="dhCkyp2" class="dhCkyp2 iiHqcD" style={{opacity:1}}>
                    <div role="dialog" aria-modal="true" data-reach-dialog-content="true" tabindex="-1"
                        aria-labelledby="wallet-modal-label" class="dWodJw1" hidden="">
                        <button class="iHaOcn1"></button>
                        <div class="iMWOje1">
                            <div class="gpVQzW1">
                                <h4 class="kQNlUO1">
                                    <div class="ejJoEn1" style={{textAlign:'center'}}>Welcome</div>
                                </h4>
                                
                                <div class="jOXgFj1">
                                    <div style={{textAlign:'center'}}>
                                        <p>You Have Successfully Logged in!</p>
                                    </div>
                                    <div style={{textAlign:'center', paddingTop:'2rem'}}>
                                        <button type="button" id="btn_welcome" class="welcome-ok">Ok</button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-reach-dialog-overlay="true" id ="dhCkyp3" class="dhCkyp3 iiHqcD" style={{opacity:1}}>
                    <div role="dialog" aria-modal="true" data-reach-dialog-content="true" tabindex="-1"
                        aria-labelledby="wallet-modal-label" class="dWodJw1" hidden="">
                        <button class="iHaOcn1"></button>
                        <div class="iMWOje1">
                            <div class="gpVQzW1">
                                <h4 class="kQNlUO1">
                                    <div class="ejJoEn1" style={{textAlign:'center'}}>Notification</div>
                                </h4>
                                
                                <div class="jOXgFj1">
                                    <div style={{textAlign:'center'}}>
                                        <p id="noti_context">Please check your balance!</p>
                                    </div>
                                    <div style={{textAlign:'center', paddingTop:'2rem'}}>
                                        <button type="button" id="btn_notification" class="welcome-ok">Ok</button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Notification;
