import { NextGenPage } from './app.po';

describe('next-gen App', function() {
  let page: NextGenPage;

  beforeEach(() => {
    page = new NextGenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
