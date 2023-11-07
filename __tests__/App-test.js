import React from 'react';
import { create } from 'react-test-renderer';
import Loading from '../src/components/Loading/Loading';

const tree = create(<Loading />);

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});

