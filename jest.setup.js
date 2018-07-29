import 'jest-enzyme';
import 'jest-styled-components';
import { renderToStaticMarkup } from 'react-dom/server';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { axe, toHaveNoViolations } from 'jest-axe';
import { create } from 'react-test-renderer';

configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.renderToHtml = renderToStaticMarkup;
global.mount = mount;
global.axe = axe;
global.create = create;

expect.extend(toHaveNoViolations);
