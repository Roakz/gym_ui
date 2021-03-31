import * as React from 'react';
import Login from '../components/Login';
import {Dispatch, SetStateAction} from 'react';

interface ISplashPageProps {
  setIsSplash: Dispatch<SetStateAction<boolean>>;
}

function SplashPage(props: ISplashPageProps){

  props.setIsSplash(true);

  return (
    <div id="splash-page-wrapper">
       <Login />
    </div>
  )
};

export default SplashPage;

