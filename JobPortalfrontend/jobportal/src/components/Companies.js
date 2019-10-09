import React, { Component } from 'react'
import './companies.css'
import {Card,Button} from 'react-bootstrap'
export class Companies extends Component {
    render() {
        return (
           
                <div class= "container">
                <h1 class = "hjgj my-5">Job Offers from Top Companies</h1>

                    <div class="row">
                        <div class="col-lg-3">
                            <img src="data:image/jpeg;base64,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" width ="150" height = "100"></img>
                        </div>
                        <div class="col-lg-3">
                            <img src="https://www.eweek.com/imagesvr_ez/b2bezp/2017/07/Salesforce.logo.jpg?alias=article_hero" width ="150" height = "100"></img>
                        </div>
                        <div class="col-lg-3">
                            <img src="https://i.pinimg.com/originals/08/5f/d8/085fd8f7819dee3b716da73d3b2de61c.jpg" width ="150" height = "100"></img>
                        </div>
                        <div class="col-lg-3">
                            <img src="https://cdn.macrumors.com/article-new/2017/02/google_logo1600-250x250.jpg" width ="120" height = "100"></img>
                        </div>
                        <div class="col-lg-12 my-5">
                            <p id="startup">Even From StartUps as well....</p>
                        </div>
                        <div class="col-lg-3">
                            <img src="https://www.stickpng.com/assets/images/5841c47ba6515b1e0ad75aa3.png" width ="150" height = "100"></img>
                        </div>
                        <div class="col-lg-3">
                            <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/1e/84/33/1e8433dc-19ba-cb3c-864a-2c92e646161d/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-5.png/246x0w.jpg" width ="150" height = "100"></img>
                        </div>
                        <div class="col-lg-3">
                            <img src="https://upload.wikimedia.org/wikipedia/en/e/ec/IFTTT_Logo_2015.png" width ="150" height = "100"></img>
                        </div>
                        <div class="col-lg-3">
                            <img src="https://www.coinbase.com/assets/mobile/store_listing_icon-ffbf3ec7c91090dd1f403464fad41560dac96ce04b7d86e7a459ea09c6522c18.png" width ="120" height = "100"></img>
                        </div>
                        <div class="col-lg-12 my-5">
                            <p id="startup">And Many More...</p>
                        </div>
                        
                        
                    </div>
                </div>
                
            
        )
    }
}

export default Companies
