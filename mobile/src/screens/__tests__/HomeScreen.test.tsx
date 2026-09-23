import { render } from '@testing-library/react-native';
import { HomeScreen } from '../HomeScreen';

describe('HomeScreen', () => {
  it('renders iPhone 14 hero copy from Apple-04 content', async () => {
    const { getByText } = await render(<HomeScreen />);
    expect(getByText(/Two great sizes/i)).toBeTruthy();
    expect(getByText(/Pro\. Beyond\./i)).toBeTruthy();
    expect(getByText(/Love the power/i)).toBeTruthy();
  });

  it('shows trade-in promo banner', async () => {
    const { getByText } = await render(<HomeScreen />);
    expect(getByText(/\$200–\$600 in credit/i)).toBeTruthy();
  });
});
