
import { Meta } from '@storybook/react';
import "../../index.css";

import  Progressbar  from './Progressbar';

export default {
    component: Progressbar,
    title: 'Progressbar',
}as Meta;

export const Main = (args :any) => <Progressbar {...args} ></Progressbar>;
Main.args={
    children1:"Task",
    children2:"%",
    color1:"bg-gray-300",
    color2:"bg-black",
}