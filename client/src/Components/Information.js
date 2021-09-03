import React from "react";
import "./Information.css";

function Information() {
	return (
		<div>
			<div className="wrapper">
    		 {/* Navigation */}
    			{/* <nav className="main-nav">
      			<ul>
        			<li>
          				<a href="#">Video of NCR cases</a>
        			</li>
        			<li>
          				<a href="#">Latest News</a>
        			</li>
        			<li>
          				<a href="#">On-going NCR cases</a>
        			</li>
        			<li>
          				<a href="#">Native Rights on NCR lands</a>
        			</li>
      			</ul>
    		</nav> */}
     		{/* Top Container  */}
    			<section className="top-container">
      				<header className="showcase">
        				<h1>Andawan</h1>
        				<p>This platform is to educate and inform natives and society on native customary law and update ongoing court cases involving native land.</p>
       					<a href="#" className="btn">Read More</a>
      				</header>
      			</section>
			</div>

    		{/* Boxes Section */}
    			<section className="boxes">
      			<div className="box">
        			<i className="image1"></i>
        			<h3>Sabah</h3>
        			<p>Our Land, Our Lives - Claiming Native Title in Sabah, Malaysia (Tanah Kami Kehidupan Kami)</p>
					<span>
					<iframe width="350" height="250" src="https://www.youtube.com/embed/PRhOEdDlvYM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          			Video
        			</span>
      			</div>
      			<div className="box">
        			<i className="image2"></i>
        			<h3>News</h3>
        			<p>Latest News about NCR in Sabah</p>
      			</div>
      			<div className="box">
        			<i className="image3"></i>
        			<h3>Land Ordinance Cap.68</h3>
        			<p>State Of Sabah's Land Ordinance</p>
      			</div>
      			</section>

    		{/* Info Section */}
    			<section className="info">
      				<img src="https://www.borneotoday.net/wp-content/webp-express/webp-images/uploads/2017/02/tana-ncr.jpg.webp" alt="" />
      			<div>
        			<h2>What's Andawan About</h2>
        			<p>It is a platform for natives in Sabah to connect with lawyers/experts for their traditional land disputes.</p>
        			<a href="#" className="btn">Learn More</a>
      			</div>
    			</section>

    	
  		</div>
	);
}

export default Information;
