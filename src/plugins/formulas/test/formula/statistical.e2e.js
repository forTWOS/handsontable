describe('Formulas -> statistical functions', () => {
  const id = 'testContainer';

  beforeEach(function() {
    this.$container = $(`<div id="${id}"></div>`).appendTo('body');
  });

  afterEach(function() {
    if (this.$container) {
      destroy();
      this.$container.remove();
    }
  });

  xit('AVEDEV', () => {
    const data = getDataForFormulas(0, 'name', ['=AVEDEV(A1, 2)']);

    data[0].id = 1.1;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

    expect(hot.getDataAtCell(0, 1)).toBeCloseTo(0.45, 12);
  });

  it('AVERAGE', () => {
    const data = getDataForFormulas(0, 'name', ['=AVERAGE(A1, 2, 5, 10)']);

    data[0].id = 1.1;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

    expect(hot.getDataAtCell(0, 1)).toBeCloseTo(4.525, 12);
  });

  it('AVERAGEA', () => {
    const data = getDataForFormulas(0, 'name', ['=AVERAGEA(A1, 2, 5, 10)']);

    data[0].id = 1.1;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

    expect(hot.getDataAtCell(0, 1)).toBeCloseTo(4.525, 12);
  });

  it('AVERAGEIF', () => {
    const data = getDataForFormulas(0, 'address', ['=AVERAGEIF(A1:B2, ">5", A3:B4)']);

    data[0].id = 2;
    data[0].name = 4;
    data[1].id = 8;
    data[1].name = 16;
    data[2].id = 1;
    data[2].name = 2;
    data[3].id = 3;
    data[3].name = 4;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

    expect(hot.getDataAtCell(0, 2)).toBe(3.5);
  });

  xit('AVERAGEIFS', () => {
    const data = getDataForFormulas(0, 'address', ['=AVERAGEIFS(A1:A4, B1:B4, ">2", B1:B4, ">2")']);

    data[0].id = 2;
    data[1].id = 4;
    data[2].id = 8;
    data[3].id = 16;
    data[0].name = 1;
    data[1].name = 2;
    data[2].name = 3;
    data[3].name = 4;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

    expect(hot.getDataAtCell(0, 2)).toBe(12);
  });

  xit('BETADIST', () => {
    const data = getDataForFormulas(0, 'address', ['=BETADIST(2, 8, 10, TRUE(), 1, 3)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

    expect(hot.getDataAtCell(0, 2)).toBeCloseTo(0.6854705810117458, 12);
  });

  xit('BETAINV', () => {
    const data = getDataForFormulas(0, 'address', ['=BETAINV(0.6854705810117458, 8, 10, 1, 3)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(2, 12);
  });

  it('BINOMDIST', () => {
    const data = getDataForFormulas(0, 'address', ['=BINOMDIST(6, 10, 0.5, FALSE)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(0.205078125, 12);
  });

  xit('BINOM.DIST.RANGE', () => {
    const data = getDataForFormulas(0, 'address', ['=BINOM.DIST.RANGE(60, 0.5, 34)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(0.060616586840172675, 12);
  });

  xit('BINOM.INV', () => {
    const data = getDataForFormulas(0, 'address', ['=BINOM.INV(6, 0.5, 0.7)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(4, 12);
  });

  xit('CHISQ.DIST', () => {
    const data = getDataForFormulas(0, 'address', ['=CHISQ.DIST(0.5, 1)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(0.43939128946770356, 12);
  });

  xit('CHISQ.DIST.RT', () => {
    const data = getDataForFormulas(0, 'address', ['=CHISQ.DIST.RT(3, 5)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(0.6999858358786271, 12);
  });

  xit('CHISQ.INV', () => {
    const data = getDataForFormulas(0, 'address', ['=CHISQ.INV(0.5, 6)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(5.348120627447116, 12);
  });

  xit('CHISQ.INV.RT', () => {
    const data = getDataForFormulas(0, 'address', ['=CHISQ.INV.RT(0.4, 6)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(6.2107571945266935, 12);
  });

  xit('COLUMN', () => {
    const data = getDataForFormulas(0, 'id', ['=COLUMN(B2:E5, 0)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 0)).toEqual([['Leanne Ware'], ['Mathis Boone'], ['Cruz Benjamin'], ['Reese David']]);
  });

  it('COLUMNS', () => {
    const data = getDataForFormulas(0, 'id', ['=COLUMNS(B2:E5)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 0)).toBe(4);
  });

  xit('CONFIDENCE', () => {
    const data = getDataForFormulas(0, 'id', ['=CONFIDENCE(0.5, 1, 5)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 0)).toBeCloseTo(0.301640986313058, 12);
  });

  xit('CONFIDENCE.T', () => {
    const data = getDataForFormulas(0, 'id', ['=CONFIDENCE.T(0.5, 1, 5)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 0)).toBeCloseTo(0.33124980616238564, 12);
  });

  it('CORREL', () => {
    const data = getDataForFormulas(0, 'id', ['=CORREL(B1:B5, C1:C5)']);

    data[0].name = 3;
    data[1].name = 2;
    data[2].name = 4;
    data[3].name = 5;
    data[4].name = 6;
    data[0].address = 9;
    data[1].address = 7;
    data[2].address = 12;
    data[3].address = 15;
    data[4].address = 17;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 0)).toBeCloseTo(0.9970544855015815, 12);
  });

  it('COUNT', () => {
    const data = getDataForFormulas(0, 'id', ['=COUNT()', '=COUNT(B1, 0.5, "foo", 1, 8)']);

    data[0].name = true;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

    expect(hot.getDataAtCell(0, 0)).toBe(0);
    expect(hot.getDataAtCell(1, 0)).toBe(3);
  });

  it('COUNTA', () => {
    const data = getDataForFormulas(0, 'id', ['=COUNTA()', '=COUNTA(B1, 0.5, "foo", 1, 8)']);

    data[0].name = true;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

    expect(hot.getDataAtCell(0, 0)).toBe(0);
    expect(hot.getDataAtCell(1, 0)).toBe(5);
  });

  it('COUNTBLANK', () => {
    const data = getDataForFormulas(0, 'id', ['=COUNTBLANK(B1, 0.5, "", 1, 8)']);

    data[0].name = true;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

    expect(hot.getDataAtCell(0, 0)).toBe(1);
  });

  it('COUNTIF', () => {
    const data = getDataForFormulas(0, 'id', ['=COUNTIF(B1:C3, ">1")']);

    data[0].name = 1;
    data[1].name = null;
    data[2].name = 3;
    data[0].address = 'a';
    data[1].address = 4;
    data[2].address = 'c';

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

    expect(hot.getDataAtCell(0, 0)).toBe(2);
  });

  it('COUNTIFS', () => {
    const data = getDataForFormulas(0, 'id', ['=COUNTIFS(B1:C3, ">1")']);

    data[0].name = 1;
    data[1].name = null;
    data[2].name = 3;
    data[0].address = 'a';
    data[1].address = 4;
    data[2].address = 'c';

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 0)).toBe(2);
  });

  xit('COUNTIN', () => {
    const data = getDataForFormulas(0, 'name', ['=COUNTIN(A1:A5, 1)']);

    data[0].id = 1;
    data[1].id = 1;
    data[2].id = 2;
    data[3].id = 2;
    data[4].id = 2;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 1)).toBe(2);
  });

  it('COUNTUNIQUE', () => {
    const data = getDataForFormulas(0, 'name', ['=COUNTUNIQUE(A1:A5, 1)']);

    data[0].id = 1;
    data[1].id = 1;
    data[2].id = 2;
    data[3].id = 2;
    data[4].id = 2;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

    expect(hot.getDataAtCell(0, 1)).toBe(2);
  });

  xit('COVARIANCE.P', () => {
    const data = getDataForFormulas(0, 'address', ['=COVARIANCE.P(A1:A5, B1:B5)']);

    data[0].id = 3;
    data[1].id = 2;
    data[2].id = 4;
    data[3].id = 5;
    data[4].id = 6;
    data[0].name = 9;
    data[1].name = 7;
    data[2].name = 12;
    data[3].name = 15;
    data[4].name = 17;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBe(5.2);
  });

  xit('COVARIANCE.S', () => {
    const data = getDataForFormulas(0, 'address', ['=COVARIANCE.S(A1:A3, B1:B3)']);

    data[0].id = 2;
    data[1].id = 4;
    data[2].id = 8;
    data[0].name = 5;
    data[1].name = 11;
    data[2].name = 12;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(9.666666666666668, 12);
  });

  xit('DEVSQ', () => {
    const data = getDataForFormulas(0, 'address', ['=DEVSQ(A1:A7)']);

    data[0].id = 4;
    data[1].id = 5;
    data[2].id = 8;
    data[3].id = 7;
    data[4].id = 11;
    data[5].id = 4;
    data[6].id = 3;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBe(48);
  });

  xit('EXPONDIST', () => {
    const data = getDataForFormulas(0, 'address', ['=EXPONDIST(0.2, 10, TRUE())']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(0.8646647167633873, 12);
  });

  xit('FDIST', () => {
    const data = getDataForFormulas(0, 'address', ['=FDIST(15, 6, 4, TRUE())']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(0.9897419523940192, 12);
  });

  xit('FDISTRT', () => {
    const data = getDataForFormulas(0, 'address', ['=FDISTRT(15, 6, 4)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(0.010258047605980813, 12);
  });

  xit('FINV', () => {
    const data = getDataForFormulas(0, 'address', ['=FINV(0.1, 6, 4)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(0.31438998832176834, 12);
  });

  xit('FINVRT', () => {
    const data = getDataForFormulas(0, 'address', ['=FINVRT(0.1, 6, 4)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(4.009749312673947, 12);
  });

  xit('FISHER', () => {
    const data = getDataForFormulas(0, 'address', ['=FISHER(0.1)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(0.10033534773107562, 12);
  });

  xit('FISHERINV', () => {
    const data = getDataForFormulas(0, 'address', ['=FISHERINV(0.1)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(0.09966799462495583, 12);
  });

  xit('FORECAST', () => {
    const data = getDataForFormulas(0, 'address', ['=FORECAST(30, A1:A5, B1:B5)']);

    data[0].id = 6;
    data[1].id = 7;
    data[2].id = 9;
    data[3].id = 15;
    data[4].id = 21;
    data[0].name = 20;
    data[1].name = 28;
    data[2].name = 31;
    data[3].name = 38;
    data[4].name = 40;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(10.607253086419755, 12);
  });

  xit('FREQUENCY', () => {
    const data = getDataForFormulas(0, 'address', ['=FREQUENCY(A1:A9, B1:B3)']);

    data[0].id = 79;
    data[1].id = 85;
    data[2].id = 78;
    data[3].id = 85;
    data[4].id = 50;
    data[5].id = 81;
    data[6].id = 95;
    data[7].id = 88;
    data[8].id = 97;
    data[0].name = 70;
    data[1].name = 79;
    data[2].name = 89;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toEqual([1, 2, 4, 2]);
  });

  xit('GAMMA', () => {
    const data = getDataForFormulas(0, 'address', ['=GAMMA(0.1)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toEqual(9.51350769866877);
  });

  xit('GAMMADIST', () => {
    const data = getDataForFormulas(0, 'address', ['=GAMMADIST(1, 3, 7, TRUE())']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(0.00043670743091302124, 10);
  });

  xit('GAMMAINV', () => {
    const data = getDataForFormulas(0, 'address', ['=GAMMAINV(1, 3, 7)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toEqual(1233.435565298214);
  });

  xit('GAMMALN', () => {
    const data = getDataForFormulas(0, 'address', ['=GAMMALN(4)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(1.7917594692280547, 12);
  });

  xit('GAMMALN.PRECISE', () => {
    const data = getDataForFormulas(0, 'address', ['=GAMMALN.PRECISE(4)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(1.7917594692280547, 12);
  });

  xit('GAUSS', () => {
    const data = getDataForFormulas(0, 'address', ['=GAUSS(4)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(0.4999683287581669, 12);
  });

  xit('GEOMEAN', () => {
    const data = getDataForFormulas(0, 'address', ['=GEOMEAN(A1:A7)']);

    data[0].id = 4;
    data[1].id = 5;
    data[2].id = 8;
    data[3].id = 7;
    data[4].id = 11;
    data[5].id = 4;
    data[6].id = 3;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(5.476986969656962, 12);
  });

  xit('GROWTH', () => {
    const data = getDataForFormulas(0, 'address', ['=GROWTH(A1:A6, B1:B7, FOO)']);

    data[0].id = 33100;
    data[1].id = 47300;
    data[2].id = 69000;
    data[3].id = 102000;
    data[4].id = 150000;
    data[5].id = 220000;
    data[0].name = 11;
    data[1].name = 12;
    data[2].name = 13;
    data[3].name = 14;
    data[4].name = 15;
    data[5].name = 16;
    data[6].name = 11;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

    hot.getPlugin('formulas').setVariable('FOO', [11, 12, 13, 14, 15, 16, 17, 18, 19]);
    hot.getPlugin('formulas').recalculateFull();
    hot.render();



    const value = hot.getDataAtCell(1, 2);

    expect(value[0]).toBeCloseTo(32618.20377353843, 8);
    expect(value[1]).toBeCloseTo(47729.422614746654, 8);
    expect(value[2]).toBeCloseTo(69841.30085621699, 8);
    expect(value[3]).toBeCloseTo(102197.07337883323, 8);
    expect(value[4]).toBeCloseTo(149542.4867400496, 8);
    expect(value[5]).toBeCloseTo(218821.8762146044, 8);
    expect(value[6]).toBeCloseTo(320196.71836349065, 8);
    expect(value[7]).toBeCloseTo(468536.05418408196, 8);
    expect(value[8]).toBeCloseTo(685597.3889812973, 8);
  });

  xit('HARMEAN', () => {
    const data = getDataForFormulas(0, 'address', ['=HARMEAN(A1:A7)']);

    data[0].id = 4;
    data[1].id = 5;
    data[2].id = 8;
    data[3].id = 7;
    data[4].id = 11;
    data[5].id = 4;
    data[6].id = 3;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(5.028375962061728, 12);
  });

  xit('HYPGEOMDIST', () => {
    const data = getDataForFormulas(0, 'address', ['=HYPGEOMDIST(1, 4, 8, 20)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(0.3632610939112487, 12);
  });

  xit('INTERCEPT', () => {
    const data = getDataForFormulas(0, 'address', ['=INTERCEPT(A1:A5, B1:B5)']);

    data[0].id = 2;
    data[1].id = 3;
    data[2].id = 9;
    data[3].id = 1;
    data[4].id = 8;
    data[0].name = 6;
    data[1].name = 5;
    data[2].name = 11;
    data[3].name = 7;
    data[4].name = 5;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(0.04838709677419217, 12);
  });

  xit('KURT', () => {
    const data = getDataForFormulas(0, 'address', ['=KURT(A1:A10)']);

    data[0].id = 3;
    data[1].id = 4;
    data[2].id = 5;
    data[3].id = 2;
    data[4].id = 3;
    data[5].id = 4;
    data[6].id = 5;
    data[7].id = 6;
    data[8].id = 4;
    data[9].id = 7;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(-0.15179963720841627, 12);
  });

  xit('LARGE', () => {
    const data = getDataForFormulas(0, 'address', ['=LARGE(A1:A5, 3)']);

    data[0].id = 3;
    data[1].id = 5;
    data[2].id = 3;
    data[3].id = 5;
    data[4].id = 4;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBe(4);
  });

  xit('LINEST', () => {
    const data = getDataForFormulas(0, 'address', ['=LINEST(A1:A4, B1:B4)']);

    data[0].id = 1;
    data[1].id = 9;
    data[2].id = 5;
    data[3].id = 7;
    data[0].name = 0;
    data[1].name = 4;
    data[2].name = 2;
    data[3].name = 3;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toEqual([2, 1]);
  });

  xit('LOGEST', () => {
    const data = getDataForFormulas(0, 'address', ['=LOGEST(A1:A4, B1:B4)']);

    data[0].id = 1;
    data[1].id = 9;
    data[2].id = 5;
    data[3].id = 7;
    data[0].name = 0;
    data[1].name = 4;
    data[2].name = 2;
    data[3].name = 3;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toEqual([1.751116, 1.194316]);
  });

  xit('LOGNORMDIST', () => {
    const data = getDataForFormulas(0, 'address', ['=LOGNORMDIST(4, 3.5, 1.2, TRUE())']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(0.0390835557068005, 12);
  });

  xit('LOGNORMINV', () => {
    const data = getDataForFormulas(0, 'address', ['=LOGNORMINV(0.0390835557068005, 3.5, 1.2)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(4, 12);
  });

  it('MAX', () => {
    const data = getDataForFormulas(0, 'address', ['=MAX(-1, 9, 9.2, 4, "foo", TRUE())']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBe(9.2);
  });

  it('MAXA', () => {
    const data = getDataForFormulas(0, 'address', ['=MAXA()', '=MAXA(-1, 9, 9.2, 4, "foo", TRUE())']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

    expect(hot.getDataAtCell(0, 2)).toBe(0);
    expect(hot.getDataAtCell(1, 2)).toBe(9.2);
  });

  it('MEDIAN', () => {
    const data = getDataForFormulas(0, 'address', ['=MEDIAN(1, 9, 9.2, 4)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

    expect(hot.getDataAtCell(0, 2)).toBe(6.5);
  });

  it('MIN', () => {
    const data = getDataForFormulas(0, 'address', ['=MIN(-1.1, 9, 9.2, 4, "foo", TRUE())']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

    expect(hot.getDataAtCell(0, 2)).toBe(-1.1);
  });

  it('MINA', () => {
    const data = getDataForFormulas(0, 'address', ['=MINA()', '=MINA(-1.1, 9, 9.2, 4, "foo", TRUE())']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

    expect(hot.getDataAtCell(0, 2)).toBe(0);
    expect(hot.getDataAtCell(1, 2)).toBe(-1.1);
  });

  xit('MODEMULT', () => {
    const data = getDataForFormulas(0, 'address', ['=MODEMULT(A1:A12)']);

    data[0].id = 1;
    data[1].id = 2;
    data[2].id = 3;
    data[3].id = 4;
    data[4].id = 3;
    data[5].id = 2;
    data[6].id = 1;
    data[7].id = 2;
    data[8].id = 3;
    data[9].id = 5;
    data[10].id = 6;
    data[11].id = 1;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toEqual([2, 3, 1]);
  });

  xit('MODESNGL', () => {
    const data = getDataForFormulas(0, 'address', ['=MODESNGL(A1:A6)']);

    data[0].id = 5.6;
    data[1].id = 4;
    data[2].id = 4;
    data[3].id = 3;
    data[4].id = 2;
    data[5].id = 4;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBe(4);
  });

  xit('NEGBINOMDIST', () => {
    const data = getDataForFormulas(0, 'address', ['=NEGBINOMDIST(10, 5, 0.25)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBe(0.05504866037517786);
  });

  xit('NORMDIST', () => {
    const data = getDataForFormulas(0, 'address', ['=NORMDIST(1, 0, 1)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBe(0.24197072451914337);
  });

  xit('NORMINV', () => {
    const data = getDataForFormulas(0, 'address', ['=NORMINV(1, 0, 1)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBe(141.4213562373095);
  });

  xit('NORMSDIST', () => {
    const data = getDataForFormulas(0, 'address', ['=NORMSDIST(1, TRUE())']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBe(0.8413447460685429);
  });

  xit('NORMSINV', () => {
    const data = getDataForFormulas(0, 'address', ['=NORMSINV(1)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBe(141.4213562373095);
  });

  xit('PEARSON', () => {
    const data = getDataForFormulas(0, 'address', ['=PEARSON(A1:A5, B1:B5)']);

    data[0].id = 9;
    data[1].id = 7;
    data[2].id = 5;
    data[3].id = 3;
    data[4].id = 1;
    data[0].name = 10;
    data[1].name = 6;
    data[2].name = 1;
    data[3].name = 5;
    data[4].name = 3;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(0.6993786061802354, 12);
  });

  xit('PERCENTILEEXC', () => {
    const data = getDataForFormulas(0, 'address', ['=PERCENTILEEXC(A1:A4, 0.5)']);

    data[0].id = 1;
    data[1].id = 2;
    data[2].id = 3;
    data[3].id = 4;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBe(2.5);
  });

  xit('PERCENTILEINC', () => {
    const data = getDataForFormulas(0, 'address', ['=PERCENTILEINC(A1:A4, 0.5)']);

    data[0].id = 1;
    data[1].id = 2;
    data[2].id = 3;
    data[3].id = 4;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBe(2.5);
  });

  xit('PERCENTRANKEXC', () => {
    const data = getDataForFormulas(0, 'address', ['=PERCENTRANKEXC(A1:A4, 4)']);

    data[0].id = 1;
    data[1].id = 2;
    data[2].id = 3;
    data[3].id = 4;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBe(0.8);
  });

  xit('PERCENTRANKINC', () => {
    const data = getDataForFormulas(0, 'address', ['=PERCENTRANKINC(A1:A4, 4)']);

    data[0].id = 1;
    data[1].id = 2;
    data[2].id = 3;
    data[3].id = 4;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBe(1);
  });

  xit('PERMUT', () => {
    const data = getDataForFormulas(0, 'address', ['=PERMUT(10, 3)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBe(720);
  });

  xit('PERMUTATIONA', () => {
    const data = getDataForFormulas(0, 'address', ['=PERMUTATIONA(10, 3)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBe(1000);
  });

  xit('PHI', () => {
    const data = getDataForFormulas(0, 'address', ['=PHI(1)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(0.24197072451914337, 12);
  });

  xit('POISSONDIST', () => {
    const data = getDataForFormulas(0, 'address', ['=POISSONDIST(1, 3)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(0.14936120510359185, 12);
  });

  xit('PROB', () => {
    const data = getDataForFormulas(0, 'address', ['=PROB()', '=PROB(A1:A4, B1:B4, 1, 3)']);

    data[0].id = 0;
    data[1].id = 1;
    data[2].id = 2;
    data[3].id = 3;
    data[0].name = 0.2;
    data[1].name = 0.3;
    data[2].name = 0.1;
    data[3].name = 0.4;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

    expect(hot.getDataAtCell(0, 2)).toBe(0);
    expect(hot.getDataAtCell(1, 2)).toBe(0.8);
  });

  xit('QUARTILEEXC', () => {
    const data = getDataForFormulas(0, 'address', ['=QUARTILEEXC(A1:A11, 2)']);

    data[0].id = 6;
    data[1].id = 7;
    data[2].id = 15;
    data[3].id = 36;
    data[4].id = 39;
    data[5].id = 40;
    data[6].id = 41;
    data[7].id = 42;
    data[8].id = 43;
    data[9].id = 47;
    data[10].id = 49;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBe(40);
  });

  xit('QUARTILEINC', () => {
    const data = getDataForFormulas(0, 'address', ['=QUARTILEINC(A1:A8, 2)']);

    data[0].id = 1;
    data[1].id = 2;
    data[2].id = 4;
    data[3].id = 7;
    data[4].id = 8;
    data[5].id = 9;
    data[6].id = 10;
    data[7].id = 12;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBe(7.5);
  });

  xit('RANKAVG', () => {
    const data = getDataForFormulas(0, 'address', ['=RANKAVG(88, A1:A7, 1)']);

    data[0].id = 89;
    data[1].id = 88;
    data[2].id = 92;
    data[3].id = 101;
    data[4].id = 94;
    data[5].id = 97;
    data[6].id = 95;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBe(1);
  });

  xit('RANKEQ', () => {
    const data = getDataForFormulas(0, 'address', ['=RANKEQ(7, A1:A5, 1)']);

    data[0].id = 7;
    data[1].id = 3.5;
    data[2].id = 3.5;
    data[3].id = 1;
    data[4].id = 2;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBe(5);
  });

  xit('ROW', () => {
    const data = getDataForFormulas(0, 'address', ['=ROW(A1:B3, 0)', '=ROW(A1:B3, 2)']);

    data[0].id = 1;
    data[1].id = 2;
    data[2].id = 2;
    data[0].name = 2;
    data[1].name = 3;
    data[2].name = 4;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toEqual([1, 2]);
    expect(hot.getDataAtCell(1, 2)).toEqual([2, 4]);
  });

  xit('ROWS', () => {
    const data = getDataForFormulas(0, 'address', ['=ROWS(A1:B3)']);

    data[0].id = 1;
    data[1].id = 2;
    data[2].id = 2;
    data[0].name = 2;
    data[1].name = 3;
    data[2].name = 4;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBe(3);
  });

  xit('RSQ', () => {
    const data = getDataForFormulas(0, 'address', ['=RSQ(A1:A7, B1:B7)']);

    data[0].id = 2;
    data[1].id = 3;
    data[2].id = 9;
    data[3].id = 1;
    data[4].id = 8;
    data[5].id = 7;
    data[6].id = 5;
    data[0].name = 6;
    data[1].name = 5;
    data[2].name = 11;
    data[3].name = 7;
    data[4].name = 5;
    data[5].name = 4;
    data[6].name = 4;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(0.05795019157088122, 12);
  });

  xit('SKEW', () => {
    const data = getDataForFormulas(0, 'address', ['=SKEW(A1:A10)']);

    data[0].id = 3;
    data[1].id = 4;
    data[2].id = 5;
    data[3].id = 2;
    data[4].id = 3;
    data[5].id = 4;
    data[6].id = 5;
    data[7].id = 6;
    data[8].id = 4;
    data[9].id = 7;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(0.3595430714067974, 12);
  });

  xit('SKEWP', () => {
    const data = getDataForFormulas(0, 'address', ['=SKEWP(A1:A10)']);

    data[0].id = 3;
    data[1].id = 4;
    data[2].id = 5;
    data[3].id = 2;
    data[4].id = 3;
    data[5].id = 4;
    data[6].id = 5;
    data[7].id = 6;
    data[8].id = 4;
    data[9].id = 7;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(0.303193339354144, 12);
  });

  xit('SLOPE', () => {
    const data = getDataForFormulas(0, 'address', ['=SLOPE(A1:A7, B1:B7)']);

    data[0].id = 2;
    data[1].id = 3;
    data[2].id = 9;
    data[3].id = 1;
    data[4].id = 8;
    data[5].id = 7;
    data[6].id = 5;
    data[0].name = 6;
    data[1].name = 5;
    data[2].name = 11;
    data[3].name = 7;
    data[4].name = 5;
    data[5].name = 4;
    data[6].name = 4;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(0.3055555555555556, 12);
  });

  xit('SMALL', () => {
    const data = getDataForFormulas(0, 'address', ['=SMALL(A1:A9, 4)']);

    data[0].id = 3;
    data[1].id = 4;
    data[2].id = 5;
    data[3].id = 2;
    data[4].id = 3;
    data[5].id = 4;
    data[6].id = 6;
    data[7].id = 4;
    data[8].id = 7;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBe(4);
  });

  xit('STANDARDIZE', () => {
    const data = getDataForFormulas(0, 'address', ['=STANDARDIZE(1, 3, 5)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBe(-0.4);
  });

  xit('STDEVP', () => {
    const data = getDataForFormulas(0, 'address', ['=STDEVP(A1:A10)']);

    data[0].id = 1345;
    data[1].id = 1301;
    data[2].id = 1368;
    data[3].id = 1322;
    data[4].id = 1310;
    data[5].id = 1370;
    data[6].id = 1318;
    data[7].id = 1350;
    data[8].id = 1303;
    data[9].id = 1299;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBe(26.054558142482477);
  });

  xit('STDEVS', () => {
    const data = getDataForFormulas(0, 'address', ['=STDEVS()', '=STDEVS(A1:A10)']);

    data[0].id = 1345;
    data[1].id = 1301;
    data[2].id = 1368;
    data[3].id = 1322;
    data[4].id = 1310;
    data[5].id = 1370;
    data[6].id = 1318;
    data[7].id = 1350;
    data[8].id = 1303;
    data[9].id = 1299;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

    expect(hot.getDataAtCell(0, 2)).toBe(0);
    expect(hot.getDataAtCell(1, 2)).toBe(27.46391571984349);
  });

  xit('STDEVA', () => {
    const data = getDataForFormulas(0, 'address', ['=STDEVA()', '=STDEVA(A1:A10)']);

    data[0].id = 1345;
    data[1].id = 1301;
    data[2].id = 1368;
    data[3].id = 1322;
    data[4].id = 1310;
    data[5].id = 1370;
    data[6].id = 1318;
    data[7].id = 1350;
    data[8].id = 1303;
    data[9].id = 1299;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

    expect(hot.getDataAtCell(0, 2)).toBe(0);
    expect(hot.getDataAtCell(1, 2)).toBe(27.46391571984349);
  });

  xit('STDEVPA', () => {
    const data = getDataForFormulas(0, 'address', ['=STDEVPA(A1:A10)']);

    data[0].id = 1345;
    data[1].id = 1301;
    data[2].id = 1368;
    data[3].id = 1322;
    data[4].id = 1310;
    data[5].id = 1370;
    data[6].id = 1318;
    data[7].id = 1350;
    data[8].id = 1303;
    data[9].id = 1299;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBe(26.054558142482477);
  });

  xit('STEYX', () => {
    const data = getDataForFormulas(0, 'address', ['=STEYX(A1:A7, B1:B7)']);

    data[0].id = 2;
    data[1].id = 3;
    data[2].id = 9;
    data[3].id = 1;
    data[4].id = 8;
    data[5].id = 7;
    data[6].id = 5;
    data[0].name = 6;
    data[1].name = 5;
    data[2].name = 11;
    data[3].name = 7;
    data[4].name = 5;
    data[5].name = 4;
    data[6].name = 4;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBe(3.305718950210041);
  });

  it('TRANSPOSE', () => {
    const data = getDataForFormulas(0, 'address', ['', '=TRANSPOSE(A1:B3)']);

    data[0].id = 1;
    data[1].id = 3;
    data[2].id = 5;
    data[0].name = 2;
    data[1].name = 4;
    data[2].name = 6;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toEqual([[1, 3, 5], [2, 4, 6]]);
  });

  xit('TDIST', () => {
    const data = getDataForFormulas(0, 'address', ['=TDIST(1, 3)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(0.2067483346226397, 12);
  });

  xit('T.DIST.RT', () => {
    const data = getDataForFormulas(0, 'address', ['=T.DIST.RT(1, 6)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(0.17795884187479105, 12);
  });

  xit('TINV', () => {
    const data = getDataForFormulas(0, 'address', ['=TINV(0.1, 6)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(-1.4397557472652736, 12);
  });

  xit('T.INV.2T', () => {
    const data = getDataForFormulas(0, 'address', ['=T.INV.2T(0.1, 6)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(1.9431802743487372, 12);
  });

  xit('TREND', () => {
    const data = getDataForFormulas(0, 'address', ['=TREND(A1:A4, B1:B4, A5:A6)']);

    data[0].id = 1;
    data[1].id = 9;
    data[2].id = 5;
    data[3].id = 7;
    data[0].name = 0;
    data[1].name = 4;
    data[2].name = 2;
    data[3].name = 3;
    data[4].name = 5;
    data[5].name = 8;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toEqual([11, 13]);
  });

  xit('TRIMMEAN', () => {
    const data = getDataForFormulas(0, 'address', ['=TRIMMEAN(A1:A11, 0.2)']);

    data[0].id = 4;
    data[1].id = 5;
    data[2].id = 6;
    data[3].id = 7;
    data[4].id = 2;
    data[5].id = 3;
    data[6].id = 4;
    data[7].id = 5;
    data[8].id = 1;
    data[9].id = 2;
    data[10].id = 3;

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(3.777777777777777, 12);
  });

  xit('VARP', () => {
    const data = getDataForFormulas(0, 'address', ['=VARP(1, 2, 3)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(0.66666666666666, 12);
  });

  xit('VARS', () => {
    const data = getDataForFormulas(0, 'address', ['=VARS()', '=VARS(1, 2, 3)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

    expect(hot.getDataAtCell(0, 2)).toBe(0);
    expect(hot.getDataAtCell(1, 2)).toBeCloseTo(1, 12);
  });

  xit('VARA', () => {
    const data = getDataForFormulas(0, 'address', ['=VARA()', '=VARA(1, 2, 3)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

    expect(hot.getDataAtCell(0, 2)).toBe(0);
    expect(hot.getDataAtCell(1, 2)).toBeCloseTo(1, 12);
  });

  xit('VARPA', () => {
    const data = getDataForFormulas(0, 'address', ['=VARPA(1, 2, 3)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(0.6666666666666666, 12);
  });

  xit('WEIBULLDIST', () => {
    const data = getDataForFormulas(0, 'address', ['=WEIBULLDIST(1, 2, 3)']);

    const hot = handsontable({
      data,
      columns: getColumnsForFormulas(),
      formulas: true,
      width: 500,
      height: 300
    });

   expect(hot.getDataAtCell(0, 2)).toBeCloseTo(0.1988531815143044, 12);
  });
});
