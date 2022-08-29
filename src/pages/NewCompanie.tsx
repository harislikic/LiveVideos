import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { rootStore } from '../Stores/RootStore';
import { Link } from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';
import { observer } from 'mobx-react';

function NewCompanie() {
  const { companieStore } = rootStore;

  return <>
  {companieStore.step == 1 ? 
  <Step1 /> 
  : 
  <Step2 />}
  </>;
}

export default observer(NewCompanie);
