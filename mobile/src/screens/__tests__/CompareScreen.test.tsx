import { render } from '@testing-library/react-native';
import { CompareScreen } from '../CompareScreen';

describe('CompareScreen', () => {
  it('renders compare section heading', async () => {
    const { getByText } = await render(<CompareScreen />);
    expect(getByText(/Which iPhone is right for you/i)).toBeTruthy();
  });
});
