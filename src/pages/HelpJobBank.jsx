
import HiringForm from './HiringForm';
import JobSeekerForm from './JobSeekerForm';

const HelpJobBank = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl font-bold mb-10">Join Us: Hiring or Seeking Jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <HiringForm />
        <JobSeekerForm />
      </div>
    </div>
  );
};

export default HelpJobBank;
