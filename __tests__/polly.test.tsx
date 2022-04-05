import { render } from '@testing-library/react'
import PollyPage from "@/pages/polly";

describe('polly page test', function () {
  it('renders polly page unchanged ', function () {
    const { container } = render(<PollyPage />)
    expect(container).toMatchSnapshot()
  });

});
export {}
