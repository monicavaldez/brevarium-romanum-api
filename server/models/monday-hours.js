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

