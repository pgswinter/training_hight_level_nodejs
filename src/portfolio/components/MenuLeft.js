import React, {Component} from 'react';

class MenuLeft extends Component{
	render(){
		return (
			<div className="menu-left">
				<a className="menu-btn indx-gene">
	                <i className="fa fa-bars" aria-hidden="true"></i>
	                <i className="fa fa-close" aria-hidden="true"></i>
	                <span className="menu-symb">Home</span>
	            </a>
	            <ul className="the-menu lv-01">
			        <li><a href="/amaris-website/home">Home</a></li>
			        <li><a href="/amaris-website/aboutus">About Us</a></li>
			        <li><a href="/amaris-website/our-expertises">Our Expertise</a></li>
			        <li><a href="/amaris-website/our-sectors">Our Sectors</a></li>
			        <li><a href="/amaris-website/our-solutions">Our Solutions</a></li>
			        <li><a href="/amaris-website/locations">Our Locations</a></li>
			        <li><a href="/amaris-website/press-news">Press &amp; News</a></li>

			        <li className="tomato"><a href="/amaris-careers-page/home">Careers</a></li>
			        <li className="lotus"><a href="/amarisfoundation/home">Foundation</a></li>
			        <li className="md-high">

			            <div className="language-wrap">
			                <nav>
			                    <a href="" data-lang="en"><span className="active">EN</span></a> |
			                    <a href="" data-lang="fr"><span>FR</span></a>
			                </nav>
			            </div>

			        </li>
			        <li className="ex-high"><a href="https://www.facebook.com/amaris.official.page?fref=ts"><i className="fa fa-facebook-official"></i></a></li>
			        <li><a href="https://twitter.com/Amaris"><i className="fa fa-twitter"></i></a></li>
			        <li><a href="https://www.linkedin.com/company/amaris"><i className="fa fa-linkedin"></i></a></li>
			        <li><a href="https://plus.google.com/+amaris"><i className="fa fa-google-plus"></i></a></li>
			        <li className="for-mobi cont-form-btn"><a href="">Contact</a></li>
			        <li className="for-mobi"><a href="/amaris-careers-page/career-home-page/home-page-v2">Apply</a></li>
			    </ul>
			</div>
		) 
	}
}

export default MenuLeft;