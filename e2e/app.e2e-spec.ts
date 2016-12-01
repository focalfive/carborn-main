import { CarbornMainPage } from './app.po';

describe('carborn-main App', function() {
  let page: CarbornMainPage;

  beforeEach(() => {
    page = new CarbornMainPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
