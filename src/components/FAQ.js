const FAQ = () => {
    return ( 
        <div className="m-4">
        <h3 className="display-5 text-center">FAQ</h3>
        <div className="accordion mt-4" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  01. I don't remember my password?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                 Click 'Forget password' and create a new password. 
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  02. How can I create an account at your site?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Click on 'Login & Sign up' at the top of the page. Then fill out your information in the 'Create an account' section and click the 'Sign Up' button. You can also create an account directly after placing an order. Your delivery address and the order details will then be saved in your account. 
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  03. What are your delivery hours?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                We deliver from 9:00 am - 4:00 pm.
                </div>
              </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                    04. How much time it takes to deliver the order?
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    It usually takes 5-7 business days.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                    05. How do I know status of my order?
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                   Click track my order and input your order number. 
                  </div>
                </div>
              </div>
          </div>
        </div>
     );
}
 
export default FAQ;