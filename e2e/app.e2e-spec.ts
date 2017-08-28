import { ProductExamplePage } from './app.po';

describe('product-example App', () => {
  let page: ProductExamplePage;

  beforeEach(() => {
    page = new ProductExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
