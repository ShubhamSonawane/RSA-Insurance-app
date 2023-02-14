import styled from 'styled-components';

const Loader = `
.lds - roller {
    display: inline - block;
    position: relative;
    width: 80px;
    height: 80px;
}
.lds - roller div {
    animation: lds - roller 1.2s cubic - bezier(0.5, 0, 0.5, 1) infinite;
    transform - origin: 40px 40px;
}
.lds - roller div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;`;

export default Loader;
