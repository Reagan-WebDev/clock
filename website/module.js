import {PI, getCircumference, getArea, getVolume} from './mathUtil.js'
console.log(PI);

const circumference = getCircumference(10);
console.log(`${circumference.toFixed(2)}cm`);

const area = getArea(7);
console.log(`${area.toFixed(5)}`);

const volume = getVolume(14);
console.log(`${volume.toFixed(3)}`);