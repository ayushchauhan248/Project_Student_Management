import React from 'react'

import { Meta } from '@storybook/react';
import "../../index.css";

import  Alert  from './Alert';

export default {
    component: Alert,
    title: 'Alert',
} as unknown as Meta;

export const Main = (args :any) => <Alert {...args} ></Alert>;
Main.args={
    children : "It's a  alert",
    svgColor:"text-blue-500",
    alertBgColor:"bg-yellow-300",
    alertBorderColor:"border border-green-400",
    alertTextColor: "text-red-500"
}