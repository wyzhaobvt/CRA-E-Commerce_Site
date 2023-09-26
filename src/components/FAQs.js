import Data from '../FAQData.json'

let FAQs = ()=>{
           
    return (
        <div className="accordion m-5" id="accordionExample">
        <>
       {Data.data.map((item,index) => {
        let id = `#${index+1}`
        let headingId =  `heading${index+1}`
        return (
            
          <div className="accordion-item" key={item.id}>
            <h2 className="accordion-header" id={headingId}>
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target= {id} aria-expanded="true" aria-controls={index+1}>
                {item.question}
              </button>
            </h2>
            <div id={index+1} className="accordion-collapse collapse" aria-labelledby={headingId} data-bs-parent="#root">
              <div className="accordion-body">
                {item.answer}
              </div>
            </div>
          </div>
          
           )
           
       })}
       </>
       </div>
    )}
export default FAQs