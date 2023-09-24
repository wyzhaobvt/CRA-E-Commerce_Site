const AboutUs = () => {
    return ( 
        <div className="d-flex flex-column align-items-center">
        <div className="w-75" id="about">
          <h1 className="m-2 text-center display-5">About us</h1>
          <p className="mt-4">
            Welcome to The Apple Shop, your ultimate destination for all things Apple! We are passionate about Apple products, and our mission is to provide you with the latest and greatest devices, accessories, and services that the Apple ecosystem has to offer.  
          </p>
          </div>
          <div className="aboutUs my-3 w-75" id="story">
          <h3>Our story</h3>
          <p>At here, our journey began with a shared love for Apple's innovative and cutting-edge technology. We recognized that Apple products aren't just gadgets; they're tools that enhance your life, simplify your tasks, and inspire your creativity. That's why we decided to create a place where fellow Apple enthusiasts like you could find everything you need in one convenient location.</p>
        </div>
        <div className="aboutUs my-3 w-75" id="whyChoose">
        <h3>Why Choose Us?</h3>
        <ol>
          <li><b>Authenticity:</b> We are committed to providing only genuine Apple products, ensuring that you receive the quality and reliability that Apple is renowned for.</li>
          <li>
            <b>Expertise: </b>Our team is well-versed in Apple's product lineup and can offer expert advice to help you make informed decisions.
          </li>
          <li>
            <b>Diverse Selection:</b> From the latest iPhones, iPads, and MacBooks to a wide range of accessories and software, we have a diverse selection to meet your Apple-related needs.
          </li>
        </ol>
      </div>
      <div className="aboutUs my-3 w-75" id="promise">
        <h3>Our Promise</h3>
        <p>When you shop at The Apple Shop, you're not just purchasing products; you're joining a community of Apple enthusiasts. We're here to support you on your Apple journey, whether you're a seasoned Apple aficionado or a newcomer eager to explore the Apple universe.
  
          Thank you for choosing us as your trusted source for Apple products. We look forward to being part of your Apple experience and helping you discover the magic of Apple innovation.
          
          Explore our website today and discover the world of Apple at your fingertips.</p>
        </div>
      </div>
     );
}
 
export default AboutUs;