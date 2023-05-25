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
	                        text: 'MANAGEMENT AND LEADERSHIP INVENTORY - PARTICIPANT'
	                    },
	                    {
	                        alignment: 'center',
	                        text:"Q2"
	                    },
	                ]
	            ]
	        }
	        
	    },
	    { text: '\\n'},
	    {
	      style: 'body', 
	      table: {
	          widths: ['*',100],
	          body:[
	              [
	                  {
	                      border: [false,false,false,false],
	                      alignment: 'left',
	                      text: 'Please check the numbers which best describe your management and leadership abilities, 1 being poor, 9 being excellent. Your supervising manager or partner will complete the same form and the comparative results will be used as coaching tool. Please be candid and frank.'
	                  },
	                  {
	                      border: [true,true,true,true],
	                      layout: 'noBorders',
	                      italics: true,
	                      fontSize: 11,
	                      table:{
	                          widths: ['*'],
	                          body: [
	                              [{text: 'Appraised by:'}],
	                              [{bold: true, text: 'Self'}]
	                            ]
	                      }
	                  }
	            ]]
	      }
	    },
	    { text: '\\n'},
	    {   
	        layout: 'noBorders',
	        style: 'sub_title',
	        table:{
	            widths: [330,'*','*'],
	            body: [
	                    [
	                        {
	                            bold: true,
	                            text: 'Communicating Abilities'
	                        },
	                        {
	                            alignment: 'right',
                                bold: true,
	                            text: 'Appraised by:'
	                        },
	                        {
	                            italics: true,
	                            alignment: 'left',
	                            text: 'A, J, Wilson'
	                        }
	                    ]
	                ]
	        }
	    },
	    {
	        layout: 'noBorders',
	        style: 'sub_sub_title',
	        table:{
	            widths: [20,300,'*','*'],
	            body: [
	                ['',
	                    {
	                        text: '(Ability to convey meaning and obtain understanding)'
	                    },
	                    {
	                        text: '1 = Poor'
	                    },
	                    {
	                        text: '9 = Excellent'
	                    }
	                ],['','','','']
	            ]
	        }
	    },
	    {
	        style: 'body',
	        table:{
	            widths: ['*',8,8,8,8,8,8,8,8,8],
	            alignment: 'center',
	            style: 'body',
	            body: [
	                [{border: [false, false, true, true], text: ''},'1','2','3','4','5','6','7','8','9'],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Speaking one-to-one'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Speaking in groups'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Writing skills'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Listening'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Relating to supervising manager / partner'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Relating to peers'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Relating to direct reports'},'','','','','','','','X',''],
	            ]
	        }
	    },
	    { text: '\\n'},
	    {   
	        layout: 'noBorders',
	        style: 'sub_title',
	        table:{
	            widths: [330,'*','*'],
	            body: [
	                    [
	                        {
	                            bold: true,
	                            text: 'Planning Abilities'
	                        },
	                        {
	                            alignment: 'right',
	                            fontSize: 10,
	                            text: ''
	                        },
	                        {
	                            bold: true,
	                            italics: true,
	                            alignment: 'left',
	                            text: ''
	                        }
	                    ]
	                ]
	        }
	    },
	    {
	        layout: 'noBorders',
	        style: 'sub_sub_title',
	        table:{
	            widths: [20,300,'*','*'],
	            body: [
	                ['',
	                    {
	                        text: '(Ability to develop goals and strategies for future action)'
	                    },
	                    {
	                        text: '1 = Poor'
	                    },
	                    {
	                        text: '9 = Excellent'
	                    }
	                ],['','','','']
	            ]
	        }
	    },
	    {
	        style: 'body',
	        table:{
	            widths: ['*',8,8,8,8,8,8,8,8,8],
	            alignment: 'center',
	            style: 'body',
	            body: [
	                [{border: [false, false, true, true], text: ''},'1','2','3','4','5','6','7','8','9'],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Foreseeing problems and opportunities'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Analyzing problems and facts'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Setting clear, measurable goals'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Developing strategies'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Scheduling work and planning time'},'','','','','','','','X',''],
	            ]
	        }
	    },
	    { text: '\\n'},
	    {   
	        layout: 'noBorders',
	        style: 'sub_title',
	        table:{
	            widths: [330,'*','*'],
	            body: [
	                    [
	                        {
	                            bold: true,
	                            text: 'Organizing Abilities'
	                        },
	                        {
	                            alignment: 'right',
	                            fontSize: 10,
	                            text: ''
	                        },
	                        {
	                            bold: true,
	                            italics: true,
	                            alignment: 'left',
	                            text: ''
	                        }
	                    ]
	                ]
	        }
	    },
	    {
	        layout: 'noBorders',
	        style: 'sub_sub_title',
	        table:{
	            widths: [20,300,'*','*'],
	            body: [
	                ['',
	                    {
	                        text: '(Ability to align work and resources productively in relation and goals)'
	                    },
	                    {
	                        text: '1 = Poor'
	                    },
	                    {
	                        text: '9 = Excellent'
	                    }
	                ],['','','','']
	            ]
	        }
	    },
	    {
	        style: 'body',
	        table:{
	            widths: ['*',8,8,8,8,8,8,8,8,8],
	            alignment: 'center',
	            style: 'body',
	            body: [
	                [{border: [false, false, true, true], text: ''},'1','2','3','4','5','6','7','8','9'],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Allocating resources'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Coordinating the work of others'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Sorting the vital from the less important'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Delegating'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Each team member understands job responsibilities'},'','','','','','','','X',''],
	            ]
	        }
	    },
	    { text: '\\n'},
	    {   
	        layout: 'noBorders',
	        style: 'sub_title',
	        table:{
	            widths: [330,'*','*'],
	            body: [
	                    [
	                        {
	                            bold: true,
	                            text: 'Staffing Abilities'
	                        },
	                        {
	                            alignment: 'right',
	                            fontSize: 10,
	                            text: ''
	                        },
	                        {
	                            bold: true,
	                            italics: true,
	                            alignment: 'left',
	                            text: ''
	                        }
	                    ]
	                ]
	        }
	    },
	    {
	        layout: 'noBorders',
	        style: 'sub_sub_title',
	        table:{
	            widths: [20,300,'*','*'],
	            body: [
	                ['',
	                    {
	                        text: '(Ability to recruit, select, develop and retain people)'
	                    },
	                    {
	                        text: '1 = Poor'
	                    },
	                    {
	                        text: '9 = Excellent'
	                    }
	                ],['','','','']
	            ]
	        }
	    },
	    {
	        style: 'body',
	        table:{
	            widths: ['*',8,8,8,8,8,8,8,8,8],
	            alignment: 'center',
	            style: 'body',
	            body: [
	                [{border: [false, false, true, true], text: ''},'1','2','3','4','5','6','7','8','9'],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Aligning staffing needs with company goals'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Recruiting'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Selecting the right people'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Providing training opportunities'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Retaining people'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Developing potential in people'},'','','','','','','','X',''],
	            ]
	        }
	    },
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
	        text: 'BACK'
	    },
	    {
	        fontSize: 13,
	        bold: true,
	        headerRows: 1,
	        table:{
	            widths: [20,"*"],
	            body: [
	                [
	                    {
	                        alignment: 'center',
	                        text:"Q2"
	                    },
	                    {
	                        fillColor: 'black',
	                        color: 'white',
	                        text: 'MANAGEMENT AND LEADERSHIP INVENTORY - PARTICIPANT'
	                    }
	                    ]
	            ]
	        }
	        
	    },
	    {
	        text: '\\n'
	    },
	    {   
	        layout: 'noBorders',
	        style: 'sub_title',
	        table:{
	            widths: [330,'*','*'],
	            body: [
	                    [
	                        {
	                            bold: true,
	                            text: 'Controlling Abilities'
	                        },
	                        {
	                            alignment: 'right',
	                            fontSize: 10,
	                            text: 'Appraised by:'
	                        },
	                        {
	                            bold: true,
	                            italics: true,
	                            alignment: 'left',
	                            text: 'Self'
	                        }
	                    ]
	                ]
	        }
	    },
	    {
	        layout: 'noBorders',
	        style: 'sub_sub_title',
	        table:{
	            widths: [20,300,'*','*'],
	            body: [
	                ['',
	                    {
	                        text: '(Measuring performance and taking appropiate action)'
	                    },
	                    {
	                        text: '1 = Poor'
	                    },
	                    {
	                        text: '9 = Excellent'
	                    }
	                ],['','','','']
	            ]
	        }
	    },
	    {
	        style: 'body',
	        table:{
	            widths: ['*',8,8,8,8,8,8,8,8,8],
	            alignment: 'center',
	            style: 'body',
	            body: [
	                [{border: [false, false, true, true], text: ''},'1','2','3','4','5','6','7','8','9'],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Setting standards'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Assessing performance'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Following through'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Holding people accountable'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Taking corrective action'},'','','','','','','','X',''],
	            ]
	        }
	    },
	    {
	        text: '\\n'
	    },
	    {   
	        layout: 'noBorders',
	        style: 'sub_title',
	        table:{
	            widths: [330,'*','*'],
	            body: [
	                    [
	                        {
	                            bold: true,
	                            text: 'Teamwork Abilities'
	                        },
	                        {
	                            alignment: 'right',
	                            fontSize: 10,
	                            text: ''
	                        },
	                        {
	                            bold: true,
	                            italics: true,
	                            alignment: 'left',
	                            text: ''
	                        }
	                    ]
	                ]
	        }
	    },
	    {
	        layout: 'noBorders',
	        style: 'sub_sub_title',
	        table:{
	            widths: [20,300,'*','*'],
	            body: [
	                ['',
	                    {
	                        text: '(Ability to work together to achieve common goals)'
	                    },
	                    {
	                        text: '1 = Poor'
	                    },
	                    {
	                        text: '9 = Excellent'
	                    }
	                ],['','','','']
	            ]
	        }
	    },
	    {
	        style: 'body',
	        table:{
	            widths: ['*',8,8,8,8,8,8,8,8,8],
	            alignment: 'center',
	            style: 'body',
	            body: [
	                [{border: [false, false, true, true], text: ''},'1','2','3','4','5','6','7','8','9'],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Causes a high level of teamwork'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Commits self to team goals'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: "Gives support to others' programs"},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Coordinates with others to achieve goals'},'','','','','','','','X',''],
	            ]
	        }
	    },
	    {
	        text: '\\n'
	    },
	    {   
	        layout: 'noBorders',
	        style: 'sub_title',
	        table:{
	            widths: [330,'*','*'],
	            body: [
	                    [
	                        {
	                            bold: true,
	                            text: 'Leader Abilities'
	                        },
	                        {
	                            alignment: 'right',
	                            fontSize: 10,
	                            text: ''
	                        },
	                        {
	                            bold: true,
	                            italics: true,
	                            alignment: 'left',
	                            text: ''
	                        }
	                    ]
	                ]
	        }
	    },
	    {
	        layout: 'noBorders',
	        style: 'sub_sub_title',
	        table:{
	            widths: [20,300,'*','*'],
	            body: [
	                ['',
	                    {
	                        text: '(Ability to inspire people to achieve goals)'
	                    },
	                    {
	                        text: '1 = Poor'
	                    },
	                    {
	                        text: '9 = Excellent'
	                    }
	                ],['','','','']
	            ]
	        }
	    },
	    {
	        style: 'body',
	        table:{
	            widths: ['*',8,8,8,8,8,8,8,8,8],
	            alignment: 'center',
	            style: 'body',
	            body: [
	                [{border: [false, false, true, true], text: ''},'1','2','3','4','5','6','7','8','9'],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Clearly communicates vision and values'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Demonstrates determination and relentless resolve'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Demonstrates integrity'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Shows confidence'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Develops trust'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Is an excellent coach and mentor'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Inspires continuous improvement'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Demonstrates personal humility'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Demonstrates passion and commitment'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Confronts difficult issues and finds resolution'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Attracts strong people to the organization'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Maintains the focus of the organization'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Each team member has clear, quantifiable goals'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Demonstrates empathy'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Encourages excellence'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: "Job duties of the team are aligned with the organization's direction"},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Discovers and develops the strengths of others'},'','','','','','','','X',''],
	                [{border: [false, true, true, true], style: 'body_table_name', text: 'Embraces and implements change'},'','','','','','','','X',''],
	            ]
	        }
	    },
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
	        fontSize: 8,
	        alignment: 'center'
	    },
	    body_table_name: {
	        border: [false, false, false, false],
	        alignment: 'left'
	    }
	    
	},
	
	images: {
	icon: "url('data:image/png;base64,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')"
  }
}`;
export default js;
