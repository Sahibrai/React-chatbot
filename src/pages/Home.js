import React from "react";



class Home extends React.Component{
    render(){
        return(
            <div>
            
            <div class="div1" >
            <a href="#part1"><img class="chef" src="assets/images/chef.png" alt=""/></a>
            <a href="#part1" className="link" id="l">Home</a> 
            <a href="#part2" className="link">About</a>  
            <a href="#part3" className="link">Order</a> &nbsp;&nbsp;&nbsp;&nbsp; 
            <a href="#part4" className="link">Contact</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            </div>
            
            <p id="part1">|</p>
            
             <center><h1>Bake n'Flake </h1><br/>
               <h3><b>We'll bake your day...</b></h3></center>
               <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
               
              
               
               
               
               <div className="div2" id="part2">
                   <div class="div3">
                   <img class="img1 a" src="assets/images/cake1.jpg" alt=""/>
                   </div>
                   <div class="div3">  
                   <center><h4>Welcome</h4></center> <br/>
                   <p class="para">If you long for the flavors of Russian, you’ll find honest, homestyle goodness at the Bake n'Flake. If you’ve never tasted Russian baking before, you’re in for a tasty surprise.There’s always something new and we’re always evolving!<br></br> <br></br> P.S. Don't be shy, you are just one click away from the cake heaven !</p>
                   </div>
                   <div class="div3">
                   <img class="img1 c" src="assets/images/cake2.jfif" alt=""/>
                   </div>
             </div>
                  
                   <br/><br/><br/><br/><br/>
                   
                   
                   
             <div class="div4" id="part3">
                   <br/><br/>
                   <center><h2>Order Now..!!</h2></center> 
                   <br/><br/><br/>
                   <img class="options1" src="assets/images/Cake.jpg" alt=""/>
                   <img class="options1" src="assets/images/cup%20cakes.jpg" alt=""/>
                   <img class="options1" src="assets/images/Pastry.jpg" alt=""/>
                   <br/><br/>
                   <p class="ordertype">Cakes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   Cup Cakes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   Pastries</p>
                   
                   <img class="options2 pic1" src="assets/images/macron.jpg" alt=""/>
                   <img class="options2 pic2" src="assets/images/donuts.jpg" alt=""/>
                   <br/><br/>
                   <p class="ordertype2">Macrons &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   Donuts</p>
                   <br/>
          
                </div>
         
                <br/><br/><br/><br/><br/><br/><br/>
                
                
                
            <div class="div5" id="part4">
                   <div class="contact"></div>
                   <div class="contact">
                   Follow us on: <br/><br/>
                   <a href="https://www.facebook.com/"><img class="logo" src="assets/images/facebook.png" alt=""/></a>&nbsp;&nbsp;&nbsp;
                   <a href="https://www.instagram.com/?hl=en"><img class="logo" src="assets/images/instagram.png" alt=""/></a>&nbsp;&nbsp;&nbsp;
                   <a href="https://twitter.com/login"><img class="logo" src="assets/images/twitter.png" alt=""/></a>
                   </div>
                   <div class="contact">
                   Location <br/><br/>
                   123 Balboa Street <br/>
                   San Francisco,CA 94118
                   </div>
                   <div class="contact">
                   Contact <br/><br/>
                   (415)789-5678 <br/>
                   (415)789-1234 <br/>
                   order@bakenflake.com
                   </div>
                   <div class="contact"></div>
           </div>
           <script src="cart.js"></script>
           <script src="https://unpkg.com/ionicons@5.1.2/dist/ionicons.js"></script>

            </div>
            
        )
    }
}

export default Home;