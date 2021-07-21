import React from 'react'

import { Meta } from '@storybook/react';
import "../../index.css";

import  Button  from './Button';

export default {
  component: Button,
  title: 'Button',
  argTypes:{
      theme:{
          control:{type:"select"},
      },
      type: {
        control:{type:"select"},
    },
    onclick:{
        action:"clicked"},
  }
} as Meta;

export const Main = (args :any) => <Button {...args} ></Button>;
Main.args={
    children:"Sign in",
    type:"submit",
    className:"",
    disabled: false, 
}