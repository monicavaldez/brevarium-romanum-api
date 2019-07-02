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
          chapter: '44(2-10)',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'Eructávit cor meum verbum bonum: * dico ego ópera mea Regi',
              en: '',
            },
            {
              desc: '',
              id: '2-2',
              la: 'Lingua mea cálamus scribæ: * velóciter scribéntis.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Speciósus forma præ fíliis hóminum, diffúsa est grátia in lábiis tuis: * proptérea benedíxit te Deus in ætérnum.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Accíngere gládio tuo super femur tuum, * potentíssime.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Spécie tua et pulchritúdine tua: * inténde, próspere procéde, et regna.',
              en: '',
            },
            {
              desc: '',
              id: '5-2',
              la: 'Propter veritátem, et mansuetúdinem, et justítiam: * et dedúcet te mirabíliter déxtera tua.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Sagíttæ tuæ acútæ, pópuli sub te cadent: * in corda inimicórum Regis.',
              en: '',
            },
            {
                desc: '',
                id: '7',
                la: 'Sedes tua, Deus, in sǽculum sǽculi: * virga directiónis virga regni tui.',
                en: '',
              },
              {
                desc: '',
                id: '8',
                la: 'Dilexísti justítiam, et odísti iniquitátem: * proptérea unxit te, Deus, Deus tuus, óleo lætítiæ præ consórtibus tuis.',
                en: '',
              },
              
              {
                desc: '',
                id: '9',
                la: 'Myrrha, et gutta, et cásia a vestiméntis tuis, a dómibus ebúrneis: * ex quibus delectavérunt te fíliæ regum in honóre tuo.,
                en: '',
              },
              {
                desc: '',
                id: '10',
                la: 'Ástitit regína a dextris tuis in vestítu deauráto: * circúmdata varietáte.',
                en: '',
              }, 
              
              
          ],
        },
        {
          chapter: '44(11-18)',
          verses: [
            {
              desc: '',
              id: '11',
              la: 'Audi fília, et vide, et inclína aurem tuam: * et oblivíscere pópulum tuum et domum patris tui.',
              en: '',
            },
            {
              desc: '',
              id: '12',
              la: 'Et concupíscet Rex decórem tuum: * quóniam ipse est Dóminus Deus tuus, et adorábunt eum.',
              en: '',
            },
            {
              desc: '',
              id: '13',
              la: 'Et fíliæ Tyri in munéribus * vultum tuum deprecabúntur: omnes dívites plebis.',
              en: '',
            },
            {
              desc: '',
              id: '14',
              la: 'Omnis glória ejus fíliæ Regis ab intus, * in fímbriis áureis circumamícta varietátibus.',
              en: '',
            },
            {
              desc: '',
              id: '15',
              la: 'Adducéntur Regi vírgines post eam: * próximæ ejus afferéntur tibi.',
              en: '',
            },
            {
              desc: '',
              id: '16',
              la: 'Afferéntur in lætítia et exsultatióne: * adducéntur in templum Regis.',
              en: '',
            },
            {
              desc: '',
              id: '17',
              la: 'Pro pátribus tuis nati sunt tibi fílii: * constítues eos príncipes super omnem terram.',
              en: '',
            },
            {
              desc: '',
              id: '18',
              la: 'Mémores erunt nóminis tui: * in omni generatióne et generatiónem.',
              en: '',
            },
            {
              desc: '',
              id: '18-2',
              la: 'Proptérea pópuli confitebúntur tibi in ætérnum: * et in sǽculum sǽculi.',
              en: '',
            },
            ,
          ],
        },
        {
          chapter: '45',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'Deus noster refúgium, et virtus: * adjútor in tribulatiónibus, quæ invenérunt nos nimis.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Proptérea non timébimus dum turbábitur terra: * et transferéntur montes in cor maris.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Sonuérunt, et turbátæ sunt aquæ eórum: * conturbáti sunt montes in fortitúdine ejus.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'lúminis ímpetus lætíficat civitátem Dei: * sanctificávit tabernáculum suum Altíssimus.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Deus in médio ejus, non commovébitur: * adjuvábit eam Deus mane dilúculo.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Conturbátæ sunt gentes, et inclináta sunt regna: * dedit vocem suam, mota est terra.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Dóminus virtútum nobíscum: * suscéptor noster Deus Jacob.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Veníte, et vidéte ópera Dómini, quæ pósuit prodígia super terram: * áuferens bella usque ad finem terræ.',
              en: '',
            },
            {
                desc: '',
                id: '10',
                la: 'Arcum cónteret, et confrínget arma: * et scuta combúret igni.',
                en: '',
              },
              {
                desc: '',
                id: '11',
                la: 'acáte, et vidéte quóniam ego sum Deus: * exaltábor in géntibus, et exaltábor in terra.',
                en: '',
              },
              {
                desc: '',
                id: '12',
                la: 'Dóminus virtútum nobíscum: * suscéptor noster Deus Jacob.',
                en: '',
              },
              
             
          ],
        },
        {
          chapter: '47 ',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'Magnus Dóminus, et laudábilis nimis in civitáte Dei nostri, ‡ in monte sancto ejus.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Fundátur exsultatióne univérsæ terræ mons Sion, * látera Aquilónis, cívitas Regis magni.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Deus in dómibus ejus cognoscétur: * cum suscípiet eam.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Quóniam ecce reges terræ congregáti sunt: * convenérunt in unum.',
              en: '',
            },
            {
                desc: '',
                id: '6',
                la: 'Ipsi vidéntes sic admiráti sunt, conturbáti sunt, commóti sunt: * tremor apprehéndit eos.',
                en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Ibi dolóres ut parturiéntis: * in spíritu veheménti cónteres naves Tharsis.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Sicut audívimus, sic vídimus in civitáte Dómini virtútum, in civitáte Dei nostri: * Deus fundávit eam in ætérnum.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Suscépimus, Deus, misericórdiam tuam, * in médio templi tui.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Secúndum nomen tuum, Deus, sic et laus tua in fines terræ: * justítia plena est déxtera tua.',
              en: '',
            },
            {
                desc: '',
                id: '12',
                la: 'Lætétur mons Sion, et exsúltent fíliæ Judæ: * propter judícia tua, Dómine.',
                en: '',
            }, 
            {
                desc: '',
                id: '13',
                la: 'Circúmdate Sion, et complectímini eam: * narráte in túrribus ejus.',
                en: '',
            },
            {
                desc: '',
                id: '14',
                la: 'Pónite corda vestra in virtúte ejus: * et distribúite domos ejus, ut enarrétis in progénie áltera.',
                en: '',
            },
            {
                desc: '',
                id: '15',
                la: 'Quóniam hic est Deus, Deus noster in ætérnum et in sǽculum sǽculi: * ipse reget nos in sǽcula.',
                en: '',
            },
            
         
          ],
        },
        {
          chapter: '48 (2-13)',
          verses: [

            {
              desc: '',
              id: '2',
              la: 'Audíte hæc, omnes gentes: * áuribus percípite omnes, qui habitátis orbem:',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Quique terrígenæ, et fílii hóminum: * simul in unum dives et pauper.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Os meum loquétur sapiéntiam: * et meditátio cordis mei prudéntiam.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Inclinábo in parábolam aurem meam: * apériam in psaltério propositiónem meam.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Cur timébo in die mala? * iníquitas calcánei mei circúmdabit me:',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Qui confídunt in virtúte sua: * et in multitúdine divitiárum suárum gloriántur.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Frater non rédimit, rédimet homo: * non dabit Deo placatiónem suam.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Et prétium redemptiónis ánimæ suæ: * et laborábit in ætérnum, et vivet adhuc in finem.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Non vidébit intéritum, cum víderit sapiéntes moriéntes: * simul insípiens, et stultus períbunt.',
              en: '',
            },
            {
              desc: '',
              id: '11-2',
              la: 'Et relínquent aliénis divítias suas: * et sepúlcra eórum domus illórum in ætérnum.',
              en: '',
            },
            {
              desc: '',
              id: '12',
              la: 'Tabernácula eórum in progénie et progénie: * vocavérunt nómina sua in terris suis.',
              en: '',
            },
            {
                desc: '',
                id: '13',
                la: 'Et homo, cum in honóre esset, non intelléxit: * comparátus est juméntis insipiéntibus, et símilis factus est illis.',
                en: '',
            },
            
            
          ],
        },
        {
          chapter: '48(14-21)',
          verses: [
            {
              desc: '',
              id: '14',
              la: 'Hæc via illórum scándalum ipsis: * et póstea in ore suo complacébunt.',
              en: '',
            },
            {
              desc: '',
              id: '15',
              la: 'Sicut oves in inférno pósiti sunt: * mors depáscet eos.',
              en: '',
            },
            {
              desc: '',
              id: '15-2',
              la: 'Et dominabúntur eórum justi in matutíno: * et auxílium eórum veteráscet in inférno a glória eórum.',
              en: '',
            },
            {
              desc: '',
              id: '16',
              la: 'Verúmtamen Deus rédimet ánimam meam de manu ínferi: * cum accéperit me.',
              en: '',
            },
            {
              desc: '',
              id: '17',
              la: 'Ne timúeris, cum dives factus fúerit homo: * et cum multiplicáta fúerit glória domus ejus.',
              en: '',
            },
            {
              desc: '',
              id: '18',
              la: 'Quóniam cum interíerit, non sumet ómnia: * neque descéndet cum eo glória ejus.',
              en: '',
            },
            {
              desc: '',
              id: '19',
              la: 'Quia ánima ejus in vita ipsíus benedicétur: * confitébitur tibi cum beneféceris ei.',
              en: '',
            },
            {
              desc: '',
              id: '20',
              la: 'Introíbit usque in progénies patrum suórum: * et usque in ætérnum non vidébit lumen.',
              en: '',
            },
            {
              desc: '',
              id: '21',
              la: 'Homo, cum in honóre esset, non intelléxit: * comparátus est juméntis insipiéntibus, et símilis factus est illis.',
              en: '',
            },
            
          ],
        },
        {
          chapter: '49(1-15)',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Deus deórum, Dóminus locútus est: * ‡ et vocávit terram,',
              en: '',
            },
            {
              desc: '',
              id: '1-2',
              la: 'A solis ortu usque ad occásum: * ex Sion spécies decóris ejus.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Deus maniféste véniet: * Deus noster et non silébit.',
              en: '',
            },
            {
              desc: '',
              id: '3-2',
              la: 'Ignis in conspéctu ejus exardéscet: * et in circúitu ejus tempéstas válida.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Advocábit cælum desúrsum: * et terram discérnere pópulum suum.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Congregáte illi sanctos ejus: * qui órdinant testaméntum ejus super sacrifícia.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Et annuntiábunt cæli justítiam ejus: * quóniam Deus judex est.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Audi, pópulus meus, et loquar: Israël, et testificábor tibi: * Deus, Deus tuus ego sum.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Non in sacrifíciis tuis árguam te: * holocáusta autem tua in conspéctu meo sunt semper.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Non accípiam de domo tua vítulos: * neque de grégibus tuis hircos.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Quóniam meæ sunt omnes feræ silvárum: * juménta in móntibus et boves.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Cognóvi ómnia volatília cæli: * et pulchritúdo agri mecum est.',
              en: '',
            },
            {
              desc: '',
              id: '12',
              la: 'Si esuríero, non dicam tibi: * meus est enim orbis terræ, et plenitúdo ejus.',
              en: '',
            },
            {
              desc: '',
              id: '13',
              la: 'Numquid manducábo carnes taurórum? * aut sánguinem hircórum potábo?',
              en: '',
            },
            {
              desc: '',
              id: '14',
              la: 'Ímmola Deo sacrifícium laudis: * et redde Altíssimo vota tua.',
              en: '',
            },
            {
              desc: '',
              id: '15',
              la: 'Et ínvoca me in die tribulatiónis: * éruam te, et honorificábis me.',
              en: '',
            },
            
          ],
        },
        {
          chapter: '49(16-23)',
          verses: [
            {
              desc: '',
              id: '16',
              la: 'Peccatóri autem dixit Deus: * Quare tu enárras justítias meas, et assúmis testaméntum meum per os tuum?',
              en: '',
            },
            {
              desc: '',
              id: '17',
              la: 'Tu vero odísti disciplínam: * et projecísti sermónes meos retrórsum:',
              en: '',
            },
            {
              desc: '',
              id: '18',
              la: 'Si vidébas furem, currébas cum eo: * et cum adúlteris portiónem tuam ponébas.',
              en: '',
            },
            {
              desc: '',
              id: '19',
              la: 'Os tuum abundávit malítia: * et lingua tua concinnábat dolos.',
              en: '',
            },
            {
              desc: '',
              id: '20',
              la: 'Sedens advérsus fratrem tuum loquebáris, et advérsus fílium matris tuæ ponébas scándalum: * hæc fecísti, et tácui.',
              en: '',
            },
            {
              desc: '',
              id: '21',
              la: 'Existimásti, iníque, quod ero tui símilis: * árguam te, et státuam contra fáciem tuam.',
              en: '',
            },
            {
              desc: '',
              id: '22',
              la: 'Intellégite hæc, qui obliviscímini Deum: * nequándo rápiat, et non sit qui erípiat.',
              en: '',
            },
            {
              desc: '',
              id: '23',
              la: 'Sacrifícium laudis honorificábit me: * et illic iter, quo osténdam illi salutáre Dei.',
              en: '',
            },
            
          ],
        },
        {
          chapter: '50',
          verses: [
            {
              desc: '',
              id: '3',
              la: 'Miserére mei, Deus, * secúndum magnam misericórdiam tuam.',
              en: '',
            },
            {
              desc: '',
              id: '3-2',
              la: ' Et secúndum multitúdinem miseratiónum tuárum, * dele iniquitátem meam.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Amplius lava me ab iniquitáte mea: * et a peccáto meo munda me.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Quóniam iniquitátem meam ego cognósco: * et peccátum meum contra me est semper.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Tibi soli peccávi, et malum coram te feci: * ut justificéris in sermónibus tuis, et vincas cum judicáris.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Ecce enim, in iniquitátibus concéptus sum: * et in peccátis concépit me mater mea.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Ecce enim, veritátem dilexísti: * incérta et occúlta sapiéntiæ tuæ manifestásti mihi.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Aspérges me hyssópo, et mundábor: * lavábis me, et super nivem dealbábor.',
              en: '',
            },
            {
                desc: '',
                id: '10',
                la: 'Audítui meo dabis gáudium et lætítiam: * et exsultábunt ossa humiliáta.',
                en: '',
            }, 
            {
                desc: '',
                id: '11',
                la: 'Avérte fáciem tuam a peccátis meis: * et omnes iniquitátes meas dele.',
                en: '',
            }, 
            {
                desc: '',
                id: '12',
                la: 'Cor mundum crea in me, Deus: * et spíritum rectum ínnova in viscéribus meis.',
                en: '',
            }, 
            {
                desc: '',
                id: '13',
                la: 'Ne proícias me a fácie tua: * et spíritum sanctum tuum ne áuferas a me.',
                en: '',
            }, 
            {
                desc: '',
                id: '14',
                la: 'Redde mihi lætítiam salutáris tui: * et spíritu principáli confírma me.',
                en: '',
            }, 
            {
                desc: '',
                id: '15',
                la: 'Docébo iníquos vias tuas: * et ímpii ad te converténtur.',
                en: '',
            }, 
            {
                desc: '',
                id: '16',
                la: 'Líbera me de sanguínibus, Deus, Deus salútis meæ: * et exsultábit lingua mea justítiam tuam.',
                en: '',
            }, 
            {
              desc: '',
              id: '17',
              la: 'Dómine, lábia mea apéries: * et os meum annuntiábit laudem tuam.',
              en: '',
          }, 
          {
            desc: '',
            id: '18',
            la: 'Quóniam si voluísses sacrifícium, dedíssem útique: * holocáustis non delectáberis.',
            en: '',
        }, 
        {
          desc: '',
          id: '19',
          la: 'Sacrifícium Deo spíritus contribulátus: * cor contrítum, et humiliátum, Deus, non despícies.',
          en: '',
       }, 
        {
          desc: '',
          id: '20',
          la: 'Benígne fac, Dómine, in bona voluntáte tua Sion: * ut ædificéntur muri Jerúsalem.',
          en: '',
        }, 
        {
          desc: '',
          id: '21',
          la: 'Tunc acceptábis sacrifícium justítiæ, oblatiónes, et holocáusta: * tunc impónent super altáre tuum vítulos.',
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
