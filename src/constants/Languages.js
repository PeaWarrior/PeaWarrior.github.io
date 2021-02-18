import React from 'react';
import { SiRuby, SiJavascript, SiPython, SiHtml5, SiCss3 } from 'react-icons/si';

export const Languages = [
  {
    id: 1,
    name: 'JavaScript',
    icon: <SiJavascript fill='#F7DF1E' title='JavaScript' />,
  },
  {
    id: 2,
    name: 'Ruby',
    icon: <SiRuby fill='#CC342D' title='Ruby' />,
  },
  {
    id: 3,
    name: 'Python3',
    icon: <SiPython fill='#3776AB' title='Python3' />,
  },
  {
    id: 4,
    name: 'HTML5',
    icon: <SiHtml5 fill='#E34F26' title='HTML5' />,
  },
  {
    id: 5,
    name: 'CSS3',
    icon: <SiCss3 fill='#1572B6' title='CSS3' />,
  },
];
