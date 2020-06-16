import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import Firebase from '../../service/firebase';

const styles = {
    fontSize: "0.8rem",
    color: "red"
}

export default function Contact() {

    const [loading , setLoading] = useState(false);
    const [error , setError] = useState(undefined);
    const [isSubmitted , setIsSubmitted] = useState(false);

    const handleSubmit = async (values ,{ resetForm }) => {
      try {
        //resting some state variables
        setError(undefined);
        setIsSubmitted(false);
        setLoading(true);

        //adding data to firebase collection
        await Firebase.db.collection('Public')
            .doc('Collections')
            .collection('Contact')
            .add(values);

        //succesful submission
        setLoading(false);
        setIsSubmitted(true);
        resetForm();

      } catch(error) {
        //on error
        setLoading(false);
        setError("Unable to submit form");
       // setTimeout(()=> setError(undefined), 2000);
        console.log(error);
      }
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Your name is too short')
            .max(40, 'Your name is too long')
            .required('Your name is Required'),
        email: Yup.string()
            .email('Please enter valid email')
            .required('Email is required'),
        subject: Yup.string()
            .min(3, 'Subject is too short!')
            .max(80, 'Subject is too long!')
            .required('Subject is required'),
        message: Yup.string()
            .min(10, 'Message is too short!')
            .max(400, 'Subject is too long!')
            .required('Message is required'),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        validationSchema,
        onSubmit: handleSubmit
    });

    return (
        <section id="contact" className="contact " >
            <div className="container">

                <div className="section-title" data-aos="fade-up">
                    <h2>Contact</h2>
                    <p>Contact Us</p>
                </div>

                <div className="row">

                    <div className="col-lg-4" data-aos="fade-right" data-aos-delay="100">
                        <div className="info">

                            <div className="email">
                                <i className="icofont-envelope"></i>
                                <h4>Email:</h4>
                                <p>hello@coolage.app</p>
                            </div>

                            <div className="phone">
                                <i className="icofont-phone"></i>
                                <h4>Call:</h4>
                                <p>+91 79749 22411</p>
                            </div>

                        </div>

                    </div>

                    <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left" data-aos-delay="200">

                        <form onSubmit={formik.handleSubmit} className="php-email-form">

                            <div className="form-row">
                                <div className="col-md-6 form-group">
                                    <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name} className="form-control" id="name" placeholder="Your Name" />
                                    <div style={styles} className="valid">{formik.errors.name && formik.touched.name ? formik.errors.name : null}</div>
                                </div>
                                <div className="col-md-6 form-group">
                                    <input type="email" onChange={formik.handleChange} value={formik.values.email} className="form-control" name="email" id="email" placeholder="Your Email" />
                                    <div style={styles} className="valid">{formik.errors.email && formik.touched.email ? formik.errors.email : null}</div>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" onChange={formik.handleChange} value={formik.values.subject} className="form-control" name="subject" id="subject" placeholder="Subject" />
                                <div style={styles} className="valid">{formik.errors.subject && formik.touched.subject ? formik.errors.subject : null}</div>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" onChange={formik.handleChange} value={formik.values.message} name="message" placeholder="Message" rows={5}></textarea>
                                <div style={styles} className="valid">{formik.errors.message && formik.touched.message ? formik.errors.message : null}</div>
                            </div>
                            <div className="mb-3">
                                <div className="loading" style = {{display : loading ? 'block' : 'none'}}>Loading</div>
                                <div className="error-message" style = {{display : error ? 'block' : 'none'}}>{error}</div>
                                <div className="sent-message" style = {{display : isSubmitted ? 'block' : 'none'}}>Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>

                        </form>

                    </div>

                </div>

            </div>
        </section>
    )
}

