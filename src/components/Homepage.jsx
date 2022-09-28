import React from 'react'
import "../Style/Style.css";
import logo from "../assets/logo.svg"
import Frame from "../assets/Frame.png"
import image_2 from "../assets/image_2.svg"
import arrow from "../assets/arrow.svg"
import icon from "../assets/icon.svg"
import downarrow from "../assets/downarrow.svg"
import Text from "../assets/Text.svg"
import review_1 from "../assets/review_1.svg"
import review_2 from "../assets/review_2.svg"
import review_3 from "../assets/review_3.svg"
import review_4 from "../assets/review_4.svg"
import review_5 from "../assets/review_5.svg"
import review_6 from "../assets/review_6.svg"
import review_7 from "../assets/review_7.svg"
import review_8 from "../assets/review_8.svg"
import Ellipse_8 from "../assets/Ellipse_8.svg"
import arrow_3 from "../assets/arrow_3.svg"




const Homepage = () => {

    return (
        <>
            <div className='container'>
                <div className='header'>

                    <p> One habit, 15 mins for 15 days</p>
                    <div className='header_logo'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='header_btn'>
                        <button>sign up</button>
                        <button>Sign up with Google</button>
                    </div>
                    <div className='togle'>
                    <i className="fa fa-bars"></i>
                    </div>
                </div>
               

                <div className='banner_text'>
                    <div>
                        <h1>One habit,<br />15 mins for 15 days</h1>
                    </div>
                    <div className='paragraph'>
                        <p>Develop a habit, meet like-minded people, document your progress & win NFTs.</p>
                    </div>
                </div>
                
                    <div className='banner_image'>
                        <div>
                            <img src={Frame} alt="" className='banner_photo' />
                        </div>
                 
                </div>
                <div >
                    <div className='deadline'>
                        <h4> <i className="fa fa-star">3rd Cohort Deadline: 30th June 2022</i> </h4>
                        <h4> <i className="fa fa-star">3rd Cohort Deadline: 30th June 2022</i> </h4>
                        <h4><i className="fa fa-star">3rd Cohort Deadline: 30th June 2022</i> <i className="fa fa-star"></i></h4>
                    </div>
                </div>
                <div>
                    <div className='div_3'>
                        <div>
                            <h3>Here are some habits you can develop <img src={arrow} alt="arrow" className='arrow'/> </h3>
                            <p>Pick one and let's give our best to develop the habit.</p>
                        </div>
                        <div className='div_4'>
                            <img src={image_2} alt="" />
                        </div>
                    </div>
                </div>

                <div className='feature_backgroud_div'>
                    <div className='features'>
                        <div className='Text-1'>
                            <h2>Things we will provide you with</h2>
                            <div className='features_text'>
                                <img src={icon} alt="" className='icon' /> <p>You will receive a discord invite. Join and meet like-minded people.</p></div>
                            <div className='features_text'>
                                <img src={icon} alt="" className='icon' />  <p>We will be conducting 2 zoom calls before the challenge and 1 zoom call post the challenge.</p></div>
                            <div className='features_text'>
                                <img src={icon} alt="" className='icon' /> <p>We will also share a notion page to document your progress.</p></div>
                        </div>
                        <div className='Text-2'>
                            <div className='features_text'>
                                <img src={icon} alt="" className='icon' />  <p>Quick and simplified educational sessions on how habits are formed.</p></div>
                            <div className='features_text'>
                                <img src={icon} alt="" className='icon' />  <p>Fun online games with the community members.*</p></div>
                            <div className='features_text'> <img src={icon} alt="" className='icon' />  <p>Become friends from all over the world and grow together.</p></div>
                            <div className='features_text'><img src={icon} alt="" className='icon' />   <p>Opportunity to become a mentor & facilitator for the future cohorts. *</p></div>
                        </div>
                    </div>
                </div>
                <div className='challenge_div'>
                    <div className='down_arrow'>
                        <img src={downarrow} alt="" />
                    </div>
                    <div className='challenge_header'>
                        <h4>Here's a story.</h4>
                    </div>
                    <div className='challenge_text'>
                        <h4>Mark joins the One5 Club and takes up the challenge. He wants to write everyday (Habit = Writing)</h4>
                    </div>
                    <div className='challenge_day'>
                        <li><span>Day-1:</span> Mark gets on a zoom call hosted by Prado. He meets about 50 new people who also took up this challenge. Mark makes new friends in the next couple of days.</li>
                        <li><span>Day 1 of the cohort:</span> The 15-day challenge starts today. One task, 15mins for 15days. Same time, everyday. Mark puts out a tweet or posts an IG story saying I'm taking up Prado's challenge and will be writing everyday for the next 15 days (Social Promise ✅) Mark can't go back on his word now. </li>
                        <li><span>Day 7:</span> Mark wants to give up, or got writer's block, or just doesn't remember because the habit is not in his subconscious mind yet. This is where the community comes in. The mentors, the facilitators, will help you keep going.</li>
                        <li><span>Day 15:</span> Challenge completed. Extensively documented on social media and a notion page. Feeling "amazing" level max 🚀</li>
                        <li><span> Day 16:</span> Attend the closing ceremony of the cohort hosted by Prado and share your experiences, some laughs, a group picture and before you go to sleep you'd receive an NFT in your wallet. You earned it.</li>
                        <li><span>Day 17:</span> You'd know what you need to do when that specific clock hits. Everyday for the past 15 days you've written something, you'd do the same thing today.</li>
                        <h3> 🎉 Challenge completed successfully 🎉</h3>
                    </div>
                    <div >
                        <div className='challenge'>
                            <div className='challenge_text_image'>
                                <div className='text_image'>
                                    <img src={Text} alt="" />
                                </div>
                                <div className='twitter'>
                                    <h3>Read the whole
                                        conversation on
                                        Twitter</h3>
                                    <img src={arrow_3} alt="" className='arrow_3' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='reason_div'>
                    <div className='reason'>
                        <div className='reason_points'>
                            <h1>Why is this paid?</h1>
                            <h3>We've all tried these things before but they never end up becoming a habit. We are either not disciplined enough or not motivated enough.</h3>
                            <h3>There are some healthy psychological tricks that can help you easily convince your brain to develop a habit.</h3>
                        </div>
                        <div className='tricks' >
                            <h3>Mind tricks like:</h3>
                            <li>Being accountable to someone,</li>
                            <li>Practising self-forgiveness,</li>
                            <li>Promising to do something consistently on the internet, etc.</li>
                            <h4>We also like this community to be paid because free things lose value almost immediately. Quality over quantity.<span> We'd rather have 50 people in a cohort who paid and were serious about the challenge than 500 people who didn't pay and just participate to win free NFTs.</span></h4>
                        </div>
                    </div>
                </div>
            </div>
            
                <div className="review">
                    <div className='review_header'>
                        <h1>Happy People</h1>
                    </div>
                    <div>
                        <div className='review_images'>
                            <div className='img_sec_1'>
                                <img src={review_6} alt="" />
                                <img src={review_7} alt="" />
                                <img src={review_8} alt="" />
                            </div>
                            <div>
                                <img src={review_4} alt="" />
                                <img src={review_5} alt="" />
                            </div>
                            <div>
                                <img src={review_1} alt="" />
                                <img src={review_2} alt="" />
                                <img src={review_3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='review_text'>
                        <h3>The results were amazing </h3>
                        <h3>Search and scroll<span>#One5</span>on Twitter</h3>
                    </div>
                
            </div>
            <div className='last_section_div'>
                <div className='message_header'>
                    <h1>FINAL MESSAGE FROM PRADO </h1>
                </div>
                <div className='message'>
                    <h3>One of my long term visions is to build a mind gym. A place where people can become mental athletes. Every big vision must start with small actions and this project is one of them. Building a community of people who not just show that they can develop habits but are also ready to take themselves to the next stage.</h3>
                    <h3>In this together,</h3>
                    <h3>Prado 🙌</h3>
                </div>
            </div>
            <div className='last_section'>
                <h3>Have more questions, feel free to text me on Twitter @pradologue </h3>
            </div>
            <div className='footer'>
                <img src={logo} alt="" />
                <div>
                    <p>One habit, 15 mins for 15 days.</p>
                    <p>By <img src={Ellipse_8}></img> Prado</p>
                </div>
            </div>

        </>
    )
}

export default Homepage