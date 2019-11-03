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
          chapter: '61',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'Nonne Deo subjécta erit ánima mea? * ab ipso enim salutáre meum.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Nam et ipse Deus meus, et salutáris meus: * suscéptor meus, non movébor ámplius.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Quoúsque irrúitis in hóminem? * interfícitis univérsi vos: tamquam paríeti inclináto et macériæ depúlsæ?',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Verúmtamen prétium meum cogitavérunt repéllere, cucúrri in siti: * ore suo benedicébant, et corde suo maledicébant.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Verúmtamen Deo subjécta esto, ánima mea: * quóniam ab ipso patiéntia mea.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Quia ipse Deus meus, et salvátor meus: * adjútor meus, non emigrábo.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'In Deo salutáre meum, et glória mea: * Deus auxílii mei, et spes mea in Deo est.',
              en: '',
            },
            {
                desc: '',
                id: '9',
                la: 'Speráte in eo omnis congregátio pópuli, effúndite coram illo corda vestra: * Deus adjútor noster in ætérnum.',
                en: '',
              },
              {
                desc: '',
                id: '10',
                la: 'Verúmtamen vani fílii hóminum, mendáces fílii hóminum in statéris: * ut decípiant ipsi de vanitáte in idípsum.',
                en: '',
              },
              
              {
                desc: '',
                id: '11',
                la: 'Nolíte speráre in iniquitáte, et rapínas nolíte concupíscere: * divítiæ si áffluant, nolíte cor appónere.',
                en: '',
              },
              {
                desc: '',
                id: '12',
                la: 'Semel locútus est Deus, duo hæc audívi, quia potéstas Dei est, et tibi, Dómine, misericórdia: * quia tu reddes unicuíque juxta ópera sua.',
                en: '',
              }, 
              
              
          ],
        },
        {
          chapter: '65(1-12)',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Jubiláte Deo, omnis terra, psalmum dícite nómini ejus: * date glóriam laudi ejus.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Dícite Deo: Quam terribília sunt ópera tua, Dómine! * in multitúdine virtútis tuæ mentiéntur tibi inimíci tui.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Omnis terra adóret te, et psallat tibi: * psalmum dicat nómini tuo.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Veníte, et vidéte ópera Dei: * terríbilis in consíliis super fílios hóminum.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Qui convértit mare in áridam, in flúmine pertransíbunt pede: * ibi lætábimur in ipso.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Qui dominátur in virtúte sua in ætérnum, óculi ejus super gentes respíciunt: * qui exásperant non exalténtur in semetípsis.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Benedícite, gentes, Deum nostrum: * et audítam fácite vocem laudis ejus,',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Qui pósuit ánimam meam ad vitam: * et non dedit in commotiónem pedes meos.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Quóniam probásti nos, Deus: * igne nos examinásti, sicut examinátur argéntum.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Induxísti nos in láqueum, posuísti tribulatiónes in dorso nostro: * imposuísti hómines super cápita nostra.',
              en: '',
            },
            {
              desc: '',
              id: '12',
              la: 'Transívimus per ignem et aquam: * et eduxísti nos in refrigérium.',
              en: '',
            },
            ,
          ],
        },
        {
          chapter: '65(13-20)',
          verses: [
            {
              desc: '',
              id: '13',
              la: 'Introíbo in domum tuam in holocáustis: * reddam tibi vota mea, quæ distinxérunt lábia mea.',
              en: '',
            },
            {
              desc: '',
              id: '14',
              la: 'Et locútum est os meum, * in tribulatióne mea.',
              en: '',
            },
            {
              desc: '',
              id: '15',
              la: 'Holocáusta medulláta ófferam tibi cum incénso aríetum: * ófferam tibi boves cum hircis.',
              en: '',
            },
            {
              desc: '',
              id: '16',
              la: 'Veníte, audíte, et narrábo, omnes, qui timétis Deum: * quanta fecit ánimæ meæ.',
              en: '',
            },
            {
              desc: '',
              id: '17',
              la: 'Ad ipsum ore meo clamávi, * et exaltávi sub lingua mea.',
              en: '',
            },
            {
              desc: '',
              id: '18',
              la: 'Iniquitátem si aspéxi in corde meo, * non exáudiet Dóminus.',
              en: '',
            },
            {
              desc: '',
              id: '19',
              la: 'Proptérea exaudívit Deus, * et atténdit voci deprecatiónis meæ.',
              en: '',
            },
            {
              desc: '',
              id: '20',
              la: 'Benedíctus Deus, * qui non amóvit oratiónem meam, et misericórdiam suam a me.',
              en: '',
            },
            
              
             
          ],
        },
        {
          chapter: '67(2-11) ',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'Exsúrgat Deus, et dissipéntur inimíci ejus, * ‡ et fúgiant qui odérunt eum, a fácie ejus.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Sicut déficit fumus, defíciant: * sicut fluit cera a fácie ignis, sic péreant peccatóres a fácie Dei.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Et justi epuléntur, et exsúltent in conspéctu Dei: * et delecténtur in lætítia.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Cantáte Deo, psalmum dícite nómini ejus: * iter fácite ei, qui ascéndit super occásum: (fit reverentia) Dóminus nomen illi.',
              en: '',
            },
            {
                desc: '',
                id: '5-2',
                la: 'Exsultáte in conspéctu ejus: * turbabúntur a fácie ejus, patris orphanórum et júdicis viduárum.',
                en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Deus in loco sancto suo: * Deus, qui inhabitáre facit uníus moris in domo:',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Qui edúcit vinctos in fortitúdine, * simíliter eos qui exásperant, qui hábitant in sepúlcris.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Deus, cum egrederéris in conspéctu pópuli tui, * cum pertransíres in desérto:',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Terra mota est, étenim cæli distillavérunt a fácie Dei Sínai, * a fácie Dei Israël.',
              en: '',
            },
            {
                desc: '',
                id: '10',
                la: 'Plúviam voluntáriam segregábis, Deus, hereditáti tuæ: * et infirmáta est, tu vero perfecísti eam.',
                en: '',
            }, 
            {
              desc: '',
              id: '11',
              la: 'Animália tua habitábunt in ea: * parásti in dulcédine tua páuperi, Deus.',
              en: '',
          }, 
            
          ],
        },
        {
          chapter: '67 (12-24)',
          verses: [

            {
              desc: '',
              id: '12',
              la: 'Dóminus dabit verbum evangelizántibus, * virtúte multa.',
              en: '',
            },
            {
              desc: '',
              id: '13',
              la: 'Rex virtútum dilécti dilécti: * et speciéi domus divídere spólia.',
              en: '',
            },
            {
              desc: '',
              id: '14',
              la: 'Si dormiátis inter médios cleros, pennæ colúmbæ deargentátæ, * et posterióra dorsi ejus in pallóre auri.',
              en: '',
            },
            {
              desc: '',
              id: '15',
              la: 'Dum discérnit cæléstis reges super eam, nive dealbabúntur in Selmon: * mons Dei, mons pinguis',
              en: '',
            },
            {
              desc: '',
              id: '16',
              la: 'Mons coagulátus, mons pinguis: * ut quid suspicámini montes coagulátos?',
              en: '',
            },
            {
              desc: '',
              id: '17',
              la: 'Mons, in quo beneplácitum est Deo habitáre in eo: * étenim Dóminus habitábit in finem.',
              en: '',
            },
            {
              desc: '',
              id: '18',
              la: 'Currus Dei decem míllibus múltiplex, míllia lætántium: * Dóminus in eis in Sina in sancto.',
              en: '',
            },
            {
              desc: '',
              id: '19',
              la: 'Ascendísti in altum, cepísti captivitátem: * accepísti dona in homínibus.',
              en: '',
            },
            {
              desc: '',
              id: '19-2',
              la: 'Étenim non credéntes, * inhabitáre Dóminum Deum.',
              en: '',
            },
            {
              desc: '',
              id: '20',
              la: 'Benedíctus Dóminus die quotídie: * prósperum iter fáciet nobis Deus salutárium nostrórum.',
              en: '',
            },
            {
              desc: '',
              id: '21',
              la: 'Deus noster, Deus salvos faciéndi: * et Dómini Dómini éxitus mortis.',
              en: '',
            },
            {
                desc: '',
                id: '22',
                la: 'Verúmtamen Deus confrínget cápita inimicórum suórum: * vérticem capílli perambulántium in delíctis suis.',
                en: '',
            },
            {
              desc: '',
              id: '23',
              la: 'Dixit Dóminus: Ex Basan convértam, * convértam in profúndum maris:',
              en: '',
            },
            {
              desc: '',
              id: '24',
              la: 'Ut intingátur pes tuus in sánguine: * lingua canum tuórum ex inimícis, ab ipso.',
              en: '',
            },

            
            
          ],
        },
        {
          chapter: '67(25-36)',
          verses: [
            {
              desc: '',
              id: '25',
              la: 'Vidérunt ingréssus tuos, Deus: * ingréssus Dei mei: regis mei qui est in sancto.',
              en: '',
            },
            {
              desc: '',
              id: '26',
              la: 'Prævenérunt príncipes conjúncti psalléntibus: * in médio juvenculárum tympanistriárum.',
              en: '',
            },
            {
              desc: '',
              id: '27',
              la: 'In ecclésiis benedícite Deo Dómino, * de fóntibus Israël.',
              en: '',
            },
            {
              desc: '',
              id: '28',
              la: 'Ibi Bénjamin adolescéntulus: * in mentis excéssu.',
              en: '',
            },
            {
              desc: '',
              id: '28-2',
              la: 'Príncipes Juda, duces eórum: * príncipes Zábulon, príncipes Néphtali..',
              en: '',
            },
            {
              desc: '',
              id: '29',
              la: 'Manda, Deus, virtúti tuæ: * confírma hoc, Deus, quod operátus es in nobis.',
              en: '',
            },
            {
              desc: '',
              id: '30',
              la: 'A templo tuo in Jerúsalem, * tibi ófferent reges múnera.',
              en: '',
            },
            {
              desc: '',
              id: '31',
              la: ' Íncrepa feras arúndinis, congregátio taurórum in vaccis populórum: * ut exclúdant eos, qui probáti sunt argénto.',
              en: '',
            },
            {
              desc: '',
              id: '32',
              la: 'Díssipa gentes, quæ bella volunt: vénient legáti ex Ægýpto: * Æthiópia prævéniet manus ejus Deo.',
              en: '',
            },
            {
              desc: '',
              id: '33',
              la: 'Regna terræ, cantáte Deo: * psállite Dómino.',
              en: '',
            },
            {
              desc: '',
              id: '34',
              la: 'Psállite Deo, qui ascéndit super cælum cæli, * ad Oriéntem.',
              en: '',
            },
            {
              desc: '',
              id: '35',
              la: 'Ecce dabit voci suæ vocem virtútis, date glóriam Deo super Israël, * magnificéntia ejus, et virtus ejus in núbibus.',
              en: '',
            },
            {
              desc: '',
              id: '36',
              la: 'Mirábilis Deus in sanctis suis, Deus Israël ipse dabit virtútem, et fortitúdinem plebi suæ, * benedíctus Deus.',
              en: '',
            },
            
          ],
        },
        {
          chapter: '68(2-13)',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'Salvum me fac, Deus: quóniam intravérunt aquæ usque ad ánimam meam. ',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: '‡ Infíxus sum in limo profúndi: * et non est substántia.',
              en: '',
            },
            {
              desc: '',
              id: '3-2',
              la: 'Veni in altitúdinem maris: * et tempéstas demérsit me.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Laborávi clamans, raucæ factæ sunt fauces meæ: * defecérunt óculi mei, dum spero in Deum meum.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Multiplicáti sunt super capíllos cápitis mei, * qui odérunt me gratis.',
              en: '',
            },
            {
              desc: '',
              id: '5-2',
              la: 'Confortáti sunt qui persecúti sunt me inimíci mei injúste: * quæ non rápui, tunc exsolvébam.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Deus, tu scis insipiéntiam meam: * et delícta mea a te non sunt abscóndita.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Non erubéscant in me qui exspéctant te, Dómine, * Dómine virtútum.',
              en: '',
            },
            {
              desc: '',
              id: '7-2',
              la: 'Non confundántur super me * qui quǽrunt te, Deus Israël.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Quóniam propter te sustínui oppróbrium: * opéruit confúsio fáciem meam.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Extráneus factus sum frátribus meis, * et peregrínus fíliis matris meæ.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Extráneus factus sum frátribus meis, * et peregrínus fíliis matris meæ.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Et opérui in jejúnio ánimam meam: * et factum est in oppróbrium mihi.',
              en: '',
            },
            {
              desc: '',
              id: '12',
              la: ' Et pósui vestiméntum meum cilícium: * et factus sum illis in parábolam.',
              en: '',
            },
            {
              desc: '',
              id: '13',
              la: 'Advérsum me loquebántur, qui sedébant in porta: * et in me psallébant qui bibébant vinum.',
              en: '',
            },
           
            
          ],
        },
        {
          chapter: '68(14-29)',
          verses: [
            {
              desc: '',
              id: '14',
              la: ' Ego vero oratiónem meam ad te, Dómine: * tempus benepláciti, Deus.',
              en: '',
            },
            {
              desc: '',
              id: '14-2',
              la: 'In multitúdine misericórdiæ tuæ exáudi me, * in veritáte salútis tuæ:',
              en: '',
            },
            {
              desc: '',
              id: '15',
              la: 'Éripe me de luto, ut non infígar: * líbera me ab iis, qui odérunt me, et de profúndis aquárum.',
              en: '',
            },
            {
              desc: '',
              id: '16',
              la: 'Non me demérgat tempéstas aquæ, neque absórbeat me profúndum: * neque úrgeat super me púteus os suum.',
              en: '',
            },
            {
              desc: '',
              id: '17',
              la: 'Exáudi me, Dómine, quóniam benígna est misericórdia tua: * secúndum multitúdinem miseratiónum tuárum réspice in me.',
              en: '',
            },
            {
              desc: '',
              id: '18',
              la: 'Et ne avértas fáciem tuam a púero tuo: * quóniam tríbulor, velóciter exáudi me.',
              en: '',
            },
            {
              desc: '',
              id: '19',
              la: 'Inténde ánimæ meæ, et líbera eam: * propter inimícos meos éripe me.',
              en: '',
            },
            {
              desc: '',
              id: '20',
              la: 'Tu scis impropérium meum, et confusiónem meam, * et reveréntiam meam.',
              en: '',
            },
            {
              desc: '',
              id: '21',
              la: 'In conspéctu tuo sunt omnes qui tríbulant me: * impropérium exspectávit cor meum, et misériam.',
              en: '',
            },
            {
              desc: '',
              id: '21-2',
              la: 'Et sustínui qui simul contristarétur, et non fuit: * et qui consolarétur, et non invéni.',
              en: '',
            },
            {
              desc: '',
              id: '22',
              la: 'Et dedérunt in escam meam fel: * et in siti mea potavérunt me acéto.',
              en: '',
            },
            {
              desc: '',
              id: '23',
              la: 'Fiat mensa eórum coram ipsis in láqueum, * et in retributiónes, et in scándalum.',
              en: '',
            },
            {
              desc: '',
              id: '24',
              la: 'Obscuréntur óculi eórum ne vídeant: * et dorsum eórum semper incúrva.',
              en: '',
            },
            {
              desc: '',
              id: '25',
              la: 'Effúnde super eos iram tuam: * et furor iræ tuæ comprehéndat eos.',
              en: '',
            },
            {
              desc: '',
              id: '26',
              la: 'Fiat habitátio eórum desérta: * et in tabernáculis eórum non sit qui inhábitet.',
              en: '',
            },
            {
              desc: '',
              id: '27',
              la: 'Quóniam quem tu percussísti, persecúti sunt: * et super dolórem vúlnerum meórum addidérunt.',
              en: '',
            },
            {
              desc: '',
              id: '28',
              la: 'Appóne iniquitátem super iniquitátem eórum: * et non intrent in justítiam tuam.',
              en: '',
            },
            {
            desc: '',
            id: '29',
            la: 'Deleántur de libro vivéntium: * et cum justis non scribántur.',
            en: '',
          },
            
          ],
        },
        {
          chapter: '68(30-37)',
          verses: [
            {
              desc: '',
              id: '30',
              la: 'Ego sum pauper et dolens: * salus tua, Deus, suscépit me.',
              en: '',
            },
            {
              desc: '',
              id: '31',
              la: 'Laudábo nomen Dei cum cántico: * et magnificábo eum in laude:',
              en: '',
            },
            {
              desc: '',
              id: '32',
              la: 'Et placébit Deo super vítulum novéllum: * córnua producéntem et úngulas.',
              en: '',
            },
            {
              desc: '',
              id: '33',
              la: 'Vídeant páuperes et læténtur: * quǽrite Deum, et vivet ánima vestra.',
              en: '',
            },
            {
              desc: '',
              id: '34',
              la: 'Quóniam exaudívit páuperes Dóminus: * et vinctos suos non despéxit.',
              en: '',
            },
            {
              desc: '',
              id: '35',
              la: 'Laudent illum cæli et terra, * mare et ómnia reptília in eis.',
              en: '',
            },
            {
              desc: '',
              id: '36',
              la: 'Quóniam Deus salvam fáciet Sion: * et ædificabúntur civitátes Juda.',
              en: '',
            },
            {
              desc: '',
              id: '36-2',
              la: 'Et inhabitábunt ibi, * et hereditáte acquírent eam.',
              en: '',
            },
            {
                desc: '',
                id: '37',
                la: 'Et semen servórum ejus possidébit eam: * et qui díligunt nomen ejus, habitábunt in ea.',
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
    http: {path: '/sunday/matins', verb: 'GET'},
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
          chapter: '96',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Dóminus regnávit, exsúltet terra: * ‡ læténtur ínsulæ multæ.',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Nubes, et calígo in circúitu ejus: * justítia, et judícium corréctio sedis ejus.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Ignis ante ípsum præcédet, * et inflammábit in circúitu inimícos ejus.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Illuxérunt fúlgura ejus orbi terræ: * vidit, et commóta est terra.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Montes, sicut cera fluxérunt a fácie Dómini: * a fácie Dómini omnis terra.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Annuntiavérunt cæli justítiam ejus: * et vidérunt omnes pópuli glóriam ejus.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Confundántur omnes, qui adórant sculptília: * et qui gloriántur in simulácris suis.',
              en: '',
            },
            {
              desc: '',
              id: '7-2',
              la: 'Adoráte eum, omnes Ángeli ejus: * audívit, et lætáta est Sion.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Et exsultavérunt fíliæ Judæ, * propter judícia tua, Dómine:',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Quóniam tu Dóminus Altíssimus super omnem terram: * nimis exaltátus es super omnes deos.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Qui dilígitis Dóminum, odíte malum: * custódit Dóminus ánimas sanctórum suórum, de manu ',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Lux orta est justo, * et rectis corde lætítia.',
              en: '',
            },
            {
              desc: '',
              id: '12',
              la: 'Lætámini, justi, in Dómino: * et confitémini memóriæ sanctificatiónis ejus',
              en: '',
            },
          ],
        },
        {
          chapter: '64',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'Te decet hymnus, Deus, in Sion: * ‡ et tibi reddétur votum in Jerúsalem.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Exáudi oratiónem meam: * ad te omnis caro véniet.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Verba iniquórum prævaluérunt super nos: * et impietátibus nostris tu propitiáberis.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Beátus, quem elegísti, et assumpsísti: * inhabitábit in átriis tuis.',
              en: '',
            },
            {
              desc: '',
              id: '5-2',
              la: 'Replébimur in bonis domus tuæ: * sanctum est templum tuum, mirábile in æquitáte.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Exáudi nos, Deus, salutáris noster, * spes ómnium fínium terræ, et in mari longe.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Prǽparans montes in virtúte tua, accínctus poténtia: * qui contúrbas profúndum maris sonum flúctuum ejus.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Turbabúntur gentes, et timébunt qui hábitant términos a signis tuis: * éxitus matutíni, et véspere delectábis.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Visitásti terram, et inebriásti eam: * multiplicásti locupletáre eam.',
              en: '',
            },
            {
              desc: '',
              id: '10-2',
              la: 'Flumen Dei replétum est aquis, parásti cibum illórum: * quóniam ita est præparátio ejus.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Rivos ejus inébria, multíplica genímina ejus: * in stillicídiis ejus lætábitur gérminans.',
              en: '',
            },
            {
              desc: '',
              id: '12',
              la: 'Benedíces corónæ anni benignitátis tuæ: * et campi tui replebúntur ubertáte.',
              en: '',
            },
            {
              desc: '',
              id: '13',
              la: 'Pinguéscent speciósa desérti: * et exsultatióne colles accingéntur.',
              en: '',
            },
            {
              desc: '',
              id: '14',
              la: 'Indúti sunt aríetes óvium, et valles abundábunt fruménto: * clamábunt, étenim hymnum dicent.',
              en: '',
            },

            
          ],
        },
        {
          chapter: '100',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Indúti sunt aríetes óvium, et valles abundábunt fruménto: * clamábunt, étenim hymnum dicent.',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Indúti sunt aríetes óvium, et valles abundábunt fruménto: * clamábunt, étenim hymnum dicent.',
              en: '',
            },
            {
              desc: '',
              id: '2-2',
              la: 'Perambulábam in innocéntia cordis mei, * in médio domus meæ.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Non proponébam ante óculos meos rem injústam: * faciéntes prævaricatiónes odívi.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Non adhǽsit mihi cor pravum: * declinántem a me malígnum non cognoscébam.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Detrahéntem secréto próximo suo, * hunc persequébar.',
              en: '',
            },

            {
              desc: '',
              id: '5-2',
              la: 'Supérbo óculo, et insatiábili corde, * cum hoc non edébam.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Óculi mei ad fidéles terræ ut sédeant mecum: * ámbulans in via immaculáta, hic mihi ministrábat.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Non habitábit in médio domus meæ qui facit supérbiam: * qui lóquitur iníqua, non diréxit in conspéctu oculórum meórum.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'In matutíno interficiébam omnes peccatóres terræ: * ut dispérderem de civitáte Dómini omnes operántes iniquitátem.',
              en: '',
            },

           
          ],
        },
        {
          desc: 'Canticum Judith',
          chapter: 'Judith 16:15-22',
          verses: [
            {
              desc: '',
              id: '15',
              la: 'Hymnum cantémus Dómino, * hymnum novum cantémus Deo nostro.',
              en: '',
            },
            {
              desc: '',
              id: '16',
              la: ' Adonái, Dómine, magnus es tu, et præclárus in virtúte tua, * et quem superáre nemo potest.',
              en: '',
            },
            {
              desc: '',
              id: '17',
              la: 'Tibi sérviat omnis creatúra tua: * quia dixísti, et facta sunt:',
              en: '',
            },
            {
              desc: '',
              id: '18',
              la: 'Misísti spíritum tuum, et creáta sunt, * et non est qui resístat voci tuæ.',
              en: '',
            },
            {
              desc: '',
              id: '19',
              la: 'Montes a fundaméntis movebúntur cum aquis: * petræ, sicut cera, liquéscent ante fáciem tuam.',
              en: '',
            },
            {
              desc: '',
              id: '20',
              la: 'Qui autem timent te, * magni erunt apud te per ómnia.',
              en: '',
            },
            {
              desc: '',
              id: '21',
              la: 'Væ genti insurgénti super genus meum: Dóminus enim omnípotens vindicábit in eis, * in die judícii visitábit illos.',
              en: '',
            },
            {
              desc: '',
              id: '22',
              la: 'Dabit enim ignem, et vermes in carnes eórum, * ut urántur, et séntiant usque in sempitérnum.',
              en: '',
            },
            
          ],
        },
        {
          chapter: '145',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'Lauda, ánima mea, Dóminum, laudábo Dóminum in vita mea: * psallam Deo meo quámdiu fúero.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Nolíte confídere in princípibus: * in fíliis hóminum, in quibus non est salus.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Exíbit spíritus ejus, et revertétur in terram suam: * in illa die períbunt omnes cogitatiónes eórum.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Beátus, cujus Deus Jacob adjútor ejus, spes ejus in Dómino, Deo ipsíus: * qui fecit cælum et terram, mare, et ómnia, quæ in eis sunt.',
              en: '',
            },
           {
              desc: '',
              id: '7',
              la: 'Qui custódit veritátem in sǽculum, facit judícium injúriam patiéntibus: * dat escam esuriéntibus.',
              en: '',
            },
            {
              desc: '',
              id: '7-2',
              la: 'Dóminus solvit compedítos: * Dóminus illúminat cæcos.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Dóminus érigit elísos, * Dóminus díligit justos.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Dóminus custódit ádvenas, pupíllum et víduam suscípiet: * et vias peccatórum dispérdet.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Regnábit Dóminus in sǽcula, Deus tuus, Sion, * in generatiónem et generatiónem.',
              en: '',
            },
            
            
            
          ],
        },
      ],
      canticle: {
        desc: 'Canticum Benedictus',
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
    http: {path: '/sunday/lauds', verb: 'GET'},
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
          chapter: '25',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Júdica me, Dómine, quóniam ego in innocéntia mea ingréssus sum: * et in Dómino sperans non infirmábor.',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Proba me, Dómine, et tenta me: * ure renes meos et cor meum.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Quóniam misericórdia tua ante óculos meos est: * et complácui in veritáte tua.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Non sedi cum concílio vanitátis: * et cum iníqua geréntibus non introíbo.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Odívi ecclésiam malignántium: * et cum ímpiis non sedébo.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Lavábo inter innocéntes manus meas: * et circúmdabo altáre tuum, Dómine:',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Ut áudiam vocem laudis, * et enárrem univérsa mirabília tua.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Dómine, diléxi decórem domus tuæ, * et locum habitatiónis glóriæ tuæ.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Ne perdas cum ímpiis, Deus, ánimam meam, * et cum viris sánguinum vitam meam:',
              en: '',
            }, {
              desc: '',
              id: '10',
              la: 'In quorum mánibus iniquitátes sunt: * déxtera eórum repléta est munéribus.',
              en: '',
            }, {
              desc: '',
              id: '11',
              la: 'Ego autem in innocéntia mea ingréssus sum: * rédime me, et miserére mei',
              en: '',
            }, {
              desc: '',
              id: '12',
              la: 'Pes meus stetit in dirécto: * in ecclésiis benedícam te, Dómine.',
              en: '',
            },
            
            
            
          ],
        },
        {
          chapter: '51',
          verses: [
            {
              desc: '',
              id: '3',
              la: 'Quid gloriáris in malítia, * qui potens es in iniquitáte?',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Tota die injustítiam cogitávit lingua tua: * sicut novácula acúta fecísti dolum.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Dilexísti malítiam super benignitátem: * iniquitátem magis quam loqui æquitátem.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Dilexísti ómnia verba præcipitatiónis, * lingua dolósa.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Proptérea Deus déstruet te in finem, * evéllet te, et emigrábit te de tabernáculo tuo: et radícem tuam de terra vivéntium.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Vidébunt justi, et timébunt, et super eum ridébunt, et dicent: * Ecce homo, qui non pósuit Deum adjutórem suum:',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Sed sperávit in multitúdine divitiárum suárum: * et præváluit in vanitáte sua.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Ego autem, sicut olíva fructífera in domo Dei, * sperávi in misericórdia Dei in ætérnum: et in sǽculum sǽculi.',
              en: '',
            },{
              desc: '',
              id: '11',
              la: 'Confitébor tibi in sǽculum, quia fecísti: * et exspectábo nomen tuum, quóniam bonum est in conspéctu sanctórum tuórum.',
              en: '',
            },
            
            
          ],
        },
        {
          chapter: '52',
          verses: [
            {
              desc: 'Ghimel',
              id: '1',
              la: 'Dixit insípiens in corde suo: * Non est Deus.',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Corrúpti sunt, et abominábiles facti sunt in iniquitátibus: * non est qui fáciat bonum.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Deus de cælo prospéxit super fílios hóminum: * ut vídeat si est intéllegens, aut requírens Deum.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Omnes declinavérunt, simul inútiles facti sunt: * non est qui fáciat bonum, non est usque ad unum.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Nonne scient omnes qui operántur iniquitátem, * qui dévorant plebem meam ut cibum panis?',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Deum non invocavérunt: * illic trepidavérunt timóre, ubi non erat timor.',
              en: '',
            },
            {
              desc: '',
              id: '6-2',
              la: 'Quóniam Deus dissipávit ossa eórum qui homínibus placent: * confúsi sunt, quóniam Deus sprevit eos.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Quis dabit ex Sion salutáre Israël? * cum convérterit Deus captivitátem plebis suæ, exsultábit Jacob, et lætábitur Israël.',
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
              la: 'Quóniam aliéni insurrexérunt advérsum me, et fortes quæsiérunt ánimam meam: * et non proposuérunt Deum ante conspéctum suum.',
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
           
            
          ],
        },
        {
          chapter: '54(2-16)',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'Exáudi, Deus, oratiónem meam, et ne despéxeris deprecatiónem meam: * inténde mihi, et exáudi me',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Contristátus sum in exercitatióne mea: * et conturbátus sum a voce inimíci, et a tribulatióne peccatóris.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Quóniam declinavérunt in me iniquitátes: * et in ira molésti erant mihi.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Cor meum conturbátum est in me: * et formído mortis cécidit super me.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Timor et tremor venérunt super me: * et contexérunt me ténebræ.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Et dixi: Quis dabit mihi pennas sicut colúmbæ, * et volábo, et requiéscam?',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Ecce, elongávi fúgiens: * et mansi in solitúdine.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Exspectábam eum, qui salvum me fecit * a pusillanimitáte spíritus et tempestáte.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Præcípita, Dómine, dívide linguas eórum: * quóniam vidi iniquitátem, et contradictiónem in civitáte.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Die ac nocte circúmdabit eam super muros ejus iníquitas: * et labor in médio ejus, et injustítia.',
              en: '',
            },
            {
              desc: '',
              id: '12',
              la: 'Et non defécit de platéis ejus * usúra, et dolus.',
              en: '',
            },
            {
              desc: '',
              id: '13',
              la: 'Quóniam si inimícus meus maledixísset mihi, * sustinuíssem útique.',
              en: '',
            },
            {
              desc: '',
              id: '13-2',
              la: 'Et si is, qui óderat me, super me magna locútus fuísset, * abscondíssem me fórsitan ab eo.',
              en: '',
            },
            {
              desc: '',
              id: '14',
              la: 'Tu vero, homo unánimis: * dux meus, et notus meus:',
              en: '',
            },
            {
              desc: '',
              id: '15',
              la: 'Qui simul mecum dulces capiébas cibos: * in domo Dei ambulávimus cum consénsu.',
              en: '',
            },
            {
              desc: '',
              id: '16',
              la: 'Véniat mors super illos: * et descéndant in inférnum vivéntes:',
              en: '',
            },
            {
              desc: '',
              id: '16-2',
              la: 'Quóniam nequítiæ in habitáculis eórum: * in médio eórum.',
              en: '',
            },
            
            
           
          ],
        },
        {
          chapter: '54(17-24)',
          verses: [
            {
              desc: '',
              id: '17',
              la: 'Ego autem ad Deum clamávi: * et Dóminus salvábit me.',
              en: '',
            },
            {
              desc: '',
              id: '18',
              la: ' Véspere, et mane, et merídie narrábo et annuntiábo: * et exáudiet vocem meam.',
              en: '',
            },
            {
              desc: '',
              id: '19',
              la: 'Rédimet in pace ánimam meam ab his, qui appropínquant mihi: * quóniam inter multos erant mecum.',
              en: '',
            },
            {
              desc: '',
              id: '20',
              la: 'Exáudiet Deus, et humiliábit illos, * qui est ante sǽcula.',
              en: '',
            },
            {
              desc: '',
              id: '20-2',
              la: 'Non enim est illis commutátio, et non timuérunt Deum: * exténdit manum suam in retribuéndo.',
              en: '',
            },
            {
              desc: '',
              id: '21',
              la: 'Contaminavérunt testaméntum ejus, divísi sunt ab ira vultus ejus: * et appropinquávit cor illíus.',
              en: '',
            },
            {
              desc: '',
              id: '22',
              la: 'Mollíti sunt sermónes ejus super óleum: * et ipsi sunt jácula.',
              en: '',
            },
            {
              desc: '',
              id: '23',
              la: 'Jacta super Dóminum curam tuam, et ipse te enútriet: * non dabit in ætérnum fluctuatiónem justo.',
              en: '',
            },
            {
              desc: '',
              id: '24',
              la: 'Tu vero, Deus, dedúces eos, * in púteum intéritus.',
              en: '',
            },
            {
              desc: '',
              id: '24-2',
              la: 'Viri sánguinum, et dolósi non dimidiábunt dies suos: * ego autem sperábo in te, Dómine.',
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
          chapter: '55',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'Miserére mei, Deus, quóniam conculcávit me homo: * tota die impúgnans tribulávit me.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Conculcavérunt me inimíci mei tota die: * quóniam multi bellántes advérsum me.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Ab altitúdine diéi timébo: * ego vero in te sperábo.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'In Deo laudábo sermónes meos, in Deo sperávi: * non timébo quid fáciat mihi caro.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Tota die verba mea exsecrabántur: * advérsum me omnes cogitatiónes eórum in malum.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Inhabitábunt et abscóndent: * ipsi calcáneum meum observábunt.',
              en: '',
            },
           
            {
              desc: '',
              id: '8',
              la: ' Sicut sustinuérunt ánimam meam, pro níhilo salvos fácies illos: * in ira pópulos confrínges.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Deus, vitam meam annuntiávi tibi: * posuísti lácrimas meas in conspéctu tuo.',
              en: '',
            },
            {
              desc: '',
              id: '9-2',
              la: 'Sicut et in promissióne tua: * tunc converténtur inimíci mei retrórsum:',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'In quacúmque die invocávero te: * ecce, cognóvi, quóniam Deus meus es.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'In Deo laudábo verbum, in Dómino laudábo sermónem: * in Deo sperávi, non timébo quid fáciat mihi homo.',
              en: '',
            },
            {
              desc: '',
              id: '12',
              la: 'In me sunt, Deus, vota tua, * quæ reddam, laudatiónes tibi.',
              en: '',
            },
            {
              desc: '',
              id: '13',
              la: 'Quóniam eripuísti ánimam meam de morte, et pedes meos de lapsu: * ut pláceam coram Deo in lúmine vivéntium.',
              en: '',
            },
          ],
        },
        {
          chapter: '56',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'Miserére mei, Deus, miserére mei: * quóniam in te confídit ánima mea.',
              en: '',
            },
            {
              desc: '',
              id: '2-2',
              la: 'Et in umbra alárum tuárum sperábo, * donec tránseat iníquitas.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Clamábo ad Deum altíssimum: * Deum qui benefécit mihi.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Misit de cælo, et liberávit me: * dedit in oppróbrium conculcántes me.',
              en: '',
            },
            {
              desc: '',
              id: '4-2',
              la: 'Misit Deus misericórdiam suam, et veritátem suam, * et erípuit ánimam meam de médio catulórum leónum: dormívi conturbátus.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Fílii hóminum dentes eórum arma et sagíttæ: * et lingua eórum gládius acútus.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Exaltáre super cælos, Deus, * et in omnem terram glória tua.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Láqueum paravérunt pédibus meis: * et incurvavérunt ánimam meam.',
              en: '',
            },
            {
              desc: '',
              id: '7-2',
              la: 'Fodérunt ante fáciem meam fóveam: * et incidérunt in eam.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Parátum cor meum, Deus, parátum cor meum: * cantábo, et psalmum dicam.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Exsúrge, glória mea, exsúrge, psaltérium et cíthara: * exsúrgam dilúculo.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Confitébor tibi in pópulis, Dómine: * et psalmum dicam tibi in géntibus:',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Quóniam magnificáta est usque ad cælos misericórdia tua, * et usque ad nubes véritas tua.',
              en: '',
            },
            {
              desc: '',
              id: '12',
              la: 'Exaltáre super cælos, Deus: * et super omnem terram glória tua.',
              en: '',
            },
            
            
            
          ],
        },
        {
          chapter: '57',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'Si vere útique justítiam loquímini: * recta judicáte, fílii hóminum.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Étenim in corde iniquitátes operámini: * in terra injustítias manus vestræ concínnant.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Alienáti sunt peccatóres a vulva, erravérunt ab útero: * locúti sunt falsa.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Furor illis secúndum similitúdinem serpéntis: * sicut áspidis surdæ, et obturántis aures suas,',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Quæ non exáudiet vocem incantántium: * et venéfici incantántis sapiénter.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Deus cónteret dentes eórum in ore ipsórum: * molas leónum confrínget Dóminus.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Ad níhilum devénient tamquam aqua decúrrens: * inténdit arcum suum donec infirméntur.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Sicut cera, quæ fluit, auferéntur: * supercécidit ignis, et non vidérunt solem.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Priúsquam intellégerent spinæ vestræ rhamnum: * sicut vivéntes, sic in ira absórbet eos.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Lætábitur justus cum víderit vindíctam: * manus suas lavábit in sánguine peccatóris.',
              en: '',
            },
            {
              desc: '',
              id: '12',
              la: 'Et dicet homo: Si útique est fructus justo: * útique est Deus júdicans eos in terra.',
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
          chapter: '5(2-11)',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'Éripe me de inimícis meis, Deus meus: * et ab insurgéntibus in me líbera me.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Éripe me de operántibus iniquitátem: * et de viris sánguinum salva me.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Quia ecce cepérunt ánimam meam: * irruérunt in me fortes',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Neque iníquitas mea, neque peccátum meum, Dómine: * sine iniquitáte cucúrri, et diréxi.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Exsúrge in occúrsum meum, et vide: * et tu, Dómine, Deus virtútum, Deus Israël,',
              en: '',
            },
            {
              desc: '',
              id: '6-2',
              la: 'Inténde ad visitándas omnes gentes: * non misereáris ómnibus, qui operántur iniquitátem.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Converténtur ad vésperam: et famem patiéntur ut canes, * et circuíbunt civitátem.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Ecce, loquéntur in ore suo, et gládius in lábiis eórum: * quóniam quis audívit?',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Et tu, Dómine, deridébis eos: * ad níhilum dedúces omnes gentes.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Fortitúdinem meam ad te custódiam, quia, Deus, suscéptor meus es: * Deus meus, misericórdia ejus prævéniet me.',
              en: '',
            },
            
            
          ],
        },
        {
          chapter: '58(12-18)',
          verses: [
            {
              desc: '',
              id: '12',
              la: 'Deus osténdet mihi super inimícos meos, ne occídas eos: * nequándo obliviscántur pópuli mei.',
              en: '',
            },
            {
              desc: '',
              id: '12-2',
              la: 'Dispérge illos in virtúte tua: * et depóne eos, protéctor meus, Dómine:',
              en: '',
            },
            {
              desc: '',
              id: '13',
              la: 'Delíctum oris eórum, sermónem labiórum ipsórum: * et comprehendántur in supérbia sua.',
              en: '',
            },
            {
              desc: '',
              id: '13-2',
              la: 'Et de exsecratióne et mendácio annuntiabúntur in consummatióne: * in ira consummatiónis, et non erunt.',
              en: '',
            },
            {
              desc: '',
              id: '14',
              la: 'Et de exsecratióne et mendácio annuntiabúntur in consummatióne: * in ira consummatiónis, et non erunt.',
              en: '',
            },
            {
              desc: '',
              id: '15',
              la: 'Converténtur ad vésperam: et famem patiéntur ut canes, * et circuíbunt civitátem.',
              en: '',
            },
            {
              desc: '',
              id: '16',
              la: 'Ipsi dispergéntur ad manducándum: * si vero non fúerint saturáti, et murmurábunt.',
              en: '',
            },
            {
              desc: '',
              id: '17',
              la: 'Ego autem cantábo fortitúdinem tuam: * et exsultábo mane misericórdiam tuam.',
              en: '',
            },
            {
              desc: '',
              id: '17-2',
              la: 'Quia factus es suscéptor meus, * et refúgium meum, in die tribulatiónis meæ.',
              en: '',
            },
            {
              desc: '',
              id: '18',
              la: 'Adjútor meus, tibi psallam, quia, Deus, suscéptor meus es: * Deus meus, misericórdia mea.',
              en: '',
            },
            
           
          ],
        },
        {
          chapter: '59',
          verses: [
            {
              desc: '',
              id: '3',
              la: 'Deus, repulísti nos, et destruxísti nos: * irátus es, et misértus es nobis.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: ' Commovísti terram, et conturbásti eam: * sana contritiónes ejus, quia commóta est.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Ostendísti pópulo tuo dura: * potásti nos vino compunctiónis.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Dedísti metuéntibus te significatiónem: * ut fúgiant a fácie arcus:',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Ut liberéntur dilécti tui: * salvum fac déxtera tua, et exáudi me.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Deus locútus est in sancto suo: * lætábor, et partíbor Síchimam: et convállem tabernaculórum metíbor.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Meus est Gálaad, et meus est Manásses: * et Éphraim fortitúdo cápitis mei.',
              en: '',
            },
            {
              desc: '',
              id: '9-2',
              la: 'Juda rex meus: * Moab olla spei meæ.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'In Idumǽam exténdam calceaméntum meum: * mihi alienígenæ súbditi sunt.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Quis dedúcet me in civitátem munítam? * quis dedúcet me usque in Idumǽam?',
              en: '',
            },
            {
              desc: '',
              id: '12',
              la: 'Nonne tu, Deus, qui repulísti nos? * et non egrediéris, Deus, in virtútibus nostris?',
              en: '',
            },
            {
              desc: '',
              id: '13',
              la: 'Da nobis auxílium de tribulatióne: * quia vana salus hóminis.',
              en: '',
            },
            {
              desc: '',
              id: '14',
              la: 'In Deo faciémus virtútem: * et ipse ad níhilum dedúcet tribulántes nos.',
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
    http: {path: '/sunday/none', verb: 'GET'},
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
          chapter: '127',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Beáti, omnes, ‡ qui timent Dóminum, * qui ámbulant in viis ejus.',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Labóres mánuum tuárum quia manducábis: * beátus es, et bene tibi erit.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Uxor tua sicut vitis abúndans, * in latéribus domus tuæ.',
              en: '',
            },
            {
              desc: '',
              id: '3-2',
              la: 'Fílii tui sicut novéllæ olivárum, * in circúitu mensæ tuæ.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Ecce, sic benedicétur homo, * qui timet Dóminum.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Benedícat tibi Dóminus ex Sion: * et vídeas bona Jerúsalem ómnibus diébus vitæ tuæ.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Et vídeas fílios filiórum tuórum, * pacem super Israël.',
              en: '',
            },
            
          ],
        },
        {
          chapter: '128',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Sæpe expugnavérunt me a juventúte mea, * dicat nunc Israël.',
              en: '',
            },
            {
              desc: '', 
              id: '2',
              la: 'Sæpe expugnavérunt me a juventúte mea: * étenim non potuérunt mihi.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Supra dorsum meum fabricavérunt peccatóres: * prolongavérunt iniquitátem suam..',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Dóminus justus concídit cervíces peccatórum: * confundántur et convertántur retrórsum omnes, qui odérunt Sion.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Fiant sicut fænum tectórum: * quod priúsquam evellátur, exáruit:',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'De quo non implévit manum suam qui metit, * et sinum suum qui manípulos cólligit.',
              en: '',
              rubrics: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Et non dixérunt qui præteríbant: Benedíctio Dómini super vos: * benedíximus vobis in nómine Dómini. ',
              en: '',
              rubrics: '',
            },
            
          ],
        },
        {
          chapter: '129',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'De profúndis ‡ clamávi ad te, Dómine: * Dómine, exáudi vocem meam:',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Fiant aures tuæ intendéntes, * in vocem deprecatiónis meæ.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Si iniquitátes observáveris, Dómine: * Dómine, quis sustinébit?',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Quia apud te propitiátio est: * et propter legem tuam sustínui te, Dómine.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Sustínuit ánima mea in verbo ejus: * sperávit ánima mea in Dómino.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'A custódia matutína usque ad noctem: * speret Israël in Dómino.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Quia apud Dóminum misericórdia: * et copiósa apud eum redémptio.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Et ipse rédimet Israël, * ex ómnibus iniquitátibus ejus.',
              en: '',
            },
            
            
            
           ],
        },
        {
          chapter: '130',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Dómine, ‡ non est exaltátum cor meum: * neque eláti sunt óculi mei.',
              en: '',
            },
            {
              desc: '',
              id: '1-2',
              la: 'Neque ambulávi in magnis: * neque in mirabílibus super me.',
              en: '',
              rubrics: 'fit reverentia',
            },
            {
              desc: '',
              id: '2',
              la: 'Si non humíliter sentiébam: * sed exaltávi ánimam meam:',
              en: '',
            },
            {
              desc: '',
              id: '2-2',
              la: 'Sicut ablactátus est super matre sua, * ita retribútio in ánima mea.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: ' Sicut sagíttæ in manu poténtis: * ita fílii excussórum.Speret Israël in Dómino, * ex hoc nunc et usque in sǽculum.',
              en: '',
            },
            
           
          ],
        },
        {
          chapter: '131',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Meménto, Dómine, David, * et omnis mansuetúdinis ejus:',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Sicut jurávit Dómino, * votum vovit Deo Jacob:',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Si introíero in tabernáculum domus meæ, * si ascéndero in lectum strati mei:',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Si dédero somnum óculis meis, * et pálpebris meis dormitatiónem:',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Et réquiem tempóribus meis: donec invéniam locum Dómino, * tabernáculum Deo Jacob.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Ecce, audívimus eam in Éphrata: * invénimus eam in campis silvæ.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Introíbimus in tabernáculum ejus: * adorábimus in loco, ubi stetérunt pedes ejus.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Surge, Dómine, in réquiem tuam, * tu et arca sanctificatiónis tuæ.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Sacerdótes tui induántur justítiam: * et sancti tui exsúltent.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Propter David, servum tuum, * non avértas fáciem Christi tui.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Jurávit Dóminus David veritátem, et non frustrábitur eam: * De fructu ventris tui ponam super sedem tuam.',
              en: '',
            },
            {
              desc: '',
              id: '12',
              la: 'Si custodíerint fílii tui testaméntum meum, * et testimónia mea hæc, quæ docébo eos:',
              en: '',
            },
            {
              desc: '',
              id: '12-2',
              la: 'Et fílii eórum usque in sǽculum, * sedébunt super sedem tuam.',
              en: '',
            },
            {
              desc: '',
              id: '13',
              la: 'Quóniam elégit Dóminus Sion: * elégit eam in habitatiónem sibi.',
              en: '',
            },
            {
              desc: '',
              id: '14',
              la: 'Hæc réquies mea in sǽculum sǽculi: * hic habitábo quóniam elégi eam.',
              en: '',
            },
            {
              desc: '',
              id: '15',
              la: 'Víduam ejus benedícens benedícam: * páuperes ejus saturábo pánibus.',
              en: '',
            },
            {
              desc: '',
              id: '16',
              la: 'Sacerdótes ejus índuam salutári: * et sancti ejus exsultatióne exsultábunt.',
              en: '',
            },
            {
              desc: '',
              id: '17',
              la: 'Illuc prodúcam cornu David, * parávi lucérnam Christo meo.',
              en: '',
            },
            {
              desc: '',
              id: '18',
              la: 'Inimícos ejus índuam confusióne: * super ipsum autem efflorébit sanctificátio mea.',
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
    http: {path: '/sunday/vespers', verb: 'GET'},
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
          chapter: '33(2-11)',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'Benedícam Dóminum in omni témpore: * semper laus ejus in ore meo.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'In Dómino laudábitur ánima mea: * áudiant mansuéti, et læténtur.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Magnificáte Dóminum mecum: * et exaltémus nomen ejus in idípsum.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Exquisívi Dóminum, et exaudívit me: * et ex ómnibus tribulatiónibus meis erípuit me.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Accédite ad eum, et illuminámini: * et fácies vestræ non confundéntur.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Iste pauper clamávit, et Dóminus exaudívit eum: * et de ómnibus tribulatiónibus ejus salvávit eum.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Elóquia Dómini, elóquia casta: * argéntum igne examinátum, probátum terræ purgátum séptuplum.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Gustáte, et vidéte quóniam suávis est Dóminus: * beátus vir, qui sperat in eo.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Timéte Dóminum, omnes sancti ejus: * quóniam non est inópia timéntibus eum.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Dívites eguérunt et esuriérunt: * inquiréntes autem Dóminum non minuéntur omni bono.',
              en: '',
            },
            
          ],
        },
        {
          chapter: '33(12-23)',
          verses: [
            {
              desc: '',
              id: '12',
              la: 'Veníte, fílii, audíte me: * timórem Dómini docébo vos.',
              en: '',
            },
            {
              desc: '',
              id: '13',
              la: 'Quis est homo qui vult vitam: * díligit dies vidére bonos?',
              en: '',
            },
            {
              desc: '',
              id: '14',
              la: 'Próhibe linguam tuam a malo: * et lábia tua ne loquántur dolum.',
              en: '',
            },
            {
              desc: '',
              id: '15',
              la: 'Divérte a malo, et fac bonum: * inquíre pacem, et perséquere eam.',
              en: '',
            },
            {
              desc: '',
              id: '16',
              la: 'Óculi Dómini super justos: * et aures ejus in preces eórum.',
              en: '',
            },
            {
              desc: '',
              id: '17',
              la: 'Vultus autem Dómini super faciéntes mala: * ut perdat de terra memóriam eórum.',
              en: '',
            },
            {
              desc: '',
              id: '18',
              la: 'Clamavérunt justi, et Dóminus exaudívit eos: * et ex ómnibus tribulatiónibus eórum liberávit eos.',
              en: '',
            },
            {
              desc: '',
              id: '19',
              la: 'Juxta est Dóminus iis, qui tribuláto sunt corde: * et húmiles spíritu salvábit.',
              en: '',
            },
            {
              desc: '',
              id: '20',
              la: 'Multæ tribulatiónes justórum: * et de ómnibus his liberábit eos Dóminus.',
              en: '',
            },
            {
              desc: '',
              id: '21',
              la: 'Custódit Dóminus ómnia ossa eórum: * unum ex his non conterétur.',
              en: '',
            },
            {
              desc: '',
              id: '22',
              la: 'Mors peccatórum péssima: * et qui odérunt justum, delínquent.',
              en: '',
            },
            {
              desc: '',
              id: '23',
              la: 'Rédimet Dóminus ánimas servórum suórum: * et non delínquent omnes qui sperant in eo.',
              en: '',
            },
            
           
          ],
        },
        {
          chapter: '60',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'Exáudi, Deus, deprecatiónem meam: * inténde oratióni meæ.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'A fínibus terræ ad te clamávi: * dum anxiarétur cor meum, in petra exaltásti me.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Deduxísti me, quia factus es spes mea: * turris fortitúdinis a fácie inimíci.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Inhabitábo in tabernáculo tuo in sǽcula: * prótegar in velaménto alárum tuárum.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Quóniam tu, Deus meus, exaudísti oratiónem meam: * dedísti hereditátem timéntibus nomen tuum.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Dies super dies regis adícies: * annos ejus usque in diem generatiónis et generatiónis.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Pérmanet in ætérnum in conspéctu Dei: * misericórdiam et veritátem ejus quis requíret?',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Sic psalmum dicam nómini tuo in sǽculum sǽculi: * ut reddam vota mea de die in diem.',
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
    http: {path: '/sunday/compline', verb: 'GET'},
    returns: {root: true, type: 'Object'},
  });
};

