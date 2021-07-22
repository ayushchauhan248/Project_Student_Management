import React from 'react'

import { Meta } from '@storybook/react';
import "../../index.css";

import Cards  from './Cards';

export default {
    component: Cards,
    title: "Cards",
} as Meta;

export const Main = (args :any) => <Cards {...args} ></Cards>;
Main.args={
    maxToShow:5,
    img1:"https://www.clipartmax.com/png/middle/162-1623921_stewardess-510x510-user-profile-icon-png.png",
    img2:"https://www.pinclipart.com/picdir/middle/355-3553881_stockvader-predicted-adig-user-profile-icon-png-clipart.png",
    img3:"https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg",
    img4:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkXlw7gFsZ4AxlI_-p7BbDgffMA9YbBdHqRBTNsdsz1RnCo3A3EnZqarneMU7kzzs3P-Y&usqp=CAU",
    img5:"https://cdn5.vectorstock.com/i/1000x1000/72/59/female-avatar-profile-icon-round-african-american-vector-18307259.jpg",
    img6:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-6aKvbs_Afp97m1FhBKsAhp9cyG4ORzIFvHyqddNmqumvJ59Re3U8yvXM-gsJYu9HtGI&usqp=CAU"
    
}