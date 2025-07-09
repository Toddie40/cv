
const AboutMe = () => {
 
    return <section className="about_me p-4">
      
        <h2 className="text-center sm:text-left">About Me</h2>
      
      
        <div className=' flex flex-col sm:flex-row-reverse  about_me_subsection p-4 rounded-sm'>
          <div className='w-full justify-center items-start sm:w-1/3'>
            <img 
              src={`${import.meta.env.BASE_URL}images/portrait.jpg`}
              alt='Profile Photo'
              className='profile h-48 w-48 rounded-full shadow-md object-cover mx-auto border-8'
            />
          </div>
          <div className='sm:w-2/3'>
            <p>
              Hi, I'm Alex. I'm a Machine Learning and AI Specialist working at BMT. 
            </p> 
            <p>
              My specialisms lie in Cloud Deployment, Computer Vision and Generative AI. If you're having difficulty actually deploying your AI models, I can help. 
            </p>
            <p>
              <b>Scroll down</b> if you're interested in seeing what I've been up to...
            </p>
          </div>
        </div>
      
    </section>
};

export default AboutMe;