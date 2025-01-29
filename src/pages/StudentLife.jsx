import EventsCelebrations from '../components/StudentsLife/EventsCelebrations';
import ExtraCuricularActivities from '../components/StudentsLife/ExtraCuricularActivities';
import Overview from '../components/StudentsLife/Overview';
import StudentSupport from '../components/StudentsLife/StudentSupport';

const StudentLife = () => {
  return (
    <main>
      <Overview />
      <ExtraCuricularActivities />
      <EventsCelebrations />
      <StudentSupport />
    </main>
  );
};

export default StudentLife;
