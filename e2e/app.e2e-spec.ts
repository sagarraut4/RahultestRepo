import { RahuldemoPage } from './app.po';

describe('rahuldemo App', () => {
  let page: RahuldemoPage;

  beforeEach(() => {
    page = new RahuldemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
