import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { rootStore } from '../Stores/RootStore';
import { Link } from 'react-router-dom';
import Step1 from './step1';
import Step2 from './Step2';


function NewCompanie() {
  

  return (
    <>
      <Step1/>
      <Step2/>
     
    </>
  );
}

export default NewCompanie;
