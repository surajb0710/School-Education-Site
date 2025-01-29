import AdmissionProcess from '../components/Admissions/AdmissionProcess';
import FeeStructure from '../components/Admissions/FeeStructure';
import Overview from '../components/Admissions/Overview';

const Admission = () => {
  return (
    <main>
      <Overview />
      <AdmissionProcess />
      <FeeStructure />
    </main>
  );
};

export default Admission;
