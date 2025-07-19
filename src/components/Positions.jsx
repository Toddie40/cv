import Experience from '../components/Experience';
import experienceData from '../json/experience.json';


const Positions = () => {
    return <section className='experience p-4'>
    <h2 className="text-center sm:text-left">Experience</h2>
    {Object.entries(experienceData).map(([key, props]) => (
      <Experience
        title={key}
        company={props.Company}
        date={props.Date}
        projects={props.Projects}
      />
    ))}
    </section>
};

export default Positions;