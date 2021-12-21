import React, { useState, useEffect } from 'react';
export default function Section({ text }){
    return (
      <div className='section__init section__space section__padding'>
        <div className='gpt3__header-content'>
          <h1 className='gradient__text'>{text}</h1>
        </div>
      </div>
    )
}