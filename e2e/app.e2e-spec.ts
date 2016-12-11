import { LargeAngularFormTestPage } from './app.po';

describe('large-angular-form-test App', function() {
  let page: LargeAngularFormTestPage;

  beforeEach(() => {
    page = new LargeAngularFormTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
