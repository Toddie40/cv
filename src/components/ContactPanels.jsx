import ContactCard from "./ContactCard"


const ContactPanels = () => {
    return <div className="grid grid-cols-3 gap-x-12 mt-12 justify-center">
      <ContactCard topic="Email" text="I'm always open to interesting offers and ideas." button_text="Send me an email" link="mailto:Alex.todd40@gmail.com" icon={icon_email}/> 
      <ContactCard topic="LinkedIn" text="Visit my LinkedIn page for updates on what I'm up to." button_text="Visit LinkedIn" link="https://www.linkedin.com/in/alextoddbristol/" icon={icon_linkedin}/> 
      <ContactCard topic="GitHub" text="Check out my github for personal coding projects" button_text="Visit GitHub" link="https://www.github.com/Toddie40" icon={icon_github}/> 
    </div>
    };

export default ContactPanels;