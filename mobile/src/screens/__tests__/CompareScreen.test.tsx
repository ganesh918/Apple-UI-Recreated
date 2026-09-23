import { renderWithProviders } from '../../test/renderWithProviders';
import { CompareScreen } from '../CompareScreen';

describe('CompareScreen', () => {
  it('renders compare section heading', async () => {
    const { getByText } = await renderWithProviders(<CompareScreen />);
    expect(getByText(/Which iPhone is right for you/i)).toBeTruthy();
  });
});
