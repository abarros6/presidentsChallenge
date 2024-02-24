import React from 'react'
import './About.scss'
import Loader from '../Loader/Loader'; // Adjust the import path based on your project structure

function About() {

  return (
    <div className='main-container'>
        <h1 className='main-header'>
            About
        </h1>
        <h2>
            Our Mission
        </h2>

        <div className='text-container'>
            <pre className='text-format'>
                
                <p>Wait times in emergency rooms are an enormous challenge in the Ontario health system. 
                    Patients wait on average 2 hours in Ontario to get an initial physician assessment upon arrival at an ER, with less urgent patients waiting longer. 
                    About a fifth of patients who go to emergency rooms can be classified as non-urgent, and could be treated at a walk-in clinic, rather than an ER. 
                    5% of patients walk out of ERs without being seen by a physician, and doubtless some amount of Ontarians forego emergency medical treatment entirely, discouraged by long waiting times. 
                    Non-urgent patients are also more expensive to treat at hospitals than alternative options, costing the province nearly 3 times as much when they go to the former rather than the latter. 
                    Hospitals dealing with non-urgent patients increases their staffing needs when nurses are already dealing with high rates of burnout, absenteeism, and, as of 2022, working an average of 9 overtime hours a week.</p>
                <p>Our team’s proposal is a website that would allow non-urgent patients to queue for emergency service at home, and redirect patients away from hospital ERs to walk-in clinics. 
                    There would be three versions of the website for its various users. 
                    The patient-side version would have users describe their symptoms, and then queue them to be seen for treatment. 
                    The hospital’s side would allow them to view and edit the queue associated with their hospital. 
                    There would be another version for walk-in clinics which allowed them to transfer patients from hospital queues to their own. 
                    There is currently no consolidated queuing system for non-urgent patients in Ontario, and redirecting patients to walk-in clinics deals directly with the aforementioned problems by reducing how many patients go through Ontario ERs.</p> 
                <p>The issues of implementing such a proposal are non-trivial but surmountable. 
                    Problems related to information privacy and security can be solved through a combination of app policy and technical security features. 
                    The main problems implementation faces are smooth integration into hospital workflow and triage procedures, and ensuring only non-urgent patients queue for healthcare from home — both of these would need to be solved through consultation with healthcare professionals. 
                    The service would ideally be rolled out to one hospital and several nearby clinics to allow for data collection on key metrics to evaluate effectiveness. 
                    If the program resulted in success on those metrics it could be rolled out in similar fashion to other locations.</p>
                <p>Successful implementation of our proposal would result in various cost benefits for stakeholders. 
                    The province would save $100 per patient diverted from a hospital to a clinic, hospitals would save on overtime hours and nursing agency contracting by having to see fewer patients, and clinics would benefit from increased billings. 
                    Ontarians would be able to access healthcare in a more convenient manner, and their walkout rate would be reduced if they had to be at the hospital for less overall time.</p>
                <p>Ontarians are frustrated with the service at ERs, and so are hospitals. 
                    Rightly so, as wait times increase, ERs face closures, and nursing staff burn out of the profession. 
                    Ontarians becoming comfortable with digital healthcare options through COVID-19 presents an historic opportunity to digitize the waiting room and let hospitals focus on the specialized and important work they are best suited to do.</p>

            </pre>
        </div>
    </div>
  )
}




export default About