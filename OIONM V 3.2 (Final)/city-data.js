// Stage 1 City Data
var stage1Cities = [
    {
        name: 'Pune',
        location: [18.5204, 73.8567],
        zoom: 11,
        nextStageCities: [
            // Stage 2 City Data
            {
                name: 'Magarpata',
                location: [18.51653814567021, 73.926778154563],
                zoom: 15,
                nextStageCities: [
                    // Stage 3 City Data
                    {
                        name: 'Cybercity',
                        location: [18.514386849019413, 73.92562765016692],
                        zoom: 17,
                        offices: [
                            {
                                name: 'Tower 1',
                                location: [18.514222793614444, 73.92855292440751],
                                details: 'CYBER CITY, Magarpatta Inner Circle, Cybercity, Magarpatta, Hadapsar, Pune, Maharashtra 411028',
                                website: '',
                                officesWithinTower: [
                                    {
                                        name: 'WNS Global Services',
                                        details: 'BPO Company',
                                        contactPerson: '',
                                        contactEmail: '',
                                        phone: '02067674000',
                                        website: 'http://www.wns.com/'
                                    },
                                    {
                                        name: 'EXL Service Hadapsar',
                                        details: 'BPO Company',
                                        contactPerson: '',
                                        contactEmail: '',
                                        phone: '02026824949',
                                        website: 'https://www.exlservice.com/'
                                    },
                                    {
                                        name: 'YASH Technologies',
                                        details: 'Software Company',
                                        contactPerson: '',
                                        contactEmail: '',
                                        phone: '02071258000',
                                        website: 'http://www.yash.com/'
                                    },
                                    {
                                        name: 'KET Infotech Pvt. Ltd Pune',
                                        details: 'Corporate Office',
                                        contactPerson: '',
                                        contactEmail: '',
                                        phone: '',
                                        website: ''
                                    },
                                    {
                                        name: 'Rubicon',
                                        details: 'Training Center',
                                        contactPerson: '',
                                        contactEmail: '',
                                        phone: '08805512088',
                                        website: 'http://www.my-rubicon.com/'
                                    },
                                    {
                                        name: 'POSCO India Private Limited Pune Office.',
                                        details: 'Steel Distributor',
                                        contactPerson: '',
                                        contactEmail: '',
                                        phone: '',
                                        website: ''
                                    },
                                    {
                                        name: 'Sunrise The Digital Earn',
                                        details: 'Internet Marketing Service',
                                        contactPerson: '',
                                        contactEmail: '',
                                        phone: '07581968594',
                                        website: ''
                                    },
                                    {
                                        name: 'AGS Customer Services Pvt. Ltd.',
                                        details: 'Corporate Office',
                                        contactPerson: '',
                                        contactEmail: '',
                                        phone: '',
                                        website: ''
                                    },
                                    {
                                        name: 'Anaxturia IT Services',
                                        details: 'Corporate Office',
                                        contactPerson: '',
                                        contactEmail: '',
                                        phone: '',
                                        website: ''
                                    },
                                    {
                                        name: 'NEXSWORLD',
                                        details: '',
                                        contactPerson: '',
                                        contactEmail: '',
                                        phone: '',
                                        website: 'https://nexsworld.com/'
                                    },
                 
                                ]
                            },{
                                name: 'Tower 2',
                                location: [18.51313797446835, 73.92793282815828],
                                details: 'Tower 2, CYBER CITY, Magarpatta Inner Circle, Cybercity, Magarpatta, Hadapsar, Pune, Maharashtra 411028',
                                website: '',
                                officesWithinTower: [
                                    {
                                        name: 'WNS Global Services',
                                        details: 'BPO Company',
                                        contactPerson: '',
                                        contactEmail: '',
                                        phone: '02067674000',
                                        website: 'http://www.wns.com/'
                                    },
                                    {
                                        name: 'EXL Service Hadapsar',
                                        details: 'BPO Company',
                                        contactPerson: '',
                                        contactEmail: '',
                                        phone: '02026824949',
                                        website: 'https://www.exlservice.com/'
                                    },
                                    {
                                        name: 'YASH Technologies',
                                        details: 'Software Company',
                                        contactPerson: '',
                                        contactEmail: '',
                                        phone: '02071258000',
                                        website: 'http://www.yash.com/'
                                    },
                                    {
                                        name: 'KET Infotech Pvt. Ltd Pune',
                                        details: 'Corporate Office',
                                        contactPerson: '',
                                        contactEmail: '',
                                        phone: '',
                                        website: ''
                                    },
                                    {
                                        name: 'Rubicon',
                                        details: 'Training Center',
                                        contactPerson: '',
                                        contactEmail: '',
                                        phone: '08805512088',
                                        website: 'http://www.my-rubicon.com/'
                                    },
                                    {
                                        name: 'POSCO India Private Limited Pune Office.',
                                        details: 'Steel Distributor',
                                        contactPerson: '',
                                        contactEmail: '',
                                        phone: '',
                                        website: ''
                                    },
                                    {
                                        name: 'Sunrise The Digital Earn',
                                        details: 'Internet Marketing Service',
                                        contactPerson: '',
                                        contactEmail: '',
                                        phone: '07581968594',
                                        website: ''
                                    },
                                    {
                                        name: 'AGS Customer Services Pvt. Ltd.',
                                        details: 'Corporate Office',
                                        contactPerson: '',
                                        contactEmail: '',
                                        phone: '',
                                        website: ''
                                    },
                                    {
                                        name: 'Anaxturia IT Services',
                                        details: 'Corporate Office',
                                        contactPerson: '',
                                        contactEmail: '',
                                        phone: '',
                                        website: ''
                                    },
                                    {
                                        name: 'NEXSWORLD',
                                        details: '',
                                        contactPerson: '',
                                        contactEmail: '',
                                        phone: '',
                                        website: 'https://nexsworld.com/'
                                    },
                 
                                ]
                            },
                            // Add more offices if needed
                        ]
                    },
                    // Add more Stage 3 cities if needed
                ]
            },{
                name: 'Hinjawadi',
                location: [18.5907761542063, 73.73867672232366],
                zoom: 15,
                nextStageCities: [
                    // Stage 3 City Data
                    {
                        name: 'Phase 1',
                        location: [18.591104613038304, 73.72683750533827],
                        zoom: 17,
                        offices: [
                            {
                                name: 'InfoStretch Corporation (India) Pvt. Ltd',
                                location: [18.580579674771826, 73.73787002872011],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02067287800',
                                website: 'http://www.infostretch.com/'
                            },
                            {
                                name: 'Wipro Limited',
                                location: [18.587500361012996, 73.73310075505516],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '',
                                website: 'https://www.wipro.com/'                   
                            },{
                                name: 'Leometric Technology Private Limited - Website, Web Application and Mobile Application Development Partner in Pune India.',
                                location: [18.586081618247277, 73.73855717714804],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '09405276725',
                                website: 'http://www.leometric.com/'
                            },
                            {
                                name: 'ThinkSmart IT Solutions Pvt Ltd - Phase 1 office',
                                location: [18.586480540998256, 73.73858264468406],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02065220908',
                                website: 'http://www.thinksmartsoft.com/'                   
                            },{
                                name: 'Tata Technologies Ltd.',
                                location: [18.585604698250485, 73.73325516941362],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02066529299',
                                website: 'http://www.tatatechnologies.com/'
                            },
                            {
                                name: 'Saama Technologies (India) Pvt Ltd',
                                location: [18.580353951712976, 73.73792312160894],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02066929000',
                                website: 'http://www.saama.com/'                   
                            },{
                                name: 'HCL Technologies Limited (Amber Fort)',
                                location: [18.59262930928835, 73.7323587185006],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02040284444',
                                website: 'http://www.hcltech.com/'
                            },
                            {
                                name: 'Globant India Pvt. Ltd.',
                                location: [18.579313638180643, 73.73905370123131],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02067105300',
                                website: 'https://www.globant.com/'                   
                            },{
                                name: 'Infosys Phase 1 Building 1',
                                location: [18.58691187360259, 73.73480385676187],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02022932800',
                                website: 'http://www.infosys.com/'
                            },{
                                name: 'Digital Group Infotech Pvt. Ltd.',
                                location: [18.59218862601615, 73.73224097238885],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02066532111',
                                website: 'https://www.thedigitalgroup.com/'
                            },{
                                name: 'ANSYS Software Pvt. Ltd.',
                                location: [18.591823996083605, 73.7358556542025],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02066522500',
                                website: 'https://www.ansys.com/'
                            },{
                                name: 'Birlasoft Limited',
                                location: [18.593805267434444, 73.7345805918993],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02066525000',
                                website: 'https://www.birlasoft.com/'
                            },{
                                name: 'NeoSOFT',
                                location: [18.57892870429821, 73.7400364749369],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02240500600',
                                website: 'http://www.neosofttech.com/'
                            },{
                                name: 'e-Zest, An Accion Labs Company',
                                location: [18.578806248724607, 73.74006627510072],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '08055839378',
                                website: 'https://www.e-zest.com/'
                            },{
                                name: 'Aicence IT Solutions (OPC) Private Limited',
                                location: [18.592326566969927, 73.73303936932474],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '',
                                website: 'https://aicence.com/'
                            },{
                                name: 'Websym Solutions Pvt. Ltd.',
                                location: [18.59460124219807, 73.72944497631457],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02066143400',
                                website: ''
                            },{
                                name: 'Cisco Systems pvt ltd',
                                location: [18.58682683217317, 73.73785039739556],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02042042100',
                                website: 'http://www.cisco.com/'
                            },{
                                name: 'HCL Technologies Ltd',
                                location: [18.580418792302915, 73.73719365099925],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02040284444',
                                website: 'https://www.hcltech.com/'
                            },{
                                name: 'Pesh Infotech - Best Offices at Hinjewadi.',
                                location: [18.587396276988372, 73.73808260093628],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '09225655601',
                                website: 'http://peshgroup.com/pesh_infotech.php'
                            },{
                                name: 'DevLogic Technologies',
                                location: [18.586146285888322, 73.73876124735017],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '',
                                website: ''
                            },{
                                name: 'M-Tech Innovations LTD',
                                location: [18.583749638171266, 73.73503258448584],
                                details: 'Manufacturer',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02022932020',
                                website: 'https://www.m-techindia.com/'
                            },{
                                name: 'Cognizant ISH office',
                                location: [18.58316870528418, 73.73407426452341],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02040216000',
                                website: 'http://cognizant.com/'
                            },{
                                name: 'IT Gurus Software - Top mobile app development company in india | Web development company',
                                location: [18.579752446710966, 73.7380683688495],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '09021734357',
                                website: 'http://www.itgurussoftware.com/'
                            },{
                                name: 'Chaphekar Engg Private Limited',
                                location: [18.59004225818897, 73.73083649593462],
                                details: 'Industrial equipment supplier',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02066524878',
                                website: 'https://www.chaphekarengg.com/'
                            },{
                                name: 'Harman',
                                location: [18.58133381770396, 73.73849425197015],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02039557000',
                                website: 'http://www.harman.com/'
                            },{
                                name: 'MSys Technologies',
                                location: [18.59051801734325, 73.73525684686953],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02066545700',
                                website: 'https://msystechnologies.com/'
                            },{
                                name: 'Radius Tech Park',
                                location: [18.5810698737155, 73.7384580862752],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '',
                                website: ''
                            },{
                                name: 'Searce',
                                location: [18.579995588318937, 73.73808159814018],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02067269800',
                                website: 'http://www.searce.com/'
                            },{
                                name: 'LTIMindtree',
                                location: [18.59354120541275, 73.7330298415363],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02066571212',
                                website: 'https://www.ltimindtree.com/'
                            },{
                                name: 'Labcorp',
                                location: [18.57968220635887, 73.73824331437474],
                                details: 'Pharmaceutical company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '08008456167',
                                website: 'http://www.labcorp.com/'
                            },{
                                name: 'Samvardhana Motherson Group',
                                location: [18.59134524369647, 73.73118550955321],
                                details: 'Auto parts manufacturer',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '',
                                website: 'https://www.assureshift.in/packers-and-movers-pune'
                            },{
                                name: 'Pure Technology | Software & Mobile App Development Company, IT staffing, IoT solution for Smart factory',
                                location: [18.590975449548647, 73.75314711074809],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '08329849726',
                                website: 'https://puretechnology.in/'
                            },{
                                name: 'CloudRedux',
                                location: [18.58662411185434, 73.7386367016498],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '09552801437',
                                website: 'https://cloudredux.com/'
                            },{
                                name: 'Samratsoft Corporation',
                                location: [18.588773511388496, 73.7373879990159],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '',
                                website: ''
                            },{
                                name: 'Cradiant IT Services Pvt. Ltd.',
                                location: [18.592902780750034, 73.72970110667124],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '09823062475',
                                website: 'http://www.cradiant.com/'
                            },{
                                name: 'PharmaACE',
                                location: [18.57959785795535, 73.73789811066267],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '',
                                website: 'https://www.pharmaace.com/'
                            },{
                                name: '',
                                location: [0, 0],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '',
                                website: ''
                            },{
                                name: '',
                                location: [0, 0],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '',
                                website: ''
                            },{
                                name: '',
                                location: [0, 0],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '',
                                website: ''
                            },
                            
                            
                            
                            
                            
                            // Add more offices if needed
                        ]
                    },{
                        name: 'Phase 2',
                        location: [18.594107148930842, 73.70353632587768],
                        zoom: 17,
                        offices: [
                            {
                                name: 'IBM',
                                location: [18.603081633315643, 73.71602788498019],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02042171999',
                                website: 'http://www.ibm.com/in/en/'
                            },{
                                name: 'Emcure Pharmaceuticals Limited',
                                location: [18.59511995941521, 73.71291166343464],
                                details: 'Pharmaceutical company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '',
                                website: ''
                            },{
                                name: 'Tata AutoComp Systems Ltd.',
                                location: [18.592450935684415, 73.7036350117189],
                                details: 'Manufacturer',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02066535300',
                                website: 'https://tataautocomp.com/'
                            },{
                                name: 'Flex',
                                location: [18.606143548855005, 73.71705722874947],
                                details: 'Electronics manufacturer',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02066581200',
                                website: 'https://flex.com/'
                            },{
                                name: 'SAERTEX INDIA PRIVATE LIMITED',
                                location: [18.595068130994456, 73.70124260605773],
                                details: 'Manufacturer',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02066537600',
                                website: 'http://www.saertex.com/'
                            },{
                                name: 'iASYS Technology Solutions - Engineering Unit',
                                location: [18.597672334590047, 73.72566212740371],
                                details: 'Mechanical engineer',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02025290128',
                                website: 'http://www.iasys.co.in/'
                            },{
                                name: 'Omniactive Health Technologies',
                                location: [18.595592883162457, 73.71340482568743],
                                details: 'Chemical plant',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02066742700',
                                website: 'http://www.omniactives.com/'
                            },{
                                name: 'Döehler India Private Limited',
                                location: [18.588887068102498, 73.70197411502154],
                                details: 'Food Processing Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '61513063061',
                                website: 'http://www.doehler.com/'
                            },{
                                name: 'Wipro Technologies Ltd',
                                location: [18.59731404159577, 73.71841051449377],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02022933700',
                                website: 'https://www.wipro.com/'
                            },{
                                name: 'Nitor Infotech',
                                location: [18.605645295751643, 73.71573360204047],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02066940100',
                                website: 'https://www.nitorinfotech.com/'
                            },{
                                name: 'Shandong Heavy Industry India Pvt.Ltd. (A Weichai Company)',
                                location: [18.589301407389666, 73.7050140359892],
                                details: 'Corporate office',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02067921100',
                                website: ''
                            },{
                                name: 'Centaur Pharmaceuticals',
                                location: [18.59482422086088, 73.71362973483798],
                                details: 'Pharmaceutical company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '04215014634',
                                website: 'http://www.centaurpharma.com/'
                            },{
                                name: 'Gennova Biopharmaceuticals Ltd',
                                location: [18.59325147617717, 73.7136816955188],
                                details: 'Pharmaceutical company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02039821300',
                                website: 'http://www.gennova.bio/'
                            },{
                                name: 'Dana India Technical Centre Pvt Ltd.',
                                location: [18.593154062491838, 73.70467956740521],
                                details: 'Corporate office',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '08337692926',
                                website: 'http://www.gwbdriveshaft.com/'
                            },{
                                name: 'Hikal Ltd.',
                                location: [18.594366321919026, 73.71465567994099],
                                details: 'Chemical Manufacturer',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02042004111',
                                website: 'https://www.hikal.com/'
                            },{
                                name: 'Chirpn IT Solutions',
                                location: [18.59636117634896, 73.71792355253854],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '07276680044',
                                website: 'http://www.chirpn.com/'
                            },{
                                name: 'Rockwell Automation',
                                location: [18.603806054165076, 73.71582484703323],
                                details: 'Automation company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '01204671600',
                                website: 'http://www.rockwellautomation.com/'
                            },{
                                name: 'Nile Building Embassy Techzone',
                                location: [18.606146790242896, 73.71342585726909],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '',
                                website: 'http://www.embassyindia.com/'
                            },{
                                name: 'NICE Interactive Solutions India Pvt. Ltd.',
                                location: [18.606455846483726, 73.71672439412481],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02042914000',
                                website: 'https://www.nice.com/company/about-us'
                            },{
                                name: 'Diehl Metal India',
                                location: [18.596049345839727, 73.72576210745876],
                                details: 'Manufacturer',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02066742600',
                                website: 'http://www.diehl.com/'
                            },{
                                name: 'Embassy Tech Zone',
                                location: [18.60325183224258, 73.71601882403279],
                                details: 'Business park',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '02042206000',
                                website: 'https://www.embassyofficeparks.com/ourportfolio/pune/embassy-techzone/'
                            },{
                                name: 'TechNeutron Ltd',
                                location: [18.596576478957093, 73.71846087670323],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '07758818396',
                                website: 'http://techneutron.in/'
                            },{
                                name: 'Persistent Systems Limited',
                                location: [18.592592120045413, 73.71837324686337],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '',
                                website: 'http://www.persistent.com/'
                            },{
                                name: '',
                                location: [0, 0],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '',
                                website: ''
                            },{
                                name: '',
                                location: [0, 0],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '',
                                website: ''
                            },{
                                name: '',
                                location: [0, 0],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '',
                                website: ''
                            },{
                                name: '',
                                location: [0, 0],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '',
                                website: ''
                            },

                        ]
                    },{
                        name: 'Phase 3',
                        location: [18.580116892975624, 73.68380667672523],
                        zoom: 17,
                        offices: [
                            {
                                name: '',
                                location: [0, 0],
                                details: 'Software Company',
                                contactPerson: '',
                                contactEmail: '',
                                phone: '',
                                website: ''
                            },
                        ]
                    },
                    // Add more Stage 3 cities if needed
                ]
            },
            // Add more Stage 2 cities if needed
        ]
    },
    // Add more Stage 1 cities if needed
    {
        name: 'Hyderabad',
        location: [17.41693490629407, 78.47396351937829],
        zoom: 11,
        nextStageCities: [
            // Stage 2 City Data
            {
                name: 'Madhapur',
                location: [17.449269017254746, 78.3912537572074],
                zoom: 15,
                nextStageCities: [
                    // Stage 3 City Data
                    {
                        name: 'Raheja Mindspace',
                        location: [17.438729602979233, 78.38477710181964],
                        zoom: 17,
                        offices: [
                            // Office Data
                            {
                                name: 'Tech Indya IT Services Pvt. Ltd.',
                                location: [17.44208500001119, 78.38274707876427],
                                details: 'Details for Office 1 within Cyber Tower A',
                                website: 'http://example.com/office-1'
                            },
                            {
                                name: 'Landmark IT Solutions Pvt Ltd',
                                location: [17.442678659685782, 78.38716735923126],
                                details: 'Details for Office 1 within Cyber Tower A',
                                website: 'http://example.com/office-1'                            
                            }
                        ]
                    },
                    // Add more Stage 3 cities if needed
                ]
            },
            // Add more Stage 2 cities if needed
        ]
    }
];




// Array to store markers
var stage1Markers = [];
// Array to store labels
var stage1Labels = [];

// Create markers for Stage 1 cities
stage1Cities.forEach(city => {
    var markerAndLabel = cityUtils.createCityMarker(map, city, stage1Markers, stage1Labels);
    stage1Markers.push(markerAndLabel.marker);
    stage1Labels.push(markerAndLabel.label);
});
