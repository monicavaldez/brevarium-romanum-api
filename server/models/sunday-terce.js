'use strict';

module.exports = function(Sundayterce) {
  Sundayterce.getPsalmody = () => {
    return Promise.resolve({
      incipit: {
        paternoster: 'Pater noster, qui es in cælis, sanctificétur nomen tuum: advéniat regnum tuum: fiat volúntas tua, sicut in cælo et in terra. Panem nostrum quotidiánum da nobis hódie: et dimítte nobis débita nostra, sicut et nos dimíttimus debitóribus nostris: et ne nos indúcas in tentatiónem: sed líbera nos a malo. Amen.',
        avemaria: 'Ave María, grátia plena; Dóminus tecum: benedícta tu in muliéribus, et benedíctus fructus ventris tui Jesus. Sancta María, Mater Dei, ora pro nobis peccatóribus, nunc et in hora mortis nostræ. Amen.',
        deusAdjutorium: {
          versicle : 'Deus ✠ in adjutórium meum inténde.',
          response : 'Dómine, ad adjuvándum me festína',
        },
        gloriaPatri: {
          versicle : 'Glória Patri, et Fílio, * et Spirítui Sancto.',
          response : 'Sicut erat in princípio, et nunc, et semper, * et in sǽcula sæculórum. Amen.',
        }
      }
    })
  }
};
