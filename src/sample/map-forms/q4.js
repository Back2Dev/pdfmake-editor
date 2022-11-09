const js = `dd = 
{
	footer: {
fontSize: 7,
layout: 'noBorders',
table: { 
    widths: [30, '*', '*', 30],
    body: [
            ['','',{
                bold: true, 
                alignment: 'right', 
                fontSize: 9,
                text: '(Please keep a copy of this form)'
                
            },''],
            ['',{
                text:'1035629(3) Updated: Tue Jul 19 00:35:38 2022'
                
            },
            {
                alignment: 'right', 
                text:'Copyright © 2012 Management Action Programs, Inc. All right reserved.'
            },'']
        ]
}
},
content: [
{
    layout: 'noBorders',
    table: {
        widths: [280, 'auto'],
        body: [
            [
                {
                    image: 'icon',
                    alignment: 'left',
                    width: 150,
                },
                {
                    layout: 'noBorders',
                    fontSize: 9,
                    table: {
                        body:[
                            [{style:'header_left',text:'Participant:'},'ID_name'],
                            [{style:'header_left',text:'Organization:'},'ID_org'],
                            [{style:'header_left',text:'Workshop Date:'},'ID_date'],
                            [{style:'header_left',text:'Due Date:'},'ID_due'],
                            [{style:'header_left',text:'Return Fax:'},'(818) 981-2717']
                        ]
                    }
                }
            ]
        ]
    }
},
{
    fontSize: 10,
    bold: true,
    text: ' '
},
{
    fontSize: 13,
    bold: true,
    headerRows: 1,
    table:{
        widths: ["*",20],
        body: [
            [
                {
                    fillColor: 'black',
                    color: 'white',
                    text: 'PROFESSIONAL CAREER SUMMARY'
                },
                {
                    alignment: 'center',
                    text:"Q4"
                },
            ]
        ]
    }
    
},
{canvas: [{type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 0.5}]},
{ text: '\\n'},
{
    style: 'body',
    table: {
        widths: [70,'*',50,'*',40,'*',40,'*'],
        body: [
            [
                {text:'Home adress:', border: [true,true,false,true]},
                {text:'71 Acaia ave', border: [false,true,true,true], colSpan: 5, bold: true},
                '','','','',
                {text:'Phone:', border: [true,true,false,true]},
                {text:'', border:[false,true,true,true], bold: true}
            ],[
                {text:'City:', border: [true,true,false,true]},
                {text:'Newport Beach', border: [false,true,true,true], colSpan: 3, bold: true},
                '','',
                {text:'State:', border: [true,true,false,true]},
                {text:'CA', border: [false,true,true,true]}, 
                {text:'Zip code:', border: [true,true,false,true]},
                {text:'90210', border: [false,true,true,true]}
            ],[
                {text:'Marital:', border: [true,true,false,true]},
                {text:'0', border: [false,true,true,true], bold: true},
                {text:'Birth date:', border: [true,true,false,true]},
                {text:'12/12/2012', border: [false,true,true,true], bold: true},
                {text:'Children:', border: [true,true,false,true]},
                {text:'100', border: [false,true,true,true], bold: true},
                {text:'Ages:', border: [true,true,false,true]},
                {text:'1,2,3', border: [false,true,true,true], bold: true}
            ],[
                {text:'Personal email:', border: [true,true,false,true]},
                {text:'me@me.com', border: [false,true,true,true], bold: true, colSpan: 3},
                '','',
                {text:'LinkedIn:', border: [true,true,false,true]},
                {text:'', border: [false,true,true,true], bold: true, colSpan: 3},
                '',''
            ],[
                {text:'Facebook:', border: [true,true,false,true]},
                {text:'', border: [false,true,true,true], bold: true, colSpan: 3},
                '','',
                {text:'', colSpan: 4},'','',''
            ]
        ]
    }
},
{canvas: [{type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 0.5}]},
{
    style: 'body',
    layout: 'noBorders',
    table: {
        body:[
        [''],
        [{text:'Avcational interests and hobbies:', style: 'body_question'}],
        [''],
        [{text:'Fishing, reading, Sleeping', style: 'body_answer'}],
        [{canvas: [{type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 0.5}]}],
        [''],
        [{text:'Organizations (social, service, bussiness, or professional) to which you belong:', style: 'body_question'}],
        [''],
        [{text:'None', style: 'body_answer'}],
        [{canvas: [{type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 0.5}]}],
        [''],
        [{text:'Periodicals you read:', style: 'body_question'}],
        [''],
        [{text:'Turkeys Specials', style: 'body_answer'}],
        [{canvas: [{type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 0.5}]}],
        [''],
        [{text:'Educational background:', style: 'body_question'}],
        [''],
        [{text:'Highly educated', style: 'body_answer'}],
        [{canvas: [{type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 0.5}]}],
        [''],
        [{text:'Business or professional seminars taken:', style: 'body_question'}],
        [''],
        [{text:'None', style: 'body_answer'}],
        [{canvas: [{type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 0.5}]}],
        [''],
        [{text:'Key advisors:', style: 'body_question'}],
        [''],
        [{text:'Michael Jordan', style: 'body_answer'}],
        [{canvas: [{type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 0.5}]}],
        [''],
        [{text:'Employment History', style: 'body_question'}],
        [''],
        [{canvas: [{type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 0.5}]}],
        [''],
        ]
    }
},
{
    style: 'body',
    layout: 'noBorders',
    table: {
        widths: [50,'*',80,'*',50,'*'],
        body:[
            [
                {text: 'Employer:',style:'body_question'},{text:'Disney',style:'body_answer'},
                {text: 'From:',style:'body_question'},{text:'1990',style:'body_answer'},
                {text: 'To:',style:'body_question'},{text:'1999',style:'body_answer'},
            ],
            [
                {text: 'Title:',style:'body_question'},{text:'CEO',style:'body_answer'},
                {text: 'Beginning Salary:',style:'body_question'},{text:'190000',style:'body_answer'},
                {text: 'End Salary:',style:'body_question'},{text:'200000',style:'body_answer'},
            ],
            [{canvas: [{type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 0.5}], colSpan: 6}],
            [{text:'', colSpan: 6}],
            [
                {text: 'Employer:',style:'body_question'},{text:'Disney',style:'body_answer'},
                {text: 'From:',style:'body_question'},{text:'1990',style:'body_answer'},
                {text: 'To:',style:'body_question'},{text:'1999',style:'body_answer'},
            ],
            [
                {text: 'Title:',style:'body_question'},{text:'CEO',style:'body_answer'},
                {text: 'Beginning Salary:',style:'body_question'},{text:'190000',style:'body_answer'},
                {text: 'End Salary:',style:'body_question'},{text:'200000',style:'body_answer'},
            ],
            [{canvas: [{type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 0.5}], colSpan: 6}],
            [{text:'', colSpan: 6}],
            [
                {text: 'Employer:',style:'body_question'},{text:'Disney',style:'body_answer'},
                {text: 'From:',style:'body_question'},{text:'1990',style:'body_answer'},
                {text: 'To:',style:'body_question'},{text:'1999',style:'body_answer'},
            ],
            [
                {text: 'Title:',style:'body_question'},{text:'CEO',style:'body_answer'},
                {text: 'Beginning Salary:',style:'body_question'},{text:'190000',style:'body_answer'},
                {text: 'End Salary:',style:'body_question'},{text:'200000',style:'body_answer'},
            ],
            [{canvas: [{type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 0.5}], colSpan: 6}],
            [{text:'', colSpan: 6}],
            [
                {text: 'Employer:',style:'body_question'},{text:'Disney',style:'body_answer'},
                {text: 'From:',style:'body_question'},{text:'1990',style:'body_answer'},
                {text: 'To:',style:'body_question'},{text:'1999',style:'body_answer'},
            ],
            [
                {text: 'Title:',style:'body_question'},{text:'CEO',style:'body_answer'},
                {text: 'Beginning Salary:',style:'body_question'},{text:'190000',style:'body_answer'},
                {text: 'End Salary:',style:'body_question'},{text:'200000',style:'body_answer'},
            ],
            [{canvas: [{type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 0.5}], colSpan: 6}],
            [{text:'', colSpan: 6}],
            [
                {text: 'Employer:',style:'body_question'},{text:'Disney',style:'body_answer'},
                {text: 'From:',style:'body_question'},{text:'1990',style:'body_answer'},
                {text: 'To:',style:'body_question'},{text:'1999',style:'body_answer'},
            ],
            [
                {text: 'Title:',style:'body_question'},{text:'CEO',style:'body_answer'},
                {text: 'Beginning Salary:',style:'body_question'},{text:'190000',style:'body_answer'},
                {text: 'End Salary:',style:'body_question'},{text:'200000',style:'body_answer'},
            ],
            [{canvas: [{type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 0.5}], colSpan: 6}],
            [{text:'', colSpan: 6}],
        ]
    }
}
],
styles: {
header_left: {
    alignment: 'right'
},
sub_title: {
    fontSize: 10
},
sub_sub_title: {
    fontSize: 8,
    italics: true,
},
body: {
    fontSize: 9,
    alignment: 'left'
},
body_table_name: {
    border: [false, false, false, false],
    alignment: 'left'
},
body_question: {
    
},
body_answer: {
    bold: true
}

},

images: {
icon: "url('data:image/png;base64,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')"
}
	
}`;
export default js;
