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
          chapter: '13',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Dixit insípiens in corde suo: * Non est Deus. ',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Corrúpti sunt, et abominábiles facti sunt in stúdiis suis: * non est qui fáciat bonum, non est usque ad unum.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Dóminus de cælo pro spéxit super filios hóminum, * ut vídeat si est intélligens, aut requírens Deum.',
              en: '',
            },
            {
              desc: '',
              id: '3-2',
              la: 'Omnes declinavérunt, simul inúlites facti sunt : * non est qui fáciat bonum, non est esque ad unum.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Sepúlcrum patenst est gutur eórum : linguis suis dolóse agebant, * venénum áspidum sub lábiis eórum',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Quorum os maledictióne et amaritúdine plenum est: * velóces pedes eórum ad effundéndum sánguinem.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Contrítio et infelícitas in viis eórum, et viam pacis non cognovérunt : * non est timor Dei ante óculos eórum.',
              en: '',
            },
            {
                desc: '',
                id: '7',
                la: 'Nonne cognóscent omnes qui operántur iniquitátem, * qui dévorant plebem meam sicut escam panis?',
                en: '',
              },
              {
                desc: '',
                id: '8',
                la: 'Dóminum non invocavérunt, * illic trepidavérunt timóre, ubi non erat timor. ',
                en: '',
              },
              
              {
                desc: '',
                id: '9',
                la: 'Quóniam Dóminus in generatióne justa est, cosílium ínopis confudístis : * quóniam Dóminus spes ejus est.',
                en: '',
              },
              {
                desc: '',
                id: '10',
                la: 'Quis dabit ex Sion salutáre Israël? * cum avérterit Dóminus captivitátem plebis suæ, exsultábit Jacob, et lætábitur Israël. ',
                en: '',
              }, 
              
          ],
        },
        {
          chapter: '14',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Domine, quis habitábit in tabernáculo tuo? * aut quis requiéscent in monte scanto tuo?',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Qui ingréditur sine mácula, * et operátur justiam:',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Qui lóquitur veritátem in corde suo, * qui non egit dolum in lingua sua: ',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Nec fecit próximo suo malum, * et oppróbrium non accépit advésus próximos suos. ',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Ad níhilum dedúctus est in conspéctu ejus milignus: * timéntes autem Dóminum gloríficat:',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Qui jurat próximo suo, et non décipit, * qui pecúniam suam non dedit ad usuram, et múnera super innocéntem non accépit. Qui facit hæc, * non movébitur in æternum. ',
              en: '',
            },
            ,
          ],
        },
        {
          chapter: '16',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Exáudi, Dómine, justítiam meam : * inténde deprecatiónem meam.',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Auribus pércipe oratiónem meam, * non in lábiis dolósis.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'De vultu tuo judícium meum pródeat: * igne me examinásti, et non est invénta in me iníquitas.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Probásti cor meum et visitásti nocte : * igne me examinásti, et non est invénta in me iniquitas.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Ut non loquátur os meum ópera hóminum: * propter verba labiórum tuórum ego custodivi vias duras.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Pérfice gressus meo in sémitis tuis : * ut non moveántor vestígia mea.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Ego clamávi, quóniam exaudísti me, Deus: * inclína aurem tuam mihi, et exáudi verba mea. ',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Mirífica miseriórdias tuas, * qui salvos facis sperántes in te.',
              en: '',
            },
            {
                desc: '',
                id: '9',
                la: 'A resisténtibus déxteræ tuæ custódi me, * ut pupíllam óculi.',
                en: '',
              },
              {
                desc: '',
                id: '10',
                la: 'Sub umbra alárum tuárum prótege me: * fácie impiórum qui me afflixérunt. ',
                en: '',
              },
              {
                desc: '',
                id: '11',
                la: 'Inimíci mei ánimam meam circumdedérunt, ádipem suum conclusérunt : * pérbiam.',
                en: '',
              },
              {
                desc: '',
                id: '12',
                la: 'Projiciéntes me nunc circumdedérunt me: * oculos suos statuérunt declináre in terram.',
                en: '',
              },
              {
                desc: '',
                id: '13',
                la: 'Suscepérunt me sicut leo parátus ad prædam : * et sicut cátulus leónis hábitans in ábditis',
                en: '',
              },     
              {
                desc: '',
                id: '14',
                la: 'Exsúrge, Dómine, præveni eum, et supplánta eum : * éripe ánimam meam ab ímpio, frámeam tuam ab inimícis manus tuæ.',
                en: '',
              },        {
                desc: '',
                id: '15',
                la: 'Dómine, a paucis de terra dívide eos in vita eórum : * de abscónditis tuis adimplétus est venter eórum.',
                en: '',
              },        {
                desc: '',
                id: '16',
                la: 'Saluráti sunt filiis : * et dimisérunt relíquias suas páarvulis suis.',
                en: '',
              },        {
                desc: '',
                id: '17',
                la: 'Ego autem in justítia apparébo conspéctui tuo : * satiabor cum apparúerit glória tua.',
                en: '',
              },        
          ],
        },
        {
          chapter: '17 (2-16) ',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'Diligam te, † Dómine, fortitúdo mea : * Dóminus firmaméntum meum, et liberátor meus',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Deus meus adjútor meus, * et sperábo in eum.',
              en: '',
            },
            {
              desc: '',
              id: '3 - 2',
              la: 'Protéctor meus, et cornu salútis meæ, *et suscéptor meus.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Laudans invocábo Dóminum: * et torréntes iníquitátis conturbavérunt me. ',
              en: '',
            },
            {
                desc: '',
                id: '5',
                la: 'Circumdedérunt me dolóres mortis: * et torréntes iniquitátis conturbavérunt me.',
                en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Dolóres inférni circumdérunt me : * præoccupavérunt me láquei mortis.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'In tribulatióne mea invocávi Dóminum, * et ad Deum meum clamávi.',
              en: '',
            },
            {
              desc: '',
              id: '7 - 2',
              la: 'Et exaudívit de templo sancto suo vocem meam : * et clamor meus in conspéctu ejus, introívut ub aures ejus.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Commóta est, et contrémuit terra : * fundaménta móntium conturbáta sunt, et commóta sunt, quóniam irátus est eis.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Ascéndit fumus in ira ejus : * et ignis a fácie ejus exársit : * carbones succénsi sunt ab eo.',
              en: '',
            },
            {
                desc: '',
                id: '10',
                la: 'Inclinávit cælos, et descéndit : * et calígo sub péndibus ejus.',
                en: '',
            }, 
            {
                desc: '',
                id: '11',
                la: 'Et ascéndit super Chérubim, et volávit : * volávit super pennas ventórum.',
                en: '',
            },
            {
                desc: '',
                id: '12',
                la: 'Et pósuit ténebras latíbulum suum, in circúitu ejus tabernáculum ejus : * tenebrósa aqua in núbibus áëris.',
                en: '',
            },
            {
                desc: '',
                id: '13',
                la: 'Præ fulgóre in conspéctu ejus nubes transiérunt, * grando et carbónes ignis.',
                en: '',
            },
            {
                desc: '',
                id: '14',
                la: 'Et intónuit de cælo Dóminus, et Altissimus dedit vocem suam : * grando et carbónes ignis.',
                en: '',
            },
            {
                desc: '',
                id: '15',
                la: 'Et misit sagíttas suas et dissipávit cos : * fúlgura multiplicávit, et conturbávit eos.',
                en: '',
            },
            {
                desc: '',
                id: '16',
                la: 'Et apparuérunt fontes aquárum, * et reveláta sunt fundaménta orbis terrárum :',
                en: '',
            },
            {
                desc: '',
                id: '16 - 2',
                la: 'Ab increpatíone tua, Dómine. * ab inspiratióne spíritus iræ tuæ',
                en: '',
            },
          ],
        },
        {
          chapter: '17 (17-35)',
          verses: [
            {
              desc: '',
              id: '17',
              la: 'Misit de summo, et accépit me : * et assúmosit me de aquis multis.',
              en: '',
            },
            {
              desc: '',
              id: '18',
              la: 'Erípuit me de inimícis meis fortíssimis, et ab his qui odérunt me: * quóniam confortáti sunt super me.',
              en: '',
            },
            {
              desc: '',
              id: '19',
              la: 'Prævenérunt me in die afflictiónis meæ: * et factus est Dóminus protéctor meus.',
              en: '',
            },
            {
              desc: '',
              id: '20',
              la: 'Et edúxit me in latitúdinem: * salvum me fecit, quóniam vóluit me.',
              en: '',
            },
            {
              desc: '',
              id: '21',
              la: 'Et retríbuet mihi Dóminus secúndum justítiam meam: * et secúndum puritátem mánuum meárum retríbuet mihi:',
              en: '',
            },
            {
              desc: '',
              id: '22',
              la: 'Quia custodívi vias Dómini, * nec ímpie gessi a Deo meo.',
              en: '',
            },
            {
              desc: '',
              id: '23',
              la: 'Quóniam ómnia judícia ejus in conspéctu meo: * et justítias ejus non répuli a me.',
              en: '',
            },
            {
              desc: '',
              id: '24',
              la: 'Et ero immaculátus cum eo: * et observábo me ab iniquitáte mea.',
              en: '',
            },
            {
              desc: '',
              id: '25',
              la: 'Et retríbuet mihi Dóminus secúndum justítiam meam: * et secúndum puritátem mánuum meárum in conspéctu oculórum ejus.',
              en: '',
            },
            {
              desc: '',
              id: '26',
              la: 'Cum sancto sanctus eris, * et cum viro innocénte ínnocens eris:',
              en: '',
            },
            {
                desc: '',
                id: '27',
                la: 'Et cum elécto eléctus eris: * et cum pervérso pervertéris.',
                en: '',
            },
            {
                desc: '',
                id: '28',
                la: 'Quóniam tu pópulum húmilem salvum fácies: * et óculos superbórum humiliábis.',
                en: '',
            },
            {
                desc: '',
                id: '29',
                la: 'Quóniam tu illúminas lucérnam meam, Dómine: * Deus meus, illúmina ténebras meas.',
                en: '',
            },
            {
                desc: '',
                id: '30',
                la: 'Quóniam in te erípiar a tentatióne, * et in Deo meo transgrédiar murum.',
                en: '',
            },
            {
                desc: '',
                id: '31',
                la: 'Deus meus, impollúta via ejus: elóquia Dómini igne examináta: * protéctor est ómnium sperántium in se.',
                en: '',
            },
            {
                desc: '',
                id: '32',
                la: ' Quóniam quis Deus præter Dóminum? * aut quis Deus præter Deum nostrum?',
                en: '',
            },
            {
                desc: '',
                id: '33',
                la: 'Deus, qui præcínxit me virtúte: * et pósuit immaculátam viam meam.',
                en: '',
            },
            {
                desc: '',
                id: '34',
                la: 'Qui perfécit pedes meos tamquam cervórum, * et super excélsa státuens me.',
                en: '',
            },
            {
                desc: '',
                id: '34',
                la: 'Qui docet manus meas ad prǽlium: * et posuísti, ut arcum ǽreum, brácchia mea.',
                en: '',
            },
          ],
        },
        {
          chapter: '17(36-51)',
          verses: [
            {
              desc: '',
              id: '36',
              la: ' Et dedísti mihi protectiónem salútis tuæ: * et déxtera tua suscépit me:',
              en: '',
            },
            {
              desc: '',
              id: '36-2',
              la: ' Et disciplína tua corréxit me in finem: * et disciplína tua ipsa me docébit.',
              en: '',
            },
            {
              desc: '',
              id: '37',
              la: 'Dilatásti gressus meos subtus me: * et non sunt infirmáta vestígia mea:',
              en: '',
            },
            {
              desc: '',
              id: '38',
              la: 'Pérsequar inimícos meos et comprehéndam illos: * et non convértar, donec defíciant.',
              en: '',
            },
            {
              desc: '',
              id: '39',
              la: 'Confríngam illos, nec póterunt stare: * cadent subtus pedes meos.',
              en: '',
            },
            {
              desc: '',
              id: '40',
              la: 'Et præcinxísti me virtúte ad bellum: * et supplantásti insurgéntes in me subtus me.',
              en: '',
            },
            {
              desc: '',
              id: '41',
              la: ' Et inimícos meos dedísti mihi dorsum, * et odiéntes me disperdidísti.',
              en: '',
            },
            {
              desc: '',
              id: '42',
              la: 'Clamavérunt, nec erat qui salvos fáceret ad Dóminum: * nec exaudívit eos.',
              en: '',
            },
            {
              desc: '',
              id: '43',
              la: 'Et commínuam illos, ut púlverem ante fáciem venti: * ut lutum plateárum delébo eos.',
              en: '',
            },
            {
              desc: '',
              id: '44',
              la: 'Erípies me de contradictiónibus pópuli: * constítues me in caput géntium.',
              en: '',
            },
            {
              desc: '',
              id: '45',
              la: 'Pópulus quem non cognóvi servívit mihi: * in audítu auris obedívit mihi.',
              en: '',
            },
            {
                desc: '',
                id: '46',
                la: 'Fílii aliéni mentíti sunt mihi, * fílii aliéni inveteráti sunt, et claudicavérunt a sémitis suis.',
                en: '',
            },
            {
                desc: '',
                id: '47',
                la: 'Vivit Dóminus, et benedíctus Deus meus: * et exaltétur Deus salútis meæ.',
                en: '',
            },
            {
                desc: '',
                id: '48',
                la: 'Deus, qui das vindíctas mihi, et subdis pópulos sub me: * liberátor meus de inimícis meis iracúndis.',
                en: '',
            },
            {
                desc: '',
                id: '49',
                la: ' Et ab insurgéntibus in me exaltábis me: * a viro iníquo erípies me.',
                en: '',
            },
            {
                desc: '',
                id: '50',
                la: 'Proptérea confitébor tibi in natiónibus, Dómine: * et nómini tuo psalmum dicam.',
                en: '',
            },
            {
                desc: '',
                id: '51',
                la: 'Magníficans salútes Regis ejus, et fáciens misericórdiam Christo suo David: * et sémini ejus usque in sǽculum.',
                en: '',
            }, 
          ],
        },
        {
          chapter: '19',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'Exáudiat te ‡ Dóminus in die tribulatiónis: * prótegat te nomen Dei Jacob.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Mittat tibi auxílium de sancto: * et de Sion tueátur te.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Memor sit omnis sacrifícii tui: * et holocáustum tuum pingue fiat.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Tríbuat tibi secúndum cor tuum: * et omne consílium tuum confírmet.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Lætábimur in salutári tuo: * et in nómine Dei nostri magnificábimur.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Impleat Dóminus omnes petitiónes tuas: * nunc cognóvi quóniam salvum fecit Dóminus Christum suum.',
              en: '',
            },
            {
              desc: '',
              id: '7 - 2',
              la: 'Exáudiet illum de cælo sancto suo: * in potentátibus salus déxteræ ejus.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Hi in cúrribus, et hi in equis: * nos autem in nómine Dómini, Dei nostri invocábimus.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Ipsi obligáti sunt, et cecidérunt: * nos autem surréximus et erécti sumus.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Dómine, salvum fac regem: * et exáudi nos in die, qua invocavérimus te.',
              en: '',
            },
            
          ],
        },
        {
          chapter: '20',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'Dómine, ‡ in virtúte tua lætábitur rex: * et super salutáre tuum exsultábit veheménter.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: ' Desidérium cordis ejus tribuísti ei: * et voluntáte labiórum ejus non fraudásti eum.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Quóniam prævenísti eum in benedictiónibus dulcédinis: * posuísti in cápite ejus corónam de lápide pretióso.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: ' Vitam pétiit a te: * et tribuísti ei longitúdinem diérum in sǽculum, et in sǽculum sǽculi.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Magna est glória ejus in salutári tuo: * glóriam et magnum decórem impónes super eum.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: ' Quóniam dabis eum in benedictiónem in sǽculum sǽculi: * lætificábis eum in gáudio cum vultu tuo.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: ' Quóniam rex sperat in Dómino: * et in misericórdia Altíssimi non commovébitur.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Inveniátur manus tua ómnibus inimícis tuis: * déxtera tua invéniat omnes, qui te odérunt.',
              en: '',
            },
            {
                desc: '',
                id: '10',
                la: ' Pones eos ut clíbanum ignis in témpore vultus tui: * Dóminus in ira sua conturbábit eos, et devorábit eos ignis.',
                en: '',
            },
            {
                desc: '',
                id: '11',
                la: 'Fructum eórum de terra perdes: * et semen eórum a fíliis hóminum.',
                en: '',
            },
            {
                desc: '',
                id: '12',
                la: 'Quóniam declinavérunt in te mala: * cogitavérunt consília, quæ non potuérunt stabilíre.',
                en: '',
            }, 
            {
                desc: '',
                id: '13',
                la: 'Quóniam pones eos dorsum: * in relíquiis tuis præparábis vultum eórum.',
                en: '',
            }, 
            {
                desc: '',
                id: '14',
                la: 'Exaltáre, Dómine, in virtúte tua: * cantábimus et psallémus virtútes tuas.',
                en: '',
            }, 
            
          ],
        },
        {
          chapter: '29',
          verses: [
            {
              desc: '',
              id: '2',
              la: ' Exaltábo te, ‡ Dómine, quóniam suscepísti me: * nec delectásti inimícos meos super me.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Dómine, Deus meus, clamávi ad te, * et sanásti me.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Dómine, eduxísti ab inférno ánimam meam: * salvásti me a descendéntibus in lacum.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Psállite Dómino, sancti ejus: * et confitémini memóriæ sanctitátis ejus.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Quóniam ira in indignatióne ejus: * et vita in voluntáte ejus.',
              en: '',
            },
            {
              desc: '',
              id: '6-2',
              la: 'Ad vésperum demorábitur fletus: * et ad matutínum lætítia.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Ego autem dixi in abundántia mea: * Non movébor in ætérnum.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Dómine, in voluntáte tua, * præstitísti decóri meo virtútem.',
              en: '',
            },
            {
                desc: '',
                id: '8-2',
                la: ' Avertísti fáciem tuam a me, * et factus sum conturbátus',
                en: '',
            }, 
            {
                desc: '',
                id: '9',
                la: 'Ad te, Dómine, clamábo: * et ad Deum meum deprecábor.',
                en: '',
            }, 
            {
                desc: '',
                id: '10',
                la: 'Quæ utílitas in sánguine meo, * dum descéndo in corruptiónem?',
                en: '',
            }, 
            {
                desc: '',
                id: '10-2',
                la: 'Numquid confitébitur tibi pulvis, * aut annuntiábit veritátem tuam?',
                en: '',
            }, 
            {
                desc: '',
                id: '11',
                la: 'Audívit Dóminus, et misértus est mei: * Dóminus factus est adjútor meus.',
                en: '',
            }, 
            {
                desc: '',
                id: '12',
                la: ' Convertísti planctum meum in gáudium mihi: * conscidísti saccum meum, et circumdedísti me lætítia:',
                en: '',
            }, 
            {
                desc: '',
                id: '13',
                la: ' Ut cantet tibi glória mea, et non compúngar: * Dómine, Deus meus, in ætérnum confitébor tibi.',
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
          chapter: '46',
          verses: [
            {
              desc: '',
              id: '2',
              la: ' Omnes gentes, pláudite mánibus: * iubiláte Deo in voce exsultatiónis.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: ' Quóniam Dóminus excélsus, terríbilis: * Rex magnus super omnem terram.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Subiécit pópulos nobis: * et gentes sub pédibus nostris.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: ' Elégit nobis hereditátem suam: * spéciem Iacob, quam diléxit.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Ascéndit Deus in iúbilo: * et Dóminus in voce tubæ.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Psállite Deo nostro, psállite: * psállite Regi nostro, psállite.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: ' Quóniam Rex omnis terræ Deus: * psállite sapiénter.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Regnábit Deus super gentes: * Deus sedet super sedem sanctam suam.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: ' Príncipes populórum congregáti sunt cum Deo Ábraham: * quóniam dii fortes terræ veheménter eleváti sunt.',
              en: '',
            },
          ],
        },
        {
          chapter: '5',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'Verba mea áuribus pércipe, Dómine, * intéllege clamórem meum.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: ' Inténde voci oratiónis meæ, * Rex meus et Deus meus.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Quóniam ad te orábo: * Dómine, mane exáudies vocem meam.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Mane astábo tibi et vidébo: * quóniam non Deus volens iniquitátem tu es.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: ' Neque habitábit iuxta te malígnus: * neque permanébunt iniústi ante óculos tuos.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'dísti omnes, qui operántur iniquitátem: * perdes omnes, qui loquúntur mendácium.',
              en: '',
            },
            {
              desc: '',
              id: '7-2',
              la: 'Virum sánguinum et dolósum abominábitur Dóminus: * ego autem in multitúdine misericórdiæ tuæ.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Introíbo in domum tuam: * adorábo ad templum sanctum tuum in timóre tuo.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Dómine, deduc me in iustítia tua: * propter inimícos meos dírige in conspéctu tuo viam meam.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: ' Quóniam non est in ore eórum véritas: * cor eórum vanum est.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Sepúlcrum patens est guttur eórum, linguis suis dolóse agébant, * iúdica illos, Deus.',
              en: '',
            },
            {
              desc: '',
              id: '11-2',
              la: ' Décidant a cogitatiónibus suis, secúndum multitúdinem impietátum eórum expélle eos, * quóniam irritavérunt te, Dómine.',
              en: '',
            },
            {
              desc: '',
              id: '12',
              la: ' Et læténtur omnes, qui sperant in te, * in ætérnum exsultábunt: et habitábis in eis.',
              en: '',
            },
            {
              desc: '',
              id: '12-2',
              la: ' Et gloriabúntur in te omnes, qui díligunt nomen tuum, * quóniam tu benedíces iusto.',
              en: '',
            },
            {
              desc: '',
              id: '13',
              la: 'Dómine, ut scuto bonæ voluntátis tuæ * coronásti nos.',
              en: '',
            },
          ],
        },
        {
          chapter: '28',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Afférte Dómino, fílii Dei: * afférte Dómino fílios aríetum.',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: ' Afférte Dómino glóriam et honórem, afférte Dómino glóriam nómini eius: * adoráte Dóminum in átrio sancto eius.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Vox Dómini super aquas, Deus maiestátis intónuit: * Dóminus super aquas multas.',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Vox Dómini in virtúte: * vox Dómini in magnificéntia.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Vox Dómini confringéntis cedros: * et confrínget Dóminus cedros Líbani:',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: 'Et commínuet eas tamquam vítulum Líbani: * et diléctus quemádmodum fílius unicórnium.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Vox Dómini intercidéntis flammam ignis: * vox Dómini concutiéntis desértum: et commovébit Dóminus desértum Cades.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Vox Dómini præparántis cervos, et revelábit condénsa: * et in templo eius omnes dicent glóriam.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: ' Dóminus dilúvium inhabitáre facit: * et sedébit Dóminus Rex in ætérnum.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Dóminus virtútem pópulo suo dabit: * Dóminus benedícet pópulo suo in pace.',
              en: '',
            },
           
          ],
        },
        {
          desc: 'Canticum David',
          chapter: '1 Par. 29:10-13',
          verses: [
            {
              desc: '',
              id: '10',
              la: 'Benedíctus es, Dómine, Deus Israël patris nostri, * ab ætérno in ætérnum.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Tua est, Dómine, magnificéntia, et poténtia, * et glória, atque victória:',
              en: '',
            },
            {
              desc: '',
              id: '11-2',
              la: ' Et tibi laus: * cuncta enim quæ in cælo sunt, et in terra, tua sunt:',
              en: '',
            },
            {
              desc: '',
              id: '11-3',
              la: 'Tuum, Dómine, regnum, * et tu es super omnes príncipes.',
              en: '',
            },
            {
              desc: '',
              id: '12',
              la: 'Tuæ divítiæ, et tua est glória: * tu domináris ómnium,',
              en: '',
            },
            {
              desc: '',
              id: '12',
              la: 'In manu tua virtus et poténtia: * in manu tua magnitúdo, et impérium ómnium.',
              en: '',
            },
            {
              desc: '',
              id: '13',
              la: 'Nunc ígitur, Deus noster, confitémur tibi, * et laudámus nomen tuum ínclitum.',
              en: '',
            },
            
            
          ],
        },
        {
          chapter: '116',
          verses: [
            {
              desc: '',
              id: '10',
              la: 'Benedíctus es, Dómine, Deus Israël patris nostri, * ab ætérno in ætérnum.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: 'Tua est, Dómine, magnificéntia, et poténtia, * et glória, atque victória:',
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
          chapter: '23',
          verses: [
            {
              desc: '',
              id: '1',
              la: 'Dómini est terra, et plenitúdo ejus: * orbis terrárum, et univérsi qui hábitant in eo.',
              en: '',
            },
            {
              desc: '',
              id: '2',
              la: 'Quia ipse super mária fundávit eum: * et super flúmina præparávit eum.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Quis ascéndet in montem Dómini? * aut quis stabit in loco sancto ejus?',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: 'Ínnocens mánibus et mundo corde, * qui non accépit in vano ánimam suam, nec jurávit in dolo próximo suo.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'Hic accípiet benedictiónem a Dómino: * et misericórdiam a Deo, salutári suo.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: ' Hæc est generátio quæréntium eum, * quæréntium fáciem Dei Jacob.',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Attóllite portas, príncipes, vestras, et elevámini, portæ æternáles: * et introíbit Rex glóriæ.',
              en: '',
            },
            {
              desc: '',
              id: '8',
              la: 'Quis est iste Rex glóriæ? * Dóminus fortis et potens: Dóminus potens in prǽlio.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: ' Attóllite portas, príncipes, vestras, et elevámini, portæ æternáles: * et introíbit Rex glóriæ.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: 'Quis est iste Rex glóriæ? * Dóminus virtútum ipse est Rex glóriæ.',
              en: '',
            },
            
          ],
        },
        {
          chapter: '18(2-7)',
          verses: [
            {
              desc: '',
              id: '2',
              la: 'Cæli enárrant glóriam Dei: * et ópera mánuum ejus annúntiat firmaméntum.',
              en: '',
            },
            {
              desc: '',
              id: '3',
              la: 'Dies diéi erúctat verbum, * et nox nocti índicat sciéntiam',
              en: '',
            },
            {
              desc: '',
              id: '4',
              la: ' Non sunt loquélæ, neque sermónes, * quorum non audiántur voces eórum.',
              en: '',
            },
            {
              desc: '',
              id: '5',
              la: 'In omnem terram exívit sonus eórum: * et in fines orbis terræ verba eórum.',
              en: '',
            },
            {
              desc: '',
              id: '6',
              la: ' In sole pósuit tabernáculum suum: * et ipse tamquam sponsus procédens de thálamo suo:',
              en: '',
            },
            {
              desc: '',
              id: '6-2',
              la: 'Exsultávit ut gigas ad curréndam viam, * a summo cælo egréssio ejus:',
              en: '',
            },
            {
              desc: '',
              id: '7',
              la: 'Et occúrsus ejus usque ad summum ejus: * nec est qui se abscóndat a calóre ejus.',
              en: '',
            },
            
            
          ],
        },
        {
          chapter: '18(8-15)',
          verses: [
            {
              desc: 'Ghimel',
              id: '8',
              la: ' Lex Dómini immaculáta, convértens ánimas: * testimónium Dómini fidéle, sapiéntiam præstans párvulis.',
              en: '',
            },
            {
              desc: '',
              id: '9',
              la: 'Justítiæ Dómini rectæ, lætificántes corda: * præcéptum Dómini lúcidum, illúminans óculos.',
              en: '',
            },
            {
              desc: '',
              id: '10',
              la: ' Timor Dómini sanctus, pérmanens in sǽculum sǽculi: * judícia Dómini vera, justificáta in semetípsa.',
              en: '',
            },
            {
              desc: '',
              id: '11',
              la: ' Desiderabília super aurum et lápidem pretiósum multum: * et dulcióra super mel et favum.',
              en: '',
            },
            {
              desc: '',
              id: '12',
              la: 'Étenim servus tuus custódit ea, * in custodiéndis illis retribútio multa.',
              en: '',
            },
            {
              desc: '',
              id: '13',
              la: 'Delícta quis intéllegit? ab occúltis meis munda me: * et ab aliénis parce servo tuo.',
              en: '',
            },
            {
              desc: '',
              id: '14',
              la: 'Si mei non fúerint domináti, tunc immaculátus ero: * et emundábor a delícto máximo.',
              en: '',
            },
            {
              desc: '',
              id: '15',
              la: 'Et erunt ut compláceant elóquia oris mei: * et meditátio cordis mei in conspéctu tuo semper.',
              en: '',
            },
            {
              desc: '',
              id: '15-2',
              la: 'Et erunt ut compláceant elóquia oris mei: * et meditátio cordis mei in conspéctu tuo semper.',
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
    http: {path: '/sunday/compline', verb: 'GET'},
    returns: {root: true, type: 'Object'},
  });
};

