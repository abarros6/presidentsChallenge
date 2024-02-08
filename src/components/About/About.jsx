import React,{useState, useEffect }from 'react'
import './About.css'



function About() {

    const [About_text, set_About_text] = useState("")

  return (
    <div className='about_main_container'>
        <h1 className='about_main_header'>
            About
        </h1>
        <h2 className='about_main_subheader'>
            Our Mission
        </h2>

        
        
        <div className='about_subcontainer1'>
            <pre className='about_description'>
                
                <p>Our team’s proposal is an app which would allow non-acute patients in Ontario to queue for emergency service at home. 
                    The app would have patients describe their symptoms, provide their location and health card number, and then queue them to be seen at an emergency room so that they can show up shortly before a physician is projected to be available. 
                    The hospital’s side of the app would allow them to view and edit the queue associated with their hospital. 
                    There would be another version for walk-in clinics and urgent care centres which allowed them to transfer patients from hospital queues to their own.</p>
                <p>The purpose of such an app is twofold. 
                    Firstly, the app would aim to reduce total ER visits by directing people who can be treated outside of such a facility elsewhere. 
                    Secondly, it would keep non-acute patients from having to physically wait in ERs or clinics before they get an Initial Physician Assessment.</p> 
                <p>Wait times in emergency rooms are an enormous challenge in the Ontario health system. 
                    About a fifth of patients who go to emergency rooms do not require emergency rooms services and could be treated at either an urgent care centre or walk-in clinic. 
                    Keeping non-acute patients out of ERs would reduce wait times for everyone, and reduce the workload at already overburdened hospitals.</p>
                <p>Public frustration with emergency room wait times is an issue which hampers the healthcare system: frustrated patients can become agitated with healthcare workers. 
                    A 2009 study reported that 69% of nurses Canada-wide reported having experienced emotional abuse by patients in the last 12 months. 
                    Verbal abuse is equally predictive as physical abuse in predicting healthcare job satisfaction, and abuse at the workplace is the best predictor of job satisfaction. 
                    By allowing patients to wait at home, their frustration with wait times can be reduced, making them less inclined to treat healthcare workers poorly.</p>
                <p>The average rate of full-time nurse absenteeism in Canada is 9%, with the national average of all professions being 5.7%. 
                    In Ontario in 2016, the cost of nurse absenteeism associated with disability or illness was estimated at $278 million, and the cost of paid overtime $196 million. 
                    Some sick leave is undoubtedly taken due to work-induced stress, and other nurses working more to fill in those spots is costly in overtime. 
                    Implementing this app should reduce emotional abuse towards nurses and thus nurse sick leave taken due to stress. 
                    Ontario can save $1.4 million for every 0.5% nurse absenteeism is reduced.</p>

            </pre>
        </div>
        <h2 className='about_main_subheader'>
            
        </h2>

    </div>
  )
}




export default About