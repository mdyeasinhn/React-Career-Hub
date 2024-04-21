
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../Utility/LocalStoreage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs && jobs.find(job => job.id === idInt);

    const handleAppliedJob =() =>{
        saveJobApplication(idInt);
       toast.success("You have applied successfully");
    }
    return (
        <div>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl">JOb detils commig here</h2>
                    <h2>Job details of :{job.job_title}</h2>
                    <p>{job.company_name}</p>
                </div>
                <div className="border">
                    <h2 className="text-2xl">Side thing</h2>
                    <button onClick={handleAppliedJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <Toaster/>
        </div>
    );
};

export default JobDetails;