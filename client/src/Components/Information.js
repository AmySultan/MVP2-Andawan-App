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
					<a href="https://www.youtube.com/embed/PRhOEdDlvYM">Video Related to NCR</a>
        			<p>Claiming Native Title in Sabah</p>
					<span>
					<iframe width="350" height="250" src="https://www.youtube.com/embed/PRhOEdDlvYM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          			</span>
      			</div>
      			<div className="box">
        			<i className="image2"></i>
        			<a href="https://pacostrust.com">Website Dedicated To Support Indigenous Communities</a>
        			{/* <p>Pacos Trust</p> */}
					<span>
					<iframe width="350" height="250" src="https://pacostrust.com/">
					</iframe>
          			</span>
      			</div>
      			<div className="box">
        			<i className="image3"></i>
					<a href="https://judiciary.kehakiman.gov.my/portals/">Official Portal of the High Court in Sabah and Sarawak</a>
        			<span>
					<iframe width="350" height="250" src="https://judiciary.kehakiman.gov.my/portals/"></iframe>
		   			</span>
      			</div>
      			</section>

    		{/* Info Section */}
    			<section className="info">
      				<img src="https://www.borneotoday.net/wp-content/webp-express/webp-images/uploads/2017/02/tana-ncr.jpg.webp" alt="borneotoday" width="500" height="300" />
      			<div>
        			<h3>For more informations, visit websites below:</h3>
        			<a href="https://sagc.sabah.gov.my/?q=en/content/land-ordinance-cap-68">Land Ordinance Cap.68</a>
					<br></br>
					<a href="https://www.borneotoday.net/natives-deserve-their-land-an-insight-into-sabah-customary-rights/">An Insight Into Sabah Customary Rights</a>
					<br></br>
					<a href="https://www.malaysiakini.com/news/541426">Native Customary Rights</a>
					<br></br>
					<a href="http://ukmpress.ukm.my/index.php?route=product/product&product_id=472">Publication: An Introduction to Sabah Native Land Law</a>
					<br></br>
					<a href="https://www.forestpeoples.org/sites/default/files/private/publication/2013/12/conflict-or-consent-chapter-10-sabah-genting-plantations-and-sungai-and-dusun-peoples.pdf">Sabah: Genting Plantations and the Sungai
and Dusun Peoples</a>
					<br></br>
        			<a href="#" className="btn">Learn More</a>
      			</div>
    			</section>

				
  		</div>
	);
}

export default Information;
