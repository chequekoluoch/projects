import React from 'react'
import { FaQuestionCircle } from 'react-icons/fa'
import Acordian from '../Acordian/Acordian'
import RichEditor from '../RichEditor/RichEditor'
import './Question.css'

const Question = () => {
    return (
        <div className="quiz__container">
           <div className="quiz__title">
               <div className="title">
                   Ask a public question
               </div>
           </div>
           <div className="textarea__wrapper">
               <div className="">
                   <div className="textarea__container">
                       <form className="quiz__form">
                           <div className="input__title-container">
                              <div className="input__title-label">
                                  <label htmlFor="title">
                                      <h4 style={{margin:'5px 0'}}>Title</h4>
                                      Be specific and imagine you’re asking a question to another person
                                  </label>
                              </div>
                              <div className="input__title-text">
                                  <input type="text" placeholder="e.g. Is there an R function for finding the index of an element in a vector?"/>
                              </div>


                              <div className="post-editor">
                                  <div className="post__editor-label">
                                  <label htmlFor="title">
                                      <h4 style={{margin:'5px 0'}}>Body</h4>
                                      Include all the information someone would need to answer your question
                                  </label>
                                  </div>

                                  <div className="richtext">
                                      <RichEditor />
                                  </div>
                                  
                                  <div className="instructions" style={{margin:'7px'}}>
                           ```<button>code</button>``` **bold** *italic* bold
                                  </div>


                                  <div className="input__title-label" style={{display:'flex', justifyContent:'space-between'}}>
                                  <label htmlFor="title">
                                      <h4 style={{margin:'5px 0'}}>Tag</h4>
                                      Add up to 5 tags to describe what your question is about
                                  </label>
                                  <button style={{border:'0',outline:'none',backgroundColor:'transparent'}}>
                                  <FaQuestionCircle style={{color:'blue'}}/>
                                  </button>
                              </div>
                              <div className="input__title-text">
                                  <form action="">
                                  <span></span>
                                  <input type="text" placeholder="e.g. (reactjs javascript .net)"/>
                                  </form>
                              </div>

                              </div>

                           </div>
                           
                       </form>
                      
                   </div>
                   <div className="submitter" style={{marginTop:'20px'}}>
                               <button style={{backgroundColor:'#33A5FF',color:'#fff', height:'35px', boxSizing:'border-box',cursor:'pointer',borderRadius:'3px',border:'none',outline:'none',fontSize:'14px'}}>Review your question</button>
                           </div>
                   </div>

                   <div className="righ">
                   <div className="right__container">
                       <div className="step__one" 
                       style={{boxSizing:'border-box',borderBottom:'1px solid #cccc',padding:'10px'}}>
                           Step 1: Draft your question
                           </div>
                       <div className="" style={{padding:'15px', fontSize:'13px'}}>The community is here to help you with specific coding, algorithm, or language problems.

Avoid asking opinion-based questions.</div>
<div style={{borderBottom: '1px solid #4444'}}>
<Acordian title="1. Summarize the problem"
     content="<ul>
     <li>Include details about your goal</li>
     <li>Describe expected and actual results</li>
     <li>Include any error messages</li>
     </ul>
     " />
</div>
<div style={{borderBottom: '1px solid #4444'}}>
       <Acordian title="2. Describe what you've tried"
     content="<ul style={{listSyle:'none'}}>
     <li>Show what you’ve tried and tell us what you found (on this site or elsewhere) and why it didn’t meet your needs. You can get better answers when you provide research.</li>
     </ul>
     " /> 
     </div> 
     <Acordian title="3. Show some code"
     
     content="<ul  style={{listSyle:'none'}}>
     <li>When appropriate, share the minimum amount of code others need to reproduce your problem (also called a minimum, reproducible example)</li>
     
     </ul>
     " />


                   </div>

                   <div className="" style={{marginTop:'25px'}}>
               <Acordian title="Have a non programming question?"
     content="
     <div>
     <span><a style={{color:'blue'}} href='#'>Super user</a></span></br>
Troubleshooting hardware and software issues
     </div>

     <div >
     <span style={{color:'blue !important'}}><a href='#'>Software engineering</a></span></br>
     For software development methods and process questions
     </div>
     <div><a href='#'>Hardware recommendations</a></div>
     <div><a href='#'>Software recommendations</a></div>
     <div>
     Ask questions about the site on 
     <span><a href='#'>meta</a></span>
     </div>
     " />
     </div>
<div className="" style={{marginTop:'20px'}}>
<Acordian title="More helpful links"
     content="<ul  style={{listSyle:'none'}}>
     <li>When appropriate, share the minimum amount of code others need to reproduce your problem (also called a minimum, reproducible example)</li>
     
     </ul>
     " />
     </div>
                   </div>

               </div>

        </div>
    )
}

export default Question
