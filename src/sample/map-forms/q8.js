const js = `dd = {
  footer: {
    columns: [
      {
        text: "ID_FORM_NO Updated: ID_DATE",
        alignment: "left",
        marginLeft: 10,
        fontSize: 8,
        bold: true,
      },
      {
        text: "(over)\\nCopyright © 2012 Management Action Programs, Inc.  All rights reserved.",
        alignment: "right",
        marginRight: 10,
        fontSize: 8,
        bold: true,
      },
    ],
  },
  content: [
    {
      layout: "noBorders",
      table: {
        widths: [250, "auto"],
        body: [
          [
            {
              image: "icon",
              alignment: "center",
              width: 125,
            },
            {
              layout: "noBorders",
              fontSize: 9,
              table: {
                body: [
                  [{ style: "header_left", text: "Participant:" }, "ID_NAME"],
                  [{ style: "header_left", text: "Organization:" }, "ID_ORG"],
                  [{ style: "header_left", text: "Workshop Date:" }, "ID_DATE"],
                  [{ style: "header_left", text: "Due Date:" }, "ID_DUE"],
                  [
                    { style: "header_left", text: "Return Fax:" },
                    "(818) 981-2717",
                  ],
                ],
              },
            },
          ],
        ],
      },
    },
    {
      fontSize: 11,
      bold: true,
      text: " ",
    },
    {
      fontSize: 13,
      bold: true,
      headerRows: 1,
      table: {
        widths: ["*", 20],
        body: [
          [
            {
              fillColor: "#092B58",
              color: "white",
              text: "ORGANIZATIONAL SUMMARY",
            },
            {
              alignment: "center",
              text: "Q8",
              color: "#092B58"
            },
          ],
        ],
      },
    },
    {
      fontSize: 11,
      bold: true,
      text: " ",
    },
    {
      table: {
        body: [
          [
            { text: "1.", bold: true },
            { text: "General information", bold: true },
          ],
          [
            { text: "", bold: true },
            {
              layout: "noBorders",
              table: {
                body: [
                  [
                    {
                      text: "A. Type of business/institution: ID_B_TYPE",
                      fontSize: 11,
                    },
                    { text: "C. Annual sales/budget: ID_BUDGET", fontSize: 11 },
                  ],
                  [
                    {
                      text: "B. Number of employees: ID_NO_OF_EMPLOYEES",
                      fontSize: 11,
                    },
                    {
                      text: "D. Annual profit/surplus: ID_PROFIT",
                      fontSize: 11,
                    },
                  ],
                ],
              },
            },
          ],
          [
            { text: "2.", bold: true },
            {
              text: "Please list the major business goals for the organization over the next three years.",
              bold: true,
            },
          ],
          ["", "ID_B_GOALS"],
          [
            { text: "3.", bold: true },
            {
              text: "Please list your own major professional goals over the next three years.",
              bold: true,
            },
          ],
          ["", "ID_P_3_YEAR_GOAL"],
          [
            { text: "4.", bold: true },
            {
              text: "What obstacles must you overcome to achieve the goals for the organization?",
              bold: true,
            },
          ],
          ["", "ID_B_OBSTACLES"],

          [
            { text: "5.", bold: true },
            {
              text: "What obstacles must you overcome to achieve your own professional goals?",
              bold: true,
            },
          ],
          ["", "ID_P_OBSTACLES"],
          [
            { text: "6.", bold: true },
            {
              text: "On a separate sheeet of paper, diagram your present organizational structure.(Attach a chart if you have it. Please include on it the names of key people and their respective positions.)",
              bold: true,
            },
          ],
          ["", "ID_ORGANIZATIONAL_STRUCTURE"],
        ],
      },
      layout: {
        hLineColor: function (rowIndex, node, columnIndex) {
          if (rowIndex === node.table.body.length) {
            return "#FFFFFF";
          } else if (rowIndex % 2 === 0) {
            return "#000000";
          } else {
            return "#FFFFFF";
          }
        },
        vLineWidth: function (i) {
          return 0;
        },
      },
    },
    {
      pageBreak: "before",
      layout: "noBorders",
      table: {
        widths: [250, "auto"],
        body: [
          [
            {
              image: "icon",
              alignment: "center",
              width: 125,
            },
            {
              layout: "noBorders",
              fontSize: 9,
              table: {
                body: [
                  [{ style: "header_left", text: "Participant:" }, "ID_NAME"],
                  [{ style: "header_left", text: "Organization:" }, "ID_ORG"],
                  [{ style: "header_left", text: "Workshop Date:" }, "ID_DATE"],
                  [{ style: "header_left", text: "Due Date:" }, "ID_DUE"],
                  [
                    { style: "header_left", text: "Return Fax:" },
                    "(818) 981-2717",
                  ],
                ],
              },
            },
          ],
        ],
      },
    },
    {
      fontSize: 11,
      bold: true,
      text: "\\nBACK ",
    },
    {
      fontSize: 13,
      bold: true,
      headerRows: 1,
      table: {
        widths: [20, "*"],
        body: [
          [
            {
              alignment: "center",
              text: "Q8",
              color: "#092B58"
            },
            {
              fillColor: "#092B58",
              color: "white",
              text: "ORGANIZATIONAL SUMMARY",
            },
          ],
        ],
      },
    },
    {
      fontSize: 11,
      bold: true,
      text: " ",
    },
    {
      table: {
        body: [
          [
            { text: "7.", bold: true },
            {
              text: "Describe the strengths and opportunities for improvement of the key people on your own senior management team:",
              bold: true,
            },
          ],
          [
            { text: "A", bold: true },
            {
              layout: "noBorders",
              table: {
                widths: ["*", "*"],
                body: [
                  [
                    { text: "Name: ID_NAME", fontSize: 11 },
                    { text: "Position: ID_POSITION", fontSize: 11 },
                  ],
                  [
                    { text: "Strengths:: ID_STRENGTH", fontSize: 11 },
                    {
                      text: "Opportunities for Improvement: ID_IMPROVEMENT",
                      fontSize: 11,
                    },
                  ],
                ],
              },
            },
          ],
          [
            { text: "B", bold: true },
            {
              layout: "noBorders",

              table: {
                widths: ["*", "*"],
                body: [
                  [
                    { text: "Name: ID_NAME", fontSize: 11 },
                    { text: "Position: ID_POSITION", fontSize: 11 },
                  ],
                  [
                    { text: "Strengths:: ID_STRENGTH", fontSize: 11 },
                    {
                      text: "Opportunities for Improvement: ID_IMPROVEMENT",
                      fontSize: 11,
                    },
                  ],
                ],
              },
            },
          ],
          [
            { text: "C", bold: true },
            {
              layout: {
                hLineColor: function (rowIndex, node, columnIndex) {
                  if (rowIndex === node.table.body.length) {
                    return "#FFFFFF";
                  } else if (rowIndex % 2 === 0) {
                    return "#000000";
                  } else {
                    return "#FFFFFF";
                  }
                },
                vLineWidth: function (i) {
                  return 0;
                },
              },

              table: {
                widths: ["*", "*"],
                body: [
                  [
                    { text: "Name: ID_NAME", fontSize: 11 },
                    { text: "Position: ID_POSITION", fontSize: 11 },
                  ],
                  [
                    { text: "Strengths:: ID_STRENGTH", fontSize: 11 },
                    {
                      text: "Opportunities for Improvement: ID_IMPROVEMENT",
                      fontSize: 11,
                    },
                  ],
                ],
              },
            },
          ],
          [
            { text: "D", bold: true },
            {
              layout: "noBorders",
              table: {
                widths: ["*", "*"],
                body: [
                  [
                    { text: "Name: ID_NAME", fontSize: 11 },
                    { text: "Position: ID_POSITION", fontSize: 11 },
                  ],
                  [
                    { text: "Strengths:: ID_STRENGTH", fontSize: 11 },
                    {
                      text: "Opportunities for Improvement: ID_IMPROVEMENT",
                      fontSize: 11,
                    },
                  ],
                ],
              },
            },
          ],
          [
            { text: "E", bold: true },
            {
              layout: {
                hLineColor: function (rowIndex, node, columnIndex) {
                  if (rowIndex === node.table.body.length) {
                    return "#FFFFFF";
                  } else if (rowIndex % 2 === 0) {
                    return "#000000";
                  } else {
                    return "#FFFFFF";
                  }
                },
                vLineWidth: function (i) {
                  return 0;
                },
              },
              table: {
                widths: ["*", "*"],
                body: [
                  [
                    { text: "Name: ID_NAME", fontSize: 11, width: "50%" },
                    {
                      text: "Position: ID_POSITION",
                      fontSize: 11,
                      width: "50%",
                    },
                  ],
                  [
                    { text: "Strengths:: ID_STRENGTH", fontSize: 11 },
                    {
                      text: "Opportunities for Improvement: ID_IMPROVEMENT",
                      fontSize: 11,
                    },
                  ],
                ],
              },
            },
          ],
          [
            { text: "F", bold: true },
            {
              layout: "noBorders",

              table: {
                widths: ["*", "*"],
                body: [
                  [
                    { text: "Name: ID_NAME", fontSize: 11 },
                    { text: "Position: ID_POSITION", fontSize: 11 },
                  ],
                  [
                    { text: "Strengths:: ID_STRENGTH", fontSize: 11 },
                    {
                      text: "Opportunities for Improvement: ID_IMPROVEMENT",
                      fontSize: 11,
                    },
                  ],
                ],
              },
            },
          ],
          [
            { text: "G", bold: true },
            {
              layout: {
                hLineColor: function (rowIndex, node, columnIndex) {
                  if (rowIndex === node.table.body.length) {
                    return "#FFFFFF";
                  } else if (rowIndex % 2 === 0) {
                    return "#000000";
                  } else {
                    return "#FFFFFF";
                  }
                },
                vLineWidth: function (i) {
                  return 0;
                },
              },
              table: {
                widths: ["*", "*"],
                body: [
                  [
                    { text: "Name: ID_NAME", fontSize: 11 },
                    { text: "Position: ID_POSITION", fontSize: 11 },
                  ],
                  [
                    { text: "Strengths:: ID_STRENGTH", fontSize: 11 },
                    {
                      text: "Opportunities for Improvement: ID_IMPROVEMENT",
                      fontSize: 11,
                    },
                  ],
                ],
              },
            },
          ],
          [
            { text: "8.", bold: true },
            {
              text: "Branch offices, affiliiates, satelites or divisions:",
              bold: true,
            },
          ],
          [
            "",
            {
              table: {
                widths: ["*", "*", "*", "*"],
                headerLines: 1,
                body: [
                  [
                    {
                      text: "Name of unit:",
                      fontSize: 11,
                      border: [false, false, false, false],
                      bold: true,
                    },
                    {
                      text: "Location:",
                      fontSize: 11,
                      border: [false, false, false, false],
                      bold: true,
                    },
                    {
                      text: "Phone:",
                      fontSize: 11,
                      border: [false, false, false, false],
                      bold: true,
                    },
                    {
                      text: "Person in charge:",
                      fontSize: 11,
                      border: [false, false, false, false],
                      bold: true,
                    },
                  ],
                  [
                    {
                      text: "ID_UNIT_NAME",
                      fontSize: 11,
                      border: [false, true, true, true],
                    },
                    { text: "ID_LOCATION", fontSize: 11 },
                    { text: "ID_PHONE", fontSize: 11 },
                    {
                      text: "ID_PERSON_IN_CHARGE",
                      fontSize: 11,
                      border: [true, true, false, true],
                    },
                  ],
                  [
                    {
                      text: "ID_UNIT_NAME",
                      fontSize: 11,
                      border: [false, true, true, true],
                    },
                    { text: "ID_LOCATION", fontSize: 11 },
                    { text: "ID_PHONE", fontSize: 11 },
                    {
                      text: "ID_PERSON_IN_CHARGE",
                      fontSize: 11,
                      border: [true, true, false, true],
                    },
                  ],
                  [
                    {
                      text: "ID_UNIT_NAME",
                      fontSize: 11,
                      border: [false, true, true, true],
                    },
                    { text: "ID_LOCATION", fontSize: 11 },
                    { text: "ID_PHONE", fontSize: 11 },
                    {
                      text: "ID_PERSON_IN_CHARGE",
                      fontSize: 11,
                      border: [true, true, false, true],
                    },
                  ],
                  [
                    {
                      text: "ID_UNIT_NAME",
                      fontSize: 11,
                      border: [false, true, true, true],
                    },
                    { text: "ID_LOCATION", fontSize: 11 },
                    { text: "ID_PHONE", fontSize: 11 },
                    {
                      text: "ID_PERSON_IN_CHARGE",
                      fontSize: 11,
                      border: [true, true, false, true],
                    },
                  ],
                ],
              },
            },
          ],
        ],
      },
      layout: {
        hLineColor: function (rowIndex, node, columnIndex) {
          if (rowIndex === node.table.body.length) {
            return "#FFFFFF";
          } else if (rowIndex % 2 === 0) {
            return "#000000";
          } else {
            return "#FFFFFF";
          }
        },
        vLineWidth: function (i) {
          return 0;
        },
      },
    },
  ],

  styles: {
    header_left: {
      alignment: "right",
    },
  },
  images: {
    icon: "url('data:image/png;base64,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')",
  },
};`;
export default js;
