import { SchenduleModule } from './schendule.module';

describe('SchenduleModule', () => {
  let schenduleModule: SchenduleModule;

  beforeEach(() => {
    schenduleModule = new SchenduleModule();
  });

  it('should create an instance', () => {
    expect(schenduleModule).toBeTruthy();
  });
});
