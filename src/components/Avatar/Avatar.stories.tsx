import React from 'react'

import { Meta } from '@storybook/react';
import "../../index.css";

import  Avatar  from './Avatar';

export default {
    component: Avatar,
    title: 'Avatar',
}  as Meta;

export const Main = (args :any) => <Avatar {...args} ></Avatar>;
Main.args={
    
    
}