import React, { useState, useEffect } from 'react';
import Form from "./Form";
import Navbar from "../../../components/navbar/Navbar";
export default function FormPage(props){
    return <>
      <Navbar />
      <Form />
    </>
}