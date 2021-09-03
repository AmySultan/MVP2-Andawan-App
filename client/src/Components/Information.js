import React from "react";
import "./Information.css";

function Information() {
	return (
		<div>
			<div className="wrapper">
    		 
     		{/* Top Container  */}
    			<section className="top-container">
      				<header className="showcase">
        				<h1>Andawan</h1>
        				<p>This platform is to educate and inform natives and society 	 on native customary law and update ongoing court cases involving native land.
						This is also a platform that connect lawyers/experts to natives that needed legal advise on their land rights. Dedicated lawyers/experts can contribute by sharing their knowledge and give back to community and enhance their reputation.</p>
       					<a href="#" className="btn">Read More</a>
      				</header>
      			</section>
			</div>

    		{/* Boxes Section */}
    			<section className="boxes">
      			<div className="box">
        			<i className="video-box"></i>
        			<h4>Video Related to NCR</h4>
        			<p>Claiming Native Title in Sabah</p>
					<span>
					<iframe width="350" height="250" src="https://www.youtube.com/embed/PRhOEdDlvYM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          			</span>
      			</div>
      			<div className="box">
        			<i className="image2"></i>
        			<h4>NGO's</h4>
        			<p>Pacos Trust</p>
					<span onClick={PacosTrust =>
	            	(window.location.href ="https://pacostrust.com")}>
					<iframe width="350" height="250" src="https://pacostrust.com/">
					</iframe>
          			</span>
      			</div>
      			<div className="box">
        			<i className="image3"></i>
        			<h4>Official Portal of the High Court in Sabah and Sarawak</h4>
        			<span onClick={Gothere =>
	            	(window.location.href ="https://judiciary.kehakiman.gov.my/portals/")}>
					<iframe width="350" height="250" src="https://judiciary.kehakiman.gov.my/portals/"></iframe>
					Go there
          			</span>
      			</div>
      			</section>

    		{/* Info Section */}
    			<section className="info">
      				<img src="https://www.borneotoday.net/wp-content/webp-express/webp-images/uploads/2017/02/tana-ncr.jpg.webp" alt="borneotoday" width="500" height="300" />
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
