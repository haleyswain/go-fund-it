import { GofundmePage } from './app.po';

describe('gofundme App', function() {
  let page: GofundmePage;

  beforeEach(() => {
    page = new GofundmePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
