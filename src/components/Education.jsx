import education from '../json/education.json';


const Education = () => {
    return <section className='education p-4'>
        <h2>Education</h2>
        {Object.entries(education).map(([key, props]) => (
        <div className='education_subsection my-4 border-2 rounded-sm p-4'>
            <div className='flex justify-between'>
                <div id='Text Contents'>
                    <p className='text-xl text-left font-bold'>{key}</p>
                    <p className="subtitle text-lg leading-relaxed mb-4">{props['Start Date']} - {props['End Date']}</p>
                    <p className="text-md font-semibold">{props.Course} | {props.Grade}</p>
                    <p className='mt-4 text-sm font-semibold'> Key Courses:</p>
                    <div className='flex flex-wrap gap-4 mt-4'>
                        {props.Subjects.map((subject) => (
                            <p className='pill'>{subject}</p>
                        ))}
                    </div>

                    <div className='mt-8'>
                        <a 
                            href={props.Thesis.link}
                            className='button'
                        >
                            Thesis!
                        </a>
                    </div>
                </div>
            <img className="h-32 p-4 text-right" src={`images/${props.Icon}`}/>
            </div>
            
        </div>
        ))}
        </section>
};

export default Education;