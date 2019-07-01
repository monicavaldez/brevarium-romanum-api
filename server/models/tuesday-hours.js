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
          chapter: '34(1-10)',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Júdica, Dómine, nocéntes me, * expúgna impugnántes me.',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Apprehénde arma et scutum: * et exsúrge in adjutórium mihi.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Effúnde frámeam, et conclúde advérsus eos, qui persequúntur me: * dic ánimæ meæ: Salus tua ego sum.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Confundántur et revereántur, * quæréntes ánimam meam.',
              en: '',
            },
            {
              desc: '',
              id: '4-2',
              la: 'Avertántur retrórsum, et confundántur * cogitántes mihi mala.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Fiant tamquam pulvis ante fáciem venti: * et Ángelus Dómini coárctans eos.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Fiat via illórum ténebræ et lúbricum: * et Ángelus Dómini pérsequens eos.',
              en: '',
            },
            {
                desc: '',
                id: '7',
                la: 'Quóniam gratis abscondérunt mihi intéritum láquei sui: * supervácue exprobravérunt ánimam meam.',
                en: '',
              },
              {
                desc: '',
                id: '8',
                la: 'Véniat illi láqueus, quem ignórat: et cáptio, quam abscóndit, apprehéndat eum: * et in láqueum cadat in ipsum.',
                en: '',
              },
              
              {
                desc: '',
                id: '9',
                la: 'Ánima autem mea exsultábit in Dómino: * et delectábitur super salutári suo.',
                en: '',
              },
              {
                desc: '',
                id: '10',
                la: 'Omnia ossa mea dicent: * Dómine, quis símilis tibi?',
                en: '',
              }, 
              {
                desc: '',
                id: '10-2',
                la: 'Erípiens ínopem de manu fortiórum ejus: * egénum et páuperem a diripiéntibus eum.',
                en: '',
              }, 
              
          ],
        },
        {
          chapter: '34(11-17)',
          verses: [
            {
              desc: '',
              id: '11',
              la: 'Surgéntes testes iníqui, * quæ ignorábam interrogábant me.',
              en: '',
            },
            {
              desc: '',
              id: '22',
              la: 'Retribuébant mihi mala pro bonis: * sterilitátem ánimæ meæ.',
              en: '',
            },
            {
              desc: '',
              id: '13',
              la: 'Ego autem cum mihi molésti essent, * induébar cilício.',
              en: '',
            },
            {
              desc: '',
              id: '13-2',
              la: 'Humiliábam in jejúnio ánimam meam: * et orátio mea in sinu meo convertétur.',
              en: '',
            },
            {
              desc: '',
              id: '14',
              la: 'Quasi próximum, et quasi fratrem nostrum, sic complacébam: * quasi lugens et contristátus, sic humiliábar.',
              en: '',
            },
            {
              desc: '',
              id: '15',
              la: 'Et advérsum me lætáti sunt, et convenérunt: * congregáta sunt super me flagélla, et ignorávi.',
              en: '',
            },
            {
              desc: '',
              id: '16',
              la: 'Dissipáti sunt, nec compúncti, tentavérunt me, subsannavérunt me subsannatióne: * frenduérunt super me déntibus suis.',
              en: '',
            },
            {
              desc: '',
              id: '17',
              la: 'Dómine, quando respícies? * restítue ánimam meam a malignitáte eórum, a leónibus únicam meam.',
              en: '',
            },
            ,
          ],
        },
        {
          chapter: '34(18-28)',
          verses: [
            {
              desc: '',
              id: '18',
              la: 'Confitébor tibi in ecclésia magna, * in pópulo gravi laudábo te.',
              en: '',
            },
            {
              desc: '',
              id: '19',
              la: 'Non supergáudeant mihi qui adversántur mihi iníque: * qui odérunt me gratis et ánnuunt óculis.',
              en: '',
            },
            {
              desc: '',
              id: '20',
              la: 'Quóniam mihi quidem pacífice loquebántur: * et in iracúndia terræ loquéntes, dolos cogitábant.',
              en: '',
            },
            {
              desc: '',
              id: '21',
              la: 'Et dilatavérunt super me os suum: * dixérunt: Euge, euge, vidérunt óculi nostri.',
              en: '',
            },
            {
              desc: '',
              id: '22',
              la: 'Vidísti, Dómine, ne síleas: * Dómine, ne discédas a me.',
              en: '',
            },
            {
              desc: '',
              id: '23',
              la: 'Exsúrge et inténde judício meo: * Deus meus, et Dóminus meus in causam meam.',
              en: '',
            },
            {
              desc: '',
              id: '24',
              la: 'Júdica me secúndum justítiam tuam, Dómine, Deus meus, * et non supergáudeant mihi.',
              en: '',
            },
            {
              desc: '',
              id: '25',
              la: 'Non dicant in córdibus suis: Euge, euge, ánimæ nostræ: * nec dicant: Devorávimus eum.',
              en: '',
            },
            {
                desc: '',
                id: '26',
                la: 'Erubéscant et revereántur simul, * qui gratulántur malis meis.',
                en: '',
              },
              {
                desc: '',
                id: '26-2',
                la: 'Induántur confusióne et reveréntia * qui magna loquúntur super me.',
                en: '',
              },
              {
                desc: '',
                id: '27',
                la: 'Exsúltent et læténtur qui volunt justítiam meam: * et dicant semper: Magnificétur Dóminus qui volunt pacem servi ejus.',
                en: '',
              },
              {
                desc: '',
                id: '28',
                la: 'Et lingua mea meditábitur justítiam tuam, * tota die laudem tuam.',
                en: '',
              },
             
          ],
        },
        {
          chapter: '36 (1-15) ',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Noli æmulári in malignántibus: * neque zeláveris faciéntes iniquitátem.',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Quóniam tamquam fænum velóciter aréscent: * et quemádmodum ólera herbárum cito décident.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Spera in Dómino, et fac bonitátem: * et inhábita terram, et pascéris in divítiis ejus.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Delectáre in Dómino: * et dabit tibi petitiónes cordis tui.',
              en: '',
            },
            {
                desc: '',
                id: '5',
                la: 'Revéla Dómino viam tuam, et spera in eo: * et ipse fáciet.',
                en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Et edúcet quasi lumen justítiam tuam: et judícium tuum tamquam merídiem: * súbditus esto Dómino, et ora eum.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Noli æmulári in eo, qui prosperátur in via sua: * in hómine faciénte injustítias.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Désine ab ira, et derelínque furórem: * noli æmulári ut malignéris.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Quóniam qui malignántur, exterminabúntur: * sustinéntes autem Dóminum, ipsi hereditábunt terram.',
              en: '',
            },
            {
                desc: '',
                id: '10',
                la: 'Et adhuc pusíllum, et non erit peccátor: * et quǽres locum ejus et non invénies.',
                en: '',
            }, 
            {
                desc: '',
                id: '11',
                la: 'Mansuéti autem hereditábunt terram: * et delectabúntur in multitúdine pacis.',
                en: '',
            },
            {
                desc: '',
                id: '12',
                la: 'Observábit peccátor justum: * et stridébit super eum déntibus suis.',
                en: '',
            },
            {
                desc: '',
                id: '13',
                la: 'Dóminus autem irridébit eum: * quóniam próspicit quod véniet dies ejus.',
                en: '',
            },
            {
                desc: '',
                id: '14',
                la: 'Gládium evaginavérunt peccatóres: * intendérunt arcum suum,',
                en: '',
            },
            {
                desc: '',
                id: '14-2',
                la: 'Ut deíciant páuperem et ínopem: * ut trucídent rectos corde.',
                en: '',
            },
            {
                desc: '',
                id: '15',
                la: 'Gládius eórum intret in corda ipsórum: * et arcus eórum confringátur.',
                en: '',
            },
         
          ],
        },
        {
          chapter: '36 (16-29)',
          verses: [

            {
              desc: '',
              id: '16',
              la: 'Mélius est módicum justo, * super divítias peccatórum multas.',
              en: '',
            },
            {
              desc: '',
              id: '17',
              la: 'Quóniam brácchia peccatórum conteréntur: * confírmat autem justos Dóminus.',
              en: '',
            },
            {
              desc: '',
              id: '18',
              la: ' Novit Dóminus dies immaculatórum: * et heréditas eórum in ætérnum erit.',
              en: '',
            },
            {
              desc: '',
              id: '19',
              la: 'Non confundéntur in témpore malo, et in diébus famis saturabúntur: * quia peccatóres períbunt.',
              en: '',
            },
            {
              desc: '',
              id: '20',
              la: 'Inimíci vero Dómini mox ut honorificáti fúerint et exaltáti: * deficiéntes, quemádmodum fumus defícient.',
              en: '',
            },
            {
              desc: '',
              id: '21',
              la: 'Mutuábitur peccátor, et non solvet: * justus autem miserétur et tríbuet.',
              en: '',
            },
            {
              desc: '',
              id: '22',
              la: 'Quia benedicéntes ei hereditábunt terram: * maledicéntes autem ei disperíbunt.',
              en: '',
            },
            {
              desc: '',
              id: '23',
              la: 'Apud Dóminum gressus hóminis dirigéntur: * et viam ejus volet.',
              en: '',
            },
            {
              desc: '',
              id: '24',
              la: 'Cum cecíderit non collidétur: * quia Dóminus suppónit manum suam.',
              en: '',
            },
            {
              desc: '',
              id: '25',
              la: 'Júnior fui, étenim sénui: * et non vidi justum derelíctum, nec semen ejus quǽrens panem.',
              en: '',
            },
            {
              desc: '',
              id: '26',
              la: 'Tota die miserétur et cómmodat: * et semen illíus in benedictióne erit.',
              en: '',
            },
            {
                desc: '',
                id: '27',
                la: 'Declína a malo, et fac bonum: * et inhábita in sǽculum sǽculi.',
                en: '',
            },
            {
                desc: '',
                id: '28',
                la: 'Quia Dóminus amat judícium, et non derelínquet sanctos suos: * in ætérnum conservabúntur.',
                en: '',
            },
            {
                desc: '',
                id: '28-2',
                la: 'Injústi puniéntur: * et semen impiórum períbit.',
                en: '',
            },
            {
                desc: '',
                id: '29',
                la: 'Justi autem hereditábunt terram: * et inhabitábunt in sǽculum sǽculi super eam.',
                en: '',
            },
            
          ],
        },
        {
          chapter: '36(30-40)',
          verses: [
            {
              desc: '',
              id: '30',
              la: 'Os justi meditábitur sapiéntiam, * et lingua ejus loquétur judícium.',
              en: '',
            },
            {
              desc: '',
              id: '31',
              la: 'Lex Dei ejus in corde ipsíus, * et non supplantabúntur gressus ejus.',
              en: '',
            },
            {
              desc: '',
              id: '32',
              la: 'Consíderat peccátor justum: * et quǽrit mortificáre eum',
              en: '',
            },
            {
              desc: '',
              id: '33',
              la: 'Dóminus autem non derelínquet eum in mánibus ejus: * nec damnábit eum, cum judicábitur illi.',
              en: '',
            },
            {
              desc: '',
              id: '34',
              la: 'Exspécta Dóminum, et custódi viam ejus: et exaltábit te ut hereditáte cápias terram: * cum períerint peccatóres vidébis.',
              en: '',
            },
            {
              desc: '',
              id: '35',
              la: 'Vidi ímpium superexaltátum, * et elevátum sicut cedros Líbani.',
              en: '',
            },
            {
              desc: '',
              id: '36',
              la: 'Et transívi, et ecce non erat: * et quæsívi eum, et non est invéntus locus ejus.',
              en: '',
            },
            {
              desc: '',
              id: '37',
              la: 'Custódi innocéntiam, et vide æquitátem: * quóniam sunt relíquiæ hómini pacífico.',
              en: '',
            },
            {
              desc: '',
              id: '38',
              la: 'Injústi autem disperíbunt simul: * relíquiæ impiórum interíbunt.',
              en: '',
            },
            {
              desc: '',
              id: '39',
              la: 'Salus autem justórum a Dómino: * et protéctor eórum in témpore tribulatiónis.',
              en: '',
            },
            {
              desc: '',
              id: '40',
              la: 'Et adjuvábit eos Dóminus et liberábit eos: * et éruet eos a peccatóribus, et salvábit eos: quia speravérunt in eo.',
              en: '',
            },
           
          ],
        },
        {
          chapter: '37(2-11)',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'Dómine, ne in furóre tuo árguas me, * neque in ira tua corrípias me.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Quóniam sagíttæ tuæ infíxæ sunt mihi: * et confirmásti super me manum tuam.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Non est sánitas in carne mea a fácie iræ tuæ: * non est pax óssibus meis a fácie peccatórum meórum.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Quóniam iniquitátes meæ supergréssæ sunt caput meum: * et sicut onus grave gravátæ sunt super me.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Putruérunt et corrúptæ sunt cicatríces meæ, * a fácie insipiéntiæ meæ.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Miser factus sum, et curvátus sum usque in finem: * tota die contristátus ingrediébar.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Quóniam lumbi mei impléti sunt illusiónibus: * et non est sánitas in carne mea.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Afflíctus sum, et humiliátus sum nimis: * rugiébam a gémitu cordis mei.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Dómine, ante te omne desidérium meum: * et gémitus meus a te non est abscónditus.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Cor meum conturbátum est, derelíquit me virtus mea: * et lumen oculórum meórum, et ipsum non est mecum.',
              en: '',
            },
            
          ],
        },
        {
          chapter: '37(12-23)',
          verses: [
            {
              desc: '',
              id: '12',
              la: 'Amíci mei, et próximi mei * advérsum me appropinquavérunt, et stetérunt.',
              en: '',
            },
            {
              desc: '',
              id: '12-2',
              la: 'Et qui juxta me erant, de longe stetérunt: * et vim faciébant qui quærébant ánimam meam.',
              en: '',
            },
            {
              desc: '',
              id: '13',
              la: 'Et qui inquirébant mala mihi, locúti sunt vanitátes: * et dolos tota die meditabántur.',
              en: '',
            },
            {
              desc: '',
              id: '14',
              la: 'Ego autem tamquam surdus non audiébam: * et sicut mutus non apériens os suum.',
              en: '',
            },
            {
              desc: '',
              id: '15',
              la: 'Et factus sum sicut homo non áudiens: * et non habens in ore suo redargutiónes.',
              en: '',
            },
            {
              desc: '',
              id: '16',
              la: 'Quóniam in te, Dómine, sperávi: * tu exáudies me, Dómine, Deus meus.',
              en: '',
            },
            {
              desc: '',
              id: '17',
              la: 'Quia dixi: Nequándo supergáudeant mihi inimíci mei: * et dum commovéntur pedes mei, super me magna locúti sunt.',
              en: '',
            },
            {
              desc: '',
              id: '18',
              la: 'Quóniam ego in flagélla parátus sum: * et dolor meus in conspéctu meo semper.',
              en: '',
            },
            {
                desc: '',
                id: '19',
                la: 'Quóniam iniquitátem meam annuntiábo: * et cogitábo pro peccáto meo.',
                en: '',
            },
            {
                desc: '',
                id: '20',
                la: 'Inimíci autem mei vivunt, et confirmáti sunt super me: * et multiplicáti sunt qui odérunt me iníque.',
                en: '',
            },
            {
                desc: '',
                id: '21',
                la: 'Qui retríbuunt mala pro bonis, detrahébant mihi: * quóniam sequébar bonitátem.',
                en: '',
            }, 
            {
                desc: '',
                id: '22',
                la: 'Ne derelínquas me, Dómine, Deus meus: * ne discésseris a me.',
                en: '',
            }, 
            {
                desc: '',
                id: '23',
                la: 'Inténde in adjutórium meum, * Dómine, Deus, salútis meæ.',
                en: '',
            }, 
            
          ],
        },
        {
          chapter: '38',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'Dixi: Custódiam vias meas: * ut non delínquam in lingua mea.',
              en: '',
            },
            {
              desc: '',
              id: '2-2',
              la: 'Pósui ori meo custódiam, * cum consísteret peccátor advérsum me.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Obmútui, et humiliátus sum, et sílui a bonis: * et dolor meus renovátus est.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Concáluit cor meum intra me: * et in meditatióne mea exardéscet ignis.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Locútus sum in lingua mea: * Notum fac mihi, Dómine, finem meum.',
              en: '',
            },
            {
              desc: '',
              id: '5-2',
              la: 'Et númerum diérum meórum quis est: * ut sciam quid desit mihi.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Ecce mensurábiles posuísti dies meos: * et substántia mea tamquam níhilum ante te.',
              en: '',
            },
            {
              desc: '',
              id: '6-2',
              la: 'Verúmtamen univérsa vánitas, * omnis homo vivens.',
              en: '',
            },
            {
                desc: '',
                id: '7',
                la: 'Verúmtamen in imágine pertránsit homo: * sed et frustra conturbátur.',
                en: '',
            }, 
            {
                desc: '',
                id: '7-2',
                la: 'Thesaurízat: * et ignórat cui congregábit ea.',
                en: '',
            }, 
            {
                desc: '',
                id: '8',
                la: 'Et nunc quæ est exspectátio mea? Nonne Dóminus? * Et substántia mea apud te est.',
                en: '',
            }, 
            {
                desc: '',
                id: '9',
                la: 'Ab ómnibus iniquitátibus meis érue me: * oppróbrium insipiénti dedísti me.',
                en: '',
            }, 
            {
                desc: '',
                id: '10',
                la: 'Obmútui, et non apérui os meum, quóniam tu fecísti: * ámove a me plagas tuas.',
                en: '',
            }, 
            {
                desc: '',
                id: '12',
                la: 'A fortitúdine manus tuæ ego deféci in increpatiónibus: * propter iniquitátem corripuísti hóminem.',
                en: '',
            }, 
            {
                desc: '',
                id: '12-2',
                la: 'Et tabéscere fecísti sicut aráneam ánimam ejus: * verúmtamen vane conturbátur omnis homo.',
                en: '',
            }, 
            {
              desc: '',
              id: '13',
              la: 'Exáudi oratiónem meam, Dómine, et deprecatiónem meam: * áuribus pércipe lácrimas meas.',
              en: '',
          }, 
          {
            desc: '',
            id: '13-2',
            la: 'Ne síleas: quóniam ádvena ego sum apud te, et peregrínus, * sicut omnes patres mei.',
            en: '',
        }, 
        {
          desc: '',
          id: '14',
          la: 'Remítte mihi, ut refrígerer priúsquam ábeam, * et ámplius non ero.',
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
          chapter: '95',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Cantáte Dómino cánticum novum: * cantáte Dómino, omnis terra.',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Cantáte Dómino, et benedícite nómini ejus: * annuntiáte de die in diem salutáre ejus.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Annuntiáte inter gentes glóriam ejus, * in ómnibus pópulis mirabília ejus.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Quóniam magnus Dóminus, et laudábilis nimis: * terríbilis est super omnes deos.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Quóniam omnes dii géntium dæmónia: * Dóminus autem cælos fecit.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Conféssio, et pulchritúdo in conspéctu ejus: * sanctimónia et magnificéntia in sanctificatióne ejus.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Afférte Dómino, pátriæ géntium, afférte Dómino glóriam et honórem: * afférte Dómino glóriam nómini ejus.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Tóllite hóstias, et introíte in átria ejus: * adoráte Dóminum in átrio sancto ejus.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Commoveátur a fácie ejus univérsa terra: * dícite in géntibus quia Dóminus regnávit.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Étenim corréxit orbem terræ qui non commovébitur: * judicábit pópulos in æquitáte.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Læténtur cæli, et exsúltet terra: commoveátur mare, et plenitúdo ejus: * gaudébunt campi, et ómnia quæ in eis sunt.',
              en: '',
            },
            {
              desc: '',
              id: '12',
              la: 'Tunc exsultábunt ómnia ligna silvárum a fácie Dómini, quia venit: * quóniam venit judicáre terram.',
              en: '',
            },
            {
              desc: '',
              id: '13',
              la: 'Judicábit orbem terræ in æquitáte, * et pópulos in veritáte sua.',
              en: '',
            },
          ],
        },
        {
          chapter: '42',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Júdica me, Deus, et discérne causam meam de gente non sancta, * ab hómine iníquo, et dolóso érue me.',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Quia tu es, Deus, fortitúdo mea: * quare me repulísti? et quare tristis incédo, dum afflígit me inimícus?',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Emítte lucem tuam et veritátem tuam: * ipsa me deduxérunt, et adduxérunt in montem sanctum tuum, et in tabernácula tua.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Et introíbo ad altáre Dei: * ad Deum, qui lætíficat juventútem meam.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Confitébor tibi in cíthara, Deus, Deus meus: * quare tristis es, ánima mea? et quare contúrbas me?',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Spera in Deo, quóniam adhuc confitébor illi: * salutáre vultus mei, et Deus meus.',
              en: '',
            },
            
          ],
        },
        {
          chapter: '66',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'Deus, misereátur nostri, et benedícat nobis: * illúminet vultum suum super nos, et misereátur nostri.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Ut cognoscámus in terra viam tuam, * in ómnibus géntibus salutáre tuum.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Confiteántur tibi pópuli, Deus: * confiteántur tibi pópuli omnes.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Læténtur et exsúltent gentes: * quóniam júdicas pópulos in æquitáte, et gentes in terra dírigis.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Confiteántur tibi pópuli, Deus, confiteántur tibi pópuli omnes: * terra dedit fructum suum.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Benedícat nos Deus, Deus noster, benedícat nos Deus: * et métuant eum omnes fines terræ.',
              en: '',
            },
           
          ],
        },
        {
          desc: 'Canticum Tobiæ',
          chapter: 'Tob. 13:1-11',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Magnus es, Dómine, in ætérnum, * et in ómnia sǽcula regnum tuum:',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Quóniam tu flagéllas, et salvas: dedúcis ad ínferos, et redúcis: * et non est qui effúgiat manum tuam.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Confitémini Dómino, fílii Israël, * et in conspéctu géntium laudáte eum:',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Quóniam ídeo dispérsit vos inter gentes, quæ ignórant eum, * ut vos enarrétis mirabília ejus,',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Et faciátis scire eos, * quia non est álius Deus omnípotens præter eum.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Ipse castigávit nos propter iniquitátes nostras: * et ipse salvábit nos propter misericórdiam suam.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Aspícite ergo quæ fecit nobíscum, et cum timóre et tremóre confitémini illi: * Regémque sæculórum exaltáte in opéribus vestris.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Ego autem in terra captivitátis meæ confitébor illi: * quóniam osténdit majestátem suam in gentem peccatrícem.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Convertímini ítaque, peccatóres, et fácite justítiam coram Deo, * credéntes quod fáciat vobíscum misericórdiam suam:',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Ego autem, et ánima mea * in eo lætábimur.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Benedícite Dóminum, omnes elécti ejus: * ágite dies lætítiæ, et confitémini illi.',
              en: '',
            },
            
            
          ],
        },
        {
          chapter: '134',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Laudáte nomen Dómini, * laudáte, servi, Dóminum.',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Qui statis in domo Dómini, * in átriis domus Dei nostri.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Laudáte Dóminum, quia bonus Dóminus: * psállite nómini ejus, quóniam suáve.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Quóniam Jacob elégit sibi Dóminus, * Israël in possessiónem sibi.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Quia ego cognóvi quod magnus est Dóminus, * et Deus noster præ ómnibus diis.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Omnia quæcúmque vóluit, Dóminus fecit in cælo, et in terra, * in mari, et in ómnibus abýssis.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Edúcens nubes ab extrémo terræ: * fúlgura in plúviam fecit.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Qui prodúcit ventos de thesáuris suis: * qui percússit primogénita Ægýpti ab hómine usque ad pecus.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Et misit signa, et prodígia in médio tui, Ægýpte: * in Pharaónem, et in omnes servos ejus.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Qui percússit gentes multas: * et occídit reges fortes:',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Sehon, regem Amorrhæórum, et Og, regem Basan, * et ómnia regna Chánaan.',
              en: '',
            },
            {
              desc: '',
              id: '12',
              la: 'Et dedit terram eórum hereditátem, * hereditátem Israël, pópulo suo.',
              en: '',
            },
            {
              desc: '',
              id: '13',
              la: 'Dómine, nomen tuum in ætérnum: * Dómine, memoriále tuum in generatiónem et generatiónem.',
              en: '',
            },
            {
              desc: '',
              id: '14',
              la: 'Quia judicábit Dóminus pópulum suum: * et in servis suis deprecábitur.',
              en: '',
            },
            {
              desc: '',
              id: '15',
              la: 'Simulácra géntium argéntum, et aurum, * ópera mánuum hóminum.',
              en: '',
            },
            {
              desc: '',
              id: '16',
              la: 'Os habent, et non loquéntur: * óculos habent, et non vidébunt.',
              en: '',
            },
            {
              desc: '',
              id: '17',
              la: 'Aures habent, et non áudient: * neque enim est spíritus in ore ipsórum.',
              en: '',
            },
            {
              desc: '',
              id: '18',
              la: 'Símiles illis fiant qui fáciunt ea: * et omnes qui confídunt in eis.',
              en: '',
            },
            {
              desc: '',
              id: '19',
              la: 'Domus Israël, benedícite Dómino: * domus Aaron, benedícite Dómino.',
              en: '',
            },
            {
              desc: '',
              id: '20',
              la: 'Domus Levi, benedícite Dómino: * qui timétis Dóminum, benedícite Dómino.',
              en: '',
            },
            {
              desc: '',
              id: '21',
              la: 'Benedíctus Dóminus ex Sion, * qui hábitat in Jerúsalem.',
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
          chapter: '24(1-7)',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Ad te, Dómine, levávi ánimam meam: * Deus meus, in te confído, non erubéscam.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Neque irrídeant me inimíci mei: * étenim univérsi, qui sústinent te, non confundéntur.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Confundántur omnes iníqua agéntes * supervácue.',
              en: '',
            },
            {
              desc: '',
              id: '4-2',
              la: 'Vias tuas, Dómine, demónstra mihi: * et sémitas tuas édoce me.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Dírige me in veritáte tua, et doce me: * quia tu es, Deus, salvátor meus, et te sustínui tota die.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Reminíscere miseratiónum tuárum, Dómine, * et misericordiárum tuárum, quæ a sǽculo sunt.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Delícta juventútis meæ, * et ignorántias meas ne memíneris.',
              en: '',
            },
            {
              desc: '',
              id: '7-2',
              la: 'Secúndum misericórdiam tuam meménto mei tu: * propter bonitátem tuam, Dómine.',
              en: '',
            },
            
            
            
          ],
        },
        {
          chapter: '24(8-14)',
          verses: [
            {
              desc: '',
              id: '8',
              la: 'Dulcis et rectus Dóminus: * propter hoc legem dabit delinquéntibus in via.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Díriget mansuétos in judício: * docébit mites vias suas.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Univérsæ viæ Dómini, misericórdia et véritas, * requiréntibus testaméntum ejus et testimónia ejus.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Propter nomen tuum, Dómine, propitiáberis peccáto meo: * multum est enim.',
              en: '',
            },
            {
              desc: '',
              id: '12',
              la: 'Quis est homo qui timet Dóminum? * legem státuit ei in via, quam elégit.',
              en: '',
            },
            {
              desc: '',
              id: '13',
              la: 'Ánima ejus in bonis demorábitur: * et semen ejus hereditábit terram.',
              en: '',
            },
            {
              desc: '',
              id: '14',
              la: 'Firmaméntum est Dóminus timéntibus eum: * et testaméntum ipsíus ut manifestétur illis.',
              en: '',
            },
            
            
          ],
        },
        {
          chapter: '24(15-22)',
          verses: [
            {
              desc: 'Ghimel',
              id: '15',
              la: 'Óculi mei semper ad Dóminum: * quóniam ipse evéllet de láqueo pedes meos.',
              en: '',
            },
            {
              desc: '',
              id: '16',
              la: 'Réspice in me, et miserére mei: * quia únicus et pauper sum ego.',
              en: '',
            },
            {
              desc: '',
              id: '17',
              la: 'Tribulatiónes cordis mei multiplicátæ sunt: * de necessitátibus meis érue me.',
              en: '',
            },
            {
              desc: '',
              id: '18',
              la: 'Vide humilitátem meam, et labórem meum: * et dimítte univérsa delícta mea.',
              en: '',
            },
            {
              desc: '',
              id: '19',
              la: 'Réspice inimícos meos quóniam multiplicáti sunt, * et ódio iníquo odérunt me.',
              en: '',
            },
            {
              desc: '',
              id: '20',
              la: 'Custódi ánimam meam, et érue me: * non erubéscam quóniam sperávi in te.',
              en: '',
            },
            {
              desc: '',
              id: '21',
              la: 'Innocéntes et recti adhæsérunt mihi: * quia sustínui te.',
              en: '',
            },
            {
              desc: '',
              id: '22',
              la: 'Líbera, Deus, Israël, * ex ómnibus tribulatiónibus suis',
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
          chapter: '39(2-9)',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'Exspéctans exspectávi Dóminum, * et inténdit mihi.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Et exaudívit preces meas: * et edúxit me de lacu misériæ, et de luto fæcis',
              en: '',
            },
            {
              desc: '',
              id: '3-2',
              la: 'Et státuit super petram pedes meos: * et diréxit gressus meos.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Et immísit in os meum cánticum novum, * carmen Deo nostro.',
              en: '',
            },
            {
              desc: '',
              id: '4-2',
              la: 'Vidébunt multi, et timébunt: * et sperábunt in Dómino.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Beátus vir, cujus est nomen Dómini spes ejus: * et non respéxit in vanitátes et insánias falsas.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Multa fecísti tu, Dómine, Deus meus, mirabília tua: * et cogitatiónibus tuis non est qui símilis sit tibi.',
              en: '',
            },
            {
              desc: '',
              id: '6-2',
              la: 'Annuntiávi et locútus sum: * multiplicáti sunt super númerum.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Sacrifícium et oblatiónem noluísti: * aures autem perfecísti mihi.',
              en: '',
            },
            {
              desc: '',
              id: '7-2',
              la: 'Holocáustum et pro peccáto non postulásti: * tunc dixi: Ecce, vénio.',
              en: '',
            },
           
            
          ],
        },
        {
          chapter: '39(10-14)',
          verses: [
            {
              desc: '',
              id: '10',
              la: 'Annuntiávi justítiam tuam in ecclésia magna, * ecce, lábia mea non prohibébo: Dómine, tu scisti.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Justítiam tuam non abscóndi in corde meo: * veritátem tuam et salutáre tuum dixi.',
              en: '',
            },
            {
              desc: '',
              id: '11-2',
              la: 'Non abscóndi misericórdiam tuam et veritátem tuam * a concílio multo.',
              en: '',
            },
            {
              desc: '',
              id: '12',
              la: 'Tu autem, Dómine, ne longe fácias miseratiónes tuas a me: * misericórdia tua et véritas tua semper suscepérunt me.',
              en: '',
            },
            {
              desc: '',
              id: '13',
              la: 'Quóniam circumdedérunt me mala, quorum non est númerus: * comprehendérunt me iniquitátes meæ, et non pótui ut vidérem.',
              en: '',
            },
            {
              desc: '',
              id: '13-2',
              la: 'Multiplicátæ sunt super capíllos cápitis mei: * et cor meum derelíquit me.',
              en: '',
            },
            {
              desc: '',
              id: '14',
              la: ' Compláceat tibi, Dómine, ut éruas me: * Dómine, ad adjuvándum me réspice.',
              en: '',
            },
            
           
          ],
        },
        {
          chapter: '39(15-18)',
          verses: [
            {
              desc: '',
              id: '15',
              la: 'Confundántur et revereántur simul, qui quærunt ánimam meam, * ut áuferant eam.',
              en: '',
            },
            {
              desc: '',
              id: '15-2',
              la: 'Convertántur retrórsum, et revereántur, * qui volunt mihi mala.',
              en: '',
            },
            {
              desc: '',
              id: '16',
              la: 'Ferant conféstim confusiónem suam, * qui dicunt mihi: Euge, euge.',
              en: '',
            },
            {
              desc: '',
              id: '17',
              la: 'Exsúltent et læténtur super te omnes quæréntes te: * et dicant semper: Magnificétur Dóminus: qui díligunt salutáre tuum.',
              en: '',
            },
            {
              desc: '',
              id: '18',
              la: 'Ego autem mendícus sum, et pauper: * Dóminus sollícitus est mei.',
              en: '',
            },
            {
              desc: '',
              id: '18-2',
              la: 'Adjútor meus, et protéctor meus tu es: * Deus meus, ne tardáveris.',
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
          chapter: '40',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'Beátus qui intéllegit super egénum, et páuperem: * in die mala liberábit eum Dóminus.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Dóminus consérvet eum, et vivíficet eum, et beátum fáciat eum in terra: * et non tradat eum in ánimam inimicórum ejus.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Dóminus opem ferat illi super lectum dolóris ejus: * univérsum stratum ejus versásti in infirmitáte ejus.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Ego dixi: Dómine, miserére mei: * sana ánimam meam, quia peccávi tibi.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Inimíci mei dixérunt mala mihi: * Quando moriétur, et períbit nomen ejus?',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Et si ingrediebátur ut vidéret, vana loquebátur: * cor ejus congregávit iniquitátem sibi.',
              en: '',
            },
            {
              desc: '',
              id: '7-2',
              la: 'Egrediebátur foras, * et loquebátur in idípsum.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Advérsum me susurrábant omnes inimíci mei: * advérsum me cogitábant mala mihi.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Verbum iníquum constituérunt advérsum me: * Numquid qui dormit non adíciet ut resúrgat?',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Étenim homo pacis meæ, in quo sperávi: * qui edébat panes meos, magnificávit super me supplantatiónem.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Tu autem, Dómine, miserére mei, et resúscita me: * et retríbuam eis.',
              en: '',
            },
            {
              desc: '',
              id: '12',
              la: 'In hoc cognóvi quóniam voluísti me: * quóniam non gaudébit inimícus meus super me.',
              en: '',
            },
            {
              desc: '',
              id: '13',
              la: 'Me autem propter innocéntiam suscepísti: * et confirmásti me in conspéctu tuo in ætérnum.',
              en: '',
            },
            {
              desc: '',
              id: '14',
              la: 'Benedíctus Dóminus, Deus Israël, a sǽculo et usque in sǽculum: * fiat, fiat.',
              en: '',
            },
          ],
        },
        {
          chapter: '41(2-6)',
          verses: [
            {
              desc: 'Samech',
              id: '2',
              la: 'Quemádmodum desíderat cervus ad fontes aquárum: * ita desíderat ánima mea ad te, Deus.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Sitívit ánima mea ad Deum fortem vivum: * quando véniam, et apparébo ante fáciem Dei?',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Fuérunt mihi lácrimæ meæ panes die ac nocte: * dum dícitur mihi quotídie: Ubi est Deus tuus?',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Hæc recordátus sum, et effúdi in me ánimam meam: * quóniam transíbo in locum tabernáculi admirábilis, usque ad domum Dei.',
              en: '',
            },
            {
              desc: '',
              id: '5-2',
              la: 'In voce exsultatiónis, et confessiónis: * sonus epulántis.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Quare tristis es, ánima mea? * et quare contúrbas me?',
              en: '',
            },
            {
              desc: '',
              id: '6-2',
              la: 'Spera in Deo, quóniam adhuc confitébor illi: * salutáre vultus mei, et Deus meus.',
              en: '',
            },
            
            
            
          ],
        },
        {
          chapter: '41(7-12)',
          verses: [
            {
              desc: '',
              id: '7',
              la: 'Ad meípsum ánima mea conturbáta est: * proptérea memor ero tui de terra Jordánis, et Hermóniim a monte módico.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Abýssus abýssum ínvocat, * in voce cataractárum tuárum',
              en: '',
            },
            {
              desc: '',
              id: '8-2',
              la: 'Omnia excélsa tua, et fluctus tui * super me transiérunt.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'In die mandávit Dóminus misericórdiam suam: * et nocte cánticum ejus.',
              en: '',
            },
            {
              desc: '',
              id: '9-2',
              la: 'Apud me orátio Deo vitæ meæ, * dicam Deo: Suscéptor meus es.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Quare oblítus es mei? * et quare contristátus incédo, dum afflígit me inimícus?',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Dum confringúntur ossa mea, * exprobravérunt mihi qui tríbulant me inimíci mei.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Dum dicunt mihi per síngulos dies: Ubi est Deus tuus? * quare tristis es, ánima mea? et quare contúrbas me?',
              en: '',
            },
            {
              desc: 'Ain',
              id: '12',
              la: 'Spera in Deo, quóniam adhuc confitébor illi: * salutáre vultus mei, et Deus meus.',
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
          chapter: '43(2-9)',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'Deus áuribus nostris audívimus: * patres nostri annuntiavérunt nobis.',
              en: '',
            },
            {
              desc: '',
              id: '2-2',
              la: 'Opus, quod operátus es in diébus eórum, * et in diébus antíquis.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Manus tua gentes dispérdidit, et plantásti eos: * afflixísti pópulos, et expulísti eos.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Nec enim in gládio suo possedérunt terram, * et brácchium eórum non salvávit eos:',
              en: '',
            },
            {
              desc: '',
              id: '4-2',
              la: 'Sed déxtera tua, et brácchium tuum, et illuminátio vultus tui: * quóniam complacuísti in eis.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Tu es ipse Rex meus et Deus meus: * qui mandas salútes Jacob.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'In te inimícos nostros ventilábimus cornu: * et in nómine tuo spernémus insurgéntes in nobis.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Non enim in arcu meo sperábo: * et gládius meus non salvábit me.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Salvásti enim nos de affligéntibus nos: * et odiéntes nos confudísti.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Salvásti enim nos de affligéntibus nos: * et odiéntes nos confudísti.',
              en: '',
            },
            
            
          ],
        },
        {
          chapter: '43(10-20)',
          verses: [
            {
              desc: '',
              id: '10',
              la: 'Nunc autem repulísti et confudísti nos: * et non egrediéris, Deus, in virtútibus nostris.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Avertísti nos retrórsum post inimícos nostros: * et qui odérunt nos, diripiébant sibi.',
              en: '',
            },
            {
              desc: '',
              id: '12',
              la: 'Dedísti nos tamquam oves escárum: * et in géntibus dispersísti nos.',
              en: '',
            },
            {
              desc: '',
              id: '13',
              la: 'Vendidísti pópulum tuum sine prétio: * et non fuit multitúdo in commutatiónibus eórum.',
              en: '',
            },
            {
              desc: '',
              id: '14',
              la: 'Posuísti nos oppróbrium vicínis nostris, * subsannatiónem et derísum his, qui sunt in circúitu nostro.',
              en: '',
            },
            {
              desc: '',
              id: '15',
              la: 'Posuísti nos in similitúdinem géntibus: * commotiónem cápitis in pópulis.',
              en: '',
            },
            {
              desc: '',
              id: '16',
              la: 'Tota die verecúndia mea contra me est, * et confúsio faciéi meæ coopéruit me.',
              en: '',
            },
            {
              desc: '',
              id: '17',
              la: 'A voce exprobrántis, et obloquéntis: * a fácie inimíci, et persequéntis.',
              en: '',
            },
            {
              desc: 'Res',
              id: '18',
              la: 'Hæc ómnia venérunt super nos, nec oblíti sumus te: * et iníque non égimus in testaménto tuo.',
              en: '',
            },
            {
              desc: '',
              id: '19',
              la: 'Et non recéssit retro cor nostrum: * et declinásti sémitas nostras a via tua:',
              en: '',
            },
            {
              desc: '',
              id: '20',
              la: 'Quóniam humiliásti nos in loco afflictiónis, * et coopéruit nos umbra mortis.',
              en: '',
            },
           
          ],
        },
        {
          chapter: '43(21-26)',
          verses: [
            {
              desc: '',
              id: '21',
              la: 'Si oblíti sumus nomen Dei nostri, * et si expándimus manus nostras ad deum aliénum:',
              en: '',
            },
            {
              desc: '',
              id: '22',
              la: 'Nonne Deus requíret ista? * ipse enim novit abscóndita cordis.',
              en: '',
            },
            {
              desc: '',
              id: '22-2',
              la: 'Quóniam propter te mortificámur tota die: * æstimáti sumus sicut oves occisiónis.',
              en: '',
            },
            {
              desc: '',
              id: '23',
              la: 'Exsúrge, quare obdórmis, Dómine? * exsúrge, et ne repéllas in finem.',
              en: '',
            },
            {
              desc: '',
              id: '24',
              la: 'Quare fáciem tuam avértis, * oblivísceris inópiæ nostræ, et tribulatiónis nostræ?',
              en: '',
            },
            {
              desc: '',
              id: '25',
              la: 'Quóniam humiliáta est in púlvere ánima nostra: * conglutinátus est in terra venter noster.',
              en: '',
            },
            {
              desc: '',
              id: '26',
              la: 'Exsúrge, Dómine, ádjuva nos: * et rédime nos propter nomen tuum.',
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
              la: 'Tecum princípium in die virtútis tuæ in splendóribus sanctórum: * ex útero ante lucíferum génui te',
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
          chapter: '112',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Laudáte, púeri, Dóminum: * laudáte nomen Dómini.',
              en: '',
            },
            {
              desc: 'fit reverentia', // bow head idk what to do put
              id: '2',
              la: ' Sit nomen Dómini benedíctum, * ex hoc nunc, et usque in sǽculum.',
              en: '',
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
              rubrics: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Ut cóllocet eum cum princípibus, * cum princípibus pópuli ',
              en: '',
              rubrics: '',
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
          chapter: '121',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Lætátus sum in his, quæ dicta sunt mihi: * In domum Dómini íbimus.',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Stantes erant pedes nostri, * in átriis tuis, Jerúsalem',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Jerúsalem, quæ ædificátur ut cívitas: * cujus participátio ejus in idípsum.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Illuc enim ascendérunt tribus, tribus Dómini: * testimónium Israël ad confiténdum nómini Dómini.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Quia illic sedérunt sedes in judício, * sedes super domum David.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Rogáte quæ ad pacem sunt Jerúsalem: * et abundántia diligéntibus te:',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Fiat pax in virtúte tua: * et abundántia in túrribus tuis',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Propter fratres meos, et próximos meos, * loquébar pacem de te:',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Propter domum Dómini, Dei nostri, * quæsívi bona tibi.',
              en: '',
            },
            
           
          ],
        },
        {
          chapter: '126',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Nisi Dóminus ædificáverit domum, * in vanum laboravérunt qui ædíficant eam.',
              en: '',
            },
            {
              desc: '',
              id: '1-2',
              la: 'Nisi Dóminus custodíerit civitátem, * frustra vígilat qui custódit eam.',
              en: '',
              rubrics: 'fit reverentia',
            },
            {
              desc: '',
              id: '2',
              la: 'Nisi Dóminus custodíerit civitátem, * frustra vígilat qui custódit eam.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Cum déderit diléctis suis somnum: * ecce heréditas Dómini fílii: merces, fructus ventris.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: ' Sicut sagíttæ in manu poténtis: * ita fílii excussórum.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Beátus vir, qui implévit desidérium suum ex ipsis: * non confundétur cum loquétur inimícis suis in porta.',
              en: '',
            },
           
          ],
        },
        {
          chapter: '147',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Lauda, Jerúsalem, Dóminum: * lauda Deum tuum, Sion.',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Quóniam confortávit seras portárum tuárum: * benedíxit fíliis tuis in te.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Qui pósuit fines tuos pacem: * et ádipe fruménti sátiat te.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Qui emíttit elóquium suum terræ: * velóciter currit sermo ejus.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Qui dat nivem sicut lanam: * nébulam sicut cínerem spargit.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Mittit crystállum suam sicut buccéllas: * ante fáciem frígoris ejus quis sustinébit?',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Emíttet verbum suum, et liquefáciet ea: * flabit spíritus ejus, et fluent aquæ.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Emíttet verbum suum, et liquefáciet ea: * flabit spíritus ejus, et fluent aquæ.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Non fecit táliter omni natióni: * et judícia sua non manifestávit eis.',
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
          chapter: '11',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'Salvum me fac, Dómine, quóniam defécit sanctus: * quóniam diminútæ sunt veritátes a fíliis hóminum.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Vana locúti sunt unusquísque ad próximum suum: * lábia dolósa, in corde et corde locúti sunt.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Dispérdat Dóminus univérsa lábia dolósa, * et linguam magníloquam.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Qui dixérunt: Linguam nostram magnificábimus, lábia nostra a nobis sunt, * quis noster Dóminus est?',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Propter misériam ínopum, et gémitum páuperum, * nunc exsúrgam, dicit Dóminus.',
              en: '',
            },
            {
              desc: '',
              id: '6-2',
              la: 'Ponam in salutári: * fiduciáliter agam in eo',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Elóquia Dómini, elóquia casta: * argéntum igne examinátum, probátum terræ purgátum séptuplum.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Tu, Dómine, servábis nos: et custódies nos * a generatióne hac in ætérnum.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'In circúitu ímpii ámbulant: * secúndum altitúdinem tuam multiplicásti fílios hóminum.',
              en: '',
            },
            
          ],
        },
        {
          chapter: '12',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Úsquequo, Dómine, obliviscéris me in finem? * Úsquequo avértis fáciem tuam a me?',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Quámdiu ponam consília in ánima mea, * dolórem in corde meo per diem?',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Úsquequo exaltábitur inimícus meus super me? * réspice, et exáudi me, Dómine, Deus meus.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Illúmina óculos meos ne umquam obdórmiam in morte: * nequándo dicat inimícus meus: Præválui advérsus eum.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Qui tríbulant me, exsultábunt si motus fúero: * ego autem in misericórdia tua sperávi.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Exsultábit cor meum in salutári tuo: cantábo Dómino qui bona tríbuit mihi: * et psallam nómini Dómini altíssimi.',
              en: '',
            },
            
           
          ],
        },
        {
          chapter: '15',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Consérva me, Dómine, quóniam sperávi in te. * Dixi Dómino: Deus meus es tu, quóniam bonórum meórum non eges.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Sanctis, qui sunt in terra ejus, * mirificávit omnes voluntátes meas in eis.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Multiplicátæ sunt infirmitátes eórum: * póstea acceleravérunt.',
              en: '',
            },
            {
              desc: '',
              id: '4-2',
              la: 'Non congregábo conventícula eórum de sanguínibus, * nec memor ero nóminum eórum per lábia mea.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Dóminus pars hereditátis meæ, et cálicis mei: * tu es, qui restítues hereditátem meam mihi.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Funes cecidérunt mihi in præcláris: * étenim heréditas mea præclára est mihi.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Benedícam Dóminum, qui tríbuit mihi intelléctum: * ínsuper et usque ad noctem increpuérunt me renes mei.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Providébam Dóminum in conspéctu meo semper: * quóniam a dextris est mihi, ne commóvear.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Propter hoc lætátum est cor meum, et exsultávit lingua mea: * ínsuper et caro mea requiéscet in spe.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Quóniam non derelínques ánimam meam in inférno: * nec dabis sanctum tuum vidére corruptiónem.',
              en: '',
            },
            {
              desc: '',
              id: '10-2',
              la: 'Notas mihi fecísti vias vitæ, adimplébis me lætítia cum vultu tuo: * delectatiónes in déxtera tua usque in finem.',
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

