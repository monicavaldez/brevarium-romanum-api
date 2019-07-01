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
          chapter: '26(1-6)',
          verses: [
            {
              desc: 'He',
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
              id: '3-3',
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
              la: 'Ut vídeam voluptátem Dómini, * et vísitem templum ejus',
              en: '',
            },
            {
              desc: 'Vav',
              id: '5',
              la: ' Quóniam abscóndit me in tabernáculo suo: * in die malórum protéxit me in abscóndito tabernáculi sui.',
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
              la: ' Circuívi, et immolávi in tabernáculo ejus hóstiam vociferatiónis: * cantábo, et psalmum dicam Dómino.',
              en: '',
            },
            
          ],
        },
        {
          chapter: '26(7-14)',
          verses: [
            {
              desc: 'Zai',
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
              id: '9-2',
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
              la: ' Ne tradíderis me in ánimas tribulántium me: * quóniam insurrexérunt in me testes iníqui, et mentíta est iníquitas sibi',
              en: '',
            },
            {
              desc: '',
              id: '13',
              la: 'Credo vidére bona Dómini * in terra vivéntium.',
              en: '',
            },
            {
              desc: 'Heth',
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
              desc: 'Ioth',
              id: '7',
              la: 'Dóminus adjútor meus, et protéctor meus: * in ipso sperávit cor meum, et adjútus sum.',
              en: '',
            },
            {
              desc: '',
              id: '7-2',
              la: 'Et reflóruit caro mea: * et ex voluntáte mea confitébor ei.',
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
          chapter: '30(2-9)',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'In te, Dómine, sperávi non confúndar in ætérnum: * in justítia tua líbera me.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Inclína ad me aurem tuam, * accélera ut éruas me.',
              en: '',
            },
            {
              desc: '',
              id: '3-2',
              la: 'Esto mihi in Deum protectórem, et in domum refúgii: * ut salvum me fácias.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Quóniam fortitúdo mea, et refúgium meum es tu: * et propter nomen tuum dedúces me, et enútries me.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Edúces me de láqueo hoc, quem abscondérunt mihi: * quóniam tu es protéctor meus.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'In manus tuas comméndo spíritum meum: * redemísti me, Dómine, Deus veritátis.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Odísti observántes vanitátes, * supervácue.',
              en: '',
            },
            {
              desc: '',
              id: '7-2',
              la: 'Ego autem in Dómino sperávi: * exsultábo, et lætábor in misericórdia tua.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Quóniam respexísti humilitátem meam, * salvásti de necessitátibus ánimam meam.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Nec conclusísti me in mánibus inimíci: * statuísti in loco spatióso pedes meos.',
              en: '',
            },
          ],
        },
        {
          chapter: '30(2-9)',
          verses: [
            {
              desc: 'Samech',
              id: '10',
              la: 'Nec conclusísti me in mánibus inimíci: * statuísti in loco spatióso pedes meos.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Quóniam defécit in dolóre vita mea: * et anni mei in gemítibus.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Infirmáta est in paupertáte virtus mea: * et ossa mea conturbáta sunt.',
              en: '',
            },
            {
              desc: '',
              id: '12',
              la: 'Super omnes inimícos meos factus sum oppróbrium et vicínis meis valde: * et timor notis meis.',
              en: '',
            },
            {
              desc: '',
              id: '12-2',
              la: 'Qui vidébant me, foras fugérunt a me: * oblivióni datus sum, tamquam mórtuus a corde.',
              en: '',
            },
            {
              desc: '',
              id: '13',
              la: 'Factus sum tamquam vas pérditum: * quóniam audívi vituperatiónem multórum commorántium in circúitu.',
              en: '',
            },
            {
              desc: '',
              id: '14',
              la: 'In eo dum convenírent simul advérsum me, * accípere ánimam meam consiliáti sunt.',
              en: '',
            },
            {
              desc: '',
              id: '15',
              la: 'Ego autem in te sperávi, Dómine: * dixi: Deus meus es tu: in mánibus tuis sortes meæ.',
              en: '',
            },
            {
              desc: 'Ain',
              id: '16',
              la: 'Éripe me de manu inimicórum meórum, * et a persequéntibus me.',
              en: '',
            },
            {
              desc: '',
              id: '17',
              la: 'Illústra fáciem tuam super servum tuum, salvum me fac in misericórdia tua: * Dómine, non confúndar, quóniam invocávi te.',
              en: '',
            },
            {
              desc: '',
              id: '18',
              la: 'Erubéscant ímpii, et deducántur in inférnum: * muta fiant lábia dolósa.',
              en: '',
            },
            {
              desc: '',
              id: '19',
              la: 'Quæ loquúntur advérsus justum iniquitátem: * in supérbia, et in abusióne.',
              en: '',
            },
            
            
          ],
        },
        {
          chapter: '30(20-25)',
          verses: [
            {
              desc: '',
              id: '20',
              la: 'Quam magna multitúdo dulcédinis tuæ, Dómine, * quam abscondísti timéntibus te.',
              en: '',
            },
            {
              desc: '',
              id: '20-2',
              la: 'Perfecísti eis, qui sperant in te, * in conspéctu filiórum hóminum.',
              en: '',
            },
            {
              desc: '',
              id: '21',
              la: 'Abscóndes eos in abscóndito faciéi tuæ * a conturbatióne hóminum.',
              en: '',
            },
            {
              desc: '',
              id: '21-2',
              la: 'Próteges eos in tabernáculo tuo * a contradictióne linguárum.',
              en: '',
            },
            {
              desc: '',
              id: '22',
              la: 'Benedíctus Dóminus: * quóniam mirificávit misericórdiam suam mihi in civitáte muníta.',
              en: '',
            },
            {
              desc: '',
              id: '23',
              la: 'Ego autem dixi in excéssu mentis meæ: * Projéctus sum a fácie oculórum tuórum.',
              en: '',
            },
            {
              desc: '',
              id: '23-2',
              la: 'Ideo exaudísti vocem oratiónis meæ, * dum clamárem ad te.',
              en: '',
            },
            {
              desc: '',
              id: '24',
              la: 'Dilígite Dóminum omnes sancti ejus: * quóniam veritátem requíret Dóminus, et retríbuet abundánter faciéntibus supérbiam.',
              en: '',
            },
            {
              desc: 'Ain',
              id: '25',
              la: 'Viríliter ágite, et confortétur cor vestrum, * omnes, qui sperátis in Dómino.',
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
          chapter: '31',
          verses: [
            {
              desc: 'Phe',
              id: '1',
              la: 'Beáti quorum remíssæ sunt iniquitátes: * et quorum tecta sunt peccáta.',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Beátus vir, cui non imputávit Dóminus peccátum, * nec est in spíritu ejus dolus.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Quóniam tácui, inveteravérunt ossa mea, * dum clamárem tota die.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Quóniam die ac nocte graváta est super me manus tua: * convérsus sum in ærúmna mea, dum confígitur spina.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Delíctum meum cógnitum tibi feci: * et injustítiam meam non abscóndi.',
              en: '',
            },
            {
              desc: '',
              id: '5-2',
              la: 'Dixi: Confitébor advérsum me injustítiam meam Dómino: * et tu remisísti impietátem peccáti mei.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Pro hac orábit ad te omnis sanctus, * in témpore opportúno.',
              en: '',
            },
            {
              desc: '',
              id: '6-2',
              la: 'Verúmtamen in dilúvio aquárum multárum, * ad eum non approximábunt.',
              en: '',
            },
            {
              desc: 'Sade',
              id: '7',
              la: 'Tu es refúgium meum a tribulatióne, quæ circúmdedit me: * exsultátio mea, érue me a circumdántibus me.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Intelléctum tibi dabo, et ínstruam te in via hac, qua gradiéris: * firmábo super te óculos meos.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Nolíte fíeri sicut equus et mulus, * quibus non est intelléctus.',
              en: '',
            },
            {
              desc: '',
              id: '9-2',
              la: ' In camo et freno maxíllas eórum constrínge, * qui non appróximant ad te.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Multa flagélla peccatóris, * sperántem autem in Dómino misericórdia circúmdabit.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Lætámini in Dómino et exsultáte, justi, * et gloriámini, omnes recti corde.',
              en: '',
            },
            
          ],
        },
        {
          chapter: '32(1-11)',
          verses: [
            {
              desc: 'Coph',
              id: '1',
              la: 'Exsultáte, justi, in Dómino: * rectos decet collaudátio.',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Confitémini Dómino in cíthara: * in psaltério decem chordárum psállite illi.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Cantáte ei cánticum novum: * bene psállite ei in vociferatióne.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Quia rectum est verbum Dómini, * et ómnia ópera ejus in fide.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Díligit misericórdiam et judícium: * misericórdia Dómini plena est terra.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Verbo Dómini cæli firmáti sunt: * et spíritu oris ejus omnis virtus eórum.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Cóngregans sicut in utre aquas maris: * ponens in thesáuris abýssos.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Tímeat Dóminum omnis terra: * ab eo autem commoveántur omnes inhabitántes orbem.',
              en: '',
            },
            {
              desc: 'Res',
              id: '9',
              la: 'Quóniam ipse dixit, et facta sunt: * ipse mandávit, et creáta sunt.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Dóminus díssipat consília géntium: * réprobat autem cogitatiónes populórum, et réprobat consília príncipum.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Consílium autem Dómini in ætérnum manet: * cogitatiónes cordis ejus in generatióne et generatiónem.',
              en: '',
            },
           
          ],
        },
        {
          chapter: '32(12-22)',
          verses: [
            {
              desc: 'Sin',
              id: '12',
              la: 'Beáta gens, cujus est Dóminus, Deus ejus: * pópulus, quem elégit in hereditátem sibi.',
              en: '',
            },
            {
              desc: '',
              id: '13',
              la: 'De cælo respéxit Dóminus: * vidit omnes fílios hóminum.',
              en: '',
            },
            {
              desc: '',
              id: '14',
              la: 'De præparáto habitáculo suo * respéxit super omnes, qui hábitant terram.',
              en: '',
            },
            {
              desc: '',
              id: '15',
              la: 'Qui finxit sigillátim corda eórum: * qui intéllegit ómnia ópera eórum.',
              en: '',
            },
            {
              desc: '',
              id: '16',
              la: 'Non salvátur rex per multam virtútem: * et gigas non salvábitur in multitúdine virtútis suæ.',
              en: '',
            },
            {
              desc: '',
              id: '17',
              la: 'Fallax equus ad salútem: * in abundántia autem virtútis suæ non salvábitur.',
              en: '',
            },
            {
              desc: '',
              id: '18',
              la: ' Ecce, óculi Dómini super metuéntes eum: * et in eis, qui sperant super misericórdia ejus:',
              en: '',
            },
            {
              desc: '',
              id: '19',
              la:  'Ut éruat a morte ánimas eórum: * et alat eos in fame.',
              en: '',
            },
            {
              desc: 'Thau',
              id: '20',
              la: 'Ánima nostra sústinet Dóminum: * quóniam adjútor et protéctor noster est.',
              en: '',
            },
            {
              desc: '',
              id: '21',
              la: 'Quia in eo lætábitur cor nostrum: * et in nómine sancto ejus sperávimus.',
              en: '',
            },
            {
              desc: '',
              id: '22',
              la: 'Fiat misericórdia tua, Dómine, super nos: * quemádmodum sperávimus in te.',
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
          chapter: '114',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Diléxi, quóniam exáudiet Dóminus * vocem oratiónis meæ.',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: ' Quia inclinávit aurem suam mihi: * et in diébus meis invocábo.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Circumdedérunt me dolóres mortis: * et perícula inférni invenérunt me.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Tribulatiónem et dolórem invéni: * et nomen Dómini invocávi.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'O Dómine, líbera ánimam meam: * miséricors Dóminus, et justus, et Deus noster miserétur.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Custódiens párvulos Dóminus: * humiliátus sum, et liberávit me.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Convértere, ánima mea, in réquiem tuam: * quia Dóminus benefécit tibi',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Quia erípuit ánimam meam de morte: * óculos meos a lácrimis, pedes meos a lapsu.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Placébo Dómino * in regióne vivórum.',
              en: '',
            },
          ],
        },
        {
          chapter: '115',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Crédidi, propter quod locútus sum: * ego autem humiliátus sum nimis.',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Ego dixi in excéssu meo: * Omnis homo mendax.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Quid retríbuam Dómino, * pro ómnibus, quæ retríbuit mihi?',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Cálicem salutáris accípiam: * et nomen Dómini invocábo.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Vota mea Dómino reddam coram omni pópulo ejus: * pretiósa in conspéctu Dómini mors sanctórum ejus:',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'O Dómine, quia ego servus tuus: * ego servus tuus, et fílius ancíllæ tuæ.',
              en: '',
              rubrics: '',
            },
            {
              desc: '',
              id: '8',
              la: ' Dirupísti víncula mea: * tibi sacrificábo hóstiam laudis, et nomen Dómini invocábo.',
              en: '',
              rubrics: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Vota mea Dómino reddam in conspéctu omnis pópuli ejus: * in átriis domus Dómini, in médio tui, Jerúsalem.',
              en: '',
            },
           
          ],
        },
        {
          chapter: '119',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Ad Dóminum cum tribulárer clamávi: * et exaudívit me.',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Dómine, líbera ánimam meam a lábiis iníquis, * et a lingua dolósa.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Quid detur tibi, aut quid apponátur tibi * ad linguam dolósam?',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Sagíttæ poténtis acútæ, * cum carbónibus desolatóriis.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Heu mihi, quia incolátus meus prolongátus est: habitávi cum habitántibus Cedar: * multum íncola fuit ánima mea.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Cum his, qui odérunt pacem, eram pacíficus: * cum loquébar illis, impugnábant me gratis.',
              en: '',
            },
           
          ],
        },
        {
          chapter: '120',
          verses: [
            {
              desc: '',
              id: '1',
              la: ' Levávi óculos meos in montes, * unde véniet auxílium mihi.',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Auxílium meum a Dómino, * qui fecit cælum et terram.',
              en: '',
              rubrics: 'fit reverentia',
            },
            {
              desc: '',
              id: '3',
              la: 'Non det in commotiónem pedem tuum: * neque dormítet qui custódit te.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Ecce, non dormitábit neque dórmiet, * qui custódit Israël.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Dóminus custódit te, Dóminus protéctio tua, * super manum déxteram tuam.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Per diem sol non uret te: * neque luna per noctem.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Dóminus custódit te ab omni malo: * custódiat ánimam tuam Dóminus.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Dóminus custódiat intróitum tuum, et éxitum tuum: * ex hoc nunc, et usque in sǽculum.',
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
              la: 'Lætátus sum in his, quæ dicta sunt mihi: * ‡ In domum Dómini íbimus.',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Stantes erant pedes nostri, * in átriis tuis, Jerúsalem.',
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
              la: 'Fiat pax in virtúte tua: * et abundántia in túrribus tuis.',
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
              la: ' Propter domum Dómini, Dei nostri, * quæsívi bona tibi.',
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
          chapter: '6',
          verses: [
            {
              desc: '',
              id: '2',
              la: ' Dómine, ne in furóre tuo árguas me, * neque in ira tua corrípias me.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Miserére mei, Dómine, quóniam infírmus sum: * sana me, Dómine, quóniam conturbáta sunt ossa mea.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Et ánima mea turbáta est valde: * sed tu, Dómine, úsquequo?',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Convértere, Dómine, et éripe ánimam meam: * salvum me fac propter misericórdiam tuam.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Quóniam non est in morte qui memor sit tui: * in inférno autem quis confitébitur tibi?',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Laborávi in gémitu meo, lavábo per síngulas noctes lectum meum: * lácrimis meis stratum meum rigábo.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Turbátus est a furóre óculus meus: * inveterávi inter omnes inimícos meos.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Discédite a me, omnes, qui operámini iniquitátem: * quóniam exaudívit Dóminus vocem fletus mei.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Exaudívit Dóminus deprecatiónem meam, * Dóminus oratiónem meam suscépit.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Erubéscant, et conturbéntur veheménter omnes inimíci mei: * convertántur et erubéscant valde velóciter.',
              en: '',
            },
          ],
        },
        {
          chapter: '7(2-10)',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'Dómine, Deus meus, in te sperávi: * salvum me fac ex ómnibus persequéntibus me, et líbera me',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Nequándo rápiat ut leo ánimam meam, * dum non est qui rédimat, neque qui salvum fáciat.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Dómine, Deus meus, si feci istud, * si est iníquitas in mánibus meis',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Si réddidi retribuéntibus mihi mala, * décidam mérito ab inimícis meis inánis.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Persequátur inimícus ánimam meam, et comprehéndat, et concúlcet in terra vitam meam, * et glóriam meam in púlverem dedúcat.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Exsúrge, Dómine, in ira tua: * et exaltáre in fínibus inimicórum meórum',
              en: '',
            },
            {
              desc: '',
              id: '7-2',
              la: 'Et exsúrge, Dómine, Deus meus, in præcépto quod mandásti: * et synagóga populórum circúmdabit te.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Et propter hanc in altum regrédere: * Dóminus júdicat pópulos.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: ' Júdica me, Dómine, secúndum justítiam meam, * et secúndum innocéntiam meam super me.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Consumétur nequítia peccatórum, et díriges justum, * scrutans corda et renes, Deus.',
              en: '',
            },
           
          ],
        },
        {
          chapter: '7(11-18)',
          verses: [
            {
              desc: '',
              id: '11',
              la: 'Justum adjutórium meum a Dómino, * qui salvos facit rectos corde.',
              en: '',
            },
            {
              desc: '',
              id: '12',
              la: 'Deus judex justus, fortis, et pátiens: * numquid iráscitur per síngulos dies?',
              en: '',
            },
            {
              desc: '',
              id: '13',
              la: 'Nisi convérsi fuéritis, gládium suum vibrábit: * arcum suum teténdit, et parávit illum.',
              en: '',
            },
            {
              desc: '',
              id: '14',
              la: 'Et in eo parávit vasa mortis: * sagíttas suas ardéntibus effécit.',
              en: '',
            },
            {
              desc: '',
              id: '15',
              la: 'Ecce, partúriit injustítiam: * concépit dolórem, et péperit iniquitátem.',
              en: '',
            },
            {
              desc: '',
              id: '16',
              la: 'Lacum apéruit, et effódit eum: * et íncidit in fóveam quam fecit.',
              en: '',
            },
            {
              desc: '',
              id: '17',
              la: 'Convertétur dolor ejus in caput ejus: * et in vérticem ipsíus iníquitas ejus descéndet.',
              en: '',
            },
            {
              desc: '',
              id: '18',
              la: 'Confitébor Dómino secúndum justítiam ejus: * et psallam nómini Dómini altíssimi.',
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

