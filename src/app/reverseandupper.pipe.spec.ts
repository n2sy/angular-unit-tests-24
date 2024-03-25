import { ReverseandupperPipe } from './reverseandupper.pipe';

describe('ReverseandupperPipe', () => {
  it("devrait retourner PLB-INFO-GONES à partir de ['gones','info','plb']", () => {
    const pipe = new ReverseandupperPipe();
    let res = pipe.transform(['gones','info','plb'])
    expect(res).toEqual('PLB-INFO-GONES');
  });
});
