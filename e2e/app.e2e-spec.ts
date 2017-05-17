import { DenemePage } from './app.po';

describe('deneme App', () => {
  let page: DenemePage;

  beforeEach(() => {
    page = new DenemePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
