import { svgs } from '../../assets/assets.js';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const StudentInformation = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    initialValues: {
      parentName: '',
      email: '',
      phoneNumber: 0,
      studentName: '',
      studentAge: '',
      programofInterest: '',
      message: '',
    },
    validationSchema: Yup.object({
      parentName: Yup.string()
        .min(5, 'Must be 5 characters or more')
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phoneNumber: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Required'),
      studentName: Yup.string()
        .min(5, 'Must be 5 characters or more')
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
      studentAge: Yup.number()
        .min(10, 'You must be at least 10 years old')
        .max(30, 'Enter a valid age')
        .required('Required'),
      programofInterest: Yup.string()
        .min(5, 'Must be 5 characters or more')
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
      message: Yup.string()
        .min(5, 'Must be 5 characters or more')
        .max(100, 'Must be 30 characters or less')
        .required('Required'),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  console.log(formik.touched);

  return (
    <section className="contact-us" id="contact-us">
      <div>
        <p>Contact Form</p>
        <h1>Student Information</h1>
        <p>
          If you have specific questions or wish to request more information
          about Little Learners Academy, please complete the contact form below.
          Kindly provide the following details to help us better understand your
          needs
        </p>
      </div>
      <div className="contact-us-block">
        <div className="social-handles">
          <div>
            <img src={svgs.facebook} alt="" />
          </div>
          <div>
            <img src={svgs.twitter} alt="" />
          </div>
          <div>
            <img src={svgs.linkedin} alt="" />
          </div>
        </div>
        <form className="contact-us-form" onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="parentName">Parent Name</label>
            <br />
            <input
              type="text"
              id="parentName"
              name="parentName"
              placeholder="Enter Parent Name"
              onChange={formik.handleChange}
              value={formik.values.parentName}
              onBlur={formik.handleBlur}
            />
            {formik.touched.parentName && (
              <p className="errorMessage">{formik.errors.parentName}</p>
            )}
            <br />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <br />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter Email Address"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && (
              <p className="errorMessage">{formik.errors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <br />
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter Phone Number"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phoneNumber && (
              <p className="errorMessage">{formik.errors.phoneNumber}</p>
            )}
          </div>
          <div>
            <label htmlFor="studentName">Student Name</label>
            <br />
            <input
              type="text"
              id="studentName"
              name="studentName"
              placeholder="Enter Student Name"
              onChange={formik.handleChange}
              value={formik.values.studentName}
              onBlur={formik.handleBlur}
            />
            {formik.touched.studentName && (
              <p className="errorMessage">{formik.errors.studentName}</p>
            )}
          </div>
          <div>
            <label htmlFor="studentAge">Student Age</label>
            <br />
            <input
              type="number"
              id="studentAge"
              name="studentAge"
              placeholder="Enter Student Age"
              onChange={formik.handleChange}
              value={formik.values.studentAge}
              onBlur={formik.handleBlur}
            />
            {formik.touched.studentAge && (
              <p className="errorMessage">{formik.errors.studentAge}</p>
            )}
          </div>
          <div>
            <label htmlFor="programofInterest">Program of Interest</label>
            <br />
            <div className="programofInterest_container">
              <select
                name="programofInterest"
                id="programofInterest"
                className="programofInterest"
                onChange={formik.handleChange}
                value={formik.values.programofInterest}
                onBlur={formik.handleBlur}
              >
                <option value="" disabled>
                  Select Program
                </option>
                <option value="program1">Program 1</option>
                <option value="program2">Program 2</option>
                <option value="program3">Program 3</option>
                <option value="program4">Program 4</option>
              </select>
              <img src={svgs.carrot_down} alt="" />
            </div>
            {formik.touched.programofInterest && (
              <p className="errorMessage">{formik.errors.programofInterest}</p>
            )}
          </div>
          <div>
            <label htmlFor="message">Mesaage</label>
            <br />
            <textarea
              type="text"
              id="message"
              name="message"
              placeholder="Enter Your Message"
              rows="4"
              onChange={formik.handleChange}
              value={formik.values.message}
              onBlur={formik.handleBlur}
            />
            {formik.touched.message && (
              <p className="errorMessage">{formik.errors.message}</p>
            )}
          </div>
          <button type="submit" className="submitBtn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default StudentInformation;
