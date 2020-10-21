import React from 'react'
import './Questions.css'
import { Link } from 'react-router-dom'
import { FaEye, FaPen, FaStackOverflow, } from 'react-icons/fa'
import { BiMessageAlt } from 'react-icons/bi'
import Quiz from '../Quiz/Quiz'

const Questions = () => {
    return (
        <div className='quized__wrapper'>
            
            <div className="left__contained">
                <div className="" style={{marginLeft:'40px',marginTop:'20px',position:'sticky',zIndex:'1500'}}>
                <div className="" style={{alignItems:'center', backgroundColor:'#cccc',borderRight:' 3px solid #f48024',padding:'7px'}}>
                    Home</div>
                    <div className="public">
                    <div className="" style={{alignItems:'center',padding:'7px'}}>
                    Public</div>

                    <div>
                        <div className="" style={{alignItems:'center',padding:'7px'}}>
                        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18"><path d="M9 1a8 8 0 100 16A8 8 0 009 1zM8 15.32a6.4 6.4 0 01-5.23-7.75L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.4 6.4 0 012.32 10.24v.01z">
                            </path></svg> Stack Overflow
                        </div>
                        <div className="">
                            <ul style={{listStyle:'none',margin:'0'}}>
                                <li>
                                    Tags
                                </li>
                                <li>
                                     Users
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div style={{marginTop:'20px'}}>
                        <div className="" style={{fontSize:'14px',alignItems:'center',padding:'7px'}}>
                        FIND A JOB
                        </div>
                        <div className="">
                            <ul style={{listStyle:'none',margin:'0'}}>
                                <li>
                                    Jobs
                                </li>
                                <li>
                                     Companies
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="" style={{marginTop:'20px',fontSize:'14px',alignItems:'center',padding:'7px'}}>
                        <div style={{display:'flex',justifyContent:'space-between',fontSize:'14px'}}>
                            <div className="">TEAMS</div>
                            <div className="" style={{fontSize:'12px'}}>What's this?</div>
                        </div>
                        <div className="ddd" style={{fontSize:'14px',marginTop:'10px'}}>
                        <svg style={{color:'#f48024'}} aria-hidden="true" width="18" height="18" viewBox="0 0 14 14"><path d="M4 3a1 1 0 011-1h4a1 1 0 011 1v1h.5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 012 10.5v-5C2 4.67 2.67 4 3.5 4H4V3zm5 1V3H5v1h4z">
                            </path></svg> Free 30 Day Try</div>
                    </div>


                    </div>
                </div>
            </div>

            <div className="right__contained">
            <div className="" style={{width:'65%',marginTop:'20px',borderLeft:'1px solid #ccc'}}>
                <div style={{padding:'0px 0px 15px 20px',marginTop:'2px',borderBottom:'1px solid grey'}}>
                <div style={{display:'flex',justifyContent:'space-between',width:'100%',boxSizing:'border-box', marginBottom:'25px'}}>
                <span style={{fontSize:'30px',fontWeight:'500'}}>Top Questions</span>
                <button style={{height:'40px',backgroundColor:'#29b6f6', boxSizing:'border-box',width:'100px',borderRadius:'4px',cursor:'pointer',border:'none',outline:'none'}}>
                  <Link to="/question">Ask Question</Link>
                </button>
                </div>
                <div className="" style={{margin:'10px, 0px, 10px,10px'}}>
                    <div className="" style={{height:'37px',border:'1px solid grey', marginLeft:'auto',width:'39%',boxSizing:'border-box',borderRadius:'5px' }}>
                        <button style={{height:'100%',margin:'0', width:'30%',borderTopLeftRadius:'5px',borderBottomLeftRadius:'5px',borderLeft:"none", borderTop:"none",borderBottom:'none',borderRight:'1px solid grey'}}>Interesting</button>
                        <button style={{height:'100%',margin:'0', width:'28%',borderRadius:'0',borderLeft:"none", borderTop:"none",borderBottom:'none',borderRight:'1px solid grey'}}>Bountied</button>
                        <button style={{height:'100%',margin:'0', width:'12%',borderRadius:'0',borderLeft:"none", borderTop:"none",borderBottom:'none',borderRight:'1px solid grey'}}>Hot</button>
                        <button style={{height:'100%',margin:'0', width:'15%',borderRadius:'0',borderLeft:"none", borderTop:"none",borderBottom:'none',borderRight:'1px solid grey'}}>Week</button>
                        <button style={{height:'100%',margin:'0', width:'15%',borderTopRightRadius:'5px',borderBottomRightRadius:'5px',borderLeft:"none", borderTop:"none",borderBottom:'none',borderRight:'none'}}>Month</button>
                    </div>
                    
                </div>
                </div>
                <Quiz />
                <Quiz />
                <Quiz />
               
            </div>
              <div style={{backgroundColor:'transparent',width:'25%',marginLeft:'20px',marginTop:'20px',boxSizing:'border-box'}}>
                 <div className="" style={{boxSizing:'border-box',borderRadius:'6px',backgroundColor:'#ccc'}}>
                        <div className="" style={{borderBottom:'1px solid grey', padding:'10px 10px 10px 10px'}}>
                        The Overflow Blog
                        </div>
                        <div className="" style={{borderBottom:'1px solid grey'}}>
                            <ul style={{listStyle:'none'}}>
                                
                                <li style={{margin:'0'}}> <FaPen /> How to put machine learning models into production</li>
                                <li> <FaPen /> Improve database performance with connection pooling</li>
                            </ul>
                        </div>

                        <div className="" style={{borderBottom:'1px solid grey',padding:'10px'}}>
                        Featured on Meta
                        </div>

                        <div className="" style={{borderBottom:'1px solid grey'}}>
                            <ul style={{listStyle:'none'}}>
                                <li> <BiMessageAlt /> Responding to the Lavender Letter and commitments moving forward</li>
                                <li> <FaStackOverflow /> What should be the name for the new [*vcf*] tag related to bioinformatics vcf…</li>
                                <li> <FaStackOverflow /> Downvotes Survey launching Oct 15</li>
                            </ul>
                        </div>

                        <div className="" style={{borderBottom:'1px solid grey',padding:'10px'}}>
                        Hot Meta Posts
                        </div>
                        
                        <div className="">
                            <ul style={{listStyle:'none'}}>
                                
                                <li style={{margin:'0'}}> <FaPen /> 
                                   Is providing a link to a consultation website, along with the answer, spam?</li>
                                <li> <FaPen /> Reformulate and make clearer the Help Center page on closed questions</li>
                            </ul>
                        </div>

              </div>

                  <div className="" style={{boxSizing:'border-box',borderRadius:'6px',backgroundColor:'#ccc'}}>
                        <div className="" style={{borderBottom:'1px solid grey', padding:'10px 10px 10px 10px'}}>
                        Custom Filters
                        </div>
                             
                        <div className="" style={{padding:'10px'}}>
                        Create a custom filter
                        </div>
                  </div>
                  <div className="" style={{boxSizing:'border-box',borderRadius:'6px',backgroundColor:'#ccc',marginTop:'20px'}}>
                        <div className="" style={{display:'flex',justifyContent:'space-between',borderBottom:'1px solid grey', padding:'10px 10px 10px 10px'}}>
                           <div><FaEye /> Watched Tags</div>
                           <div>edit</div>
                        </div>
                             
                        <div className="" style={{padding:'15px'}}>
                        <button style={{marginRight:'5px',padding:'5px'}}>Javascript</button>
                        <button style={{marginRight:'5px',padding:'5px'}}>NodeJs</button>
                        <button style={{padding:'5px'}}>ReactJs</button>
                        </div>
                  </div>
                  <div className="" style={{boxSizing:'border-box',borderRadius:'6px',backgroundColor:'#ccc',marginTop:'20px'}}>
                        <div className="" style={{borderBottom:'1px solid grey', padding:'10px 10px 10px 10px'}}>
                        Ignored Tags
                        </div>
                             
                        <div className="" style={{padding:'10px'}}>
                        <button style={{backgroundColor:'transparent',border:'none',outline:'none',cursor:'pointer'}}>Add a tag</button>
                        </div>
                  </div>

              </div>
            
            </div>
        </div>
    )
}

export default Questions


