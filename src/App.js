import React from 'react';
import Router from './routes';
import { StatusBar } from 'react-native';

export default function App(){
  return(
    <>
    <StatusBar barStyle="light-content" backgroundColor="#000"/>
    <Router/>
    </>
  );
}