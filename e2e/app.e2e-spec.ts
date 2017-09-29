import { SeahawksRosterPage } from './app.po';

describe('seahawks-roster App', () => {
  let page: SeahawksRosterPage;

  beforeEach(() => {
    page = new SeahawksRosterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
