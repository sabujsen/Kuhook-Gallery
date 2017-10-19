import { KuhookGalleryPage } from './app.po';

describe('kuhook-gallery App', () => {
  let page: KuhookGalleryPage;

  beforeEach(() => {
    page = new KuhookGalleryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
