const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-applications');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];
};
// const saveJobApplication = id => {
//     console.log(id);
//     const storedJobApplications = getStoredJobApplication();
//     console.log(storedJobApplications)
//     const exists = storedJobApplications.find(jobid => jobid == id);
    
//     if(!exists){
//         storedJobApplications.push(id);
//         localStorage.setItem('job-aplications', JSON.stringify(storedJobApplications))
//     }
// };


const saveJobApplication = id =>{
    const storedJobApplications = getStoredJobApplication();
    const exists = storedJobApplications.find(jobId => jobId === id);
    if(!exists){
        storedJobApplications.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications))
    }
}

export { getStoredJobApplication, saveJobApplication }