import { useState } from 'react';
import './style.css';
import '.././../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Dashboard(prop) {
    const [data, updateData] = useState([]);
    const [name, updateName] = useState("");
    const [author, updateAuthor] = useState("");
    const [price, updatePrice] = useState("");
    
    function isName(event){
        updateName(event.target.value);
    }
    function isAuthor(event){
        updateAuthor(event.target.value);
    }
    function isPrice(event){
        updatePrice(event.target.value);
    }
    function submit(event){
        event.preventDefault();
        let item = {
            "name" : name,
            "author" : author,
            "price" : price
        }
        updateData([item,...data]);
        
    }
    
    prop.childData(data);
    return (
        <center>
            <div id="box">
                <div id="container">
                    <br></br>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="name" placeholder="name@example.com" onBlur={isName}/>
                        <label htmlFor="name">Name of Book</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="author" placeholder="Password" onBlur={isAuthor}/>
                        <label htmlFor="author">Author</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="price" placeholder="Password" onBlur={isPrice}/>
                        <label htmlFor="price">Price</label>
                    </div><br></br>
                    <button type="button" className="btn btn-secondary btn-lg" id="submit" onClick={submit}>Submit</button>
                </div>
            </div>
        </center>
    );
}
export default Dashboard;