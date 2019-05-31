'use strict';

module.exports = function(Hour) {
  Hour.getMatins = () => {
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
          chapter: '1',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Beátus vir, qui non ábiit in consílio impiórum, † et in via peccatórum non stetit, * et in cáthedra pestiléntiæ non sedit:',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Sed in lege Dómini volúntas ejus, * et in lege ejus meditábitur die ac nocte.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Et erit tamquam lignum, quod plantátum est secus decúrsus aquárum, * quod fructum suum dabit in témpore suo:',
              en: '',
            },
            {
              desc: '',
              id: '3-2',
              la: 'Et fólium ejus non défluet: * et ómnia quæcúmque fáciet, prosperabúntur.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Non sic ímpii, non sic: * sed tamquam pulvis, quem proícit ventus a fácie terræ.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Ideo non resúrgent ímpii in judício: * neque peccatóres in concílio justórum.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Quóniam novit Dóminus viam justórum: * et iter impiórum períbit.',
              en: '',
            },
          ],
        },
        {
          chapter: '2',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Quare fremuérunt gentes: * et pópuli meditáti sunt inánia?',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Astitérunt reges terræ, † et príncipes convenérunt in unum * advérsus Dóminum, et advérsus Christum ejus.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Dirumpámus víncula eórum: * et proiciámus a nobis jugum ipsórum.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Qui hábitat in cælis, irridébit eos: * et Dóminus subsannábit eos.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Tunc loquétur ad eos in ira sua, * et in furóre suo conturbábit eos.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Ego autem constitútus sum Rex ab eo super Sion montem sanctum ejus, * prǽdicans præcéptum ejus.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Dóminus dixit ad me: * Fílius meus es tu, ego hódie génui te.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Póstula a me, et dabo tibi gentes hereditátem tuam, * et possessiónem tuam términos terræ.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Reges eos in virga férrea, * et tamquam vas fíguli confrínges eos.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Et nunc, reges, intellégite: * erudímini, qui judicátis terram.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Servíte Dómino in timóre: * et exsultáte ei cum tremóre.',
              en: '',
            },
            {
              desc: '',
              id: '12',
              la: 'Apprehéndite disciplínam, nequándo irascátur Dóminus, * et pereátis de via justa.',
              en: '',
            },
            {
              desc: '',
              id: '13',
              la: 'Cum exárserit in brevi ira ejus: * beáti omnes qui confídunt in eo.',
              en: '',
            },
          ],
        },
        {
          chapter: '3',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'Dómine, quid multiplicáti sunt qui tríbulant me? * multi insúrgunt advérsum me.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Multi dicunt ánimæ meæ: * Non est salus ipsi in Deo ejus.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Tu autem, Dómine, suscéptor meus es, * glória mea, et exáltans caput meum.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Voce mea ad Dóminum clamávi: * et exaudívit me de monte sancto suo.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Ego dormívi, et soporátus sum: * et exsurréxi, quia Dóminus suscépit me.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Non timébo míllia pópuli circumdántis me: * exsúrge, Dómine, salvum me fac, Deus meus.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Quóniam tu percussísti omnes adversántes mihi sine causa: * dentes peccatórum contrivísti.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Dómini est salus: * et super pópulum tuum benedíctio tua.',
              en: '',
            },
          ],
        },
        {
          chapter: '8',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'Dómine, Dóminus noster, * quam admirábile est nomen tuum in univérsa terra!',
              en: '',
            },
            {
              desc: '',
              id: '2-2',
              la: 'Quóniam eleváta est magnificéntia tua, * super cælos.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Ex ore infántium et lacténtium perfecísti laudem propter inimícos tuos, * ut déstruas inimícum et ultórem.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Quóniam vidébo cælos tuos, ópera digitórum tuórum: * lunam et stellas, quæ tu fundásti.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Quid est homo quod memor es ejus? * aut fílius hóminis, quóniam vísitas eum?',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Minuísti eum paulo minus ab Ángelis, † glória et honóre coronásti eum: * et constituísti eum super ópera mánuum tuárum.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Omnia subjecísti sub pédibus ejus, * oves et boves univérsas: ínsuper et pécora campi.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Vólucres cæli, et pisces maris, * qui perámbulant sémitas maris.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Dómine, Dóminus noster, * quam admirábile est nomen tuum in univérsa terra!',
              en: '',
            },
          ],
        },
        {
          chapter: '9(2-11)',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'Confitébor tibi, Dómine, in toto corde meo: * narrábo ómnia mirabília tua.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Lætábor et exsultábo in te: * psallam nómini tuo, Altíssime.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'In converténdo inimícum meum retrórsum: * infirmabúntur, et períbunt a fácie tua.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Quóniam fecísti judícium meum et causam meam: * sedísti super thronum, qui júdicas justítiam.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Increpásti gentes, et périit ímpius: * nomen eórum delésti in ætérnum, et in sǽculum sǽculi.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Inimíci defecérunt frámeæ in finem: * et civitátes eórum destruxísti.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Périit memória eórum cum sónitu: * et Dóminus in ætérnum pérmanet.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Parávit in judício thronum suum: * et ipse judicábit orbem terræ in æquitáte, judicábit pópulos in justítia.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Et factus est Dóminus refúgium páuperi: * adjútor in opportunitátibus, in tribulatióne.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Et sperent in te qui novérunt nomen tuum: * quóniam non dereliquísti quæréntes te, Dómine.',
              en: '',
            },
          ],
        },
        {
          chapter: '9(12-21)',
          verses: [
            {
              desc: '',
              id: '12',
              la: 'Psállite Dómino, qui hábitat in Sion: * annuntiáte inter gentes stúdia ejus:',
              en: '',
            },
            {
              desc: '',
              id: '13',
              la: 'Quóniam requírens sánguinem eórum recordátus est: * non est oblítus clamórem páuperum.',
              en: '',
            },
            {
              desc: '',
              id: '14',
              la: 'Miserére mei, Dómine: * vide humilitátem meam de inimícis meis.',
              en: '',
            },
            {
              desc: '',
              id: '15',
              la: 'Qui exáltas me de portis mortis, * ut annúntiem omnes laudatiónes tuas in portis fíliæ Sion.',
              en: '',
            },
            {
              desc: '',
              id: '16',
              la: 'Exsultábo in salutári tuo: * infíxæ sunt gentes in intéritu, quem fecérunt.',
              en: '',
            },
            {
              desc: '',
              id: '16-2',
              la: 'In láqueo isto, quem abscondérunt, * comprehénsus est pes eórum.',
              en: '',
            },
            {
              desc: '',
              id: '17',
              la: 'Cognoscétur Dóminus judícia fáciens: * in opéribus mánuum suárum comprehénsus est peccátor.',
              en: '',
            },
            {
              desc: '',
              id: '18',
              la: 'Convertántur peccatóres in inférnum, * omnes gentes quæ obliviscúntur Deum.',
              en: '',
            },
            {
              desc: '',
              id: '19',
              la: 'Quóniam non in finem oblívio erit páuperis: * patiéntia páuperum non períbit in finem.',
              en: '',
            },
            {
              desc: '',
              id: '20',
              la: 'Exsúrge, Dómine, non confortétur homo: * judicéntur gentes in conspéctu tuo.',
              en: '',
            },
            {
              desc: '',
              id: '21',
              la: 'Constítue, Dómine, legislatórem super eos: * ut sciant gentes quóniam hómines sunt.',
              en: '',
            },
          ],
        },
        {
          chapter: '9(22-32)',
          verses: [
            {
              desc: '',
              id: '22',
              la: 'Ut quid, Dómine, recessísti longe, * déspicis in opportunitátibus, in tribulatióne?',
              en: '',
            },
            {
              desc: '',
              id: '23',
              la: 'Dum supérbit ímpius, incénditur pauper: * comprehendúntur in consíliis quibus cógitant.',
              en: '',
            },
            {
              desc: '',
              id: '24',
              la: 'Quóniam laudátur peccátor in desidériis ánimæ suæ: * et iníquus benedícitur.',
              en: '',
            },
            {
              desc: '',
              id: '25',
              la: 'Exacerbávit Dóminum peccátor, * secúndum multitúdinem iræ suæ non quǽret.',
              en: '',
            },
            {
              desc: '',
              id: '26',
              la: 'Non est Deus in conspéctu ejus: * inquinátæ sunt viæ illíus in omni témpore.',
              en: '',
            },
            {
              desc: '',
              id: '26-2',
              la: 'Auferúntur judícia tua a fácie ejus: * ómnium inimicórum suórum dominábitur.',
              en: '',
            },
            {
              desc: '',
              id: '27',
              la: 'Dixit enim in corde suo: * Non movébor a generatióne in generatiónem sine malo.',
              en: '',
            },
            {
              desc: '',
              id: '28',
              la: 'Cujus maledictióne os plenum est, et amaritúdine, et dolo: * sub lingua ejus labor et dolor.',
              en: '',
            },
            {
              desc: '',
              id: '29',
              la: 'Sedet in insídiis cum divítibus in occúltis: * ut interfíciat innocéntem.',
              en: '',
            },
            {
              desc: '',
              id: '30',
              la: 'Óculi ejus in páuperem respíciunt: * insidiátur in abscóndito, quasi leo in spelúnca sua.',
              en: '',
            },
            {
              desc: '',
              id: '30-2',
              la: 'Insidiátur ut rápiat páuperem: * rápere páuperem, dum áttrahit eum.',
              en: '',
            },
            {
              desc: '',
              id: '31',
              la: 'In láqueo suo humiliábit eum: * inclinábit se, et cadet, cum dominátus fúerit páuperum.',
              en: '',
            },
            {
              desc: '',
              id: '32',
              la: 'Dixit enim in corde suo: Oblítus est Deus, * avértit fáciem suam ne vídeat in finem.',
              en: '',
            },
          ],
        },
        {
          chapter: '9(33-39)',
          verses: [
            {
              desc: '',
              id: '33',
              la: 'Exsúrge, Dómine Deus, exaltétur manus tua: * ne obliviscáris páuperum.',
              en: '',
            },
            {
              desc: '',
              id: '34',
              la: 'Propter quid irritávit ímpius Deum? * dixit enim in corde suo: Non requíret.',
              en: '',
            },
            {
              desc: '',
              id: '35',
              la: 'Vides quóniam tu labórem et dolórem consíderas: * ut tradas eos in manus tuas.',
              en: '',
            },
            {
              desc: '',
              id: '35-2',
              la: 'Tibi derelíctus est pauper: * órphano tu eris adjútor.',
              en: '',
            },
            {
              desc: '',
              id: '36',
              la: 'Cóntere brácchium peccatóris et malígni: * quærétur peccátum illíus, et non inveniétur.',
              en: '',
            },
            {
              desc: '',
              id: '37',
              la: 'Dóminus regnábit in ætérnum, et in sǽculum sǽculi: * períbitis, gentes, de terra illíus.',
              en: '',
            },
            {
              desc: '',
              id: '38',
              la: 'Desidérium páuperum exaudívit Dóminus: * præparatiónem cordis eórum audívit auris tua.',
              en: '',
            },
            {
              desc: '',
              id: '39',
              la: 'Judicáre pupíllo et húmili, * ut non appónat ultra magnificáre se homo super terram.',
              en: '',
            },
          ],
        },
        {
          chapter: '10',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'In Dómino confído: † quómodo dícitis ánimæ meæ: * Tránsmigra in montem sicut passer?',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Quóniam ecce peccatóres intendérunt arcum, † paravérunt sagíttas suas in pháretra, * ut sagíttent in obscúro rectos corde.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Quóniam quæ perfecísti, destruxérunt: * justus autem quid fecit?',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Dóminus in templo sancto suo, * Dóminus in cælo sedes ejus.',
              en: '',
            },
            {
              desc: '',
              id: '5-2',
              la: 'Óculi ejus in páuperem respíciunt: * pálpebræ ejus intérrogant fílios hóminum.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Dóminus intérrogat justum et ímpium: * qui autem díligit iniquitátem, odit ánimam suam.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Pluet super peccatóres láqueos: * ignis, et sulphur, et spíritus procellárum pars cálicis eórum.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Quóniam justus Dóminus, et justítias diléxit: * æquitátem vidit vultus ejus.',
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
  Hour.remoteMethod('getMatins', {
    http: {path: '/monday/matins', verb: 'GET'},
    returns: {root: true, type: 'Object'},
  });
  Hour.getLauds = () => {
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
          chapter: '92',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Dóminus regnávit, decórem indútus est: † indútus est Dóminus fortitúdinem, * et præcínxit se.',
              en: '',
            },
            {
              desc: '',
              id: '1-2',
              la: 'Étenim firmávit orbem terræ, * qui non commovébitur.',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Paráta sedes tua ex tunc: * a sǽculo tu es.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Elevavérunt flúmina, Dómine: * elevavérunt flúmina vocem suam.',
              en: '',
            },
            {
              desc: '',
              id: '3-2',
              la: 'Elevavérunt flúmina fluctus suos, * a vócibus aquárum multárum.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Mirábiles elatiónes maris: * mirábilis in altis Dóminus.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Testimónia tua credibília facta sunt nimis: * domum tuam decet sanctitúdo, Dómine, in longitúdinem diérum.',
              en: '',
            },
          ],
        },
        {
          chapter: '99',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'Jubiláte Deo, omnis terra: * servíte Dómino in lætítia.',
              en: '',
            },
            {
              desc: '',
              id: '2-2',
              la: 'Introíte in conspéctu ejus, * in exsultatióne.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Scitóte quóniam Dóminus ipse est Deus: * ipse fecit nos, et non ipsi nos.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Pópulus ejus, et oves páscuæ ejus: † introíte portas ejus in confessióne, * átria ejus in hymnis: confitémini illi.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Laudáte nomen ejus: † quóniam suávis est Dóminus, in ætérnum misericórdia ejus, * et usque in generatiónem et generatiónem véritas ejus.',
              en: '',
            },
          ],
        },
        {
          chapter: '62',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'Deus, Deus meus, * ad te de luce vígilo.',
              en: '',
            },
            {
              desc: '',
              id: '2-2',
              la: 'Sitívit in te ánima mea, * quam multiplíciter tibi caro mea.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'In terra desérta, et ínvia, et inaquósa: * sic in sancto appárui tibi, ut vidérem virtútem tuam, et glóriam tuam.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Quóniam mélior est misericórdia tua super vitas: * lábia mea laudábunt te.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Sic benedícam te in vita mea: * et in nómine tuo levábo manus meas.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Sicut ádipe et pinguédine repleátur ánima mea: * et lábiis exsultatiónis laudábit os meum.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Si memor fui tui super stratum meum, † in matutínis meditábor in te: * quia fuísti adjútor meus.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Et in velaménto alárum tuárum exsultábo, † adhǽsit ánima mea post te: * me suscépit déxtera tua.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Ipsi vero in vanum quæsiérunt ánimam meam, † introíbunt in inferióra terræ: * tradéntur in manus gládii, partes vúlpium erunt.',
              en: '',
            },
            {
              desc: '',
              id: '12',
              la: 'Rex vero lætábitur in Deo, † laudabúntur omnes qui jurant in eo: * quia obstrúctum est os loquéntium iníqua.',
              en: '',
            },
          ],
        },
        {
          desc: 'Canticum Trium Puerorum',
          chapter: 'Dan 3:57-75,56',
          verses: [
            {
              desc: '',
              id: '57',
              la: 'Benedícite, ómnia ópera Dómini, Dómino: * laudáte et superexaltáte eum in sǽcula.',
              en: '',
            },
            {
              desc: '',
              id: '58',
              la: 'Benedícite, Ángeli Dómini, Dómino: * benedícite, cæli, Dómino.',
              en: '',
            },
            {
              desc: '',
              id: '59',
              la: 'Benedícite, aquæ omnes, quæ super cælos sunt, Dómino: * benedícite, omnes virtútes Dómini, Dómino.',
              en: '',
            },
            {
              desc: '',
              id: '60',
              la: 'Benedícite, sol et luna, Dómino: * benedícite, stellæ cæli, Dómino.',
              en: '',
            },
            {
              desc: '',
              id: '61',
              la: 'Benedícite, omnis imber et ros, Dómino: * benedícite, omnes spíritus Dei, Dómino.',
              en: '',
            },
            {
              desc: '',
              id: '62',
              la: 'Benedícite, ignis et æstus, Dómino: * benedícite, frigus et æstus, Dómino.',
              en: '',
            },
            {
              desc: '',
              id: '63',
              la: 'Benedícite, rores et pruína, Dómino: * benedícite, gelu et frigus, Dómino.',
              en: '',
            },
            {
              desc: '',
              id: '64',
              la: 'Benedícite, glácies et nives, Dómino: * benedícite, noctes et dies, Dómino.',
              en: '',
            },
            {
              desc: '',
              id: '65',
              la: 'Benedícite, lux et ténebræ, Dómino: * benedícite, fúlgura et nubes, Dómino.',
              en: '',
            },
            {
              desc: '',
              id: '66',
              la: 'Benedícat terra Dóminum: * laudet et superexáltet eum in sǽcula.',
              en: '',
            },
            {
              desc: '',
              id: '67',
              la: 'Benedícite, montes et colles, Dómino: * benedícite, univérsa germinántia in terra, Dómino.',
              en: '',
            },
            {
              desc: '',
              id: '68',
              la: 'Benedícite, fontes, Dómino: * benedícite, mária et flúmina, Dómino.',
              en: '',
            },
            {
              desc: '',
              id: '69',
              la: 'Benedícite, cete, et ómnia, quæ movéntur in aquis, Dómino: * benedícite, omnes vólucres cæli, Dómino.',
              en: '',
            },
            {
              desc: '',
              id: '70',
              la: 'Benedícite, omnes béstiæ et pécora, Dómino: * benedícite, fílii hóminum, Dómino.',
              en: '',
            },
            {
              desc: '',
              id: '71',
              la: 'Benedícat Israël Dóminum: * laudet et superexáltet eum in sǽcula.',
              en: '',
            },
            {
              desc: '',
              id: '72',
              la: 'Benedícite, sacerdótes Dómini, Dómino: * benedícite, servi Dómini, Dómino.',
              en: '',
            },
            {
              desc: '',
              id: '73',
              la: 'Benedícite, spíritus, et ánimæ justórum, Dómino: * benedícite, sancti, et húmiles corde, Dómino.',
              en: '',
            },
            {
              desc: '',
              id: '74',
              la: 'Benedícite, Ananía, Azaría, Mísaël, Dómino: * laudáte et superexaltáte eum in sǽcula.',
              en: '',
            },
            {
              desc: '',
              id: '75',
              la: 'Benedicámus Patrem et Fílium cum Sancto Spíritu: * laudémus et superexaltémus eum in sǽcula.',
              en: '',
              rubrics: 'fit reverentia',
            },
            {
              desc: '',
              id: '56',
              la: 'Benedíctus es, Dómine, in firmaménto cæli: * et laudábilis, et gloriósus, et superexaltátus in sǽcula.',
              en: '',
              rubrics: '',
            },
          ],
        },
        {
          chapter: '148',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Laudáte Dóminum de cælis: * laudáte eum in excélsis.',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Laudáte eum, omnes Ángeli ejus: * laudáte eum, omnes virtútes ejus.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Laudáte eum, sol et luna: * laudáte eum, omnes stellæ et lumen.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Laudáte eum, cæli cælórum: * et aquæ omnes, quæ super cælos sunt, laudent nomen Dómini.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Quia ipse dixit, et facta sunt: * ipse mandávit, et creáta sunt.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Státuit ea in ætérnum, et in sǽculum sǽculi: * præcéptum pósuit, et non præteríbit.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Laudáte Dóminum de terra, * dracónes, et omnes abýssi.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Ignis, grando, nix, glácies, spíritus procellárum: * quæ fáciunt verbum ejus:',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Montes, et omnes colles: * ligna fructífera, et omnes cedri.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Béstiæ, et univérsa pécora: * serpéntes, et vólucres pennátæ:',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Reges terræ, et omnes pópuli: * príncipes, et omnes júdices terræ.',
              en: '',
            },
            {
              desc: '',
              id: '12',
              la: 'Júvenes, et vírgines: senes cum junióribus laudent nomen Dómini: * quia exaltátum est nomen ejus solíus.',
              en: '',
            },
            {
              desc: '',
              id: '13',
              la: 'Conféssio ejus super cælum et terram: * et exaltávit cornu pópuli sui.',
              en: '',
            },
            {
              desc: '',
              id: '14',
              la: 'Hymnus ómnibus sanctis ejus: * fíliis Israël, pópulo appropinquánti sibi.',
              en: '',
            },
          ],
        },
      ],
      canticle: {
        desc: 'Canticum Zachariæ',
        chapter: 'Luc. 1:68-79',
        antiphon: '',
        verses: [
          {
            desc: '',
            id: '68',
            la: 'Benedíctus ✠ Dóminus, Deus Israël: * quia visitávit, et fecit redemptiónem plebis suæ:',
            en: '',
          },
          {
            desc: '',
            id: '69',
            la: 'Et eréxit cornu salútis nobis: * in domo David, púeri sui.',
            en: '',
          },
          {
            desc: '',
            id: '70',
            la: 'Sicut locútus est per os sanctórum, * qui a sǽculo sunt, prophetárum ejus:',
            en: '',
          },
          {
            desc: '',
            id: '71',
            la: 'Salútem ex inimícis nostris, * et de manu ómnium, qui odérunt nos.',
            en: '',
            rubrics: 'fit reverentia',
          },
          {
            desc: '',
            id: '72',
            la: 'Ad faciéndam misericórdiam cum pátribus nostris: * et memorári testaménti sui sancti.',
            en: '',
          },
          {
            desc: '',
            id: '73',
            la: 'Jusjurándum, quod jurávit ad Ábraham patrem nostrum, * datúrum se nobis:',
            en: '',
          },
          {
            desc: '',
            id: '74',
            la: 'Ut sine timóre, de manu inimicórum nostrórum liberáti, * serviámus illi.',
            en: '',
          },
          {
            desc: '',
            id: '75',
            la: 'In sanctitáte, et justítia coram ipso, * ómnibus diébus nostris.',
            en: '',
          },
          {
            desc: '',
            id: '76',
            la: 'Et tu, puer, Prophéta Altíssimi vocáberis: * præíbis enim ante fáciem Dómini, paráre vias ejus:',
            en: '',
          },
          {
            desc: '',
            id: '77',
            la: 'Ad dandam sciéntiam salútis plebi ejus: * in remissiónem peccatórum eórum:',
            en: '',
          },
          {
            desc: '',
            id: '78',
            la: 'Per víscera misericórdiæ Dei nostri: * in quibus visitávit nos, óriens ex alto:',
            en: '',
          },
          {
            desc: '',
            id: '79',
            la: 'Illumináre his, qui in ténebris, et in umbra mortis sedent: * ad dirigéndos pedes nostros in viam pacis.',
            en: '',
          },
        ],
      },
      chapterResponsory: {}, // left intentionally blank
      precesFeriales: {}, // left intentionally blank
      oratio: {
        commemoratio: [],
      },
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
  Hour.remoteMethod('getLauds', {
    http: {path: '/monday/lauds', verb: 'GET'},
    returns: {root: true, type: 'Object'},
  });
  Hour.getPrime = () => {
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
          chapter: '53',
          verses: [
            {
              desc: '',
              id: '3',
              la: 'Deus, in nómine tuo salvum me fac: * et in virtúte tua júdica me.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Deus, exáudi oratiónem meam: * áuribus pércipe verba oris mei.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Quóniam aliéni insurrexérunt advérsum me, † et fortes quæsiérunt ánimam meam: * et non proposuérunt Deum ante conspéctum suum.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Ecce enim, Deus ádjuvat me: * et Dóminus suscéptor est ánimæ meæ.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Avérte mala inimícis meis: * et in veritáte tua dispérde illos.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Voluntárie sacrificábo tibi, * et confitébor nómini tuo, Dómine: quóniam bonum est:',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Quóniam ex omni tribulatióne eripuísti me: * et super inimícos meos despéxit óculus meus.',
              en: '',
            },
            {
              desc: '',
              id: '',
              la: '',
              en: '',
            },
            {
              desc: '',
              id: '',
              la: '',
              en: '',
            },
            {
              desc: '',
              id: '',
              la: '',
              en: '',
            },
            {
              desc: '',
              id: '',
              la: '',
              en: '',
            },
            {
              desc: '',
              id: '',
              la: '',
              en: '',
            },
            {
              desc: '',
              id: '',
              la: '',
              en: '',
            },
            {
              desc: '',
              id: '',
              la: '',
              en: '',
            },
            {
              desc: '',
              id: '',
              la: '',
              en: '',
            },
            {
              desc: '',
              id: '',
              la: '',
              en: '',
            },
          ],
        },
        {
          chapter: '118(1-16)',
          verses: [
            {
              desc: 'Aleph',
              id: '1',
              la: 'Beáti immaculáti in via: * qui ámbulant in lege Dómini.',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Beáti, qui scrutántur testimónia ejus: * in toto corde exquírunt eum.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Non enim qui operántur iniquitátem, * in viis ejus ambulavérunt.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Tu mandásti * mandáta tua custodíri nimis.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Útinam dirigántur viæ meæ, * ad custodiéndas justificatiónes tuas!',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Tunc non confúndar, * cum perspéxero in ómnibus mandátis tuis.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Confitébor tibi in directióne cordis: * in eo quod dídici judícia justítiæ tuæ.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Justificatiónes tuas custódiam: * non me derelínquas usquequáque.',
              en: '',
            },
            {
              desc: 'Beth',
              id: '9',
              la: 'In quo córrigit adolescéntior viam suam? * In custodiéndo sermónes tuos.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'In toto corde meo exquisívi te: * ne repéllas me a mandátis tuis.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'In corde meo abscóndi elóquia tua: * ut non peccem tibi.',
              en: '',
            },
            {
              desc: '',
              id: '12',
              la: 'Benedíctus es, Dómine: * doce me justificatiónes tuas.',
              en: '',
            },
            {
              desc: '',
              id: '13',
              la: 'In lábiis meis, * pronuntiávi ómnia judícia oris tui.',
              en: '',
            },
            {
              desc: '',
              id: '14',
              la: 'In via testimoniórum tuórum delectátus sum, * sicut in ómnibus divítiis.',
              en: '',
            },
            {
              desc: '',
              id: '15',
              la: 'In mandátis tuis exercébor: * et considerábo vias tuas.',
              en: '',
            },
            {
              desc: '',
              id: '16',
              la: 'In justificatiónibus tuis meditábor: * non oblivíscar sermónes tuos.',
              en: '',
            },
          ],
        },
        {
          chapter: '118(17-32)',
          verses: [
            {
              desc: 'Ghimel',
              id: '17',
              la: 'Retríbue servo tuo, vivífica me: * et custódiam sermónes tuos:',
              en: '',
            },
            {
              desc: '',
              id: '18',
              la: 'Revéla óculos meos: * et considerábo mirabília de lege tua.',
              en: '',
            },
            {
              desc: '',
              id: '19',
              la: 'Íncola ego sum in terra: * non abscóndas a me mandáta tua.',
              en: '',
            },
            {
              desc: '',
              id: '20',
              la: 'Concupívit ánima mea desideráre justificatiónes tuas, * in omni témpore.',
              en: '',
            },
            {
              desc: '',
              id: '21',
              la: 'Increpásti supérbos: * maledícti qui declínant a mandátis tuis.',
              en: '',
            },
            {
              desc: '',
              id: '22',
              la: 'Aufer a me oppróbrium, et contémptum: * quia testimónia tua exquisívi.',
              en: '',
            },
            {
              desc: '',
              id: '23',
              la: 'Étenim sedérunt príncipes, † et advérsum me loquebántur: * servus autem tuus exercebátur in justificatiónibus tuis.',
              en: '',
            },
            {
              desc: '',
              id: '24',
              la: 'Nam et testimónia tua meditátio mea est: * et consílium meum justificatiónes tuæ.',
              en: '',
            },
            {
              desc: 'Daleth',
              id: '25',
              la: 'Adhǽsit paviménto ánima mea: * vivífica me secúndum verbum tuum.',
              en: '',
            },
            {
              desc: '',
              id: '26',
              la: 'Vias meas enuntiávi, et exaudísti me: * doce me justificatiónes tuas.',
              en: '',
            },
            {
              desc: '',
              id: '27',
              la: 'Viam justificatiónum tuárum ínstrue me: * et exercébor in mirabílibus tuis.',
              en: '',
            },
            {
              desc: '',
              id: '28',
              la: 'Dormitávit ánima mea præ tædio: * confírma me in verbis tuis.',
              en: '',
            },
            {
              desc: '',
              id: '29',
              la: 'Viam iniquitátis ámove a me: * et de lege tua miserére mei.',
              en: '',
            },
            {
              desc: '',
              id: '30',
              la: 'Viam veritátis elégi: * judícia tua non sum oblítus.',
              en: '',
            },
            {
              desc: '',
              id: '31',
              la: 'Adhǽsi testimóniis tuis, Dómine: * noli me confúndere.',
              en: '',
            },
            {
              desc: '',
              id: '32',
              la: 'Viam mandatórum tuórum cucúrri, * cum dilatásti cor meum.',
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
  Hour.remoteMethod('getPrime', {
    http: {path: '/monday/prime', verb: 'GET'},
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
          chapter: '26(1-6)',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Dóminus illuminátio mea, et salus mea, * quem timébo?',
              en: '',
            },
            {
              desc: '',
              id: '1-2',
              la: 'Dóminus protéctor vitæ meæ, * a quo trepidábo?',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Dum apprópiant super me nocéntes, * ut edant carnes meas:',
              en: '',
            },
            {
              desc: '',
              id: '2-2',
              la: 'Qui tríbulant me inimíci mei, * ipsi infirmáti sunt, et cecidérunt.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Si consístant advérsum me castra, * non timébit cor meum.',
              en: '',
            },
            {
              desc: '',
              id: '3-2',
              la: 'Si exsúrgat advérsum me prǽlium, * in hoc ego sperábo.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Unam pétii a Dómino, hanc requíram, * ut inhábitem in domo Dómini ómnibus diébus vitæ meæ:',
              en: '',
            },
            {
              desc: '',
              id: '4-2',
              la: 'Ut vídeam voluptátem Dómini, * et vísitem templum ejus.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Quóniam abscóndit me in tabernáculo suo: * in die malórum protéxit me in abscóndito tabernáculi sui.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'In petra exaltávit me: * et nunc exaltávit caput meum super inimícos meos.',
              en: '',
            },
            {
              desc: '',
              id: '6-2',
              la: 'Circuívi, et immolávi in tabernáculo ejus hóstiam vociferatiónis: * cantábo, et psalmum dicam Dómino.',
              en: '',
            },
          ],
        },
        {
          chapter: '26(7-14)',
          verses: [
            {
              desc: '',
              id: '7',
              la: 'Exáudi, Dómine, vocem meam, qua clamávi ad te: * miserére mei, et exáudi me.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Tibi dixit cor meum, exquisívit te fácies mea: * fáciem tuam, Dómine, requíram.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Ne avértas fáciem tuam a me: * ne declínes in ira a servo tuo.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Adjútor meus esto: * ne derelínquas me, neque despícias me, Deus, salutáris meus.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Quóniam pater meus, et mater mea dereliquérunt me: * Dóminus autem assúmpsit me.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Legem pone mihi, Dómine, in via tua: * et dírige me in sémitam rectam propter inimícos meos.',
              en: '',
            },
            {
              desc: '',
              id: '12',
              la: 'Ne tradíderis me in ánimas tribulántium me: * quóniam insurrexérunt in me testes iníqui, et mentíta est iníquitas sibi.',
              en: '',
            },
            {
              desc: '',
              id: '13',
              la: 'Credo vidére bona Dómini * in terra vivéntium.',
              en: '',
            },
            {
              desc: '',
              id: '14',
              la: 'Exspécta Dóminum, viríliter age: * et confortétur cor tuum, et sústine Dóminum.',
              en: '',
            },
          ],
        },
        {
          chapter: '27',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Ad te, Dómine, clamábo, Deus meus, ne síleas a me: * nequándo táceas a me, et assimilábor descendéntibus in lacum.',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Exáudi, Dómine, vocem deprecatiónis meæ dum oro ad te: * dum extóllo manus meas ad templum sanctum tuum.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Ne simul trahas me cum peccatóribus: * et cum operántibus iniquitátem ne perdas me.',
              en: '',
            },
            {
              desc: '',
              id: '3-2',
              la: 'Qui loquúntur pacem cum próximo suo, * mala autem in córdibus eórum.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Da illis secúndum ópera eórum, * et secúndum nequítiam adinventiónum ipsórum.',
              en: '',
            },
            {
              desc: '',
              id: '4-2',
              la: 'Secúndum ópera mánuum eórum tríbue illis: * redde retributiónem eórum ipsis.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Quóniam non intellexérunt ópera Dómini, et in ópera mánuum ejus * déstrues illos, et non ædificábis eos.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Benedíctus Dóminus: * quóniam exaudívit vocem deprecatiónis meæ.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Dóminus adjútor meus, et protéctor meus: * in ipso sperávit cor meum, et adjútus sum.',
              en: '',
            },
            {
              desc: '',
              id: '7-2',
              la: ' Et reflóruit caro mea: * et ex voluntáte mea confitébor ei.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Dóminus fortitúdo plebis suæ: * et protéctor salvatiónum Christi sui est.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Salvum fac pópulum tuum, Dómine, et bénedic hereditáti tuæ: * et rege eos, et extólle illos usque in ætérnum.',
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
    http: {path: '/monday/terce', verb: 'GET'},
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
    http: {path: '/monday/sext', verb: 'GET'},
    returns: {root: true, type: 'Object'},
  });
  Hour.getNone = () => {
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
          chapter: '118(129-144)',
          verses: [
            {
              desc: 'Phe',
              id: '129',
              la: 'Mirabília testimónia tua: * ídeo scrutáta est ea ánima mea.',
              en: '',
            },
            {
              desc: '',
              id: '130',
              la: 'Declarátio sermónum tuórum illúminat: * et intelléctum dat párvulis.',
              en: '',
            },
            {
              desc: '',
              id: '131',
              la: 'Os meum apérui, et attráxi spíritum: * quia mandáta tua desiderábam.',
              en: '',
            },
            {
              desc: '',
              id: '132',
              la: 'Áspice in me, et miserére mei, * secúndum judícium diligéntium nomen tuum.',
              en: '',
            },
            {
              desc: '',
              id: '133',
              la: 'Gressus meos dírige secúndum elóquium tuum: * et non dominétur mei omnis injustítia.',
              en: '',
            },
            {
              desc: '',
              id: '134',
              la: 'Rédime me a calúmniis hóminum: * ut custódiam mandáta tua.',
              en: '',
            },
            {
              desc: '',
              id: '135',
              la: 'Fáciem tuam illúmina super servum tuum: * et doce me justificatiónes tuas.',
              en: '',
            },
            {
              desc: '',
              id: '136',
              la: 'Éxitus aquárum deduxérunt óculi mei: * quia non custodiérunt legem tuam.',
              en: '',
            },
            {
              desc: 'Sade',
              id: '137',
              la: 'Justus es, Dómine: * et rectum judícium tuum.',
              en: '',
            },
            {
              desc: '',
              id: '138',
              la: 'Mandásti justítiam testimónia tua: * et veritátem tuam nimis.',
              en: '',
            },
            {
              desc: '',
              id: '139',
              la: 'Tabéscere me fecit zelus meus: * quia oblíti sunt verba tua inimíci mei.',
              en: '',
            },
            {
              desc: '',
              id: '140',
              la: 'Ignítum elóquium tuum veheménter: * et servus tuus diléxit illud.',
              en: '',
            },
            {
              desc: '',
              id: '141',
              la: 'Adolescéntulus sum ego et contémptus: * justificatiónes tuas non sum oblítus.',
              en: '',
            },
            {
              desc: '',
              id: '142',
              la: 'Justítia tua, justítia in ætérnum: * et lex tua véritas.',
              en: '',
            },
            {
              desc: '',
              id: '143',
              la: 'Tribulátio, et angústia invenérunt me: * mandáta tua meditátio mea est.',
              en: '',
            },
            {
              desc: '',
              id: '144',
              la: 'Æquitas testimónia tua in ætérnum: * intelléctum da mihi, et vivam.',
              en: '',
            },
          ],
        },
        {
          chapter: '118(145-160)',
          verses: [
            {
              desc: 'Coph',
              id: '145',
              la: 'Clamávi in toto corde meo, exáudi me, Dómine: * justificatiónes tuas requíram.',
              en: '',
            },
            {
              desc: '',
              id: '146',
              la: 'Clamávi ad te, salvum me fac: * ut custódiam mandáta tua.',
              en: '',
            },
            {
              desc: '',
              id: '147',
              la: 'Prævéni in maturitáte, et clamávi: * quia in verba tua supersperávi.',
              en: '',
            },
            {
              desc: '',
              id: '148',
              la: 'Prævenérunt óculi mei ad te dilúculo: * ut meditárer elóquia tua.',
              en: '',
            },
            {
              desc: '',
              id: '149',
              la: 'Vocem meam audi secúndum misericórdiam tuam, Dómine: * et secúndum judícium tuum vivífica me.',
              en: '',
            },
            {
              desc: '',
              id: '150',
              la: 'Appropinquavérunt persequéntes me iniquitáti: * a lege autem tua longe facti sunt.',
              en: '',
            },
            {
              desc: '',
              id: '151',
              la: 'Prope es tu, Dómine: * et omnes viæ tuæ véritas.',
              en: '',
            },
            {
              desc: '',
              id: '152',
              la: 'Inítio cognóvi de testimóniis tuis: * quia in ætérnum fundásti ea.',
              en: '',
            },
            {
              desc: 'Res',
              id: '153',
              la: 'Vide humilitátem meam, et éripe me: * quia legem tuam non sum oblítus.',
              en: '',
            },
            {
              desc: '',
              id: '154',
              la: 'Júdica judícium meum, et rédime me: * propter elóquium tuum vivífica me.',
              en: '',
            },
            {
              desc: '',
              id: '155',
              la: 'Longe a peccatóribus salus: * quia justificatiónes tuas non exquisiérunt.',
              en: '',
            },
            {
              desc: '',
              id: '156',
              la: 'Misericórdiæ tuæ multæ, Dómine: * secúndum judícium tuum vivífica me.',
              en: '',
            },
            {
              desc: '',
              id: '157',
              la: 'Multi qui persequúntur me, et tríbulant me: * a testimóniis tuis non declinávi.',
              en: '',
            },
            {
              desc: '',
              id: '158',
              la: 'Vidi prævaricántes, et tabescébam: * quia elóquia tua non custodiérunt.',
              en: '',
            },
            {
              desc: '',
              id: '159',
              la: 'Vide quóniam mandáta tua diléxi, Dómine: * in misericórdia tua vivífica me.',
              en: '',
            },
            {
              desc: '',
              id: '160',
              la: 'Princípium verbórum tuórum, véritas: * in ætérnum ómnia judícia justítiæ tuæ. ',
              en: '',
            },
          ],
        },
        {
          chapter: '118(161-176)',
          verses: [
            {
              desc: 'Sin',
              id: '161',
              la: 'Príncipes persecúti sunt me gratis: * et a verbis tuis formidávit cor meum.',
              en: '',
            },
            {
              desc: '',
              id: '162',
              la: 'Lætábor ego super elóquia tua: * sicut qui invénit spólia multa.',
              en: '',
            },
            {
              desc: '',
              id: '163',
              la: 'Iniquitátem ódio hábui, et abominátus sum: * legem autem tuam diléxi.',
              en: '',
            },
            {
              desc: '',
              id: '164',
              la: 'Sépties in die laudem dixi tibi, * super judícia justítiæ tuæ.',
              en: '',
            },
            {
              desc: '',
              id: '165',
              la: 'Pax multa diligéntibus legem tuam: * et non est illis scándalum.',
              en: '',
            },
            {
              desc: '',
              id: '166',
              la: 'Exspectábam salutáre tuum, Dómine: * et mandáta tua diléxi.',
              en: '',
            },
            {
              desc: '',
              id: '167',
              la: 'Custodívit ánima mea testimónia tua: * et diléxit ea veheménter.',
              en: '',
            },
            {
              desc: '',
              id: '168',
              la: 'Servávi mandáta tua, et testimónia tua: * quia omnes viæ meæ in conspéctu tuo.',
              en: '',
            },
            {
              desc: 'Thau',
              id: '169',
              la: 'Appropínquet deprecátio mea in conspéctu tuo, Dómine: * juxta elóquium tuum da mihi intelléctum.',
              en: '',
            },
            {
              desc: '',
              id: '170',
              la: 'Intret postulátio mea in conspéctu tuo: * secúndum elóquium tuum éripe me.',
              en: '',
            },
            {
              desc: '',
              id: '171',
              la: 'Eructábunt lábia mea hymnum, * cum docúeris me justificatiónes tuas.',
              en: '',
            },
            {
              desc: '',
              id: '172',
              la: 'Pronuntiábit lingua mea elóquium tuum: * quia ómnia mandáta tua ǽquitas.',
              en: '',
            },
            {
              desc: '',
              id: '173',
              la: 'Fiat manus tua ut salvet me: * quóniam mandáta tua elégi.',
              en: '',
            },
            {
              desc: '',
              id: '174',
              la: 'Concupívi salutáre tuum, Dómine: * et lex tua meditátio mea est.',
              en: '',
            },
            {
              desc: '',
              id: '175',
              la: 'Vivet ánima mea, et laudábit te: * et judícia tua adjuvábunt me.',
              en: '',
            },
            {
              desc: '',
              id: '176',
              la: 'Errávi, sicut ovis, quæ périit: * quǽre servum tuum, quia mandáta tua non sum oblítus.',
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
  Hour.remoteMethod('getNone', {
    http: {path: '/monday/none', verb: 'GET'},
    returns: {root: true, type: 'Object'},
  });
  Hour.getVespers = () => {
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
          chapter: '109',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Dixit Dóminus Dómino meo: * Sede a dextris meis:',
              en: '',
            },
            {
              desc: '',
              id: '1-2',
              la: 'Donec ponam inimícos tuos, * scabéllum pedum tuórum.',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Virgam virtútis tuæ emíttet Dóminus ex Sion: * domináre in médio inimicórum tuórum.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Tecum princípium in die virtútis tuæ in splendóribus sanctórum: * ex útero ante lucíferum génui te.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Jurávit Dóminus, et non pœnitébit eum: * Tu es sacérdos in ætérnum secúndum órdinem Melchísedech.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Dóminus a dextris tuis, * confrégit in die iræ suæ reges.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Judicábit in natiónibus, implébit ruínas: * conquassábit cápita in terra multórum.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'De torrénte in via bibet: * proptérea exaltábit caput.',
              en: '',
            },
          ],
        },
        {
          chapter: '110',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Confitébor tibi, Dómine, in toto corde meo: * in consílio justórum, et congregatióne.',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Magna ópera Dómini: * exquisíta in omnes voluntátes ejus.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Conféssio et magnificéntia opus ejus: * et justítia ejus manet in sǽculum sǽculi.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Memóriam fecit mirabílium suórum, † miséricors et miserátor Dóminus: * escam dedit timéntibus se.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Memor erit in sǽculum testaménti sui: * virtútem óperum suórum annuntiábit pópulo suo:',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Ut det illis hereditátem géntium: * ópera mánuum ejus véritas, et judícium.',
              en: '',
              rubrics: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Fidélia ómnia mandáta ejus: confirmáta in sǽculum sǽculi, * facta in veritáte et æquitáte.',
              en: '',
              rubrics: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Redemptiónem misit pópulo suo: * mandávit in ætérnum testaméntum suum.',
              en: '',
            },
            {
              desc: '',
              id: '9-2',
              la: 'Sanctum, et terríbile nomen ejus: * inítium sapiéntiæ timor Dómini.',
              en: '',
              rubrics: 'fit reverentia',
            },
            {
              desc: '',
              id: '10',
              la: 'Intelléctus bonus ómnibus faciéntibus eum: * laudátio ejus manet in sǽculum sǽculi. ',
              en: '',
              rubrics: '',
            },
          ],
        },
        {
          chapter: '111',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Beátus vir, qui timet Dóminum: * in mandátis ejus volet nimis.',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Potens in terra erit semen ejus: * generátio rectórum benedicétur.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Glória, et divítiæ in domo ejus: * et justítia ejus manet in sǽculum sǽculi.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Exórtum est in ténebris lumen rectis: * miséricors, et miserátor, et justus.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Jucúndus homo qui miserétur et cómmodat, † dispónet sermónes suos in judício: * quia in ætérnum non commovébitur.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'In memória ætérna erit justus: * ab auditióne mala non timébit.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Parátum cor ejus speráre in Dómino, † confirmátum est cor ejus: * non commovébitur donec despíciat inimícos suos.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Dispérsit, dedit paupéribus: † justítia ejus manet in sǽculum sǽculi, * cornu ejus exaltábitur in glória.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: ' Peccátor vidébit, et irascétur, † déntibus suis fremet et tabéscet: * desidérium peccatórum períbit.',
              en: '',
            },
          ],
        },
        {
          chapter: '112',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Laudáte, púeri, Dóminum: * laudáte nomen Dómini.',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Sit nomen Dómini benedíctum, * ex hoc nunc, et usque in sǽculum.',
              en: '',
              rubrics: 'fit reverentia',
            },
            {
              desc: '',
              id: '3',
              la: 'A solis ortu usque ad occásum, * laudábile nomen Dómini.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Excélsus super omnes gentes Dóminus, * et super cælos glória ejus.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Quis sicut Dóminus, Deus noster, qui in altis hábitat, * et humília réspicit in cælo et in terra?',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Súscitans a terra ínopem, * et de stércore érigens páuperem:',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Ut cóllocet eum cum princípibus, * cum princípibus pópuli sui.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Qui habitáre facit stérilem in domo, * matrem filiórum lætántem.',
              en: '',
            },
          ],
        },
        {
          chapter: '113',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'In éxitu Israël de Ægýpto, * domus Jacob de pópulo bárbaro:',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Facta est Judǽa sanctificátio ejus, * Israël potéstas ejus.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Mare vidit, et fugit: * Jordánis convérsus est retrórsum.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Montes exsultavérunt ut aríetes, * et colles sicut agni óvium.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Quid est tibi, mare, quod fugísti: * et tu, Jordánis, quia convérsus es retrórsum?',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Montes, exsultástis sicut aríetes, * et colles, sicut agni óvium.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'A fácie Dómini mota est terra, * a fácie Dei Jacob.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Qui convértit petram in stagna aquárum, * et rupem in fontes aquárum.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Non nobis, Dómine, non nobis: * sed nómini tuo da glóriam.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Super misericórdia tua, et veritáte tua: * nequándo dicant gentes: Ubi est Deus eórum?',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Deus autem noster in cælo: * ómnia quæcúmque vóluit, fecit.',
              en: '',
            },
            {
              desc: '',
              id: '12',
              la: 'Simulácra géntium argéntum, et aurum, * ópera mánuum hóminum.',
              en: '',
            },
            {
              desc: '',
              id: '13',
              la: 'Os habent, et non loquéntur: * óculos habent, et non vidébunt.',
              en: '',
            },
            {
              desc: '',
              id: '14',
              la: 'Aures habent, et non áudient: * nares habent, et non odorábunt.',
              en: '',
            },
            {
              desc: '',
              id: '15',
              la: 'Manus habent, et non palpábunt: † pedes habent, et non ambulábunt: * non clamábunt in gútture suo.',
              en: '',
            },
            {
              desc: '',
              id: '16',
              la: 'Símiles illis fiant qui fáciunt ea: * et omnes qui confídunt in eis.',
              en: '',
            },
            {
              desc: '',
              id: '17',
              la: 'Domus Israël sperávit in Dómino: * adjútor eórum et protéctor eórum est,',
              en: '',
            },
            {
              desc: '',
              id: '18',
              la: 'Domus Aaron sperávit in Dómino: * adjútor eórum et protéctor eórum est,',
              en: '',
            },
            {
              desc: '',
              id: '19',
              la: 'Qui timent Dóminum, speravérunt in Dómino: * adjútor eórum et protéctor eórum est.',
              en: '',
            },
            {
              desc: '',
              id: '20',
              la: 'Dóminus memor fuit nostri: * et benedíxit nobis:',
              en: '',
            },
            {
              desc: '',
              id: '20-2',
              la: 'Benedíxit dómui Israël: * benedíxit dómui Aaron.',
              en: '',
            },
            {
              desc: '',
              id: '21',
              la: 'Benedíxit ómnibus, qui timent Dóminum, * pusíllis cum majóribus.',
              en: '',
            },
            {
              desc: '',
              id: '22',
              la: 'Adíciat Dóminus super vos: * super vos, et super fílios vestros.',
              en: '',
            },
            {
              desc: '',
              id: '23',
              la: 'Benedícti vos a Dómino, * qui fecit cælum, et terram.',
              en: '',
            },
            {
              desc: '',
              id: '24',
              la: 'Cælum cæli Dómino: * terram autem dedit fíliis hóminum.',
              en: '',
            },
            {
              desc: '',
              id: '25',
              la: 'Non mórtui laudábunt te, Dómine: * neque omnes, qui descéndunt in inférnum.',
              en: '',
            },
            {
              desc: '',
              id: '26',
              la: 'Sed nos qui vívimus, benedícimus Dómino, * ex hoc nunc et usque in sǽculum.',
              en: '',
            },
          ],
        },
      ],
      canticle: {
        desc: 'Canticum B. Mariæ Virginis',
        chapter: 'Luc. 1:46-55',
        antiphon: '',
        verses: [
          {
            desc: '',
            id: '46',
            la: 'Magníficat ✠ * ánima mea Dóminum.',
            en: '',
          },
          {
            desc: '',
            id: '47',
            la: 'Et exsultávit spíritus meus: * in Deo, salutári meo.',
            en: '',
          },
          {
            desc: '',
            id: '48',
            la: 'Quia respéxit humilitátem ancíllæ suæ: * ecce enim ex hoc beátam me dicent omnes generatiónes.',
            en: '',
          },
          {
            desc: '',
            id: '49',
            la: 'Quia fecit mihi magna, qui potens est: * et sanctum nomen ejus.',
            en: '',
            rubrics: 'fit reverentia',
          },
          {
            desc: '',
            id: '50',
            la: 'Et misericórdia ejus, a progénie in progénies: * timéntibus eum.',
            en: '',
          },
          {
            desc: '',
            id: '51',
            la: 'Fecit poténtiam in brácchio suo: * dispérsit supérbos mente cordis sui.',
            en: '',
          },
          {
            desc: '',
            id: '52',
            la: 'Depósuit poténtes de sede: * et exaltávit húmiles.',
            en: '',
          },
          {
            desc: '',
            id: '53',
            la: 'Esuriéntes implévit bonis: * et dívites dimísit inánes.',
            en: '',
          },
          {
            desc: '',
            id: '54',
            la: 'Suscépit Israël púerum suum: * recordátus misericórdiæ suæ.',
            en: '',
          },
          {
            desc: '',
            id: '55',
            la: 'Sicut locútus est ad patres nostros: * Ábraham, et sémini ejus in sǽcula.',
            en: '',
          },
        ],
      },
      chapterResponsory: {}, // left intentionally blank
      precesFeriales: {}, // left intentionally blank
      oratio: {
        commemoratio: [],
      },
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
  Hour.remoteMethod('getVespers', {
    http: {path: '/monday/vespers', verb: 'GET'},
    returns: {root: true, type: 'Object'},
  });
  Hour.getCompline = () => {
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
          chapter: '4',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Cum invocárem exaudívit me Deus justítiæ meæ: * in tribulatióne dilatásti mihi.',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Miserére mei, * et exáudi oratiónem meam.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Fílii hóminum, úsquequo gravi corde? * ut quid dilígitis vanitátem, et quǽritis mendácium?',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Et scitóte quóniam mirificávit Dóminus sanctum suum: * Dóminus exáudiet me cum clamávero ad eum.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Irascímini, et nolíte peccáre: † quæ dícitis in córdibus vestris, * in cubílibus vestris compungímini.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Sacrificáte sacrifícium justítiæ, † et speráte in Dómino. * Multi dicunt: Quis osténdit nobis bona?',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Signátum est super nos lumen vultus tui, Dómine: * dedísti lætítiam in corde meo.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'A fructu fruménti, vini, et ólei sui * multiplicáti sunt.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'In pace in idípsum * dórmiam, et requiéscam;',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Quóniam tu, Dómine, singuláriter in spe * constituísti me.',
              en: '',
            },
          ],
        },
        {
          chapter: '90',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Qui hábitat in adjutório Altíssimi, * in protectióne Dei cæli commorábitur.',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Dicet Dómino: Suscéptor meus es tu, et refúgium meum: * Deus meus sperábo in eum.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Quóniam ipse liberávit me de láqueo venántium, * et a verbo áspero.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Scápulis suis obumbrábit tibi: * et sub pennis ejus sperábis.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Scuto circúmdabit te véritas ejus: * non timébis a timóre noctúrno,',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'A sagítta volánte in die, 💪 a negótio perambulánte in ténebris: * ab incúrsu, et dæmónio meridiáno.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Cadent a látere tuo mille, 💪 et decem míllia a dextris tuis: * ad te autem non appropinquábit.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Verúmtamen óculis tuis considerábis: * et retributiónem peccatórum vidébis.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Quóniam tu es, Dómine, spes mea: * Altíssimum posuísti refúgium tuum.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Non accédet ad te malum: * et flagéllum non appropinquábit tabernáculo tuo.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Quóniam Ángelis suis mandávit de te: * ut custódiant te in ómnibus viis tuis.',
              en: '',
            },
            {
              desc: '',
              id: '12',
              la: 'In mánibus portábunt te: * ne forte offéndas ad lápidem pedem tuum.',
              en: '',
            },
            {
              desc: '',
              id: '13',
              la: 'Super áspidem, et basilíscum ambulábis: * et conculcábis leónem et dracónem.',
              en: '',
            },
            {
              desc: '',
              id: '14',
              la: 'Quóniam in me sperávit, liberábo eum: * prótegam eum, quóniam cognóvit nomen meum.',
              en: '',
            },
            {
              desc: '',
              id: '15',
              la: 'Clamábit ad me, et ego exáudiam eum: † cum ipso sum in tribulatióne: * erípiam eum et glorificábo eum.',
              en: '',
            },
            {
              desc: '',
              id: '16',
              la: 'Longitúdine diérum replébo eum: * et osténdam illi salutáre meum.',
              en: '',
            },
          ],
        },
        {
          chapter: '133',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Ecce nunc benedícite Dóminum, * omnes servi Dómini:',
              en: '',
            },
            {
              desc: '',
              id: '1-2',
              la: 'Qui statis in domo Dómini, * in átriis domus Dei nostri.',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'In nóctibus extóllite manus vestras in sancta, * et benedícite Dóminum.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Benedícat te Dóminus ex Sion, * qui fecit cælum et terram.',
              en: '',
            },
          ],
        },
      ],
      canticle: {
        desc: 'Canticum Nunc dimittis',
        chapter: 'Luc. 2:29-32',
        antiphon: 'Salva nos * Dómine, vigilántes, custódi nos dormiéntes; ut vigilémus cum Christo, et requiescámus in pace, allelúja.',
        verses: [
          {
            desc: '',
            id: '29',
            la: 'Nunc dimíttis ✠ servum tuum, Dómine, * secúndum verbum tuum in pace:',
            en: '',
          },
          {
            desc: '',
            id: '30',
            la: 'Quia vidérunt óculi mei * salutáre tuum,',
            en: '',
          },
          {
            desc: '',
            id: '31',
            la: 'Quod parásti * ante fáciem ómnium populórum,',
            en: '',
          },
          {
            desc: '',
            id: '32',
            la: 'Lumen ad revelatiónem géntium, * et glóriam plebis tuæ Israël.',
            en: '',
          },
        ],
      },
      chapterResponsory: {}, // left intentionally blank
      precesFeriales: {}, // left intentionally blank
      oratio: {},
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
  Hour.remoteMethod('getCompline', {
    http: {path: '/monday/compline', verb: 'GET'},
    returns: {root: true, type: 'Object'},
  });
};
