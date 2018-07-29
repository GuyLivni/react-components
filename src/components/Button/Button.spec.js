import React from 'react';
import Button from './Button';

describe('Button', () => {
  it('should render a primary button', () => {
    const component = create(<Button>Primary</Button>).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should render a secondary button', () => {
    const component = create(
      <Button variant="secondary">Secondary</Button>,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(<Button>Primary</Button>);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
