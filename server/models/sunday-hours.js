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
  });Hour.getPrime = () => {}
  Hour.remoteMethod('getPrime', {
    http: {path: '/sunday/prime', verb: 'GET'},
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
  Hour.getSext = () => {
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
          chapter: '118(81-96)',
          verses: [
            {
              desc: 'Caph',
              id: '81',
              la: 'Defécit in salutáre tuum ánima mea: * et in verbum tuum supersperávi.',
              en: '',
            },
            {
              desc: '',
              id: '82',
              la: 'Defecérunt óculi mei in elóquium tuum, * dicéntes: Quando consoláberis me?',
              en: '',
            },
            {
              desc: '',
              id: '83',
              la: 'Quia factus sum sicut uter in pruína: * justificatiónes tuas non sum oblítus.',
              en: '',
            },
            {
              desc: '',
              id: '84',
              la: 'Quot sunt dies servi tui? * quando fácies de persequéntibus me judícium?',
              en: '',
            },
            {
              desc: '',
              id: '85',
              la: 'Narravérunt mihi iníqui fabulatiónes: * sed non ut lex tua.',
              en: '',
            },
            {
              desc: '',
              id: '86',
              la: 'Omnia mandáta tua véritas: * iníque persecúti sunt me, ádjuva me.',
              en: '',
            },
            {
              desc: '',
              id: '87',
              la: 'Paulo minus consummavérunt me in terra: * ego autem non derelíqui mandáta tua.',
              en: '',
            },
            {
              desc: '',
              id: '88',
              la: 'Secúndum misericórdiam tuam vivífica me: * et custódiam testimónia oris tui.',
              en: '',
            },
            {
              desc: 'Laméd',
              id: '89',
              la: 'In ætérnum, Dómine, * verbum tuum pérmanet in cælo.',
              en: '',
            },
            {
              desc: '',
              id: '90',
              la: 'In generatiónem et generatiónem véritas tua: * fundásti terram, et pérmanet.',
              en: '',
            },
            {
              desc: '',
              id: '91',
              la: 'Ordinatióne tua persevérat dies: * quóniam ómnia sérviunt tibi.',
              en: '',
            },
            {
              desc: '',
              id: '92',
              la: 'Nisi quod lex tua meditátio mea est: * tunc forte periíssem in humilitáte mea.',
              en: '',
            },
            {
              desc: '',
              id: '93',
              la: 'In ætérnum non oblivíscar justificatiónes tuas: * quia in ipsis vivificásti me.',
              en: '',
            },
            {
              desc: '',
              id: '94',
              la: 'Tuus sum ego, salvum me fac: * quóniam justificatiónes tuas exquisívi.',
              en: '',
            },
            {
              desc: '',
              id: '95',
              la: 'Me exspectavérunt peccatóres ut pérderent me: * testimónia tua intelléxi.',
              en: '',
            },
            {
              desc: '',
              id: '96',
              la: 'Omnis consummatiónis vidi finem: * latum mandátum tuum nimis.',
              en: '',
            },
          ],
        },
        {
          chapter: '118(97-112)',
          verses: [
            {
              desc: 'Mem',
              id: '97',
              la: 'Quómodo diléxi legem tuam, Dómine? * tota die meditátio mea est.',
              en: '',
            },
            {
              desc: '',
              id: '98',
              la: 'Super inimícos meos prudéntem me fecísti mandáto tuo: * quia in ætérnum mihi est.',
              en: '',
            },
            {
              desc: '',
              id: '99',
              la: 'Super omnes docéntes me intelléxi: * quia testimónia tua meditátio mea est.',
              en: '',
            },
            {
              desc: '',
              id: '100',
              la: 'Super senes intelléxi: * quia mandáta tua quæsívi.',
              en: '',
            },
            {
              desc: '',
              id: '101',
              la: 'Ab omni via mala prohíbui pedes meos: * ut custódiam verba tua.',
              en: '',
            },
            {
              desc: '',
              id: '102',
              la: 'A judíciis tuis non declinávi: * quia tu legem posuísti mihi.',
              en: '',
            },
            {
              desc: '',
              id: '103',
              la: 'Quam dúlcia fáucibus meis elóquia tua, * super mel ori meo!',
              en: '',
            },
            {
              desc: '',
              id: '104',
              la: 'A mandátis tuis intelléxi: * proptérea odívi omnem viam iniquitátis.',
              en: '',
            },
            {
              desc: 'Nun',
              id: '105',
              la: 'Lucérna pédibus meis verbum tuum, * et lumen sémitis meis.',
              en: '',
            },
            {
              desc: '',
              id: '106',
              la: 'Jurávi, et státui * custodíre judícia justítiæ tuæ.',
              en: '',
            },
            {
              desc: '',
              id: '107',
              la: 'Humiliátus sum usquequáque, Dómine: * vivífica me secúndum verbum tuum.',
              en: '',
            },
            {
              desc: '',
              id: '108',
              la: 'Voluntária oris mei beneplácita fac, Dómine: * et judícia tua doce me.',
              en: '',
            },
            {
              desc: '',
              id: '109',
              la: 'Ánima mea in mánibus meis semper: * et legem tuam non sum oblítus.',
              en: '',
            },
            {
              desc: '',
              id: '110',
              la: 'Posuérunt peccatóres láqueum mihi: * et de mandátis tuis non errávi.',
              en: '',
            },
            {
              desc: '',
              id: '111',
              la: 'Hereditáte acquisívi testimónia tua in ætérnum: * quia exsultátio cordis mei sunt.',
              en: '',
            },
            {
              desc: '',
              id: '112',
              la: 'Inclinávi cor meum ad faciéndas justificatiónes tuas in ætérnum, * propter retributiónem.',
              en: '',
            },
          ],
        },
        {
          chapter: '118(113-128)',
          verses: [
            {
              desc: 'Samech',
              id: '113',
              la: 'Iníquos ódio hábui: * et legem tuam diléxi.',
              en: '',
            },
            {
              desc: '',
              id: '114',
              la: 'Adjútor et suscéptor meus es tu: * et in verbum tuum supersperávi.',
              en: '',
            },
            {
              desc: '',
              id: '115',
              la: 'Declináte a me, malígni: * et scrutábor mandáta Dei mei.',
              en: '',
            },
            {
              desc: '',
              id: '116',
              la: 'Súscipe me secúndum elóquium tuum, et vivam: * et non confúndas me ab exspectatióne mea.',
              en: '',
            },
            {
              desc: '',
              id: '117',
              la: 'Ádjuva me, et salvus ero: * et meditábor in justificatiónibus tuis semper.',
              en: '',
            },
            {
              desc: '',
              id: '118',
              la: 'Sprevísti omnes discedéntes a judíciis tuis: * quia injústa cogitátio eórum.',
              en: '',
            },
            {
              desc: '',
              id: '119',
              la: 'Prævaricántes reputávi omnes peccatóres terræ: * ídeo diléxi testimónia tua.',
              en: '',
            },
            {
              desc: '',
              id: '120',
              la: 'Confíge timóre tuo carnes meas: * a judíciis enim tuis tímui.',
              en: '',
            },
            {
              desc: 'Ain',
              id: '121',
              la: 'Feci judícium et justítiam: * non tradas me calumniántibus me.',
              en: '',
            },
            {
              desc: '',
              id: '122',
              la: 'Súscipe servum tuum in bonum: * non calumniéntur me supérbi.',
              en: '',
            },
            {
              desc: '',
              id: '123',
              la: 'Óculi mei defecérunt in salutáre tuum: * et in elóquium justítiæ tuæ.',
              en: '',
            },
            {
              desc: '',
              id: '124',
              la: 'Fac cum servo tuo secúndum misericórdiam tuam: * et justificatiónes tuas doce me.',
              en: '',
            },
            {
              desc: '',
              id: '125',
              la: 'Servus tuus sum ego: * da mihi intelléctum, ut sciam testimónia tua.',
              en: '',
            },
            {
              desc: '',
              id: '126',
              la: 'Tempus faciéndi, Dómine: * dissipavérunt legem tuam.',
              en: '',
            },
            {
              desc: '',
              id: '127',
              la: 'Ídeo diléxi mandáta tua, * super aurum et topázion.',
              en: '',
            },
            {
              desc: '',
              id: '128',
              la: 'Proptérea ad ómnia mandáta tua dirigébar: * omnem viam iníquam ódio hábui.',
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
