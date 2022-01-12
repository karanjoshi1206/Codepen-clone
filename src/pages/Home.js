import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import "./Home.css";

const Home = () => {
	return (
		<>
			<div className='main'>
				<div className='banner'>
					<div className='bannerLeft'>
						<div className='icon'>
							<svg
								viewBox='0 0 100 100'
								title='CodePen'
								fill='white'
								stroke='white'
								class='HomepageAnonHeader_glyph-3njrv'>
								<path d='M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3L88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8L19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2L34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z'></path>
							</svg>
						</div>
						<div className='bannerText'>
							<h1>
								The best place to build, test, <br /> and discover front-end
								code.
							</h1>
							<p>
								CodePen is a social development environment for front-end
								designers and developers. Build and deploy a website, show off
								your work, build test cases to learn and debug, and find
								inspiration.
							</p>
						</div>
						<div className='bannerBtn'>
							<button>
								<Link to='/editor'>Sign Up for Free</Link>
							</button>
						</div>
					</div>
					<div className='bannerRight'>
						<div className='bg'>
							<div className='code html'>
								<div className='topHeading'>
									<i className='fas fa-cog'></i>
									<h4>HTML</h4>
								</div>
								<code>
									<span class='HomepageAnonHeaderHero_cr--Mkc-'>&lt;div</span>{" "}
									<span class='HomepageAnonHeaderHero_cy-1OaMF'>class</span>
									<span>=</span>
									<span class='HomepageAnonHeaderHero_cg-220SE'>"rect"</span>
									<span class='HomepageAnonHeaderHero_cr--Mkc-'>
										&gt;&lt;/div&gt;
									</span>
								</code>
							</div>
							<div className='code css'>
								<div className='topHeading'>
									<i className='fas fa-cog'></i>
									<h4>CSS</h4>
								</div>
								<code>
									<p class='HomepageAnonHeaderHero_line1-2hbgI'>
										<span class='HomepageAnonHeaderHero_cy-1OaMF'>.rect</span>{" "}
										<span>{"{"}</span>
									</p>

									<p class='HomepageAnonHeaderHero_line2-A3_xZ'>
										<span class='HomepageAnonHeaderHero_cp-g5I-X'>
											background
										</span>
										<span>:</span>
										<span class='HomepageAnonHeaderHero_cy-1OaMF'>
											linear-gradient
										</span>
										(
									</p>

									<p class='HomepageAnonHeaderHero_line3-2wi52'>
										<span class='HomepageAnonHeaderHero_co-1wWDL'>
											-119 deg
										</span>
										,
									</p>
									<p class='HomepageAnonHeaderHero_line4-1uUtl'>
										<span class='HomepageAnonHeaderHero_cy-1OaMF'>$gray</span>
										<span class='HomepageAnonHeaderHero_co-1wWDL'>0%</span>,
									</p>
									<p class='HomepageAnonHeaderHero_line5-3llzm'>
										<span class='HomepageAnonHeaderHero_cy-1OaMF'>
											$dark-gray
										</span>{" "}
										<span class='HomepageAnonHeaderHero_co-1wWDL'>100%</span>);{" "}
										{"}"}
									</p>
								</code>
							</div>
							<div className='code js'>
								<div className='topHeading'>
									<i className='fas fa-cog'></i>
									<h4>JS</h4>
								</div>
								<code>
									<span class='HomepageAnonHeaderHero_cy-1OaMF'>var</span>{" "}
									<span class='HomepageAnonHeaderHero_cb-4LMl9'>colors</span> =
									[
									<span class='HomepageAnonHeaderHero_cg-220SE'>"#74B087"</span>
									,
									<span class='HomepageAnonHeaderHero_cg-220SE'>"#DE7300"</span>
									,
									<span class='HomepageAnonHeaderHero_cg-220SE'>"#74B087"</span>
									];
									<span class='HomepageAnonHeaderHero_cc-3h1mi'></span>
									<br />
									<span class='HomepageAnonHeaderHero_cy-1OaMF'>
										function
									</span>{" "}
									<span class='HomepageAnonHeaderHero_cb-4LMl9'>animate</span>(){" "}
									{};
								</code>
							</div>
						</div>
					</div>
				</div>

				{/* <div style={{ width: "200px" }}>
				<svg
					viewBox='0 0 138 26'
					fill='none'
					stroke='#111'
					stroke-width='2.3'
					stroke-linecap='round'
					stroke-linejoin='round'
					title='CodePen'
					class='HomepageAnonHeader_logo-3CDih'>
					<path d='M15 8a7 7 0 100 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0l11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 010 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 000-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6'></path>
				</svg>
			</div> */}
			</div>
			<div className='midSection'>
				<div className='cardSection'>
					<Card
						src={
							"https://cpwebassets.codepen.io/assets/packs/icon-build-0f21c66ed03bfb36c597636d27ca621e.svg    "
						}
						title='Build & Test'
						body='Get work done quicker by building out entire projects or isolating code to test features and animations. Want to keep it all under wraps? Upgrade to a PRO account to keep your work private.'
						btnText='Try the Editor'
					/>
					<Card
						src={
							"https://cpwebassets.codepen.io/assets/packs/icon-learn-b1311620e99cea826f259aa2f7750940.svg"
						}
						title='Learn & Discover'
						body='Want to upgrade your skills and get noticed? Participating in CodePen Challenges is a great way to try something new. We frequently feature these Pens on our homepage and across social media!'
						btnText='Try the Editor'
					/>
					<Card
						src={
							"https://cpwebassets.codepen.io/assets/packs/icon-share-910c683bbac21bf41fcf9aab64ebc957.svg"
						}
						title='Share Your Work
                    '
						body='Become a part of the most active front-end community in the world by sharing work. Presenting at a conference? Show your code directly in the browser with Presentation Mode.'
						btnText='Try the Editor'
					/>
				</div>
				<div className='midDesign img1'>
					<img
						src='https://cpwebassets.codepen.io/assets/packs/lines-2-4e66616a5ef291c3566a7ddfe1ffaaa8.svg'
						alt=''
					/>
				</div>
				<div className='midDesign img2'>
					<img
						src='https://cpwebassets.codepen.io/assets/packs/lines-4-4ea88270d73b7f6eaaa69e91aed97ddf.svg'
						alt=''
					/>
				</div>
			</div>
		</>
	);
};

export default Home;
