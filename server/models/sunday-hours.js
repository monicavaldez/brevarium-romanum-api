'use strict';

module.exports = function(Hour) {
  Hour.getMatins = () => {}
  Hour.remoteMethod('getMatins', {
    http: {path: '/sunday/matins', verb: 'GET'},
    returns: {root: true, type: 'Object'},
  });
  Hour.getLauds = () => {}
  Hour.remoteMethod('getLauds', {
    http: {path: '/sunday/lauds', verb: 'GET'},
    returns: {root: true, type: 'Object'},
  });
  Hour.getTerce = () => {
    return Promise.resolve({
      incipit: {
        paternoster: 'Pater noster, qui es in cælis, sanctificétur nomen tuum: advéniat regnum tuum: fiat volúntas tua, sicut in cælo et in terra. Panem nostrum quotidiánum da nobis hódie: et dimítte nobis débita nostra, sicut et nos dimíttimus debitóribus nostris: et ne nos indúcas in tentatiónem: sed líbera nos a malo. Amen.',
        avemaria: 'Ave María, grátia plena; Dóminus tecum: benedícta tu in muliéribus, et benedíctus fructus ventris tui Jesus. Sancta María, Mater Dei, ora pro nobis peccatóribus, nunc et in hora mortis nostræ. Amen.',
        deusAdjutorium: {
          versicle: 'Deus ✠ in adjutórium meum inténde.',
          response: 'Dómine, ad adjuvándum me festína',
        },
        gloriaPatri: {
          versicle: 'Glória Patri, et Fílio, * et Spirítui Sancto.',
          response: 'Sicut erat in princípio, et nunc, et semper, * et in sǽcula sæculórum. Amen.',
        },
        alleluia: 'Alleluia',
      },
      hymn: '',
      psalterium: [
        {
          chapter: '118[33-48]',
          verses: [
            {
              desc: 'He',
              id: '33',
              la: 'Legem pone mihi, Dómine, viam justificatiónum tuárum: * et exquíram eam semper.',
              en: 'Set before me for a law the way of thy justifications, O Lord: * and I will always seek after it.',
            },
            {
              desc: '',
              id: '34',
              la: 'Da mihi intelléctum, et scrutábor legem tuam: * et custódiam illam in toto corde meo.',
              en: 'Give me understanding, and I will search thy law; * and I will keep it with my whole heart.',
            },
            {
              desc: '',
              id: '35',
              la: 'Deduc me in sémitam mandatórum tuórum: * quia ipsam vólui.',
              en: 'Lead me into the path of thy commandments; * for this same I have desired.',
            },
            {
              desc: '',
              id: '36',
              la: 'Inclína cor meum in testimónia tua: * et non in avarítiam.',
              en: '',
            },
            {
              desc: '',
              id: '37',
              la: 'Avérte óculos meos ne vídeant vanitátem: * in via tua vivífica me.',
              en: '',
            },
            {
              desc: '',
              id: '38',
              la: 'Státue servo tuo elóquium tuum, * in timóre tuo.',
              en: '',
            },
            {
              desc: '',
              id: '39',
              la: 'Ámputa oppróbrium meum quod suspicátus sum: * quia judícia tua jucúnda.',
              en: '',
            },
            {
              desc: '',
              id: '40',
              la: 'Ecce, concupívi mandáta tua: * in æquitáte tua vivífica me.',
              en: '',
            },
            {
              desc: 'Vav',
              id: '41',
              la: 'Et véniat super me misericórdia tua, Dómine: * salutáre tuum secúndum elóquium tuum.',
              en: '',
            },
            {
              desc: '',
              id: '42',
              la: 'Et respondébo exprobrántibus mihi verbum: * quia sperávi in sermónibus tuis.',
              en: '',
            },
            {
              desc: '',
              id: '43',
              la: 'Et ne áuferas de ore meo verbum veritátis usquequáque: * quia in judíciis tuis supersperávi.',
              en: '',
            },
            {
              desc: '',
              id: '44',
              la: 'Et custódiam legem tuam semper: * in sǽculum et in sǽculum sǽculi.',
              en: '',
            },
            {
              desc: '',
              id: '45',
              la: 'Et ambulábam in latitúdine: * quia mandáta tua exquisívi.',
              en: '',
            },
            {
              desc: '',
              id: '46',
              la: 'Et loquébar in testimóniis tuis in conspéctu regum: * et non confundébar.',
              en: '',
            },
            {
              desc: '',
              id: '47',
              la: 'Et meditábar in mandátis tuis, * quæ diléxi.',
              en: '',
            },
            {
              desc: '',
              id: '48',
              la: 'Et levávi manus meas ad mandáta tua, quæ diléxi: * et exercébar in justificatiónibus tuis.',
              en: '',
            },
          ],
        },
        {
          chapter: '118(49-64)',
          verses: [
            {
              desc: 'Zai',
              id: '49',
              la: 'Memor esto verbi tui servo tuo, * in quo mihi spem dedísti.',
              en: '',
            },
            {
              desc: '',
              id: '50',
              la: 'Hæc me consoláta est in humilitáte mea: * quia elóquium tuum vivificávit me.',
              en: '',
            },
            {
              desc: '',
              id: '51',
              la: 'Supérbi iníque agébant usquequáque: * a lege autem tua non declinávi.',
              en: '',
            },
            {
              desc: '',
              id: '52',
              la: 'Memor fui judiciórum tuórum a sǽculo, Dómine: * et consolátus sum.',
              en: '',
            },
            {
              desc: '',
              id: '53',
              la: 'Deféctio ténuit me, * pro peccatóribus derelinquéntibus legem tuam.',
              en: '',
            },
            {
              desc: '',
              id: '54',
              la: 'Cantábiles mihi erant justificatiónes tuæ, * in loco peregrinatiónis meæ.',
              en: '',
            },
            {
              desc: '',
              id: '55',
              la: 'Memor fui nocte nóminis tui, Dómine: * et custodívi legem tuam.',
              en: '',
            },
            {
              desc: '',
              id: '56',
              la: 'Hæc facta est mihi: * quia justificatiónes tuas exquisívi.',
              en: '',
            },
            {
              desc: 'Heth',
              id: '57',
              la: 'Pórtio mea, Dómine, * dixi custodíre legem tuam.',
              en: '',
            },
            {
              desc: '',
              id: '58',
              la: 'Deprecátus sum fáciem tuam in toto corde meo: * miserére mei secúndum elóquium tuum.',
              en: '',
            },
            {
              desc: '',
              id: '59',
              la: 'Cogitávi vias meas: * et convérti pedes meos in testimónia tua.',
              en: '',
            },
            {
              desc: '',
              id: '60',
              la: 'Parátus sum, et non sum turbátus: * ut custódiam mandáta tua.',
              en: '',
            },
            {
              desc: '',
              id: '61',
              la: 'Funes peccatórum circumpléxi sunt me: * et legem tuam non sum oblítus.',
              en: '',
            },
            {
              desc: '',
              id: '62',
              la: 'Média nocte surgébam ad confiténdum tibi, * super judícia justificatiónis tuæ.',
              en: '',
            },
            {
              desc: '',
              id: '63',
              la: 'Párticeps ego sum ómnium timéntium te: * et custodiéntium mandáta tua.',
              en: '',
            },
            {
              desc: '',
              id: '64',
              la: 'Misericórdia tua, Dómine, plena est terra: * justificatiónes tuas doce me.',
              en: '',
            },
          ],
        },
        {
          chapter: '118(65-80)',
          verses: [
            {
              desc: 'Teth',
              id: '65',
              la: 'Bonitátem fecísti cum servo tuo, Dómine, * secúndum verbum tuum.',
              en: '',
            },
            {
              desc: '',
              id: '66',
              la: 'Bonitátem, et disciplínam, et sciéntiam doce me: * quia mandátis tuis crédidi.',
              en: '',
            },
            {
              desc: '',
              id: '67',
              la: 'Priúsquam humiliárer ego delíqui: * proptérea elóquium tuum custodívi.',
              en: '',
            },
            {
              desc: '',
              id: '68',
              la: 'Bonus es tu: * et in bonitáte tua doce me justificatiónes tuas.',
              en: '',
            },
            {
              desc: '',
              id: '69',
              la: 'Multiplicáta est super me iníquitas superbórum: * ego autem in toto corde meo scrutábor mandáta tua.',
              en: '',
            },
            {
              desc: '',
              id: '70',
              la: 'Coagulátum est sicut lac cor eórum: * ego vero legem tuam meditátus sum.',
              en: '',
            },
            {
              desc: '',
              id: '71',
              la: 'Bonum mihi quia humiliásti me: * ut discam justificatiónes tuas.',
              en: '',
            },
            {
              desc: '',
              id: '72',
              la: 'Bonum mihi lex oris tui, * super míllia auri et argénti.',
              en: '',
            },
            {
              desc: 'Ioth',
              id: '73',
              la: 'Manus tuæ fecérunt me, et plasmavérunt me: * da mihi intelléctum, et discam mandáta tua.',
              en: '',
            },
            {
              desc: '',
              id: '74',
              la: 'Qui timent te vidébunt me, et lætabúntur: * quia in verba tua supersperávi.',
              en: '',
            },
            {
              desc: '',
              id: '75',
              la: 'Cognóvi, Dómine, quia ǽquitas judícia tua: * et in veritáte tua humiliásti me.',
              en: '',
            },
            {
              desc: '',
              id: '76',
              la: 'Fiat misericórdia tua ut consolétur me, * secúndum elóquium tuum servo tuo.',
              en: '',
            },
            {
              desc: '',
              id: '77',
              la: 'Véniant mihi miseratiónes tuæ, et vivam: * quia lex tua meditátio mea est.',
              en: '',
            },
            {
              desc: '',
              id: '78',
              la: 'Confundántur supérbi, quia injúste iniquitátem fecérunt in me: * ego autem exercébor in mandátis tuis.',
              en: '',
            },
            {
              desc: '',
              id: '79',
              la: 'Convertántur mihi timéntes te: * et qui novérunt testimónia tua.',
              en: '',
            },
            {
              desc: '',
              id: '80',
              la: 'Fiat cor meum immaculátum in justificatiónibus tuis, * ut non confúndar.',
              en: '',
            },
          ],
        },
      ],
      antiphon: 'Alleluia * alleluia, alleliua',
      chapterResponsory: {}, // left intentionally blank
      precesFeriales: {}, // left intentionally blank
      conclusio: {
        domineExaudi: {
          versicle: 'Dómine, exáudi oratiónem meam.',
          response: 'Et clamor meus ad te véniat.',
        },
        benedicamus: {
          versicle: 'Benedicámus Dómino.',
          response: 'Deo grátias.',
        },
        fideliumAnime: {
          versicle: 'Fidélium ánimæ per misericórdiam Dei requiéscant in pace.',
          response: 'Amen',
        },
        paternoster: 'Pater noster, qui es in cælis, sanctificétur nomen tuum: advéniat regnum tuum: fiat volúntas tua, sicut in cælo et in terra. Panem nostrum quotidiánum da nobis hódie: et dimítte nobis débita nostra, sicut et nos dimíttimus debitóribus nostris: et ne nos indúcas in tentatiónem: sed líbera nos a malo. Amen.',
      },
    });
  }
  Hour.remoteMethod('getTerce', {
    http: {path: '/sunday/terce', verb: 'GET'},
    returns: {root: true, type: 'Object'},
  });
  Hour.getSext = () => {}
  Hour.remoteMethod('getSext', {
    http: {path: '/sunday/sext', verb: 'GET'},
    returns: {root: true, type: 'Object'},
  });
  Hour.getNone = () => {}
  Hour.remoteMethod('getNone', {
    http: {path: '/sunday/none', verb: 'GET'},
    returns: {root: true, type: 'Object'},
  });
};
