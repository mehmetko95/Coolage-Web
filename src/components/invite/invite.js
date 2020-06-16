import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import Firebase from '../../service/firebase';
import Lottie from "react-lottie";
import invite from '../../lotties/invite.json';

const styles = {
    fontSize: "0.8rem",
    color: "red"
}

export default function Invite() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: invite,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

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
            .collection('Invite')
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
        email: Yup.string()
            .email('Please enter valid email')
            .required('Email is required'),
    });

    const formik = useFormik({
        initialValues: {
            email:' '
        },
        validationSchema,
        onSubmit: handleSubmit
    });

    return (
        <section id="contact" className="contact " >
            <div className="container">
            <div className="row justify-content-center">
            <Lottie options={defaultOptions} height="700" width="700" />
            </div>
                <div className="section-title" data-aos="fade-up">
                    <h2 className="text-center">Get Early Access</h2>
                    <p className="text-center">Request Invite</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left" data-aos-delay="200">

                        <form onSubmit={formik.handleSubmit} className="php-email-form">

                            <div className="form-row justify-content-center ">
                            
                                <div className="col-md-8 form-group">
                                    <input type="email" onChange={formik.handleChange} value={formik.values.email} className="form-control" name="email" id="email" placeholder="Please Enter Your Email" />
                                    <div style={styles} className="valid">{formik.errors.email && formik.touched.email ? formik.errors.email : null}</div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="loading" style = {{display : loading ? 'block' : 'none'}}>Loading</div>
                                <div className="error-message" style = {{display : error ? 'block' : 'none'}}>{error}</div>
                                <div className="sent-message" style = {{display : isSubmitted ? 'block' : 'none'}}>Your Request has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Request Invite</button></div>

                        </form>

                    </div>

                </div>

            </div>
        </section>
    )
}

