
const AboutMe = () => {
 
    return <section className='about_me p-4'>
      <h2>About Me</h2>
      <div className='about_me_subsection p-4 grid grid-cols-3 border-2 rounded-sm'>
        <div className='col-span-2'>
          <p>
          Hi, I'm Alex. I'm a Machine Learning and AI Specialist working at BMT. My background is in
          Mechanical Engineering, but recently I have pivoted to leveraging modern machine learning
          and artificial intelligence techniques to solving engineering problems. I sit at the
          interface between the real and the digital and excel at bringing machine learning techniques
          into the <b>real world.</b>
          </p>
        </div>
        <div className='h-auto'>
          <img 
            src={`${import.meta.env.BASE_URL}images/portrait.jpg`}
            alt='Profile Photo'
            className='profile size-48 rounded-full shadow-md object-cover mx-auto border-8'
          />
        </div>
      </div>
    </section>
};

export default AboutMe;