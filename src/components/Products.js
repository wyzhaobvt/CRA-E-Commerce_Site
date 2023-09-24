const products = () => {
    return ( 
        <>
              <h3 className="display-5 text-center mt-5">Our Products</h3>
      <div className="container-fluid" >
        <div className="row gx-2 gy-5 py-5">
            <div className=" col-md-4  d-flex justify-content-center align-items-center">
              <figure className="figure">
                <img className="img-thumbnail" src="pexels-cottonbro-studio-4065876.jpg" alt="macbook"/>
                <figcaption className="figure-caption text-center">MackBook $1299
                </figcaption>
              </figure>
               
            </div>
            <div className=" col-md-4  d-flex justify-content-center align-items-center">
              <figure className="figure">
              <img className="img-thumbnail" src="pexels-pixabay-38568.jpg"  alt="imac" />
              <figcaption className="figure-caption text-center">iMac $1099
              </figcaption>
            </figure>
            </div>
            <div className=" col-md-4  d-flex justify-content-center align-items-center">
              <figure className="figure">
              <img className="img-thumbnail" src="dollar-gill-feXbDPB8dmQ-unsplash.jpg" alt="ipad" />
                <figcaption className="figure-caption text-center">iPad $599
                </figcaption>
              </figure>
              </div>
   
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <figure className="figure">
              <img className="img-thumbnail" src="paolo-giubilato-D4tf63uSEuY-unsplash.jpg" alt="iphone" />
                <figcaption className="figure-caption text-center">iPhone $1099
                </figcaption>
              </figure>
              </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <figure className="figure">
              <img className="img-thumbnail" src="jonas-elia-pv-U1L8-hHY-unsplash.jpg" alt="airtag" />
                <figcaption className="figure-caption text-center">airTag $49
                </figcaption>
              </figure>
              </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <figure className="figure">
              <img className="img-thumbnail" src="simon-daoudi-2wFoa040m8g-unsplash.jpg" alt="applewatch"/>
                <figcaption className="figure-caption text-center">iWatch $499
                </figcaption>
              </figure>
              </div>
            
        </div>
    </div>
        </>
     );
}
 
export default products;