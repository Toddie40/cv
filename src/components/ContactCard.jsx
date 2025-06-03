function ContactCard({topic, text, button_text, link, icon}) {
    return <div className="flex flex-col text-center items-center">
        <div className="contact-card-icon z-10">
            {icon()}
        </div>
        <div className="contact-card -mt-8">
            <div className="contact-card-top grow">
                <h3 className="mt-4">{topic}</h3>
                <p className="my-4">{text}</p>
            </div>
            <div className="contact-card-footer flex-none">
                <button
                onClick={() => window.location.href = link}
                className="font-semibold cursor-pointer hover:underline"
                >{button_text} 🡢</button>
            </div>
        </div>
    </div>
};

export default ContactCard;