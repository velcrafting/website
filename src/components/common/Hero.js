const Hero = () => {
  return (
    // Ensure the hero section takes full width with 'w-full' and remove horizontal padding if not needed
    <section className="relative dark:bg-gray-900 w-full">
      <div className="py-8 mx-auto max-w-full text-center lg:py-16">
        {/* Removing padding here might help, ensure 'max-w-full' for full width */}
        <div className="relative h-96 text-left w-full">
          <img 
            src="/crimsonhero.png"
            alt="Hero Background" 
            className="absolute inset-0 w-full h-full object-cover rounded-2xl" // Added 'rounded-2xl' for rounded corners
            style={{ objectPosition: 'center top' }} // Adjust the image cropping
          />

          {/* Shadow overlay */}
          <div className="absolute inset-0 "></div>
          {/* Positioning the text over the image */}
          {/* <div className="absolute bottom-0 left-0 p-8 z-10">
            <h2 className="text-5xl font-extrabold tracking-tight leading-tight text-white">Steven | Vel | Velcrafting</h2>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
