import { BfdCompanyPage } from './app.po';

describe('bfd-company App', () => {
  let page: BfdCompanyPage;

  beforeEach(() => {
    page = new BfdCompanyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bfd works!');
  });
});
