import { useState } from 'react';
import './style.css';
import '.././../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Footer (prop){
    let customizeData = prop.data.map((book)=>
        <div class="p-3 mb-2 bg-dark text-white">
            <h6>The book {book.name} was published by {book.author} for price {book.price}</h6>
        </div>
    )
    return(
        <center>
            <div id="footer">
                <span>{customizeData}</span>
            </div>
        </center>
    );
}

export default Footer;