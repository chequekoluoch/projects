import React from 'react'
const Quiz = () => {
    return (
        <div style={{display:'flex',backgroundColor:'#FFF3e0',boxSizing:'border-box',borderBottom:'1px solid grey'}}>
            <div className='tags' style={{display:'flex',width:'220px',marginRight:'12px',alignItems:'center'}}>
                <div className="votes"  style={{boxSizing:'border-box',textAlign:'center',padding:'10px', borderRadius:'4px', fontSize:'18px', marginRight:'4px'}}>
                    <div style={{fontSize:'16px',marginBottom:'6px'}}>4</div>
                    <div style={{fontSize:'13px'}}>votes</div>
                </div>
                <div className="answers" style={{boxSizing:'border-box',textAlign:'center',padding:'10px', borderRadius:'4px', fontSize:'18px', marginRight:'4px'}}>
                <div style={{fontSize:'16px',marginBottom:'6px'}}>50</div>
                    <div style={{fontSize:'13px'}}>answers</div>
                </div>
                <div className="views" style={{boxSizing:'border-box',textAlign:'center',padding:'10px', borderRadius:'4px', fontSize:'18px', marginRight:'10px'}}>
                <div style={{fontSize:'16px',marginBottom:'6px'}}>0</div>
                    <div style={{fontSize:'13px'}}>views</div>
                </div>
            </div>

            <div className="que" style={{display:'flex',padding:'10px',flexDirection:'column', width:'600px',marginLeft:'5px'}}>
                <div className='' style={{marginBottom:'10px'}}>Connect 4 check for a win algorithmgcxfcghjbkn ighv  b Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, temporibus.
                </div>
                <div className="" style={{display:'flex', justifyContent:'space-between'}}>
                  <div className='languages' style={{display:'flex'}}>
                      <button style={{marginRight:'5px'}}>Java</button>
                      <button style={{marginRight:'5px'}}>Javascript</button>
                      <button style={{marginRight:'5px'}}>ReactJs</button>
                      <button>Python</button>
                  </div>
                  <div className="name__tags" style={{marginLeft:'40px',fontSize:'12px'}}>asked 48 secs ago Aylton Almeida 35</div>
                </div>
            </div>
            
        </div>
    )
}

export default Quiz
